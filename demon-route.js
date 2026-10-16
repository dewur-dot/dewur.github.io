/* Demon lord route: first-person cutscenes, choice state, and save/resume. */
(() => {
  const nodes = {};
  const chapters = window.DemonStory?.chapters || ['낯선 인간', '관찰 대상', '식탁의 빈자리', '매일 찾아오는 용사', '쓸모없는 선물'];
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
    choices: [choice('“몇 번이나 죽여놓고, 방패도 들지 말라고요?”', 'lower-shield', 2),
      choice('“그러니까 처음부터 말을 좀 들어주셨어야죠.”', 'still-angry'),
      choice('“계속 이러시면 저도 용사가 될 수밖에 없겠네요.”', 'dead-threat', -3)]
  });
  say('lower-shield', 1, '이야기', '당신은 방패 손잡이를 더 세게 쥐었다.\n\n“이거라도 들고 있어야겠어요. 아까는 막지도 못했지만…….”\n\n마왕의 눈썹이 꿈틀했다. 그래도 손을 들지는 않았다.', 'observation');
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

  // The new scenario begins at imprisonment; the previous preview remains a save migration source.
  const oldIds=new Set(Object.keys(nodes));
  if(window.DemonStory){
    const removedStart=Object.keys(nodes).indexOf('guest-room');
    for(const id of Object.keys(nodes).slice(removedStart))delete nodes[id];
    for(const n of Object.values(nodes))n.chapter=0;
    nodes.guest.text='“죽이는 것으로는 끝나지 않는군.”\n\n“잡아가라. 감옥으로.”';nodes.guest.who='마왕';nodes.guest.next='story-1-entry';
    Object.assign(nodes,window.DemonStory.nodes);
    for(const [id,text]of Object.entries(window.DemonStory.opening||{}))if(nodes[id])nodes[id].text=text;
    for(const [id,labels]of Object.entries(window.DemonStory.openingChoices||{}))for(const [i,label]of Object.entries(labels))if(nodes[id]?.choices?.[i])nodes[id].choices[i].label=label;
  }
  for(const n of Object.values(nodes))if(typeof n.text==='string'&&/<\/?(sp|dr|bg)>/.test(n.text)){n.markup=n.text;n.text=n.text.replace(/<\/?(sp|dr|bg)>/g,'');}
  // 주인공의 입밖 대사는 자동으로 재생하지 않는다. 직전 장면의 선택지(한 칸)로 바꾸고, 이어지는 지문은 따로 남긴다.
  // 선택지로 바꿀 수 없는 경우(죽음 화면 직후 등)는 그대로 두고 window.DemonStory.foldSkipped 에 기록한다.
  const foldPlayerSpeech=()=>{
    const quoted=t=>/^[“"]/.test(t.trim());
    const storyP=n=>n&&n.actor==='P'&&(n.who==='{{name}}'||n.who==='주인공');   // 대본(.txt)의 P> 줄: 항상 입 밖의 말
    const isP=n=>n&&!n.choices&&!n.death&&!n.end&&!n.dynamic&&!n.nameEntry&&!n.effects&&!n.checkpoint&&!n.gate&&n.next&&typeof n.text==='string'&&(storyP(n)||((n.actor==='P'||n.who==='주인공')&&quoted(n.text)));
    const preds={};
    for(const [id,n] of Object.entries(nodes)){if(n.next)(preds[n.next]=preds[n.next]||[]).push(id);for(const c of n.choices||[])(preds[c.next]=preds[c.next]||[]).push(id);}
    const skipped=[];
    for(const id of Object.keys(nodes)){
      const n=nodes[id];if(!isP(n))continue;
      const ps=preds[id]||[];if(ps.length!==1){skipped.push(id);continue}
      const p=nodes[ps[0]];
      if(!p||p.choices||p.death||p.end||p.dynamic||p.nameEntry||p.gate||p.retry||!p.next){skipped.push(id);continue}
      const take=node=>{if(storyP(node))return{say:['“'+node.text.replace(/\n+/g,' ').replace(/^[“"]|[”"]$/g,'')+'”'],rest:[]};const paras=node.text.split(/\n{2,}/);const say=[],rest=[];let tail=false;for(const para of paras){if(!tail&&quoted(para))say.push(para.replace(/\n/g,' '));else{tail=true;rest.push(para)}}return{say,rest}};
      let {say,rest}=take(n),last=n,drop=[id];
      while(!rest.length){ // 이어지는 주인공 대사는 한 선택지로 합친다
        const nxId=last.next,nx=nodes[nxId];if(!isP(nx)||(preds[last.next]||[]).length!==1)break;
        const t=take(nx);say.push(...t.say);rest=t.rest;last=nx;drop.push(nxId);
      }
      let target=last.next;
      if(rest.length){const nid=id+'~';nodes[nid]={...last,id:nid,who:'이야기',actor:null,text:rest.join('\n\n'),emphasis:false};delete nodes[nid].markup;delete nodes[nid].vfx;target=nid;}
      const choice={label:say.join(' '),next:target,spoken:true};
      for(const d of new Set(drop)){const r=nodes[d]?.reward;if(!r)continue;if(r.affection)choice.delta=(choice.delta||0)+r.affection;if(r.trust)choice.trust=(choice.trust||0)+r.trust;if(r.anger)choice.anger=(choice.anger||0)+r.anger;if(r.flags)choice.flags=[...(choice.flags||[]),...r.flags];if(r.likes){choice.likes=choice.likes||{};for(const [k,v]of Object.entries(r.likes))choice.likes[k]=(choice.likes[k]||0)+v;}}
      p.choices=[choice];delete p.next;
      for(const d of new Set(drop))delete nodes[d];
      preds[target]=[ps[0]];
    }
    window.DemonStory=window.DemonStory||{};window.DemonStory.foldSkipped=skipped;
  };
  // 하루 단위 전환: story-K-entry 앞에 "하루가 지났다" → DAY 카드(달력 넘김) → 아침 첫 문장을 끼워 넣는다.
  (function buildDays(){
    const days=window.DemonStory?.days||{};
    for(const [k,d]of Object.entries(days)){
      const entry=nodes['story-'+k+'-entry'],first=nodes['ensemble-'+k+'-0'];if(!entry||!first)continue;
      const pre=Object.values(nodes).find(x=>x.next===entry.id||x.choices?.some(c=>c.next===entry.id));
      const mk=(id,chapter,text,next,extra={})=>{nodes[id]={id,chapter,who:'이야기',text,next,...extra}};
      mk('day-'+k+'-end',Number(k)-1,d.end,'day-'+k+'-card',{location:pre?.location,time:pre?.time});
      mk('day-'+k+'-card',Number(k),' ','day-'+k+'-open',{dayCard:{from:d.from,to:d.to},location:first.location,time:first.time});
      mk('day-'+k+'-open',Number(k),d.open,'ensemble-'+k+'-0',{location:first.location,time:first.time});
      const NIGHT=window.DemonStory?.night;
      if(Number(k)>=5&&NIGHT){
        nodes['night-'+k]={id:'night-'+k,chapter:Number(k)-1,who:'이야기',text:NIGHT.intro,nightHub:{k:Number(k),end:'day-'+k+'-end'},choices:[],location:pre?.location,time:'잠들기 전',sceneTitle:'잠들기 전 · 오늘 밤은 어디로?'};
        entry.next='night-'+k;
      }else entry.next='day-'+k+'-end';
    }
  })();
  // 밤 자유시간: 인물별 숨은 서브스토리 (호감도 조건, 한 컷 CG 저장). 데이터는 DemonStory.night.
  (function buildNight(){
    const NIGHT=window.DemonStory?.night,cast=window.DemonStory?.cast||{};if(!NIGHT)return;
    nodes['night-return']={id:'night-return',chapter:0,who:'이야기',text:'',gate:'night-return',next:'story-1-entry'};
    nodes['night-rewind']={id:'night-rewind',chapter:0,who:'이야기',text:'',gate:'night-rewind',next:'story-1-entry'};
    for(const s of NIGHT.spots){
      const base={chapter:4,location:s.location,time:'깊은 밤',sceneTitle:s.place,nightScene:true};
      const present=s.key==='kitchen'?['C','L','S']:[s.char];
      const lineNode=(id,l,next)=>{const k=l[0],c=cast[k];nodes[id]=k==='_'?{id,...base,who:'이야기',text:l[1],next,present,queenPresent:s.char==='Q',expression:null}:{id,...base,who:c?.name||k,actor:k,displayActor:k,text:l[1],next,present:s.key==='kitchen'?present:[k===s.char?k:s.char],queenPresent:k==='Q',expression:l[2]||null}};
      const chain=(prefix,lines,target)=>{lines.forEach((l,i)=>lineNode(prefix+i,l,i+1<lines.length?prefix+(i+1):target));return lines.length?prefix+'0':target};
      const cgId='night-'+s.key+'-cg';
      nodes[cgId]={id:cgId,...base,who:'이야기',text:s.cg.caption,cg:s.cg,next:'night-return'};
      const tail=chain('night-'+s.key+'-t',s.tail,cgId);
      const pickId='night-'+s.key+'-pick';
      const options=s.pick.options.map((o,j)=>({label:o.label,next:chain('night-'+s.key+'-o'+j+'-',o.lines,tail),likes:o.likes,delta:o.delta,trust:o.trust}));
      nodes[pickId]={id:pickId,...base,who:'이야기',text:s.pick.prompt,choices:options,present,queenPresent:s.char==='Q',expression:null};
      chain('night-'+s.key+'-',s.lines,pickId);
    }
  })();
  const forcedNight=(n,state)=>{const NIGHT=window.DemonStory?.night;return (NIGHT?.spots||[]).find(s=>s.forced&&n.nightHub.k>=s['from']&&!state.flags.includes('밤_'+s.key)&&Object.entries(s.need).every(([c,v])=>(c==='Q'?state.affection:((state.likes||{})[c]||0))>=v))};
  const nightChoices=(n,state)=>{
    const NIGHT=window.DemonStory?.night,cast=window.DemonStory?.cast||{},k=n.nightHub.k,out=[];
    const cur=c=>c==='Q'?state.affection:((state.likes||{})[c]||0);
    const forced=forcedNight(n,state);
    if(forced)return [{label:forced.teaser+'. 곁으로 다가간다.',next:'night-'+forced.key+'-0',flags:['밤_'+forced.key],setReturn:n.nightHub.end,setChapter:n.chapter}];
    for(const s of NIGHT.spots){
      if(s.forced||!(s.nights||[s['from']]).includes(k))continue; // 각 서브스토리는 지정된 그 하루 밤에만 열린다. 놓치면 이번 회차에서는 다시 오지 않는다.
      const flag='밤_'+s.key;
      if(state.flags.includes(flag))continue;
      const lack=Object.entries(s.need).filter(([c,v])=>cur(c)<v);
      if(lack.length){out.push({label:'🔒 '+s.place,sub:lack.map(([c,v])=>cast[c].name+' 호감도 '+v+' 필요 (현재 '+Math.max(0,cur(c))+')').join(' · '),locked:true});continue}
      out.push({label:s.place,sub:s.teaser,next:'night-'+s.key+'-0',flags:[flag],setReturn:n.nightHub.end,setChapter:n.chapter});
    }
    out.push({label:NIGHT.sleep,next:n.nightHub.end,setReturn:n.nightHub.end,setChapter:n.chapter});
    return out;
  };
  foldPlayerSpeech();
  const copy = value => JSON.parse(JSON.stringify(value));
  const playerName=()=>{try{return(localStorage.getItem('peace-marriage-player-name')||'').trim().slice(0,20)||'한서준'}catch{return'한서준'}};
  const SAVE = 'peace-marriage-demon-v1';
  const ACTIVE = 'peace-marriage-active-route';
  const newState = () => ({node:'blessing', affection:-100, trust:0, anger:0, flags:[], personality:{playful:0,gentle:0,direct:0,cautious:0}, name:playerName(), likes:{}, inStory:false, deaths:0, mood:'적대', checkpoint:null});
  const moods=['적대','의심','호기심','관찰 대상','이상한 인간','신뢰하는 인간','특별한 인간','사랑하는 사람','배우자'];
  const snapshot=state=>{const result=copy(state);delete result.checkpoint;return result};
  const councilVotes=s=>{const f=x=>s.flags.includes(x);return [
    ['가르나',f('가르나의인정')&&(f('숙소구조')||f('피해복구')),'주민을 지키고 살아 돌아왔는가'],
    ['세레인',f('정직한진술')&&!f('거짓진술')&&(window.DemonStory.evidenceFlags.filter(f).length>=2),'검증할 증거와 정직한 진술이 있는가'],
    ['이그니스',f('장부확보')&&!f('시장강압'),'보급의 문제를 확인했는가'],
    ['네브라',f('포로보호')&&f('인간측증언')&&!f('포로위협'),'적의 포로에게도 같은 기준을 적용했는가']
  ]};
  const LIKE_SCALE=4; // 선택지의 호감 +1이 화면에서는 +4로 보인다 (밤 서브스토리 조건 수치용)
  const relationship=state=>state.flags.includes('결혼')?'배우자':state.flags.includes('고백성공')?'사랑하는 사람':state.flags.includes('경계존중')&&state.trust>=60?'신뢰하는 인간':state.trust>=35?'이상한 인간':'관찰 대상';
  const vows={
    playful:'“결혼식에서도 사랑의 힘 타령을 하면……”\n\n그녀가 당신의 손을 더 꼭 잡았다.\n\n“……평생 옆에서 들어주겠다. 그러니까 도망가지 마라.”',
    gentle:'“네가 내 곁에 있어준 날들을 기억한다.”\n\n“……고맙다. 이제는 나도 네가 돌아올 곳이 되어주겠다.”',
    direct:'“언제나 하고 싶은 말을 피하지 않았지.”\n\n“이번에는 나도 그러겠다. 너와 결혼하고 싶다. 내 옆에 있어라.”',
    cautious:'“네가 기다려준 만큼, 이번에는 내가 먼저 말하겠다.”\n\n“……나와 결혼해주겠나? 오늘도, 내일도. 내 곁에서.”'
  };
  class RouteEngine {
    constructor(save) { this.state=newState();this.history=[];if(save)this.restore(save); }
    restore(save) {
      if(!save||![1,2,3].includes(save.version)||!save.state)return false;
      const st=save.state;
      if(!Number.isInteger(st.affection)||st.affection < -100||st.affection > 100||!Number.isInteger(st.deaths)||st.deaths<0||!moods.includes(st.mood))return false;
      if(save.version===2&&st.inStory){
        this.state=newState();this.state.name=typeof st.name==='string'?st.name.slice(0,20):'한서준';this.state.deaths=st.deaths;
        this.enter('story-1-entry');this.state.flags.push('개편된_마왕성_이야기부터_재개');this.history=[];return true;
      }
      if(save.version===1){
        if(!oldIds.has(st.node))return false;
        this.state={...newState(),...copy(st),checkpoint:null};
        if(!nodes[st.node])this.enter('story-1-entry');
      }else{
        if(!nodes[st.node]||![st.trust,st.anger].every(v=>Number.isInteger(v)&&v>=0&&v<=100)||!Array.isArray(st.flags)||st.flags.length>100||!st.flags.every(v=>typeof v==='string')||!st.personality||!Object.values(st.personality).every(v=>Number.isInteger(v)&&v>=0&&v<=100)||typeof st.name!=='string'||typeof st.inStory!=='boolean')return false;
        if(st.checkpoint&&(!nodes[st.checkpoint.node]?.checkpoint||!Number.isInteger(st.checkpoint.affection)))return false;
        if(st.met&&(!Array.isArray(st.met)||st.met.length>20||!st.met.every(v=>typeof v==='string')))return false;
        this.state={...newState(),...copy(st),name:st.name.slice(0,20)};
        const lk=this.state.likes;if(!lk||typeof lk!=='object'||Array.isArray(lk)||!Object.values(lk).every(v=>Number.isInteger(v)&&v>=0&&v<=100))this.state.likes={};if(this.state.inStory&&typeof this.state.likes.S!=='number')this.state.likes.S=50;
      }
      this.history=[];return true;
    }
    get current(){return nodes[this.state.node]}
    choose(index=0) {
      const n=this.current, c=n.choices?.[index];
      if(n.end||(!n.next&&!c)|| (n.choices&&!c))return false;
      this.history.push(copy(this.state));
      if(n.retry){
        const cp=this.state.checkpoint,deaths=this.state.deaths;
        if(cp){this.state={...this.state,...copy(cp),deaths,checkpoint:copy(cp)};}
      }else if(c){
        this.reward({affection:c.delta,trust:c.trust,anger:c.anger,flags:c.flags,likes:c.likes});
        if(c.tone)this.state.personality[c.tone]++;
        if(c.setReturn){this.state.nightReturn=c.setReturn;this.state.nightChapter=c.setChapter}
      }
      this.enter(c?c.next:n.next);
      return true;
    }
    reward(r={}){
      const s=this.state;
      {const g=this.gains||(this.gains=[]);if(r.affection)g.push({k:'Q',v:r.affection});}
      if(r.affection)s.affection=Math.max(s.inStory?0:-100,Math.min(s.inStory?100:-65,s.affection+r.affection));
      if(r.trust)s.trust=Math.max(0,Math.min(100,s.trust+r.trust));
      if(r.anger)s.anger=Math.max(0,Math.min(100,s.anger+r.anger));
      for(const flag of r.flags||[])if(!s.flags.includes(flag))s.flags.push(flag);
      if(r.likes){s.likes=s.likes||{};for(const [k,v]of Object.entries(r.likes)){const old=s.likes[k]||0;s.likes[k]=Math.max(0,Math.min(100,old+v*LIKE_SCALE));const d=s.likes[k]-old;if(d)(this.gains||(this.gains=[])).push({k,v:d})}}
    }
    enter(id){
      for(let hops=0;hops<12;hops++){
        const n=nodes[id];if(!n)throw new Error('Missing dialogue: '+id);
        this.state.node=id;
        if(/^ensemble-\d+-0$/.test(id)){const cs=snapshot(this.state);delete cs.chapterStart;this.state.chapterStart=cs}
        if(n.nightScene&&Number.isInteger(this.state.nightChapter))n.chapter=this.state.nightChapter;
        this.state.met=this.state.met||[];
        if(n.actor&&!this.state.met.includes(n.actor))this.state.met.push(n.actor);
        if(n.beginRelationship){this.state.inStory=true;this.state.affection=0;this.state.trust=0;this.state.anger=0;this.state.flags=[];this.state.likes={S:50};
          // 서울 운명 문답: 가장 많이 고른 동물 → 호랑이 가르나, 토끼 세레인, 강아지 니아 (+1, 화면 +4)
          try{const q=JSON.parse(localStorage.getItem('peace-marriage-quiz-v1')||'null');if(q){const top=['sera','lune','mira'].sort((a,b)=>(q[b]||0)-(q[a]||0))[0];const who={sera:'G',lune:'V',mira:'C'}[top];if(who&&(q[top]||0)>0)this.state.likes[who]=LIKE_SCALE;}}catch{}}
        if(n.reward)this.reward(n.reward);
        if(n.gate==='earned-romance')id=this.state.affection>=55&&this.state.trust>=60&&this.state.flags.includes('경계존중')&&this.state.flags.includes('자발적귀환')&&this.state.flags.includes('단계적휴전')&&councilVotes(this.state).filter(v=>v[1]).length>=3?n.next:this.state.trust>=40?'end-friend':'end-distance';
        else if(n.gate==='earned-marriage')id=this.state.affection>=90&&this.state.flags.includes('고백성공')&&this.state.flags.includes('공동의약속')?n.next:'end-promise';
        else if(n.gate==='gift')id=this.state.affection>=20||this.state.flags.includes('첫선물')?n.next:'gift-closed-0';
        else if(n.gate==='confession')id=this.state.affection>=70&&this.state.trust>=40&&this.state.flags.includes('사랑자각')?n.next:this.state.trust>=30?'friend-ending-0':'distance-ending-0';
        else if(n.gate==='marriage')id=this.state.affection>=90&&this.state.flags.includes('고백성공')?n.next:'end-promise';
        else if(n.gate==='night-return')id=this.state.nightReturn||'story-1-entry';
        else if(n.gate==='night-rewind'){const cs=this.state.chapterStart;if(!cs)id=this.state.nightReturn||'story-1-entry';else{const deaths=this.state.deaths;this.state=Object.assign(copy(cs),{deaths});id=cs.node}}
        else if(!n.text&&!n.dynamic&&!n.choices&&!n.end)id=n.next;
        else{
          if(n.death)this.state.deaths++;
          if(n.ending==='end-married')this.reward({flags:['결혼']});
          if(n.mood)this.state.mood=n.mood;
          if(this.state.inStory)this.state.mood=relationship(this.state);
          if(n.checkpoint)this.state.checkpoint=snapshot(this.state);
          return;
        }
      }
      throw new Error('Circular story gate');
    }
    back(){this.gains=[];if(!this.history.length)return false;this.state=this.history.pop();return true}
    save(){return {version:3,state:copy(this.state)}}
  }
  const cutscenes={
    balcony:{src:'./demon-cutscene-balcony-v3-wide.png',alt:'주인공의 눈높이에서 바라본, 난간을 잡고 번개 치는 마계를 내려다보는 마왕의 옆모습'},
    spell:{src:'./demon-cutscene-spell-v3-wide.png',alt:'주인공을 향해 검지 끝에서 붉은 파괴마법을 쏘는 마왕. 시야 아래에는 막으려고 뻗은 자신의 맨손이 보인다.'},
    aftermath:{src:'./demon-cutscene-aftermath-barehand-v4-wide.png',alt:'바닥에 쓰러진 주인공의 시선. 피가 흐르는 바닥과 맨손 너머로 마왕이 등을 돌려 걸어간다.'}
  };
  // Explicit node assignments keep rewind and saved-game restoration deterministic.
  for(const id of ['balcony-profile','queen-hair','queen-profile','queen-fatigue','human','question'])if(nodes[id])nodes[id].cutscene='balcony';
  for(const id of ['first-impact','first-confusion'])if(nodes[id])nodes[id].cutscene='spell';
  for(const id of ['first-fall','first-last-words','first-fade'])nodes[id].cutscene='aftermath';
  const niaPortraits={
    base:'./cast/nia-succubus-maid-v2.png',
    angry:'./cast/nia-angry-v1.png',
    shy:'./cast/nia-shy-v1.png'
  };
  const garnaPortraits={
    base:'./cast/garna.png',
    furious:'./cast/garna-furious.png',
    annoyed:'./cast/garna-annoyed.png',
    flustered:'./cast/garna-flustered.png',
    shy:'./cast/garna-shy.png'
  };
  window.DemonCastPortrait=(node,actor,definition)=>{
    if(actor==='G'){
      const gtext=String(node?.text||'');
      if(/크윽|부끄|귀까지|얼굴이 빨/.test(gtext))return garnaPortraits.shy;
      if(/윽|그런 게 아니라|그러려던|깨갱|눈물/.test(gtext))return garnaPortraits.flustered;
      if(/꼬맹이|누가|죽여|부숴|쾅|감히|인간 주제|이 자식|시끄러/.test(gtext))return garnaPortraits.furious;
      if(/뭐야|겁이 없|생각이 없|장난|끄나풀|속으시면|확실/.test(gtext))return garnaPortraits.annoyed;
      return garnaPortraits.base;
    }
    if(actor!=='C')return definition?.portrait;
    const text=String(node?.text||'');
    if(/보지 마|재수 없|화내|소리쳤|짜증|바보|멍청|싫어|안 해|뭐가|닥쳐|시끄러|됐거든|거든!|흥/.test(text))return niaPortraits.angry;
    if(/새빨|얼굴.{0,8}붉|볼.{0,8}가리|부끄|고개를 숙|눈을 피|입술을 깨물|파르르|당황|말을 더듬|수줍/.test(text))return niaPortraits.shy;
    return niaPortraits.base;
  };

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
  for(const [expression,ids]of Object.entries(expressions))for(const id of ids)if(nodes[id])nodes[id].expression=expression;
  const sceneEffects={
    'room':[[0,'shake']],
    'arrival-thunder':[[0,'flash']],
    'first-impact':[[0,'flash'],[120,'hit']],
    'first-confusion':[[0,'surprise']],
    'second-guard':[[0,'hit']],
    'no-explanation':[[0,'slash']],
    'love-power':[[0,'surprise']],
    'how-dare':[[0,'flash'],[0,'shake'],[450,'hit']],
    'outburst':[[0,'surprise']],
    'dead-threat':[[0,'hit']],
    'shield-servant':[[0,'sparkle']],
    'dead-crossfire':[[0,'slash'],[180,'hit']],
    'raid-end':[[0,'slash']],
    'shield-strap':[[0,'sparkle']]
  };
  const resurrectionEffects=[[0,'flash'],[180,'hearts']];
  let engine, root, timer, scenePlayer, portraitPlayer, stage, auto=false, onClose=()=>{};
  const get=id=>root.querySelector('#'+id);
  function readSave(){try{return JSON.parse(localStorage.getItem(SAVE))}catch{return null}}
  function hasSave(){const e=new RouteEngine();return e.restore(readSave())}
  function save(){
    try{localStorage.setItem(SAVE,JSON.stringify(engine.save()));localStorage.setItem(ACTIVE,'demon');return true}catch{return false}
  }
  function mount(){
    if(root)return;
    root=document.createElement('section');root.className='demon-route';root.hidden=true;root.setAttribute('aria-label','마왕 루트');
    root.innerHTML=`<div class="demon-shell"><header class="top"><div><div class="chapter demon-title">마왕 · 낯선 인간</div><div class="demon-status" aria-label="마왕과의 관계"><span>호감도 <strong class="demon-affection" id="demonAffection">−100</strong></span><span>태도 <strong id="demonMood">적대</strong></span><span>사망 <strong id="demonDeaths">0회</strong></span></div></div><div class="demon-header-actions"><select class="day-jump" id="demonDayJump" aria-label="날짜별 이동 (검수용)"></select><button type="button" class="control" id="demonGalleryOpen">갤러리</button><button type="button" class="control" id="demonJournalOpen">기록</button><button type="button" class="control" id="demonRestart">처음부터</button><button type="button" class="control" id="demonMenu">메인으로</button></div></header><section class="panel" id="demonPanel" aria-live="polite"><div class="eyebrow" id="demonChapter"></div><div class="name" id="demonSpeaker"></div><p class="text" id="demonText"></p><div class="choices" id="demonChoices"></div><div class="controls"><button type="button" class="control" id="demonAuto" aria-pressed="false">자동넘기기 ○</button><button type="button" class="control" id="demonBack">되돌리기 ↶</button><span class="demon-saving" id="demonSaving"></span></div><div class="meta"><span id="demonStep"></span><div class="progress"><span id="demonBar"></span></div><span class="click-hint" id="demonClick" aria-hidden="true">click</span></div></section></div><dialog class="story-journal story-gallery" id="demonGallery"><header><span>갤러리</span><button class="control" id="demonGalleryClose" type="button">닫기 ×</button></header><p class="gallery-count" id="galleryCount"></p><div class="gallery-grid" id="galleryGrid"></div></dialog><dialog class="story-journal" id="demonJournal"><header><span>두 사람의 기록</span><button class="control" id="demonJournalClose" type="button">닫기 ×</button></header><p class="journal-location" id="journalChapter"></p><div class="journal-stats" id="journalStats"></div><h3>함께한 사건</h3><div class="journal-events" id="journalEvents"></div><h3>최근 대화</h3><div class="journal-dialogue" id="journalDialogue"></div></dialog>`;
    const art=document.createElement('div');art.className='demon-cutscene';art.id='demonCutscene';art.hidden=true;
    const picture=document.createElement('img');picture.id='demonCutsceneImage';picture.decoding='async';picture.draggable=false;art.append(picture);root.prepend(art);
    const dayCard=document.createElement('div');dayCard.className='day-card';dayCard.id='demonDayCard';dayCard.hidden=true;dayCard.setAttribute('aria-hidden','true');dayCard.innerHTML='<div class="day-stage"><div class="day-page day-new"><header>DAY</header><strong></strong><em class="dday"></em></div><div class="day-page day-old"><header>DAY</header><strong></strong></div></div>';root.append(dayCard);
    const cgPanel=document.createElement('div');cgPanel.className='demon-cg';cgPanel.id='demonCg';cgPanel.hidden=true;cgPanel.innerHTML='<figure class="cg-frame"><div class="cg-art"><div class="cg-placeholder"><strong></strong><span>CG 일러스트 준비 중</span></div></div><figcaption class="cg-tag"></figcaption></figure>';root.prepend(cgPanel);
    const dayBadge=document.createElement('div');dayBadge.className='demon-day';dayBadge.id='demonDay';dayBadge.innerHTML='<small>DAY</small><strong></strong><em class="dday"></em>';root.append(dayBadge);
    // 방 화면(밤 허브): 배경 위의 상호작용 영역. 위치는 퍼센트(방 배경 기준)이며 코덱스 그림에 맞춰 조정한다.
    const roomHub=document.createElement('div');roomHub.className='room-hub';roomHub.id='roomHub';roomHub.hidden=true;
    const roomStage=document.createElement('div');roomStage.className='room-stage';roomHub.append(roomStage);
    const roomLine=document.createElement('p');roomLine.className='room-line';roomLine.id='roomLine';roomHub.append(roomLine);
    const roomNote=document.createElement('p');roomNote.className='room-note';roomNote.id='roomNote';roomNote.hidden=true;roomHub.append(roomNote);
    let noteTimer=0;
    const roomNotice=t=>{roomNote.textContent=t;roomNote.hidden=false;clearTimeout(noteTimer);noteTimer=setTimeout(()=>{roomNote.hidden=true},2200)};
    // 사물 윤곽: poly는 방 그림 전체(1056×593) 기준 %로 손으로 그린 윤곽선. 마우스 판정과 반짝임이 이 모양을 따른다.
    // poly가 없는 항목(mirror, pong)은 x/y/w/h 사각형을 쓴다.
    const ROOM_SPOTS=[
      {id:'door',label:'문 · 밖으로 나간다',poly:'1.8% 0.0%,16.3% 0.0%,16.3% 74.0%,14.2% 75.5%,4.4% 82.3%,1.8% 84.3%',run:()=>{roomView='corridor';render()}},
      {id:'diary',label:'일기장 · 갤러리와 회상',poly:'69.9% 41.8%,76.9% 41.7%,77.8% 42.5%,77.7% 44.2%,70.3% 44.5%,69.7% 43.2%',run:()=>openGallery()},
      {id:'wardrobe',label:'옷장 · 옷 바꾸기',poly:'100.0% 1.0%,95.0% 0.7%,81.1% 13.4%,81.2% 67.5%,88.6% 73.0%,94.9% 80.2%,100.0% 80.6%',run:()=>roomNotice('옷장은 아직 준비 중이다.')},
      {id:'mirror',label:'거울 · 준비 중',poly:'19.7% 6.2%,20.7% 9.3%,21.6% 11.5%,21.7% 16.9%,21.6% 43.5%,19.4% 44.2%,17.2% 43.8%,17.1% 16.9%,17.1% 11.8%,18.0% 9.6%,18.9% 7.6%',soon:true},
      {id:'pong',label:'퐁 · 준비 중',x:27.9,y:75.5,w:13.6,h:17,soon:true},
      {id:'ghost-door',label:'바닥문 · 유령녀의 방',poly:'67.5% 75.5%,83.5% 75.7%,96.1% 91.4%,73.3% 91.2%',soon:true},
      // 침대: 잠드는 유일한 길. 그림 파일이 없으므로 보이지 않는 터치 영역만 둔다. 같은 윤곽이 반짝임 클립도 된다.
      {id:'bed',label:'침대 · 잠든다',poly:'25.0% 48.7%,27.0% 48.2%,29.5% 46.8%,31.2% 46.5%,31.2% 39.8%,31.8% 38.6%,32.5% 39.8%,32.8% 41.1%,34.6% 40.3%,37.9% 39.7%,41.2% 40.3%,43.5% 41.2%,43.8% 39.8%,44.4% 38.6%,45.1% 39.8%,45.2% 54.8%,45.4% 56.2%,44.8% 58.3%,43.6% 60.9%,42.2% 64.1%,42.6% 65.4%,40.7% 67.1%,38.6% 67.1%,38.5% 63.4%,28.4% 63.4%,28.4% 58.5%,25.9% 58.5%,26.1% 50.6%,25.0% 49.9%',noArt:true,run:()=>proceed(0)}
    ];
    // 방 연출: 촛불·등불·달빛·하늘등. 사물 위치(%)는 방 그림 기준 추정치이며 CSS의 .room-fx 블록에서 맞춘다.
    for(const k of ['glow-lamp','glow-window','moon','flame-desk'])roomStage.append(Object.assign(document.createElement('i'),{className:'room-fx '+k}));
    {const sky=document.createElement('div');sky.className='room-fx sky';for(let i=0;i<5;i++)sky.append(document.createElement('i'));roomStage.append(sky)}
    // 침대: 방 그림의 침대 부분만 잘라 올린 층. 마우스를 올리면 이 층이 밝아지고 빛난다(클립 모양이 곧 침대 윤곽).
    const bedLit=document.createElement('div');bedLit.className='room-bed-lit';{const bi=document.createElement('img');bi.src='./rooms/room-bg-wide.png';bi.alt='';bi.draggable=false;bedLit.append(bi)}roomStage.append(bedLit);
    // 라벨: 사물 위에 한 개만 뜨는 말풍선(상단 가장자리에 걸리면 아래에 뜬다).
    const tip=document.createElement('div');tip.className='room-tip';tip.hidden=true;root.append(tip);
    // 윤곽 사물은 버튼이 방 전체를 덮으므로, 말풍선은 윤곽의 바깥 사각형 기준으로 띄운다.
    const spotRect=el=>{if(!el._poly)return el.getBoundingClientRect();const s=roomStage.getBoundingClientRect(),xs=el._poly.map(p=>p[0]),ys=el._poly.map(p=>p[1]);const l=s.left+Math.min(...xs)/100*s.width,r=s.left+Math.max(...xs)/100*s.width,t=s.top+Math.min(...ys)/100*s.height,bt=s.top+Math.max(...ys)/100*s.height;return{left:l,right:r,top:t,bottom:bt,width:r-l,height:bt-t}};
    const showTip=(text,el)=>{const r=spotRect(el);tip.textContent=text;tip.style.left=(r.left+r.width/2)+'px';tip.style.top=(r.top<90?r.bottom+10:r.top-10)+'px';tip.hidden=false};
    const hideTip=()=>{tip.hidden=true};
    for(const sp of ROOM_SPOTS){
      // 윤곽(poly)이 있는 사물은 방 그림을 그 윤곽으로 오려 낸 층을 밝힌다(침대와 같은 방식). 윤곽 없는 사물(퐁)만 따로 오려 둔 그림을 쓴다.
      let img=sp.noArt?(sp.id==='bed'?bedLit:null):document.createElement('img');
      if(sp.poly&&sp.id!=='bed'){const lit=document.createElement('div');lit.className='room-bed-lit';lit.style.setProperty('--bed-clip',`polygon(${sp.poly})`);const li=document.createElement('img');li.src='./rooms/room-bg-wide.png';li.alt='';li.draggable=false;lit.append(li);roomStage.append(lit);img=lit}
      else if(img&&!sp.noArt){img.className='room-object';img.dataset.id=sp.id;img.src='./rooms/room-'+sp.id+'.png?v=20261016-room4';img.alt='';img.draggable=false;roomStage.append(img)}
      const b=document.createElement('button');b.type='button';b.className='room-spot'+(sp.soon?' soon':'');b.dataset.id=sp.id;b.dataset.label=sp.label;b.setAttribute('aria-label',sp.label);
      if(sp.poly){b.style.cssText=`left:0;top:0;width:100%;height:100%;clip-path:polygon(${sp.poly})`;b._poly=sp.poly.split(',').map(p=>p.trim().split(/\s+/).map(v=>parseFloat(v)));if(sp.id==='bed')bedLit.style.setProperty('--bed-clip',`polygon(${sp.poly})`)}
      else b.style.cssText=`left:${sp.x}%;top:${sp.y}%;width:${sp.w}%;height:${sp.h}%`;
      b.addEventListener('pointerenter',()=>{img?.classList.add('lit');showTip(sp.label,b)});b.addEventListener('pointerleave',()=>{img?.classList.remove('lit');hideTip()});
      b.addEventListener('focus',()=>{img?.classList.add('lit');showTip(sp.label,b)});b.addEventListener('blur',()=>{img?.classList.remove('lit');hideTip()});
      b.onclick=()=>{if(sp.soon)roomNotice('아직 준비 중이다.');else sp.run()};
      roomStage.append(b);
    }
    root.append(roomHub);
    root.addEventListener('click',()=>{if(roomActive_()&&!roomQuiet){roomQuiet=true;root.classList.add('room-quiet');hideTip()}});
    const gainStack=document.createElement('div');gainStack.className='gain-stack';gainStack.id='demonGains';gainStack.setAttribute('aria-live','polite');root.append(gainStack);
    const standing=document.createElement('div');standing.className='demon-cutscene demon-standing';standing.id='demonStanding';standing.hidden=true;root.prepend(standing);
    const goddess=document.createElement('div');goddess.className='demon-cutscene';goddess.id='demonGoddess';goddess.hidden=true;
    const goddessImage=document.createElement('img');goddessImage.src='./goddess-comic.png';goddessImage.alt='사랑의 여신';goddess.append(goddessImage);root.prepend(goddess);
    const npc=document.createElement('div');npc.className='demon-cutscene demon-npc';npc.id='demonNpc';npc.hidden=true;
    const npcImage=document.createElement('img');npcImage.id='demonNpcImage';npcImage.decoding='async';npc.append(npcImage);root.prepend(npc);
    portraitPlayer=window.DemonPortrait?DemonPortrait.create(standing):null;
    stage=window.CastStage?CastStage.create(root,standing):null;
    if(portraitPlayer)portraitPlayer.ready.catch(()=>{standing.hidden=true;root.classList.remove('has-portrait');});
    // Preload the three local assets before their dialogue beats arrive.
    for(const scene of Object.values(cutscenes)){const preload=new Image();preload.src=scene.src;}
    document.body.append(root);
    // 사망 화면: 검은 바탕 + 위에서 번져 흘러내리는 피(캔버스) + 큰 글씨
    {const ds=document.createElement('div');ds.className='death-screen';ds.setAttribute('aria-hidden','true');
     ds.innerHTML='<canvas class="death-blood"></canvas><div class="death-title">사 망<small></small></div>';root.prepend(ds);}
    new ResizeObserver(()=>root.style.setProperty('--dialogue-height',get('demonPanel').getBoundingClientRect().height+'px')).observe(get('demonPanel'));
    const canvas=document.createElement('canvas');canvas.className='story-effect-canvas';canvas.setAttribute('aria-hidden','true');root.prepend(canvas);
    const flash=document.createElement('div');flash.className='flash story-scene-flash';flash.setAttribute('aria-hidden','true');root.prepend(flash);
    scenePlayer=new EffectCuePlayer(canvas,flash);
    get('demonMenu').onclick=close;
    get('demonGalleryOpen').onclick=openGallery;
    get('demonGalleryClose').onclick=()=>{get('demonGallery').close();render()};
    const settingsButton=document.createElement('button');settingsButton.type='button';settingsButton.className='control';settingsButton.dataset.resolutionSettings='';settingsButton.textContent='설정';root.querySelector('.demon-header-actions').prepend(settingsButton);
    get('demonJournalOpen').onclick=()=>{
      clearTimeout(timer);scenePlayer.clear();
      get('journalChapter').textContent=chapters[engine.current.chapter];
      const hearts=(window.DemonStory?.romanceCast||[]).filter(k=>(engine.state.likes||{})[k]).map(k=>window.DemonStory.cast[k].name+' ♥'+engine.state.likes[k]).join('  ');
      get('journalStats').textContent=`마왕 호감 ${engine.state.affection}  ·  신뢰 ${engine.state.trust}  ·  분노 ${engine.state.anger}`+(hearts?`\n마음이 기운 사람들 · ${hearts}`:'');get('journalStats').style.whiteSpace='pre-line';
      get('journalEvents').replaceChildren();
      const flags=engine.state.flags.length?engine.state.flags:['아직 함께한 사건이 없습니다.'];
      for(const flag of flags){const chip=document.createElement('span');chip.textContent=flag.replaceAll('_',' · ');get('journalEvents').append(chip)}
      get('journalDialogue').replaceChildren();
      let castRecord=get('journalCast');
      if(!castRecord){castRecord=document.createElement('section');castRecord.id='journalCast';get('journalDialogue').before(castRecord);}
      castRecord.replaceChildren();
      const heading=document.createElement('h3');heading.textContent='마왕성에서 만난 사람들';castRecord.append(heading);
      for(const key of engine.state.met||[]){
        const actor=window.DemonStory?.cast?.[key];if(!actor?.bio)continue;
        const card=document.createElement('p'),title=document.createElement('strong');title.textContent=actor.name+' · '+actor.role;title.style.color=actor.color;
        card.append(title,document.createElement('br'),document.createTextNode(actor.bio));castRecord.append(card);
      }
      for(const st of [...engine.history.slice(-35),engine.state]){
        const n=nodes[st.node];if(!n||n.dynamic)continue;
        const line=document.createElement('p');const name=document.createElement('strong');name.textContent=n.who.replaceAll('{{name}}',st.name||'한서준')+'  ';line.append(name,document.createTextNode(n.text.replaceAll('{{name}}',st.name||'한서준')));get('journalDialogue').append(line);
      }
      get('demonJournal').showModal();get('demonJournal').scrollTop=0;
    };
    get('demonJournalClose').onclick=()=>get('demonJournal').close();
    get('demonJournal').addEventListener('close',()=>{if(!root.hidden)render()});
    get('demonRestart').onclick=()=>{engine.history.push(copy(engine.state));engine.state=newState();render()};
    get('demonAuto').onclick=()=>{auto=!auto;render()};
    // 검수용 날짜 이동: 그날 아침(DAY 1은 처음)부터 새로 시작한다. 되돌리기로 원래 자리로 돌아갈 수 있다.
    {const sel=get('demonDayJump');sel.innerHTML=dayOptions();
     sel.onchange=()=>{const k=Number(sel.value);sel.value='';sel.blur();if(!k)return;clearTimeout(timer);scenePlayer.clear();engine.history.push(copy(engine.state));engine.state=dayState(k);render()};}
    get('demonBack').onclick=()=>{if(engine.back())render()};
    root.addEventListener('click',event=>{if(event.target.closest('button,.name-entry,.top,.story-journal'))return;advance()});
    document.addEventListener('keydown',event=>{
      if(root.hidden||get('demonJournal').open||get('demonGallery').open||event.repeat||event.target.closest('input,select,textarea,dialog,.choice'))return;
      if(event.key===' '||event.key==='Enter'){event.preventDefault();if(document.activeElement&&document.activeElement!==document.body)document.activeElement.blur();advance()}
      if(event.key==='Escape')close();
    });
    document.addEventListener('visibilitychange',()=>{if(!root.hidden){if(document.hidden){clearTimeout(timer);scenePlayer.clear()}else render()}});
  }
  function proceed(index=0){
    const resurrection=Boolean(engine.current.death&&!engine.current.retry);   // 되돌아가는 죽음(retry)은 하트 없이 선택지로
    engine.gains=[];
    if(!engine.choose(index))return;
    render();
    showGains(engine.gains);
    scenePlayer.play(resurrection?resurrectionEffects:engine.current.effects||sceneEffects[engine.state.node]||[]);
  }
  // 갤러리: 한 번 본 컷은 이 브라우저에 남아 새 게임에서도 유지된다. 그림은 ./gallery/<id>.png (없으면 자리표시).
  const GALLERY_KEY='peace-marriage-gallery-v1';
  const gallery={
    load(){try{const g=JSON.parse(localStorage.getItem(GALLERY_KEY)||'{}');return g&&typeof g==='object'?g:{}}catch{return {}}},
    save(cg){const g=this.load(),fresh=!g[cg.id];if(fresh){g[cg.id]={title:cg.title,caption:cg.caption,at:Date.now()};try{localStorage.setItem(GALLERY_KEY,JSON.stringify(g))}catch{}}return fresh}
  };
  const withArt=(box,id,dir='gallery')=>{const img=new Image();img.alt='';img.draggable=false;img.onload=()=>{window.LiveRig?.unmount(box);box.replaceChildren(img);if(box.classList.contains('cg-art'))window.LiveRig?.mount(box,id,{fit:'cover',posY:.3});const fr=box.closest('.cg-frame');if(fr)fr.style.setProperty('--ar',String(img.naturalWidth/img.naturalHeight))};img.src='./'+dir+'/'+id+'.png'};
  function openGallery(){
    const spots=window.DemonStory?.night?.spots||[],cast=window.DemonStory?.cast||{},saved=gallery.load(),grid=get('galleryGrid');
    grid.replaceChildren();let got=0;
    for(const s of spots){
      const hit=saved[s.cg.id];if(hit)got++;
      const card=document.createElement('article');card.className='gallery-card'+(hit?'':' locked');
      const art=document.createElement('div');art.className='gallery-art';
      if(hit){art.style.setProperty('--c',cast[s.char]?.color||'#e8c4d0');const ph=document.createElement('span');ph.textContent=s.cg.title;art.append(ph);withArt(art,s.cg.id)}else{art.textContent='?'}
      const title=document.createElement('h4');title.textContent=hit?s.cg.title:'???';
      const text=document.createElement('p');text.textContent=hit?hit.caption:'DAY '+(window.DemonStory.days?.[(s.nights||[s['from']])[0]]?.from??'?')+' 밤, '+Object.entries(s.need).map(([c,v])=>(c==='Q'?'마왕 호감 ':cast[c].name+' 호감도 ')+v).join(' · ')+' 이상일 때만 열립니다. 놓치면 다음 회차에.';
      card.append(art,title,text);if(hit)card.onclick=()=>{const v=document.createElement('div');v.className='cg-viewer';const im=new Image();im.alt=s.cg.title;im.draggable=false;im.onload=()=>{const cap=document.createElement('p');cap.textContent=s.cg.title+' · 화면을 누르면 닫힙니다';v.append(im,cap);get('demonGallery').append(v)};v.onclick=()=>v.remove();im.src='./gallery/'+s.cg.id+'.png'};grid.append(card);
    }
    get('galleryCount').textContent='수집한 컷 '+got+' / '+spots.length;
    clearTimeout(timer);scenePlayer.clear();get('demonGallery').showModal();
  }
  // 선택 직후 오르내린 호감도를 우측에 스윽 띄운다. 얼굴 아이콘은 ./face-icons/<파일명>.png (없으면 이니셜 원).
  const FACE_FILE={Q:'demon-lord',L:'lucien',C:'nia',S:'pong',V:'serein',I:'ignis',N:'nevra',H:'lunael',E:'ella',R:'iris',M:'rone',A:'goddess'};
  function showGains(list){
    const host=document.getElementById('demonGains');if(!host||!list||!list.length)return;
    const cast=window.DemonStory?.cast||{},sum={};
    for(const g of list)sum[g.k]=(sum[g.k]||0)+g.v;
    Object.entries(sum).filter(([k,v])=>v).slice(0,4).forEach(([k,v],i)=>{
      const a=cast[k]||{name:k,color:'#ffffff'};
      const el=document.createElement('div');el.className='gain-toast '+(v>0?'up':'down');el.style.setProperty('--c',a.color||'#fff');el.style.animationDelay=(i*0.2)+'s';
      const face=document.createElement('span');face.className='gain-face';face.textContent=String(a.name||k).slice(0,1);
      if(FACE_FILE[k]){const base='./face-icons/'+FACE_FILE[k]+'.png',human=k==='S'&&engine.state.flags.includes('밤_pong');const img=new Image();img.alt='';img.draggable=false;img.onload=()=>{face.textContent='';face.append(img)};if(human){img.onerror=()=>{img.onerror=null;img.src=base};img.src='./face-icons/pong-human.png'}else img.src=base}
      const text=document.createElement('span');text.className='gain-text';
      const num=document.createElement('strong');num.textContent=(v>0?'+':'−')+Math.abs(v);
      text.append(document.createTextNode(a.name+' 호감도 '),num);
      if(k!=='G')el.append(face);
      el.append(text);host.append(el);
      el.addEventListener('animationend',()=>el.remove());setTimeout(()=>el.remove(),4200);
    });
  }
  let dayLock=0;
  function advance(){if(engine.current.dayCard&&Date.now()<dayLock)return;if(!engine.current.choices&&!engine.current.death&&!engine.current.end)proceed()}
  function button(label,action){const b=document.createElement('button');b.type='button';b.className='choice';b.textContent=label;b.onclick=action;get('demonChoices').append(b);return b}
  // 피: 위쪽에 고인 피가 물결 모양 가장자리로 번지고, 굵기가 다른 줄기들이 천천히 흘러내린다.
  // 줄기는 위가 넓고 아래로 갈수록 가늘어지며, 끝에만 살짝 둥근 방울이 맺힌다.
  function bleed(cv){
    const dpr=Math.min(devicePixelRatio||1,1.5),W=cv.clientWidth||innerWidth,H=cv.clientHeight||innerHeight;
    cv.width=W*dpr;cv.height=H*dpr;const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    const U=Math.min(W,H)/720,rnd=Math.random;
    const waves=[0,1,2].map(()=>({k:.004+rnd()*.012,p:rnd()*6.3,a:(3+rnd()*7)*U}));
    const drips=[];let x=rnd()*40*U;
    while(x<W){const w=(5+rnd()*rnd()*26)*U;drips.push({x,w,len:(.12+rnd()*rnd()*.55)*H,delay:rnd()*1.4,speed:.55+rnd()*.8});x+=w*2+(18+rnd()*70)*U}
    const t0=performance.now(),T=6;
    const edge=(x,pool)=>pool+waves.reduce((v,w)=>v+Math.sin(x*w.k+w.p)*w.a,0);
    (function frame(now){
      if(!cv.isConnected||!cv.closest('.is-dead'))return;
      const t=(now-t0)/1000;ctx.clearRect(0,0,W,H);
      const pool=(10+28*Math.min(1,t/1.2))*U*Math.min(1,t/.6);
      const g=ctx.createLinearGradient(0,0,0,H*.75);g.addColorStop(0,'#2b0006');g.addColorStop(.08,'#5c0410');g.addColorStop(.5,'#860816');g.addColorStop(1,'#a50d1c');
      ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(W,0);
      for(let px=W;px>=0;px-=6)ctx.lineTo(px,edge(px,pool));ctx.closePath();ctx.fill();
      for(const d of drips){
        const u=Math.max(0,t-d.delay)*d.speed/3.2,grow=1-Math.pow(1-Math.min(1,u),2.2),L=d.len*grow;if(L<2*U)continue;
        const top=edge(d.x,pool)-2*U,bot=top+L,w=d.w,tip=w*.36;
        ctx.beginPath();
        ctx.moveTo(d.x-w*1.9,top);
        ctx.bezierCurveTo(d.x-w*.9,top+2*U,d.x-w*.55,top+Math.min(L,w*2),d.x-w*.5,top+Math.min(L,w*3));
        ctx.bezierCurveTo(d.x-w*.42,bot-L*.4,d.x-tip,bot-tip*3,d.x-tip*1.25,bot-tip*.6);
        ctx.arc(d.x,bot-tip*.6,tip*1.25,Math.PI,0,true);
        ctx.bezierCurveTo(d.x+tip,bot-tip*3,d.x+w*.42,bot-L*.4,d.x+w*.5,top+Math.min(L,w*3));
        ctx.bezierCurveTo(d.x+w*.55,top+Math.min(L,w*2),d.x+w*.9,top+2*U,d.x+w*1.9,top);
        ctx.closePath();ctx.fill();
        // 젖은 광택
        ctx.save();ctx.globalAlpha=.25;ctx.strokeStyle='#ff6b6b';ctx.lineWidth=Math.max(1,w*.12);ctx.lineCap='round';
        ctx.beginPath();ctx.moveTo(d.x-w*.22,top+w*2.2);ctx.lineTo(d.x-tip*.5,Math.max(top+w*2.2,bot-tip*2.2));ctx.stroke();ctx.restore();
      }
      if(t<T)requestAnimationFrame(frame);
    })(t0);
  }
  let roomView='room', roomPrev=null, roomQuiet=false;
  const roomActive_=()=>Boolean(engine.current?.nightHub&&roomView==='room'&&!root.classList.contains('room-pick'));
  function render(){
    clearTimeout(timer);
    scenePlayer.clear();
    const n=engine.current, state=engine.state;
    if(roomPrev!==n.id){roomView=n.nightHub?'intro':'room';roomPrev=n.id;roomQuiet=false;root.classList.remove('room-quiet')}
    if(n.nightScene&&Number.isInteger(state.nightChapter))n.chapter=state.nightChapter;
    let roomActive=false,roomCorridor=false,roomIntro=false;
    if(n.nightHub){
      const f=forcedNight(n,state),all=nightChoices(n,state);
      roomActive=!f&&roomView==='room';roomCorridor=!f&&roomView==='corridor';roomIntro=!f&&roomView==='intro';
      n.text=f?f.forcedIntro:roomIntro?'방으로 돌아왔다. 오늘의 업무는 끝났다. 무엇을 할까?':roomCorridor?'복도로 나왔다. 오늘은 어디로 가볼까?':roomActive?'방 안은 조용했다. 오늘 밤은 어떻게 보낼까?':window.DemonStory.night.intro;
      // 소개 단계에서는 선택지 없이 버튼 하나만(눌러야 방으로 넘어간다). 방: 잠들기만. 복도: 이벤트 목록.
      // 방: 선택지는 버튼으로 따로 그린다(아래). 잠들기는 엔진에 남겨 두고 방에서만 '잠든다 · 다음 날로'로 보여준다. 복도: 잠들기 없이 이벤트만.
      n.choices=f?all:roomCorridor?all.slice(0,-1):roomIntro?[]:[all[all.length-1]];
    }
    let location=n.location||({1:'prison',2:'prison',3:'corridor',4:'corridor',5:'study',6:'city',7:'city',8:'balcony',9:'corridor',10:'city',11:'corridor',12:'study',13:'corridor',14:'balcony',15:'balcony'}[n.chapter]||'castle');
    root.dataset.location=roomActive?'bedroom':location;
    {const db=document.getElementById('demonDay');
      if(db){
        const D=window.DemonStory?.days||{};let day=1;for(let k=1;k<=(n.chapter||0);k++)if(D[k])day=D[k].to;
        db.hidden=Boolean(n.end||n.dayCard);
        {const rm=window.DemonStory?.redMoonDay,dd=db.querySelector('.dday');if(dd){dd.hidden=!rm;if(rm)dd.textContent='붉은 달 D-'+Math.max(0,rm-day)}}
        const num=db.querySelector('strong');if(num.textContent!==String(day)){num.textContent=day;db.classList.remove('bump');void db.offsetWidth;db.classList.add('bump')}
      }}
    {const dc=document.getElementById('demonDayCard');
      if(dc){
        if(n.dayCard){
          dc.querySelector('.day-old strong').textContent=n.dayCard.from;dc.querySelector('.day-new strong').textContent=n.dayCard.to;
          {const rm=window.DemonStory?.redMoonDay,dd=dc.querySelector('.day-new .dday');if(dd){dd.hidden=!rm;if(rm)dd.textContent='붉은 달까지 D-'+Math.max(0,rm-n.dayCard.to)}}
          dc.hidden=false;dc.classList.remove('on');void dc.offsetWidth;dc.classList.add('on');dayLock=Date.now()+1900;
          const id=engine.state.node;timer=setTimeout(()=>{if(engine.state.node===id&&!root.hidden)advance()},3900);
        }else{dc.hidden=true;dc.classList.remove('on')}
      }}
    root.classList.toggle('story-ending',Boolean(n.end));
    root.classList.toggle('remote-scene',Boolean(n.remote));
    root.classList.toggle('room-pick',Boolean(n.nightHub&&roomCorridor&&!forcedNight(n,state)));
    root.classList.toggle('room-mode',Boolean(n.nightHub&&roomActive));
    if(!roomActive)root.classList.remove('room-quiet');
    {const was=root.classList.contains('is-dead');root.classList.toggle('is-dead',Boolean(n.death));root.classList.toggle('is-final-death',Boolean(n.death&&n.retry));
     const ds=root.querySelector('.death-screen');if(ds){ds.querySelector('small').textContent=n.retry?'이번에는, 다시 일어날 수 없었다.':'……그러나 실은, 아직 끊어지지 않았다.';
       if(n.death&&!was){ds.classList.remove('run');void ds.offsetWidth;ds.classList.add('run');bleed(ds.querySelector('canvas'))}}}
    const scene=n.death?null:cutscenes[n.cutscene];
    root.classList.toggle('has-cutscene',Boolean(scene));
    get('demonCutscene').hidden=!scene;
    if(scene){
      const picture=get('demonCutsceneImage');
      if(picture.getAttribute('src')!==scene.src)picture.src=scene.src;
      picture.alt=scene.alt;
    }
    const castActor=window.DemonStory?.cast?.[n.displayActor||n.actor];
    const multi=Boolean(stage&&Array.isArray(n.present)&&!scene&&!n.death&&n.who!=='사랑의 여신'&&window.DemonStory?.cast);
    const stageInfo=multi?stage.update(n,window.DemonStory.cast):(stage&&stage.clear(),null);
    const showNpc=Boolean(!multi&&!scene&&!n.death&&castActor?.portrait);
    const showPortrait=multi?Boolean(stageInfo.qShown&&portraitPlayer):Boolean(!showNpc&&n.queenPresent!==false&&!scene&&!n.death&&n.expression&&portraitPlayer&&n.who!=='사랑의 여신');
    get('demonNpc').hidden=!showNpc;
    if(showNpc){const img=get('demonNpcImage');const actorKey=n.displayActor||n.actor;const portrait=window.DemonCastPortrait?.(n,actorKey,castActor)||castActor.portrait;if(img.getAttribute('src')!==portrait)img.src=portrait;img.alt=castActor.name+' · '+castActor.role;get('demonNpc').dataset.actor=actorKey;}
    get('demonStanding').hidden=!showPortrait;root.classList.toggle('has-portrait',showPortrait||showNpc||Boolean(multi&&stageInfo.count));
    get('demonGoddess').hidden=n.who!=='사랑의 여신'||n.chapter===0;
    root.classList.toggle('has-goddess',!get('demonGoddess').hidden);
    if(showPortrait&&n.expression)portraitPlayer.setExpression(n.expression).catch(()=>{get('demonStanding').hidden=true;if(get('demonNpc').hidden)root.classList.remove('has-portrait');});
    {const cgEl=get('demonCg');
      root.classList.toggle('has-cg',Boolean(n.cg||n.cut));
      root.classList.toggle('has-cut',Boolean(n.cut&&!n.cg));
      if(cgEl){
        cgEl.hidden=!(n.cg||n.cut);
        if(!n.cg&&!n.cut)delete cgEl.dataset.cur;
        // 스토리 컷신 자리: ./cutscenes/<id>.png 가 있으면 그림, 없으면 '컷신 준비 중' 자리표시. 갤러리에는 저장하지 않는다.
        if(n.cut&&!n.cg&&cgEl.dataset.cur!=='cut:'+n.cut.id){
          cgEl.dataset.cur='cut:'+n.cut.id;
          const art=cgEl.querySelector('.cg-art');cgEl.querySelector('.cg-frame').style.removeProperty('--ar');cgEl.style.setProperty('--c','#c9a6d8');
          const ph=document.createElement('div');ph.className='cg-placeholder';ph.innerHTML='<strong></strong><span>컷신 준비 중</span>';ph.firstChild.textContent=n.cut.title;window.LiveRig?.unmount(art);art.replaceChildren(ph);
          cgEl.querySelector('.cg-tag').textContent='';
          withArt(art,n.cut.id,'cutscenes');
        }
        if(n.cg){cgEl.dataset.cur='cg:'+n.cg.id;
          const fresh=gallery.save(n.cg),art=cgEl.querySelector('.cg-art');cgEl.querySelector('.cg-frame').style.removeProperty('--ar');
          cgEl.style.setProperty('--c',(window.DemonStory?.cast?.[(window.DemonStory.night.spots.find(s=>s.cg.id===n.cg.id)||{}).char]||{}).color||'#e8c4d0');
          const ph=document.createElement('div');ph.className='cg-placeholder';ph.innerHTML='<strong></strong><span>CG 일러스트 준비 중</span>';ph.firstChild.textContent=n.cg.title;window.LiveRig?.unmount(art);art.replaceChildren(ph);
          cgEl.querySelector('.cg-tag').textContent=(fresh?'✦ 갤러리에 새로 저장되었습니다':'✦ 갤러리에 저장된 장면')+' — '+n.cg.title;
          withArt(art,n.cg.id);
        }
      }}
    root.querySelector('.demon-title').textContent='마왕 · '+(n.sceneTitle||chapters[n.chapter]);
    get('demonChapter').textContent=n.death?'DEAD END':n.end?n.who:n.chapter===0?'서장 · 이세계 출근 첫날':String(n.chapter).padStart(2,'0')+' · '+chapters[n.chapter];
    get('demonAffection').textContent=String(state.affection).replace('-','−');
    get('demonMood').textContent=state.mood;
    get('demonDeaths').textContent=state.deaths+'회';
    get('demonSpeaker').textContent=n.who==='DEAD END'?'':n.who.replaceAll('{{name}}',state.name).replace(/^주인공$/,state.name);
    // 주인공이 말하는 줄은 이름을 띄우고 글자색을 따로 쓴다
    get('demonPanel').classList.toggle('player-line',!n.death&&(n.actor==='P'||n.who==='주인공'||n.who==='{{name}}'));
    const actor=window.DemonStory?.cast?.[n.actor];
    get('demonSpeaker').style.color=actor?.color||'';
    if(actor?.role&&n.actor!=='P')get('demonSpeaker').textContent+=' · '+actor.role;
    if(n.time)get('demonChapter').textContent+=' / '+n.time;
    let text=n.text.replaceAll('{{name}}',state.name);
    if(n.dynamic==='council')text=councilVotes(state).map(([name,yes,reason])=>name+' — '+(yes?'찬성':'보류')+'\n'+reason).join('\n\n')+'\n\n“이 표결은 당신의 연애를 허락하는 절차가 아닙니다. 우리가 함께 책임질 휴전의 조건입니다.”';
    if(n.dynamic==='vow'){
      const tone=Object.keys(state.personality).sort((a,b)=>state.personality[b]-state.personality[a])[0];text=vows[tone];
    }
    if(n.end&&n.ending&&window.DemonStory?.epilogues){const ep=(window.DemonStory.romanceCast||[]).filter(k=>((state.likes||{})[k]||0)>=3*LIKE_SCALE).sort((a,b)=>state.likes[b]-state.likes[a]).slice(0,3).map(k=>window.DemonStory.epilogues[k]);if(ep.length)text+='\n\n— 그 후 —\n'+ep.join('\n');}
    get('demonText').textContent=text;get('demonText').dataset.voice=n.who;window.DemonFx?.apply({...n,id:engine.state.node},root,state.name);
    get('demonText').classList.toggle('council-summary',n.dynamic==='council');
    get('demonText').classList.toggle('emphasis',Boolean(n.emphasis));
    get('demonChoices').replaceChildren();
    if(n.nameEntry){
      const label=document.createElement('label');label.className='name-entry';label.textContent='당신의 이름';
      const input=document.createElement('input');input.id='warriorName';input.type='text';input.maxLength=20;input.value=state.name==='한서준'||state.name==='전사'?'':state.name;input.placeholder='한서준';input.autocomplete='off';input.setAttribute('aria-label','주인공 이름');
      input.addEventListener('input',()=>{state.name=input.value.trim().slice(0,20)||'한서준';get('demonText').textContent=n.text.replaceAll('{{name}}',state.name);save()});label.append(input);get('demonChoices').append(label);
      button('이름을 말한다',()=>proceed());
    }
    get('demonChoices').classList.toggle('hub',Boolean(n.nightHub));
    if(n.choices&&!roomActive)n.choices.forEach((c,index)=>{
      const b=button(c.label.replaceAll('{{name}}',state.name),()=>proceed(index));if(c.spoken)b.classList.add('spoken');
      if(c.sub){const sub=document.createElement('small');sub.textContent=c.sub;b.append(sub)}
      if(c.locked){b.disabled=true;b.classList.add('locked')}
    });
    else if(n.death)button(n.retry?'선택지로 돌아간다':'사랑의힘?!으로 부활한다',()=>proceed());
    else if(n.end){
      button('메인 화면으로',close);
      button('관찰 대상부터 새 이야기 시작',()=>{engine.history.push(copy(engine.state));engine.state=newState();engine.enter('story-1-entry');render()});
    }
    get('roomHub').hidden=!roomActive;
    {const rl=get('roomLine');
      // 방 안 글: 방에 들어올 때 한 번만 아래쪽에 2초쯤 떴다가 사라진다(다시 렌더되어도 반복하지 않는다).
      if(roomActive){rl.textContent=text;if(!rl.classList.contains('on')){void rl.offsetWidth;rl.classList.add('on')}}
      else{rl.classList.remove('on');rl.textContent=''}}
    if(roomIntro)button('방을 둘러본다',()=>{roomView='room';render()});
    if(roomCorridor&&!n.choices.some(c=>!c.locked)){const p=document.createElement('p');p.className='room-pick-empty';p.textContent='오늘은 나가고 싶지 않다.';get('demonChoices').prepend(p)}
    if(roomCorridor)button('← 방으로 돌아간다',()=>{roomView='room';render()});
    get('demonAuto').textContent=auto?'자동넘기기 ●':'자동넘기기 ○';get('demonAuto').setAttribute('aria-pressed',String(auto));
    get('demonAuto').classList.toggle('active',auto);
    get('demonBack').disabled=!engine.history.length;
    get('demonStep').textContent=n.chapter===0?'서장':n.chapter+' / '+(chapters.length-1);
    get('demonClick').hidden=Boolean(n.choices||n.nameEntry||n.death||n.end);
    get('demonBar').style.width=((n.chapter+(n.end?0:.25))/(chapters.length-1)*100)+'%';
    get('demonSaving').textContent=save()?'자동 저장됨':'이 브라우저에서는 저장할 수 없습니다';
    root.scrollTo({top:0,behavior:'instant'});
    get('demonPanel').scrollTop=0;
    if(auto&&!document.hidden&&!get('demonJournal').open&&!n.death&&!n.end&&!n.choices&&!n.nameEntry)timer=setTimeout(advance,Math.max(4500,Math.min(18000,text.length*110)));
  }
  function lastDay(){return Math.max(1,...Object.values(nodes).map(n=>Number(n.chapter)||0))}
  function dayOptions(){let h='<option value="">날짜 이동</option>';for(let k=1;k<=lastDay();k++)h+=`<option value="${k}">DAY ${k}</option>`;return h}
  function dayState(k){const s=newState();if(k>1){const id=['day-'+k+'-card','story-'+k+'-entry'].find(x=>nodes[x]);if(id){s.node=id;s.inStory=true;s.deaths=4}}return s}
  function open({resume=false,onExit=()=>{},day=0}={}){
    mount();onClose=onExit;engine=new RouteEngine();
    if(day)engine.state=dayState(day);else if(resume)engine.restore(readSave());
    root.hidden=false;document.querySelector('.game').inert=true;render();return true;
  }
  // 검수용: 방 화면(밤 허브)으로 바로 들어간다. 소개 단계를 건너뛰고 방에서 시작한다.
  function previewRoom({day=6,onExit=()=>{}}={}){
    open({day,onExit});
    engine.state.node='night-'+day;engine.state.inStory=true;
    roomView='room';roomPrev='night-'+day;render();
  }
  function close(){if(get('demonJournal').open)get('demonJournal').close();clearTimeout(timer);scenePlayer.clear();save();root.hidden=true;document.querySelector('.game').inert=false;onClose()}
  window.DemonRoute={open,previewRoom,hasSave,RouteEngine,nodes,cutscenes,dayOptions:()=>dayOptions()};
})();

