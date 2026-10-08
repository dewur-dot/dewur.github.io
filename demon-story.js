/* Ensemble revision: explicit scenes, persistent choices, earned trust. */
window.DemonStory={
  "revision": 4,
  "chapters": [
    "첫 만남",
    "세탁비는 별도입니다",
    "왕의 허락, 성의 규칙",
    "메이드에게도 퇴근이 있다",
    "퐁이 삼킨 것",
    "사천왕의 식탁",
    "죽지 않는 방패의 문제",
    "시장의 인간",
    "열린 적 없는 문",
    "증거와 편들기",
    "청소가 끝나지 않는 밤",
    "포로의 이름",
    "처음부터 다시 묻는 말",
    "같은 시간의 저녁",
    "떠날 수 있는 사람",
    "국경을 건너는 편지",
    "당신을 고른 이유",
    "왕의 마음과 나라의 일",
    "기다렸다는 말",
    "평화를 연습하는 사람들",
    "당신이 앉을 자리"
  ],
  "cast": {
    "Q": {
      "name": "마왕",
      "role": "마계의 군주",
      "color": "#edb4bd",
      "bio": "계속되는 암살과 침공 속에서 왕좌를 지켜왔다. 사람을 곁에 두는 일과 나라를 책임지는 일을 분리하려 한다. 주인공에게 저지른 폭력은 사과 한마디로 없어지지 않는다."
    },
    "L": {
      "name": "루시엔",
      "role": "뱀파이어 집사",
      "color": "#b9accf",
      "bio": "마왕성의 살림과 피난민 숙소를 관리한다. 혈액은 계약한 공급처에서만 구입한다. 죽음에도 세탁비를 매기는 것처럼 보이지만, 사망자 명부의 빈칸을 가장 싫어한다.",
      "portrait": "./cast/vampire-butler-approved.png"
    },
    "C": {
      "name": "니아",
      "role": "고양이 마물 메이드",
      "color": "#ddb87e",
      "bio": "국경에서 언니와 헤어져 성의 숙소에서 동생들을 돌본다. 메이드 일은 생계다. 인간에게 호의적이지 않으며, 혼자 모든 일을 책임지려는 버릇이 있다. 언젠가 자신의 찻집을 열고 싶다.",
      "portrait": "./cast/nia.png"
    },
    "S": {
      "name": "퐁",
      "role": "청소부 슬라임",
      "color": "#98c7b8",
      "bio": "소금과 뜨거운 물에 약하다. 말 대신 몸의 모양으로 의사를 표현한다. 먹은 것을 금방 분해하지는 못한다. 니아에게는 동료이자 가장 말 잘 듣는 민원인이다.",
      "portrait": "./cast/pong.png"
    },
    "G": {
      "name": "가르문",
      "role": "사천왕 · 성벽의 장군",
      "color": "#c5b49b",
      "bio": "현무암 갑주를 걸친 뿔 달린 거인. 용사에게 부하를 잃었다. 왕보다 먼저 성 안의 병사와 주민을 지켜야 한다고 믿는다. 용기는 희생 횟수가 아니라 살아 돌아온 인원으로 평가한다.",
      "portrait": "./cast/garmun.png"
    },
    "V": {
      "name": "세레인",
      "role": "사천왕 · 첩보와 기록",
      "color": "#b5a4da",
      "bio": "날개의 인분으로 문서의 봉인과 통행 흔적을 읽는 나방 마족. 웃으면서 불편한 질문을 한다. 신뢰할 사람을 고르기보다 서로 속이기 어려운 절차를 만든다.",
      "portrait": "./cast/four-king-lunar-moth-concept-v1.png"
    },
    "I": {
      "name": "이그니스",
      "role": "사천왕 · 결계와 보급",
      "color": "#e6a17e",
      "bio": "향로 위로 연기가 피어오르는 이형의 마족. 얼굴 대신 연기의 흐름과 손짓으로 감정을 드러낸다. 결계를 유지할 연료와 성의 보급을 함께 관리한다.",
      "portrait": "./cast/four-king-smoke-head-concept-v1.png"
    },
    "N": {
      "name": "네브라",
      "role": "사천왕 · 잔향과 실종자",
      "color": "#a0becd",
      "bio": "창백한 푸른 피부와 헝클어진 검은 머리의 유령. 살아 있는 사람 앞에서는 말이 자주 끊긴다. 죽은 이의 잔향을 읽지만, 그 조각만으로 누군가를 단죄하지 않는다.",
      "portrait": "./cast/four-king-ghost-woman-approved.png"
    },
    "P": {
      "name": "주인공",
      "role": "방패를 든 전사",
      "color": "#ead7ab"
    },
    "A": {
      "name": "사랑의 여신",
      "role": "권능의 주인",
      "color": "#efb8d6"
    },
    "T": {
      "name": "토마",
      "role": "인간 측 연락병",
      "color": "#b9c2aa"
    },
    "H": {
      "name": "루나엘",
      "role": "용사 · 기사",
      "color": "#f5adb4",
      "portrait": "./cast/hero-lunael-v3.png",
      "heightCm": 158,
      "bodyTop": 0.12,
      "bodyBottom": 0.975,
      "bio": "마왕 토벌 임무를 맡은 붉은 머리 기사. 칭찬에 약하고 생각이 얼굴에 드러난다. 모르는 것을 아는 척하다가도, 동료가 위험하면 가장 먼저 뛰어든다."
    },
    "E": {
      "name": "엘라",
      "role": "엘프 궁수 · 도적",
      "color": "#c5d6ab",
      "portrait": "./cast/hero-ella-v3.png",
      "heightCm": 165,
      "bodyTop": 0.09,
      "bodyBottom": 0.982,
      "bio": "입이 거칠고 장난을 좋아하는 정찰 담당. 웃을 때 뾰족한 이가 보인다. 사람의 말보다 발자국과 손의 움직임을 믿는다. 친절을 들키면 괜히 한마디를 더 한다."
    },
    "R": {
      "name": "이리스",
      "role": "사제",
      "color": "#f1d7a9",
      "portrait": "./cast/hero-priest-v3.png",
      "heightCm": 162,
      "bodyTop": 0.105,
      "bodyBottom": 0.98,
      "bio": "부드럽게 웃으며 할 말은 다 하는 사제. 치료할 때는 누구의 편인지부터 묻지 않는다. 사례금도 잊지 않는다. 신의 뜻이라는 말로 남의 선택을 대신하는 것을 경계한다."
    },
    "M": {
      "name": "로네",
      "role": "마법사",
      "color": "#c6b4df",
      "portrait": "./cast/hero-mage-v3.png",
      "heightCm": 146,
      "bodyTop": 0.155,
      "bodyBottom": 0.972,
      "heightProvisional": true,
      "bio": "회색 양갈래 머리에 커다란 모자를 쓴 마법사. 잠과 휴식을 좋아한다. 설명은 짧지만 마력의 흐름을 읽는 솜씨는 정확하다. 키 146cm는 화면 배치를 위한 임시 값이다."
    }
  },
  "evidenceFlags": [
    "봉인증거",
    "장부확보",
    "침투증언",
    "인간측증언"
  ],
  "opening": {
    "blessing": "“혹시 무슨 일이 생겨도, 다시 눈을 뜰 수 있을 거예요.”\n\n여신은 분명 그렇게 말했다.\n어디로 보내는지부터 물었어야 했는데.",
    "room": "엉덩이부터 떨어졌다. 숨이 턱 막혔다.\n\n손바닥으로 바닥을 짚었다. 이불 대신 차가운 돌이 만져졌다. 왼팔에는 방패가 매여 있었고, 몸에는 잠들기 전에 벗어둔 갑옷까지 입혀져 있었다.",
    "arrival-air": "“옷 입힐 시간은 있었네…….”\n\n벽을 짚고 일어났다. 열린 창으로 찬바람이 밀려왔다. 젖은 돌 냄새 끝에 뭔가 탄 냄새가 났다.",
    "arrival-gallery": "벽에는 초상화가 줄지어 걸려 있었다. 뿔이 휘어진 노인, 이마에 눈이 셋인 여자, 얼굴을 가면으로 가린 남자.\n\n사람이 그려진 그림은 하나도 없었다.",
    "arrival-scars": "가장 가까운 액자는 한쪽이 깨져 있었다. 칼로 그은 듯한 자국이 그림을 가로질러 벽까지 이어졌다.\n\n발밑에는 유리 한 조각 없었다. 상처 난 벽 아래로 바닥만 반질반질했다.",
    "arrival-thunder": "번쩍.\n\n창밖이 하얗게 밝아졌다. 뒤이어 천둥이 울리자 액자들이 달그락거렸다. 당신은 저도 모르게 몸을 움츠렸다.",
    "arrival-realm": "복도 끝에서 바람이 불어왔다. 밖으로 난 문 너머에 돌 난간이 보였다.\n\n난간 아래로 검은 지붕들이 빽빽했다. 멀리 솟은 탑 사이로 번개가 내리꽂혔다. 벨룬의 밤하늘과는 닮은 구석이 없었다.",
    "balcony-profile": "난간에 기대 선 여자가 있었다.\n\n다가가는 발소리가 꽤 크게 울렸는데도 돌아보지 않았다. 말을 걸려던 당신은 몇 걸음 떨어진 곳에서 멈췄다.",
    "queen-hair": "검은 머리카락이 허리 아래로 길게 흘러내렸다. 바람에 뒤집힌 머리끝은 붉었다.\n\n머리 위로 솟은 두 뿔 사이에 작은 왕관이 걸려 있었다.\n설마.",
    "queen-profile": "그녀의 옆얼굴이 번개에 잠깐 드러났다. 생각보다 젊었다. 또래처럼 보일 정도였다.\n\n예쁘다는 생각이 먼저 든 건 잠깐이었다. 여자는 누군가를 기다리다 지친 사람처럼 잔뜩 인상을 쓰고 있었다.",
    "queen-fatigue": "난간을 쥔 손에서 돌가루가 떨어졌다.\n\n당신이 한 발 물러나자 그제야 그녀가 돌아봤다. 붉은 눈이 갑옷을 훑고, 방패에서 멈췄다.",
    "first-impact": "그녀가 검지를 들었다. 손끝에서 붉은 빛이 번졌다.\n\n방패를 올리려던 순간, 배를 세게 얻어맞았다. 뒤늦게 금속이 찢어지는 소리가 들렸다.",
    "first-wound": "배를 내려다봤다. 갑옷에 구멍이 나 있었다.\n\n손을 갖다 댔는데 있어야 할 것이 만져지지 않았다. 손끝이 자꾸 안으로 들어갔다.",
    "first-blood": "뜨거웠다. 손바닥이 금세 젖었다.\n\n급히 두 손으로 눌렀다. 손가락 사이로 피가 쏟아져도 더 세게 누르는 것 말고는 할 수 있는 일이 없었다.",
    "first-pain": "숨을 쉬려고 하자 통증이 몰려왔다. 배 속을 움켜쥐고 비트는 것 같았다.\n\n입을 벌렸지만 소리가 안 나왔다. 짧은 숨만 자꾸 끊어졌다.",
    "first-fall": "다리에 힘이 풀렸다. 방패가 바닥을 긁으며 팔을 잡아당겼다.\n\n뺨에 차가운 돌이 닿았다. 눈앞에 보이는 건 그녀의 구두 끝이었다.",
    "first-fade": "구두가 돌아섰다. 발소리가 멀어졌다.\n\n가지 말라고 해야 했다. 살려 달라고.\n입술을 움직였는데, 숨이 나오지 않았다.",
    "revive-breath": "숨이 터져 나왔다.\n\n당신은 옆으로 몸을 돌려 한참 기침했다. 배를 더듬었다. 살이 만져졌다. 구멍 났던 갑옷도 멀쩡했다.",
    "revive-memory": "손을 떼고 다시 눌러봤다. 상처는 없었다.\n\n그런데 바닥에는 피가 그대로였다. 손을 짚었던 자리에 빨간 손바닥 자국이 남았다.",
    "revive-one": "“나…… 안 죽었나?”",
    "again": "“……다시 일어났어?”",
    "second-guard": "마왕의 손이 움직였다. 당신은 얼굴까지 방패로 가렸다.\n\n쿵.\n\n팔이 뒤로 꺾였다. 몸이 바닥에서 떠올랐다.",
    "revive-two": "“잠깐만요. 말 좀, 말 좀 들어봐요!”",
    "no-explanation": "“용사 놈들은 하나같이 말이 많아.”",
    "revive-three": "눈을 뜨자마자 그녀의 손부터 찾았다. 벌써 들려 있었다.\n\n당신은 숨도 다 들이마시지 못한 채 외쳤다.",
    "explain-love": "“여신이 그랬어요! 사랑의 힘 때문에 살아나는 거라고!”",
    "joke": "마왕이 손을 멈췄다.\n\n당신은 그 틈에 숨을 골랐다. 말을 잘못 꺼냈다는 건 그녀의 얼굴을 보고 알았다.",
    "insult": "“지금 나랑 장난해?”",
    "really": "“제가 이 상황에 장난을 왜 해요—”",
    "how-dare": "“닥쳐.”",
    "fed-up": "“또 살아났군. 이번에는 무슨—”",
    "outburst": "“아, 좀!”",
    "rant": "“용사 아니라잖아요!”\n\n“말을 하면 죽이고, 다시 말하려고 하면 또 죽이고!”",
    "how-many": "“몇 번을 말해야 알아듣는데요!”",
    "pointing": "손가락으로 그녀를 가리켰다. 손이 심하게 떨려서 다른 손으로 손목을 잡았다.\n\n그래도 입은 멈추지 않았다.",
    "kill-me": "“죽일 거면 죽여요. 어차피 또 살아날 거니까!”",
    "silence": "눈을 질끈 감았다.\n\n아무 일도 일어나지 않았다. 하나, 둘, 셋. 조심스럽게 눈을 떴다. 마왕이 당신을 빤히 보고 있었다.",
    "strange": "“……너, 대체 뭐야?”",
    "what": "“그걸 저도 모르겠다고요.”",
    "intent": "“무장까지 하고 내 성에 들어왔잖아. 그런데 용사가 아니다?”",
    "lower-shield": "당신은 방패 손잡이를 더 세게 쥐었다.\n\n“이거라도 들고 있어야겠어요. 아까는 막지도 못했지만…….”\n\n마왕의 눈썹이 꿈틀했다. 그래도 손을 들지는 않았다.",
    "still-angry": "“……목소리 낮춰.”\n\n마왕이 이를 악물었다. 당신은 대답 대신 숨을 골랐다. 이제 와서 무릎이 떨리기 시작했다.",
    "observation": "“좋아. 일단 살려두지.”",
    "why": "“……진짜요?”",
    "observe": "“도망갈 생각은 하지 마.”",
    "observe-what": "“갈 데도 없어요.”",
    "what-you-are": "“네가 뭔지 알아낼 때까지는 여기 있어.”",
    "guest": "“누구 없나. 이 인간 데려가.”\n\n복도에서 발소리가 달려왔다.\n\n“방패는 뺏고. 감옥에 넣어둬.”"
  },
  "nodes": {
    "ensemble-1-0": {
      "id": "ensemble-1-0",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "쇠문이 닫혔다. 그제야 다리가 풀렸다.\n\n침상 끝에 앉아 배를 눌러봤다. 몇 번을 확인해도 멀쩡했다. 손은 좀처럼 멈추지 않았다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-1",
      "displayActor": null
    },
    "ensemble-1-1": {
      "id": "ensemble-1-1",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "“다친 데는 없으십니까?”\n\n철창 밖에 은발의 남자가 서 있었다. 검은 장갑을 낀 손에 물잔과 수건이 들려 있었다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-2",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-2": {
      "id": "ensemble-1-2",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "루시엔이라고 합니다. 이 성의 집사입니다. 성함이 어떻게 되시죠?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-3": {
      "id": "ensemble-1-3",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "{{name}}……입니다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-4",
      "nameEntry": true,
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-4": {
      "id": "ensemble-1-4",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "저, 방금 죽었거든요. 몇 번이나. 이게…… 원래 이런 곳입니까?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-5",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-5": {
      "id": "ensemble-1-5",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "아뇨. 죽은 분이 다시 일어나는 건 저도 처음 봅니다. 우선 물부터 드시죠.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-6",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-6": {
      "id": "ensemble-1-6",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "잔을 받으려다 물을 쏟았다. 루시엔은 재촉하지 않고 기다렸다.\n\n간신히 한 모금 넘겼을 때, 그의 입술 사이로 뾰족한 송곳니가 보였다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-7",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-7": {
      "id": "ensemble-1-7",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "……제 이가 신경 쓰이십니까? 걱정 마십시오. 여기서 식사할 생각은 없습니다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-8",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-8": {
      "id": "ensemble-1-8",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "여기서만 안 하시는 거예요?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-9",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-9": {
      "id": "ensemble-1-9",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "지금은 물을 더 드리는 게 낫겠군요.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-10",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-10": {
      "id": "ensemble-1-10",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "그의 구두 뒤로 손바닥만 한 반투명 덩어리가 미끄러져 왔다. 바닥의 핏자국 위에서 멈추더니, 당신의 부츠를 툭 건드렸다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-11",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-11": {
      "id": "ensemble-1-11",
      "chapter": 1,
      "who": "퐁",
      "actor": "S",
      "text": "뽀.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-12",
      "effects": [
        [
          0,
          "sparkle"
        ]
      ],
      "displayActor": "S",
      "present": [
        "S"
      ]
    },
    "ensemble-1-12": {
      "id": "ensemble-1-12",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "퐁입니다. 청소 담당이죠. 발을 조금 들어주십시오.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-13",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-13": {
      "id": "ensemble-1-13",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "제 피를 먹는 겁니까?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-14",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-14": {
      "id": "ensemble-1-14",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "청소하는 겁니다. 먹지는 않습니다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-15",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-15": {
      "id": "ensemble-1-15",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "퐁이 납작해져서 구두 밑으로 파고들었다. 발을 들자 젖은 돌을 문지르는 소리가 났다.\n\n피 묻은 자리가 조금씩 깨끗해졌다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-16",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-16": {
      "id": "ensemble-1-16",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "복도도 이 친구가 닦았습니다. 카펫은…… 새로 깔아야겠더군요.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-17",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-17": {
      "id": "ensemble-1-17",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "저한테 물어내라는 건 아니죠?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-18",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-18": {
      "id": "ensemble-1-18",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "루시엔이 수건을 건네다 말고 당신을 봤다. 당신은 웃지 않았다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-1-19",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-1-19": {
      "id": "ensemble-1-19",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "폐하께 청구하겠습니다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "decision-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "story-1-entry": {
      "id": "story-1-entry",
      "chapter": 1,
      "text": "",
      "who": "이야기",
      "next": "ensemble-1-0",
      "beginRelationship": true
    },
    "decision-1": {
      "id": "decision-1",
      "chapter": 1,
      "who": "주인공",
      "text": "루시엔이 빈 잔을 받았다. “더 필요한 건 없으십니까?”",
      "location": "prison",
      "time": "첫날 · 새벽",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "“또 죽이지는 않겠다고 약속해 주세요.”",
          "next": "answer-1-0-0",
          "delta": 0,
          "trust": 2,
          "anger": 0,
          "flags": [
            "신체안전요구"
          ],
          "tone": "direct"
        },
        {
          "label": "“따뜻한 물 좀 주세요. 제 방패도…….”",
          "next": "answer-1-1-0",
          "delta": 0,
          "trust": 1,
          "anger": 0,
          "flags": [
            "방패반환요청"
          ],
          "tone": "cautious"
        },
        {
          "label": "“청소비는 저 보낸 여신한테 받으세요.”",
          "next": "answer-1-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [
            "장난꾸러기"
          ],
          "tone": "playful"
        }
      ],
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-0-0": {
      "id": "answer-1-0-0",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "제가 장담할 수는 없습니다. 다만 오늘 밤은 제가 문밖에 있겠습니다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "answer-1-0-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-0-1": {
      "id": "answer-1-0-1",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "루시엔은 복도에 의자 하나를 가져다 놓았다. 잠시 뒤 책장을 넘기는 소리가 들렸다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "story-2-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-1-0": {
      "id": "answer-1-1-0",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "따뜻한 물은 가져다드리겠습니다. 방패는…… 지금 경비대에 있습니다. 돌려드려도 될지 물어보죠.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "answer-1-1-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-1-1": {
      "id": "answer-1-1-1",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "당신은 비어 있는 왼팔을 문질렀다. 방패 끈이 눌렀던 자국만 남아 있었다.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "story-2-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-2-0": {
      "id": "answer-1-2-0",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "그분께 청구서를 보낼 방법이 있습니까?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "answer-1-2-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-2-1": {
      "id": "answer-1-2-1",
      "chapter": 1,
      "who": "주인공",
      "actor": "P",
      "text": "……하늘?",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "answer-1-2-2",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-2-2": {
      "id": "answer-1-2-2",
      "chapter": 1,
      "who": "루시엔",
      "actor": "L",
      "text": "……폐하께 드리는 편이 빠르겠군요.",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "answer-1-2-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-1-2-3": {
      "id": "answer-1-2-3",
      "chapter": 1,
      "who": "이야기",
      "actor": null,
      "text": "퐁이 바닥을 한 번 찰박 쳤다. 루시엔이 고개를 숙였다. “알았다. 걸레값도.”",
      "location": "prison",
      "time": "첫날 · 새벽",
      "expression": null,
      "queenPresent": false,
      "next": "story-2-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-2-0": {
      "id": "ensemble-2-0",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "쇠문 여는 소리에 잠에서 깼다. 마왕이었다.\n\n당신은 반사적으로 침상 끝까지 물러났다. 뒤따라 들어온 남자는 문에 뿔이 걸리지 않게 고개를 숙였다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-1",
      "displayActor": null
    },
    "ensemble-2-1": {
      "id": "ensemble-2-1",
      "chapter": 2,
      "who": "가르문",
      "actor": "G",
      "text": "가르문이다. 경비대를 맡고 있다. 방패 찾을 생각은 마라. 내가 가져갔다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-2",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-2-2": {
      "id": "ensemble-2-2",
      "chapter": 2,
      "who": "마왕",
      "actor": "Q",
      "text": "되살아나는 이유부터 말해라.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-3",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-3": {
      "id": "ensemble-2-3",
      "chapter": 2,
      "who": "주인공",
      "actor": "P",
      "text": "사랑의 힘이라고 하면 또 죽이실 겁니까?",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-4",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-4": {
      "id": "ensemble-2-4",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "마왕의 손이 살짝 들렸다. 당신은 말을 멈추고 팔로 배를 가렸다.\n\n그녀가 손을 내렸다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-5",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-5": {
      "id": "ensemble-2-5",
      "chapter": 2,
      "who": "마왕",
      "actor": "Q",
      "text": "안 죽여. 그러니까 설명해.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-6": {
      "id": "ensemble-2-6",
      "chapter": 2,
      "who": "주인공",
      "actor": "P",
      "text": "설명할 만큼 아는 게 없어요. 여신이 보내서 왔고…… 죽으면 다시 살아난다고 했어요. 안 아프다는 말은 안 했지만.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-7": {
      "id": "ensemble-2-7",
      "chapter": 2,
      "who": "가르문",
      "actor": "G",
      "text": "폐하. 한 번만 더 해보자는 말씀은 안 하시는 게 좋겠습니다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-8",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-2-8": {
      "id": "ensemble-2-8",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "마왕이 가르문을 노려봤다. 그는 물러서지 않았다. 문밖에서 여자가 헛기침했다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-9",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-2-9": {
      "id": "ensemble-2-9",
      "chapter": 2,
      "who": "마왕",
      "actor": "Q",
      "text": "……들어와, 세레인. 네가 봐.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-10": {
      "id": "ensemble-2-10",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "커다란 나방 날개가 문틀을 비껴 접혔다. 여자가 봉인 끈에 묻은 은빛 가루를 손끝으로 털었다. 들어오는 동안에도 눈은 당신에게서 떨어지지 않았다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-11",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-11": {
      "id": "ensemble-2-11",
      "chapter": 2,
      "who": "세레인",
      "actor": "V",
      "text": "세레인이에요. 여신이 보냈다면 마력이 남았을 거예요. 그걸 좀 보고 싶은데요.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-12",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-2-12": {
      "id": "ensemble-2-12",
      "chapter": 2,
      "who": "주인공",
      "actor": "P",
      "text": "검사를 거절하면요?",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-13",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-2-13": {
      "id": "ensemble-2-13",
      "chapter": 2,
      "who": "세레인",
      "actor": "V",
      "text": "그럼 조사는 더 걸리겠죠. 그래도 베거나 찌르지는 않아요. 이 끈으로 남은 마력을 읽을 거예요.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-14",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-2-14": {
      "id": "ensemble-2-14",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "그녀가 손가락 사이에 실을 펼쳐 보였다. 당신은 실보다 마왕의 손을 먼저 봤다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-15",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-2-15": {
      "id": "ensemble-2-15",
      "chapter": 2,
      "who": "마왕",
      "actor": "Q",
      "text": "내 성 안까지 멋대로 들어왔어. 그 방법은 알아야겠는데.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-16",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-16": {
      "id": "ensemble-2-16",
      "chapter": 2,
      "who": "주인공",
      "actor": "P",
      "text": "저도 나가는 방법 좀 알았으면 좋겠네요.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-2-17",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-2-17": {
      "id": "ensemble-2-17",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "가르문이 입가를 손으로 가렸다. 마왕의 시선이 그쪽으로 돌아가자 곧바로 손을 내렸다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "decision-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-2-entry": {
      "id": "story-2-entry",
      "chapter": 2,
      "text": "",
      "who": "이야기",
      "next": "ensemble-2-0"
    },
    "decision-2": {
      "id": "decision-2",
      "chapter": 2,
      "who": "주인공",
      "text": "세레인이 의자를 끌어다 앉았다. “어떻게 할래요?”",
      "location": "prison",
      "time": "이틀째 · 아침",
      "queenPresent": true,
      "expression": "angry",
      "checkpoint": true,
      "choices": [
        {
          "label": "“아프면 바로 그만두는 거죠?”",
          "next": "answer-2-0-0",
          "delta": 0,
          "trust": 3,
          "anger": 0,
          "flags": [
            "조사합의"
          ],
          "tone": "cautious"
        },
        {
          "label": "“집사님도 옆에 있어주시면 안 돼요?”",
          "next": "answer-2-1-0",
          "delta": 0,
          "trust": 3,
          "anger": 0,
          "flags": [
            "조사합의",
            "집사의증언"
          ],
          "tone": "direct"
        },
        {
          "label": "“어차피 살아날 텐데, 그냥 하세요.”",
          "next": "answer-2-2-0",
          "delta": 0,
          "trust": -3,
          "anger": 2,
          "flags": [],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-2-0-0": {
      "id": "answer-2-0-0",
      "chapter": 2,
      "who": "세레인",
      "actor": "V",
      "text": "따끔할 수도 있어요. 아프면 손을 빼세요. 잡아두지 않을게요.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-0-1",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-2-0-1": {
      "id": "answer-2-0-1",
      "chapter": 2,
      "who": "마왕",
      "actor": "Q",
      "text": "세레인. 다치게 하지는 마.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-0-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-2-0-2": {
      "id": "answer-2-0-2",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "차가운 실이 손목을 감았다. 당신은 끝까지 마왕 쪽을 보고 있었다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-3-entry",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-2-1-0": {
      "id": "answer-2-1-0",
      "chapter": 2,
      "who": "루시엔",
      "actor": "L",
      "text": "여기 있겠습니다. 불편하시면 제게 말씀하십시오.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-1-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-2-1-1": {
      "id": "answer-2-1-1",
      "chapter": 2,
      "who": "가르문",
      "actor": "G",
      "text": "나는 문을 지키지.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-1-2",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-2-1-2": {
      "id": "answer-2-1-2",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "루시엔이 당신 옆에 섰다. 세레인은 그제야 손을 내밀었다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-3-entry",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-2-2-0": {
      "id": "answer-2-2-0",
      "chapter": 2,
      "who": "가르문",
      "actor": "G",
      "text": "아픈 건 싫다며. 그런 소리 하지 마라.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-2-1",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-2-2-1": {
      "id": "answer-2-2-1",
      "chapter": 2,
      "who": "세레인",
      "actor": "V",
      "text": "오늘은 그만하죠. 잠도 제대로 못 잔 것 같은데.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-2-2-2",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-2-2-2": {
      "id": "answer-2-2-2",
      "chapter": 2,
      "who": "이야기",
      "actor": null,
      "text": "세레인이 실을 거뒀다. 당신은 붙잡지 않았다. 사람들이 나가자 다시 침상에 누웠다.",
      "location": "prison",
      "time": "이틀째 · 아침",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-3-entry",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-3-0": {
      "id": "ensemble-3-0",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "문 아래로 그릇이 들어왔다. 빵 한 조각, 묽은 수프, 숟가락 하나. 그릇을 밀어 넣은 손등에는 작은 화상 자국이 있었다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-1": {
      "id": "ensemble-3-1",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "다 먹으면 그릇은 문 옆에 놔. 뒤집어놓진 말고.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-2": {
      "id": "ensemble-3-2",
      "chapter": 3,
      "who": "주인공",
      "actor": "P",
      "text": "고양이…….",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-3": {
      "id": "ensemble-3-3",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "……귀 처음 봐? 니아야. 밥 가져오는 사람.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-4": {
      "id": "ensemble-3-4",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "귀가 뒤로 누웠다. 당신은 얼른 그릇으로 눈을 돌렸다. 수프 위에 기름이 동그랗게 떠 있었다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-5",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-5": {
      "id": "ensemble-3-5",
      "chapter": 3,
      "who": "주인공",
      "actor": "P",
      "text": "오늘도 혼자 배식해요?",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-6",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-6": {
      "id": "ensemble-3-6",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "같이 하던 애가 동생 간호하러 갔어. 다른 하나는 숙소로 불려가고. 이거 끝나면 나도 거기 가야 돼.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-7",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-7": {
      "id": "ensemble-3-7",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "루시엔이 천으로 감싼 작은 꾸러미를 들고 나타났다. 안에는 고기와 부드러운 빵이 있었다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-8",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-8": {
      "id": "ensemble-3-8",
      "chapter": 3,
      "who": "루시엔",
      "actor": "L",
      "text": "주방에서 따로 챙겼습니다. 기운이 많이 빠졌을 테니 드시라고요.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-9",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-3-9": {
      "id": "ensemble-3-9",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "……우리 숙소 아이들은 사흘째 고기를 못 먹었는데.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-10",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-10": {
      "id": "ensemble-3-10",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "니아는 그 말을 당신에게 할 생각이 없었던 것 같았다. 입술을 깨물고 빈 수레를 돌렸다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-11",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-11": {
      "id": "ensemble-3-11",
      "chapter": 3,
      "who": "주인공",
      "actor": "P",
      "text": "제가 부탁한 건 아닌데요.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-12",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-12": {
      "id": "ensemble-3-12",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "알아. 그래서 더 짜증 나.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-13",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-13": {
      "id": "ensemble-3-13",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "문밖에서 퐁이 수레 바퀴를 밀었다. 니아가 손가락으로 퐁의 머리를 한 번 눌렀다. “너까지 굶지는 마.”",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-3-14",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-3-14": {
      "id": "ensemble-3-14",
      "chapter": 3,
      "who": "루시엔",
      "actor": "L",
      "text": "……니아, 잠깐 남으렴. 숙소 배식이 그렇게 밀린 줄은 몰랐구나.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "decision-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "story-3-entry": {
      "id": "story-3-entry",
      "chapter": 3,
      "text": "",
      "who": "이야기",
      "next": "ensemble-3-0"
    },
    "decision-3": {
      "id": "decision-3",
      "chapter": 3,
      "who": "주인공",
      "text": "루시엔이 꾸러미를 내려놓았다. 고기 냄새에 배가 울렸다. 니아는 수레 손잡이를 잡고 서 있었다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "손대지 않은 고기를 따로 덜어 보낸다.",
          "next": "answer-3-0-0",
          "delta": 1,
          "trust": 4,
          "anger": 0,
          "flags": [
            "배급공유",
            "니아의경계완화"
          ],
          "tone": "gentle"
        },
        {
          "label": "“배급이 왜 밀렸는지 알아봐 주실 수 있나요?”",
          "next": "answer-3-1-0",
          "delta": 1,
          "trust": 4,
          "anger": 0,
          "flags": [
            "배급장부요청"
          ],
          "tone": "direct"
        },
        {
          "label": "우선 내 몫을 먹는다.",
          "next": "answer-3-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        }
      ],
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-3-0-0": {
      "id": "answer-3-0-0",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "네가 먹던 걸 애들한테 주라고?",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-0-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-0-1": {
      "id": "answer-3-0-1",
      "chapter": 3,
      "who": "주인공",
      "actor": "P",
      "text": "아뇨, 여기 아직 손 안 댄 쪽이요. 접시 따로 있죠?",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-0-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-0-2": {
      "id": "answer-3-0-2",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "니아가 고기를 다른 접시에 덜었다. 문을 닫기 전에 한 번 돌아봤다. “……그럼 이건 가져갈게.”",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "story-4-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-1-0": {
      "id": "answer-3-1-0",
      "chapter": 3,
      "who": "루시엔",
      "actor": "L",
      "text": "보급을 맡으신 분께 말씀드리겠습니다. 저도 장부를 봐야겠군요.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-1-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-3-1-1": {
      "id": "answer-3-1-1",
      "chapter": 3,
      "who": "니아",
      "actor": "C",
      "text": "말만 하고 잊어버리면 내가 먼저 찾아갈 거야.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-1-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-1-2": {
      "id": "answer-3-1-2",
      "chapter": 3,
      "who": "주인공",
      "actor": "P",
      "text": "감옥이라 찾기는 쉬울 겁니다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-1-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-1-3": {
      "id": "answer-3-1-3",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "니아가 웃음을 삼키는 소리가 들렸다. 정말 잠깐이었다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "story-4-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-3-2-0": {
      "id": "answer-3-2-0",
      "chapter": 3,
      "who": "루시엔",
      "actor": "L",
      "text": "드십시오. 남은 일은 제가 알아보겠습니다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "answer-3-2-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-3-2-1": {
      "id": "answer-3-2-1",
      "chapter": 3,
      "who": "이야기",
      "actor": null,
      "text": "니아가 먼저 수레를 밀고 나갔다. 당신은 식기 전에 빵을 수프에 적셨다.",
      "location": "prison",
      "time": "닷새째 · 배식 시간",
      "expression": null,
      "queenPresent": false,
      "next": "story-4-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-4-0": {
      "id": "ensemble-4-0",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "검사는 사흘 뒤에 끝났다. 세레인은 당장 위험한 마법은 없다고 했다. 그날부터 낮에는 복도에 나올 수 있었다.\n\n혼자는 안 됐고, 발목에는 은색 고리가 채워졌다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-1",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-1": {
      "id": "ensemble-4-1",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "이그니스다. 창고 맡고 있어. 너, 청소는 좀 하냐?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-2",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-2": {
      "id": "ensemble-4-2",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "검은 소매에서 나온 손이 대걸레를 내밀었다. 목 위에는 얼굴 대신 연기가 피어올랐다. 당신이 빤히 보자 연기가 물음표처럼 기울었다.\n\n“얼굴 처음 보냐. 아니, 얼굴은 없지만.”",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-3",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-3": {
      "id": "ensemble-4-3",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "니아 혼자 이 층까지는 못 해. 저 창문부터 계단 앞까지만 부탁한다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-4",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-4": {
      "id": "ensemble-4-4",
      "chapter": 4,
      "who": "주인공",
      "actor": "P",
      "text": "감옥에서 나왔더니 바로 일이네요.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-5",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-5": {
      "id": "ensemble-4-5",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "그럼 다시 들어갈래? ……농담이야. 힘들면 쉬어. 니아한테 들키지만 말고.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-6",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-6": {
      "id": "ensemble-4-6",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "퐁이 배수구 옆에서 납작하게 굳었다. 몸 안에 푸른 유리 조각과 붉은 실 한 올이 떠 있었다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-7",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-7": {
      "id": "ensemble-4-7",
      "chapter": 4,
      "who": "니아",
      "actor": "C",
      "text": "퐁. 입 벌려봐. 또 뭘 삼켰어?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-8",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-4-8": {
      "id": "ensemble-4-8",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "니아가 유리를 빼내자 손끝에 작은 상처가 났다. 퐁은 더 작아졌다. 배수구 덮개 안쪽에도 같은 푸른 가루가 묻어 있었다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-9",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-4-9": {
      "id": "ensemble-4-9",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "잠깐. 그거 나 줘봐. 결계석 같은데, 왜 여기 떨어져 있지?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-10",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-10": {
      "id": "ensemble-4-10",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "복도 끝에서 경비가 다가왔다. 당신이 출입을 허락받지 않은 문 앞이었다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-11",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-11": {
      "id": "ensemble-4-11",
      "chapter": 4,
      "who": "주인공",
      "actor": "P",
      "text": "제가 만지면 더 수상해 보이겠죠.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-4-12",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-4-12": {
      "id": "ensemble-4-12",
      "chapter": 4,
      "who": "니아",
      "actor": "C",
      "text": "응. 손대지 마. 나도 괜히 꺼냈네…….",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "decision-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "story-4-entry": {
      "id": "story-4-entry",
      "chapter": 4,
      "text": "",
      "who": "이야기",
      "next": "ensemble-4-0"
    },
    "decision-4": {
      "id": "decision-4",
      "chapter": 4,
      "who": "주인공",
      "text": "퐁은 유리 조각을 닦인 바닥 한가운데 밀어놓았다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "유리를 그대로 두고 집사와 경비를 함께 부른다.",
          "next": "answer-4-0-0",
          "delta": 0,
          "trust": 4,
          "anger": 0,
          "flags": [
            "봉인증거",
            "집사의증언"
          ],
          "tone": "cautious"
        },
        {
          "label": "니아에게 조각을 맡기고 발견 장소를 직접 그린다.",
          "next": "answer-4-1-0",
          "delta": 0,
          "trust": 3,
          "anger": 0,
          "flags": [
            "봉인증거",
            "니아의증언"
          ],
          "tone": "gentle"
        },
        {
          "label": "의심받기 전에 조각을 배수구에 버린다.",
          "next": "answer-4-2-0",
          "delta": 0,
          "trust": -5,
          "anger": 3,
          "flags": [
            "증거훼손"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-4-0-0": {
      "id": "answer-4-0-0",
      "chapter": 4,
      "who": "루시엔",
      "actor": "L",
      "text": "어디서 나왔습니까? 퐁, 움직이지 말고 잠깐만 있어 보렴.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-0-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-4-0-1": {
      "id": "answer-4-0-1",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "당신은 문에서 세 걸음 물러섰다. 퐁만 조각 옆에 남아, 누가 밟으려 할 때마다 통통 뛰었다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-5-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-4-1-0": {
      "id": "answer-4-1-0",
      "chapter": 4,
      "who": "니아",
      "actor": "C",
      "text": "이게 배수구야? 이 네모?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-1-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-4-1-1": {
      "id": "answer-4-1-1",
      "chapter": 4,
      "who": "주인공",
      "actor": "P",
      "text": "그럼 뭐로 보여요?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-1-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-4-1-2": {
      "id": "answer-4-1-2",
      "chapter": 4,
      "who": "니아",
      "actor": "C",
      "text": "퐁인 줄 알았지. 됐어, 글씨도 옆에 써놔.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-1-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-4-1-3": {
      "id": "answer-4-1-3",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "니아는 유리를 앞치마에 싸지 않았다. 빈 찻잔에 담아, 모두가 보게 들고 갔다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-5-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-4-2-0": {
      "id": "answer-4-2-0",
      "chapter": 4,
      "who": "이야기",
      "actor": null,
      "text": "유리가 물 아래로 가라앉았다. 퐁은 한동안 당신을 올려다봤다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-2-1",
      "displayActor": null
    },
    "answer-4-2-1": {
      "id": "answer-4-2-1",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "……왜 버렸지?",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-2-2",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-4-2-2": {
      "id": "answer-4-2-2",
      "chapter": 4,
      "who": "주인공",
      "actor": "P",
      "text": "쓰레기인 줄 알았습니다.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-4-2-3",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-4-2-3": {
      "id": "answer-4-2-3",
      "chapter": 4,
      "who": "이그니스",
      "actor": "I",
      "text": "그럼 나부터 부르면 됐다. 이제는 쓰레기였는지도 확인할 수 없잖아.",
      "location": "corridor",
      "time": "여드레째 · 첫 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-5-entry",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-5-0": {
      "id": "ensemble-5-0",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "서재에는 의자가 다섯 개 있었다. 당신 몫은 없었다. 마왕은 창가에, 네 사람은 서로 다른 거리에서 당신을 보고 있었다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-1",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-5-1": {
      "id": "ensemble-5-1",
      "chapter": 5,
      "who": "네브라",
      "actor": "N",
      "text": "네브라다. 국경에서 왔어. 인간이 잡혔다길래 얼굴 보러 왔다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-2",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-5-2": {
      "id": "ensemble-5-2",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "창백한 여자가 투구를 벗어 책상에 올렸다. 어깨에서 옅은 안개가 흘렀다. 그녀는 빈 의자를 발끝으로 밀어 당신 앞에 놓았다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-3",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-5-3": {
      "id": "ensemble-5-3",
      "chapter": 5,
      "who": "세레인",
      "actor": "V",
      "text": "누가 결계실 인장을 베꼈어요. 당신이 나타난 날 밤에요.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-4",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-5-4": {
      "id": "ensemble-5-4",
      "chapter": 5,
      "who": "가르문",
      "actor": "G",
      "text": "우연이라고 넘길 수는 없지.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-5",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-5-5": {
      "id": "ensemble-5-5",
      "chapter": 5,
      "who": "이그니스",
      "actor": "I",
      "text": "시간이 겹친다는 것뿐이잖아. 창고 쪽부터 뒤져보자고. 들어온 물건도 있고.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-6",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-5-6": {
      "id": "ensemble-5-6",
      "chapter": 5,
      "who": "마왕",
      "actor": "Q",
      "text": "이 인간 혼자서는 못 해. 성 안에 도와준 놈이 있는지도 찾아.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-5-7": {
      "id": "ensemble-5-7",
      "chapter": 5,
      "who": "주인공",
      "actor": "P",
      "text": "제가 범인이라고 생각하지는 않으시는 겁니까?",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-5-8": {
      "id": "ensemble-5-8",
      "chapter": 5,
      "who": "마왕",
      "actor": "Q",
      "text": "그랬으면 여기서 묻고 있겠어? 가만히 듣고 있어.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-5-9": {
      "id": "ensemble-5-9",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "세레인이 장부 두 권을 펼쳤다. 같은 날짜에 붉은 실이 끼워져 있었다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-5-10": {
      "id": "ensemble-5-10",
      "chapter": 5,
      "who": "세레인",
      "actor": "V",
      "text": "문은 열렸는데, 들어온 사람이 없어요. 이때 당신은 어디 있었죠?",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-11",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-5-11": {
      "id": "ensemble-5-11",
      "chapter": 5,
      "who": "가르문",
      "actor": "G",
      "text": "기억나는 대로 말해라. 그리고 조사 끝날 때까지 도망칠 생각 마. 네 보증을 선 사람이 있다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-12",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-5-12": {
      "id": "ensemble-5-12",
      "chapter": 5,
      "who": "주인공",
      "actor": "P",
      "text": "그 누군가는 누굽니까?",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-13",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-5-13": {
      "id": "ensemble-5-13",
      "chapter": 5,
      "who": "루시엔",
      "actor": "L",
      "text": "현재는 접니다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "ensemble-5-14",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-5-14": {
      "id": "ensemble-5-14",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "루시엔이 고개를 숙였다. 당신은 그를 봤다가, 다시 펼쳐진 장부를 봤다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "decision-5",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "story-5-entry": {
      "id": "story-5-entry",
      "chapter": 5,
      "text": "",
      "who": "이야기",
      "next": "ensemble-5-0"
    },
    "decision-5": {
      "id": "decision-5",
      "chapter": 5,
      "who": "주인공",
      "text": "세레인이 펜을 들었다. “먼저 하고 싶은 말이 있나요?”",
      "location": "study",
      "time": "열흘째 · 심문",
      "queenPresent": true,
      "expression": "angry",
      "checkpoint": true,
      "choices": [
        {
          "label": "“언제까지 조사할 건지 알려주세요.”",
          "next": "answer-5-0-0",
          "delta": 0,
          "trust": 4,
          "anger": 0,
          "flags": [
            "조사합의",
            "심문협력"
          ],
          "tone": "cautious"
        },
        {
          "label": "“집사님한테 피해가 갈 일은 안 할게요.”",
          "next": "answer-5-1-0",
          "delta": 0,
          "trust": 4,
          "anger": 0,
          "flags": [
            "심문협력",
            "집사의증언"
          ],
          "tone": "direct"
        },
        {
          "label": "마왕에게 믿어달라고 부탁한다.",
          "next": "answer-5-2-0",
          "delta": 0,
          "trust": -4,
          "anger": 3,
          "flags": [],
          "tone": "cautious"
        }
      ],
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-5-0-0": {
      "id": "answer-5-0-0",
      "chapter": 5,
      "who": "세레인",
      "actor": "V",
      "text": "닷새만 줘요. 새로 알아낸 건 매일 집사를 통해 알려드릴게요.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-0-1",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-5-0-1": {
      "id": "answer-5-0-1",
      "chapter": 5,
      "who": "마왕",
      "actor": "Q",
      "text": "닷새다, 세레인. 더 끌지 마.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-0-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-5-0-2": {
      "id": "answer-5-0-2",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "세레인이 날짜를 적었다. 당신 쪽에서도 보이도록 종이를 돌려놓았다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-6-entry",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-5-1-0": {
      "id": "answer-5-1-0",
      "chapter": 5,
      "who": "루시엔",
      "actor": "L",
      "text": "걱정해주실 줄은 몰랐군요. 우선 아시는 것부터 말씀해주십시오.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-1-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-5-1-1": {
      "id": "answer-5-1-1",
      "chapter": 5,
      "who": "네브라",
      "actor": "N",
      "text": "급할 것 없어. 어디서 눈을 떴는지부터 말해봐.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-1-2",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-5-1-2": {
      "id": "answer-5-1-2",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "당신은 의자에 앉았다. 허벅지에 올린 손을 펴고, 처음 본 초상화부터 떠올렸다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-6-entry",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-5-2-0": {
      "id": "answer-5-2-0",
      "chapter": 5,
      "who": "마왕",
      "actor": "Q",
      "text": "내가 널 좋아하면 증거가 사라지나?",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-5-2-1": {
      "id": "answer-5-2-1",
      "chapter": 5,
      "who": "이야기",
      "actor": null,
      "text": "목소리가 날카로워졌다. 이번에는 반박할 수 없었다.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "answer-5-2-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-5-2-2": {
      "id": "answer-5-2-2",
      "chapter": 5,
      "who": "마왕",
      "actor": "Q",
      "text": "그 말이면 다 풀려날 줄 알았어? 묻는 말에 대답해.",
      "location": "study",
      "time": "열흘째 · 심문",
      "expression": "angry",
      "queenPresent": true,
      "next": "story-6-entry",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-6-0": {
      "id": "ensemble-6-0",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "가르문이 방패를 돌려줬다. 손잡이에 새 가죽 끈이 감겨 있었다. 당신은 팔을 끼우고 몇 번 당겨봤다. 생각보다 단단했다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-1",
      "displayActor": null
    },
    "ensemble-6-1": {
      "id": "ensemble-6-1",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "끌어당기는 힘은 괜찮다. 버티는 발이 느려.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-2",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-2": {
      "id": "ensemble-6-2",
      "chapter": 6,
      "who": "주인공",
      "actor": "P",
      "text": "한 번 보고 아십니까?",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-3",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-3": {
      "id": "ensemble-6-3",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "네 번 쓰러진 자리도 봤다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-4",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-4": {
      "id": "ensemble-6-4",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "당신은 웃지 못했다. 가르문도 웃으려던 말이 아니었다. 그는 나무 상자를 복도 끝에 세웠다. 상자 뒤에는 퐁이 있었다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-5",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-5": {
      "id": "ensemble-6-5",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "저걸 사람이라 생각해라. 네 몸이 무사한지가 아니라 저 뒤가 무사한지 볼 거다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-6",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-6": {
      "id": "ensemble-6-6",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "수레가 경사로를 굴러왔다. 당신은 방패를 세웠지만, 바퀴가 옆으로 튀었다. 퐁이 바싹 엎드렸다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-7",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-7": {
      "id": "ensemble-6-7",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "다시.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-8",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-8": {
      "id": "ensemble-6-8",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "세 번째에는 수레를 멈췄다. 대신 어깨가 빠질 듯 아팠다. 당신이 무릎을 꿇자 가르문이 수레를 붙잡았다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-9",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-9": {
      "id": "ensemble-6-9",
      "chapter": 6,
      "who": "주인공",
      "actor": "P",
      "text": "계속해도 됩니다. 죽으면 다시…….",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-10",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-10": {
      "id": "ensemble-6-10",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "그다음은? 네가 다시 일어나는 동안 뒤에 있는 사람은 누가 지키지?",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-11",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-11": {
      "id": "ensemble-6-11",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "그는 당신을 일으켜 세우지 않았다. 스스로 숨을 고를 시간을 줬다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-6-12",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-6-12": {
      "id": "ensemble-6-12",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "부활은 작전이 아니다. 살아서 돌아오는 법을 배워.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "decision-6",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "story-6-entry": {
      "id": "story-6-entry",
      "chapter": 6,
      "text": "",
      "who": "이야기",
      "next": "ensemble-6-0"
    },
    "decision-6": {
      "id": "decision-6",
      "chapter": 6,
      "who": "주인공",
      "text": "가르문이 마지막 훈련의 방식을 물었다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "니아와 신호를 맞추고, 사람을 먼저 대피시킨다.",
          "next": "answer-6-0-0",
          "delta": 2,
          "trust": 5,
          "anger": 0,
          "flags": [
            "대피훈련",
            "가르문의인정"
          ],
          "tone": "gentle"
        },
        {
          "label": "먼저 지형을 살피고 수레가 벽을 향하도록 흘린다.",
          "next": "answer-6-1-0",
          "delta": 2,
          "trust": 5,
          "anger": 0,
          "flags": [
            "대피훈련",
            "가르문의인정"
          ],
          "tone": "cautious"
        },
        {
          "label": "혼자 정면에서 전부 받아내겠다고 한다.",
          "next": "answer-6-2-0",
          "delta": 0,
          "trust": -2,
          "anger": 0,
          "flags": [
            "무리한방어"
          ],
          "tone": "direct"
        }
      ],
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-6-0-0": {
      "id": "answer-6-0-0",
      "chapter": 6,
      "who": "니아",
      "actor": "C",
      "text": "세 번 두드리면 오른쪽 문. 두 번이면 제자리. 알았어.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-0-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-6-0-1": {
      "id": "answer-6-0-1",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "당신이 충격을 받기 전에 퐁이 문 안으로 들어갔다. 방패는 수레를 완전히 멈추지 못했지만, 뒤편은 비어 있었다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-0-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-6-0-2": {
      "id": "answer-6-0-2",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "이번에는 통과다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "story-7-entry",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-6-1-0": {
      "id": "answer-6-1-0",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "수레가 벽을 긁으며 멈췄다. 당신의 손목은 멀쩡했다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-1-1",
      "displayActor": null
    },
    "answer-6-1-1": {
      "id": "answer-6-1-1",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "좋아. 방패는 벽이 아니다. 방향을 바꾸는 도구이기도 하지.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-1-2",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-6-1-2": {
      "id": "answer-6-1-2",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "그날 처음으로 그는 당신을 ‘인간’ 대신 이름으로 불렀다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "story-7-entry",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-6-2-0": {
      "id": "answer-6-2-0",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "당신은 수레를 막았다. 그러나 한 걸음 밀린 방패가 퐁의 자리까지 들어갔다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-2-1",
      "displayActor": null
    },
    "answer-6-2-1": {
      "id": "answer-6-2-1",
      "chapter": 6,
      "who": "가르문",
      "actor": "G",
      "text": "네 용기는 알았다. 오늘은 여기까지다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "answer-6-2-2",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-6-2-2": {
      "id": "answer-6-2-2",
      "chapter": 6,
      "who": "이야기",
      "actor": null,
      "text": "칭찬은 아니었다. 당신은 저녁 내내 숟가락을 왼손으로 들어야 했다.",
      "location": "corridor",
      "time": "보름째 · 훈련장 앞",
      "expression": null,
      "queenPresent": false,
      "next": "story-7-entry",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-7-0": {
      "id": "ensemble-7-0",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "외출증의 첫 목적지는 관광지가 아니라 연료 창고였다. 니아는 장바구니 세 개를 당신에게 맡겼다. 가르문의 경비 둘이 뒤따랐다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-1",
      "displayActor": null
    },
    "ensemble-7-1": {
      "id": "ensemble-7-1",
      "chapter": 7,
      "who": "니아",
      "actor": "C",
      "text": "사람들이 쳐다보면 쳐다보게 둬. 웃으려고 애쓰면 더 수상해.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-2": {
      "id": "ensemble-7-2",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "빵집 앞의 대화가 끊겼다. 붕대를 감은 마족이 당신의 방패 문장을 보고 아이를 등 뒤로 당겼다. 당신은 설명하려다 입을 다물었다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-3": {
      "id": "ensemble-7-3",
      "chapter": 7,
      "who": "니아",
      "actor": "C",
      "text": "그 문장, 국경에서 본 사람들한테는 좋은 기억이 아니야.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-4": {
      "id": "ensemble-7-4",
      "chapter": 7,
      "who": "주인공",
      "actor": "P",
      "text": "저 부대에 있던 건 아닌데.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-5",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-5": {
      "id": "ensemble-7-5",
      "chapter": 7,
      "who": "니아",
      "actor": "C",
      "text": "알아. 그 사람들은 모르고.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-6",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-6": {
      "id": "ensemble-7-6",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "약초상 문 옆에 작은 찻집이 비어 있었다. 니아는 가격표를 오래 봤다. 그러고는 장바구니 손잡이를 다시 쥐었다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-7",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-7": {
      "id": "ensemble-7-7",
      "chapter": 7,
      "who": "주인공",
      "actor": "P",
      "text": "차 좋아해요?",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-8",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-8": {
      "id": "ensemble-7-8",
      "chapter": 7,
      "who": "니아",
      "actor": "C",
      "text": "마시는 것도. 손님이 나갈 때 내가 문 닫는 시간인 것도.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-9",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-9": {
      "id": "ensemble-7-9",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "더 묻기 전에 골목에서 고함이 났다. 연료 상인이 납품 수레를 막고 있었다. 지급 증서의 인장이 흐려져 있었다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-10",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-7-10": {
      "id": "ensemble-7-10",
      "chapter": 7,
      "who": "이그니스",
      "actor": "I",
      "text": "이 증서, 우리가 준 게 아니야. 그런데 창고 번호는 맞아.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-11",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-7-11": {
      "id": "ensemble-7-11",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "당신은 배수구에서 봤던 푸른 가루를 떠올렸다. 상인은 당신을 보자 증서를 가슴 쪽으로 당겼다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-7-12",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-7-12": {
      "id": "ensemble-7-12",
      "chapter": 7,
      "who": "상인",
      "actor": null,
      "text": "인간까지 데려와서 뭘 조사하겠다는 거요?",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "decision-7",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "story-7-entry": {
      "id": "story-7-entry",
      "chapter": 7,
      "text": "",
      "who": "이야기",
      "next": "ensemble-7-0"
    },
    "decision-7": {
      "id": "decision-7",
      "chapter": 7,
      "who": "주인공",
      "text": "말을 잘하는 것보다, 누가 말할 수 있게 할지가 중요해 보였다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "니아에게 설명을 맡기고, 옆에서 납품 기록을 정리한다.",
          "next": "answer-7-0-0",
          "delta": 0,
          "trust": 4,
          "anger": 0,
          "flags": [
            "장부확보",
            "니아의신뢰"
          ],
          "tone": "gentle"
        },
        {
          "label": "이그니스에게 공식 검사를 요청하고 상인의 보상을 보장한다.",
          "next": "answer-7-1-0",
          "delta": 0,
          "trust": 4,
          "anger": 0,
          "flags": [
            "장부확보",
            "이그니스의인정"
          ],
          "tone": "direct"
        },
        {
          "label": "마왕의 명령이라며 증서를 빼앗는다.",
          "next": "answer-7-2-0",
          "delta": 0,
          "trust": -5,
          "anger": 3,
          "flags": [
            "시장강압"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-7-0-0": {
      "id": "answer-7-0-0",
      "chapter": 7,
      "who": "니아",
      "actor": "C",
      "text": "이 사람은 짐꾼이야. 숫자도 조금 보고. 불만은 나한테 말해.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "answer-7-0-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-7-0-1": {
      "id": "answer-7-0-1",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "상인은 증서를 내줬다. 니아는 당신에게 몰래 손바닥을 폈다. 종이를 넘겨달라는 뜻이었다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "story-8-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-7-1-0": {
      "id": "answer-7-1-0",
      "chapter": 7,
      "who": "이그니스",
      "actor": "I",
      "text": "좋아. 물건을 압수하면 대금은 성에서 먼저 지급한다. 자, 서명할게.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "answer-7-1-1",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-7-1-1": {
      "id": "answer-7-1-1",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "상인의 어깨가 조금 내려갔다. 적어도 이 조사 때문에 겨울을 굶지는 않을 것이었다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "story-8-entry",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-7-2-0": {
      "id": "answer-7-2-0",
      "chapter": 7,
      "who": "이야기",
      "actor": null,
      "text": "상인은 손을 놓았다. 종이는 얻었지만, 돌아오는 길에 어떤 가게도 당신에게 문을 열지 않았다.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "answer-7-2-1",
      "displayActor": null
    },
    "answer-7-2-1": {
      "id": "answer-7-2-1",
      "chapter": 7,
      "who": "이그니스",
      "actor": "I",
      "text": "기록 한 장에 거래처 넷을 잃었네. 다음에는 내가 말할 때까지 기다려.",
      "location": "city",
      "time": "스무째 날 · 첫 외출",
      "expression": null,
      "queenPresent": false,
      "next": "story-8-entry",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-8-0": {
      "id": "ensemble-8-0",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "잠을 깨운 것은 종소리보다 니아의 발소리였다. 그녀가 수레를 옆으로 눕혔다. 복도 끝에서 하얀 빛이 세 번 번졌다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-1",
      "displayActor": null
    },
    "ensemble-8-1": {
      "id": "ensemble-8-1",
      "chapter": 8,
      "who": "니아",
      "actor": "C",
      "text": "숙소 문 열어! 아이들이 안에 있어!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-8-2": {
      "id": "ensemble-8-2",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "성문은 닫혀 있었다. 그런데 인간 병사들이 안쪽 계단으로 올라오고 있었다. 누군가 당신의 이름을 외쳤다. “길을 연 사람이 저기 있다!”",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-8-3": {
      "id": "ensemble-8-3",
      "chapter": 8,
      "who": "주인공",
      "actor": "P",
      "text": "난 아무것도…….",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-8-4": {
      "id": "ensemble-8-4",
      "chapter": 8,
      "who": "가르문",
      "actor": "G",
      "text": "설명은 뒤에! 오른쪽을 막아!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-5",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-8-5": {
      "id": "ensemble-8-5",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "방패에 칼이 부딪쳤다. 충격이 팔꿈치를 타고 올라왔다. 병사의 눈에도 공포가 있었다. 그는 당신을 아군으로 생각하는 것 같았다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-6",
      "effects": [
        [
          0,
          "slash"
        ],
        [
          140,
          "hit"
        ]
      ],
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-8-6": {
      "id": "ensemble-8-6",
      "chapter": 8,
      "who": "병사",
      "actor": null,
      "text": "약속이 다르잖아! 서쪽 문을 열어둔다고 했잖아!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-7",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-8-7": {
      "id": "ensemble-8-7",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "니아가 아이 하나를 안고 계단으로 뛰었다. 퐁이 넘어진 아이의 발밑에서 몸을 넓혔다. 작은 몸 안으로 깨진 유리가 하나씩 들어갔다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-8",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-8-8": {
      "id": "ensemble-8-8",
      "chapter": 8,
      "who": "가르문",
      "actor": "G",
      "text": "죽어도 되는 놈을 찾지 마라! 살아서 나갈 길을 만들어!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-8-9",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-8-9": {
      "id": "ensemble-8-9",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "복도 두 갈래 중 하나를 방패로 막을 수 있었다. 다른 쪽에는 납품 서류를 태우려는 사람이 서 있었다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "decision-8",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "story-8-entry": {
      "id": "story-8-entry",
      "chapter": 8,
      "text": "",
      "who": "이야기",
      "next": "ensemble-8-0"
    },
    "decision-8": {
      "id": "decision-8",
      "chapter": 8,
      "who": "주인공",
      "text": "증거를 쫓으면 숙소 앞이 빈다. 혼자 둘 다 할 수는 없었다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "숙소를 막고 니아에게 서류를 보라고 신호한다.",
          "next": "answer-8-0-0",
          "delta": 4,
          "trust": 6,
          "anger": 0,
          "flags": [
            "숙소구조",
            "니아의신뢰",
            "침투증언"
          ],
          "tone": "gentle"
        },
        {
          "label": "가르문에게 지원을 요청하고 함께 숙소를 지킨다.",
          "next": "answer-8-1-0",
          "delta": 4,
          "trust": 6,
          "anger": 0,
          "flags": [
            "숙소구조",
            "가르문의인정"
          ],
          "tone": "cautious"
        },
        {
          "label": "누명을 벗기 위해 혼자 서류를 쫓는다.",
          "next": "answer-8-2-0",
          "delta": 0,
          "trust": -8,
          "anger": 6,
          "flags": [
            "숙소방치",
            "침투증언"
          ],
          "tone": "direct"
        }
      ],
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-8-0-0": {
      "id": "answer-8-0-0",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "니아는 당신을 한 번 보고 방향을 바꿨다. 당신은 칼날을 흘리고, 발로 문을 밀어 닫았다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-0-1",
      "effects": [
        [
          0,
          "slash"
        ],
        [
          140,
          "hit"
        ]
      ],
      "displayActor": null
    },
    "answer-8-0-1": {
      "id": "answer-8-0-1",
      "chapter": 8,
      "who": "니아",
      "actor": "C",
      "text": "반밖에 못 건졌어!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-0-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-8-0-2": {
      "id": "answer-8-0-2",
      "chapter": 8,
      "who": "주인공",
      "actor": "P",
      "text": "반이면 됐어요. 아이들은요?",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-0-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-8-0-3": {
      "id": "answer-8-0-3",
      "chapter": 8,
      "who": "니아",
      "actor": "C",
      "text": "전부 나갔어. ……지금은 네 뒤에 아무도 없어. 빠져!",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "party-gate-0",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-8-1-0": {
      "id": "answer-8-1-0",
      "chapter": 8,
      "who": "가르문",
      "actor": "G",
      "text": "기다려. 셋을 세면 왼쪽으로 빠진다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-1-1",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-8-1-1": {
      "id": "answer-8-1-1",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "당신은 이번에는 기다렸다. 가르문의 갑주가 옆을 채운 뒤에야 무릎의 힘을 풀었다. 서류는 불탔지만, 숙소에서는 아무도 죽지 않았다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "party-gate-0",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-8-2-0": {
      "id": "answer-8-2-0",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "서류는 건졌다. 돌아섰을 때 니아가 피 묻은 앞치마로 아이의 팔을 감싸고 있었다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-2-1",
      "displayActor": null
    },
    "answer-8-2-1": {
      "id": "answer-8-2-1",
      "chapter": 8,
      "who": "니아",
      "actor": "C",
      "text": "……내가 막으랬잖아.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "answer-8-2-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-8-2-2": {
      "id": "answer-8-2-2",
      "chapter": 8,
      "who": "이야기",
      "actor": null,
      "text": "아이는 살아 있었다. 그것이 당신 선택의 대가를 없애주지는 않았다. 니아는 당신에게 장바구니조차 맡기지 않게 됐다.",
      "location": "corridor",
      "time": "스물셋째 날 · 심야 경보",
      "expression": null,
      "queenPresent": false,
      "next": "party-gate-0",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-9-0": {
      "id": "ensemble-9-0",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 밤새 옷을 갈아입지 않은 듯했다. 소매 끝에 그을음이 묻어 있었다. 당신이 들어가자, 손끝에서 맺히던 붉은 빛이 사라졌다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-1",
      "displayActor": null
    },
    "ensemble-9-1": {
      "id": "ensemble-9-1",
      "chapter": 9,
      "who": "마왕",
      "actor": "Q",
      "text": "누가 네 이름을 사용했지?",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-9-2": {
      "id": "ensemble-9-2",
      "chapter": 9,
      "who": "주인공",
      "actor": "P",
      "text": "저도 알고 싶습니다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-3",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-9-3": {
      "id": "ensemble-9-3",
      "chapter": 9,
      "who": "세레인",
      "actor": "V",
      "text": "이제 누가 누구를 좋아하는지는 내려놓죠. 인장, 배급 장부, 침입자의 말을 맞춰볼 시간입니다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-4",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-9-4": {
      "id": "ensemble-9-4",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "세레인이 실로 종이 세 장을 연결했다. 외부에서 마법으로 뚫은 흔적은 없었다. 성에서 쓰는 임시 납품증이 길을 열었다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-5",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-9-5": {
      "id": "ensemble-9-5",
      "chapter": 9,
      "who": "이그니스",
      "actor": "I",
      "text": "결계가 납품 수레를 아군으로 인식했군. 내 도장이 쓰였어.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-6",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-9-6": {
      "id": "ensemble-9-6",
      "chapter": 9,
      "who": "가르문",
      "actor": "G",
      "text": "그렇다면 네 인장 관리부터 조사해야겠지.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-7",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-9-7": {
      "id": "ensemble-9-7",
      "chapter": 9,
      "who": "이그니스",
      "actor": "I",
      "text": "그래. 나도 조사받는다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-8",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-9-8": {
      "id": "ensemble-9-8",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "방 안이 조용해졌다. 당신은 마왕의 얼굴을 살폈다. 그녀는 이그니스를 감싸지 않았다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-9",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-9-9": {
      "id": "ensemble-9-9",
      "chapter": 9,
      "who": "마왕",
      "actor": "Q",
      "text": "왕의 부하라고 예외는 없다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-9-10": {
      "id": "ensemble-9-10",
      "chapter": 9,
      "who": "주인공",
      "actor": "P",
      "text": "그 말, 제 경우에도 적용되는 겁니까?",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "ensemble-9-11",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-9-11": {
      "id": "ensemble-9-11",
      "chapter": 9,
      "who": "마왕",
      "actor": "Q",
      "text": "……그래야겠지.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "decision-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-9-entry": {
      "id": "story-9-entry",
      "chapter": 9,
      "text": "",
      "who": "이야기",
      "next": "ensemble-9-0"
    },
    "decision-9": {
      "id": "decision-9",
      "chapter": 9,
      "who": "주인공",
      "text": "당신의 진술 차례였다. 모든 자료가 다 있는 것은 아니었다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "queenPresent": true,
      "expression": "furious",
      "checkpoint": true,
      "choices": [
        {
          "label": "직접 본 사실과 추측을 구분해서 진술한다.",
          "next": "answer-9-0-0",
          "delta": 3,
          "trust": 6,
          "anger": 0,
          "flags": [
            "정직한진술"
          ],
          "tone": "cautious"
        },
        {
          "label": "“마왕님은 저를 믿으시죠?”라고 묻는다.",
          "next": "answer-9-1-0",
          "delta": 0,
          "trust": -4,
          "anger": 2,
          "flags": [],
          "tone": "cautious"
        },
        {
          "label": "모르는 부분도 확실히 본 것처럼 말한다.",
          "next": "answer-9-2-0",
          "delta": 0,
          "trust": -9,
          "anger": 5,
          "flags": [
            "거짓진술"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-9-0-0": {
      "id": "answer-9-0-0",
      "chapter": 9,
      "who": "세레인",
      "actor": "V",
      "text": "모른다는 말도 기록입니다. 빈칸을 거짓으로 채우는 것보다 낫죠.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "answer-9-0-1",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-9-0-1": {
      "id": "answer-9-0-1",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 당신의 말을 끊지 않았다. 끝까지 듣고 나서, 세레인에게 빠진 자료를 찾으라고 지시했다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "story-10-entry",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-9-1-0": {
      "id": "answer-9-1-0",
      "chapter": 9,
      "who": "마왕",
      "actor": "Q",
      "text": "내 대답으로 이그니스의 도장이 진짜가 되나, 가짜가 되나?",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "answer-9-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-9-1-1": {
      "id": "answer-9-1-1",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "당신은 고개를 숙였다. 그녀가 믿어주길 바라는 마음과, 결백을 밝히는 일은 같지 않았다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "story-10-entry",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-9-2-0": {
      "id": "answer-9-2-0",
      "chapter": 9,
      "who": "세레인",
      "actor": "V",
      "text": "그 복도에는 창문이 없습니다. 달빛으로 얼굴을 봤다는 부분, 다시 말해보세요.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "answer-9-2-1",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-9-2-1": {
      "id": "answer-9-2-1",
      "chapter": 9,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 화내지 않았다. 기록장을 닫는 소리가 고함보다 무거웠다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "answer-9-2-2",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-9-2-2": {
      "id": "answer-9-2-2",
      "chapter": 9,
      "who": "마왕",
      "actor": "Q",
      "text": "확인되지 않은 말로 누군가를 벌주지는 않겠다.",
      "location": "study",
      "time": "스물넷째 날 · 재심",
      "expression": "furious",
      "queenPresent": true,
      "next": "story-10-entry",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-10-0": {
      "id": "ensemble-10-0",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "누명은 완전히 벗겨지지 않았지만, 당신이 혼자 길을 연 것은 아니라는 결론이 났다. 성은 다시 일상을 흉내 내기 시작했다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-1",
      "displayActor": null
    },
    "ensemble-10-1": {
      "id": "ensemble-10-1",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "깨진 유리를 먹은 퐁은 며칠째 움직임이 느렸다. 니아가 물수건으로 몸을 닦아줬다. 퐁이 찌그러진 별 모양으로 변했다가 무너졌다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-2",
      "displayActor": null
    },
    "ensemble-10-2": {
      "id": "ensemble-10-2",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "괜찮다는 뜻이야. 거짓말할 때 꼭 별이 돼.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-3": {
      "id": "ensemble-10-3",
      "chapter": 10,
      "who": "주인공",
      "actor": "P",
      "text": "슬라임도 거짓말을 해요?",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-4": {
      "id": "ensemble-10-4",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "일하기 싫을 때도 별이 돼. 어느 쪽인지는 내가 알아.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-5",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-5": {
      "id": "ensemble-10-5",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "당신은 작게 웃었다. 니아는 웃지 않았다. 잠시 후 먼저 말을 꺼냈다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-6",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-6": {
      "id": "ensemble-10-6",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "국경에서 언니하고 헤어졌어. 인간을 보면 아직도 먼저 문부터 확인해.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-7",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-7": {
      "id": "ensemble-10-7",
      "chapter": 10,
      "who": "주인공",
      "actor": "P",
      "text": "……미안합니다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-8",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-8": {
      "id": "ensemble-10-8",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "네가 한 일 아니면 네가 사과하지 마. 네가 한 일은 네가 책임지고.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-9",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-9": {
      "id": "ensemble-10-9",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "그 말은 당신을 편하게 해주지 않았다. 대신 무엇을 해야 하는지는 분명해졌다. 퐁이 작은 유리 조각을 하나 더 뱉었다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-10",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-10-10": {
      "id": "ensemble-10-10",
      "chapter": 10,
      "who": "루시엔",
      "actor": "L",
      "text": "오늘의 복구비입니다. 지불은 노동으로 받겠습니다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-11",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-10-11": {
      "id": "ensemble-10-11",
      "chapter": 10,
      "who": "주인공",
      "actor": "P",
      "text": "이번에도 여신 앞으로…….",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-12",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-10-12": {
      "id": "ensemble-10-12",
      "chapter": 10,
      "who": "루시엔",
      "actor": "L",
      "text": "주소가 확인되면요.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-10-13",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-10-13": {
      "id": "ensemble-10-13",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "니아가 결국 웃었다. 짧게 웃고, 다시 퐁을 닦았다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "decision-10",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "story-10-entry": {
      "id": "story-10-entry",
      "chapter": 10,
      "text": "",
      "who": "이야기",
      "next": "ensemble-10-0"
    },
    "decision-10": {
      "id": "decision-10",
      "chapter": 10,
      "who": "주인공",
      "text": "누가 시키지 않아도 할 일은 남아 있었다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "숙소의 깨진 창을 고치고, 다친 아이에게 직접 사과한다.",
          "next": "answer-10-0-0",
          "delta": 3,
          "trust": 5,
          "anger": 0,
          "flags": [
            "피해복구",
            "니아의신뢰"
          ],
          "tone": "gentle"
        },
        {
          "label": "퐁을 돌보며 니아가 하루 쉴 수 있게 근무를 바꾼다.",
          "next": "answer-10-1-0",
          "delta": 3,
          "trust": 5,
          "anger": 0,
          "flags": [
            "피해복구",
            "니아의신뢰"
          ],
          "tone": "cautious"
        },
        {
          "label": "조사는 끝났으니 이제 쉬어도 된다며 돌아간다.",
          "next": "answer-10-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        }
      ],
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-10-0-0": {
      "id": "answer-10-0-0",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "아이는 당신을 용서한다고 말하지 않았다. 창문에서 바람이 새지 않는지 확인한 뒤 이불을 당겼다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-0-1",
      "displayActor": null
    },
    "answer-10-0-1": {
      "id": "answer-10-0-1",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "내일도 와. 고칠 창이 더 있어.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-0-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-0-2": {
      "id": "answer-10-0-2",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "초대보다 일감에 가까웠다. 당신은 내일 시간을 물었다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-11-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-1-0": {
      "id": "answer-10-1-0",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "찬물. 소금 금지. 통 옆면을 두드리면 놀라니까 하지 마.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-1-1",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-1-1": {
      "id": "answer-10-1-1",
      "chapter": 10,
      "who": "주인공",
      "actor": "P",
      "text": "알겠습니다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-1-2",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-1-2": {
      "id": "answer-10-1-2",
      "chapter": 10,
      "who": "니아",
      "actor": "C",
      "text": "……고마워. 잠깐 잘게.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-1-3",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-1-3": {
      "id": "answer-10-1-3",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "니아는 의자에 앉은 지 얼마 지나지 않아 잠들었다. 퐁이 당신 쪽으로 조용히 기어왔다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-11-entry",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "answer-10-2-0": {
      "id": "answer-10-2-0",
      "chapter": 10,
      "who": "루시엔",
      "actor": "L",
      "text": "쉬셔도 됩니다. 다만 조사가 끝난 것과 복구가 끝난 것은 별개입니다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "answer-10-2-1",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "answer-10-2-1": {
      "id": "answer-10-2-1",
      "chapter": 10,
      "who": "이야기",
      "actor": null,
      "text": "당신이 돌아가는 뒤에서 망치 소리가 다시 났다. 다음 날에도 퐁의 몸 안에는 유리가 남아 있었다.",
      "location": "corridor",
      "time": "한 달째 · 복구 작업",
      "expression": null,
      "queenPresent": false,
      "next": "story-11-entry",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-11-0": {
      "id": "ensemble-11-0",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "네브라는 당신을 감옥이 아닌 치료실로 데려갔다. 침입했던 인간 병사 하나가 침대에 묶여 있었다. 어제 당신에게 칼을 겨눴던 얼굴이었다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-1",
      "displayActor": null
    },
    "ensemble-11-1": {
      "id": "ensemble-11-1",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "토마. 징집병. 아군 연락책이 성 안에 있다고 들었다더군. 누가 그 말을 전했는지는 아직 못 들었어.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-2",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-2": {
      "id": "ensemble-11-2",
      "chapter": 11,
      "who": "토마",
      "actor": "T",
      "text": "말하면 집에 있는 어머니가…….",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-3",
      "displayActor": "T"
    },
    "ensemble-11-3": {
      "id": "ensemble-11-3",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "당신의 몸이 먼저 긴장했다. 토마가 팔을 움직일 때마다, 배에 구멍이 뚫리던 순간이 떠올랐다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-4",
      "displayActor": "T"
    },
    "ensemble-11-4": {
      "id": "ensemble-11-4",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "나는 망령이지만, 살아 있는 자를 심문하는 일까지 편해지지는 않아.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-5",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-5": {
      "id": "ensemble-11-5",
      "chapter": 11,
      "who": "주인공",
      "actor": "P",
      "text": "마족을 죽이러 온 사람인데요.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-6",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-6": {
      "id": "ensemble-11-6",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "맞아. 그래서 재판을 받겠지. 치료를 받으면 안 된다는 뜻은 아니고.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-7",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-7": {
      "id": "ensemble-11-7",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "가르문이 문간에서 듣고 있었다. 그의 시선은 토마의 칼에 베인 병사의 빈 침대를 향했다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-8",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-8": {
      "id": "ensemble-11-8",
      "chapter": 11,
      "who": "가르문",
      "actor": "G",
      "text": "내 부하가 깨어나면 직접 설명해라. 왜 저자를 살려두는지.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-9",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-11-9": {
      "id": "ensemble-11-9",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "설명할게. 네 부하에게도 토마에게도 같은 기준을 적용한다고.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-11-10",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-11-10": {
      "id": "ensemble-11-10",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "네브라는 당신에게 붕대를 건넸다. 선택을 서두르라는 말은 하지 않았다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "decision-11",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "story-11-entry": {
      "id": "story-11-entry",
      "chapter": 11,
      "text": "",
      "who": "이야기",
      "next": "ensemble-11-0"
    },
    "decision-11": {
      "id": "decision-11",
      "chapter": 11,
      "who": "주인공",
      "text": "당신의 손에도, 그 병사의 손에도 아직 떨림이 남아 있었다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "치료를 돕되, 범죄에 대한 증언도 남긴다.",
          "next": "answer-11-0-0",
          "delta": 4,
          "trust": 6,
          "anger": 0,
          "flags": [
            "포로보호",
            "네브라의인정"
          ],
          "tone": "gentle"
        },
        {
          "label": "직접 치료할 수는 없지만 방해하지 않겠다고 말한다.",
          "next": "answer-11-1-0",
          "delta": 2,
          "trust": 4,
          "anger": 0,
          "flags": [
            "포로보호"
          ],
          "tone": "cautious"
        },
        {
          "label": "정보를 말하기 전에는 치료하지 말자고 한다.",
          "next": "answer-11-2-0",
          "delta": 0,
          "trust": -8,
          "anger": 4,
          "flags": [
            "포로위협"
          ],
          "tone": "direct"
        }
      ],
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-11-0-0": {
      "id": "answer-11-0-0",
      "chapter": 11,
      "who": "토마",
      "actor": "T",
      "text": "왜…….",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "answer-11-0-1",
      "displayActor": "T"
    },
    "answer-11-0-1": {
      "id": "answer-11-0-1",
      "chapter": 11,
      "who": "주인공",
      "actor": "P",
      "text": "당신이 한 일을 없애주려는 게 아닙니다. 살아서 말하라는 거예요.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "answer-11-0-2",
      "displayActor": "T"
    },
    "answer-11-0-2": {
      "id": "answer-11-0-2",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "토마가 붕대를 쥔 손을 놓았다. 네브라는 이름 옆에 ‘치료 중’이라고 적었다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "party-infirmary-0",
      "displayActor": "T"
    },
    "answer-11-1-0": {
      "id": "answer-11-1-0",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "그 정도로도 괜찮아. 네가 오늘 할 수 없는 일을 억지로 증명할 필요는 없어.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "answer-11-1-1",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-11-1-1": {
      "id": "answer-11-1-1",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "당신은 문밖에서 경비를 섰다. 토마를 지키는 일이기도 했고, 그에게서 거리를 두는 일이기도 했다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "party-infirmary-0",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-11-2-0": {
      "id": "answer-11-2-0",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "고통 속에서 원하는 말을 받아낼 수는 있어. 그 말이 사실이라는 보장은 없고.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "answer-11-2-1",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-11-2-1": {
      "id": "answer-11-2-1",
      "chapter": 11,
      "who": "이야기",
      "actor": null,
      "text": "네브라는 당신에게서 붕대를 가져갔다.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "answer-11-2-2",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-11-2-2": {
      "id": "answer-11-2-2",
      "chapter": 11,
      "who": "네브라",
      "actor": "N",
      "text": "오늘은 여기까지 하자. 서로 더 나빠지기 전에.",
      "location": "corridor",
      "time": "서른다섯째 날 · 북쪽 관문",
      "expression": null,
      "queenPresent": false,
      "next": "party-infirmary-0",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-12-0": {
      "id": "ensemble-12-0",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "마왕이 부른 곳은 처음 죽었던 테라스였다. 바닥은 말끔했다. 당신은 난간까지 가지 못하고 문턱에 섰다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-1",
      "displayActor": null
    },
    "ensemble-12-1": {
      "id": "ensemble-12-1",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "……안으로 들어오기 싫으면 거기 있어도 된다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-2": {
      "id": "ensemble-12-2",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 손을 난간 위에 올리지 않았다. 당신을 공격할 때 들었던 오른손을 옷소매 안으로 접었다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-3",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-3": {
      "id": "ensemble-12-3",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "조사가 끝났다. 네가 납품증을 만든 흔적은 없었다. 이그니스 휘하의 중개상이 양쪽 군대에 가짜 정보를 팔았더군.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-4",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-4": {
      "id": "ensemble-12-4",
      "chapter": 12,
      "who": "주인공",
      "actor": "P",
      "text": "이제 풀려나는 겁니까?",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-5",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-5": {
      "id": "ensemble-12-5",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "그래. 떠날 수도 있다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-6": {
      "id": "ensemble-12-6",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "당신은 기뻐해야 할 것 같았다. 그런데 먼저, 왜 처음부터 조사하지 않았느냐는 말이 올라왔다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-7": {
      "id": "ensemble-12-7",
      "chapter": 12,
      "who": "주인공",
      "actor": "P",
      "text": "그날도 이렇게 물어보실 수 있었잖아요.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-8": {
      "id": "ensemble-12-8",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "바람이 문틈을 지났다. 마왕은 변명하지 않았다. 한참 뒤 낮게 대답했다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-9": {
      "id": "ensemble-12-9",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "그럴 수 있었다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-10": {
      "id": "ensemble-12-10",
      "chapter": 12,
      "who": "주인공",
      "actor": "P",
      "text": "몸은 돌아와도 기억은 안 없어집니다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-11",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-11": {
      "id": "ensemble-12-11",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "……안다, 고 말할 자격은 없겠지. 내가 네 몸으로 겪은 일이 아니니.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-12",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-12": {
      "id": "ensemble-12-12",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 당신 쪽으로 한 걸음도 다가오지 않았다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-13",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-13": {
      "id": "ensemble-12-13",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "잘못했다. 전쟁 때문에 지쳤다는 말로 네가 겪은 일을 덮지는 않겠다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-14",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-14": {
      "id": "ensemble-12-14",
      "chapter": 12,
      "who": "주인공",
      "actor": "P",
      "text": "오늘 바로 괜찮아질 수는 없어요.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-15",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-15": {
      "id": "ensemble-12-15",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "그렇게 요구하지 않는다. 앞으로 공격하지 않겠다는 서약을 네 이름으로 남기겠다. 성을 떠나도 유효하다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "ensemble-12-16",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-12-16": {
      "id": "ensemble-12-16",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "당신은 처음으로 그녀가 내민 종이를, 함정이 있는지부터 읽었다. 그녀는 당신이 다 읽을 때까지 기다렸다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "decision-12",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-12-entry": {
      "id": "story-12-entry",
      "chapter": 12,
      "text": "",
      "who": "이야기",
      "next": "ensemble-12-0"
    },
    "decision-12": {
      "id": "decision-12",
      "chapter": 12,
      "who": "주인공",
      "text": "용서와 앞으로의 선택은 같은 대답이 아니어도 됐다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "queenPresent": true,
      "expression": "gloomy",
      "checkpoint": true,
      "choices": [
        {
          "label": "“아직 무섭습니다. 그래도 대화는 계속해보고 싶어요.”",
          "next": "answer-12-0-0",
          "delta": 8,
          "trust": 7,
          "anger": 0,
          "flags": [
            "경계존중",
            "사과를들음"
          ],
          "tone": "direct"
        },
        {
          "label": "“시간이 필요합니다. 성에서 일하며 지내도 됩니까?”",
          "next": "answer-12-1-0",
          "delta": 8,
          "trust": 7,
          "anger": 0,
          "flags": [
            "경계존중",
            "사과를들음"
          ],
          "tone": "cautious"
        },
        {
          "label": "괜찮은 척 웃으며 “사랑의 힘이면 다 낫죠.”라고 한다.",
          "next": "answer-12-2-0",
          "delta": 1,
          "trust": 0,
          "anger": 0,
          "flags": [
            "사과를들음",
            "감정회피"
          ],
          "tone": "playful"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-0-0": {
      "id": "answer-12-0-0",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "……알겠다. 다음에는 장소도 네가 정해라.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "answer-12-0-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-0-1": {
      "id": "answer-12-0-1",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "당신은 문턱을 넘지 않은 채 대화를 마쳤다. 마왕은 그것을 불쾌해하지 않았다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "party-ward-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-1-0": {
      "id": "answer-12-1-0",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "임금을 받고, 원하면 그만둘 수 있는 일이어야 한다. 집사에게 그렇게 전하겠다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "answer-12-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-1-1": {
      "id": "answer-12-1-1",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "당신은 종이를 접어 주머니에 넣었다. 이번에는 감옥으로 돌아가는 길이 아니었다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "party-ward-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-2-0": {
      "id": "answer-12-2-0",
      "chapter": 12,
      "who": "마왕",
      "actor": "Q",
      "text": "……그런 말로 끝내도 되는 일은 아니다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "answer-12-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-12-2-1": {
      "id": "answer-12-2-1",
      "chapter": 12,
      "who": "이야기",
      "actor": null,
      "text": "웃음이 오래 가지 못했다. 그녀는 따라 웃어주지 않았다. 당신은 다시 숨을 골랐다.",
      "location": "balcony",
      "time": "마흔둘째 날 · 테라스",
      "expression": "gloomy",
      "queenPresent": true,
      "next": "party-ward-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-0": {
      "id": "ensemble-13-0",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "성에서 일한 지 몇 주가 더 지났다. 당신은 문을 막는 법보다 먼저, 누구에게 도움을 청해야 하는지를 배웠다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-1",
      "displayActor": null
    },
    "ensemble-13-1": {
      "id": "ensemble-13-1",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "가르문은 경비 교대 시간을, 이그니스는 창고 번호를, 니아는 퐁이 배고플 때 내는 소리를 알려줬다. 아무도 한꺼번에 친해지지는 않았다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-2",
      "displayActor": null
    },
    "ensemble-13-2": {
      "id": "ensemble-13-2",
      "chapter": 13,
      "who": "루시엔",
      "actor": "L",
      "text": "오늘도 늦으셨군요. 이유는요?",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-13-3": {
      "id": "ensemble-13-3",
      "chapter": 13,
      "who": "주인공",
      "actor": "P",
      "text": "남쪽 창고의 물이 샜습니다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-4",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-13-4": {
      "id": "ensemble-13-4",
      "chapter": 13,
      "who": "루시엔",
      "actor": "L",
      "text": "식사 지각 사유로 인정합니다. 세탁비와 별도로요.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-5",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-13-5": {
      "id": "ensemble-13-5",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "긴 식탁에는 마왕이 남아 있었다. 당신 몫의 수프 위에는 빈 접시가 뚜껑처럼 덮여 있었다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-6",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-13-6": {
      "id": "ensemble-13-6",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "집사가 남겨놓았다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-7": {
      "id": "ensemble-13-7",
      "chapter": 13,
      "who": "루시엔",
      "actor": "L",
      "text": "폐하께서 뚜껑을 덮어두라고 하셨습니다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-8",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-13-8": {
      "id": "ensemble-13-8",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "……퇴근해라, 루시엔.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-9": {
      "id": "ensemble-13-9",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "집사는 미소도 짓지 않고 물러났다. 당신이 숟가락을 들자 마왕도 식은 차를 한 모금 마셨다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-10": {
      "id": "ensemble-13-10",
      "chapter": 13,
      "who": "주인공",
      "actor": "P",
      "text": "먼저 주무셔도 되는데요.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-11",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-11": {
      "id": "ensemble-13-11",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "결재가 남았다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-12",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-12": {
      "id": "ensemble-13-12",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "문서에는 서명이 모두 끝나 있었다. 당신은 그것을 지적하지 않았다. 창밖에서 눈이 내리기 시작했다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-13",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-13": {
      "id": "ensemble-13-13",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "인간의 마을에도 이렇게 눈이 오나?",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-14",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-14": {
      "id": "ensemble-13-14",
      "chapter": 13,
      "who": "주인공",
      "actor": "P",
      "text": "네. 지붕이 새는 건 여기랑 똑같고요.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-13-15",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-13-15": {
      "id": "ensemble-13-15",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "그녀가 소리 없이 웃었다. 누군가 웃으라고 한 적도, 사랑이라는 말을 꺼낸 적도 없는 저녁이었다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "decision-13",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-13-entry": {
      "id": "story-13-entry",
      "chapter": 13,
      "text": "",
      "who": "이야기",
      "next": "ensemble-13-0"
    },
    "decision-13": {
      "id": "decision-13",
      "chapter": 13,
      "who": "주인공",
      "text": "식탁 한쪽에 아직 손대지 않은 차 주전자가 있었다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "queenPresent": true,
      "expression": "indifferent",
      "checkpoint": true,
      "choices": [
        {
          "label": "그녀의 찻잔도 데워주며 고향 이야기를 한다.",
          "next": "answer-13-0-0",
          "delta": 9,
          "trust": 5,
          "anger": 0,
          "flags": [
            "함께한저녁"
          ],
          "tone": "gentle"
        },
        {
          "label": "“기다려주셔서 고맙습니다.”라고 직접 말한다.",
          "next": "answer-13-1-0",
          "delta": 9,
          "trust": 5,
          "anger": 0,
          "flags": [
            "함께한저녁"
          ],
          "tone": "direct"
        },
        {
          "label": "기다린 이유를 인정할 때까지 계속 놀린다.",
          "next": "answer-13-2-0",
          "delta": 2,
          "trust": -2,
          "anger": 0,
          "flags": [],
          "tone": "playful"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-13-0-0": {
      "id": "answer-13-0-0",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 처음에는 듣기만 했다. 나중에는 시장의 빵 맛을 물었고, 조금 뒤에는 당신이 누구와 살았는지 물었다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-13-0-1",
      "displayActor": null
    },
    "answer-13-0-1": {
      "id": "answer-13-0-1",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "저녁이 길어졌다. 어느 쪽도 서둘러 끝내지 않았다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "party-tracks-0",
      "displayActor": null
    },
    "answer-13-1-0": {
      "id": "answer-13-1-0",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "……늦는다고 말은 남겨라. 혹시 무슨 일이 생겼는지 확인해야 하니까.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-13-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-13-1-1": {
      "id": "answer-13-1-1",
      "chapter": 13,
      "who": "주인공",
      "actor": "P",
      "text": "네. 다음에는 꼭요.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-13-1-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-13-1-2": {
      "id": "answer-13-1-2",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "그 약속은 작았다. 그래서 지킬 수 있을 것 같았다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "party-tracks-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-13-2-0": {
      "id": "answer-13-2-0",
      "chapter": 13,
      "who": "마왕",
      "actor": "Q",
      "text": "네가 모른 척해주면 더 말할 수 있을 때도 있다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-13-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-13-2-1": {
      "id": "answer-13-2-1",
      "chapter": 13,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 서류를 챙겼다. 당신은 농담을 멈췄지만, 그날의 대화는 이미 짧아져 있었다.",
      "location": "dining",
      "time": "두 달째 · 겨울 준비",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "party-tracks-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-0": {
      "id": "ensemble-14-0",
      "chapter": 14,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "마을에서 당신을 실종자로 찾고 있어요. 소식은 전해야겠죠.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-1",
      "displayActor": "A"
    },
    "ensemble-14-1": {
      "id": "ensemble-14-1",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "여신은 이번에는 꽃잎을 흩뿌리지 않았다. 책상 한쪽에 작은 통행석을 놓았다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-2",
      "displayActor": "A"
    },
    "ensemble-14-2": {
      "id": "ensemble-14-2",
      "chapter": 14,
      "who": "주인공",
      "actor": "P",
      "text": "왜 이제 말씀하세요?",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-3",
      "displayActor": "A"
    },
    "ensemble-14-3": {
      "id": "ensemble-14-3",
      "chapter": 14,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "제가 당신을 너무 임무처럼 대했어요. 그건 제 잘못이에요.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-4",
      "displayActor": "A"
    },
    "ensemble-14-4": {
      "id": "ensemble-14-4",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "이 인간의 행선지를 네가 정하지 마라.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-5",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-5": {
      "id": "ensemble-14-5",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 통행석을 당신 쪽으로 밀었다. 손끝이 닿았지만 곧 떨어졌다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-6": {
      "id": "ensemble-14-6",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "갈 수 있다. 돌아와야 한다는 조건도 없다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-7": {
      "id": "ensemble-14-7",
      "chapter": 14,
      "who": "주인공",
      "actor": "P",
      "text": "정말 괜찮으세요?",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-8": {
      "id": "ensemble-14-8",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "괜찮은 것과, 막을 권리가 있는 것은 다르다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-9": {
      "id": "ensemble-14-9",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "문밖에는 니아가 싸준 말린 빵과 루시엔의 연락 주소가 있었다. 퐁은 당신 부츠 위에 올라갔다가, 짐을 들자 내려왔다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-14-10": {
      "id": "ensemble-14-10",
      "chapter": 14,
      "who": "가르문",
      "actor": "G",
      "text": "방패 끈은 중간에 한 번 더 조여라.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-11",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-14-11": {
      "id": "ensemble-14-11",
      "chapter": 14,
      "who": "이그니스",
      "actor": "I",
      "text": "국경 시장의 곡물 가격도 보고 와. ……돌아올 생각이 있다면.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "ensemble-14-12",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-14-12": {
      "id": "ensemble-14-12",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "당신은 대답을 서두르지 않았다. 성을 떠날 수 있어야, 남는다는 말에도 뜻이 생긴다는 것을 이제 알았다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "decision-14",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "story-14-entry": {
      "id": "story-14-entry",
      "chapter": 14,
      "text": "",
      "who": "이야기",
      "next": "ensemble-14-0"
    },
    "decision-14": {
      "id": "decision-14",
      "chapter": 14,
      "who": "주인공",
      "text": "마왕은 당신의 대답을 대신 정하지 않았다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "queenPresent": true,
      "expression": "uncomfortable",
      "checkpoint": true,
      "choices": [
        {
          "label": "“돌아오겠습니다. 늦어지면 먼저 소식을 보낼게요.”",
          "next": "answer-14-0-0",
          "delta": 8,
          "trust": 6,
          "anger": 0,
          "flags": [
            "귀환약속"
          ],
          "tone": "gentle"
        },
        {
          "label": "“마음을 정리할 시간이 필요해요.”",
          "next": "answer-14-1-0",
          "delta": 4,
          "trust": 5,
          "anger": 0,
          "flags": [
            "솔직한거리"
          ],
          "tone": "cautious"
        },
        {
          "label": "붙잡아주지 않으면 돌아오지 않겠다고 한다.",
          "next": "answer-14-2-0",
          "delta": 0,
          "trust": -6,
          "anger": 4,
          "flags": [
            "관계압박"
          ],
          "tone": "direct"
        }
      ],
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "answer-14-0-0": {
      "id": "answer-14-0-0",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "……기다리고 있겠다. 그 말은 해도 되겠지.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "answer-14-0-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-0-1": {
      "id": "answer-14-0-1",
      "chapter": 14,
      "who": "주인공",
      "actor": "P",
      "text": "네.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "answer-14-0-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-0-2": {
      "id": "answer-14-0-2",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 통행석을 쥔 당신 손을 놓았다. 당신도 이번에는 웃는 것을 숨기지 않았다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "party-nightwatch-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-1-0": {
      "id": "answer-14-1-0",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "알겠다. 답을 재촉하는 편지는 보내지 않겠다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "answer-14-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-1-1": {
      "id": "answer-14-1-1",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "그 말 덕분에, 편지를 써도 괜찮을 것 같았다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "party-nightwatch-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-2-0": {
      "id": "answer-14-2-0",
      "chapter": 14,
      "who": "마왕",
      "actor": "Q",
      "text": "……그런 조건으로 널 붙잡지는 않겠다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "answer-14-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-14-2-1": {
      "id": "answer-14-2-1",
      "chapter": 14,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 끝내 가지 말라고 하지 않았다. 당신은 기대했던 대답과 다른 침묵을 들고 성문을 나섰다.",
      "location": "study",
      "time": "아홉째 주 · 귀향 허가",
      "expression": "uncomfortable",
      "queenPresent": true,
      "next": "party-nightwatch-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-15-0": {
      "id": "ensemble-15-0",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "고향 방은 기억보다 좁았다. 익숙한 침대에 누웠는데도, 문밖에서 수레가 지나가는 소리를 기다리고 있었다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-1",
      "displayActor": null
    },
    "ensemble-15-1": {
      "id": "ensemble-15-1",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "첫 편지는 루시엔에게서 왔다. 급료 내역과 미수금 정정표였다. 마지막 줄에 다른 필체로 ‘퐁은 유리를 다 뱉었다’고 적혀 있었다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-2",
      "displayActor": null
    },
    "ensemble-15-2": {
      "id": "ensemble-15-2",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "니아의 편지에는 찻집 그림이 있었다. 가게 이름 자리는 비어 있었다. 당신에게 정해달라는 말은 없었다. 대신 “여기 차가 맛있으면 한 줌만 구해줘”라고 했다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-3",
      "displayActor": null
    },
    "ensemble-15-3": {
      "id": "ensemble-15-3",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "마왕의 편지는 사흘 뒤 도착했다. 두 장 중 한 장은 통행에 필요한 서류였고, 다른 한 장에는 네 줄뿐이었다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-4",
      "displayActor": null
    },
    "ensemble-15-4": {
      "id": "ensemble-15-4",
      "chapter": 15,
      "who": "마왕",
      "actor": "Q",
      "text": "남쪽 창고는 고쳤다. 이그니스가 네 임금을 빼먹지는 않았다.\n\n저녁은 제시간에 먹고 있나. 답장은 급하지 않다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-5",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-15-5": {
      "id": "ensemble-15-5",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "당신은 종이를 다시 읽었다. 특별한 말은 없었다. 그런데 누구의 목소리인지 또렷하게 들렸다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-15-6": {
      "id": "ensemble-15-6",
      "chapter": 15,
      "who": "토마",
      "actor": "T",
      "text": "그분에게서 온 겁니까?",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-7",
      "displayActor": "T"
    },
    "ensemble-15-7": {
      "id": "ensemble-15-7",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "포로 교환으로 돌아온 토마가 약봉지를 내려놓았다. 그는 인간 쪽에서도 감시받고 있었다. 살아 돌아왔다는 이유만으로.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-8",
      "displayActor": "T"
    },
    "ensemble-15-8": {
      "id": "ensemble-15-8",
      "chapter": 15,
      "who": "토마",
      "actor": "T",
      "text": "가짜 정보를 판 중개상은 여기에도 돈을 뿌렸습니다. 전쟁이 멎으면 손해 보는 사람이 많아요.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-9",
      "displayActor": "T"
    },
    "ensemble-15-9": {
      "id": "ensemble-15-9",
      "chapter": 15,
      "who": "주인공",
      "actor": "P",
      "text": "그걸 증언할 수 있습니까?",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-10",
      "displayActor": "T"
    },
    "ensemble-15-10": {
      "id": "ensemble-15-10",
      "chapter": 15,
      "who": "토마",
      "actor": "T",
      "text": "……제 이름을 숨겨달라고 하지는 않겠습니다. 대신 어머니를 먼저 안전한 곳으로 옮겨주세요.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "ensemble-15-11",
      "displayActor": "T"
    },
    "ensemble-15-11": {
      "id": "ensemble-15-11",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "당신은 편지와 약봉지를 번갈아 봤다. 돌아가고 싶다는 마음만으로 해결할 수 없는 일이 생겼다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "decision-15",
      "displayActor": "T"
    },
    "story-15-entry": {
      "id": "story-15-entry",
      "chapter": 15,
      "text": "",
      "who": "이야기",
      "next": "ensemble-15-0"
    },
    "decision-15": {
      "id": "decision-15",
      "chapter": 15,
      "who": "주인공",
      "text": "답장에 무엇부터 적을지 정했다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "queenPresent": false,
      "expression": null,
      "checkpoint": true,
      "choices": [
        {
          "label": "토마의 보호를 요청하고 귀환이 늦어질 이유를 설명한다.",
          "next": "answer-15-0-0",
          "delta": 8,
          "trust": 6,
          "anger": 0,
          "flags": [
            "약속이행",
            "인간측증언"
          ],
          "tone": "gentle"
        },
        {
          "label": "직접 토마 가족을 데려갈 계획을 쓰고 도움을 구한다.",
          "next": "answer-15-1-0",
          "delta": 8,
          "trust": 6,
          "anger": 0,
          "flags": [
            "약속이행",
            "인간측증언"
          ],
          "tone": "direct"
        },
        {
          "label": "걱정시키기 싫어 아무 일 없다고만 쓴다.",
          "next": "answer-15-2-0",
          "delta": 1,
          "trust": -4,
          "anger": 0,
          "flags": [
            "소식은폐"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "T"
    },
    "answer-15-0-0": {
      "id": "answer-15-0-0",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "네브라의 답장은 짧았다. ‘호위 인원 둘을 보낸다.’ 마왕의 답장은 더 짧았다. ‘알았다. 다치지 마라.’",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "answer-15-0-1",
      "displayActor": null
    },
    "answer-15-0-1": {
      "id": "answer-15-0-1",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "당신은 약속을 어기지 않고도 늦을 수 있다는 것을 배웠다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "story-16-entry",
      "displayActor": null
    },
    "answer-15-1-0": {
      "id": "answer-15-1-0",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "가르문은 당신의 동선에서 위험한 길 두 곳을 지웠다. 세레인은 편지 밑에 연락망을 하나 더 붙였다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "answer-15-1-1",
      "displayActor": null
    },
    "answer-15-1-1": {
      "id": "answer-15-1-1",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "계획은 더 이상 당신 혼자만의 것이 아니었다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "story-16-entry",
      "displayActor": null
    },
    "answer-15-2-0": {
      "id": "answer-15-2-0",
      "chapter": 15,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 당신이 무사하다고 믿었다. 도움은 오지 않았다. 당신은 토마의 약봉지를 챙기며 다음 편지의 첫 문장을 다시 고민했다.",
      "location": "village",
      "time": "열째 주 · 벨륀의 밤",
      "expression": null,
      "queenPresent": false,
      "next": "story-16-entry",
      "displayActor": null
    },
    "ensemble-16-0": {
      "id": "ensemble-16-0",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "성문 안쪽에서 퐁이 굴러왔다. 니아는 “뛰면 미끄러져!”라고 소리쳤다. 누구에게 한 말인지 알 수 없었다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-1",
      "displayActor": null
    },
    "ensemble-16-1": {
      "id": "ensemble-16-1",
      "chapter": 16,
      "who": "루시엔",
      "actor": "L",
      "text": "복귀를 확인했습니다. 방은 비워두었습니다. 짐은 직접 드셔도 됩니다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-2",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-16-2": {
      "id": "ensemble-16-2",
      "chapter": 16,
      "who": "주인공",
      "actor": "P",
      "text": "반갑다는 뜻이죠?",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-16-3": {
      "id": "ensemble-16-3",
      "chapter": 16,
      "who": "루시엔",
      "actor": "L",
      "text": "그렇게 해석하셔도 회계에는 지장이 없습니다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-4",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-16-4": {
      "id": "ensemble-16-4",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 계단 위에서 내려오지 않았다. 당신이 올라갈 때까지 기다렸다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-5",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-16-5": {
      "id": "ensemble-16-5",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "돌아왔군.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-16-6": {
      "id": "ensemble-16-6",
      "chapter": 16,
      "who": "주인공",
      "actor": "P",
      "text": "네. 돌아왔습니다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-16-7": {
      "id": "ensemble-16-7",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "그것으로 충분한 순간이 잠깐 있었다. 여신이 나타나기 전까지는.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-16-8": {
      "id": "ensemble-16-8",
      "chapter": 16,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "이제 말해도 되겠네요. 당신을 선택한 이유요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-9",
      "displayActor": "A"
    },
    "ensemble-16-9": {
      "id": "ensemble-16-9",
      "chapter": 16,
      "who": "주인공",
      "actor": "P",
      "text": "이제야요?",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-10",
      "displayActor": "A"
    },
    "ensemble-16-10": {
      "id": "ensemble-16-10",
      "chapter": 16,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "예전에 국경에서 다친 마족 운반병을 옮긴 적 있죠. 당신 부대가 물러난 뒤에도요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-11",
      "displayActor": "A"
    },
    "ensemble-16-11": {
      "id": "ensemble-16-11",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "오래전 비 오는 날이 떠올랐다. 무거웠던 방패와, 그보다 더 무거웠던 사람 하나. 얼굴은 제대로 보지도 못했다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-12",
      "displayActor": "A"
    },
    "ensemble-16-12": {
      "id": "ensemble-16-12",
      "chapter": 16,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "당신은 그 사람이 좋은 사람인지 확인할 수 없었어요. 그래도 길 한가운데 두지는 않았죠. 그 선택을 봤어요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-13",
      "displayActor": "A"
    },
    "ensemble-16-13": {
      "id": "ensemble-16-13",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "그래서 허락도 받지 않고 이곳에 던졌나?",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-14",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-16-14": {
      "id": "ensemble-16-14",
      "chapter": 16,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "……그 부분은 변명하지 않을게요. 사랑할 상대까지 제가 정할 수는 없어요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-15",
      "displayActor": "A"
    },
    "ensemble-16-15": {
      "id": "ensemble-16-15",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "통행석의 빛이 약해졌다. 여신은 더 이상 임무라는 말을 하지 않았다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-16-16",
      "displayActor": "A"
    },
    "ensemble-16-16": {
      "id": "ensemble-16-16",
      "chapter": 16,
      "who": "사랑의 여신",
      "actor": "A",
      "text": "계속할지 결정하는 건 두 사람이에요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "decision-16",
      "displayActor": "A"
    },
    "story-16-entry": {
      "id": "story-16-entry",
      "chapter": 16,
      "text": "",
      "who": "이야기",
      "next": "ensemble-16-0"
    },
    "decision-16": {
      "id": "decision-16",
      "chapter": 16,
      "who": "주인공",
      "text": "이곳에 온 이유와, 지금 남는 이유는 달라질 수 있었다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "queenPresent": true,
      "expression": "curious",
      "checkpoint": true,
      "choices": [
        {
          "label": "“여신의 계획과 상관없이, 제 의지로 돌아왔습니다.”",
          "next": "answer-16-0-0",
          "delta": 10,
          "trust": 6,
          "anger": 0,
          "flags": [
            "자발적귀환"
          ],
          "tone": "direct"
        },
        {
          "label": "마왕에게 앞으로도 서로 선택할 수 있는 관계를 제안한다.",
          "next": "answer-16-1-0",
          "delta": 10,
          "trust": 6,
          "anger": 0,
          "flags": [
            "자발적귀환",
            "경계존중"
          ],
          "tone": "gentle"
        },
        {
          "label": "여신의 임무를 끝내려면 결혼해야 한다고 강조한다.",
          "next": "answer-16-2-0",
          "delta": 0,
          "trust": -8,
          "anger": 6,
          "flags": [
            "임무우선"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "A"
    },
    "answer-16-0-0": {
      "id": "answer-16-0-0",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "……그 말은 네가 직접 해줘서 좋군.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-16-0-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-0-1": {
      "id": "answer-16-0-1",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "마왕이 당신의 짐 한쪽을 들었다. 도움을 청하기 전에 그렇게 한 것은 처음이었다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "party-return-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-1-0": {
      "id": "answer-16-1-0",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "네가 떠날 수 있다는 것을 알면서도 기다리는 건, 생각보다 어려웠다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-16-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-1-1": {
      "id": "answer-16-1-1",
      "chapter": 16,
      "who": "주인공",
      "actor": "P",
      "text": "그래도 다시 왔잖아요.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-16-1-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-1-2": {
      "id": "answer-16-1-2",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "……그래. 그러니 이번에는 나도 선택하겠다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "party-return-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-2-0": {
      "id": "answer-16-2-0",
      "chapter": 16,
      "who": "마왕",
      "actor": "Q",
      "text": "그렇다면 아직 네 대답을 들은 적이 없군.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-16-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-16-2-1": {
      "id": "answer-16-2-1",
      "chapter": 16,
      "who": "이야기",
      "actor": null,
      "text": "그녀가 잡으려던 짐 손잡이에서 손을 뗐다. 여신도 웃지 않았다.",
      "location": "corridor",
      "time": "열한째 주 · 귀환",
      "expression": "curious",
      "queenPresent": true,
      "next": "party-return-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-17-0": {
      "id": "ensemble-17-0",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "가짜 납품증 사건은 인간 쪽 군수 상단으로 이어졌다. 전쟁을 부추겨 물자를 팔던 중개망이었다. 그렇다고 모든 침공이 그들 탓인 것은 아니었다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-1",
      "displayActor": null
    },
    "ensemble-17-1": {
      "id": "ensemble-17-1",
      "chapter": 17,
      "who": "세레인",
      "actor": "V",
      "text": "범인이 잡혀도, 이미 잃은 사람은 돌아오지 않습니다. 협상은 그 사실부터 인정하고 시작해야 해요.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-2",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-17-2": {
      "id": "ensemble-17-2",
      "chapter": 17,
      "who": "가르문",
      "actor": "G",
      "text": "사흘간의 통행 휴전. 성벽군은 반대다. 습격을 준비할 시간도 사흘이면 충분해.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-3",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-17-3": {
      "id": "ensemble-17-3",
      "chapter": 17,
      "who": "이그니스",
      "actor": "I",
      "text": "배급 창고는 찬성. 이번 겨울을 같은 방식으로는 못 넘겨.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-4",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-17-4": {
      "id": "ensemble-17-4",
      "chapter": 17,
      "who": "네브라",
      "actor": "N",
      "text": "포로 명부를 먼저 교환하자. 서로 살아 있는 이름부터 확인하면 된다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-5",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-17-5": {
      "id": "ensemble-17-5",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "네 사람의 시선이 당신에게 모였다. 마왕은 당신 대신 말하지 않았다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-6",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-17-6": {
      "id": "ensemble-17-6",
      "chapter": 17,
      "who": "마왕",
      "actor": "Q",
      "text": "내 곁에 있다는 이유로 네 제안이 통과되지는 않을 것이다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-17-7": {
      "id": "ensemble-17-7",
      "chapter": 17,
      "who": "주인공",
      "actor": "P",
      "text": "그 편이 좋습니다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "ensemble-17-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-17-8": {
      "id": "ensemble-17-8",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "당신은 손바닥을 책상 위에 놓았다. 방패를 쥐느라 굳은살이 생긴 손이었다. 그 손으로 사람을 설득하는 일은 아직 서툴렀다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "decision-17",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-17-entry": {
      "id": "story-17-entry",
      "chapter": 17,
      "text": "",
      "who": "이야기",
      "next": "ensemble-17-0"
    },
    "decision-17": {
      "id": "decision-17",
      "chapter": 17,
      "who": "주인공",
      "text": "이번 제안은 마왕에게 잘 보이기 위한 대답으로는 부족했다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "queenPresent": true,
      "expression": "indifferent",
      "checkpoint": true,
      "choices": [
        {
          "label": "주민 대피로·납품 검사·포로 교환을 나눠 시험 운영하자고 한다.",
          "next": "answer-17-0-0",
          "delta": 8,
          "trust": 6,
          "anger": 0,
          "flags": [
            "단계적휴전"
          ],
          "tone": "cautious"
        },
        {
          "label": "왕끼리의 약속보다 현장 증언을 먼저 공개하자고 한다.",
          "next": "answer-17-1-0",
          "delta": 8,
          "trust": 5,
          "anger": 0,
          "flags": [
            "단계적휴전"
          ],
          "tone": "direct"
        },
        {
          "label": "마왕과 결혼하면 평화의 상징이 되니 믿어달라고 한다.",
          "next": "answer-17-2-0",
          "delta": 0,
          "trust": -8,
          "anger": 5,
          "flags": [
            "정치적지름길"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-17-0-0": {
      "id": "answer-17-0-0",
      "chapter": 17,
      "who": "세레인",
      "actor": "V",
      "text": "각 항목을 누가 확인할지 붙입시다. 실패하면 중단할 조건도요.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-17-0-1",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-17-0-1": {
      "id": "answer-17-0-1",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "세레인이 빈 종이를 돌렸다. 회의는 찬성과 반대 대신 사람 이름과 날짜로 채워지기 시작했다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "council-result",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "answer-17-1-0": {
      "id": "answer-17-1-0",
      "chapter": 17,
      "who": "네브라",
      "actor": "N",
      "text": "좋아. 증언자 보호부터 준비하자.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-17-1-1",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-17-1-1": {
      "id": "answer-17-1-1",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "토마와 니아의 이름이 같은 문서에 적혔다. 둘이 같은 편이라는 뜻은 아니었다. 같은 자리에 앉을 수 있게 하자는 뜻이었다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "council-result",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "answer-17-2-0": {
      "id": "answer-17-2-0",
      "chapter": 17,
      "who": "가르문",
      "actor": "G",
      "text": "네 결혼식에 우리 병사 목숨을 축의금으로 낼 수는 없다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-17-2-1",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "answer-17-2-1": {
      "id": "answer-17-2-1",
      "chapter": 17,
      "who": "마왕",
      "actor": "Q",
      "text": "……나도 같은 생각이다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "answer-17-2-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-17-2-2": {
      "id": "answer-17-2-2",
      "chapter": 17,
      "who": "이야기",
      "actor": null,
      "text": "당신은 준비한 말을 접었다. 사람들의 삶은 두 사람의 마음만으로 결정할 수 없었다.",
      "location": "study",
      "time": "석 달째 · 휴전 회의",
      "expression": "indifferent",
      "queenPresent": true,
      "next": "council-result",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-0": {
      "id": "ensemble-18-0",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "회의가 끝난 뒤 마왕은 당신을 테라스로 불렀다. 이번에는 당신에게 먼저, 그곳이어도 괜찮겠느냐고 물었다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-1",
      "displayActor": null
    },
    "ensemble-18-1": {
      "id": "ensemble-18-1",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "당신은 난간까지 걸어갔다. 손은 떨리지 않았다. 그것을 깨닫자 조금 뒤늦게 숨이 나왔다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-2",
      "displayActor": null
    },
    "ensemble-18-2": {
      "id": "ensemble-18-2",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "네가 없는 저녁에는 문서를 더 빨리 처리할 수 있을 줄 알았다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-3",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-3": {
      "id": "ensemble-18-3",
      "chapter": 18,
      "who": "주인공",
      "actor": "P",
      "text": "실제로는요?",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-4",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-4": {
      "id": "ensemble-18-4",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "집사에게 우편이 왔는지 세 번 물었다. 네 번째에는 그자가 종을 하나 놓고 갔지. 편지가 오면 울리겠다고.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-5",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-5": {
      "id": "ensemble-18-5",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "당신은 웃었다. 마왕도 이번에는 고개를 돌리지 않았다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-6",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-6": {
      "id": "ensemble-18-6",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "처음에는 편해져서 그런 줄 알았다. 익숙한 사람이 없는 것뿐이라고.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-7",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-7": {
      "id": "ensemble-18-7",
      "chapter": 18,
      "who": "주인공",
      "actor": "P",
      "text": "……지금은요?",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-8",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-8": {
      "id": "ensemble-18-8",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "아픈 일을 없던 일로 할 수 없다는 것도 안다. 그래도 앞으로 함께할 시간을 원한다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-9": {
      "id": "ensemble-18-9",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 손을 내밀었다가, 난간 위에 내려놓았다. 당신이 잡을지 선택할 수 있는 자리였다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-18-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-18-10": {
      "id": "ensemble-18-10",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "좋아한다. 이 말에 나라의 일이나 신의 임무는 붙이지 않겠다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "decision-18",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-18-entry": {
      "id": "story-18-entry",
      "chapter": 18,
      "text": "",
      "who": "이야기",
      "next": "ensemble-18-0",
      "gate": "earned-romance"
    },
    "decision-18": {
      "id": "decision-18",
      "chapter": 18,
      "who": "주인공",
      "text": "그녀는 당신이 답할 때까지 기다렸다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "queenPresent": true,
      "expression": "shy",
      "checkpoint": true,
      "choices": [
        {
          "label": "“저도 좋아합니다. 천천히 같이 가요.”",
          "next": "answer-18-0-0",
          "delta": 16,
          "trust": 4,
          "anger": 0,
          "flags": [
            "고백성공"
          ],
          "tone": "gentle"
        },
        {
          "label": "“사랑의 힘이라고 부르면, 이번에는 웃어주시나요?”",
          "next": "answer-18-1-0",
          "delta": 16,
          "trust": 3,
          "anger": 0,
          "flags": [
            "고백성공",
            "사랑의힘_화해"
          ],
          "tone": "playful"
        },
        {
          "label": "아직 연인으로 답할 준비가 되지 않았다고 말한다.",
          "next": "answer-18-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [
            "우정을선택"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-0-0": {
      "id": "answer-18-0-0",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "당신이 손을 잡았다. 마왕은 손가락에 힘을 주었다가, 너무 세지 않은지 당신 얼굴을 확인했다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "answer-18-0-1",
      "displayActor": null
    },
    "answer-18-0-1": {
      "id": "answer-18-0-1",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "……그래. 이번에는 서두르지 않겠다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "party-border-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-1-0": {
      "id": "answer-18-1-0",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "네가 또 그 말을 할 줄은 알았다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "answer-18-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-1-1": {
      "id": "answer-18-1-1",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "그녀가 웃었다. 위협도 붉은 빛도 없었다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "answer-18-1-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-1-2": {
      "id": "answer-18-1-2",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "……이번에는, 나도 같은 뜻으로 알아듣겠다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "party-border-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-2-0": {
      "id": "answer-18-2-0",
      "chapter": 18,
      "who": "마왕",
      "actor": "Q",
      "text": "……알겠다. 그것 때문에 네 자리를 없애지는 않겠다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "answer-18-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-18-2-1": {
      "id": "answer-18-2-1",
      "chapter": 18,
      "who": "이야기",
      "actor": null,
      "text": "당신은 그녀 옆에 섰다. 사랑이라고 부르지 않아도, 여기까지 함께 온 시간은 사라지지 않았다.",
      "location": "balcony",
      "time": "석 달째 · 회의 뒤",
      "expression": "shy",
      "queenPresent": true,
      "next": "end-friend",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-19-0": {
      "id": "ensemble-19-0",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "첫 포로 교환 날에는 비가 내렸다. 양쪽 병사 모두 무기를 내려놓지 않았다. 다만 칼끝이 땅을 향하고 있었다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-1",
      "displayActor": null
    },
    "ensemble-19-1": {
      "id": "ensemble-19-1",
      "chapter": 19,
      "who": "네브라",
      "actor": "N",
      "text": "명부를 읽겠다. 대답하는 이름부터 건너오면 된다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-2",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-19-2": {
      "id": "ensemble-19-2",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "니아의 언니 이름은 이번 명부에도 없었다. 니아는 종이를 접고 다음 사람에게 물을 건넸다. 당신에게도 괜찮다는 거짓말은 하지 않았다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-3",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-19-3": {
      "id": "ensemble-19-3",
      "chapter": 19,
      "who": "니아",
      "actor": "C",
      "text": "다음 교환도 하게 만들어. 그걸로 됐어.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-4",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-19-4": {
      "id": "ensemble-19-4",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "가르문은 통로 끝에서 경비를 섰다. 이그니스는 양쪽 수레의 곡물 무게를 쟀고, 세레인은 봉인을 확인했다. 퐁은 비에 번진 안내선을 몸으로 따라 닦았다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-5",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-19-5": {
      "id": "ensemble-19-5",
      "chapter": 19,
      "who": "이그니스",
      "actor": "I",
      "text": "살면서 인간 세관하고 무게 단위로 싸울 줄은 몰랐네.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-6",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-19-6": {
      "id": "ensemble-19-6",
      "chapter": 19,
      "who": "루시엔",
      "actor": "L",
      "text": "칼로 싸우는 것보다는 추가 비용이 적습니다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-7",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-19-7": {
      "id": "ensemble-19-7",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "마왕이 당신 옆으로 다가왔다. 아무도 무릎을 꿇지 않았다. 지금은 왕보다 통로를 막지 않는 사람이 필요했다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-8",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-19-8": {
      "id": "ensemble-19-8",
      "chapter": 19,
      "who": "마왕",
      "actor": "Q",
      "text": "쉽지는 않군.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-9",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-19-9": {
      "id": "ensemble-19-9",
      "chapter": 19,
      "who": "주인공",
      "actor": "P",
      "text": "네. 그래도 오늘은 살아서 건너간 이름이 늘었네요.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "ensemble-19-10",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-19-10": {
      "id": "ensemble-19-10",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "마왕은 당신 손을 잠깐 잡았다가 놓았다. 다시 명부가 읽히기 시작했다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "decision-19",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-19-entry": {
      "id": "story-19-entry",
      "chapter": 19,
      "text": "",
      "who": "이야기",
      "next": "ensemble-19-0"
    },
    "decision-19": {
      "id": "decision-19",
      "chapter": 19,
      "who": "주인공",
      "text": "휴전은 시작됐지만, 모든 원한이 끝난 것은 아니었다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "queenPresent": true,
      "expression": "curious",
      "checkpoint": true,
      "choices": [
        {
          "label": "약속을 계속 지키며, 서로의 의지로 결혼을 준비한다.",
          "next": "answer-19-0-0",
          "delta": 16,
          "trust": 5,
          "anger": 0,
          "flags": [
            "공동의약속"
          ],
          "tone": "gentle"
        },
        {
          "label": "“당신과 결혼하고 싶습니다.” 직접 청혼한다.",
          "next": "answer-19-1-0",
          "delta": 16,
          "trust": 5,
          "anger": 0,
          "flags": [
            "공동의약속"
          ],
          "tone": "direct"
        },
        {
          "label": "결혼은 조금 미루고 지금의 관계를 이어가자고 한다.",
          "next": "answer-19-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-0-0": {
      "id": "answer-19-0-0",
      "chapter": 19,
      "who": "마왕",
      "actor": "Q",
      "text": "왕으로서 지킬 약속과, 네 곁에서 지킬 약속을 둘 다 쓰겠다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-0-1",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-0-1": {
      "id": "answer-19-0-1",
      "chapter": 19,
      "who": "주인공",
      "actor": "P",
      "text": "저도요.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-0-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-0-2": {
      "id": "answer-19-0-2",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "당신은 반지 치수를 적기 전에, 다음 교환 날짜부터 달력에 표시했다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "party-wedding-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-1-0": {
      "id": "answer-19-1-0",
      "chapter": 19,
      "who": "마왕",
      "actor": "Q",
      "text": "……한 번 더 말해라.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-1-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-1-1": {
      "id": "answer-19-1-1",
      "chapter": 19,
      "who": "주인공",
      "actor": "P",
      "text": "당신과 결혼하고 싶습니다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-1-2",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-1-2": {
      "id": "answer-19-1-2",
      "chapter": 19,
      "who": "마왕",
      "actor": "Q",
      "text": "알아들었다. 그래도 한 번 더 듣고 싶었어.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-1-3",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-1-3": {
      "id": "answer-19-1-3",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "그녀는 이번에는 얼굴이 붉어지는 것을 숨기지 않았다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "party-wedding-0",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-2-0": {
      "id": "answer-19-2-0",
      "chapter": 19,
      "who": "마왕",
      "actor": "Q",
      "text": "날짜가 늦어진다고 네 마음을 의심하지는 않겠다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "answer-19-2-1",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-19-2-1": {
      "id": "answer-19-2-1",
      "chapter": 19,
      "who": "이야기",
      "actor": null,
      "text": "두 사람은 다음 겨울을 함께 준비하기로 했다. 아직 반지는 없었지만, 돌아올 저녁 식탁은 있었다.",
      "location": "city",
      "time": "다섯 달째 · 국경의 첫 교환",
      "expression": "curious",
      "queenPresent": true,
      "next": "end-promise",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-20-0": {
      "id": "ensemble-20-0",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "꽃은 생각보다 적었다. 이그니스가 예산을 세 번 줄였고, 마왕이 세 번 모두 승인했다. 대신 성의 모든 근무자에게 같은 식사가 나갔다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-1",
      "displayActor": null
    },
    "ensemble-20-1": {
      "id": "ensemble-20-1",
      "chapter": 20,
      "who": "루시엔",
      "actor": "L",
      "text": "청소비 미수금은 오늘부로 정리했습니다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-2",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-20-2": {
      "id": "ensemble-20-2",
      "chapter": 20,
      "who": "주인공",
      "actor": "P",
      "text": "선물입니까?",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-3",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-20-3": {
      "id": "ensemble-20-3",
      "chapter": 20,
      "who": "루시엔",
      "actor": "L",
      "text": "여신의 청구 주소를 드디어 받았습니다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-4",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-20-4": {
      "id": "ensemble-20-4",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "니아는 빈 찻집의 열쇠를 허리춤에 달고 왔다. 성의 일을 바로 그만두지는 못해도, 주말부터 문을 열기로 했다고 했다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-5",
      "displayActor": "L",
      "present": [
        "L"
      ]
    },
    "ensemble-20-5": {
      "id": "ensemble-20-5",
      "chapter": 20,
      "who": "니아",
      "actor": "C",
      "text": "퐁은 대여 안 해. 얘도 오늘 휴일이야.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-6",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-20-6": {
      "id": "ensemble-20-6",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "퐁은 머리 위에 작은 꽃 한 송이를 올렸다. 별 모양이 되지 않았다. 오늘은 정말 괜찮은 모양이었다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-7",
      "displayActor": "C",
      "present": [
        "C"
      ]
    },
    "ensemble-20-7": {
      "id": "ensemble-20-7",
      "chapter": 20,
      "who": "가르문",
      "actor": "G",
      "text": "돌아올 때까지가 약속이다. 앞으로도 잊지 마라.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-8",
      "displayActor": "G",
      "present": [
        "G"
      ]
    },
    "ensemble-20-8": {
      "id": "ensemble-20-8",
      "chapter": 20,
      "who": "세레인",
      "actor": "V",
      "text": "서약서는 두 부입니다. 어느 한쪽이 보관하지 못해도 남도록.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-9",
      "displayActor": "V",
      "present": [
        "V"
      ]
    },
    "ensemble-20-9": {
      "id": "ensemble-20-9",
      "chapter": 20,
      "who": "네브라",
      "actor": "N",
      "text": "오늘 읽을 명부에는 죽은 이름이 없군.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-10",
      "displayActor": "N",
      "present": [
        "N"
      ]
    },
    "ensemble-20-10": {
      "id": "ensemble-20-10",
      "chapter": 20,
      "who": "이그니스",
      "actor": "I",
      "text": "좋은 날이지. 자, 음식 식는다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-11",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-20-11": {
      "id": "ensemble-20-11",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "마왕이 당신 앞에 섰다. 처음 만났던 손이 이번에는 반지를 들고 있었다. 당신은 그 손을 피하지 않았다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-12",
      "displayActor": "I",
      "present": [
        "I"
      ]
    },
    "ensemble-20-12": {
      "id": "ensemble-20-12",
      "chapter": 20,
      "who": "마왕",
      "actor": "Q",
      "text": "내 옆에 있어라, 라고 명령하지 않겠다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-13",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-20-13": {
      "id": "ensemble-20-13",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "그녀가 숨을 한 번 고르고 웃었다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "ensemble-20-14",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "ensemble-20-14": {
      "id": "ensemble-20-14",
      "chapter": 20,
      "who": "마왕",
      "actor": "Q",
      "text": "……내 옆에 있어주겠나?",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "decision-20",
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "story-20-entry": {
      "id": "story-20-entry",
      "chapter": 20,
      "text": "",
      "who": "이야기",
      "next": "ensemble-20-0",
      "gate": "earned-marriage"
    },
    "decision-20": {
      "id": "decision-20",
      "chapter": 20,
      "who": "주인공",
      "text": "당신은 그녀의 손을 잡았다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "queenPresent": true,
      "expression": "shy",
      "checkpoint": true,
      "choices": [
        {
          "label": "“네. 제 의지로요.”",
          "next": "answer-20-0-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [
            "결혼"
          ],
          "tone": "cautious"
        }
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "answer-20-0-0": {
      "id": "answer-20-0-0",
      "chapter": 20,
      "who": "이야기",
      "actor": null,
      "text": "반지가 손가락에 맞았다. 성벽 너머에는 아직 해결하지 못한 일들이 있었다. 오늘은 그 일들 앞에 혼자 서지 않아도 됐다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "answer-20-0-1",
      "displayActor": null
    },
    "answer-20-0-1": {
      "id": "answer-20-0-1",
      "chapter": 20,
      "who": "마왕",
      "actor": "Q",
      "text": "나도. 내 의지로 네 곁에 있겠다.",
      "location": "balcony",
      "time": "여섯 달 뒤 · 작은 예식",
      "expression": "shy",
      "queenPresent": true,
      "next": "end-married",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "displayActor": "Q",
      "present": [
        "Q"
      ]
    },
    "council-result": {
      "id": "council-result",
      "chapter": 17,
      "who": "세레인",
      "actor": "V",
      "text": "",
      "dynamic": "council",
      "location": "study",
      "time": "석 달째 · 표결",
      "queenPresent": true,
      "expression": "indifferent",
      "next": "story-18-entry",
      "present": [
        "V"
      ]
    },
    "end-distance": {
      "id": "end-distance",
      "chapter": 20,
      "who": "NORMAL END",
      "text": "아직 닫힌 문\n\n함께 지낸 시간만으로 모든 의심이 사라지지는 않았다. 당신은 성을 떠났다. 루시엔은 미지급 급료와 편지를 받을 주소를 챙겨주었다. 다시 올 수 있다는 말까지는 듣지 못했다.",
      "end": true,
      "ending": "end-distance",
      "location": "balcony",
      "time": "이야기의 끝",
      "queenPresent": false,
      "expression": null,
      "effects": []
    },
    "end-friend": {
      "id": "end-friend",
      "chapter": 20,
      "who": "FRIEND END",
      "text": "국경 너머의 동료\n\n두 사람은 연인이 되지 않았다. 그래도 당신의 이름은 성의 출입 명부에 남았다. 니아의 찻집에서 만나자는 편지가 도착했고, 퐁의 작은 발자국이 봉투에 찍혀 있었다.",
      "end": true,
      "ending": "end-friend",
      "location": "balcony",
      "time": "이야기의 끝",
      "queenPresent": false,
      "expression": null,
      "effects": []
    },
    "end-promise": {
      "id": "end-promise",
      "chapter": 20,
      "who": "PROMISE END",
      "text": "끝내지 않은 약속\n\n결혼식 날짜는 아직 정하지 않았다. 다음 포로 교환, 다음 겨울 배급, 다음 저녁 식사는 함께하기로 했다. 두 사람은 그 약속부터 지켜보기로 했다.",
      "end": true,
      "ending": "end-promise",
      "location": "balcony",
      "time": "이야기의 끝",
      "queenPresent": false,
      "expression": null,
      "effects": []
    },
    "end-married": {
      "id": "end-married",
      "chapter": 20,
      "who": "TRUE END",
      "text": "세계 평화를 위해, 그리고 우리를 위해\n\n마왕과 결혼했습니다.\n\n「죽이려던 마왕과 결혼한 인간」\n「마왕성에 돌아올 자리가 있는 사람」\n\n평화는 계속 만들어가야 합니다. 이번에는 함께.",
      "end": true,
      "ending": "end-married",
      "location": "balcony",
      "time": "이야기의 끝",
      "queenPresent": true,
      "expression": "shy",
      "effects": [
        [
          0,
          "hearts"
        ]
      ]
    },
    "party-gate-0": {
      "id": "party-gate-0",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "새벽에 또 종이 울렸다. 당신은 침대 옆 방패부터 잡았다. 복도에는 아직 어젯밤 깨진 창을 막아둔 널빤지가 있었다.",
      "next": "party-gate-1",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-1": {
      "id": "party-gate-1",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "L",
      "who": "루시엔",
      "text": "이번에는 정문입니다. 네 명이 왔습니다.",
      "next": "party-gate-2",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "L"
    },
    "party-gate-2": {
      "id": "party-gate-2",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "P",
      "who": "주인공",
      "text": "또 병사들입니까?",
      "next": "party-gate-3",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "L"
    },
    "party-gate-3": {
      "id": "party-gate-3",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "L",
      "who": "루시엔",
      "text": "본인들 말로는 용사 일행이라더군요. 일단 제가 이야기하겠습니다. 뒤에 계십시오.",
      "next": "party-gate-4",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "L"
    },
    "party-gate-4": {
      "id": "party-gate-4",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "문틈 너머에 붉은 머리 기사가 서 있었다. 커다란 검을 세워 쥔 손에는 힘이 잔뜩 들어가 있었다.",
      "next": "party-gate-5",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "L"
    },
    "party-gate-5": {
      "id": "party-gate-5",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "마왕을 만나러 왔어. 나는 루나엘, 왕국에서 정식으로…… 어, 잠깐만.",
      "next": "party-gate-6",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-6": {
      "id": "party-gate-6",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 품에서 접힌 종이를 꺼냈다. 옆에 선 엘프가 눈을 감았다.",
      "next": "party-gate-7",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-7": {
      "id": "party-gate-7",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "E",
      "who": "엘라",
      "text": "그걸 지금 읽냐. 길에서 외우랬지.",
      "next": "party-gate-8",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-8": {
      "id": "party-gate-8",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "외웠어! 순서만 확인하는 거야.",
      "next": "party-gate-9",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-9": {
      "id": "party-gate-9",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "M",
      "who": "로네",
      "text": "토벌. 네 글자 필요 없어. 두 글자면 돼.",
      "next": "party-gate-10",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-10": {
      "id": "party-gate-10",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "R",
      "who": "이리스",
      "text": "로네, 그건 두 음절이에요.",
      "next": "party-gate-11",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-gate-11": {
      "id": "party-gate-11",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "M",
      "who": "로네",
      "text": "응. 그거.",
      "next": "party-gate-12",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-12": {
      "id": "party-gate-12",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "큰 모자가 기울었다. 마법사는 지팡이에 기대 선 채 눈을 감았다가, 당신을 보고 다시 떴다.",
      "next": "party-gate-13",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-13": {
      "id": "party-gate-13",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "M",
      "who": "로네",
      "text": "인간인데.",
      "next": "party-gate-14",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-14": {
      "id": "party-gate-14",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "……그러네? 너, 여기서 뭐 해?",
      "next": "party-gate-15",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-15": {
      "id": "party-gate-15",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "P",
      "who": "주인공",
      "text": "저도 처음에는 그게 궁금했어요.",
      "next": "party-gate-16",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-16": {
      "id": "party-gate-16",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "E",
      "who": "엘라",
      "text": "지금 농담할 때냐? 문 안에 있잖아. 누구 편인데?",
      "next": "party-gate-17",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-17": {
      "id": "party-gate-17",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "엘프의 손이 화살 깃으로 갔다. 루시엔이 당신 앞에 반걸음 나섰다.",
      "next": "party-gate-18",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-18": {
      "id": "party-gate-18",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "R",
      "who": "이리스",
      "text": "엘라. 아직 무기를 겨누지는 않았잖아요.",
      "next": "party-gate-19",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-gate-19": {
      "id": "party-gate-19",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "우리는 마왕한테 볼일이 있어. 너하고 싸우러 온 건 아니야. 비켜줄래?",
      "next": "party-gate-20",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-20": {
      "id": "party-gate-20",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "안쪽 계단에서 아이가 울었다. 니아가 이불을 두른 아이 둘을 데리고 뒷문으로 향하고 있었다. 루나엘의 눈이 그쪽으로 움직였다.",
      "next": "party-gate-21",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-21": {
      "id": "party-gate-21",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "P",
      "who": "주인공",
      "text": "지금은 못 비켜요. 안에 다친 사람들이 있어요.",
      "next": "party-gate-22",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-22": {
      "id": "party-gate-22",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "……마왕성에?",
      "next": "party-gate-23",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-23": {
      "id": "party-gate-23",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "E",
      "who": "엘라",
      "text": "사람 사는 데면 다 있겠지. 칼부터 뽑지 마.",
      "next": "party-gate-24",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-24": {
      "id": "party-gate-24",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 검 손잡이를 내려다봤다. 검은 아직 칼집에 있었다. 당신도 방패를 조금 낮췄다. 서로 들어올리기 쉬운 높이였다.",
      "next": "party-gate-25",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-25": {
      "id": "party-gate-25",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "M",
      "who": "로네",
      "text": "말 그만. 위에.",
      "next": "party-gate-26",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-26": {
      "id": "party-gate-26",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "문 위의 문양이 하얗게 타올랐다. 어젯밤 금이 간 돌이 쩍 벌어졌다. 로네가 지팡이를 들었고 당신은 문 안쪽으로 몸을 틀었다.",
      "next": "party-gate-27",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M",
      "effects": [
        [
          0,
          "flash"
        ],
        [
          140,
          "hit"
        ]
      ]
    },
    "party-gate-27": {
      "id": "party-gate-27",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "뒤로 가! 이리스!",
      "next": "party-gate-28",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-28": {
      "id": "party-gate-28",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "검집이 돌조각을 쳐냈다. 당신의 방패에도 무언가 부딪쳤다. 먼지가 가라앉자 루나엘은 사제 앞에, 당신은 아이들이 지나간 문 앞에 서 있었다.",
      "next": "party-gate-29",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-29": {
      "id": "party-gate-29",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "M",
      "who": "로네",
      "text": "누가 결계 건드렸어? 아까부터 역류하고 있었는데.",
      "next": "party-gate-30",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-gate-30": {
      "id": "party-gate-30",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "L",
      "who": "루시엔",
      "text": "그 일로 밤새 사람이 다쳤습니다. 싸움은 잠시 미룰 수 있겠습니까?",
      "next": "party-gate-31",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "L"
    },
    "party-gate-31": {
      "id": "party-gate-31",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "H",
      "who": "루나엘",
      "text": "……미루는 거야. 돌아가는 게 아니라.",
      "next": "party-gate-32",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-gate-32": {
      "id": "party-gate-32",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "E",
      "who": "엘라",
      "text": "들었지? 우리도 그냥 믿는 거 아냐.",
      "next": "party-gate-33",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-33": {
      "id": "party-gate-33",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "P",
      "who": "주인공",
      "text": "네. 그건 저도 마찬가지예요.",
      "next": "party-gate-choice",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-choice-0": {
      "id": "party-gate-choice-0",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "이리스가 루나엘을 봤다. 루나엘은 입술을 깨물다가 고개를 끄덕였다.\n\n“나도 같이 갈게. 따로 움직이지 마.”\n\n루시엔이 문을 조금 더 열었다.",
      "next": "party-table-0",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-choice-1": {
      "id": "party-gate-choice-1",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "“시간은 한 시간. 무기는 손에서 내려놓으십시오.”\n\n루시엔이 조건을 말하자 엘라가 활시위를 풀었다. 화살통은 벗지 않았다.",
      "next": "party-table-0",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-choice-2": {
      "id": "party-gate-choice-2",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 무언가 말하려다 멈췄다.\n\n“……알았어. 일단 얘기해.”\n\n엘라는 활을 내렸지만 당신에게서 눈을 떼지 않았다.",
      "next": "party-table-0",
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-gate-choice": {
      "id": "party-gate-choice",
      "chapter": 9,
      "sceneTitle": "정문에 온 네 사람",
      "actor": "P",
      "who": "주인공",
      "text": "먼지가 가라앉았다. 네 사람은 여전히 문밖에 서 있었다.",
      "next": null,
      "location": "corridor",
      "time": "스물넷째 날 · 해 뜨기 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E",
      "checkpoint": true,
      "choices": [
        {
          "label": "“다친 사람부터 확인합시다. 이야기는 그다음에.”",
          "next": "party-gate-choice-0",
          "delta": 0,
          "trust": 2,
          "flags": [
            "용사일행_임시휴전"
          ],
          "tone": "cautious"
        },
        {
          "label": "“집사님이 입회하면 안에서 이야기해도 됩니다.”",
          "next": "party-gate-choice-1",
          "delta": 0,
          "trust": 1,
          "flags": [
            "용사일행_임시휴전"
          ],
          "tone": "cautious"
        },
        {
          "label": "“당신들 편이 아니라고 적이라는 뜻은 아니잖아요.”",
          "next": "party-gate-choice-2",
          "delta": 0,
          "trust": 0,
          "flags": [
            "용사일행_임시휴전"
          ],
          "tone": "cautious"
        }
      ]
    },
    "party-table-0": {
      "id": "party-table-0",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": null,
      "who": "이야기",
      "text": "검과 활은 문 옆 탁자에 놓였다. 엘라는 의자를 가장 가까운 쪽으로 끌었다. 마왕은 그걸 보고 코웃음을 쳤다.",
      "next": "party-table-1",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-1": {
      "id": "party-table-1",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "Q",
      "who": "마왕",
      "text": "그 거리에서 먼저 집을 수 있을 것 같나?",
      "next": "party-table-2",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-2": {
      "id": "party-table-2",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "E",
      "who": "엘라",
      "text": "안 집는 것보단 낫지.",
      "next": "party-table-3",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "E"
    },
    "party-table-3": {
      "id": "party-table-3",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "H",
      "who": "루나엘",
      "text": "엘라. 우리가 이야기하자고 했잖아.",
      "next": "party-table-4",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-4": {
      "id": "party-table-4",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "Q",
      "who": "마왕",
      "text": "너희가 내 목을 가져가겠다고 온 건 기억하고 있지?",
      "next": "party-table-5",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-5": {
      "id": "party-table-5",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "H",
      "who": "루나엘",
      "text": "기억해. 그래서…… 왜 문이 안에서 터졌는지부터 알고 싶어.",
      "next": "party-table-6",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-6": {
      "id": "party-table-6",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 외워온 종이를 접었다. 이번 질문은 종이에 없었던 모양이었다.",
      "next": "party-table-7",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-7": {
      "id": "party-table-7",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "R",
      "who": "이리스",
      "text": "저희는 나흘 전 국경에서 출발했어요. 어젯밤 침입자들과는 별개예요. 통행 기록을 보여드릴 수 있어요.",
      "next": "party-table-8",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "R"
    },
    "party-table-8": {
      "id": "party-table-8",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "L",
      "who": "루시엔",
      "text": "확인하겠습니다. 그 전까지는 손님이라는 말도 보류하죠.",
      "next": "party-table-9",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "L"
    },
    "party-table-9": {
      "id": "party-table-9",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "P",
      "who": "주인공",
      "text": "저도 처음에 그랬어요.",
      "next": "party-table-10",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "L"
    },
    "party-table-10": {
      "id": "party-table-10",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "H",
      "who": "루나엘",
      "text": "너는 대체 어쩌다 여기 있게 된 건데?",
      "next": "party-table-11",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-11": {
      "id": "party-table-11",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "P",
      "who": "주인공",
      "text": "그 얘기는 좀 길어요.",
      "next": "party-table-12",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-12": {
      "id": "party-table-12",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "Q",
      "who": "마왕",
      "text": "아주 쓸데없이 길지.",
      "next": "party-table-13",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-13": {
      "id": "party-table-13",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": null,
      "who": "이야기",
      "text": "당신이 마왕을 봤다. 그녀는 시선을 피하지 않았지만, 다음 말은 하지 않았다.",
      "next": "party-table-14",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-14": {
      "id": "party-table-14",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "R",
      "who": "이리스",
      "text": "그러면 짧은 이야기부터 하죠. 다친 사람은 몇 명인가요?",
      "next": "party-table-15",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "R"
    },
    "party-table-15": {
      "id": "party-table-15",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": null,
      "who": "이야기",
      "text": "루시엔이 명단을 펼쳤다. 이리스의 웃음이 옅어졌다. 손가락이 가장 어린 나이 옆에서 멈췄다.",
      "next": "party-table-16",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "R"
    },
    "party-table-16": {
      "id": "party-table-16",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "R",
      "who": "이리스",
      "text": "치료실로 안내해주세요. 협상은 걷는 동안 해도 돼요.",
      "next": "party-table-17",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "R"
    },
    "party-table-17": {
      "id": "party-table-17",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "H",
      "who": "루나엘",
      "text": "나는 여기 남을게. 이리스, 무슨 일 있으면 불러.",
      "next": "party-table-18",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-18": {
      "id": "party-table-18",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "Q",
      "who": "마왕",
      "text": "내 성에서 고함은 지르지 마라.",
      "next": "party-table-19",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "Q"
    },
    "party-table-19": {
      "id": "party-table-19",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": "H",
      "who": "루나엘",
      "text": "그럼 고함지를 일이 없게 해줘.",
      "next": "party-table-20",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-table-20": {
      "id": "party-table-20",
      "chapter": 9,
      "sceneTitle": "칼을 놓은 자리",
      "actor": null,
      "who": "이야기",
      "text": "처음으로 루나엘이 말을 더듬지 않았다. 마왕은 잠깐 그녀를 보다가 집사에게 고개를 끄덕였다.",
      "next": "story-9-entry",
      "location": "study",
      "time": "같은 날 · 임시 회담",
      "queenPresent": true,
      "expression": "indifferent",
      "present": [
        "Q",
        "H",
        "E",
        "R"
      ],
      "displayActor": "H"
    },
    "party-infirmary-0": {
      "id": "party-infirmary-0",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "이리스는 소매를 걷고 있었다. 탁자에는 약병보다 빈 물그릇이 더 많았다.",
      "next": "party-infirmary-1",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-1": {
      "id": "party-infirmary-1",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "잘 오셨어요. 저기 물 좀 갈아주실래요?",
      "next": "party-infirmary-2",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-2": {
      "id": "party-infirmary-2",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "P",
      "who": "주인공",
      "text": "마법으로 한 번에 낫게 할 수 있는 줄 알았는데요.",
      "next": "party-infirmary-3",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-3": {
      "id": "party-infirmary-3",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "피를 멎게 하는 것하고 더러운 붕대를 계속 감아두는 건 다른 문제라서요.",
      "next": "party-infirmary-4",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-4": {
      "id": "party-infirmary-4",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "물그릇을 받아 드는데 손목이 찌릿했다. 어젯밤 방패를 받쳤던 팔이었다.",
      "next": "party-infirmary-5",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-5": {
      "id": "party-infirmary-5",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "잠깐. 그 손, 펴보세요.",
      "next": "party-infirmary-6",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-6": {
      "id": "party-infirmary-6",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "P",
      "who": "주인공",
      "text": "괜찮아요. 다른 사람부터…….",
      "next": "party-infirmary-7",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-7": {
      "id": "party-infirmary-7",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "지금 다른 사람 물을 들고 계시잖아요. 쏟기 전에 봐드릴게요.",
      "next": "party-infirmary-8",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-8": {
      "id": "party-infirmary-8",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "당신이 손을 내밀었다. 이리스는 손목을 바로 잡지 않고 당신 얼굴부터 봤다.",
      "next": "party-infirmary-9",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-9": {
      "id": "party-infirmary-9",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "만져도 괜찮죠?",
      "next": "party-infirmary-10",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-10": {
      "id": "party-infirmary-10",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "P",
      "who": "주인공",
      "text": "……네.",
      "next": "party-infirmary-11",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-11": {
      "id": "party-infirmary-11",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "N",
      "who": "네브라",
      "text": "저, 그 사람은…… 아픈 거. 참는 버릇이 있어.",
      "next": "party-infirmary-12",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "N"
    },
    "party-infirmary-12": {
      "id": "party-infirmary-12",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "커튼 뒤에서 네브라가 얼굴만 내밀었다. 이리스가 웃자 다시 반쯤 숨었다.",
      "next": "party-infirmary-13",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "N"
    },
    "party-infirmary-13": {
      "id": "party-infirmary-13",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "그건 고쳐야겠네요. 다 나았다는 말, 본인만 믿는 경우가 많거든요.",
      "next": "party-infirmary-14",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-14": {
      "id": "party-infirmary-14",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "P",
      "who": "주인공",
      "text": "사례금은 얼마죠?",
      "next": "party-infirmary-15",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-15": {
      "id": "party-infirmary-15",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "뜨거운 차 한 잔. 설탕 두 개요. 그리고 오늘은 그 팔로 무거운 거 들지 마세요.",
      "next": "party-infirmary-16",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-16": {
      "id": "party-infirmary-16",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "N",
      "who": "네브라",
      "text": "……싼데.",
      "next": "party-infirmary-17",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "N"
    },
    "party-infirmary-17": {
      "id": "party-infirmary-17",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "R",
      "who": "이리스",
      "text": "다음에 몰래 들다 걸리시면 비싸져요.",
      "next": "party-infirmary-18",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-18": {
      "id": "party-infirmary-18",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "당신은 빈 그릇을 반대 손으로 옮겼다. 이리스는 그걸 확인하고 나서야 다음 붕대를 집었다.",
      "next": "party-infirmary-choice",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-choice-0": {
      "id": "party-infirmary-choice-0",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "이리스의 손이 멈췄다. 웃지도, 기적이라고 외치지도 않았다.\n\n“그럼 더 조심해야겠네요. 몸이 돌아오는 것과 괜찮아지는 건 다를 테니까.”\n\n그녀는 문이 닫혀 있는지 확인하고 목소리를 낮췄다. “이 이야기는 여기까지만 알게 할게요.”",
      "next": "story-12-entry",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-choice-1": {
      "id": "party-infirmary-choice-1",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": null,
      "who": "이야기",
      "text": "“알겠어요. 지금 아픈 데부터 보죠.”\n\n이리스는 더 묻지 않았다. 차에 설탕을 넣어주자, 정말로 치료비 영수증 대신 빈 찻잔을 돌려줬다.",
      "next": "story-12-entry",
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R"
    },
    "party-infirmary-choice": {
      "id": "party-infirmary-choice",
      "chapter": 12,
      "sceneTitle": "차 한 잔의 치료비",
      "actor": "P",
      "who": "주인공",
      "text": "이리스가 낮게 물었다. “이전에도 크게 다치신 적 있나요?”",
      "next": null,
      "location": "prison",
      "time": "서른여섯째 날 · 치료실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "R",
        "N"
      ],
      "displayActor": "R",
      "checkpoint": true,
      "choices": [
        {
          "label": "죽었다가 살아났다는 사실을 조용히 말한다.",
          "next": "party-infirmary-choice-0",
          "delta": 0,
          "trust": 1,
          "flags": [
            "사제에게_부활고백"
          ],
          "tone": "cautious"
        },
        {
          "label": "아직 자세히 이야기하고 싶지 않다고 한다.",
          "next": "party-infirmary-choice-1",
          "delta": 0,
          "trust": 0,
          "flags": [
            "사제의_비밀존중"
          ],
          "tone": "cautious"
        }
      ]
    },
    "party-ward-0": {
      "id": "party-ward-0",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "책상 밑에서 부츠 두 짝이 나와 있었다. 당신은 문 앞에서 멈췄다.",
      "next": "party-ward-1",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-1": {
      "id": "party-ward-1",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "P",
      "who": "주인공",
      "text": "……주무세요?",
      "next": "party-ward-2",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-2": {
      "id": "party-ward-2",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "생각해.",
      "next": "party-ward-3",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-3": {
      "id": "party-ward-3",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "I",
      "who": "이그니스",
      "text": "반 시간째 생각하고 있어. 코도 골면서.",
      "next": "party-ward-4",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "I"
    },
    "party-ward-4": {
      "id": "party-ward-4",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "로네가 책상 밑에서 나왔다. 모자가 걸려 다시 들어갔다가, 모자만 먼저 내밀었다.",
      "next": "party-ward-5",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "I"
    },
    "party-ward-5": {
      "id": "party-ward-5",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "너무 밝으면 흐름이 안 보여. 이거 받아.",
      "next": "party-ward-6",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-6": {
      "id": "party-ward-6",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "모자를 받아 들자 로네가 탁자 위의 금 간 결계석을 가리켰다. 이그니스의 연기가 돌 사이로 가늘게 스며들었다.",
      "next": "party-ward-7",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-7": {
      "id": "party-ward-7",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "밖에서 부순 거 아냐. 안에서 같은 명령을 두 번 받았어.",
      "next": "party-ward-8",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-8": {
      "id": "party-ward-8",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "I",
      "who": "이그니스",
      "text": "납품증은 문을 열라고 했고, 경비 인장은 닫으라고 했지.",
      "next": "party-ward-9",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "I"
    },
    "party-ward-9": {
      "id": "party-ward-9",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "둘 다 진짜로 읽혔으니까. 밤새 힘만 썼네. 멍청하게.",
      "next": "party-ward-10",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-10": {
      "id": "party-ward-10",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "P",
      "who": "주인공",
      "text": "결계한테 하는 말이에요?",
      "next": "party-ward-11",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-11": {
      "id": "party-ward-11",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "만든 사람. 결계는 시킨 대로 했어.",
      "next": "party-ward-12",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-12": {
      "id": "party-ward-12",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "이그니스의 연기가 잠깐 뻣뻣해졌다. 로네는 눈치채지 못한 것 같았다.",
      "next": "party-ward-13",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-13": {
      "id": "party-ward-13",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "I",
      "who": "이그니스",
      "text": "……그럼 덜 멍청하게 바꿔보자. 여기서 충돌하면?",
      "next": "party-ward-14",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "I"
    },
    "party-ward-14": {
      "id": "party-ward-14",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "멈추고 부르면 되지. 사람을. 왜 폭발까지 해.",
      "next": "party-ward-15",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-15": {
      "id": "party-ward-15",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "잠시 뒤 두 사람은 종이 한 장을 사이에 두고 나란히 앉아 있었다. 연기가 마법사의 모자를 받쳐줬다. 모자는 당신 손을 떠나 천천히 탁자에 내려앉았다.",
      "next": "party-ward-16",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-16": {
      "id": "party-ward-16",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "P",
      "who": "주인공",
      "text": "제가 할 건요?",
      "next": "party-ward-17",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-17": {
      "id": "party-ward-17",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": "M",
      "who": "로네",
      "text": "문 좀 잡아줘. 바람 들어와.",
      "next": "party-ward-18",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-ward-18": {
      "id": "party-ward-18",
      "chapter": 13,
      "sceneTitle": "모자 아래의 결계술",
      "actor": null,
      "who": "이야기",
      "text": "당신은 문을 잡았다. 로네는 고맙다는 말 대신 의자 하나를 발로 밀어줬다. 앉아 있으라는 뜻이었다.",
      "next": "story-13-entry",
      "location": "study",
      "time": "마흔셋째 날 · 결계실",
      "queenPresent": false,
      "expression": null,
      "present": [
        "M",
        "I"
      ],
      "displayActor": "M"
    },
    "party-tracks-0": {
      "id": "party-tracks-0",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 당신의 옷깃을 뒤에서 잡아당겼다. 발끝 바로 앞에 가느다란 줄이 팽팽해졌다.",
      "next": "party-tracks-1",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-1": {
      "id": "party-tracks-1",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "발 좀 보고 걸어. 방패가 눈까지 가리냐?",
      "next": "party-tracks-2",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-2": {
      "id": "party-tracks-2",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "P",
      "who": "주인공",
      "text": "고맙다는 말부터 하려던 참이었어요.",
      "next": "party-tracks-3",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-3": {
      "id": "party-tracks-3",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "그럼 빨리 해.",
      "next": "party-tracks-4",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-4": {
      "id": "party-tracks-4",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "P",
      "who": "주인공",
      "text": "고마워요.",
      "next": "party-tracks-5",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-5": {
      "id": "party-tracks-5",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "……됐어. 밟지 말고.",
      "next": "party-tracks-6",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-6": {
      "id": "party-tracks-6",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 무릎을 꿇었다. 줄은 나무 사이가 아니라 수레 바퀴가 지나가는 홈을 가로질렀다. 세레인이 손수건을 펼쳐 작은 금속 조각을 받았다.",
      "next": "party-tracks-7",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-7": {
      "id": "party-tracks-7",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "V",
      "who": "세레인",
      "text": "마계에서 만든 고리네요. 줄은 인간 쪽 군용이고.",
      "next": "party-tracks-8",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "V"
    },
    "party-tracks-8": {
      "id": "party-tracks-8",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "둘 중 하나만 보면 편했을 텐데. 안 그렇지?",
      "next": "party-tracks-9",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-9": {
      "id": "party-tracks-9",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "P",
      "who": "주인공",
      "text": "누가 설치했는지는 아직 모르겠네요.",
      "next": "party-tracks-10",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-10": {
      "id": "party-tracks-10",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "응. 그래서 발자국을 보는 거야. 얼굴 보고 답 정하지 말고.",
      "next": "party-tracks-11",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-11": {
      "id": "party-tracks-11",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 진흙에 남은 자국을 짚었다. 오른쪽 바퀴만 깊었다. 당신이 장부에 적힌 수레 번호를 펼쳤다.",
      "next": "party-tracks-12",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-12": {
      "id": "party-tracks-12",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "V",
      "who": "세레인",
      "text": "검사는 같이 하죠. 어느 쪽 기록에도 빠지지 않게.",
      "next": "party-tracks-13",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "V"
    },
    "party-tracks-13": {
      "id": "party-tracks-13",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "E",
      "who": "엘라",
      "text": "좋아. 대신 내 화살은 봉인하지 마. 숲에서는 그거 없으면 네 날개도 위험해.",
      "next": "party-tracks-14",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-14": {
      "id": "party-tracks-14",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "세레인이 날개를 접었다. 엘라는 말없이 당신 발앞의 줄을 끊었다.",
      "next": "party-tracks-choice",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-choice-0": {
      "id": "party-tracks-choice-0",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 고리 옆에 화살촉으로 작은 표시를 냈다.\n\n“이렇게 생겼어. 바뀌면 안다.”\n\n세레인은 표시까지 그려 넣고 세 사람의 이름을 적었다.",
      "next": "story-14-entry",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-choice-1": {
      "id": "party-tracks-choice-1",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": null,
      "who": "이야기",
      "text": "“목이 아픈 게 발 없는 것보단 낫잖아.”\n\n엘라가 웃었다. 뾰족한 이가 보였다. 돌아갈 때는 당신이 먼저 걷게 두지 않았다.",
      "next": "story-14-entry",
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E"
    },
    "party-tracks-choice": {
      "id": "party-tracks-choice",
      "chapter": 14,
      "sceneTitle": "발밑을 보는 법",
      "actor": "P",
      "who": "주인공",
      "text": "엘라가 풀어낸 고리를 당신에게 내밀었다.",
      "next": null,
      "location": "city",
      "time": "두 달째 · 납품길",
      "queenPresent": false,
      "expression": null,
      "present": [
        "E",
        "V"
      ],
      "displayActor": "E",
      "checkpoint": true,
      "choices": [
        {
          "label": "발견 위치를 적고 세레인과 함께 봉인한다.",
          "next": "party-tracks-choice-0",
          "delta": 0,
          "trust": 2,
          "flags": [
            "용사일행_공동증거"
          ],
          "tone": "cautious"
        },
        {
          "label": "“아까 당겨준 건 고마워요. 목은 좀 아프지만.”",
          "next": "party-tracks-choice-1",
          "delta": 0,
          "trust": 0,
          "flags": [
            "엘라의_구조"
          ],
          "tone": "cautious"
        }
      ]
    },
    "party-nightwatch-0": {
      "id": "party-nightwatch-0",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "루나엘은 복도 구석에서 검을 닦고 있었다. 천에 묻은 얼룩을 손톱으로 긁다가 당신을 보고 무릎 아래로 숨겼다.",
      "next": "party-nightwatch-1",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-1": {
      "id": "party-nightwatch-1",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "안 자?",
      "next": "party-nightwatch-2",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-2": {
      "id": "party-nightwatch-2",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "그쪽도요.",
      "next": "party-nightwatch-3",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-3": {
      "id": "party-nightwatch-3",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "나는 경계 중이야.",
      "next": "party-nightwatch-4",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-4": {
      "id": "party-nightwatch-4",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "그녀의 발치에 빵 봉지가 있었다. 경계 임무치고는 부스러기가 많았다.",
      "next": "party-nightwatch-5",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-5": {
      "id": "party-nightwatch-5",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "저도 하나 먹어도 돼요?",
      "next": "party-nightwatch-6",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-6": {
      "id": "party-nightwatch-6",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "……작은 거. 아니, 그건 너무 작고. 이거.",
      "next": "party-nightwatch-7",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-7": {
      "id": "party-nightwatch-7",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 반으로 나눈 빵을 내밀었다. 조금 더 큰 쪽이었다.",
      "next": "party-nightwatch-8",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-8": {
      "id": "party-nightwatch-8",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "내일 인간 쪽으로 간다며. 돌아가면 무슨 말 할 거야?",
      "next": "party-nightwatch-9",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-9": {
      "id": "party-nightwatch-9",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "여기서 본 걸요. 당신들은요?",
      "next": "party-nightwatch-10",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-10": {
      "id": "party-nightwatch-10",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "나도. 근데 그게…… 처음 쓴 보고서랑 너무 달라.",
      "next": "party-nightwatch-11",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-11": {
      "id": "party-nightwatch-11",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "무릎 위 종이에 검은 줄이 여러 번 그어져 있었다. 맨 위에 적힌 ‘적 전원’이라는 말만 알아볼 수 있었다.",
      "next": "party-nightwatch-12",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-12": {
      "id": "party-nightwatch-12",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "나, 마왕이 좋은 사람이라고 생각하는 건 아니야.",
      "next": "party-nightwatch-13",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-13": {
      "id": "party-nightwatch-13",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "저도 그런 말은 못 하겠어요.",
      "next": "party-nightwatch-14",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-14": {
      "id": "party-nightwatch-14",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "그런데 여기 있는 사람을 전부 베겠다고는 못 하겠어. 이리스한테 붕대 갖다주던 애도 봤고.",
      "next": "party-nightwatch-15",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-15": {
      "id": "party-nightwatch-15",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "그녀가 빵 끝을 만지작거렸다. 당신은 다 먹고 난 뒤에야 입을 열었다.",
      "next": "party-nightwatch-16",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-16": {
      "id": "party-nightwatch-16",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "그렇게 쓰면 안 돼요?",
      "next": "party-nightwatch-17",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-17": {
      "id": "party-nightwatch-17",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "뭐라고 혼날지 뻔해서.",
      "next": "party-nightwatch-18",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-18": {
      "id": "party-nightwatch-18",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "그래도 거짓말은 아니잖아요.",
      "next": "party-nightwatch-19",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-19": {
      "id": "party-nightwatch-19",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 종이를 뒤집었다. 한참 생각하다가 첫 줄을 썼다. 이번에는 지우지 않았다.",
      "next": "party-nightwatch-20",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-20": {
      "id": "party-nightwatch-20",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "너 글씨 괜찮아? 나 맞춤법 좀 봐줘.",
      "next": "party-nightwatch-21",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-21": {
      "id": "party-nightwatch-21",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "P",
      "who": "주인공",
      "text": "경계 중이시라면서요.",
      "next": "party-nightwatch-22",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-nightwatch-22": {
      "id": "party-nightwatch-22",
      "chapter": 15,
      "sceneTitle": "지우지 않은 보고서",
      "actor": "H",
      "who": "루나엘",
      "text": "같이 하면 되지. 발소리 나면 알려줘.",
      "next": "story-15-entry",
      "location": "corridor",
      "time": "두 달째 · 출발 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H"
      ],
      "displayActor": "H"
    },
    "party-return-0": {
      "id": "party-return-0",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": null,
      "who": "이야기",
      "text": "돌아온 성의 회의실에는 익숙한 모자가 먼저 와 있었다. 로네가 모자챙 아래에서 손만 들었다.",
      "next": "party-return-1",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-1": {
      "id": "party-return-1",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "M",
      "who": "로네",
      "text": "왔네. 네 의자에 안 잤어.",
      "next": "party-return-2",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-return-2": {
      "id": "party-return-2",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "P",
      "who": "주인공",
      "text": "……그 말은 다른 의자에는 잤다는 거네요.",
      "next": "party-return-3",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-return-3": {
      "id": "party-return-3",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "E",
      "who": "엘라",
      "text": "내 의자. 세 번.",
      "next": "party-return-4",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-return-4": {
      "id": "party-return-4",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "R",
      "who": "이리스",
      "text": "다들 그만해요. 가져온 서류부터 꺼내죠.",
      "next": "party-return-5",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-return-5": {
      "id": "party-return-5",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": null,
      "who": "이야기",
      "text": "루나엘은 왕국의 봉투를 탁자에 올렸다. 붉은 밀랍이 반으로 갈라져 있었다.",
      "next": "party-return-6",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-return-6": {
      "id": "party-return-6",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "H",
      "who": "루나엘",
      "text": "토벌 중단은 안 받아줬어. 조사할 시간은 받았고. 우리가 직접 확인한 것도 첨부했어.",
      "next": "party-return-7",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-7": {
      "id": "party-return-7",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "P",
      "who": "주인공",
      "text": "혼났어요?",
      "next": "party-return-8",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-8": {
      "id": "party-return-8",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "H",
      "who": "루나엘",
      "text": "엄청. 그래도 서명은 받았어.",
      "next": "party-return-9",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-9": {
      "id": "party-return-9",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": null,
      "who": "이야기",
      "text": "그녀가 봉투를 당신 쪽으로 조금 밀었다. 칭찬을 기다리는 얼굴이어서, 당신은 웃지 않으려고 입술에 힘을 줬다.",
      "next": "party-return-10",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-10": {
      "id": "party-return-10",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "P",
      "who": "주인공",
      "text": "잘했네요.",
      "next": "party-return-11",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-11": {
      "id": "party-return-11",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "H",
      "who": "루나엘",
      "text": "……그렇지? 아니, 당연히 해야 하는 일이니까.",
      "next": "party-return-12",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-12": {
      "id": "party-return-12",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "R",
      "who": "이리스",
      "text": "사람들이 저희 말만 믿지는 않을 거예요. 그래서 치료 기록도 따로 가져왔어요. 이름을 공개해도 된다는 분들만요.",
      "next": "party-return-13",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-return-13": {
      "id": "party-return-13",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "E",
      "who": "엘라",
      "text": "수레가 지나간 길도. 지도 펴. 내 화살 위에 종이 올리지 말고.",
      "next": "party-return-14",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-return-14": {
      "id": "party-return-14",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "M",
      "who": "로네",
      "text": "결계는 고쳤어. 통행 검사는 아직 사람이 해야 돼. 귀찮아도.",
      "next": "party-return-15",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-return-15": {
      "id": "party-return-15",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": null,
      "who": "이야기",
      "text": "종이들이 하나씩 탁자를 채웠다. 누구도 마왕을 믿으라는 문장을 쓰지 않았다. 확인할 날짜와 장소가 먼저 적혔다.",
      "next": "party-return-16",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-return-16": {
      "id": "party-return-16",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "H",
      "who": "루나엘",
      "text": "한 번에 다 끝나진 않겠네.",
      "next": "party-return-17",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-17": {
      "id": "party-return-17",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": "P",
      "who": "주인공",
      "text": "네. 그래도 이번에는 혼자 설명 안 해도 되잖아요.",
      "next": "party-return-18",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-return-18": {
      "id": "party-return-18",
      "chapter": 17,
      "sceneTitle": "같은 탁자에 놓인 기록",
      "actor": null,
      "who": "이야기",
      "text": "루나엘이 의자 하나를 발로 빼줬다. 당신은 그 자리에 앉았다.",
      "next": "story-17-entry",
      "location": "study",
      "time": "석 달째 · 회의 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-border-0": {
      "id": "party-border-0",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 길가에 꽂힌 표지판을 반대로 돌렸다. 당신이 다가가자 손바닥을 폈다.",
      "next": "party-border-1",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-border-1": {
      "id": "party-border-1",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "E",
      "who": "엘라",
      "text": "망치. 그거 줘.",
      "next": "party-border-2",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-2": {
      "id": "party-border-2",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "P",
      "who": "주인공",
      "text": "화살로 박을 줄 알았는데.",
      "next": "party-border-3",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-3": {
      "id": "party-border-3",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "E",
      "who": "엘라",
      "text": "화살이 공짜냐?",
      "next": "party-border-4",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-4": {
      "id": "party-border-4",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": null,
      "who": "이야기",
      "text": "루나엘은 병사들에게 같은 설명을 세 번째 하고 있었다. 칼을 놓으라는 말이 아니라, 사람들이 건너가는 동안 칼끝을 내리라는 말이었다.",
      "next": "party-border-5",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-5": {
      "id": "party-border-5",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "R",
      "who": "이리스",
      "text": "잘하고 있어요. 처음에는 목소리부터 떨더니.",
      "next": "party-border-6",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-border-6": {
      "id": "party-border-6",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "H",
      "who": "루나엘",
      "text": "들려! 나 지금도 들려!",
      "next": "party-border-7",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-border-7": {
      "id": "party-border-7",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "M",
      "who": "로네",
      "text": "그럼 설명이나 해. 또 처음부터 묻잖아.",
      "next": "party-border-8",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-border-8": {
      "id": "party-border-8",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": null,
      "who": "이야기",
      "text": "로네의 지팡이 끝에서 작은 불빛이 길을 따라 켜졌다. 이리스는 양쪽 통로에 물과 붕대를 놓았다. 엘라는 마지막 못을 박고 당신 손에 망치를 돌려줬다.",
      "next": "party-border-9",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-border-9": {
      "id": "party-border-9",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "E",
      "who": "엘라",
      "text": "내일 겁먹고 줄 바꾸지 마. 네 자리는 저기야.",
      "next": "party-border-10",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-10": {
      "id": "party-border-10",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "P",
      "who": "주인공",
      "text": "기억해요.",
      "next": "party-border-11",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-11": {
      "id": "party-border-11",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": "E",
      "who": "엘라",
      "text": "그래. 그럼 됐어.",
      "next": "party-border-12",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-border-12": {
      "id": "party-border-12",
      "chapter": 19,
      "sceneTitle": "길을 여는 사람들",
      "actor": null,
      "who": "이야기",
      "text": "맞은편에 마왕성의 깃발이 올라갔다. 루나엘은 한동안 그걸 보더니, 자신의 깃발을 같은 높이에 묶었다.",
      "next": "story-19-entry",
      "location": "city",
      "time": "다섯 달째 · 교환 전날",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-wedding-0": {
      "id": "party-wedding-0",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": null,
      "who": "이야기",
      "text": "예식장 문 앞에서 루나엘이 당신의 어깨를 툭 쳤다. 이번에는 검 대신 꽃다발을 들고 있었다.",
      "next": "party-wedding-1",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-wedding-1": {
      "id": "party-wedding-1",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "H",
      "who": "루나엘",
      "text": "축하해. 처음 봤을 때는 진짜 수상했는데.",
      "next": "party-wedding-2",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-wedding-2": {
      "id": "party-wedding-2",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "E",
      "who": "엘라",
      "text": "지금도 수상하지. 마왕이랑 결혼하는 인간이 흔하냐?",
      "next": "party-wedding-3",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-wedding-3": {
      "id": "party-wedding-3",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "P",
      "who": "주인공",
      "text": "오늘만큼은 좋은 말 해주면 안 돼요?",
      "next": "party-wedding-4",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-wedding-4": {
      "id": "party-wedding-4",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "E",
      "who": "엘라",
      "text": "오래 살아. 됐지?",
      "next": "party-wedding-5",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-wedding-5": {
      "id": "party-wedding-5",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": null,
      "who": "이야기",
      "text": "엘라가 옷깃을 한 번 당겨 바로잡아줬다. 당신이 고맙다고 하기 전에 뒤로 빠졌다.",
      "next": "party-wedding-6",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "E"
    },
    "party-wedding-6": {
      "id": "party-wedding-6",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "R",
      "who": "이리스",
      "text": "손 내밀어보세요. 오늘은 안 떨리네요.",
      "next": "party-wedding-7",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-wedding-7": {
      "id": "party-wedding-7",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "P",
      "who": "주인공",
      "text": "조금 떨려요. 다른 이유로.",
      "next": "party-wedding-8",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-wedding-8": {
      "id": "party-wedding-8",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "R",
      "who": "이리스",
      "text": "그럼 괜찮아요. 오늘 치료는 필요 없겠네요.",
      "next": "party-wedding-9",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "R"
    },
    "party-wedding-9": {
      "id": "party-wedding-9",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "M",
      "who": "로네",
      "text": "반지 챙겼어?",
      "next": "party-wedding-10",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-wedding-10": {
      "id": "party-wedding-10",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": null,
      "who": "이야기",
      "text": "당신이 주머니를 두드렸다. 로네가 고개를 끄덕이고 모자챙을 내렸다.",
      "next": "party-wedding-11",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-wedding-11": {
      "id": "party-wedding-11",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "M",
      "who": "로네",
      "text": "그럼 가. 늦으면 나 먼저 잘 거야.",
      "next": "party-wedding-12",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "M"
    },
    "party-wedding-12": {
      "id": "party-wedding-12",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": "H",
      "who": "루나엘",
      "text": "식 끝나고 자! 아직 시작도 안 했잖아.",
      "next": "party-wedding-13",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    },
    "party-wedding-13": {
      "id": "party-wedding-13",
      "chapter": 20,
      "sceneTitle": "문을 열기 전에",
      "actor": null,
      "who": "이야기",
      "text": "웃음소리가 문 안으로 흘러들었다. 당신은 숨을 고르고 문을 열었다.",
      "next": "story-20-entry",
      "location": "dining",
      "time": "여섯 달 뒤 · 예식 전",
      "queenPresent": false,
      "expression": null,
      "present": [
        "H",
        "E",
        "R",
        "M"
      ],
      "displayActor": "H"
    }
  }
};
