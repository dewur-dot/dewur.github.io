(()=>{
 const frame=document.getElementById('stage'),dialog=document.getElementById('displaySettings'),select=document.getElementById('resolution');
 const rotate=document.getElementById('rotateHint'),chip=document.getElementById('fsChip');
 const options=new Set([...select.options].map(o=>o.value)),key='peace-marriage-resolution-v2';
 const coarse=matchMedia('(pointer:coarse)').matches;
 let chosen='auto',skipped=false,fitWin=false;
 const fitKey='peace-marriage-fitwindow-v1';
 // PC 'auto': 열 때 창에 들어가는 가장 큰 16:9 해상도를 고르고, 그 뒤로는 창을 늘이고 줄여도 크기를 바꾸지 않는다
 const autoRes=(()=>{for(const [w,h] of [[1920,1080],[1600,900],[1280,720]])if(innerWidth>=w&&innerHeight>=h)return w+'x'+h;return '960x540';})();
 try{const saved=localStorage.getItem(key);if(options.has(saved))chosen=saved;fitWin=localStorage.getItem(fitKey)==='1';}catch{}
 const fsOn=()=>Boolean(document.fullscreenElement||document.webkitFullscreenElement);
 const fsOk=()=>Boolean(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);
 const small=()=>coarse&&Math.min(innerWidth,innerHeight)<=600;
 // 'auto'는 폰이면 화면 꽉 채움, 그 외에는 1280×720 고정 후 창에 맞춰 확대·축소
 const mode=()=>chosen==='auto'?(small()?'native':autoRes):chosen;
 function fit(){
  const m=mode();
  // 폰을 세로로 들고 있어도 게임은 항상 가로로 보이도록 화면을 90° 돌려서 그린다
  const rot=small()&&innerHeight>innerWidth&&m!=='540x960'&&m!=='390x844';
  const VW=rot?innerHeight:innerWidth,VH=rot?innerWidth:innerHeight;
  let w,h,scale;
  if(m==='native'){w=VW;h=VH;scale=1;}else{[w,h]=m.split('x').map(Number);scale=Math.min(VW/w,VH/h);}
  if(rot){
   frame.style.cssText=`position:absolute;left:0;top:0;width:${w}px;height:${h}px;transform-origin:0 0;transform:translate(${innerWidth}px,0) rotate(90deg) translate(${(VW-w*scale)/2}px,${(VH-h*scale)/2}px) scale(${scale})`;
  }else if(m==='native'){
   frame.style.cssText='position:absolute;left:env(safe-area-inset-left,0px);top:0;width:calc(100% - env(safe-area-inset-left,0px) - env(safe-area-inset-right,0px));height:100%;transform:none';
  }else{
   if(fitWin)frame.style.cssText=`width:${w}px;height:${h}px;transform:translate(-50%,-50%) scale(${scale});transform-origin:center`;
   else frame.style.cssText=`position:absolute;left:${Math.max(0,(innerWidth-w)/2)}px;top:${Math.max(0,(innerHeight-h)/2)}px;width:${w}px;height:${h}px;transform:none`;
  }
  document.documentElement.style.overflow=document.body.style.overflow=(!rot&&m!=='native'&&!fitWin)?'auto':'hidden';
  frame.dataset.resolution=m;frame.dataset.rotated=rot?'1':'';
  // 설정 창도 같은 방향으로 돌린다
  dialog.style.transform='';dialog.style.width='';
  if(rot){dialog.style.width=Math.min(440,innerHeight-28)+'px';const k=dialog.open?Math.min(1,(innerWidth-24)/dialog.offsetHeight):1;dialog.style.transform=`rotate(90deg) scale(${k})`;}
  rotate.classList.remove('on');
  chip.classList.toggle('on',coarse&&!fsOn()&&fsOk()&&!chip.dataset.done);
  document.getElementById('fullscreenToggle').textContent=fsOn()?'전체화면 끄기':'전체화면 켜기';
 }
 async function goFull(){
  const el=document.documentElement;
  try{await (el.requestFullscreen||el.webkitRequestFullscreen).call(el);}catch{}
  try{await screen.orientation?.lock?.('landscape');}catch{}
  fit();
 }
 function leaveFull(){try{(document.exitFullscreen||document.webkitExitFullscreen).call(document);}catch{}}
 function open(){
  select.value=chosen;document.getElementById('fitWindow').checked=fitWin;
  document.getElementById('displayStatus').textContent='현재: '+(chosen==='auto'?'자동 ('+(mode()==='native'?'화면 꽉 채움':'1280 × 720')+')':chosen==='native'?'화면 꽉 채움':chosen.replace('x',' × '));
  document.getElementById('fsNote').textContent=fsOk()?'':'이 브라우저는 전체화면 전환을 지원하지 않습니다. iPhone은 공유 버튼 → "홈 화면에 추가"로 실행하면 주소창 없이 꽉 차게 열립니다.';
  if(!dialog.open)dialog.showModal();fit();
 }
 addEventListener('resize',fit);addEventListener('orientationchange',()=>setTimeout(fit,150));
 document.addEventListener('fullscreenchange',fit);document.addEventListener('webkitfullscreenchange',fit);
 addEventListener('message',event=>{if(event.source===frame.contentWindow&&event.data?.type==='marriage-settings')open();});
 document.getElementById('cancel').onclick=()=>dialog.close();
 document.getElementById('apply').onclick=()=>{chosen=select.value;fitWin=document.getElementById('fitWindow').checked;try{localStorage.setItem(key,chosen);localStorage.setItem(fitKey,fitWin?'1':'0');}catch{}fit();dialog.close();};
 document.getElementById('fullscreenToggle').onclick=()=>fsOn()?leaveFull():goFull();
 document.getElementById('rotateFull').onclick=goFull;
 document.getElementById('rotateSkip').onclick=()=>{skipped=true;fit();};
 document.getElementById('fsChipBtn').onclick=()=>{chip.dataset.done='1';chip.classList.remove('on');goFull();};
 document.getElementById('rotateNote').textContent=fsOk()?'':'iPhone은 공유 버튼 → "홈 화면에 추가"로 실행하면 주소창 없이 꽉 차게 열립니다.';
 fit();
})();
