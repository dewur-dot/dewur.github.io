/* 다중 인물 무대. DemonStory 노드의 present(화면에 있는 인물) 목록으로 슬롯을 배치한다.
   - 말하는 인물만 밝게, 나머지는 어둡게(주인공·내레이션일 때는 모두 약하게 어둡게)
   - 새로 등장하면 옆에서 슥 들어오며 페이드 인, 사라질 때는 페이드 아웃
   - 슬라임은 전신이 대화창 위에 다 보이도록 별도 크기·위치 계산 */
(function(){
  const X={1:[50],2:[34,66],3:[21,50,79],4:[15,38,62,85],5:[11,31,50,69,89]};
  const HL={1:150,2:122,3:108,4:98,5:92};   // 가로 화면 인물 높이(dvh)
  const HP={1:140,2:104,3:88,4:76};          // 세로(모바일) 화면
  function create(root,standing){
    const layer=document.createElement('div');layer.className='demon-cast';layer.id='demonCast';root.prepend(layer);
    const slots=new Map();let cur=[],floor=0,lastKey='';
    const panel=()=>root.querySelector('.panel');
    function measure(){const p=panel();floor=p&&!root.hidden?p.getBoundingClientRect().top:innerHeight*.7;}
    function place(el,actor,x,h,portrait,defs){
      el.style.setProperty('--x',x+'%');
      if(actor==='S'){ // 슬라임: 몸 전체가 대화창 위에 오도록
        const sh=Math.min(floor*(portrait?.7:.8),innerHeight*.56);
        el.style.setProperty('--h',sh+'px');el.style.setProperty('--top',Math.max(innerHeight*.08,floor-sh*.9-10)+'px');
      }else if(defs[actor]?.heightCm){
        // Height is measured from crown to sole, not the top of a hat or staff.
        // Preserve the source aspect ratio; align soles on a common virtual floor.
        const d=defs[actor],body=d.bodyBottom-d.bodyTop;
        const referenceBody=h*.85,renderHeight=referenceBody*(d.heightCm/165)/body;
        const baseline=(portrait?6:4)+h*.98;
        el.style.setProperty('--h',renderHeight+'dvh');
        el.style.setProperty('--top',(baseline-renderHeight*d.bodyBottom)+'dvh');
      }else{el.style.setProperty('--h',h+'dvh');el.style.setProperty('--top',(portrait?6:4)+'dvh');}
    }
    function update(n,defs){
      const portrait=innerWidth/innerHeight<.8,limit=portrait?1:5;
      let list=(n.present||[]).slice();
      const focus=n.actor?n.actor:n.displayActor;           // 주인공 대사(actor=P)는 누구도 강조하지 않음
      if(portrait&&list.length>1){const camera=list.includes(focus)?focus:list.includes(n.displayActor)?n.displayActor:list[0];list=[camera];}
      while(list.length>limit){const i=list.findIndex(a=>a!==focus&&a!=='Q')>=0?list.findIndex(a=>a!==focus&&a!=='Q'):list.findIndex(a=>a!==focus);list.splice(i,1);}
      measure();
      const hs=(portrait?HP:HL)[list.length]||80,xs=X[list.length]||[];
      const speaker=list.includes(focus)?focus:null;
      const hadQ=cur.includes('Q');
      for(const a of cur)if(!list.includes(a)&&a!=='Q'){const el=slots.get(a);if(el){el.classList.add('leave');slots.delete(a);setTimeout(()=>el.remove(),300);}}
      list.forEach((a,i)=>{
        let el=a==='Q'?standing:slots.get(a);const isNew=a==='Q'?!hadQ:!el;
        if(a!=='Q'&&!el){
          el=document.createElement('div');el.className='cast-slot';el.dataset.actor=a;
          const img=document.createElement('img');img.decoding='async';img.src=defs[a].portrait;img.alt=defs[a].name+' · '+defs[a].role;el.append(img);
          layer.append(el);slots.set(a,el);
        }
        if(a==='Q'){el.classList.add('cast-slot');el.dataset.actor='Q';el.hidden=false;}
        place(el,a,xs[i],hs,portrait,defs);
        el.classList.toggle('speaking',a===speaker);
        el.classList.toggle('mid',!speaker);
        if(isNew){el.dataset.from=xs[i]<44?'left':xs[i]>56?'right':'up';el.classList.remove('enter');void el.offsetWidth;el.classList.add('enter');
          el.addEventListener('animationend',()=>el.classList.remove('enter'),{once:true});}
      });
      requestAnimationFrame(()=>requestAnimationFrame(()=>{measure();list.forEach((a,i)=>{const el=a==='Q'?standing:slots.get(a);if(el)place(el,a,xs[i],hs,portrait,defs);});}));
      if(hadQ&&!list.includes('Q')){standing.classList.remove('speaking');}
      cur=list;root.classList.add('multi-cast');
      return{qShown:list.includes('Q'),count:list.length};
    }
    function clear(){root.classList.remove('multi-cast');for(const el of slots.values())el.remove();slots.clear();cur=[];standing.classList.remove('cast-slot','speaking','mid','enter');}
    addEventListener('resize',()=>{if(cur.length&&!root.hidden)requestAnimationFrame(()=>{measure();});});
    return{update,clear};
  }
  window.CastStage={create};
})();
