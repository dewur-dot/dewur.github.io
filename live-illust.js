/* 라이브 일러스트: 한 장짜리 그림을 부분별로 살짝 움직인다(머리카락 흔들림, 숨쉬기, 깃발, 구름, 빛).
   같은 그림을 부드러운 마스크로 오려 겹친 뒤, 각 조각만 아주 조금 회전·이동시키는 방식.
   WebGL을 쓰지 않으므로 index.html을 파일로 열어도 동작한다.
   좌표는 모두 "그림 기준" 0~1 값. contain/cover 배치는 자동으로 환산한다.

   LiveIllust.apply(host, src, presetName, {fit:'contain'|'cover', posY:.3})
   - host 안에 기존 <img>가 깔려 있어야 한다(밑그림). 움직이는 조각은 그 위에 얹힌다.
   - 컷신 그림별 프리셋은 PRESETS에 id 이름으로 추가하면 된다. 없으면 'cut-default'.
*/
window.LiveIllust=(()=>{
  const PRESETS={
    // 메인 화면 여신
    'menu-goddess':{base:'./main-opening-live-base.png',layers:[
      // 머리카락만 오려 낸 조각(live/*.png). 밑그림(base)에서는 그 자리를 배경으로 메워 두었다.
      // wave: 뿌리(root, 조각 높이 기준 0~1)는 고정, 끝으로 갈수록 크게 물결친다. amp는 그림 픽셀 기준.
      {kind:'breath',c:[.575,.64],r:[.13,.16],pivot:[.575,.9],sy:[1,1.012],dur:4.2},
      {kind:'wave',img:'./live/live-menu-hairL.png',box:[.1107,.3691,.4316,1],root:.05,amp:11,k:.85,speed:1.45},
      {kind:'wave',img:'./live/live-menu-hairR.png',box:[.6979,.2686,1,.6973],root:.1,amp:8,k:1.05,speed:1.25,phase:1.3},
      {kind:'wave',img:'./live/live-menu-hairM.png',box:[.638,.1992,.7467,.6045],root:.06,amp:6,k:.8,speed:1.65,phase:2.2},
      {kind:'glow',c:[.52,.055],r:[.13,.075],color:'255,246,214',op:[.05,.6],dur:3.2},
      {kind:'glow',c:[.565,.53],r:[.035,.03],color:'255,190,220',op:[0,.55],dur:2.4,delay:-.8}
    ]},
    // 그림이 아직 맞춤 설정 전인 컷신: 아주 느린 카메라 이동 + 가운데 숨쉬기
    'cut-default':{kenburns:{scale:[1,1.045],dx:[0,-10],dy:[0,-6],dur:22},layers:[
      {kind:'breath',c:[.5,.5],r:[.32,.34],pivot:[.5,.95],sy:[1,1.005],dur:4.8}
    ]}
  };
  const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  function geom(host,iw,ih,fit,posY){
    const w=host.clientWidth,h=host.clientHeight;
    const s=fit==='cover'?Math.max(w/iw,h/ih):Math.min(w/iw,h/ih);
    const dw=iw*s,dh=ih*s;
    return {w,h,s,dw,dh,ox:(w-dw)/2,oy:(h-dh)*(fit==='cover'?posY:.5)};
  }
  function apply(host,src,presetName,opt={}){
    if(!host)return;
    remove(host);
    const preset=PRESETS[presetName]||PRESETS['cut-default'];
    const calm=reduce()?.5:1;
    const img=new Image();
    img.onload=()=>{
      if(host.dataset.liveSrc!==src)return;
      const fit=opt.fit||'contain',posY=opt.posY??.3;
      const wrap=document.createElement('div');wrap.className='live-illust';wrap.setAttribute('aria-hidden','true');
      wrap.style.cssText='position:absolute;inset:0;pointer-events:none;overflow:hidden';
      const anims=[];
      const layers=preset.layers.map(L=>{
        const el=document.createElement(L.kind==='wave'?'canvas':'div');el.className='live-layer live-'+L.kind;
        if(L.kind==='wave'){const im=new Image();im.src=L.img;el._img=im;}
        el.style.cssText='position:absolute;inset:0;will-change:transform,opacity';
        wrap.append(el);return {L,el};
      });
      // 켄 번스: 밑그림 <img>와 조각을 함께 천천히 움직인다
      const base=host.querySelector('img:not(.blink-eye)');
      function layout(){
        const g=geom(host,img.naturalWidth,img.naturalHeight,fit,posY);
        const P=([u,v])=>[g.ox+u*g.dw,g.oy+v*g.dh];
        for(const {L,el} of layers){
          if(L.kind==='wave'){
            const [x0,y0]=P([L.box[0],L.box[1]]),[x1,y1]=P([L.box[2],L.box[3]]),dpr=Math.min(devicePixelRatio||1,1.5);
            Object.assign(el.style,{inset:'auto',left:x0+'px',top:y0+'px',width:(x1-x0)+'px',height:(y1-y0)+'px'});
            el.width=Math.max(1,Math.round((x1-x0)*dpr));el.height=Math.max(1,Math.round((y1-y0)*dpr));el._px=g.s*dpr;continue;
          }
          if(L.img){
            const [x0,y0]=P([L.box[0],L.box[1]]),[x1,y1]=P([L.box[2],L.box[3]]);
            Object.assign(el.style,{inset:'auto',left:x0+'px',top:y0+'px',width:(x1-x0)+'px',height:(y1-y0)+'px',backgroundImage:`url("${L.img}")`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'});
            const pv=P(L.pivot||L.c);el.style.transformOrigin=`${pv[0]-x0}px ${pv[1]-y0}px`;continue;
          }
          const [cx,cy]=P(L.c),rx=L.r[0]*g.dw,ry=L.r[1]*g.dh;
          if(L.kind==='glow'){
            el.style.background=`radial-gradient(ellipse ${rx}px ${ry}px at ${cx}px ${cy}px, rgba(${L.color},.9), rgba(${L.color},0) 100%)`;
            el.style.mixBlendMode='screen';
          }else{
            el.style.backgroundImage=`url("${src}")`;el.style.backgroundRepeat='no-repeat';
            el.style.backgroundSize=`${g.dw}px ${g.dh}px`;el.style.backgroundPosition=`${g.ox}px ${g.oy}px`;
            const m=`radial-gradient(ellipse ${rx}px ${ry}px at ${cx}px ${cy}px, #000 42%, transparent 100%)`;
            el.style.maskImage=m;el.style.webkitMaskImage=m;
          }
          const pv=P(L.pivot||L.c);el.style.transformOrigin=`${pv[0]}px ${pv[1]}px`;
        }
      }
      layout();
      for(const {L,el} of layers){
        let k;
        if(L.kind==='sway')k=[{transform:`translateX(${L.dx[0]}px) rotate(${L.rot[0]}deg)`},{transform:`translateX(${L.dx[1]}px) rotate(${L.rot[1]}deg)`}];
        else if(L.kind==='flag')k=[{transform:`skewX(${L.skew[0]}deg)`},{transform:`skewX(${L.skew[1]}deg)`}];
        else if(L.kind==='drift')k=[{transform:`translateX(${L.dx[0]}px)`},{transform:`translateX(${L.dx[1]}px)`}];
        else if(L.kind==='breath')k=[{transform:`scaleY(${L.sy[0]})`},{transform:`scaleY(${1+(L.sy[1]-1)*calm})`}];
        else if(L.kind==='glow')k=[{opacity:L.op[0]},{opacity:L.op[1]}];
        if(k)anims.push(el.animate(k,{duration:(L.dur||5)*1000,delay:(L.delay||0)*1000,iterations:Infinity,direction:'alternate',easing:'ease-in-out'}));
      }
      const after=base?base.nextSibling:host.firstChild;host.insertBefore(wrap,after);
      // 밑그림 교체(머리카락을 들어낸 판)는 조각이 다 준비된 뒤에 한다
      const waves=layers.filter(x=>x.L.kind==='wave');
      let raf=0,alive=true;
      const ready=Promise.all(waves.map(({el})=>el._img.decode().catch(()=>{})));
      ready.then(()=>{
        if(!alive)return;
        if(preset.base&&base){if(!base.dataset.liveOrig)base.dataset.liveOrig=base.getAttribute('src');base.src=preset.base;}
        const t0=performance.now();
        const frame=now=>{
          if(!alive)return;
          const t=(now-t0)/1000;
          for(const {L,el} of waves){
            const ctx=el.getContext('2d'),im=el._img,w=el.width,h=el.height;if(!im.naturalWidth)continue;
            ctx.clearRect(0,0,w,h);
            const step=Math.max(2,Math.round(h/240)),A=L.amp*el._px*calm,ph=L.phase||0;
            for(let y=0;y<h;y+=step){
              const v=y/h,f=Math.pow(Math.max(0,(v-L.root)/(1-L.root)),1.25);
              const dx=A*f*(Math.sin(t*L.speed-v*L.k*6.283+ph)+.45*Math.sin(t*L.speed*.57+v*3.1+1.7+ph));
              ctx.drawImage(im,0,v*im.naturalHeight,im.naturalWidth,step/h*im.naturalHeight,dx,y,w,step+1);
            }
          }
          raf=requestAnimationFrame(frame);
        };
        raf=requestAnimationFrame(frame);
      });
      if(preset.kenburns&&base){
        const K=preset.kenburns,tf=(i)=>`translate(${K.dx[i]}px,${K.dy[i]}px) scale(${K.scale[i]})`;
        for(const el of [base,wrap])anims.push(el.animate([{transform:tf(0)},{transform:tf(1)}],{duration:K.dur*1000,iterations:Infinity,direction:'alternate',easing:'ease-in-out'}));
      }
      const ro=new ResizeObserver(layout);ro.observe(host);
      host._live={wrap,anims,ro,stop:()=>{alive=false;cancelAnimationFrame(raf);if(base&&base.dataset.liveOrig){base.src=base.dataset.liveOrig;delete base.dataset.liveOrig}}};
    };
    host.dataset.liveSrc=src;img.src=src;
  }
  function remove(host){
    const l=host&&host._live;if(!l)return;
    l.anims.forEach(a=>a.cancel());l.ro.disconnect();l.stop&&l.stop();l.wrap.remove();host._live=null;
  }
  return {apply,remove,PRESETS};
})();
