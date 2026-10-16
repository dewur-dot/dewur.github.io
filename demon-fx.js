/* 대사 연출 + 일러스트 액션.
   사용법: 아래 MAP 에 "노드ID: {t:글씨연출, a:일러스트액션, s:화면연출}" 를 적으면 된다. (셋 다 선택사항)

   t  (글씨)   jolt 한 번 쿵 흔들림 · shake 부들부들 격하게 · tremble 겁먹은 듯 잔떨림
              pop 커졌다 자리잡음(외침) · slow 한 글자씩 천천히 · whisper 작고 흐릿하게
   a  (그림)   jump 깜짝 놀라 튀어오름 · recoil 움찔 물러남 · quiver 분노로 부들부들
              lean 앞으로 다가섬 · nod 끄덕임 · sway 한숨/지침처럼 느리게 흔들
   s  (화면)   hit 화면이 쿵 흔들리고 붉게 번쩍 · rumble 낮게 길게 울림
   t/a/s 는 서로 자유롭게 조합할 수 있다. */
(function(){
  const MAP={
    'arrival-thunder':{s:'rumble'},
    'queen-fatigue':{a:'sway'},
    'human':{t:'slow',a:'lean'},
    'question':{t:'tremble'},
    'first-impact':{t:'jolt',s:'hit',a:'lean'},
    'first-confusion':{t:'tremble'},
    'first-wound':{t:'tremble'},
    'first-blood':{t:'tremble'},
    'first-pain':{t:'shake'},
    'first-fall':{t:'slow'},
    'first-last-words':{t:'slow'},
    'first-fade':{t:'whisper'},
    'revive-breath':{t:'jolt'},
    'revive-one':{t:'pop'},
    'again':{t:'jolt',a:'jump'},
    'not-hero':{t:'pop'},
    'second-guard':{t:'jolt',s:'hit',a:'lean'},
    'revive-two':{t:'pop'},
    'no-explanation':{t:'slow',a:'quiver'},
    'revive-three':{t:'jolt'},
    'love-power':{t:'slow',a:'jump'},
    'explain-love':{t:'pop'},
    'joke':{a:'recoil'},
    'insult':{t:'shake',a:'quiver'},
    'really':{t:'pop'},
    'how-dare':{t:'pop',a:'quiver',s:'hit'},
    'fed-up':{a:'quiver'},
    'outburst':{t:'pop'},
    'pause':{t:'tremble',a:'jump'},
    'rant':{t:'shake'},
    'how-many':{t:'pop'},
    'pointing':{t:'tremble'},
    'kill-me':{t:'shake'},
    'silence':{t:'slow'},
    'strange':{t:'slow',a:'lean'},
    'observation':{a:'nod'},
    'why':{t:'pop'},
    'observe':{t:'slow'}
  };
  const TEXT=['jolt','shake','tremble','pop','slow','whisper'],ACT=['jump','recoil','quiver','lean','nod','sway'],SCR=['hit','rumble'];
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  let slowTimer=0,cleanup=[];
  function reset(root,textEl){
    clearInterval(slowTimer);
    for(const f of cleanup)f();cleanup=[];
    TEXT.forEach(t=>textEl.classList.remove('fxt-'+t));
    SCR.forEach(s=>root.classList.remove('fxs-'+s));
    root.querySelectorAll('[class*="fxa-"]').forEach(el=>ACT.forEach(a=>el.classList.remove('fxa-'+a)));
  }
  function restart(el,cls){el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls)}
  function charify(el){
    const text=el.textContent;el.textContent='';const spans=[];
    for(const ch of text){
      if(ch==='\n'||ch===' '){el.append(ch);continue}
      const s=document.createElement('span');s.className='fxc';s.textContent=ch;
      s.style.setProperty('--d',(Math.random()*-1).toFixed(2)+'s');s.style.setProperty('--r',(Math.random()*2-1).toFixed(2));
      el.append(s);spans.push(s);
    }
    return spans;
  }
  function apply(n,root){
    const textEl=root.querySelector('#demonText');if(!textEl)return;
    reset(root,textEl);
    const fx=MAP[n.id]||n.fx;if(!fx||reduced())return;
    if(fx.t&&TEXT.includes(fx.t)){
      if(fx.t==='shake'||fx.t==='tremble')charify(textEl);
      if(fx.t==='slow'){
        const spans=charify(textEl);spans.forEach(s=>s.style.opacity='0');let i=0;
        slowTimer=setInterval(()=>{if(i>=spans.length){clearInterval(slowTimer);return}spans[i++].style.opacity='1'},34);
        cleanup.push(()=>spans.forEach(s=>s.style.opacity=''));
      }
      restart(textEl,'fxt-'+fx.t);
    }
    if(fx.s&&SCR.includes(fx.s))restart(root,'fxs-'+fx.s);
    if(fx.a&&ACT.includes(fx.a)){
      const target=root.querySelector('.cast-slot.speaking')||[...root.querySelectorAll('#demonStanding,#demonNpc')].find(e=>!e.hidden&&e.offsetParent!==null||!e.hidden&&getComputedStyle(e).display!=='none');
      if(target)restart(target,'fxa-'+fx.a);
    }
  }
  window.DemonFx={apply,MAP};
})();
