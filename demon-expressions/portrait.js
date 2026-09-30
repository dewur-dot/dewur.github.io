/* Shared standing face rig plus selected full-body poses for strong emotions.
   All assets are local; switching expressions never calls image generation. */
(function(global){
  'use strict';
  const labels={angry:'화남 · 기본',uncomfortable:'불편',disbelief:'어이없음',indifferent:'무관심',curious:'호기심',flustered:'당황',jealous:'질투',shy:'수줍음',furious:'대노',enraged:'극대노',gloomy:'침울'};
  const presets={
    angry:{original:true},
    uncomfortable:{pose:'crossed-pose.png',face:{eyes:[.84,.84],brows:[2,2],tilt:[-.07,.07]}},
    disbelief:{pose:'curious-pose.png',face:{eyes:[1.4,1.4],eyeTilt:[-.12,.12],brows:[-3,-3]}},
    indifferent:{pose:'crossed-pose.png',face:{eyes:[.52,.52],brows:[1,1]}},
    curious:{pose:'curious-pose.png'},
    flustered:{pose:'flustered-pose.png'},
    jealous:{pose:'crossed-pose.png'},
    shy:{pose:'shy-pose.png'},
    furious:{pose:'furious-pose.png'},
    enraged:{pose:'enraged.png'},
    gloomy:{pose:'downcast-pose.png'}
  };
  const poseRigs={
    'flustered-pose.png':{label:'땀을 흘리며 양손을 들어 허둥대는 자세',x:484,y:186,angle:28,scale:1.04},
    'furious-pose.png':{label:'이를 악물고 한쪽 주먹을 내린 대노 자세',x:504,y:185,angle:18,scale:1.04},
    'shy-pose.png':{label:'뺨을 가리고 팔을 모으는 자세',x:483,y:196,angle:29,scale:1.04},
    'curious-pose.png':{label:'턱에 손을 대고 살피는 자세',x:481,y:190,angle:29,scale:1.05},
    'crossed-pose.png':{label:'팔짱을 끼고 옆눈으로 보는 자세',x:495,y:181,angle:27,scale:.97},
    'downcast-pose.png':{label:'어깨를 낮추고 두 손을 모은 자세',x:488,y:200,angle:26,scale:1.02},
    'enraged.png':{label:'양손을 쥐고 상체를 내밀어 외치는 자세',x:486,y:215,angle:21,scale:1.07}
  };
  const tile={x:360,y:110,width:244,height:190};
  const angle=29*Math.PI/180,cos=Math.cos(angle),sin=Math.sin(angle);
  const origin={x:485-tile.x,y:192-tile.y};
  function falloff(x,y,rx,ry){const q=x*x/(rx*rx)+y*y/(ry*ry);if(q>=1)return 0;return (1-q)*(1-q);}
  const defaultGeometry={origin,cos,sin,scale:1};
  function geometryFor(pose){const r=poseRigs[pose],a=r.angle*Math.PI/180;return {origin:{x:r.x-tile.x,y:r.y-tile.y},cos:Math.cos(a),sin:Math.sin(a),scale:r.scale};}
  function sourcePoint(u,v,g=defaultGeometry){return [g.origin.x+g.scale*(g.cos*u+g.sin*v),g.origin.y+g.scale*(-g.sin*u+g.cos*v)];}
  function sample(data,x,y,channel){
    x=Math.max(0,Math.min(tile.width-1.001,x));y=Math.max(0,Math.min(tile.height-1.001,y));
    const ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,a=(iy*tile.width+ix)*4+channel;
    return data[a]*(1-fx)*(1-fy)+data[a+4]*fx*(1-fy)+data[a+tile.width*4]*(1-fx)*fy+data[a+tile.width*4+4]*fx*fy;
  }
  function warp(source,preset,g=defaultGeometry){
    const output=new Uint8ClampedArray(source);
    if(preset.original)return output;
    for(let y=0;y<tile.height;y++)for(let x=0;x<tile.width;x++){
      const dx=x-g.origin.x,dy=y-g.origin.y,u=(g.cos*dx-g.sin*dy)/g.scale,v=(g.sin*dx+g.cos*dy)/g.scale;
      let sourceU=u,sourceV=v;
      [-34,37].forEach((cx,i)=>{
        const ex=u-cx,ey=v+1,w=falloff(ex,ey,29,20),scale=preset.eyes[i];
        sourceV+=ey*(1/scale-1)*w;
        sourceV-=ex*(preset.eyeTilt?.[i]||0)*falloff(ex,ey,35,20);
      });
      [-42,27].forEach((cx,i)=>{
        const bx=u-cx,by=v+27,w=falloff(bx,by,23,10);
        sourceV-=(preset.brows[i]+(preset.tilt?.[i]||0)*bx)*w;
      });
      if(Math.abs(sourceV-v)<.0001&&sourceU===u)continue;
      const [sx,sy]=sourcePoint(sourceU,sourceV,g),index=(y*tile.width+x)*4;
      for(let channel=0;channel<4;channel++)output[index+channel]=sample(source,sx,sy,channel);
    }
    return output;
  }
  function skinColor(source,u,v){const [x,y]=sourcePoint(u,v);return `rgb(${[0,1,2].map(k=>Math.round(sample(source,x,y,k))).join(',')})`;}
  function paintMouth(ctx,preset,source){
    if(preset.original)return;
    ctx.save();ctx.translate(origin.x,origin.y);ctx.rotate(-angle);
    if(preset.blush){
      for(const x of [-35,35]){
        ctx.save();ctx.translate(x,17);ctx.scale(1,.47);
        const glow=ctx.createRadialGradient(0,0,1,0,0,19);
        glow.addColorStop(0,`rgba(219,93,112,${preset.blush})`);glow.addColorStop(1,'rgba(219,93,112,0)');
        ctx.fillStyle=glow;ctx.beginPath();ctx.arc(0,0,19,0,Math.PI*2);ctx.fill();ctx.restore();
      }
    }
    // Small feathered skin patch erases only the original lip marks, leaving nose/chin intact.
    ctx.save();ctx.translate(-1,40);ctx.scale(1,.58);
    const patch=ctx.createRadialGradient(0,0,8,0,0,14);
    patch.addColorStop(0,skinColor(source,-14,39));patch.addColorStop(.6,skinColor(source,13,38));
    const [sx,sy]=sourcePoint(13,38),rgb=[0,1,2].map(k=>Math.round(sample(source,sx,sy,k))).join(',');
    patch.addColorStop(1,`rgba(${rgb},0)`);ctx.fillStyle=patch;ctx.beginPath();ctx.arc(0,0,14,0,Math.PI*2);ctx.fill();ctx.restore();
    ctx.translate(-1,40);ctx.strokeStyle='#99585c';ctx.lineWidth=.72;ctx.lineCap='round';ctx.lineJoin='round';
    const mode=preset.mouth;
    if(['flat','pout','smile','tense','tremble'].includes(mode)){
      ctx.beginPath();
      if(mode==='smile'){ctx.moveTo(-7,-.7);ctx.quadraticCurveTo(-1,3.8,6,-.7);}
      else if(mode==='pout'){ctx.moveTo(-7,1.8);ctx.quadraticCurveTo(0,-2,7,1.8);}
      else if(mode==='tense'){ctx.moveTo(-7,1);ctx.quadraticCurveTo(-1,-1,7,1);}
      else if(mode==='tremble'){ctx.moveTo(-6,1);ctx.bezierCurveTo(-3,-1,0,2,2,.5);ctx.quadraticCurveTo(4,-.7,6,1);}
      else{ctx.moveTo(-7,0);ctx.quadraticCurveTo(0,.7,7,0);}
      ctx.stroke();
    }else{
      const dimensions={parted:[3.8,1.8],gasp:[4,4.6],shout:[8.6,5.7],rage:[10,8]};
      const [rx,ry]=dimensions[mode]||dimensions.parted;
      const path=()=>{ctx.beginPath();ctx.moveTo(-rx,-ry*.3);ctx.bezierCurveTo(-rx*.55,-ry,rx*.55,-ry,rx,-ry*.3);ctx.bezierCurveTo(rx*.8,ry,rx*.35,ry*1.25,0,ry*1.2);ctx.bezierCurveTo(-rx*.6,ry*1.1,-rx*.9,ry*.6,-rx,-ry*.3);ctx.closePath();};
      path();ctx.fillStyle='#744551';ctx.fill();ctx.save();ctx.clip();
      const inner=ctx.createLinearGradient(0,0,0,ry*1.3);inner.addColorStop(0,'#a96370');inner.addColorStop(1,'#df99a0');
      ctx.fillStyle=inner;ctx.beginPath();ctx.ellipse(0,ry,rx*.7,ry*.7,0,0,Math.PI*2);ctx.fill();
      if(mode==='shout'||mode==='rage'){ctx.fillStyle='#fff0e8';ctx.beginPath();ctx.moveTo(-rx,-ry);ctx.lineTo(rx,-ry);ctx.lineTo(rx*.8,-ry*.05);ctx.quadraticCurveTo(0,ry*.15,-rx*.8,-ry*.05);ctx.closePath();ctx.fill();}
      ctx.restore();path();ctx.stroke();
    }
    ctx.restore();
  }
  function drawFace(ctx,source,key){
    const preset=presets[key];if(!preset)throw new RangeError('Unknown expression: '+key);
    if(preset.pose)throw new RangeError(key+' requires its full-body pose');
    const pixels=ctx.createImageData(tile.width,tile.height);pixels.data.set(warp(source,preset));
    ctx.putImageData(pixels,0,0);paintMouth(ctx,preset,source);
  }
  function drawPortrait(ctx,faceCtx,data,key,pose){
    const preset=presets[key];if(!preset)throw new RangeError('Unknown expression: '+key);
    if(preset.pose&&!pose)throw new Error('Pose asset has not loaded: '+key);
    ctx.clearRect(0,0,1024,1536);
    ctx.drawImage(preset.pose?pose:data.body,0,0,1024,1536);
    if(preset.pose&&preset.face){
      const source=data.poseFaces?.[preset.pose];if(!source)throw new Error('Pose face source has not loaded: '+preset.pose);
      const g=geometryFor(preset.pose),pixels=faceCtx.createImageData(tile.width,tile.height);
      pixels.data.set(warp(source,preset.face,g));faceCtx.putImageData(pixels,0,0);
      if(preset.face.blush){
        faceCtx.save();faceCtx.translate(g.origin.x,g.origin.y);faceCtx.rotate(-poseRigs[preset.pose].angle*Math.PI/180);faceCtx.scale(g.scale,g.scale);
        for(const x of [-35,35]){faceCtx.save();faceCtx.translate(x,17);faceCtx.scale(1,.47);const grad=faceCtx.createRadialGradient(0,0,1,0,0,19);grad.addColorStop(0,`rgba(219,93,112,${preset.face.blush})`);grad.addColorStop(1,'rgba(219,93,112,0)');faceCtx.fillStyle=grad;faceCtx.beginPath();faceCtx.arc(0,0,19,0,Math.PI*2);faceCtx.fill();faceCtx.restore();}faceCtx.restore();
      }
      ctx.clearRect(tile.x,tile.y,tile.width,tile.height);ctx.drawImage(faceCtx.canvas,tile.x,tile.y);
    }
    if(!preset.original&&!preset.pose){
      drawFace(faceCtx,data.pixels,key);ctx.clearRect(tile.x,tile.y,tile.width,tile.height);ctx.drawImage(faceCtx.canvas,tile.x,tile.y);
    }
  }
  const api={labels,presets,poseRigs,tile,warp,drawFace,drawPortrait};
  if(typeof module==='object'&&module.exports){module.exports=api;return;}
  const scriptBase=new URL('.',document.currentScript.src);
  let assets;const poseCache=new Map();
  const load=src=>new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('Cannot load portrait asset'));image.src=src;});
  function getAssets(){
    if(!assets)assets=Promise.all([load(new URL('angry.png',scriptBase).href),load(global.DEMON_FACE_SOURCE),Promise.all(Object.entries(global.DEMON_POSE_FACE_SOURCES||{}).map(async([key,url])=>[key,await load(url)]))]).then(([body,face,poseSources])=>{
      const sourceCanvas=document.createElement('canvas');sourceCanvas.width=tile.width;sourceCanvas.height=tile.height;
      const sourceContext=sourceCanvas.getContext('2d',{willReadFrequently:true});sourceContext.drawImage(face,0,0);
      const pixels=sourceContext.getImageData(0,0,tile.width,tile.height).data,poseFaces={};
      for(const [key,image]of poseSources){sourceContext.clearRect(0,0,tile.width,tile.height);sourceContext.drawImage(image,0,0);poseFaces[key]=sourceContext.getImageData(0,0,tile.width,tile.height).data;}
      return {body,pixels,poseFaces};
    });return assets;
  }
  function getPose(key){
    const filename=presets[key].pose;if(!filename)return Promise.resolve(null);
    if(!poseCache.has(filename))poseCache.set(filename,load(new URL(filename,scriptBase).href).catch(error=>{poseCache.delete(filename);throw error;}));
    return poseCache.get(filename);
  }
  api.create=function(container,{expression='angry'}={}){
    if(!presets[expression])throw new RangeError('Unknown expression: '+expression);
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=1536;canvas.className='demon-portrait';canvas.setAttribute('role','img');
    canvas.style.cssText='display:block;width:100%;height:100%;object-fit:contain;object-position:center top';container.append(canvas);
    const face=document.createElement('canvas');face.width=tile.width;face.height=tile.height;
    const ctx=canvas.getContext('2d'),faceCtx=face.getContext('2d');let current=expression,disposed=false,revision=0;
    async function render(){
      const key=current,version=++revision;
      const [data,pose]=await Promise.all([getAssets(),getPose(key)]);
      if(disposed||version!==revision)return;
      drawPortrait(ctx,faceCtx,data,key,pose);
      canvas.dataset.expression=key;canvas.dataset.mode=presets[key].pose?'pose':'face';canvas.setAttribute('aria-label','마왕 · '+labels[key]);
    }
    const ready=render().then(()=>instance);
    const instance={canvas,ready,setExpression(key){if(!presets[key])throw new RangeError('Unknown expression: '+key);current=key;return render();},get expression(){return current;},get mode(){return presets[current].pose?'pose':'face';},destroy(){disposed=true;revision++;canvas.remove();}};
    return instance;
  };
  global.DemonPortrait=api;
})(typeof window==='object'?window:globalThis);
