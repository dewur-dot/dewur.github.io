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
  // ── 빛의 참격: 직선으로 번쩍 그어지고, 공간이 갈라지듯 흩어진다 ──
  // 한 번의 참격(cut): 0~.045초 칼끝이 화면을 가로지름 → ~.10초 최대 섬광 → 이후 갈라진 두 줄이 벌어지며 사라짐
  function drawCut(ctx, w, h, u, c) {
    if (u < 0 || u > .62) return;
    const diag = Math.hypot(w, h), len = diag * c.len, cx = w * c.x, cy = h * c.y;
    const dx = Math.cos(c.a), dy = Math.sin(c.a), nx = -dy, ny = dx;
    const p0 = [cx - dx * len / 2, cy - dy * len / 2];
    const draw = easeOut(u / .045);                     // 칼끝 진행도
    const peak = u < .045 ? 1 : 1 - easeInOut((u - .045) / .38);
    const tip = [p0[0] + dx * len * draw, p0[1] + dy * len * draw];
    const thick = (c.w || 1) * Math.min(w, h) * .011 * (u < .1 ? 1 : 1 - easeInOut((u - .1) / .25) * .85);
    const blade = (half, alpha, color, blur) => {      // 가운데가 두껍고 양끝이 뾰족한 칼날 모양
      const mx = (p0[0] + tip[0]) / 2, my = (p0[1] + tip[1]) / 2;
      ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = blur;
      ctx.beginPath(); ctx.moveTo(p0[0], p0[1]);
      ctx.quadraticCurveTo(mx + nx * half, my + ny * half, tip[0], tip[1]);
      ctx.quadraticCurveTo(mx - nx * half, my - ny * half, p0[0], p0[1]);
      ctx.fill(); ctx.restore();
    };
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    if (u < .3) {
      blade(thick * 3.2, .35 * peak, c.glow || '#7fd6ff', 34);
      blade(thick * 1.6, .7 * peak, '#cdf3ff', 16);
      blade(thick * .55, peak, '#ffffff', 6);
    }
    // 칼끝의 번뜩임
    if (u < .07) {
      const g = ctx.createRadialGradient(tip[0], tip[1], 0, tip[0], tip[1], thick * 9);
      g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.3, 'rgba(190,240,255,.5)'); g.addColorStop(1, 'rgba(120,200,255,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(tip[0], tip[1], thick * 9, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(tip[0] - nx * thick * 7, tip[1] - ny * thick * 7); ctx.lineTo(tip[0] + nx * thick * 7, tip[1] + ny * thick * 7); ctx.stroke();
    }
    // 잘린 자국: 두 줄로 갈라져 벌어지며 사라진다
    if (u > .06) {
      const v = clamp((u - .06) / .56), gap = easeOut(v) * Math.min(w, h) * .012 * (c.w || 1), a = (1 - v) * .9;
      for (const sgn of [-1, 1]) {
        ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = sgn < 0 ? '#bfefff' : '#fff3d6'; ctx.lineWidth = 1.3; ctx.shadowColor = '#9fe3ff'; ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(p0[0] + nx * gap * sgn + dx * len * v * .08, p0[1] + ny * gap * sgn + dy * len * v * .08);
        ctx.lineTo(p0[0] + dx * len * (1 - v * .08) + nx * gap * sgn, p0[1] + dy * len * (1 - v * .08) + ny * gap * sgn);
        ctx.stroke(); ctx.restore();
      }
    }
    // 칼선을 따라 튀는 빛 조각
    if (u > .03 && u < .5) {
      const v = clamp((u - .03) / .47);
      for (let k = 0; k < c.sparks.length; k++) {
        const sp = c.sparks[k], along = sp.t * draw, d = easeOut(v) * sp.d * Math.min(w, h) * .09;
        const bx = p0[0] + dx * len * along, by = p0[1] + dy * len * along;
        const ox = nx * d * sp.side + dx * d * .35, oy = ny * d * sp.side + dy * d * .35;
        ctx.save(); ctx.globalAlpha = (1 - v) * .9; ctx.strokeStyle = sp.gold ? '#ffe2a8' : '#e6f8ff'; ctx.lineWidth = sp.size; ctx.shadowColor = '#fff'; ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.moveTo(bx + ox, by + oy); ctx.lineTo(bx + ox * 1.25 + dx * 6, by + oy * 1.25 + dy * 6); ctx.stroke(); ctx.restore();
      }
    }
    ctx.restore();
  }
  function makeCut(r, o) {
    const sparks = Array.from({length: o.sparks ?? 14}, () => ({t: r(), d: .25 + r(), side: r() < .5 ? -1 : 1, size: .8 + r() * 1.8, gold: r() < .3}));
    return {x: .5, y: .5, len: 1.15, w: 1, ...o, sparks};
  }
  const slashSets = (() => {
    const r = random(77031), deg = d => d * Math.PI / 180;
    const set1 = [makeCut(r, {at: 0, a: deg(152), x: .52, y: .48, len: 1.25, w: 1.25})];
    const set2 = [
      makeCut(r, {at: 0, a: deg(150), x: .5, y: .46, len: 1.2, w: 1.05}),
      makeCut(r, {at: .14, a: deg(28), x: .48, y: .52, len: 1.2, w: 1.05}),
      makeCut(r, {at: .3, a: deg(178), x: .5, y: .5, len: 1.3, w: 1.3})
    ];
    const set3 = [];
    for (let i = 0; i < 20; i++) set3.push(makeCut(r, {at: i * .043 + r() * .02, a: r() * Math.PI, x: .22 + r() * .56, y: .22 + r() * .56, len: .45 + r() * .5, w: .55 + r() * .45, sparks: 6}));
    set3.push(makeCut(r, {at: 1.08, a: deg(172), x: .5, y: .5, len: 1.4, w: 1.7, sparks: 26, glow: '#ffd98a'}));
    return {slash1: {cuts: set1, end: .8}, slash2: {cuts: set2, end: 1.05}, slash3: {cuts: set3, end: 1.85, dim: [.12, 1.3]}};
  })();
  function drawSlashSet(ctx, w, h, t, name) {
    const set = slashSets[name];
    // 난도질(3)은 화면을 살짝 어둡게 눌러 빛을 돋보이게 한다
    if (set.dim) {
      const a = t < set.dim[1] ? .28 * clamp(t / set.dim[0]) : .28 * (1 - clamp((t - set.dim[1]) / .35));
      if (a > 0) { ctx.fillStyle = `rgba(6,8,20,${a})`; ctx.fillRect(0, 0, w, h); }
    }
    // 그어지는 순간마다 짧은 섬광
    let flash = 0;
    for (const c of set.cuts) { const u = t - c.at; if (u >= 0 && u < .12) flash = Math.max(flash, (c.w > 1.4 ? .55 : c.w > 1 ? .32 : .16) * (1 - u / .12)); }
    if (flash > 0) { ctx.fillStyle = `rgba(236,250,255,${flash})`; ctx.fillRect(0, 0, w, h); }
    for (const c of set.cuts) drawCut(ctx, w, h, t - c.at, c);
  }
  function drawSlash(ctx, w, h, t) { drawSlashSet(ctx, w, h, t, 'slash1'); }
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
  // ── 짐승의 습격: 검은 그림자가 덮쳐 오고 → 발톱이 두 번(X자) 화면을 찢고 → 상처에서 피가 튀고 흘러내린다 ──
  const beastRand = random(5521);
  const makeSwipe = (at, a, b) => ({at, a, b, claws: [-1, 0, 1].map(k => ({off: k * .085 + (beastRand() - .5) * .025, lag: (k + 1) * .018 + beastRand() * .01,
    jit: Array.from({length: 30}, () => beastRand() - .5),
    drops: Array.from({length: 9}, () => ({p: .15 + beastRand() * .7, v: .5 + beastRand(), r: .5 + beastRand(), side: beastRand() < .5 ? -1 : 1, sp: .6 + beastRand() * 1.2}))}))});
  const swipes = [makeSwipe(.14, [.86, .1], [.2, .9]), makeSwipe(.42, [.12, .14], [.84, .88])];
  const lungeStreaks = Array.from({length: 26}, () => ({y: beastRand(), len: .2 + beastRand() * .5, w: .002 + beastRand() * .006, d: beastRand()}));
  function clawTear(ctx, w, h, u, sw, c) {
    if (u <= 0) return;
    const unit = Math.min(w, h), draw = easeOut(clamp(u / .07));
    const dX = (sw.b[0] - sw.a[0]) * w, dY = (sw.b[1] - sw.a[1]) * h, dl = Math.hypot(dX, dY), nx = -dY / dl, ny = dX / dl, o = c.off * unit;
    const ax = sw.a[0] * w + nx * o, ay = sw.a[1] * h + ny * o, n = c.jit.length, pts = [];
    for (let k = 0; k < n; k++) {
      const f = k / (n - 1), tt = f * draw;
      const wid = unit * .026 * Math.sin(Math.PI * f) ** .6 * (.75 + .5 * Math.abs(c.jit[(k * 7) % n])), j = c.jit[k] * unit * .01;
      pts.push([ax + dX * tt, ay + dY * tt, wid, j]);
    }
    const shape = scale => { ctx.beginPath(); pts.forEach(([x, y, wd, j], k) => { const X = x + nx * (wd * scale + j), Y = y + ny * (wd * scale + j); k ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }); for (let k = n - 1; k >= 0; k--) { const [x, y, wd, j] = pts[k]; ctx.lineTo(x - nx * (wd * scale - j), y - ny * (wd * scale - j)); } ctx.closePath(); };
    const fade = fadeEnd(u, .6, 1.05);
    ctx.save(); ctx.globalAlpha = fade;
    ctx.shadowColor = '#ff1e2e'; ctx.shadowBlur = 26; ctx.fillStyle = 'rgba(150,8,20,.7)'; shape(1.6); ctx.fill();
    ctx.shadowBlur = 0; ctx.fillStyle = '#16020a'; shape(1); ctx.fill();
    const hot = clamp(1 - (u - .03) / .12);
    ctx.fillStyle = `rgba(255,${Math.round(90 + 150 * hot)},${Math.round(70 + 150 * hot)},.95)`; ctx.shadowColor = '#ff5a40'; ctx.shadowBlur = 10; shape(.32); ctx.fill();
    ctx.restore();
    // 발톱 끝의 하얀 궤적(긋는 순간만)
    if (u < .11) {
      const [hx, hy] = pts[n - 1], tail = .35;
      ctx.save(); ctx.globalAlpha = 1 - u / .11; ctx.strokeStyle = '#fff4ec'; ctx.lineCap = 'round'; ctx.lineWidth = unit * .008; ctx.shadowColor = '#ff6a5a'; ctx.shadowBlur = 18;
      ctx.beginPath(); ctx.moveTo(hx - dX * tail * draw, hy - dY * tail * draw); ctx.lineTo(hx, hy); ctx.stroke(); ctx.restore();
    }
    // 상처에서 튀는 피와 흘러내리는 피
    if (u > .04) {
      const v = u - .04;
      ctx.save(); ctx.fillStyle = '#a00d1c';
      for (const d of c.drops) {
        const bx = ax + dX * d.p, by = ay + dY * d.p;
        // 튀는 방울
        const fly = clamp(v / .35), px = bx + nx * d.side * unit * .16 * d.sp * easeOut(fly), py = by + ny * d.side * unit * .16 * d.sp * easeOut(fly) + h * .25 * fly * fly;
        ctx.globalAlpha = (1 - fly) * fade;
        ctx.beginPath(); ctx.arc(px, py, unit * .011 * d.r * (1.2 - fly * .5), 0, Math.PI * 2); ctx.fill();
        // 흘러내림
        const drip = clamp((v - .08) / .9), len = h * .14 * d.v * easeOut(drip);
        if (drip > 0) {
          ctx.globalAlpha = .9 * fade; const r = unit * .006 * d.r;
          ctx.beginPath(); ctx.moveTo(bx - r, by); ctx.lineTo(bx + r, by); ctx.lineTo(bx + r * .7, by + len); ctx.arc(bx, by + len, r * 1.5, 0, Math.PI); ctx.closePath(); ctx.fill();
        }
      }
      ctx.restore();
    }
  }
  function drawBite(ctx, w, h, t) {
    ctx.save();
    // 검은 그림자가 옆에서 덮쳐 온다
    if (t < .2) {
      const u = t / .2, x = w * (1.25 - 1.6 * easeInOut(u));
      const g = ctx.createRadialGradient(x, h * .5, 0, x, h * .5, Math.max(w, h) * .55);
      g.addColorStop(0, `rgba(5,0,2,${.9 * (1 - u * .4)})`); g.addColorStop(.6, `rgba(20,0,6,${.5 * (1 - u * .4)})`); g.addColorStop(1, 'rgba(20,0,6,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      ctx.save(); ctx.globalAlpha = .5 * Math.sin(Math.PI * u); ctx.fillStyle = '#000';
      for (const l of lungeStreaks) { const sx = w * (1 - (u * 1.6 + l.d) % 1.4); ctx.fillRect(sx, l.y * h, w * l.len, h * l.w); }
      ctx.restore();
    }
    // 붉은 어둠(심장 박동처럼 두 번 조여 온다)
    const red = clamp(t / .14) * fadeEnd(t, .95, 1.4);
    const beat = 1 + .25 * Math.max(0, Math.sin((t - .14) * 22)) * clamp(1 - (t - .14) / .5);
    ctx.fillStyle = `rgba(20,0,4,${.3 * red})`; ctx.fillRect(0, 0, w, h);
    vignette(ctx, w, h, '110,0,14', Math.min(1, .6 * red * beat));
    // 발톱 두 번
    for (const sw of swipes) {
      const u = t - sw.at;
      if (u > 0 && u < .07) { ctx.fillStyle = `rgba(255,70,60,${.42 * (1 - u / .07)})`; ctx.fillRect(0, 0, w, h); }
      sw.claws.forEach(c => clawTear(ctx, w, h, u - c.lag, sw, c));
    }
    ctx.restore();
  }
  // ── 주먹: 한 방(punch1) / 우다다다 연타(punch2) ──
  const punchRand = random(9047);
  const burstSpikes = Array.from({length: 14}, () => .55 + punchRand() * .9);
  const speedLines = Array.from({length: 90}, () => ({a: punchRand() * Math.PI * 2, w: .004 + punchRand() * .012, inner: .34 + punchRand() * .22}));
  const debris = Array.from({length: 18}, () => ({a: punchRand() * Math.PI * 2, s: .5 + punchRand(), len: .4 + punchRand() * .8}));
  function focusLines(ctx, w, h, cx, cy, alpha, spin) {
    if (alpha <= 0) return;
    const R = Math.hypot(w, h);
    ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(255,250,235,.85)'; ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 3;
    for (const l of speedLines) {
      const a = l.a + spin, r0 = R * l.inner * .62;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a - l.w) * R, cy + Math.sin(a - l.w) * R);
      ctx.lineTo(cx + Math.cos(a + l.w) * R, cy + Math.sin(a + l.w) * R);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  function impact(ctx, w, h, u, p) {
    if (u < 0 || u > .5) return;
    const unit = Math.min(w, h) * p.s, cx = w * p.x, cy = h * p.y;
    ctx.save(); ctx.globalCompositeOperation = 'source-over';
    // 충격파 고리
    const ring = easeOut(u / .32);
    ctx.globalAlpha = (1 - ring) * .9; ctx.strokeStyle = '#fff6dc'; ctx.lineWidth = unit * .035 * (1 - ring) + 1;
    ctx.beginPath(); ctx.ellipse(cx, cy, unit * (.06 + .42 * ring), unit * (.05 + .34 * ring), p.rot, 0, Math.PI * 2); ctx.stroke();
    // 터지는 별(만화식 타격)
    const pop = u < .05 ? easeOut(u / .05) * 1.15 : 1.15 - .15 * easeOut((u - .05) / .1);
    const fade = fadeEnd(u, .1, .32);
    if (fade > 0) {
      ctx.globalAlpha = fade; ctx.translate(cx, cy); ctx.rotate(p.rot); ctx.scale(pop, pop);
      const spikes = burstSpikes.length;
      const star = (r0, r1, fill) => {
        ctx.fillStyle = fill; ctx.beginPath();
        for (let k = 0; k < spikes * 2; k++) {
          const a = k / (spikes * 2) * Math.PI * 2, r = k % 2 ? r0 : r1 * burstSpikes[k >> 1];
          k ? ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.closePath(); ctx.fill();
      };
      star(unit * .07, unit * .2, '#ff9f2e');
      star(unit * .055, unit * .15, '#ffe27a');
      star(unit * .04, unit * .1, '#ffffff');
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    ctx.restore();
    // 튀는 파편
    if (u > .02 && u < .4) {
      const v = (u - .02) / .38;
      ctx.save(); ctx.globalAlpha = 1 - v; ctx.strokeStyle = '#fff1c4'; ctx.lineCap = 'round';
      for (const d of debris) {
        const r = unit * (.1 + d.s * .35 * easeOut(v));
        ctx.lineWidth = 2 + d.s * 2;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(d.a) * r, cy + Math.sin(d.a) * r);
        ctx.lineTo(cx + Math.cos(d.a) * (r + unit * .05 * d.len), cy + Math.sin(d.a) * (r + unit * .05 * d.len)); ctx.stroke();
      }
      ctx.restore();
    }
    // 맞는 순간의 섬광
    if (u < .07) { ctx.save(); const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, unit * .6); g.addColorStop(0, `rgba(255,255,255,${.95 * (1 - u / .07)})`); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); ctx.restore(); }
  }
  const punchSets = (() => {
    const r = random(31337);
    const one = [{at: .06, x: .5, y: .45, s: 1.6, rot: .2}];
    const many = [];
    for (let i = 0; i < 16; i++) many.push({at: .05 + i * .055, x: .3 + r() * .4, y: .28 + r() * .34, s: .65 + r() * .35, rot: r() * 3});
    many.push({at: 1.02, x: .5, y: .45, s: 1.8, rot: .4});
    return {punch1: {hits: one, end: .75}, punch2: {hits: many, end: 1.6}};
  })();
  function drawPunch(ctx, w, h, t, name) {
    const set = punchSets[name], last = set.hits[set.hits.length - 1];
    // 집중선: 연타 내내 / 한 방은 맞기 직전부터
    const fl = name === 'punch1' ? (t < .06 ? t / .06 : fadeEnd(t, .2, .45)) : (t < .05 ? t / .05 : fadeEnd(t, last.at + .15, last.at + .45));
    focusLines(ctx, w, h, w * .5, h * .45, .55 * fl, t * .4);
    // 맞을 때마다 화면이 하얗게 번쩍
    let flash = 0;
    for (const p of set.hits) { const u = t - p.at; if (u >= 0 && u < .06) flash = Math.max(flash, (p.s > 1.2 ? .55 : .18) * (1 - u / .06)); }
    if (flash) { ctx.fillStyle = `rgba(255,252,240,${flash})`; ctx.fillRect(0, 0, w, h); }
    for (const p of set.hits) impact(ctx, w, h, t - p.at, p);
    // 마지막 한 방 뒤 붉은 여운
    const red = fadeEnd(t, last.at + .05, last.at + .5) * clamp((t - last.at) / .04);
    if (red > 0) { edgeTint(ctx, w, h, '200,20,30', .55 * red, .2); }
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

  // 하트 연출: 두근(2박) + 번지는 분홍 빛 + 떠오르는 윤기 나는 하트와 반짝임. 화면 전체를 쓴다.
  const heartRand = random(5521);
  const heartBits = Array.from({length: 54}, (_, i) => ({
    x: .04 + heartRand() * .92,
    size: 9 + heartRand() ** 1.6 * 34,
    delay: .35 + heartRand() * 2.3,
    life: 2.3 + heartRand() * 1.1,
    sway: .012 + heartRand() * .03,
    phase: heartRand() * Math.PI * 2,
    spin: (heartRand() - .5) * .9,
    rise: .78 + heartRand() * .5,
    hollow: i % 7 === 3,
    hue: heartRand()
  }));
  const heartSparks = Array.from({length: 30}, () => ({
    x: .05 + heartRand() * .9, y: .08 + heartRand() * .8,
    size: 3 + heartRand() * 9, delay: .4 + heartRand() * 2.6, life: .7 + heartRand() * .8
  }));
  // 둥글고 통통한 하트 윤곽 (각지지 않게 곡선으로만 구성)
  function roundHeart(ctx, r) {
    ctx.beginPath();ctx.moveTo(0, r * .98);
    ctx.bezierCurveTo(-r * .30, r * .78, -r * 1.12, r * .22, -r * 1.06, -r * .38);
    ctx.bezierCurveTo(-r * 1.02, -r * .92, -r * .40, -r * 1.18, 0, -r * .52);
    ctx.bezierCurveTo(r * .40, -r * 1.18, r * 1.02, -r * .92, r * 1.06, -r * .38);
    ctx.bezierCurveTo(r * 1.12, r * .22, r * .30, r * .78, 0, r * .98);
    ctx.closePath();
  }
  function glossHeart(ctx, r, hue, hollow) {
    roundHeart(ctx, r);
    if (hollow) {
      ctx.lineWidth = Math.max(1.2, r * .12);ctx.strokeStyle = 'rgba(255,214,228,.95)';ctx.stroke();
      return;
    }
    const g = ctx.createRadialGradient(-r * .3, -r * .45, r * .06, 0, 0, r * 1.25);
    g.addColorStop(0, '#fff2f6');g.addColorStop(.28, hue > .5 ? '#ffb3cb' : '#ff9dbd');
    g.addColorStop(.7, hue > .5 ? '#ff5f93' : '#f2457f');g.addColorStop(1, '#c4245f');
    ctx.fillStyle = g;ctx.fill();
    ctx.lineWidth = Math.max(.8, r * .06);ctx.strokeStyle = 'rgba(255,236,243,.55)';ctx.stroke();
    ctx.save();ctx.globalAlpha *= .8;ctx.fillStyle = 'rgba(255,255,255,.8)';
    ctx.beginPath();ctx.ellipse(-r * .44, -r * .42, r * .2, r * .1, -.7, 0, Math.PI * 2);ctx.fill();ctx.restore();
  }
  function sparkle4(ctx, x, y, s, rot) {
    ctx.save();ctx.translate(x, y);ctx.rotate(rot);ctx.beginPath();
    ctx.moveTo(0, -s);ctx.quadraticCurveTo(s * .14, -s * .14, s, 0);ctx.quadraticCurveTo(s * .14, s * .14, 0, s);
    ctx.quadraticCurveTo(-s * .14, s * .14, -s, 0);ctx.quadraticCurveTo(-s * .14, -s * .14, 0, -s);ctx.fill();ctx.restore();
  }
  function drawHearts(ctx, w, h, t) {
    const m = Math.min(w, h);
    // 가장자리에서 번지는 분홍 빛
    const wash = Math.sin(Math.PI * clamp(t / 3.9)) ** .8 * .55;
    const vg = ctx.createRadialGradient(w / 2, h * .55, m * .25, w / 2, h * .55, Math.hypot(w, h) * .62);
    vg.addColorStop(0, 'rgba(255,170,205,0)');vg.addColorStop(1, `rgba(255,96,150,${wash})`);
    ctx.fillStyle = vg;ctx.fillRect(0, 0, w, h);
    const floor = ctx.createLinearGradient(0, h, 0, h * .55);
    floor.addColorStop(0, `rgba(255,140,185,${wash * .7})`);floor.addColorStop(1, 'rgba(255,140,185,0)');
    ctx.fillStyle = floor;ctx.fillRect(0, h * .55, w, h * .45);
    // 두근-두근 (큰 하트 2번 박동 + 퍼지는 링)
    const cx = w / 2, cy = h * .4;
    if (t < 1.5) {
      const beat = k => Math.max(0, Math.sin(clamp((t - k) / .42) * Math.PI)) ** 1.4;
      const pulse = beat(0) + beat(.42) * .7;
      const life = 1 - easeInOut(t / 1.5);
      ctx.save();ctx.translate(cx, cy);ctx.scale(1 + pulse * .22, 1 + pulse * .22);
      ctx.globalAlpha = life * .9;ctx.shadowBlur = m * .08;ctx.shadowColor = 'rgba(255,90,150,.9)';
      glossHeart(ctx, m * .17, .9, false);ctx.restore();
      for (const k of [0, .42]) {
        const u = clamp((t - k) / 1.0);
        if (u > 0 && u < 1) {
          ctx.save();ctx.globalAlpha = (1 - u) * .55;ctx.strokeStyle = 'rgba(255,205,225,1)';ctx.lineWidth = 2 + (1 - u) * 4;
          ctx.beginPath();ctx.arc(cx, cy, m * (.14 + easeOut(u) * .5), 0, Math.PI * 2);ctx.stroke();ctx.restore();
        }
      }
    }
    // 떠오르는 하트
    ctx.save();ctx.globalCompositeOperation = 'lighter';
    for (const p of heartBits) {
      const u = (t - p.delay) / p.life;
      if (u <= 0 || u >= 1) continue;
      const a = Math.sin(Math.PI * clamp(u)) ** .7;
      const x = w * (p.x + Math.sin(u * 5.2 + p.phase) * p.sway);
      const y = h * (1.08 - easeOut(u * .92) * p.rise * 1.15);
      const pop = u < .12 ? easeOut(u / .12) : 1;
      ctx.save();ctx.translate(x, y);ctx.rotate(p.spin * Math.sin(u * 3 + p.phase));ctx.scale(pop, pop);
      ctx.globalAlpha = a * (p.hollow ? .75 : .9);ctx.shadowBlur = p.size * .9;ctx.shadowColor = 'rgba(255,100,160,.85)';
      glossHeart(ctx, p.size, p.hue, p.hollow);ctx.restore();
    }
    // 반짝임
    ctx.fillStyle = '#fff6fa';
    for (const s of heartSparks) {
      const u = (t - s.delay) / s.life;
      if (u <= 0 || u >= 1) continue;
      ctx.globalAlpha = Math.sin(Math.PI * u) * .9;ctx.shadowBlur = 12;ctx.shadowColor = '#ffc4dc';
      sparkle4(ctx, w * s.x, h * s.y, s.size * (.5 + Math.sin(Math.PI * u)), u * 1.6);
    }
    ctx.restore();
  }
  // 화면 흔들림(타격, 물어뜯기): 효과 캔버스가 얹힌 장면 전체를 잠깐 흔든다
  function shakeOf(type, t) {
    const pulse = (at, amp, len) => { const u = t - at; return u >= 0 && u < len ? amp * (1 - u / len) ** 2 : 0; };
    if (type === 'punch1') return pulse(.06, 22, .38);
    if (type === 'punch2') return Math.max(0, ...punchSets.punch2.hits.map(p => pulse(p.at, p.s > 1.2 ? 24 : 7, p.s > 1.2 ? .4 : .09)));
    if (type === 'shake') return Math.max(pulse(0, 20, .22), pulse(.08, 9, .5));   // 쿵! 큰 한 번 + 잔떨림
    if (type === 'bite') return Math.max(pulse(.15, 14, .25), pulse(.43, 18, .32));
    return 0;
  }
  const durations={shake:.6,surprise:.84,slash:.8,slash1:.8,slash2:1.05,slash3:1.85,punch1:.75,punch2:1.6,bite:1.4,hit:.60,poison:3.35,hearts:4.2,sparkle:2.1};
  class EffectDirector {
    constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.frame=0;this.type=null;this.start=0;}
    clear(){cancelAnimationFrame(this.frame);this.type=null;const sp=this.canvas.parentElement;if(sp)sp.style.translate='';const {ctx,canvas}=this;ctx.clearRect(0,0,canvas.width,canvas.height)}
    play(type){this.clear();if(!durations[type])return;this.type=type;this.start=performance.now();this.tick(this.start)}
    tick(now){
      if(!this.type)return;
      const rect=this.canvas.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,1.5);
      const w=Math.max(1,rect.width), h=Math.max(1,rect.height);
      if(this.canvas.width!==Math.round(w*dpr)||this.canvas.height!==Math.round(h*dpr)){
        this.canvas.width=Math.round(w*dpr);this.canvas.height=Math.round(h*dpr);
      }
      const ctx=this.ctx,t=(now-this.start)/1000;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      if(this.type==='shake'){}
      else if(this.type==='surprise')drawSurprise(ctx,w,h,t);
      else if(this.type==='slash')drawSlash(ctx,w,h,t);
      else if(/^slash[123]$/.test(this.type))drawSlashSet(ctx,w,h,t,this.type);
      else if(this.type==='punch1'||this.type==='punch2')drawPunch(ctx,w,h,t,this.type);
      else if(this.type==='bite')drawBite(ctx,w,h,t);
      else if(this.type==='hit')drawHit(ctx,w,h,t);
      else if(this.type==='poison')drawPoison(ctx,w,h,t);
      else if(this.type==='hearts')drawHearts(ctx,w,h,t);
      else drawMotes(ctx,w,h,t,this.type);
      {const amp=shakeOf(this.type,t),sp=this.canvas.parentElement;if(sp)sp.style.translate=amp?`${((Math.random()-.5)*2*amp).toFixed(1)}px ${((Math.random()-.5)*2*amp).toFixed(1)}px`:'';}
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
      this.flash.style.height='';
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
