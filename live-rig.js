/* 부품 조립 애니메이션(라이브 리그).
   Codex가 그린 "부품 그림"(배경, 뒷머리, 몸, 감은 눈, 앞머리 …)을 겹쳐 조립하고, 부품마다 따로 움직인다.
   한 장짜리 그림을 통째로 흔드는 방식이 아니므로 배경이나 주변 사물은 움직이지 않는다.

   사용: LiveRig.mount(host, 'menu-goddess', {fit:'contain'|'cover', posY:.3, fallback:'./main-opening-clean.png'})
   - ./rigs/<이름>/rig.js 를 읽는다(script 태그라 파일로 열어도 동작). 없으면 fallback 정지 그림만 보인다.
   - rig.js 형식:
       LiveRig.register('menu-goddess',{
         size:[1536,1024],                       // 모든 부품 PNG는 이 크기의 같은 캔버스, 투명 배경, 위치 정렬된 상태
         layers:[
           {src:'00-bg.png'},                                            // 움직임 없음
           {src:'10-hair-back.png', motion:{type:'wave', root:.30, amp:10, speed:1.3, k:.8}},
           {src:'20-body.png',      motion:{type:'breath', pivot:[.55,.95], amount:.010, speed:1.4}},
           {src:'30-eyes-closed.png', motion:{type:'blink', every:[2.6,5.2], hold:.13}},
           {src:'40-hair-front.png', motion:{type:'wave', root:.18, amp:6, speed:1.6, k:.9, phase:1.2}},
           {src:'50-ribbon.png',     motion:{type:'sway', pivot:[.6,.2], deg:2.5, speed:1.1}},
           {src:'60-light.png',      motion:{type:'flicker', min:.55, max:1, speed:2.2}},
           {src:'70-petals.png',     motion:{type:'float', dy:6, dx:3, speed:.7}}
         ]});
     좌표(root, pivot)는 그림 기준 0~1. wave의 root는 "이 높이(세로 0~1)부터 아래로 갈수록 흔들림이 커진다".
     wave에는 area:[x0,y0,x1,y1]을 주면 그 범위만 계산한다(속도 향상).
*/
window.LiveRig=(()=>{
  const defs={},waiting={};
  const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  function register(name,def){defs[name]=def;(waiting[name]||[]).forEach(f=>f(def));delete waiting[name];}
  function load(name){
    if(defs[name])return Promise.resolve(defs[name]);
    return new Promise(res=>{
      (waiting[name]=waiting[name]||[]).push(res);
      if(document.querySelector(`script[data-rig="${name}"]`))return;
      const s=document.createElement('script');s.dataset.rig=name;s.src=`./rigs/${name}/rig.js`;
      s.onerror=()=>{(waiting[name]||[]).forEach(f=>f(null));delete waiting[name];};
      document.head.append(s);
    });
  }
  function unmount(host){const r=host&&host._rig;if(!r)return;r.alive=false;cancelAnimationFrame(r.raf);r.ro.disconnect();r.wrap.remove();if(r.hidden)r.hidden.style.visibility='';host.classList.remove('rig-on');host._rig=null;}
  async function mount(host,name,opt={}){
    if(!host)return false;
    unmount(host);
    const token={};host._rigToken=token;
    const def=await load(name);
    if(!def||host._rigToken!==token)return false;
    const dir=`./rigs/${name}/`,[W,H]=def.size;
    const imgs=await Promise.all(def.layers.map(L=>new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=dir+L.src;})));
    if(host._rigToken!==token||imgs.some(i=>!i))return false;   // 부품이 하나라도 없으면 정지 그림 유지
    const wrap=document.createElement('div');wrap.className='live-rig';wrap.setAttribute('aria-hidden','true');
    wrap.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none';
    const cv=document.createElement('canvas');cv.style.cssText='position:absolute;left:0;top:0';wrap.append(cv);
    const under=host.querySelector('img');
    host.insertBefore(wrap,under?under.nextSibling:host.firstChild);
    if(under){under.style.visibility='hidden';}host.classList.add('rig-on');
    const calm=reduce()?.5:1,ctx=cv.getContext('2d');
    const blinkState=def.layers.map(()=>({next:0,until:0}));
    const bl={next:0,start:-9};   // 공용 깜빡임 시계 (blink-half / blink-shut)
    const st={alive:true,raf:0,wrap,hidden:under,ro:null};host._rig=st;
    let g;
    function layout(){
      const w=host.clientWidth,h=host.clientHeight,fit=opt.fit||'contain',posY=opt.posY??.3;
      const s=fit==='cover'?Math.max(w/W,h/H):Math.min(w/W,h/H),dpr=Math.min(devicePixelRatio||1,1.6);
      const dw=W*s,dh=H*s,ox=(w-dw)/2,oy=(h-dh)*(fit==='cover'?posY:.5);
      cv.style.width=w+'px';cv.style.height=h+'px';cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);
      g={s:s*dpr,ox:ox*dpr,oy:oy*dpr,dpr};
    }
    layout();st.ro=new ResizeObserver(layout);st.ro.observe(host);
    const rnd=(a,b)=>a+Math.random()*(b-a);
    const t0=performance.now();
    function draw(now){
      if(!st.alive)return;
      const t=(now-t0)/1000;
      ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);
      // 인물 전체 숨쉬기: body:true 부품은 모두 같은 변형을 받아 서로 어긋나지 않는다
      const B=def.breath,bsy=B?1+(B.amount||.005)*calm*(.5+.5*Math.sin(t*(B.speed||1.4))):1;
      if(def.blink){if(!bl.next)bl.next=t+rnd(...(def.blink.every||[2.6,5.2]));if(t>=bl.next){bl.start=t;bl.next=t+rnd(...(def.blink.every||[2.6,5.2]));if(Math.random()<.22)bl.next=t+.32;}}
      const bu=t-bl.start,bphase=bu<0?'':bu<.045?'half':bu<.125?'shut':bu<.175?'half':'';
      def.layers.forEach((L,i)=>{
        const im=imgs[i],m=L.motion||{type:'none'},ph=m.phase||0;
        ctx.save();ctx.setTransform(g.s,0,0,g.s,g.ox,g.oy);   // 이제 좌표 단위 = 그림 픽셀
        if(L.body&&B){const bx=B.pivot[0]*W,by=B.pivot[1]*H;ctx.translate(bx,by);ctx.scale(1,bsy);ctx.translate(-bx,-by);}
        if(m.type==='blink-half'||m.type==='blink-shut'){
          if(bphase===m.type.slice(6))ctx.drawImage(im,0,0,W,H);
        }else if(m.type==='blink'){
          const b=blinkState[i];
          if(!b.next)b.next=t+rnd(...(m.every||[2.5,5]));
          if(t>=b.next){b.until=t+(m.hold||.12);b.next=t+rnd(...(m.every||[2.5,5]));if(Math.random()<.25)b.next=t+.28;}
          if(t<b.until)ctx.drawImage(im,0,0,W,H);
        }else if(m.type==='wave'){
          const [ax0,ay0,ax1,ay1]=(m.area||[0,0,1,1]).map((v,j)=>v*(j%2?H:W));
          const step=Math.max(1,Math.round(2/g.s)),A=(m.amp||8)*calm,k=m.k||.8,sp=m.speed||1.3,root=m.root||0;
          const top=Math.min(H,Math.max(root*H,ay0));if(top>0)ctx.drawImage(im,0,0,W,top,0,0,W,top); // 뿌리 위쪽은 그대로
          for(let y=top;y<ay1;y+=step){
            const v=y/H,f=Math.pow(Math.max(0,(v-root)/(1-root)),1.2);
            const dx=A*f*(Math.sin(t*sp-v*k*6.283+ph)+.4*Math.sin(t*sp*.57+v*3.3+1.7+ph));
            ctx.drawImage(im,ax0,y,ax1-ax0,step,ax0+dx,y,ax1-ax0,step+.6);
          }
          if(ay1<H)ctx.drawImage(im,0,ay1,W,H-ay1,0,ay1,W,H-ay1);
        }else{
          let dx=0,dy=0,rot=0,sy=1,alpha=1;const [px,py]=(m.pivot||[.5,.5]).map((v,j)=>v*(j?H:W));
          if(m.type==='breath')sy=1+(m.amount||.008)*calm*(.5+.5*Math.sin(t*(m.speed||1.4)+ph));
          if(m.type==='sway')rot=(m.deg||2)*calm*Math.PI/180*Math.sin(t*(m.speed||1.1)+ph);
          if(m.type==='float'){dy=(m.dy||5)*calm*Math.sin(t*(m.speed||.7)+ph);dx=(m.dx||0)*calm*Math.sin(t*(m.speed||.7)*.6+ph+1);}
          if(m.type==='flicker')alpha=(m.min??.6)+((m.max??1)-(m.min??.6))*(.5+.5*Math.sin(t*(m.speed||2)+ph)*(.7+.3*Math.sin(t*7.3)));
          ctx.globalAlpha=alpha;ctx.translate(px+dx,py+dy);ctx.rotate(rot);ctx.scale(1,sy);ctx.translate(-px,-py);
          ctx.drawImage(im,0,0,W,H);
        }
        ctx.restore();
      });
      st.raf=requestAnimationFrame(draw);
    }
    st.raf=requestAnimationFrame(draw);
    return true;
  }
  return {register,mount,unmount};
})();
