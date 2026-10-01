/* Shared procedural effects for the preview and cancellable story cues. */
(() => {
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const easeOut = n => 1 - (1 - clamp(n)) ** 3;
  const easeInOut = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const fadeEnd = (t, from, end) => 1 - easeInOut((t - from) / (end - from));
  function random(seed) {
    return () => {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let x = Math.imul(seed ^ seed >>> 15, 1 | seed);
      x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x;
      return ((x ^ x >>> 14) >>> 0) / 4294967296;
    };
  }
  const rand = random(98342);
  const inkRays = Array.from({length: 86}, (_, i) => ({
    angle: i * Math.PI * 2 / 86 + (rand() - .5) * .028,
    start: .20 + rand() * .19,
    width: .002 + (rand() ** 3) * .025,
    gray: rand(),
    end: 1.1 + rand() * .3
  }));
  const blood = Array.from({length: 84}, () => ({
    angle: rand() * Math.PI * 2,
    speed: .12 + rand() * .85,
    size: 1.8 + (rand() ** 2) * 15,
    lag: rand() * .15,
    stretch: 1 + rand() * 3,
    tone: rand()
  }));
  const splashArms = Array.from({length: 17}, (_, i) => ({
    angle: i * Math.PI * 2 / 17 + (rand() - .5) * .24,
    reach: .12 + rand() * .38,
    width: .012 + rand() * .035
  }));
  const teeth = Array.from({length: 14}, (_, i) => ({
    x: (i + .5) / 14,
    depth: .065 + rand() * .115,
    width: .025 + rand() * .025,
    lean: (rand() - .5) * .04
  }));
  const edgeBlood = Array.from({length: 28}, (_, i) => ({
    edge: i % 4,
    position: .04 + rand() * .92,
    depth: .045 + rand() * .065,
    width: .020 + rand() * .027,
    lag: rand() * .035,
    lean: (rand() - .5) * .8,
    tone: rand()
  }));
  const poisonDrops = Array.from({length: 18}, (_, i) => ({
    side: i % 2,
    inset: .04 + rand() * .10,
    size: .012 + rand() * .019,
    delay: (i % 9) * .10,
    phase: rand() * Math.PI * 2,
    speed: .78 + rand() * .23
  }));
  const motes = Array.from({length: 28}, () => ({
    x: .12 + rand() * .76,
    y: .75 + rand() * .3,
    delay: rand() * .55,
    speed: .25 + rand() * .65,
    size: 7 + rand() * 18,
    sway: (rand() - .5) * .3
  }));
  function vignette(ctx, w, h, color, strength) {
    const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * .12, w / 2, h / 2, Math.max(w, h) * .68);
    g.addColorStop(0, `rgba(${color},0)`);
    g.addColorStop(1, `rgba(${color},${strength})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }
  function edgeTint(ctx, w, h, color, strength, reach) {
    // Four border gradients leave the middle entirely transparent.
    for (const [x0,y0,x1,y1,x,y,rw,rh] of [
      [0,0,0,h*reach,0,0,w,h*reach],
      [0,h,0,h*(1-reach),0,h*(1-reach),w,h*reach],
      [0,0,w*reach,0,0,0,w*reach,h],
      [w,0,w*(1-reach),0,w*(1-reach),0,w*reach,h]
    ]) {
      const g=ctx.createLinearGradient(x0,y0,x1,y1);
      g.addColorStop(0,`rgba(${color},${strength})`);
      g.addColorStop(.23,`rgba(${color},${strength*.53})`);
      g.addColorStop(.62,`rgba(${color},${strength*.14})`);
      g.addColorStop(1,`rgba(${color},0)`);
      ctx.fillStyle=g;ctx.fillRect(x,y,rw,rh);
    }
  }
  function curvePoint(u, w, h) {
    const p0 = [-.07 * w, .78 * h], p1 = [.23 * w, .78 * h];
    const p2 = [.59 * w, .53 * h], p3 = [1.08 * w, .11 * h];
    const a = 1 - u;
    return [a ** 3 * p0[0] + 3 * a * a * u * p1[0] + 3 * a * u * u * p2[0] + u ** 3 * p3[0],
      a ** 3 * p0[1] + 3 * a * a * u * p1[1] + 3 * a * u * u * p2[1] + u ** 3 * p3[1]];
  }
  function strokeSegment(ctx, from, to, w, h) {
    const steps = 55;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const [x, y] = curvePoint(from + (to - from) * i / steps, w, h);
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  function drawSurprise(ctx, w, h, t) {
    const opacity = clamp(t / .045) * fadeEnd(t, .61, .84);
    ctx.save(); ctx.globalAlpha = opacity;
    const scale = 1.09 - .09 * easeOut(t / .16);
    ctx.translate(w / 2, h / 2); ctx.scale(scale, scale);
    for (const ray of inkRays) {
      const a = ray.angle, b = a + ray.width;
      const inner = .27 + ray.start * .3, outer = ray.end;
      ctx.fillStyle = '#08090a';
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * w * inner, Math.sin(a) * h * inner);
      ctx.lineTo(Math.cos(a - ray.width * .3) * w * outer, Math.sin(a - ray.width * .3) * h * outer);
      ctx.lineTo(Math.cos(b) * w * outer, Math.sin(b) * h * outer);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  function drawSlash(ctx, w, h, t) {
    const sweep = easeOut(t / .17);
    const visibility = fadeEnd(t, .24, .52);
    ctx.save();
    if (t < .17) {
      ctx.fillStyle = `rgba(234,249,255,${.78 * Math.sin(Math.PI * clamp(t / .17))})`;
      ctx.fillRect(0, 0, w, h);
    }
    if (sweep > 0) {
      const from = Math.max(0, sweep - .56);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      for (const [width, color, blur, alpha] of [
        [42, '#4b9edd', 30, .30], [21, '#98dbff', 20, .72],
        [8, '#fff1c9', 10, .95], [2.5, '#fff', 2, 1]
      ]) {
        ctx.save(); ctx.globalAlpha = alpha * visibility;
        ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.shadowColor = color; ctx.shadowBlur = blur;
        strokeSegment(ctx, from, sweep, w, h); ctx.restore();
      }
      const [x, y] = curvePoint(sweep, w, h);
      for (let i = 0; i < 17; i++) {
        const a = i * 2.399 + .6, distance = (i % 5 + 1) * Math.min(w, h) * .018 * Math.min(1, t / .13);
        ctx.save(); ctx.globalAlpha = visibility * (.7 - i / 40);
        ctx.strokeStyle = i % 4 ? '#dcf5ff' : '#f9d8a1';
        ctx.lineWidth = i % 3 ? 1.4 : 2.4; ctx.shadowBlur = 8; ctx.shadowColor = '#fff';
        ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * distance, y + Math.sin(a) * distance);
        ctx.lineTo(x + Math.cos(a) * (distance + 11), y + Math.sin(a) * (distance + 11));
        ctx.stroke(); ctx.restore();
      }
    }
    ctx.restore();
  }
  function bloodSpray(ctx, w, h, t, power, originX = .5, originY = .5) {
    const cx = w * originX, cy = h * originY, unit = Math.min(w, h);
    blood.forEach((drop, i) => {
      const u = clamp((t - drop.lag) / .55);
      if (u <= 0) return;
      const travel = easeOut(u) * drop.speed * unit * power;
      const x = cx + Math.cos(drop.angle) * travel;
      const y = cy + Math.sin(drop.angle) * travel + u * u * unit * .09;
      const a = fadeEnd(t, .62, 1.1) * Math.min(1, u * 8);
      ctx.save(); ctx.globalAlpha = a * (drop.tone < .15 ? .55 : .9);
      ctx.translate(x, y); ctx.rotate(drop.angle);
      ctx.fillStyle = drop.tone < .24 ? '#5b0910' : drop.tone < .7 ? '#a30918' : '#df2830';
      ctx.beginPath(); ctx.ellipse(0, 0, drop.size * drop.stretch * .8, drop.size * .42, 0, 0, Math.PI * 2); ctx.fill();
      if (i % 9 === 0) { ctx.strokeStyle = '#5b0910'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(-drop.size * 2, 0); ctx.lineTo(drop.size * 2, 0); ctx.stroke(); }
      ctx.restore();
    });
  }
  function bloodBlot(ctx, w, h, t, power, originX = .5, originY = .5) {
    if (t < 0) return;
    const cx = w * originX, cy = h * originY, unit = Math.min(w, h);
    const grow = easeOut(t / .14), alpha = fadeEnd(t, .47, .9);
    ctx.save();ctx.globalAlpha = alpha * .78;
    ctx.fillStyle = '#750410';ctx.shadowColor = '#c01821';ctx.shadowBlur = unit * .035;
    splashArms.forEach(arm => {
      const a = arm.angle, reach = arm.reach * unit * power * grow;
      const side = arm.width * unit * power;
      const base = unit * .045 * grow;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a - .5) * base, cy + Math.sin(a - .5) * base);
      ctx.quadraticCurveTo(cx + Math.cos(a - .13) * reach * .57, cy + Math.sin(a - .13) * reach * .57,
        cx + Math.cos(a) * reach, cy + Math.sin(a) * reach);
      ctx.quadraticCurveTo(cx + Math.cos(a + .13) * reach * .6 + Math.sin(a) * side,
        cy + Math.sin(a + .13) * reach * .6 - Math.cos(a) * side,
        cx + Math.cos(a + .5) * base, cy + Math.sin(a + .5) * base);
      ctx.closePath();ctx.fill();
    });
    ctx.beginPath();ctx.ellipse(cx,cy,unit*.095*grow,unit*.058*grow,-.24,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function jaw(ctx, w, h, top, t) {
    const attackTime = top ? t : t - .035;
    const close = attackTime < .23 ? easeOut(attackTime / .23) : 1 - easeInOut((attackTime - .47) / .49) * .95;
    const bob = t > .23 && t < .48 ? Math.sin((t - .23) * (top ? 26 : 23)) * .014 * h : 0;
    const edge = top ? (-.23 + close * .63) * h + bob : (1.23 - close * .63) * h - bob;
    ctx.save();
    ctx.fillStyle = top ? '#24090e' : '#1a0710';
    ctx.strokeStyle = '#a52e31'; ctx.lineWidth = Math.max(3, w * .006);
    ctx.beginPath(); ctx.moveTo(0, top ? 0 : h); ctx.lineTo(w, top ? 0 : h);
    ctx.lineTo(w, edge);
    for (let i = teeth.length - 1; i >= 0; i--) {
      const tooth = teeth[i], x = tooth.x * w;
      const arch = (1 - (2 * tooth.x - 1) ** 2) * h * .065 * (top ? 1 : -1);
      const base = edge + arch + Math.sin(i * 2.1 + t * 11 + (top ? 0 : 1.5)) * h * .015;
      const depth = tooth.depth * (top ? 1 : .75 + .24 * Math.sin(i * 3.1));
      ctx.lineTo(x + tooth.width * w, base);
      ctx.quadraticCurveTo(x + tooth.lean * w, base + (top ? 1 : -1) * depth * h * .45,
        x + tooth.lean * w, base + (top ? 1 : -1) * depth * h);
      ctx.quadraticCurveTo(x - tooth.width * w * .35, base + (top ? 1 : -1) * depth * h * .3,
        x - tooth.width * w, base);
    }
    ctx.lineTo(0, edge); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function drawBite(ctx, w, h, t) {
    const a = fadeEnd(t, .84, 1.18);
    ctx.save(); ctx.globalAlpha = a;
    vignette(ctx, w, h, '95,3,14', .69 * easeOut(t / .18));
    jaw(ctx, w, h, true, t); jaw(ctx, w, h, false, t);
    if (t > .19) {
      bloodBlot(ctx, w, h, t - .21, .69, .48, .47);
      bloodSpray(ctx, w, h, t - .18, .78, .48, .47);
      ctx.fillStyle = `rgba(230,32,32,${.24 * fadeEnd(t, .43, .8)})`;ctx.fillRect(0, 0, w, h);
    }
    ctx.restore();
  }
  function drawHit(ctx, w, h, t) {
    const attack = easeOut(t / .035), recovery = fadeEnd(t, .14, .60);
    ctx.save();ctx.globalAlpha = attack * recovery;
    edgeTint(ctx,w,h,'193,9,26',.94,.17);
    edgeBlood.forEach(drop => {
      const grow=easeOut((t-drop.lag)/.11);
      if(!grow)return;
      const horizontal=drop.edge%2===0;
      const across=horizontal?w:h, inward=horizontal?h:w;
      const width=across*drop.width, depth=inward*drop.depth*grow;
      ctx.save();
      if(drop.edge===0)ctx.translate(drop.position*w,-1);
      else if(drop.edge===1){ctx.translate(w+1,drop.position*h);ctx.rotate(Math.PI/2)}
      else if(drop.edge===2){ctx.translate(drop.position*w,h+1);ctx.rotate(Math.PI)}
      else{ctx.translate(-1,drop.position*h);ctx.rotate(-Math.PI/2)}
      const lean=width*drop.lean;
      const g=ctx.createLinearGradient(0,0,0,Math.max(1,depth));
      g.addColorStop(0,drop.tone>.45?'rgba(139,3,19,.88)':'rgba(173,8,24,.85)');
      g.addColorStop(.75,'rgba(167,12,31,.76)');
      g.addColorStop(1,'rgba(128,4,20,.48)');
      ctx.fillStyle=g;
      ctx.beginPath();ctx.moveTo(-width,-3);
      ctx.bezierCurveTo(-width*.96,depth*.35,-width*.46,depth*.20,lean-width*.38,depth*.70);
      ctx.bezierCurveTo(lean-width*.35,depth*1.12,lean+width*.28,depth*1.10,lean+width*.37,depth*.73);
      ctx.bezierCurveTo(lean+width*.46,depth*.37,width*.91,depth*.53,width,-3);
      ctx.closePath();ctx.fill();
      // Small spatters originate at the border and travel only a short distance inward.
      for(let i=0;i<3;i++){
        const y=depth*(1.03+i*.22), x=lean+Math.sin(drop.position*37+i*2.3)*width*.8;
        const size=Math.min(w,h)*(.0028+i*.0012)*grow;
        ctx.fillStyle='rgba(149,4,23,.72)';ctx.beginPath();
        ctx.ellipse(x,y,size*.65,size*(1.4-i*.23),drop.lean,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    });
    ctx.restore();
  }
  function drawPoison(ctx, w, h, t) {
    const opacity=easeOut(t/.24)*fadeEnd(t,2.55,3.35);
    ctx.save();ctx.globalAlpha=opacity;
    edgeTint(ctx,w,h,'84,158,42',.74,.16);
    poisonDrops.forEach(drop=>{
      const age=t-drop.delay;
      if(age<=0||age>=2.45)return;
      const u=age/2.45;
      const alpha=Math.min(1,age/.20)*fadeEnd(age,1.94,2.45)*opacity;
      const inset=drop.inset+Math.sin(age*2.5+drop.phase)*.012;
      const x=w*(drop.side?1-inset:inset), y=h*(1.06-u*1.22*drop.speed);
      const r=Math.min(w,h)*drop.size*(.8+.2*Math.sin(u*Math.PI));
      ctx.save();ctx.globalAlpha=alpha*.72;
      const g=ctx.createRadialGradient(x-r*.32,y-r*.36,r*.05,x,y,r);
      g.addColorStop(0,'rgba(225,249,158,.72)');
      g.addColorStop(.35,'rgba(160,210,81,.46)');
      g.addColorStop(.80,'rgba(68,141,46,.20)');
      g.addColorStop(1,'rgba(181,225,101,.48)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(210,237,150,.30)';ctx.lineWidth=.65;ctx.stroke();
      ctx.strokeStyle='rgba(240,255,212,.5)';ctx.lineWidth=Math.max(.6,r*.09);
      ctx.beginPath();ctx.arc(x-r*.12,y-r*.10,r*.62,Math.PI*1.10,Math.PI*1.60);ctx.stroke();
      ctx.restore();
    });
    ctx.restore();
  }
  function heart(ctx, x, y, r) {
    ctx.beginPath();ctx.moveTo(x, y + r * .8);
    ctx.bezierCurveTo(x - r * .4, y + r * .4, x - r * 1.3, y - r * .2, x - r * .7, y - r * .7);
    ctx.bezierCurveTo(x - r * .25, y - r * 1.1, x, y - r * .65, x, y - r * .42);
    ctx.bezierCurveTo(x, y - r * .65, x + r * .25, y - r * 1.1, x + r * .7, y - r * .7);
    ctx.bezierCurveTo(x + r * 1.3, y - r * .2, x + r * .4, y + r * .4, x, y + r * .8);ctx.closePath();
  }
  function drawMotes(ctx, w, h, t, type) {
    const particles=type==='hearts'?motes.filter((_,i)=>i%3===0):motes;
    particles.forEach((m, i) => {
      const u = clamp((t - (type==='hearts'?i*.12:m.delay)) / (type === 'hearts' ? 2.35 : 1.35));
      if (!u || u >= 1) return;
      const baseX=type==='hearts'?.10+i*.8/(particles.length-1):m.x;
      const x = w * (baseX + Math.sin(u * 5 + i) * m.sway * .15);
      const y = h * (m.y - u * m.speed);
      ctx.save();ctx.translate(x,y);ctx.globalAlpha=Math.sin(Math.PI * u) * (type==='hearts'?.66:.85);
      ctx.shadowBlur=type==='hearts'?7:20;ctx.shadowColor=type==='hearts'?'rgba(255,191,212,.22)':'#fff0b2';
      if(type==='hearts'){
        heart(ctx,0,0,m.size);const g=ctx.createLinearGradient(-m.size,-m.size,m.size,m.size);
        g.addColorStop(0,'#fff7f5');g.addColorStop(.45,'#f9d7e1');g.addColorStop(1,'#efbdd0');
        ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='rgba(255,234,241,.18)';ctx.lineWidth=.45;ctx.stroke();
      }else{
        ctx.fillStyle='#fff7d8';ctx.beginPath();ctx.moveTo(0,-m.size);
        ctx.quadraticCurveTo(m.size*.12,-m.size*.12,m.size,0);
        ctx.quadraticCurveTo(m.size*.12,m.size*.12,0,m.size);
        ctx.quadraticCurveTo(-m.size*.12,m.size*.12,-m.size,0);
        ctx.quadraticCurveTo(-m.size*.12,-m.size*.12,0,-m.size);ctx.fill();
      }
      ctx.restore();
    });
  }
  const durations={surprise:.84,slash:.55,bite:1.18,hit:.60,poison:3.35,hearts:3.6,sparkle:2.1};
  class EffectDirector {
    constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.frame=0;this.type=null;this.start=0;}
    clear(){cancelAnimationFrame(this.frame);this.type=null;const {ctx,canvas}=this;ctx.clearRect(0,0,canvas.width,canvas.height)}
    play(type){this.clear();if(!durations[type])return;this.type=type;this.start=performance.now();this.tick(this.start)}
    tick(now){
      if(!this.type)return;
      if(this.canvas.classList.contains('story-effect-canvas')){
        const host=this.canvas.closest('.demon-route')||this.canvas.closest('.game');
        const panel=host?.querySelector('.panel');
        if(panel){
          const height=Math.max(1,panel.getBoundingClientRect().top);
          this.canvas.style.height=height+'px';
        }
      }
      const rect=this.canvas.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,1.5);
      const w=Math.max(1,rect.width), h=Math.max(1,rect.height);
      if(this.canvas.width!==Math.round(w*dpr)||this.canvas.height!==Math.round(h*dpr)){
        this.canvas.width=Math.round(w*dpr);this.canvas.height=Math.round(h*dpr);
      }
      const ctx=this.ctx,t=(now-this.start)/1000;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      if(this.type==='surprise')drawSurprise(ctx,w,h,t);
      else if(this.type==='slash')drawSlash(ctx,w,h,t);
      else if(this.type==='bite')drawBite(ctx,w,h,t);
      else if(this.type==='hit')drawHit(ctx,w,h,t);
      else if(this.type==='poison')drawPoison(ctx,w,h,t);
      else drawMotes(ctx,w,h,t,this.type);
      if(t<durations[this.type])this.frame=requestAnimationFrame(next=>this.tick(next));
      else this.clear();
    }
  }
  // Short, cancellable scene cues reuse the same effects as the preview.
  class EffectCuePlayer {
    constructor(canvas,flash){this.director=new EffectDirector(canvas);this.flash=flash;this.pending=[];this.generation=0;}
    clear(){
      this.generation++;this.pending.forEach(clearTimeout);this.pending=[];
      this.director.clear();this.flash.classList.remove('active');
    }
    play(cues=[]){
      this.clear();
      const host=this.director.canvas.closest('.demon-route')||this.director.canvas.closest('.game');
      const panel=host?.querySelector('.panel');
      if(panel)this.flash.style.height=Math.max(1,panel.getBoundingClientRect().top)+'px';
      const generation=this.generation;
      for(const [delay,type] of cues){
        const run=()=>{
          if(generation!==this.generation)return;
          if(type==='flash'){this.flash.classList.remove('active');void this.flash.offsetWidth;this.flash.classList.add('active')}
          else this.director.play(type);
        };
        if(delay===0)run();else this.pending.push(setTimeout(run,delay));
      }
    }
  }
  window.EffectDirector=EffectDirector;
  window.EffectCuePlayer=EffectCuePlayer;
})();
