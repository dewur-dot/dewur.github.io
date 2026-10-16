/* 메인 화면 여신 부품 조립 설정 (Codex 부품).
   지금 움직이는 것: 머리카락 물결(뒷머리, 앞머리, 오른쪽 긴 머리), (후광은 머리 장식 꽃과 한 부품이라 고정).
   뺀 것: 숨쉬기(정수리까지 움직여서), 꽃잎 부품(한 덩어리로 제자리에서만 흔들려서).
   부품이 하나라도 없으면 main-opening-clean.png 정지 그림이 그대로 보인다. */
LiveRig.register('menu-goddess',{size:[1536,1024],blink:{every:[3.4,6.8]},
  layers:[
  {src:'00-bg.png'},
  {src:'05-title.png'},
  {src:'10-hair-back.png',motion:{type:'wave',root:.42,amp:12,speed:1.2,k:.75,area:[.10,.03,1,1]}},
  {src:'20-body.png'},
  {src:'25-halo.png'},
  {src:'31-eyes-shut.png?v=natural-eye-2',motion:{type:'blink-shut'}},
  {src:'40-hair-front.png',motion:{type:'wave',root:.38,amp:4.5,speed:1.5,k:.9,phase:1.1,area:[.41,.05,.72,.91]}},
  {src:'45-hair-side-r.png',motion:{type:'wave',root:.36,amp:8,speed:1.15,k:1,phase:2.3,area:[.59,.10,.80,1]}}
]});
