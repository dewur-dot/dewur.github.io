/* Demon lord route: first-person cutscenes, choice state, and save/resume. */
(() => {
  const nodes = {};
  const chapters = ['낯선 인간', '관찰 대상', '식탁의 빈자리', '매일 찾아오는 용사', '쓸모없는 선물'];
  const say = (id, chapter, who, text, next, extra = {}) => {
    nodes[id] = {id, chapter, who, text, next, ...extra};
  };
  const choice = (label, next, delta = 0) => ({label, next, delta});
  const death = (id, text, next, chapter = 0, retry = false) =>
    say(id, chapter, 'DEAD END', text, next, {death: true, retry});

  say('blessing', 0, '사랑의 여신', '“인연이 이어져 있는 동안은, 죽어도 다시 눈을 뜨게 될 거예요.”\n\n뒤늦게 떠오른 여신의 말이었다.', 'arrival');
  say('arrival', 0, '주인공', '“……여기는?”', 'room');
  say('room', 0, '이야기', '손바닥에 닿은 바닥은 얼음처럼 차가웠다. 검게 닦인 돌 위에 당신의 얼굴이 희미하게 비쳤다.\n\n방패 끝을 짚고 일어서자, 갑옷이 부딪치는 소리가 긴 회랑을 따라 멀어졌다.', 'arrival-air');
  say('arrival-air', 0, '이야기', '숨을 들이마셨다. 비에 젖은 돌 냄새 사이로, 쇠를 달군 듯한 매캐한 냄새가 섞여 들어왔다.\n\n공기는 차가운데 목 안쪽은 따끔했다. 방금까지 누워 있던 방의 이불 냄새는 어디에도 없었다.', 'arrival-gallery');
  say('arrival-gallery', 0, '이야기', '벽을 따라 커다란 초상화들이 걸려 있었다. 금이 벗겨진 액자 속 인물들은 저마다 다른 모양의 뿔을 달고 있었다.\n\n누구도 웃고 있지 않았다. 지나가는 당신을 눈으로 좇는 것 같아 시선을 피했다.', 'arrival-scars');
  say('arrival-scars', 0, '이야기', '가까운 초상화에는 칼이 지나간 자국이 있었다. 그림 아래 벽에도 검은 그을음과 깊은 흠집이 남아 있었다.\n\n이상하게도 바닥만은 깨끗했다. 누군가 부서진 조각을 여러 번 쓸어낸 곳처럼.', 'arrival-thunder');
  say('arrival-thunder', 0, '이야기', '열린 아치 너머에서 흰빛이 번졌다. 보랏빛 구름을 갈라놓은 벼락이 사라진 뒤에야 낮고 긴 천둥이 회랑을 울렸다.\n\n벽의 초상화들이 잠깐씩 살아 있는 얼굴처럼 드러났다.', 'arrival-realm');
  say('arrival-realm', 0, '이야기', '회랑 끝은 넓은 테라스로 이어져 있었다. 난간 너머로 검은 첨탑들이 안개 속에 솟아 있었다.\n\n그 아래, 가느다란 붉은 불빛들이 길과 지붕을 따라 이어졌다. 이곳에도 누군가 살고 있었다.', 'balcony-profile');
  say('balcony-profile', 0, '이야기', '그 풍경 앞에 여인이 서 있었다.\n\n한 손으로 돌 난간을 잡은 채 마계를 내려다보고 있었다. 당신이 떨어진 소리가 들렸을 텐데도, 그녀는 곧바로 돌아보지 않았다.', 'queen-hair');
  say('queen-hair', 0, '이야기', '허리 아래까지 내려오는 검은 머리카락이 바람을 따라 느리게 흘렀다. 번개가 칠 때면 그 끝에 짙은 와인빛이 비쳤다.\n\n뒤로 휘어진 검은 뿔 사이에는 작고 날카로운 왕관이 얹혀 있었다.', 'queen-profile');
  say('queen-profile', 0, '이야기', '옆에서 보이는 콧날과 턱선은 날카로웠고, 창백한 뺨에는 핏기가 거의 없었다. 검은 옷깃에 놓인 은빛 장식만 바람에 작게 부딪쳤다.\n\n눈길을 떼기 어려운 얼굴이었다. 그러나 그 인상을 오래 살필 여유는 없었다.', 'queen-fatigue');
  say('queen-fatigue', 0, '이야기', '눈썹 사이에는 깊은 주름이 잡혀 있었다. 난간을 움켜쥔 손가락 끝에서 돌가루가 조금 떨어졌다.\n\n그녀가 고개를 돌렸다. 검붉은 눈동자가 당신의 얼굴, 갑옷, 방패를 차례로 훑었다.', 'human');
  say('human', 0, '마왕', '“……인간?”', 'question');
  say('question', 0, '주인공', '“저기, 혹시 당신이 마—”', 'first-impact');
  say('first-impact', 0, '이야기', '그녀가 당신을 향해 검지를 들었다. 손끝에 맺힌 붉은 점이 새하얗게 빛났다.\n\n빛이 곧장 당신에게 꽂혔다. 방패를 채 올리기도 전에 배를 꿰뚫는 충격이 왔다. 갑옷이 찢어지는 소리는 한 박자 늦었다.', 'first-confusion');
  say('first-confusion', 0, '주인공', '“……어?”', 'first-wound');
  say('first-wound', 0, '이야기', '고개를 내려다보았다.\n\n갑옷의 배 부분이 크게 뚫려 있었다. 그 안에 있어야 할 몸까지, 함께. 당신은 이해하지 못한 채 손부터 갖다 댔다.', 'first-blood');
  say('first-blood', 0, '이야기', '손바닥에 뜨거운 피가 고였다. 눌러 막으려 해도 상처는 손 하나로 덮이지 않았다.\n\n손가락 사이로 흘러내리는 피를 보면서도, 처음에는 아프다는 생각조차 들지 않았다.', 'first-pain');
  say('first-pain', 0, '이야기', '그러다 숨을 들이마신 순간, 배 속에서 타는 듯한 통증이 한꺼번에 치밀었다.\n\n허리를 펴려 할수록 더 깊이 찢기는 것 같았다. 비명을 내려고 벌린 입에서는 짧고 젖은 숨만 새어 나왔다.', 'first-fall');
  say('first-fall', 0, '이야기', '무릎이 꺾였다. 방패를 버티려던 손도 힘을 잃었다.\n\n차가운 바닥이 뺨에 닿았다. 조금 전까지 보이던 초상화가 옆으로 기울어 있었다. 멀리서 천둥이 울렸지만, 이제는 물속에서 듣는 소리처럼 먹먹했다.', 'first-last-words');
  say('first-last-words', 0, '마왕', '“말도 섞기 싫군.”', 'first-fade');
  say('first-fade', 0, '이야기', '발소리가 멀어졌다. 당신은 가지 말라고 말하고 싶었다.\n\n입안에는 쇠 맛이 났고, 손끝부터 감각이 사라졌다. 다음 숨을 쉬어야 한다고 생각했지만, 몸은 더 이상 말을 듣지 않았다.', 'dead-one');
  death('dead-one', '당신의 이름도, 이곳에 온 이유도 전하지 못했습니다.\n\n마왕에게 당신은 또 한 명의 침입자였습니다.', 'revive-breath');
  say('revive-breath', 0, '이야기', '마른기침과 함께 숨이 터져 나왔다.\n\n당신은 바닥을 긁으며 몸을 일으켰다. 가장 먼저 배를 더듬었다. 찢어졌던 갑옷도, 그 아래의 몸도 멀쩡했다.', 'revive-memory');
  say('revive-memory', 0, '이야기', '그런데 손은 여전히 떨렸다. 상처가 있던 곳이 아직 뜨거운 것 같았다.\n\n당신의 발치에는 아까 흘린 피가 남아 있었다. 꿈이었다고 생각할 여지는 없었다.', 'revive-one');
  say('revive-one', 0, '주인공', '“……살아났네?”\n\n배를 누른 손을 떼지 못한 채 중얼거렸다.', 'again');
  say('again', 0, '마왕', '“…….”\n\n“또?”', 'not-hero');
  say('not-hero', 0, '주인공', '“잠깐만요! 저 용사 아니—”', 'second-guard');
  say('second-guard', 0, '이야기', '이번에는 본능적으로 방패를 끌어올렸다. 몸을 낮추고, 충격이 올 방향을 바라보았다.\n\n마왕은 귀찮다는 듯 손목을 한 번 돌렸다. 방패 너머에서 시야가 크게 흔들렸다.', 'dead-two');
  death('dead-two', '용사가 아니라는 설명은 끝내 전달되지 않았습니다.', 'revive-two');
  say('revive-two', 0, '주인공', '“잠깐! 설명할 기회를—”\n\n목소리가 갈라졌다. 다시 아프고 싶지 않다는 생각이 말보다 먼저 목을 조였다.', 'no-explanation');
  say('no-explanation', 0, '마왕', '“용사에게 설명 따위 필요 없다.”', 'dead-three');
  death('dead-three', '세 번째였습니다.\n\n당신은 아직 자기 이름조차 말하지 못했습니다.', 'revive-three');
  say('revive-three', 0, '이야기', '다시 숨이 돌아왔다. 마왕의 손이 올라간다.\n\n이번에는 첫마디부터 달라야 한다.', null, {
    choices: [choice('“이건 사랑의 힘 때문이라고요!”', 'love-power')]
  });
  say('love-power', 0, '마왕', '“…….”\n\n“뭐?”', 'explain-love');
  say('explain-love', 0, '주인공', '“사랑의 신이 내려준 권능이라서—”', 'joke');
  say('joke', 0, '이야기', '마왕의 표정이 굳었다.\n\n조금 전까지의 짜증이 차라리 온화하게 느껴졌다.', 'insult');
  say('insult', 0, '마왕', '“지금 이 몸에게 농담하는 것이냐?”', 'really');
  say('really', 0, '주인공', '“아니, 진짜인데—”', 'how-dare');
  say('how-dare', 0, '마왕', '“감히.”', 'dead-humor');
  death('dead-humor', '마왕은 당신의 유머 감각을 용서하지 않았습니다.', 'fed-up');
  say('fed-up', 1, '마왕', '“또 너냐.”\n\n“이번에는 무슨 변명을—”', 'outburst');
  say('outburst', 1, '주인공', '“아 진짜!!!”', 'pause', {emphasis: true});
  say('pause', 1, '마왕', '“……?”', 'rant');
  say('rant', 1, '주인공', '“내가 용사가 아니라니까!!!”\n\n“죽이고! 또 죽이고!”\n\n“사랑의 힘이라고 하면 비웃고!”', 'how-many', {emphasis: true});
  say('how-many', 1, '주인공', '“나는 대체 몇 번을 죽어야 하는데!!!”', 'pointing', {emphasis: true});
  say('pointing', 1, '이야기', '손끝이 떨렸다. 그래도 마왕을 향한 손가락을 내리지 않았다.\n\n무서웠다. 이제는 그만큼 화도 났다.', 'kill-me');
  say('kill-me', 1, '주인공', '“죽일 거면 빨리 죽여요!!!”', 'silence', {emphasis: true});
  say('silence', 1, '이야기', '정적.\n\n예상했던 충격은 오지 않았다.\n마왕은 처음으로 공격하지 않았다.', 'strange');
  say('strange', 1, '마왕', '“너…….”\n\n“……이상하군.”', 'what');
  say('what', 1, '주인공', '“뭐요.”', 'intent');
  say('intent', 1, '마왕', '“그 방패를 들고 여기까지 와서, 나를 죽일 생각이 없다고?”', null, {
    mood: '의심', checkpoint: true,
    choices: [choice('방패를 내려놓는다. “누군가를 지키는 게 제 일이에요.”', 'lower-shield', 2),
      choice('“그러니까 처음부터 말을 좀 들어주셨어야죠.”', 'still-angry'),
      choice('“계속 이러시면 저도 용사가 될 수밖에 없겠네요.”', 'dead-threat', -3)]
  });
  say('lower-shield', 1, '이야기', '방패를 천천히 바닥에 내려놓았다.\n\n마왕은 빈손이 된 당신을 보고도 바로 믿어주지는 않았다.', 'observation');
  say('still-angry', 1, '마왕', '“인간 주제에 말은 많군.”\n\n짜증 섞인 목소리였다. 그래도 이번에는 끝까지 듣고 있었다.', 'observation');
  death('dead-threat', '“결국 본색을 드러내는군.”\n\n용사라는 말은 여전히 금기였습니다.', 'intent', 1, true);
  say('observation', 1, '마왕', '“오늘은 죽이지 않겠다.”', 'why');
  say('why', 1, '주인공', '“왜요?”', 'observe');
  say('observe', 1, '마왕', '“관찰할 것이다.”', 'observe-what');
  say('observe-what', 1, '주인공', '“뭘요?”', 'what-you-are');
  say('what-you-are', 1, '마왕', '“네가 대체 무엇인지.”', 'guest', {mood: '호기심'});
  say('guest', 1, '이야기', '환영도, 용서도 아니었다.\n\n그래도 오늘 처음으로 살아 있는 채 대화가 끝났다.', 'guest-room');
  say('guest-room', 1, '이야기', '안내받은 방에는 침대와 물주전자, 높은 창 하나가 있었다. 창밖에서는 여전히 번개가 치고 있었다.\n\n문이 닫히자 당신은 그제야 주저앉았다. 습관처럼 배를 눌러보고, 손바닥이 젖지 않은 것을 확인했다.', 'guest-night');
  say('guest-night', 1, '이야기', '침대는 생각보다 푹신했다. 하지만 눈을 감으면 차가운 바닥이 뺨에 다시 닿는 것 같았다.\n\n당신은 방패를 침대 옆에 세워두었다. 그것으로 막지 못했다는 사실을 알면서도.', 'meal-start');

  say('meal-start', 2, '이야기', '다음 날 저녁.\n\n문틈으로 따뜻한 냄새가 흘러나왔다. 고기를 익힌 냄새와 막 구운 빵 냄새였다.\n배가 먼저 반응했다.', 'meal-room');
  say('meal-room', 2, '이야기', '긴 식탁 위에는 촛불이 줄지어 켜져 있었다. 의자는 열두 개였지만, 음식이 놓인 자리는 하나뿐이었다.\n\n마왕의 칼이 접시에 닿는 소리만 넓은 방을 채웠다.', 'food-ask');
  say('food-ask', 2, '주인공', '“저도 먹어도 됩니까?”', 'no-food');
  say('no-food', 2, '마왕', '“인간에게 먹을 것을 줄 이유가 없다.”', 'stomach');
  say('stomach', 2, '이야기', '꼬르륵.\n\n이 성에서 가장 용감한 것은 당신의 배였다.', 'bread');
  say('bread', 2, '마왕', '“…….”\n\n“받아라.”', 'catch');
  say('catch', 2, '이야기', '작은 빵이 날아왔다. 방패를 들려다가, 급히 두 손으로 받았다.', null, {
    checkpoint: true,
    choices: [choice('“감사합니다.” 조용히 빵을 먹는다.', 'food-thanks', 3),
      choice('“의외로 친절하시네요.”', 'food-denial', -1),
      choice('“독은 안 들었죠?”', 'food-suspicion', -2)]
  });
  say('food-thanks', 2, '마왕', '“착각하지 마라.”\n\n“네가 굶어 죽으면 관찰할 수 없으니까 그런 것이다.”', 'food-end');
  say('food-denial', 2, '마왕', '“누가 친절하다는 것이냐. 배에서 나는 소리가 거슬릴 뿐이다.”\n\n접시를 끌어당기는 손에 힘이 들어갔다.', 'food-end');
  say('food-suspicion', 2, '마왕', '“내가 너 하나 죽이겠다고 음식에 손을 댈 것 같으냐?”\n\n반박할 수 없었다.', 'food-end');
  say('food-end', 2, '이야기', '빵은 아직 따뜻했다. 겉은 단단했지만 속은 부드러웠다. 삼키고 나니 어깨에 들어가 있던 힘이 조금 풀렸다.\n\n마왕은 당신과 눈을 마주치지 않았다. 당신이 다 먹을 때까지, 빈 접시는 치워지지 않았다.', 'raid-start');

  say('raid-start', 3, '이야기', '며칠 뒤, 아직 아침 식사도 끝나지 않은 시간.\n\n성문 쪽에서 종이 울렸다. 숟가락을 든 시종의 손이 멈췄고, 다른 시종은 말없이 창가에서 떨어졌다.', 'raid-signal');
  say('raid-signal', 3, '이야기', '아무도 무슨 일인지 묻지 않았다. 익숙하다는 듯 움직이는 모습이 오히려 불안했다.\n\n마왕은 마시려던 잔을 내려놓았다. 곧 성문 너머에서 고함이 들려왔다.', 'hero-yell');
  say('hero-yell', 3, '용사', '“마왕! 오늘이 네 마지막 날이다!”', 'again-heroes');
  say('again-heroes', 3, '마왕', '“……또 왔어?”', 'help');
  say('help', 3, '주인공', '“제가 도와드릴까요?”', 'no-help');
  say('no-help', 3, '마왕', '“필요 없다.”', 'falling-stone');
  say('falling-stone', 3, '이야기', '문이 부서지며 파편이 복도로 날아들었다.\n\n그 뒤에는 아직 피하지 못한 시종이 서 있었다.', null, {
    checkpoint: true,
    choices: [choice('시종 앞에 방패를 세운다.', 'shield-servant', 4),
      choice('시종에게 피하라고 외치고 함께 몸을 낮춘다.', 'warn-servant', 2),
      choice('용사에게 다가가 인간끼리 먼저 이야기하자고 한다.', 'dead-crossfire', -2)]
  });
  say('shield-servant', 3, '이야기', '방패에 돌조각이 부딪쳤다. 무릎을 굽히고 충격을 버틴다.\n\n이번에는 누군가의 앞에 설 수 있었다.', 'raid-end');
  say('warn-servant', 3, '이야기', '시종이 몸을 낮추는 것을 확인하고 방패를 기울였다.\n\n파편 하나가 방패 끝을 스쳐 지나갔다.', 'raid-end');
  death('dead-crossfire', '두 진영 사이로 들어서는 순간, 협상보다 공격이 먼저 닿았습니다.\n\n누군가를 지키려면 먼저 서야 할 자리를 골라야 합니다.', 'falling-stone', 3, true);
  say('raid-end', 3, '이야기', '전투는 짧았다.\n\n용사 일행이 쓰러지고, 성 안에는 다시 정적이 내려앉았다.', 'annoyed');
  say('annoyed', 3, '마왕', '“……짜증나는 놈들.”', 'hate-them');
  say('hate-them', 3, '주인공', '“많이 싫어하시네요.”', 'every-day');
  say('every-day', 3, '마왕', '“매일같이 찾아와서 내 목을 베겠다고 하니까.”\n\n“인간들은 대체 언제쯤 질리는 것이냐.”', null, {
    choices: [choice('“……그건 좀 이해되네요.”', 'understand', 3),
      choice('“다음에는 제가 문 앞에서 먼저 이야기해 볼게요.”', 'door-guard', 1),
      choice('“그래도 인간을 전부 똑같이 보시면 안 되죠.”', 'not-now', -2)]
  });
  say('understand', 3, '이야기', '마왕이 당신을 보았다.\n\n늘 되돌아오던 모욕이 이번에는 없었다.', 'same-side');
  say('door-guard', 3, '마왕', '“네가 되살아난다고 아프지도 않은 줄 아느냐.”\n\n“쓸데없는 일은 하지 마라.”', 'same-side');
  say('not-now', 3, '마왕', '“지금 내 성문을 부순 자들이 무슨 종족인지부터 봐라.”\n\n당신은 입을 다물었다. 그 말은 오늘, 지금 할 말이 아니었다.', 'same-side');
  say('same-side', 3, '마왕', '“……다음에는 복도부터 막아라.”\n\n“하등한 인간이라도 방패 쓰는 법은 아는 모양이니.”', 'small-role');
  say('small-role', 3, '이야기', '여전히 거친 말이었다.\n\n하지만 이번에는 성 밖으로 내쫓으라는 뜻이 아니었다.', 'village');

  say('village', 4, '이야기', '그 뒤로 며칠 더 지났다.\n\n당신은 생필품을 사러 국경 쪽 인간 마을에 가겠다고 말했다. 마왕은 관찰이라며 모습을 감추고 따라왔다.', 'village-market');
  say('village-market', 4, '이야기', '작은 광장에는 볕에 말린 허브와 가죽 제품이 걸려 있었다. 가게마다 흥정하는 목소리가 들렸다.\n\n“여긴 시끄럽군.” 보이지 않는 마왕의 목소리가 바로 옆에서 들렸다.', 'village-gift');
  say('village-gift', 4, '이야기', '노점 앞에서 한 사람이 다른 사람의 손에 작은 꾸러미를 쥐여주었다. 받는 사람은 한참 웃더니, 풀었던 끈을 조심스럽게 다시 묶었다.\n\n마왕의 발소리가 그 앞에서 멎었다.', 'gift-question');
  say('gift-question', 4, '마왕', '“인간들은 왜 서로 선물을 주지?”', null, {
    choices: [choice('“좋아하니까요. 그 사람이 기뻤으면 하는 거죠.”', 'gift-love', 2),
      choice('“고마운데 말로는 잘 안 될 때도 있고요.”', 'gift-thanks', 2),
      choice('“마음을 얻으려면 뭔가 줘야죠.”', 'gift-trade', -1)]
  });
  say('gift-love', 4, '마왕', '“쓸모없는 행동이군.”\n\n그렇게 말하면서도 마왕은 노점을 한 번 더 돌아보았다.', 'gift-later');
  say('gift-thanks', 4, '마왕', '“말도 제대로 못 하는 종족이군.”\n\n평소 같은 핀잔이었다. 그런데 이번에는 물건들을 살펴보고 있었다.', 'gift-later');
  say('gift-trade', 4, '마왕', '“결국 거래라는 말이군.”\n\n당신은 설명이 어딘가 잘못되었다는 것을 느꼈다.', 'gift-later');
  say('gift-later', 4, '이야기', '이틀 뒤.\n\n당신의 방 앞에서 마왕과 마주쳤다.\n마왕은 손에 든 작은 꾸러미를 잠시 등 뒤로 감췄다.', 'gift-here');
  say('gift-here', 4, '마왕', '“……이거.”', 'what-gift');
  say('what-gift', 4, '주인공', '“이게 뭔데요?”', 'test-gift');
  say('test-gift', 4, '마왕', '“인간들이 좋아하는 거라며.”\n\n“……시험해보는 것이다.”', 'shield-strap');
  say('shield-strap', 4, '이야기', '매듭을 풀자 새 가죽 냄새가 났다. 안에는 검은 방패 끈이 들어 있었다. 손목에 닿는 안쪽은 부드럽게 덧대어져 있었다.\n\n지난 습격 때 뜯어진 곳에 꼭 맞는 길이였다.', null, {
    choices: [choice('“잘 쓸게요.” 바로 방패에 끼운다.', 'use-gift', 3),
      choice('“제 방패를 보고 계셨어요?”', 'noticed', 1),
      choice('“혹시 저 좋아합니까?”', 'too-early', -3)]
  });
  say('use-gift', 4, '마왕', '“관찰 대상이 장비 때문에 부서지면 귀찮아질 뿐이다.”\n\n마왕은 당신이 끈을 매는 동안 자리를 뜨지 않았다.', 'tomorrow');
  say('noticed', 4, '마왕', '“관찰한다고 했잖느냐.”\n\n말끝이 평소보다 조금 빨랐다.', 'tomorrow');
  say('too-early', 4, '마왕', '“착각도 정도껏 해라.”\n\n“나는 인간을 좋아하지 않는다.”\n\n꾸러미를 쥐여준 손이 곧바로 멀어졌다.', 'tomorrow');
  say('tomorrow', 4, '마왕', '“……내일 식사 때 늦지 마라.”', 'not-love');
  say('not-love', 4, '이야기', '좋아한다는 말은 아니었다.\n\n당신을 인간으로 보는 시선도 아직 차가웠다.\n\n그래도 내일, 당신이 앉을 자리는 남아 있었다.', 'opening-end');
  say('opening-end', 4, '초반부 완료', '죽여야 할 침입자에서, 곁에 두고 지켜볼 인간으로.\n\n이제야 두 사람의 이야기가 시작됩니다.', null, {end: true});

  const copy = value => JSON.parse(JSON.stringify(value));
  const SAVE = 'peace-marriage-demon-v1';
  const ACTIVE = 'peace-marriage-active-route';
  const newState = () => ({node:'blessing', affection:-100, deaths:0, mood:'적대', checkpoint:null});
  class RouteEngine {
    constructor(save) { this.state=newState();this.history=[];if(save)this.restore(save); }
    restore(save) {
      if(!save||save.version!==1||!nodes[save.state?.node])return false;
      const st=save.state;
      if(!Number.isInteger(st.affection)||st.affection < -100||st.affection > -65||!Number.isInteger(st.deaths)||st.deaths<0)return false;
      if(!['적대','의심','호기심'].includes(st.mood))return false;
      if(st.checkpoint&&(!nodes[st.checkpoint.node]?.checkpoint||!Number.isInteger(st.checkpoint.affection)||!['적대','의심','호기심'].includes(st.checkpoint.mood)))return false;
      this.state=copy(st);this.history=[];return true;
    }
    get current(){return nodes[this.state.node]}
    choose(index=0) {
      const n=this.current, c=n.choices?.[index];
      if(n.end||(!n.next&&!c)|| (n.choices&&!c))return false;
      this.history.push(copy(this.state));
      if(n.retry){
        const cp=this.state.checkpoint;
        if(cp){this.state.affection=cp.affection;this.state.mood=cp.mood;}
      }else if(c){this.state.affection=Math.max(-100,Math.min(-65,this.state.affection+c.delta));}
      this.state.node=c?c.next:n.next;
      const target=this.current;
      if(target.death)this.state.deaths++;
      if(target.mood)this.state.mood=target.mood;
      if(target.checkpoint)this.state.checkpoint={node:target.id,affection:this.state.affection,mood:this.state.mood};
      return true;
    }
    back(){if(!this.history.length)return false;this.state=this.history.pop();return true}
    save(){return {version:1,state:copy(this.state)}}
  }
  const cutscenes={
    balcony:{src:'./demon-cutscene-balcony-v3.png',alt:'주인공의 눈높이에서 바라본, 난간을 잡고 번개 치는 마계를 내려다보는 마왕의 옆모습'},
    spell:{src:'./demon-cutscene-spell-v3.png',alt:'주인공을 향해 검지 끝에서 붉은 파괴마법을 쏘는 마왕. 시야 아래에는 자신의 방패와 손이 보인다.'},
    aftermath:{src:'./demon-cutscene-aftermath-v3.png',alt:'바닥에 쓰러진 주인공의 시선. 피가 흐르는 바닥과 자신의 손 너머로 마왕이 등을 돌려 걸어간다.'}
  };
  // Explicit node assignments keep rewind and saved-game restoration deterministic.
  for(const id of ['balcony-profile','queen-hair','queen-profile','queen-fatigue','human','question'])nodes[id].cutscene='balcony';
  for(const id of ['first-impact','first-confusion'])nodes[id].cutscene='spell';
  for(const id of ['first-fall','first-last-words','first-fade'])nodes[id].cutscene='aftermath';
  // One standing sprite with a local face rig. Cutscenes and DEAD END take precedence.
  const expressions={
    angry:['second-guard','revive-two','no-explanation','revive-three','fed-up','still-angry','food-ask','no-food','stomach','food-denial','food-suspicion','annoyed','hate-them','not-now','too-early'],
    disbelief:['again','not-hero','love-power','explain-love','outburst','pause','rant','how-many','pointing','kill-me'],
    curious:['silence','strange','what','intent','lower-shield','observation','why','observe','observe-what','what-you-are','guest','understand'],
    furious:['joke','insult','really','again-heroes','help','no-help'],
    enraged:['how-dare'],
    indifferent:['bread','catch','food-thanks','food-end','same-side','small-role','tomorrow','not-love'],
    uncomfortable:['door-guard','gift-later','gift-here','what-gift','test-gift','shield-strap','use-gift','noticed'],
    gloomy:['every-day']
  };
  for(const [expression,ids]of Object.entries(expressions))for(const id of ids)nodes[id].expression=expression;
  const sceneEffects={
    'arrival-thunder':[[0,'flash']],
    'first-impact':[[0,'flash'],[120,'hit']],
    'first-confusion':[[0,'surprise']],
    'second-guard':[[0,'hit']],
    'no-explanation':[[0,'slash']],
    'love-power':[[0,'surprise']],
    'how-dare':[[0,'flash'],[200,'hit']],
    'outburst':[[0,'surprise']],
    'dead-threat':[[0,'hit']],
    'shield-servant':[[0,'sparkle']],
    'dead-crossfire':[[0,'slash'],[180,'hit']],
    'raid-end':[[0,'slash']],
    'shield-strap':[[0,'sparkle']]
  };
  const resurrectionEffects=[[0,'flash'],[180,'hearts']];
  let engine, root, timer, scenePlayer, portraitPlayer, auto=false, onClose=()=>{};
  const get=id=>root.querySelector('#'+id);
  function readSave(){try{return JSON.parse(localStorage.getItem(SAVE))}catch{return null}}
  function hasSave(){const e=new RouteEngine();return e.restore(readSave())}
  function save(){
    try{localStorage.setItem(SAVE,JSON.stringify(engine.save()));localStorage.setItem(ACTIVE,'demon');return true}catch{return false}
  }
  function mount(){
    if(root)return;
    root=document.createElement('section');root.className='demon-route';root.hidden=true;root.setAttribute('aria-label','마왕 루트');
    root.innerHTML=`<div class="demon-shell"><header class="top"><div><div class="chapter demon-title">마왕 · 낯선 인간</div><div class="demon-status" aria-label="마왕과의 관계"><span>호감도 <strong class="demon-affection" id="demonAffection">−100</strong></span><span>태도 <strong id="demonMood">적대</strong></span><span>사망 <strong id="demonDeaths">0회</strong></span></div></div><div class="demon-header-actions"><button type="button" class="control" id="demonRestart">첫 만남부터</button><button type="button" class="control" id="demonMenu">메인으로</button></div></header><section class="panel" id="demonPanel" aria-live="polite"><div class="eyebrow" id="demonChapter"></div><div class="name" id="demonSpeaker"></div><p class="text" id="demonText"></p><div class="choices" id="demonChoices"></div><div class="controls"><button type="button" class="control" id="demonAuto" aria-pressed="false">자동넘기기 ○</button><button type="button" class="control" id="demonBack">되돌리기 ↶</button><span class="demon-saving" id="demonSaving"></span></div><div class="meta"><span id="demonStep"></span><div class="progress"><span id="demonBar"></span></div><span class="click-hint" id="demonClick" aria-hidden="true">click</span></div></section></div>`;
    const art=document.createElement('div');art.className='demon-cutscene';art.id='demonCutscene';art.hidden=true;
    const picture=document.createElement('img');picture.id='demonCutsceneImage';picture.decoding='async';picture.draggable=false;art.append(picture);root.prepend(art);
    const standing=document.createElement('div');standing.className='demon-cutscene demon-standing';standing.id='demonStanding';standing.hidden=true;root.prepend(standing);
    portraitPlayer=window.DemonPortrait?DemonPortrait.create(standing):null;
    if(portraitPlayer)portraitPlayer.ready.catch(()=>{standing.hidden=true;root.classList.remove('has-portrait');});
    // Preload the three local assets before their dialogue beats arrive.
    for(const scene of Object.values(cutscenes)){const preload=new Image();preload.src=scene.src;}
    document.body.append(root);
    const canvas=document.createElement('canvas');canvas.className='story-effect-canvas';canvas.setAttribute('aria-hidden','true');root.prepend(canvas);
    const flash=document.createElement('div');flash.className='flash story-scene-flash';flash.setAttribute('aria-hidden','true');root.prepend(flash);
    scenePlayer=new EffectCuePlayer(canvas,flash);
    get('demonMenu').onclick=close;
    get('demonRestart').onclick=()=>{engine.history.push(copy(engine.state));engine.state=newState();render()};
    get('demonAuto').onclick=()=>{auto=!auto;render()};
    get('demonBack').onclick=()=>{if(engine.back())render()};
    root.addEventListener('click',event=>{if(event.target.closest('button')||event.target.closest('.top'))return;advance()});
    document.addEventListener('keydown',event=>{
      if(root.hidden||event.repeat||event.target.closest('button'))return;
      if(event.key===' '||event.key==='Enter'){event.preventDefault();advance()}
      if(event.key==='Escape')close();
    });
    document.addEventListener('visibilitychange',()=>{if(!root.hidden){if(document.hidden){clearTimeout(timer);scenePlayer.clear()}else render()}});
  }
  function proceed(index=0){
    const resurrection=Boolean(engine.current.death);
    if(!engine.choose(index))return;
    render();
    scenePlayer.play(resurrection?resurrectionEffects:sceneEffects[engine.state.node]||[]);
  }
  function advance(){if(!engine.current.choices&&!engine.current.death&&!engine.current.end)proceed()}
  function button(label,action){const b=document.createElement('button');b.type='button';b.className='choice';b.textContent=label;b.onclick=action;get('demonChoices').append(b)}
  function render(){
    clearTimeout(timer);
    scenePlayer.clear();
    const n=engine.current, state=engine.state;
    root.classList.toggle('is-dead',Boolean(n.death));
    const scene=n.death?null:cutscenes[n.cutscene];
    root.classList.toggle('has-cutscene',Boolean(scene));
    get('demonCutscene').hidden=!scene;
    if(scene){
      const picture=get('demonCutsceneImage');
      if(picture.getAttribute('src')!==scene.src)picture.src=scene.src;
      picture.alt=scene.alt;
    }
    const showPortrait=Boolean(!scene&&!n.death&&n.expression&&portraitPlayer);
    get('demonStanding').hidden=!showPortrait;root.classList.toggle('has-portrait',showPortrait);
    if(showPortrait)portraitPlayer.setExpression(n.expression).catch(()=>{get('demonStanding').hidden=true;root.classList.remove('has-portrait');});
    root.querySelector('.demon-title').textContent='마왕 · '+chapters[n.chapter];
    get('demonChapter').textContent=n.death?'DEAD END':String(n.chapter+1).padStart(2,'0')+' · '+chapters[n.chapter];
    get('demonAffection').textContent=String(state.affection).replace('-','−');
    get('demonMood').textContent=state.mood;
    get('demonDeaths').textContent=state.deaths+'회';
    get('demonSpeaker').textContent=n.who==='DEAD END'?'':n.who;
    get('demonText').textContent=n.text;get('demonText').dataset.voice=n.who;
    get('demonText').classList.toggle('emphasis',Boolean(n.emphasis));
    get('demonChoices').replaceChildren();
    if(n.choices)n.choices.forEach((c,index)=>button(c.label,()=>proceed(index)));
    else if(n.death)button(n.retry?'선택 직전으로 돌아간다':'사랑의힘?!으로 부활한다',()=>proceed());
    else if(n.end){button('메인 화면으로',close);button('마왕과의 첫 만남 다시 보기',()=>{engine=new RouteEngine();render()})}
    get('demonAuto').textContent=auto?'자동넘기기 ●':'자동넘기기 ○';get('demonAuto').setAttribute('aria-pressed',String(auto));
    get('demonAuto').classList.toggle('active',auto);
    get('demonBack').disabled=!engine.history.length;
    get('demonStep').textContent=(n.chapter+1)+' / '+chapters.length;
    get('demonClick').hidden=Boolean(n.choices||n.death||n.end);
    get('demonBar').style.width=((n.chapter+(n.end?1:.25))/chapters.length*100)+'%';
    get('demonSaving').textContent=save()?'자동 저장됨':'이 브라우저에서는 저장할 수 없습니다';
    root.scrollTo({top:0,behavior:'instant'});
    if(auto&&!document.hidden&&!n.death&&!n.end&&!n.choices)timer=setTimeout(advance,Math.max(4500,Math.min(18000,n.text.length*110)));
  }
  function open({resume=false,onExit=()=>{}}={}){
    mount();onClose=onExit;engine=new RouteEngine();
    if(resume)engine.restore(readSave());
    root.hidden=false;document.querySelector('.game').inert=true;render();return true;
  }
  function close(){clearTimeout(timer);scenePlayer.clear();save();root.hidden=true;document.querySelector('.game').inert=false;onClose()}
  window.DemonRoute={open,hasSave,RouteEngine,nodes,cutscenes};
})();

