/* Compiled from the supplied 15-chapter scenario. No external services. */
window.DemonStory={
  "chapters": [
    "첫 만남",
    "관찰 대상",
    "첫 번째 조사",
    "감옥 밖으로",
    "마왕성의 일상",
    "마왕의 인간 연구",
    "첫 외출",
    "용사의 습격",
    "마왕의 과거",
    "마왕의 첫 선물",
    "질투",
    "이별의 가능성",
    "마왕의 자각",
    "재회",
    "마왕의 고백",
    "결혼"
  ],
  "nodes": {
    "story-1-0": {
      "id": "story-1-0",
      "chapter": 1,
      "who": "이야기",
      "text": "차가운 돌바닥과 얇은 담요가 새 잠자리였다. 철문 밖에서 구두 소리가 멎었다. 문이 열리자 마왕과 책상을 든 시종들이 들어왔다.",
      "expression": "angry",
      "location": "prison",
      "next": "story-1-1",
      "beginRelationship": true
    },
    "story-1-1": {
      "id": "story-1-1",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕성 지하 감옥.",
      "expression": "angry",
      "next": "story-1-2"
    },
    "story-1-2": {
      "id": "story-1-2",
      "chapter": 1,
      "who": "이야기",
      "text": "당신은 차가운 바닥에 앉아 있다. 잠시 후 철문이 열리고 마왕이 들어온다.",
      "expression": "angry",
      "next": "story-1-3"
    },
    "story-1-3": {
      "id": "story-1-3",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕은 책상과 의자를 가져와 당신 앞에 놓는다. 손에는 조사 기록을 위한 종이가 들려 있다.",
      "expression": "angry",
      "next": "story-1-4"
    },
    "story-1-4": {
      "id": "story-1-4",
      "chapter": 1,
      "who": "마왕",
      "text": "“앉아.”",
      "expression": "angry",
      "next": "story-1-5"
    },
    "story-1-5": {
      "id": "story-1-5",
      "chapter": 1,
      "who": "주인공",
      "text": "“저 지금도 앉아 있는데요.”",
      "expression": "angry",
      "next": "story-1-6"
    },
    "story-1-6": {
      "id": "story-1-6",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-1-7"
    },
    "story-1-7": {
      "id": "story-1-7",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-1-8"
    },
    "story-1-8": {
      "id": "story-1-8",
      "chapter": 1,
      "who": "마왕",
      "text": "“말대꾸하지 마라.”",
      "expression": "angry",
      "next": "story-1-9"
    },
    "story-1-9": {
      "id": "story-1-9",
      "chapter": 1,
      "who": "주인공",
      "text": "“네.”",
      "expression": "angry",
      "next": "story-1-10"
    },
    "story-1-10": {
      "id": "story-1-10",
      "chapter": 1,
      "who": "마왕",
      "text": "“이름.”",
      "expression": "angry",
      "next": "story-1-11"
    },
    "story-1-11": {
      "id": "story-1-11",
      "chapter": 1,
      "who": "이야기",
      "text": "당신은 자신의 이름을 말했다. {{name}}. 마왕의 펜이 잠깐 멈췄다가, 다시 움직였다.",
      "expression": "angry",
      "nameEntry": true,
      "next": "story-1-12"
    },
    "story-1-12": {
      "id": "story-1-12",
      "chapter": 1,
      "who": "마왕",
      "text": "“직업.”",
      "expression": "angry",
      "next": "story-1-13"
    },
    "story-1-13": {
      "id": "story-1-13",
      "chapter": 1,
      "who": "주인공",
      "text": "“전사입니다.”",
      "expression": "angry",
      "next": "story-1-14"
    },
    "story-1-14": {
      "id": "story-1-14",
      "chapter": 1,
      "who": "마왕",
      "text": "“용사?”",
      "expression": "angry",
      "next": "story-1-15"
    },
    "story-1-15": {
      "id": "story-1-15",
      "chapter": 1,
      "who": "주인공",
      "text": "“아닙니다.”",
      "expression": "angry",
      "next": "story-1-16"
    },
    "story-1-16": {
      "id": "story-1-16",
      "chapter": 1,
      "who": "마왕",
      "text": "“정말?”",
      "expression": "angry",
      "next": "story-1-17"
    },
    "story-1-17": {
      "id": "story-1-17",
      "chapter": 1,
      "who": "주인공",
      "text": "“정말입니다.”",
      "expression": "angry",
      "next": "story-1-18"
    },
    "story-1-18": {
      "id": "story-1-18",
      "chapter": 1,
      "who": "마왕",
      "text": "“그런데 왜 마계에 왔지?”",
      "expression": "angry",
      "next": "story-1-19"
    },
    "story-1-19": {
      "id": "story-1-19",
      "chapter": 1,
      "who": "주인공",
      "text": "“여신이 보냈습니다.”",
      "expression": "angry",
      "next": "story-1-20"
    },
    "story-1-20": {
      "id": "story-1-20",
      "chapter": 1,
      "who": "마왕",
      "text": "“어떤 여신?”",
      "expression": "angry",
      "next": "story-1-21"
    },
    "story-1-21": {
      "id": "story-1-21",
      "chapter": 1,
      "who": "주인공",
      "text": "“사랑의 여신.”",
      "expression": "angry",
      "next": "story-1-22"
    },
    "story-1-22": {
      "id": "story-1-22",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕의 표정이 순간 굳는다.",
      "expression": "angry",
      "next": "story-1-23"
    },
    "story-1-23": {
      "id": "story-1-23",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-1-24"
    },
    "story-1-24": {
      "id": "story-1-24",
      "chapter": 1,
      "who": "주인공",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-1-25"
    },
    "story-1-25": {
      "id": "story-1-25",
      "chapter": 1,
      "who": "마왕",
      "text": "“그 말을 다시 할 생각인가?”",
      "expression": "angry",
      "next": "story-1-26"
    },
    "story-1-26": {
      "id": "story-1-26",
      "chapter": 1,
      "who": "주인공",
      "text": "“아니요.”",
      "expression": "angry",
      "next": "story-1-27"
    },
    "story-1-27": {
      "id": "story-1-27",
      "chapter": 1,
      "who": "마왕",
      "text": "“좋다.”",
      "expression": "angry",
      "next": "story-1-28"
    },
    "story-1-28": {
      "id": "story-1-28",
      "chapter": 1,
      "who": "이야기",
      "text": "잠시 침묵.",
      "expression": "angry",
      "next": "story-1-29"
    },
    "story-1-29": {
      "id": "story-1-29",
      "chapter": 1,
      "who": "마왕",
      "text": "“그 여신이 너에게 무슨 힘을 주었지?”",
      "expression": "angry",
      "next": "story-1-30"
    },
    "story-1-30": {
      "id": "story-1-30",
      "chapter": 1,
      "who": "주인공",
      "text": "“사랑의 힘이라고—”",
      "expression": "angry",
      "next": "story-1-31"
    },
    "story-1-31": {
      "id": "story-1-31",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-1-32"
    },
    "story-1-32": {
      "id": "story-1-32",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-1-33"
    },
    "story-1-33": {
      "id": "story-1-33",
      "chapter": 1,
      "who": "주인공",
      "text": "“죄송합니다.”",
      "expression": "angry",
      "next": "story-choice-1"
    },
    "story-1-entry": {
      "id": "story-1-entry",
      "chapter": 1,
      "who": "이야기",
      "text": "",
      "next": "story-1-0",
      "gate": null
    },
    "story-branch-1-1-0": {
      "id": "story-branch-1-1-0",
      "chapter": 1,
      "who": "주인공",
      "text": "“진짜 이름이 그거라니까요.”",
      "expression": "angry",
      "next": "story-branch-1-1-1"
    },
    "story-branch-1-1-1": {
      "id": "story-branch-1-1-1",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-1-1-2"
    },
    "story-branch-1-1-2": {
      "id": "story-branch-1-1-2",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕의 눈썹이 꿈틀거린다.",
      "expression": "angry",
      "next": "story-branch-1-1-3"
    },
    "story-branch-1-1-3": {
      "id": "story-branch-1-1-3",
      "chapter": 1,
      "who": "마왕",
      "text": "“너는 죽는 게 그렇게 좋나?”",
      "expression": "angry",
      "next": "story-branch-1-1-4"
    },
    "story-branch-1-1-4": {
      "id": "story-branch-1-1-4",
      "chapter": 1,
      "who": "주인공",
      "text": "“좋을 리가 없잖아요!”",
      "expression": "angry",
      "next": "story-branch-1-1-5"
    },
    "story-branch-1-1-5": {
      "id": "story-branch-1-1-5",
      "chapter": 1,
      "who": "마왕",
      "text": "“그런데 왜 계속 내 앞에서 그 말을 하지?”",
      "expression": "angry",
      "next": "story-branch-1-1-6"
    },
    "story-branch-1-1-6": {
      "id": "story-branch-1-1-6",
      "chapter": 1,
      "who": "주인공",
      "text": "“진짜니까요!”",
      "expression": "angry",
      "next": "story-branch-1-1-7"
    },
    "story-branch-1-1-7": {
      "id": "story-branch-1-1-7",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-1-1-8"
    },
    "story-branch-1-1-8": {
      "id": "story-branch-1-1-8",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕은 한숨을 쉰다.",
      "expression": "angry",
      "next": "story-2-entry"
    },
    "story-branch-1-2-0": {
      "id": "story-branch-1-2-0",
      "chapter": 1,
      "who": "주인공",
      "text": "“그냥 부활 능력이라고 하죠.”",
      "expression": "angry",
      "next": "story-branch-1-2-1"
    },
    "story-branch-1-2-1": {
      "id": "story-branch-1-2-1",
      "chapter": 1,
      "who": "마왕",
      "text": "“……좋다.”",
      "expression": "angry",
      "next": "story-branch-1-2-2"
    },
    "story-branch-1-2-2": {
      "id": "story-branch-1-2-2",
      "chapter": 1,
      "who": "주인공",
      "text": "“그럼 그렇게 기록해주세요.”",
      "expression": "angry",
      "next": "story-branch-1-2-3"
    },
    "story-branch-1-2-3": {
      "id": "story-branch-1-2-3",
      "chapter": 1,
      "who": "마왕",
      "text": "“사랑의 힘.”",
      "expression": "angry",
      "next": "story-branch-1-2-4"
    },
    "story-branch-1-2-4": {
      "id": "story-branch-1-2-4",
      "chapter": 1,
      "who": "주인공",
      "text": "“아니요. 부활 능력.”",
      "expression": "angry",
      "next": "story-branch-1-2-5"
    },
    "story-branch-1-2-5": {
      "id": "story-branch-1-2-5",
      "chapter": 1,
      "who": "마왕",
      "text": "“사랑의 힘.”",
      "expression": "angry",
      "next": "story-branch-1-2-6"
    },
    "story-branch-1-2-6": {
      "id": "story-branch-1-2-6",
      "chapter": 1,
      "who": "주인공",
      "text": "“……부활 능력.”",
      "expression": "angry",
      "next": "story-branch-1-2-7"
    },
    "story-branch-1-2-7": {
      "id": "story-branch-1-2-7",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-1-2-8"
    },
    "story-branch-1-2-8": {
      "id": "story-branch-1-2-8",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕이 종이에 ’부활 능력’이라고 적는다.",
      "expression": "angry",
      "next": "story-2-entry"
    },
    "story-branch-1-3-0": {
      "id": "story-branch-1-3-0",
      "chapter": 1,
      "who": "주인공",
      "text": "“마왕님이 화내시는 게 재밌어서요.”",
      "expression": "angry",
      "next": "story-branch-1-3-1"
    },
    "story-branch-1-3-1": {
      "id": "story-branch-1-3-1",
      "chapter": 1,
      "who": "이야기",
      "text": "정적.",
      "expression": "angry",
      "next": "story-branch-1-3-2"
    },
    "story-branch-1-3-2": {
      "id": "story-branch-1-3-2",
      "chapter": 1,
      "who": "마왕",
      "text": "“……뭐?”",
      "expression": "angry",
      "next": "story-branch-1-3-3"
    },
    "story-branch-1-3-3": {
      "id": "story-branch-1-3-3",
      "chapter": 1,
      "who": "주인공",
      "text": "“아, 아닙니다.”",
      "expression": "angry",
      "next": "story-branch-1-3-4"
    },
    "story-branch-1-3-4": {
      "id": "story-branch-1-3-4",
      "chapter": 1,
      "who": "마왕",
      "text": "“방금 뭐라고 했지?”",
      "expression": "angry",
      "next": "story-branch-1-3-5"
    },
    "story-branch-1-3-5": {
      "id": "story-branch-1-3-5",
      "chapter": 1,
      "who": "주인공",
      "text": "“아무것도.”",
      "expression": "angry",
      "next": "story-branch-1-3-6"
    },
    "story-branch-1-3-6": {
      "id": "story-branch-1-3-6",
      "chapter": 1,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-1-3-7"
    },
    "story-branch-1-3-7": {
      "id": "story-branch-1-3-7",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕이 천천히 당신 앞으로 다가온다.",
      "expression": "angry",
      "next": "story-branch-1-3-8"
    },
    "story-branch-1-3-8": {
      "id": "story-branch-1-3-8",
      "chapter": 1,
      "who": "주인공",
      "text": "“잠깐만요.”",
      "expression": "angry",
      "next": "story-branch-1-3-9"
    },
    "story-branch-1-3-9": {
      "id": "story-branch-1-3-9",
      "chapter": 1,
      "who": "마왕",
      "text": "“관찰 기록에 추가해야겠군.”",
      "expression": "angry",
      "next": "story-branch-1-3-10"
    },
    "story-branch-1-3-10": {
      "id": "story-branch-1-3-10",
      "chapter": 1,
      "who": "주인공",
      "text": "“뭐라고요?”",
      "expression": "angry",
      "next": "story-branch-1-3-11"
    },
    "story-branch-1-3-11": {
      "id": "story-branch-1-3-11",
      "chapter": 1,
      "who": "마왕",
      "text": "“성격이 나쁘다.”",
      "expression": "angry",
      "next": "story-branch-1-3-12"
    },
    "story-branch-1-3-12": {
      "id": "story-branch-1-3-12",
      "chapter": 1,
      "who": "주인공",
      "text": "“마왕님이 할 말은 아닌 것 같은데요.”",
      "expression": "angry",
      "next": "story-branch-1-3-13"
    },
    "story-branch-1-3-13": {
      "id": "story-branch-1-3-13",
      "chapter": 1,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-2-entry"
    },
    "story-choice-1": {
      "id": "story-choice-1",
      "chapter": 1,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“진짜 이름이 그거라니까요.”",
          "next": "story-branch-1-1-0",
          "delta": -1,
          "trust": 0,
          "anger": 2,
          "flags": [
            "사랑의힘_놀림"
          ],
          "tone": "direct"
        },
        {
          "label": "“그냥 부활 능력이라고 하죠.”",
          "next": "story-branch-1-2-0",
          "delta": 1,
          "trust": 0,
          "anger": 0,
          "flags": [
            "사랑의힘_놀림"
          ],
          "tone": "cautious"
        },
        {
          "label": "“마왕님이 화내시는 게 재밌어서요.”",
          "next": "story-branch-1-3-0",
          "delta": 2,
          "trust": 0,
          "anger": 3,
          "flags": [
            "장난꾸러기"
          ],
          "tone": "playful"
        }
      ],
      "checkpoint": true,
      "expression": "angry"
    },
    "story-2-0": {
      "id": "story-2-0",
      "chapter": 2,
      "who": "이야기",
      "text": "촛농이 책상 가장자리에서 굳어 있었다. 마왕은 같은 질문을 조금씩 바꾸어 되풀이했다. 당신은 손목의 맥박을 짚으며 하나씩 대답했다.",
      "expression": "angry",
      "location": "prison",
      "next": "story-2-1"
    },
    "story-2-1": {
      "id": "story-2-1",
      "chapter": 2,
      "who": "이야기",
      "text": "마왕은 당신의 부활 능력을 조사하기 시작한다.",
      "expression": "angry",
      "next": "story-2-2"
    },
    "story-2-2": {
      "id": "story-2-2",
      "chapter": 2,
      "who": "마왕",
      "text": "“죽은 뒤 무엇을 느끼지?”",
      "expression": "angry",
      "next": "story-2-3"
    },
    "story-2-3": {
      "id": "story-2-3",
      "chapter": 2,
      "who": "주인공",
      "text": "“별로 기억 안 납니다.”",
      "expression": "angry",
      "next": "story-2-4"
    },
    "story-2-4": {
      "id": "story-2-4",
      "chapter": 2,
      "who": "마왕",
      "text": "“죽기 직전은?”",
      "expression": "angry",
      "next": "story-2-5"
    },
    "story-2-5": {
      "id": "story-2-5",
      "chapter": 2,
      "who": "주인공",
      "text": "“아픕니다.”",
      "expression": "angry",
      "next": "story-2-6"
    },
    "story-2-6": {
      "id": "story-2-6",
      "chapter": 2,
      "who": "마왕",
      "text": "“부활할 때는?”",
      "expression": "angry",
      "next": "story-2-7"
    },
    "story-2-7": {
      "id": "story-2-7",
      "chapter": 2,
      "who": "주인공",
      "text": "“……배고픕니다.”",
      "expression": "angry",
      "next": "story-2-8"
    },
    "story-2-8": {
      "id": "story-2-8",
      "chapter": 2,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-2-9"
    },
    "story-2-9": {
      "id": "story-2-9",
      "chapter": 2,
      "who": "주인공",
      "text": "“진짜 배고파요.”",
      "expression": "angry",
      "next": "story-2-10"
    },
    "story-2-10": {
      "id": "story-2-10",
      "chapter": 2,
      "who": "마왕",
      "text": "“인간은 죽었다 살아나서도 배가 고픈가?”",
      "expression": "angry",
      "next": "story-2-11"
    },
    "story-2-11": {
      "id": "story-2-11",
      "chapter": 2,
      "who": "주인공",
      "text": "“저만 그런 걸 수도 있고요.”",
      "expression": "angry",
      "next": "story-2-12"
    },
    "story-2-12": {
      "id": "story-2-12",
      "chapter": 2,
      "who": "이야기",
      "text": "마왕은 기록한다.",
      "expression": "angry",
      "next": "story-2-13"
    },
    "story-2-13": {
      "id": "story-2-13",
      "chapter": 2,
      "who": "이야기",
      "text": "[관찰 기록] 부활 직후 식욕 증가. 원인은 불명.",
      "expression": "angry",
      "next": "story-2-14"
    },
    "story-2-14": {
      "id": "story-2-14",
      "chapter": 2,
      "who": "주인공",
      "text": "“그것보다 먹을 것 좀 주시면 안 됩니까?”",
      "expression": "angry",
      "next": "story-2-15"
    },
    "story-2-15": {
      "id": "story-2-15",
      "chapter": 2,
      "who": "마왕",
      "text": "“죄수에게 음식을 요구하는 건가?”",
      "expression": "angry",
      "next": "story-2-16"
    },
    "story-2-16": {
      "id": "story-2-16",
      "chapter": 2,
      "who": "주인공",
      "text": "“관찰 대상에게 굶겨서 실험하는 건 연구적으로도 좋지 않잖아요.”",
      "expression": "angry",
      "next": "story-2-17"
    },
    "story-2-17": {
      "id": "story-2-17",
      "chapter": 2,
      "who": "이야기",
      "text": "마왕이 멈춘다.",
      "expression": "angry",
      "next": "story-2-18"
    },
    "story-2-18": {
      "id": "story-2-18",
      "chapter": 2,
      "who": "마왕",
      "text": "“……말은 되는군.”",
      "expression": "angry",
      "next": "story-choice-2"
    },
    "story-2-entry": {
      "id": "story-2-entry",
      "chapter": 2,
      "who": "이야기",
      "text": "",
      "next": "story-2-0",
      "gate": null
    },
    "story-branch-2-1-0": {
      "id": "story-branch-2-1-0",
      "chapter": 2,
      "who": "마왕",
      "text": "“……뻔뻔하군.”",
      "expression": "angry",
      "next": "story-branch-2-1-1"
    },
    "story-branch-2-1-1": {
      "id": "story-branch-2-1-1",
      "chapter": 2,
      "who": "주인공",
      "text": "“먹는 건 중요하니까요.”",
      "expression": "angry",
      "next": "story-branch-2-1-2"
    },
    "story-branch-2-1-2": {
      "id": "story-branch-2-1-2",
      "chapter": 2,
      "who": "마왕",
      "text": "“좋다.”",
      "expression": "angry",
      "next": "story-branch-2-1-3"
    },
    "story-branch-2-1-3": {
      "id": "story-branch-2-1-3",
      "chapter": 2,
      "who": "이야기",
      "text": "잠시 후 식사가 들어온다. 생각보다 상당히 좋은 음식이다.",
      "expression": "angry",
      "next": "story-branch-2-1-4"
    },
    "story-branch-2-1-4": {
      "id": "story-branch-2-1-4",
      "chapter": 2,
      "who": "주인공",
      "text": "“이거 맛있는데요?”",
      "expression": "angry",
      "next": "story-branch-2-1-5"
    },
    "story-branch-2-1-5": {
      "id": "story-branch-2-1-5",
      "chapter": 2,
      "who": "마왕",
      "text": "“당연하지.”",
      "expression": "angry",
      "next": "story-branch-2-1-6"
    },
    "story-branch-2-1-6": {
      "id": "story-branch-2-1-6",
      "chapter": 2,
      "who": "주인공",
      "text": "“마왕님도 먹는 거 좋아하시죠?”",
      "expression": "angry",
      "next": "story-branch-2-1-7"
    },
    "story-branch-2-1-7": {
      "id": "story-branch-2-1-7",
      "chapter": 2,
      "who": "마왕",
      "text": "“아니다.”",
      "expression": "angry",
      "next": "story-branch-2-1-8"
    },
    "story-branch-2-1-8": {
      "id": "story-branch-2-1-8",
      "chapter": 2,
      "who": "주인공",
      "text": "“방금 엄청 자연스럽게 대답하셨는데요.”",
      "expression": "angry",
      "next": "story-branch-2-1-9"
    },
    "story-branch-2-1-9": {
      "id": "story-branch-2-1-9",
      "chapter": 2,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-3-entry"
    },
    "story-branch-2-2-0": {
      "id": "story-branch-2-2-0",
      "chapter": 2,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-2-2-1"
    },
    "story-branch-2-2-1": {
      "id": "story-branch-2-2-1",
      "chapter": 2,
      "who": "이야기",
      "text": "잠시 후 평범한 식사가 들어온다.",
      "expression": "angry",
      "next": "story-branch-2-2-2"
    },
    "story-branch-2-2-2": {
      "id": "story-branch-2-2-2",
      "chapter": 2,
      "who": "마왕",
      "text": "“이 정도면 되겠지.”",
      "expression": "angry",
      "next": "story-branch-2-2-3"
    },
    "story-branch-2-2-3": {
      "id": "story-branch-2-2-3",
      "chapter": 2,
      "who": "주인공",
      "text": "“감사합니다.”",
      "expression": "angry",
      "next": "story-branch-2-2-4"
    },
    "story-branch-2-2-4": {
      "id": "story-branch-2-2-4",
      "chapter": 2,
      "who": "마왕",
      "text": "“감사는 됐다.”",
      "expression": "angry",
      "next": "story-branch-2-2-5"
    },
    "story-branch-2-2-5": {
      "id": "story-branch-2-2-5",
      "chapter": 2,
      "who": "주인공",
      "text": "“그래도 감사합니다.”",
      "expression": "angry",
      "next": "story-branch-2-2-6"
    },
    "story-branch-2-2-6": {
      "id": "story-branch-2-2-6",
      "chapter": 2,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-3-entry"
    },
    "story-branch-2-3-0": {
      "id": "story-branch-2-3-0",
      "chapter": 2,
      "who": "마왕",
      "text": "“내가?”",
      "expression": "angry",
      "next": "story-branch-2-3-1"
    },
    "story-branch-2-3-1": {
      "id": "story-branch-2-3-1",
      "chapter": 2,
      "who": "주인공",
      "text": "“네.”",
      "expression": "angry",
      "next": "story-branch-2-3-2"
    },
    "story-branch-2-3-2": {
      "id": "story-branch-2-3-2",
      "chapter": 2,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "angry",
      "next": "story-branch-2-3-3"
    },
    "story-branch-2-3-3": {
      "id": "story-branch-2-3-3",
      "chapter": 2,
      "who": "주인공",
      "text": "“마왕님이 직접 주시면 왠지 연구 대상 취급이 덜할 것 같아서요.”",
      "expression": "angry",
      "next": "story-branch-2-3-4"
    },
    "story-branch-2-3-4": {
      "id": "story-branch-2-3-4",
      "chapter": 2,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-2-3-5"
    },
    "story-branch-2-3-5": {
      "id": "story-branch-2-3-5",
      "chapter": 2,
      "who": "이야기",
      "text": "마왕은 아무 말 없이 나간다.",
      "expression": "angry",
      "next": "story-branch-2-3-6"
    },
    "story-branch-2-3-6": {
      "id": "story-branch-2-3-6",
      "chapter": 2,
      "who": "이야기",
      "text": "잠시 후 직접 음식을 들고 돌아온다.",
      "expression": "angry",
      "next": "story-branch-2-3-7"
    },
    "story-branch-2-3-7": {
      "id": "story-branch-2-3-7",
      "chapter": 2,
      "who": "주인공",
      "text": "“진짜 만들어오셨네요.”",
      "expression": "angry",
      "next": "story-branch-2-3-8"
    },
    "story-branch-2-3-8": {
      "id": "story-branch-2-3-8",
      "chapter": 2,
      "who": "마왕",
      "text": "“시험이다.”",
      "expression": "angry",
      "next": "story-branch-2-3-9"
    },
    "story-branch-2-3-9": {
      "id": "story-branch-2-3-9",
      "chapter": 2,
      "who": "주인공",
      "text": "“무슨 시험이요?”",
      "expression": "angry",
      "next": "story-branch-2-3-10"
    },
    "story-branch-2-3-10": {
      "id": "story-branch-2-3-10",
      "chapter": 2,
      "who": "마왕",
      "text": "“독이 들어 있는지 알아맞혀 봐라.”",
      "expression": "angry",
      "effects": [
        [
          0,
          "poison"
        ]
      ],
      "next": "story-branch-2-3-11"
    },
    "story-branch-2-3-11": {
      "id": "story-branch-2-3-11",
      "chapter": 2,
      "who": "주인공",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-2-3-12"
    },
    "story-branch-2-3-12": {
      "id": "story-branch-2-3-12",
      "chapter": 2,
      "who": "마왕",
      "text": "“농담이다.”",
      "expression": "angry",
      "next": "story-branch-2-3-13"
    },
    "story-branch-2-3-13": {
      "id": "story-branch-2-3-13",
      "chapter": 2,
      "who": "주인공",
      "text": "“마왕님, 농담도 하시는군요.”",
      "expression": "angry",
      "next": "story-branch-2-3-14"
    },
    "story-branch-2-3-14": {
      "id": "story-branch-2-3-14",
      "chapter": 2,
      "who": "마왕",
      "text": "“시끄럽다.”",
      "expression": "angry",
      "next": "story-3-entry"
    },
    "story-choice-2": {
      "id": "story-choice-2",
      "chapter": 2,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“그럼 맛있는 걸로 부탁드립니다.”",
          "next": "story-branch-2-1-0",
          "delta": 2,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "direct"
        },
        {
          "label": "“아무거나 괜찮습니다.”",
          "next": "story-branch-2-2-0",
          "delta": 1,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        },
        {
          "label": "“마왕님이 직접 만든 걸 먹어보고 싶습니다.”",
          "next": "story-branch-2-3-0",
          "delta": 4,
          "trust": 0,
          "anger": 0,
          "flags": [
            "마왕의요리"
          ],
          "tone": "gentle"
        }
      ],
      "checkpoint": true,
      "expression": "angry"
    },
    "story-3-0": {
      "id": "story-3-0",
      "chapter": 3,
      "who": "이야기",
      "text": "철문 너머 복도에서 아침빛이 길게 들어왔다. 처음으로 그 빛이 닿는 곳까지 걸어가도 좋다는 허락을 받았다.",
      "expression": "angry",
      "location": "castle",
      "next": "story-3-1",
      "reward": {
        "trust": 8,
        "flags": [
          "조사협조"
        ]
      }
    },
    "story-3-1": {
      "id": "story-3-1",
      "chapter": 3,
      "who": "이야기",
      "text": "며칠이 지난다.",
      "expression": "angry",
      "next": "story-3-2"
    },
    "story-3-2": {
      "id": "story-3-2",
      "chapter": 3,
      "who": "이야기",
      "text": "마왕은 부활 능력에 관한 기본적인 조사를 끝낸다.",
      "expression": "angry",
      "next": "story-3-3"
    },
    "story-3-3": {
      "id": "story-3-3",
      "chapter": 3,
      "who": "이야기",
      "text": "어느 날 마왕이 감옥 문을 연다.",
      "expression": "angry",
      "next": "story-3-4"
    },
    "story-3-4": {
      "id": "story-3-4",
      "chapter": 3,
      "who": "마왕",
      "text": "“나와라.”",
      "expression": "angry",
      "next": "story-3-5"
    },
    "story-3-5": {
      "id": "story-3-5",
      "chapter": 3,
      "who": "주인공",
      "text": "“어디로요?”",
      "expression": "angry",
      "next": "story-3-6"
    },
    "story-3-6": {
      "id": "story-3-6",
      "chapter": 3,
      "who": "마왕",
      "text": "“여기보다 다른 곳에서 관찰하겠다.”",
      "expression": "angry",
      "next": "story-3-7"
    },
    "story-3-7": {
      "id": "story-3-7",
      "chapter": 3,
      "who": "주인공",
      "text": "“그럼 저 풀어주는 겁니까?”",
      "expression": "angry",
      "next": "story-3-8"
    },
    "story-3-8": {
      "id": "story-3-8",
      "chapter": 3,
      "who": "마왕",
      "text": "“관찰 범위를 넓히는 것이다.”",
      "expression": "angry",
      "next": "story-3-9"
    },
    "story-3-9": {
      "id": "story-3-9",
      "chapter": 3,
      "who": "주인공",
      "text": "“그게 풀어주는 거죠.”",
      "expression": "angry",
      "next": "story-3-10"
    },
    "story-3-10": {
      "id": "story-3-10",
      "chapter": 3,
      "who": "마왕",
      "text": "“아니다.”",
      "expression": "angry",
      "next": "story-3-11"
    },
    "story-3-11": {
      "id": "story-3-11",
      "chapter": 3,
      "who": "주인공",
      "text": "“네.”",
      "expression": "angry",
      "next": "story-3-12"
    },
    "story-3-12": {
      "id": "story-3-12",
      "chapter": 3,
      "who": "마왕",
      "text": "“……왜 그렇게 웃지?”",
      "expression": "angry",
      "next": "story-3-13"
    },
    "story-3-13": {
      "id": "story-3-13",
      "chapter": 3,
      "who": "주인공",
      "text": "“마왕님은 자존심이 세시네요.”",
      "expression": "angry",
      "next": "story-3-14"
    },
    "story-3-14": {
      "id": "story-3-14",
      "chapter": 3,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-choice-3"
    },
    "story-3-entry": {
      "id": "story-3-entry",
      "chapter": 3,
      "who": "이야기",
      "text": "",
      "next": "story-3-0",
      "gate": null
    },
    "story-branch-3-1-0": {
      "id": "story-branch-3-1-0",
      "chapter": 3,
      "who": "주인공",
      "text": "“그래도 감옥에서 나가니까 좋네요.”",
      "expression": "angry",
      "next": "story-branch-3-1-1"
    },
    "story-branch-3-1-1": {
      "id": "story-branch-3-1-1",
      "chapter": 3,
      "who": "마왕",
      "text": "“……그렇겠지.”",
      "expression": "angry",
      "next": "story-branch-3-1-2"
    },
    "story-branch-3-1-2": {
      "id": "story-branch-3-1-2",
      "chapter": 3,
      "who": "주인공",
      "text": "“조금 답답했거든요.”",
      "expression": "angry",
      "next": "story-branch-3-1-3"
    },
    "story-branch-3-1-3": {
      "id": "story-branch-3-1-3",
      "chapter": 3,
      "who": "마왕",
      "text": "“앞으로는 마왕성 안에서 자유롭게 움직여도 된다.”",
      "expression": "angry",
      "next": "story-branch-3-1-4"
    },
    "story-branch-3-1-4": {
      "id": "story-branch-3-1-4",
      "chapter": 3,
      "who": "주인공",
      "text": "“정말요?”",
      "expression": "angry",
      "next": "story-branch-3-1-5"
    },
    "story-branch-3-1-5": {
      "id": "story-branch-3-1-5",
      "chapter": 3,
      "who": "마왕",
      "text": "“단, 허락 없이 마계를 벗어나지는 마라.”",
      "expression": "angry",
      "next": "story-4-entry"
    },
    "story-branch-3-2-0": {
      "id": "story-branch-3-2-0",
      "chapter": 3,
      "who": "주인공",
      "text": "“마왕님이 데리러 와주실 줄 알았습니다.”",
      "expression": "angry",
      "next": "story-branch-3-2-1"
    },
    "story-branch-3-2-1": {
      "id": "story-branch-3-2-1",
      "chapter": 3,
      "who": "마왕",
      "text": "“……내가?”",
      "expression": "angry",
      "next": "story-branch-3-2-2"
    },
    "story-branch-3-2-2": {
      "id": "story-branch-3-2-2",
      "chapter": 3,
      "who": "주인공",
      "text": "“네.”",
      "expression": "angry",
      "next": "story-branch-3-2-3"
    },
    "story-branch-3-2-3": {
      "id": "story-branch-3-2-3",
      "chapter": 3,
      "who": "마왕",
      "text": "“그럴 이유가 있나?”",
      "expression": "angry",
      "next": "story-branch-3-2-4"
    },
    "story-branch-3-2-4": {
      "id": "story-branch-3-2-4",
      "chapter": 3,
      "who": "주인공",
      "text": "“관찰 대상이니까요.”",
      "expression": "angry",
      "next": "story-branch-3-2-5"
    },
    "story-branch-3-2-5": {
      "id": "story-branch-3-2-5",
      "chapter": 3,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-3-2-6"
    },
    "story-branch-3-2-6": {
      "id": "story-branch-3-2-6",
      "chapter": 3,
      "who": "이야기",
      "text": "마왕은 잠시 생각하다가 고개를 돌린다.",
      "expression": "shy",
      "next": "story-branch-3-2-7"
    },
    "story-branch-3-2-7": {
      "id": "story-branch-3-2-7",
      "chapter": 3,
      "who": "마왕",
      "text": "“앞으로도 네가 사라지면 직접 찾으러 가겠다.”",
      "expression": "angry",
      "next": "story-4-entry"
    },
    "story-branch-3-3-0": {
      "id": "story-branch-3-3-0",
      "chapter": 3,
      "who": "주인공",
      "text": "“저 다시 감옥으로 들어갈까요?”",
      "expression": "angry",
      "next": "story-branch-3-3-1"
    },
    "story-branch-3-3-1": {
      "id": "story-branch-3-3-1",
      "chapter": 3,
      "who": "마왕",
      "text": "“……왜?”",
      "expression": "angry",
      "next": "story-branch-3-3-2"
    },
    "story-branch-3-3-2": {
      "id": "story-branch-3-3-2",
      "chapter": 3,
      "who": "주인공",
      "text": "“마왕님이 싫어하실 것 같아서요.”",
      "expression": "angry",
      "next": "story-branch-3-3-3"
    },
    "story-branch-3-3-3": {
      "id": "story-branch-3-3-3",
      "chapter": 3,
      "who": "마왕",
      "text": "“…….”",
      "expression": "angry",
      "next": "story-branch-3-3-4"
    },
    "story-branch-3-3-4": {
      "id": "story-branch-3-3-4",
      "chapter": 3,
      "who": "마왕",
      "text": "“네가 감옥에 있는 게 오히려 더 귀찮다.”",
      "expression": "angry",
      "next": "story-branch-3-3-5"
    },
    "story-branch-3-3-5": {
      "id": "story-branch-3-3-5",
      "chapter": 3,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "angry",
      "next": "story-branch-3-3-6"
    },
    "story-branch-3-3-6": {
      "id": "story-branch-3-3-6",
      "chapter": 3,
      "who": "마왕",
      "text": "“확인하러 가야 하니까.”",
      "expression": "angry",
      "next": "story-4-entry"
    },
    "story-choice-3": {
      "id": "story-choice-3",
      "chapter": 3,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“그래도 감옥에서 나가니까 좋네요.”",
          "next": "story-branch-3-1-0",
          "delta": 2,
          "trust": 0,
          "anger": 0,
          "flags": [
            "마왕성_자유",
            "마왕성_자유"
          ],
          "tone": "cautious"
        },
        {
          "label": "“마왕님이 데리러 와주실 줄 알았습니다.”",
          "next": "story-branch-3-2-0",
          "delta": 4,
          "trust": 0,
          "anger": 0,
          "flags": [
            "마왕_직접관찰",
            "마왕성_자유"
          ],
          "tone": "gentle"
        },
        {
          "label": "“저 다시 감옥으로 들어갈까요?”",
          "next": "story-branch-3-3-0",
          "delta": 1,
          "trust": 0,
          "anger": 0,
          "flags": [
            "마왕성_자유"
          ],
          "tone": "playful"
        }
      ],
      "checkpoint": true,
      "expression": "angry"
    },
    "story-4-0": {
      "id": "story-4-0",
      "chapter": 4,
      "who": "이야기",
      "text": "감옥 대신 작은 손님방을 받았다. 당신의 방패는 문 옆에, 식사 시간표는 침대 옆에 놓였다. 시종은 당신을 더 이상 죄수라고 부르지 않았다.",
      "expression": "curious",
      "location": "castle",
      "next": "story-4-1"
    },
    "story-4-1": {
      "id": "story-4-1",
      "chapter": 4,
      "who": "이야기",
      "text": "당신은 마왕성에서 생활하기 시작한다.",
      "expression": "curious",
      "next": "story-4-2"
    },
    "story-4-2": {
      "id": "story-4-2",
      "chapter": 4,
      "who": "이야기",
      "text": "아침.",
      "expression": "curious",
      "next": "story-4-3"
    },
    "story-4-3": {
      "id": "story-4-3",
      "chapter": 4,
      "who": "이야기",
      "text": "마왕과 복도에서 마주친다.",
      "expression": "curious",
      "next": "story-4-4"
    },
    "story-4-4": {
      "id": "story-4-4",
      "chapter": 4,
      "who": "주인공",
      "text": "“안녕하세요.”",
      "expression": "curious",
      "next": "story-4-5"
    },
    "story-4-5": {
      "id": "story-4-5",
      "chapter": 4,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-4-6"
    },
    "story-4-6": {
      "id": "story-4-6",
      "chapter": 4,
      "who": "주인공",
      "text": "“인사 정도는 해주시죠.”",
      "expression": "curious",
      "next": "story-4-7"
    },
    "story-4-7": {
      "id": "story-4-7",
      "chapter": 4,
      "who": "마왕",
      "text": "“……안녕.”",
      "expression": "curious",
      "next": "story-4-8"
    },
    "story-4-8": {
      "id": "story-4-8",
      "chapter": 4,
      "who": "주인공",
      "text": "“잘하시네요.”",
      "expression": "curious",
      "next": "story-4-9"
    },
    "story-4-9": {
      "id": "story-4-9",
      "chapter": 4,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-4-10"
    },
    "story-4-10": {
      "id": "story-4-10",
      "chapter": 4,
      "who": "마왕",
      "text": "“칭찬하지 마라.”",
      "expression": "curious",
      "next": "story-4-11"
    },
    "story-4-11": {
      "id": "story-4-11",
      "chapter": 4,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "curious",
      "next": "story-4-12"
    },
    "story-4-12": {
      "id": "story-4-12",
      "chapter": 4,
      "who": "마왕",
      "text": "“기분이 이상하다.”",
      "expression": "curious",
      "next": "story-4-13"
    },
    "story-4-13": {
      "id": "story-4-13",
      "chapter": 4,
      "who": "주인공",
      "text": "“좋은 거 아닌가요?”",
      "expression": "curious",
      "next": "story-4-14"
    },
    "story-4-14": {
      "id": "story-4-14",
      "chapter": 4,
      "who": "마왕",
      "text": "“……모르겠다.”",
      "expression": "curious",
      "next": "story-5-entry",
      "reward": {
        "affection": 1
      }
    },
    "story-4-entry": {
      "id": "story-4-entry",
      "chapter": 4,
      "who": "이야기",
      "text": "",
      "next": "story-4-0",
      "gate": null
    },
    "story-5-0": {
      "id": "story-5-0",
      "chapter": 5,
      "who": "이야기",
      "text": "창가 책상에는 인간에 관한 책들이 쌓여 있었다. 책 제목보다 당신에게 묻는 질문이 더 많아진 오후였다.",
      "expression": "curious",
      "location": "castle",
      "next": "story-5-1"
    },
    "story-5-1": {
      "id": "story-5-1",
      "chapter": 5,
      "who": "이야기",
      "text": "마왕은 인간에 관한 질문을 계속한다.",
      "expression": "curious",
      "next": "story-5-2"
    },
    "story-5-2": {
      "id": "story-5-2",
      "chapter": 5,
      "who": "마왕",
      "text": "“인간은 왜 선물을 주지?”",
      "expression": "curious",
      "next": "story-5-3"
    },
    "story-5-3": {
      "id": "story-5-3",
      "chapter": 5,
      "who": "주인공",
      "text": "“좋아하는 사람에게 주기도 합니다.”",
      "expression": "curious",
      "next": "story-5-4"
    },
    "story-5-4": {
      "id": "story-5-4",
      "chapter": 5,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "curious",
      "next": "story-5-5"
    },
    "story-5-5": {
      "id": "story-5-5",
      "chapter": 5,
      "who": "주인공",
      "text": "“기쁘게 해주고 싶으니까요.”",
      "expression": "curious",
      "next": "story-5-6"
    },
    "story-5-6": {
      "id": "story-5-6",
      "chapter": 5,
      "who": "마왕",
      "text": "“쓸모없는 행동이다.”",
      "expression": "curious",
      "next": "story-5-7"
    },
    "story-5-7": {
      "id": "story-5-7",
      "chapter": 5,
      "who": "주인공",
      "text": "“그럼 마왕님은 누군가에게 선물을 받아본 적 없어요?”",
      "expression": "curious",
      "next": "story-5-8"
    },
    "story-5-8": {
      "id": "story-5-8",
      "chapter": 5,
      "who": "마왕",
      "text": "“……있다.”",
      "expression": "curious",
      "next": "story-5-9"
    },
    "story-5-9": {
      "id": "story-5-9",
      "chapter": 5,
      "who": "마왕",
      "text": "“하지만 대부분 독이 들었거나, 함정이었지.”",
      "expression": "curious",
      "next": "story-5-10"
    },
    "story-5-10": {
      "id": "story-5-10",
      "chapter": 5,
      "who": "주인공",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-5-11"
    },
    "story-5-11": {
      "id": "story-5-11",
      "chapter": 5,
      "who": "마왕",
      "text": "“왜 그런 표정을 하지?”",
      "expression": "curious",
      "next": "story-5-12"
    },
    "story-5-12": {
      "id": "story-5-12",
      "chapter": 5,
      "who": "주인공",
      "text": "“좀 불쌍해서요.”",
      "expression": "curious",
      "next": "story-5-13"
    },
    "story-5-13": {
      "id": "story-5-13",
      "chapter": 5,
      "who": "마왕",
      "text": "“동정하지 마라.”",
      "expression": "angry",
      "next": "story-choice-4"
    },
    "story-5-entry": {
      "id": "story-5-entry",
      "chapter": 5,
      "who": "이야기",
      "text": "",
      "next": "story-5-0",
      "gate": null
    },
    "story-branch-4-1-0": {
      "id": "story-branch-4-1-0",
      "chapter": 5,
      "who": "마왕",
      "text": "“……걱정?”",
      "expression": "curious",
      "next": "story-branch-4-1-1"
    },
    "story-branch-4-1-1": {
      "id": "story-branch-4-1-1",
      "chapter": 5,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-4-1-2"
    },
    "story-branch-4-1-2": {
      "id": "story-branch-4-1-2",
      "chapter": 5,
      "who": "마왕",
      "text": "“나를?”",
      "expression": "curious",
      "next": "story-branch-4-1-3"
    },
    "story-branch-4-1-3": {
      "id": "story-branch-4-1-3",
      "chapter": 5,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-4-1-4"
    },
    "story-branch-4-1-4": {
      "id": "story-branch-4-1-4",
      "chapter": 5,
      "who": "이야기",
      "text": "마왕은 대답하지 못한다.",
      "expression": "curious",
      "next": "story-6-entry"
    },
    "story-branch-4-2-0": {
      "id": "story-branch-4-2-0",
      "chapter": 5,
      "who": "마왕",
      "text": "“좋다.”",
      "expression": "curious",
      "next": "story-branch-4-2-1"
    },
    "story-branch-4-2-1": {
      "id": "story-branch-4-2-1",
      "chapter": 5,
      "who": "이야기",
      "text": "하지만 표정은 조금 어두워진다.",
      "expression": "curious",
      "next": "story-6-entry"
    },
    "story-branch-4-3-0": {
      "id": "story-branch-4-3-0",
      "chapter": 5,
      "who": "마왕",
      "text": "“……나에게?”",
      "expression": "curious",
      "next": "story-branch-4-3-1"
    },
    "story-branch-4-3-1": {
      "id": "story-branch-4-3-1",
      "chapter": 5,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-4-3-2"
    },
    "story-branch-4-3-2": {
      "id": "story-branch-4-3-2",
      "chapter": 5,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "curious",
      "next": "story-branch-4-3-3"
    },
    "story-branch-4-3-3": {
      "id": "story-branch-4-3-3",
      "chapter": 5,
      "who": "주인공",
      "text": "“선물은 좋아하는 사람에게 주는 거라면서요?”",
      "expression": "curious",
      "next": "story-branch-4-3-4"
    },
    "story-branch-4-3-4": {
      "id": "story-branch-4-3-4",
      "chapter": 5,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-branch-4-3-5"
    },
    "story-branch-4-3-5": {
      "id": "story-branch-4-3-5",
      "chapter": 5,
      "who": "이야기",
      "text": "마왕의 얼굴이 살짝 붉어진다.",
      "expression": "shy",
      "next": "story-branch-4-3-6"
    },
    "story-branch-4-3-6": {
      "id": "story-branch-4-3-6",
      "chapter": 5,
      "who": "마왕",
      "text": "“그 말은 아직 이해하지 못했다.”",
      "expression": "curious",
      "next": "story-6-entry"
    },
    "story-choice-4": {
      "id": "story-choice-4",
      "chapter": 5,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“동정이 아니라 걱정입니다.”",
          "next": "story-branch-4-1-0",
          "delta": 5,
          "trust": 2,
          "anger": 0,
          "flags": [
            "걱정받는마왕"
          ],
          "tone": "gentle"
        },
        {
          "label": "“알겠습니다. 안 할게요.”",
          "next": "story-branch-4-2-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        },
        {
          "label": "“그럼 제가 선물 드릴까요?”",
          "next": "story-branch-4-3-0",
          "delta": 7,
          "trust": 0,
          "anger": 0,
          "flags": [
            "첫선물"
          ],
          "tone": "direct"
        }
      ],
      "checkpoint": true,
      "expression": "curious"
    },
    "story-6-0": {
      "id": "story-6-0",
      "chapter": 6,
      "who": "이야기",
      "text": "성문 밖에는 빵 굽는 냄새와 돌길을 두드리는 발소리가 있었다. 마계의 사람들도 장을 보고, 아이의 손을 잡고, 늦은 이웃에게 인사했다.",
      "expression": "curious",
      "location": "city",
      "next": "story-6-1"
    },
    "story-6-1": {
      "id": "story-6-1",
      "chapter": 6,
      "who": "이야기",
      "text": "당신은 마계 도시를 보고 싶다고 부탁한다.",
      "expression": "curious",
      "next": "story-6-2"
    },
    "story-6-2": {
      "id": "story-6-2",
      "chapter": 6,
      "who": "마왕",
      "text": "“안 된다.”",
      "expression": "curious",
      "next": "story-6-3"
    },
    "story-6-3": {
      "id": "story-6-3",
      "chapter": 6,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "curious",
      "next": "story-6-4"
    },
    "story-6-4": {
      "id": "story-6-4",
      "chapter": 6,
      "who": "마왕",
      "text": "“인간이 나타나면 소란이 생긴다.”",
      "expression": "curious",
      "next": "story-6-5"
    },
    "story-6-5": {
      "id": "story-6-5",
      "chapter": 6,
      "who": "주인공",
      "text": "“그럼 마왕님이 같이 가시면 되잖아요.”",
      "expression": "curious",
      "next": "story-6-6"
    },
    "story-6-6": {
      "id": "story-6-6",
      "chapter": 6,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-6-7"
    },
    "story-6-7": {
      "id": "story-6-7",
      "chapter": 6,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "curious",
      "next": "story-6-8"
    },
    "story-6-8": {
      "id": "story-6-8",
      "chapter": 6,
      "who": "마왕",
      "text": "“내가 꼭 가야 하나?”",
      "expression": "curious",
      "next": "story-6-9"
    },
    "story-6-9": {
      "id": "story-6-9",
      "chapter": 6,
      "who": "주인공",
      "text": "“관찰한다면서요.”",
      "expression": "curious",
      "next": "story-6-10"
    },
    "story-6-10": {
      "id": "story-6-10",
      "chapter": 6,
      "who": "마왕",
      "text": "“……좋다.”",
      "expression": "curious",
      "next": "story-6-11"
    },
    "story-6-11": {
      "id": "story-6-11",
      "chapter": 6,
      "who": "이야기",
      "text": "두 사람은 마계 도시로 나간다.",
      "expression": "curious",
      "next": "story-6-12"
    },
    "story-6-12": {
      "id": "story-6-12",
      "chapter": 6,
      "who": "이야기",
      "text": "마족들은 마왕 옆에 인간이 있는 것을 보고 술렁인다.",
      "expression": "curious",
      "next": "story-6-13"
    },
    "story-6-13": {
      "id": "story-6-13",
      "chapter": 6,
      "who": "주인공",
      "text": "“다들 저를 신기하게 보는 것 같은데요.”",
      "expression": "curious",
      "next": "story-6-14"
    },
    "story-6-14": {
      "id": "story-6-14",
      "chapter": 6,
      "who": "마왕",
      "text": "“당연하다.”",
      "expression": "curious",
      "next": "story-6-15"
    },
    "story-6-15": {
      "id": "story-6-15",
      "chapter": 6,
      "who": "주인공",
      "text": "“마왕님 옆에 인간이 있으니까요?”",
      "expression": "curious",
      "next": "story-6-16"
    },
    "story-6-16": {
      "id": "story-6-16",
      "chapter": 6,
      "who": "마왕",
      "text": "“그래.”",
      "expression": "curious",
      "next": "story-6-17"
    },
    "story-6-17": {
      "id": "story-6-17",
      "chapter": 6,
      "who": "주인공",
      "text": "“그럼 저를 뭐라고 소개하실 거예요?”",
      "expression": "curious",
      "next": "story-choice-5"
    },
    "story-6-entry": {
      "id": "story-6-entry",
      "chapter": 6,
      "who": "이야기",
      "text": "",
      "next": "story-6-0",
      "gate": null
    },
    "story-branch-5-1-0": {
      "id": "story-branch-5-1-0",
      "chapter": 6,
      "who": "마왕",
      "text": "“……그냥 인간.”",
      "expression": "curious",
      "next": "story-branch-5-1-1"
    },
    "story-branch-5-1-1": {
      "id": "story-branch-5-1-1",
      "chapter": 6,
      "who": "이야기",
      "text": "마왕은 실제로 그렇게 소개한다.",
      "expression": "curious",
      "next": "story-branch-5-1-2"
    },
    "story-branch-5-1-2": {
      "id": "story-branch-5-1-2",
      "chapter": 6,
      "who": "이야기",
      "text": "당신은 조금 섭섭하다.",
      "expression": "curious",
      "next": "story-7-entry"
    },
    "story-branch-5-2-0": {
      "id": "story-branch-5-2-0",
      "chapter": 6,
      "who": "마왕",
      "text": "“친구…….”",
      "expression": "curious",
      "next": "story-branch-5-2-1"
    },
    "story-branch-5-2-1": {
      "id": "story-branch-5-2-1",
      "chapter": 6,
      "who": "이야기",
      "text": "마왕은 그 단어를 몇 번 되뇌인다.",
      "expression": "curious",
      "next": "story-branch-5-2-2"
    },
    "story-branch-5-2-2": {
      "id": "story-branch-5-2-2",
      "chapter": 6,
      "who": "마왕",
      "text": "“좋다.”",
      "expression": "curious",
      "next": "story-branch-5-2-3"
    },
    "story-branch-5-2-3": {
      "id": "story-branch-5-2-3",
      "chapter": 6,
      "who": "주인공",
      "text": "“정말요?”",
      "expression": "curious",
      "next": "story-branch-5-2-4"
    },
    "story-branch-5-2-4": {
      "id": "story-branch-5-2-4",
      "chapter": 6,
      "who": "마왕",
      "text": "“하지만 아직 친구가 정확히 무엇인지 모르겠다.”",
      "expression": "curious",
      "next": "story-7-entry"
    },
    "story-branch-5-3-0": {
      "id": "story-branch-5-3-0",
      "chapter": 6,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-branch-5-3-1"
    },
    "story-branch-5-3-1": {
      "id": "story-branch-5-3-1",
      "chapter": 6,
      "who": "마왕",
      "text": "“연구 대상.”",
      "expression": "curious",
      "next": "story-branch-5-3-2"
    },
    "story-branch-5-3-2": {
      "id": "story-branch-5-3-2",
      "chapter": 6,
      "who": "주인공",
      "text": "“역시 그거구나.”",
      "expression": "curious",
      "next": "story-branch-5-3-3"
    },
    "story-branch-5-3-3": {
      "id": "story-branch-5-3-3",
      "chapter": 6,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "curious",
      "next": "story-branch-5-3-4"
    },
    "story-branch-5-3-4": {
      "id": "story-branch-5-3-4",
      "chapter": 6,
      "who": "주인공",
      "text": "“아무것도 아닙니다.”",
      "expression": "curious",
      "next": "story-7-entry"
    },
    "story-branch-5-4-0": {
      "id": "story-branch-5-4-0",
      "chapter": 6,
      "who": "마왕",
      "text": "“특별한 사람?”",
      "expression": "curious",
      "next": "story-branch-5-4-1"
    },
    "story-branch-5-4-1": {
      "id": "story-branch-5-4-1",
      "chapter": 6,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-5-4-2"
    },
    "story-branch-5-4-2": {
      "id": "story-branch-5-4-2",
      "chapter": 6,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-branch-5-4-3"
    },
    "story-branch-5-4-3": {
      "id": "story-branch-5-4-3",
      "chapter": 6,
      "who": "이야기",
      "text": "마왕은 얼굴을 돌린다.",
      "expression": "curious",
      "next": "story-branch-5-4-4"
    },
    "story-branch-5-4-4": {
      "id": "story-branch-5-4-4",
      "chapter": 6,
      "who": "마왕",
      "text": "“그건 아직 이르다.”",
      "expression": "curious",
      "next": "story-branch-5-4-5"
    },
    "story-branch-5-4-5": {
      "id": "story-branch-5-4-5",
      "chapter": 6,
      "who": "주인공",
      "text": "“그래도 싫지는 않죠?”",
      "expression": "curious",
      "next": "story-branch-5-4-6"
    },
    "story-branch-5-4-6": {
      "id": "story-branch-5-4-6",
      "chapter": 6,
      "who": "마왕",
      "text": "“……싫다고 하진 않았다.”",
      "expression": "curious",
      "next": "story-7-entry"
    },
    "story-choice-5": {
      "id": "story-choice-5",
      "chapter": 6,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“그냥 인간이라고 해주세요.”",
          "next": "story-branch-5-1-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        },
        {
          "label": "“친구라고 해주세요.”",
          "next": "story-branch-5-2-0",
          "delta": 5,
          "trust": 0,
          "anger": 0,
          "flags": [
            "친구"
          ],
          "tone": "gentle"
        },
        {
          "label": "“마왕님의 연구 대상이라고 해주세요.”",
          "next": "story-branch-5-3-0",
          "delta": -1,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "playful"
        },
        {
          "label": "“……특별한 사람이라고 해주세요.”",
          "next": "story-branch-5-4-0",
          "delta": 8,
          "trust": 0,
          "anger": 0,
          "flags": [
            "특별한사람"
          ],
          "tone": "direct"
        }
      ],
      "checkpoint": true,
      "expression": "curious"
    },
    "story-7-0": {
      "id": "story-7-0",
      "chapter": 7,
      "who": "이야기",
      "text": "당신은 오른팔에 방패를 고쳐 끼웠다. 돌길에 드리운 그림자 사이로, 성스러운 문장이 새겨진 칼날이 번쩍였다.",
      "expression": "curious",
      "location": "city",
      "next": "story-7-1"
    },
    "story-7-1": {
      "id": "story-7-1",
      "chapter": 7,
      "who": "이야기",
      "text": "도시를 구경하던 중 용사 일행이 나타난다.",
      "expression": "curious",
      "next": "story-7-2"
    },
    "story-7-2": {
      "id": "story-7-2",
      "chapter": 7,
      "who": "용사",
      "text": "“마왕!”",
      "expression": "curious",
      "next": "story-7-3"
    },
    "story-7-3": {
      "id": "story-7-3",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕의 얼굴이 순식간에 굳는다.",
      "expression": "curious",
      "next": "story-7-4"
    },
    "story-7-4": {
      "id": "story-7-4",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-7-5"
    },
    "story-7-5": {
      "id": "story-7-5",
      "chapter": 7,
      "who": "마왕",
      "text": "“또 너희냐.”",
      "expression": "enraged",
      "next": "story-7-6"
    },
    "story-7-6": {
      "id": "story-7-6",
      "chapter": 7,
      "who": "이야기",
      "text": "당신은 처음으로 마왕의 분노가 단순한 성격이 아니라는 것을 느낀다.",
      "expression": "curious",
      "next": "story-7-7"
    },
    "story-7-7": {
      "id": "story-7-7",
      "chapter": 7,
      "who": "용사",
      "text": "“오늘이 네 마지막 날이다!”",
      "expression": "enraged",
      "next": "story-7-8"
    },
    "story-7-8": {
      "id": "story-7-8",
      "chapter": 7,
      "who": "마왕",
      "text": "“내가 그 말을 몇 번이나 들었는지 아나?”",
      "expression": "curious",
      "next": "story-7-9"
    },
    "story-7-9": {
      "id": "story-7-9",
      "chapter": 7,
      "who": "이야기",
      "text": "전투가 시작된다.",
      "expression": "enraged",
      "effects": [
        [
          0,
          "slash"
        ],
        [
          120,
          "hit"
        ]
      ],
      "next": "story-7-10"
    },
    "story-7-10": {
      "id": "story-7-10",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕은 압도적으로 싸우지만, 한 용사가 당신을 노린다.",
      "expression": "curious",
      "next": "story-7-11"
    },
    "story-7-11": {
      "id": "story-7-11",
      "chapter": 7,
      "who": "이야기",
      "text": "당신은 마왕 앞을 막아선다.",
      "expression": "curious",
      "next": "story-7-12"
    },
    "story-7-12": {
      "id": "story-7-12",
      "chapter": 7,
      "who": "이야기",
      "text": "쾅!",
      "expression": "curious",
      "effects": [
        [
          0,
          "slash"
        ],
        [
          120,
          "hit"
        ]
      ],
      "next": "story-7-13"
    },
    "story-7-13": {
      "id": "story-7-13",
      "chapter": 7,
      "who": "마왕",
      "text": "“……왜 막았지?”",
      "expression": "curious",
      "next": "story-7-14"
    },
    "story-7-14": {
      "id": "story-7-14",
      "chapter": 7,
      "who": "주인공",
      "text": "“같이 왔으니까요.”",
      "expression": "curious",
      "next": "story-7-15"
    },
    "story-7-15": {
      "id": "story-7-15",
      "chapter": 7,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-7-16"
    },
    "story-7-16": {
      "id": "story-7-16",
      "chapter": 7,
      "who": "이야기",
      "text": "전투가 끝난다.",
      "expression": "curious",
      "next": "story-7-17"
    },
    "story-7-17": {
      "id": "story-7-17",
      "chapter": 7,
      "who": "마왕",
      "text": "“인간인데 왜 나를 도왔지?”",
      "expression": "curious",
      "next": "story-choice-6"
    },
    "story-7-entry": {
      "id": "story-7-entry",
      "chapter": 7,
      "who": "이야기",
      "text": "",
      "next": "story-7-0",
      "gate": null
    },
    "story-branch-6-1-0": {
      "id": "story-branch-6-1-0",
      "chapter": 7,
      "who": "마왕",
      "text": "“……내가 죽으면 네가 곤란하다고?”",
      "expression": "curious",
      "next": "story-branch-6-1-1"
    },
    "story-branch-6-1-1": {
      "id": "story-branch-6-1-1",
      "chapter": 7,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-6-1-2"
    },
    "story-branch-6-1-2": {
      "id": "story-branch-6-1-2",
      "chapter": 7,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "curious",
      "next": "story-branch-6-1-3"
    },
    "story-branch-6-1-3": {
      "id": "story-branch-6-1-3",
      "chapter": 7,
      "who": "주인공",
      "text": "“모르겠네요.”",
      "expression": "curious",
      "next": "story-branch-6-1-4"
    },
    "story-branch-6-1-4": {
      "id": "story-branch-6-1-4",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕은 당신을 오래 바라본다.",
      "expression": "curious",
      "next": "story-8-entry"
    },
    "story-branch-6-2-0": {
      "id": "story-branch-6-2-0",
      "chapter": 7,
      "who": "마왕",
      "text": "“……같이 있었으니까.”",
      "expression": "curious",
      "next": "story-branch-6-2-1"
    },
    "story-branch-6-2-1": {
      "id": "story-branch-6-2-1",
      "chapter": 7,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-6-2-2"
    },
    "story-branch-6-2-2": {
      "id": "story-branch-6-2-2",
      "chapter": 7,
      "who": "마왕",
      "text": "“그 이유가 그렇게 중요하다고 생각하나?”",
      "expression": "curious",
      "next": "story-branch-6-2-3"
    },
    "story-branch-6-2-3": {
      "id": "story-branch-6-2-3",
      "chapter": 7,
      "who": "주인공",
      "text": "“저는 중요하다고 생각합니다.”",
      "expression": "curious",
      "next": "story-branch-6-2-4"
    },
    "story-branch-6-2-4": {
      "id": "story-branch-6-2-4",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕은 대답하지 않는다.",
      "expression": "curious",
      "next": "story-8-entry"
    },
    "story-branch-6-3-0": {
      "id": "story-branch-6-3-0",
      "chapter": 7,
      "who": "마왕",
      "text": "“……뭐?”",
      "expression": "curious",
      "next": "story-branch-6-3-1"
    },
    "story-branch-6-3-1": {
      "id": "story-branch-6-3-1",
      "chapter": 7,
      "who": "주인공",
      "text": "“마왕님이 죽는 건 싫다고요.”",
      "expression": "curious",
      "next": "story-branch-6-3-2"
    },
    "story-branch-6-3-2": {
      "id": "story-branch-6-3-2",
      "chapter": 7,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-branch-6-3-3"
    },
    "story-branch-6-3-3": {
      "id": "story-branch-6-3-3",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕의 얼굴이 붉어진다.",
      "expression": "shy",
      "next": "story-branch-6-3-4"
    },
    "story-branch-6-3-4": {
      "id": "story-branch-6-3-4",
      "chapter": 7,
      "who": "마왕",
      "text": "“그런 말을…… 아무렇지도 않게 하지 마라.”",
      "expression": "curious",
      "next": "story-8-entry"
    },
    "story-branch-6-4-0": {
      "id": "story-branch-6-4-0",
      "chapter": 7,
      "who": "마왕",
      "text": "“몸이 먼저?”",
      "expression": "curious",
      "next": "story-branch-6-4-1"
    },
    "story-branch-6-4-1": {
      "id": "story-branch-6-4-1",
      "chapter": 7,
      "who": "주인공",
      "text": "“네.”",
      "expression": "curious",
      "next": "story-branch-6-4-2"
    },
    "story-branch-6-4-2": {
      "id": "story-branch-6-4-2",
      "chapter": 7,
      "who": "마왕",
      "text": "“…….”",
      "expression": "curious",
      "next": "story-branch-6-4-3"
    },
    "story-branch-6-4-3": {
      "id": "story-branch-6-4-3",
      "chapter": 7,
      "who": "이야기",
      "text": "마왕은 복잡한 표정을 짓는다.",
      "expression": "curious",
      "next": "story-8-entry"
    },
    "story-choice-6": {
      "id": "story-choice-6",
      "chapter": 7,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“마왕님이 죽으면 제가 곤란하니까요.”",
          "next": "story-branch-6-1-0",
          "delta": 3,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "cautious"
        },
        {
          "label": "“같이 있었으니까요.”",
          "next": "story-branch-6-2-0",
          "delta": 5,
          "trust": 3,
          "anger": 0,
          "flags": [],
          "tone": "gentle"
        },
        {
          "label": "“마왕님이 죽는 건 싫으니까요.”",
          "next": "story-branch-6-3-0",
          "delta": 10,
          "trust": 0,
          "anger": 0,
          "flags": [
            "감정동요"
          ],
          "tone": "direct"
        },
        {
          "label": "“그냥 몸이 먼저 움직였어요.”",
          "next": "story-branch-6-4-0",
          "delta": 2,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "direct"
        }
      ],
      "checkpoint": true,
      "expression": "curious"
    },
    "story-8-0": {
      "id": "story-8-0",
      "chapter": 8,
      "who": "이야기",
      "text": "난간의 돌이 낮의 열기를 모두 잃은 밤이었다. 당신은 등을 돌린 마왕에게 다가가다가, 두 걸음 정도의 거리를 남겨두었다.",
      "expression": "curious",
      "location": "balcony",
      "next": "story-8-1",
      "reward": {
        "trust": 8,
        "flags": [
          "함께방어"
        ]
      }
    },
    "story-8-1": {
      "id": "story-8-1",
      "chapter": 8,
      "who": "이야기",
      "text": "그날 밤.",
      "expression": "gloomy",
      "next": "story-8-2"
    },
    "story-8-2": {
      "id": "story-8-2",
      "chapter": 8,
      "who": "이야기",
      "text": "마왕은 혼자 있다.",
      "expression": "gloomy",
      "next": "story-8-3"
    },
    "story-8-3": {
      "id": "story-8-3",
      "chapter": 8,
      "who": "이야기",
      "text": "당신이 다가간다.",
      "expression": "gloomy",
      "next": "story-8-4"
    },
    "story-8-4": {
      "id": "story-8-4",
      "chapter": 8,
      "who": "마왕",
      "text": "“가라.”",
      "expression": "gloomy",
      "next": "story-8-5"
    },
    "story-8-5": {
      "id": "story-8-5",
      "chapter": 8,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "gloomy",
      "next": "story-8-6"
    },
    "story-8-6": {
      "id": "story-8-6",
      "chapter": 8,
      "who": "마왕",
      "text": "“오늘은 혼자 있고 싶다.”",
      "expression": "gloomy",
      "next": "story-8-7"
    },
    "story-8-7": {
      "id": "story-8-7",
      "chapter": 8,
      "who": "이야기",
      "text": "당신은 마왕 옆에 앉는다.",
      "expression": "gloomy",
      "next": "story-8-8"
    },
    "story-8-8": {
      "id": "story-8-8",
      "chapter": 8,
      "who": "마왕",
      "text": "“가라고 했다.”",
      "expression": "gloomy",
      "next": "story-choice-7"
    },
    "story-8-entry": {
      "id": "story-8-entry",
      "chapter": 8,
      "who": "이야기",
      "text": "",
      "next": "story-8-0",
      "gate": null
    },
    "story-branch-7-1-0": {
      "id": "story-branch-7-1-0",
      "chapter": 8,
      "who": "주인공",
      "text": "“싫어요.”",
      "expression": "gloomy",
      "next": "story-branch-7-1-1"
    },
    "story-branch-7-1-1": {
      "id": "story-branch-7-1-1",
      "chapter": 8,
      "who": "마왕",
      "text": "“…….”",
      "expression": "gloomy",
      "next": "story-branch-7-1-2"
    },
    "story-branch-7-1-2": {
      "id": "story-branch-7-1-2",
      "chapter": 8,
      "who": "주인공",
      "text": "“혼자 두기 싫습니다.”",
      "expression": "gloomy",
      "next": "story-branch-7-1-3"
    },
    "story-branch-7-1-3": {
      "id": "story-branch-7-1-3",
      "chapter": 8,
      "who": "마왕",
      "text": "“……왜?”",
      "expression": "gloomy",
      "next": "story-branch-7-1-4"
    },
    "story-branch-7-1-4": {
      "id": "story-branch-7-1-4",
      "chapter": 8,
      "who": "주인공",
      "text": "“저도 모르겠어요.”",
      "expression": "gloomy",
      "next": "story-branch-7-1-5"
    },
    "story-branch-7-1-5": {
      "id": "story-branch-7-1-5",
      "chapter": 8,
      "who": "이야기",
      "text": "마왕은 한참 침묵한다.",
      "expression": "gloomy",
      "next": "story-branch-7-1-6"
    },
    "story-branch-7-1-6": {
      "id": "story-branch-7-1-6",
      "chapter": 8,
      "who": "이야기",
      "text": "그리고 과거 이야기를 시작한다.",
      "expression": "gloomy",
      "next": "story-branch-7-1-7"
    },
    "story-branch-7-1-7": {
      "id": "story-branch-7-1-7",
      "chapter": 8,
      "who": "이야기",
      "text": "마왕은 어린 시절부터 용사들에게 습격받았다. 마족의 왕이라는 이유만으로 자신이 죽어야 한다고 믿는 인간들이 끊임없이 찾아왔다. 소중한 부하를 잃은 적도 있었다.",
      "expression": "gloomy",
      "next": "story-branch-7-1-8"
    },
    "story-branch-7-1-8": {
      "id": "story-branch-7-1-8",
      "chapter": 8,
      "who": "마왕",
      "text": "“인간들은 평화를 말하면서 나를 죽이러 왔다.”",
      "expression": "gloomy",
      "next": "story-branch-7-1-9"
    },
    "story-branch-7-1-9": {
      "id": "story-branch-7-1-9",
      "chapter": 8,
      "who": "주인공",
      "text": "“…….”",
      "expression": "gloomy",
      "next": "story-branch-7-1-10"
    },
    "story-branch-7-1-10": {
      "id": "story-branch-7-1-10",
      "chapter": 8,
      "who": "마왕",
      "text": "“그래서 인간을 믿지 않는다.”",
      "expression": "gloomy",
      "next": "story-9-entry"
    },
    "story-branch-7-2-0": {
      "id": "story-branch-7-2-0",
      "chapter": 8,
      "who": "주인공",
      "text": "“알겠습니다.”",
      "expression": "gloomy",
      "next": "story-branch-7-2-1"
    },
    "story-branch-7-2-1": {
      "id": "story-branch-7-2-1",
      "chapter": 8,
      "who": "이야기",
      "text": "당신은 돌아간다.",
      "expression": "gloomy",
      "next": "story-branch-7-2-2"
    },
    "story-branch-7-2-2": {
      "id": "story-branch-7-2-2",
      "chapter": 8,
      "who": "이야기",
      "text": "마왕은 혼자 남는다.",
      "expression": "gloomy",
      "next": "story-branch-7-2-3"
    },
    "story-branch-7-2-3": {
      "id": "story-branch-7-2-3",
      "chapter": 8,
      "who": "이야기",
      "text": "하지만 문이 닫힌 뒤에도 마왕은 한동안 문을 바라본다.",
      "expression": "gloomy",
      "next": "story-9-entry"
    },
    "story-branch-7-3-0": {
      "id": "story-branch-7-3-0",
      "chapter": 8,
      "who": "주인공",
      "text": "“마왕님이 혼자 있고 싶어 보이지 않아서요.”",
      "expression": "gloomy",
      "next": "story-branch-7-3-1"
    },
    "story-branch-7-3-1": {
      "id": "story-branch-7-3-1",
      "chapter": 8,
      "who": "마왕",
      "text": "“…….”",
      "expression": "gloomy",
      "next": "story-branch-7-3-2"
    },
    "story-branch-7-3-2": {
      "id": "story-branch-7-3-2",
      "chapter": 8,
      "who": "주인공",
      "text": "“말하기 싫으면 안 해도 됩니다.”",
      "expression": "gloomy",
      "next": "story-branch-7-3-3"
    },
    "story-branch-7-3-3": {
      "id": "story-branch-7-3-3",
      "chapter": 8,
      "who": "마왕",
      "text": "“……너는 이상하군.”",
      "expression": "gloomy",
      "next": "story-branch-7-3-4"
    },
    "story-branch-7-3-4": {
      "id": "story-branch-7-3-4",
      "chapter": 8,
      "who": "이야기",
      "text": "그날 마왕은 자신의 과거를 처음으로 이야기한다.",
      "expression": "gloomy",
      "next": "story-9-entry"
    },
    "story-choice-7": {
      "id": "story-choice-7",
      "chapter": 8,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“싫어요.”",
          "next": "story-branch-7-1-0",
          "delta": 7,
          "trust": 5,
          "anger": 0,
          "flags": [
            "마왕의과거"
          ],
          "tone": "direct"
        },
        {
          "label": "“알겠습니다. 대신 나중에 이야기해주세요.”",
          "next": "story-branch-7-2-0",
          "delta": 1,
          "trust": 0,
          "anger": 0,
          "flags": [
            "마왕의과거 잠김"
          ],
          "tone": "cautious"
        },
        {
          "label": "“마왕님이 혼자 있고 싶어 보이지 않아서요.”",
          "next": "story-branch-7-3-0",
          "delta": 10,
          "trust": 8,
          "anger": 0,
          "flags": [
            "마왕의과거"
          ],
          "tone": "gentle"
        }
      ],
      "checkpoint": true,
      "expression": "curious"
    },
    "story-9-0": {
      "id": "story-9-0",
      "chapter": 9,
      "who": "이야기",
      "text": "방 문을 두드리는 소리가 짧게 두 번 났다. 문밖에는 마왕이 서 있었다. 손에 든 작은 상자가 유난히 어울리지 않았다.",
      "expression": "curious",
      "location": "castle",
      "next": "story-9-1"
    },
    "story-9-1": {
      "id": "story-9-1",
      "chapter": 9,
      "who": "이야기",
      "text": "마왕이 당신을 부른다.",
      "expression": "indifferent",
      "next": "story-9-2"
    },
    "story-9-2": {
      "id": "story-9-2",
      "chapter": 9,
      "who": "마왕",
      "text": "“이걸 받아라.”",
      "expression": "indifferent",
      "next": "story-9-3"
    },
    "story-9-3": {
      "id": "story-9-3",
      "chapter": 9,
      "who": "이야기",
      "text": "작은 물건이다.",
      "expression": "indifferent",
      "next": "story-9-4"
    },
    "story-9-4": {
      "id": "story-9-4",
      "chapter": 9,
      "who": "주인공",
      "text": "“이게 뭐예요?”",
      "expression": "indifferent",
      "next": "story-9-5"
    },
    "story-9-5": {
      "id": "story-9-5",
      "chapter": 9,
      "who": "마왕",
      "text": "“……선물.”",
      "expression": "indifferent",
      "next": "story-9-6"
    },
    "story-9-6": {
      "id": "story-9-6",
      "chapter": 9,
      "who": "주인공",
      "text": "“마왕님이 저한테요?”",
      "expression": "indifferent",
      "next": "story-9-7"
    },
    "story-9-7": {
      "id": "story-9-7",
      "chapter": 9,
      "who": "마왕",
      "text": "“싫으면 돌려줘.”",
      "expression": "indifferent",
      "next": "story-9-8"
    },
    "story-9-8": {
      "id": "story-9-8",
      "chapter": 9,
      "who": "주인공",
      "text": "“아뇨. 좋아요.”",
      "expression": "indifferent",
      "next": "story-9-9"
    },
    "story-9-9": {
      "id": "story-9-9",
      "chapter": 9,
      "who": "마왕",
      "text": "“……그럼 됐다.”",
      "expression": "indifferent",
      "next": "story-9-10"
    },
    "story-9-10": {
      "id": "story-9-10",
      "chapter": 9,
      "who": "주인공",
      "text": "“왜 주셨어요?”",
      "expression": "indifferent",
      "next": "story-9-11"
    },
    "story-9-11": {
      "id": "story-9-11",
      "chapter": 9,
      "who": "마왕",
      "text": "“인간은 선물을 준다고 했지.”",
      "expression": "indifferent",
      "next": "story-9-12"
    },
    "story-9-12": {
      "id": "story-9-12",
      "chapter": 9,
      "who": "주인공",
      "text": "“네.”",
      "expression": "indifferent",
      "next": "story-9-13"
    },
    "story-9-13": {
      "id": "story-9-13",
      "chapter": 9,
      "who": "마왕",
      "text": "“그래서 해봤다.”",
      "expression": "indifferent",
      "next": "story-9-14"
    },
    "story-9-14": {
      "id": "story-9-14",
      "chapter": 9,
      "who": "주인공",
      "text": "“그럼 저를 좋아해서?”",
      "expression": "indifferent",
      "next": "story-9-15"
    },
    "story-9-15": {
      "id": "story-9-15",
      "chapter": 9,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-9-16"
    },
    "story-9-16": {
      "id": "story-9-16",
      "chapter": 9,
      "who": "이야기",
      "text": "마왕의 눈썹이 날카롭게 꿈틀거렸다.",
      "expression": "furious",
      "effects": [
        [
          0,
          "surprise"
        ]
      ],
      "next": "story-9-17"
    },
    "story-9-17": {
      "id": "story-9-17",
      "chapter": 9,
      "who": "마왕",
      "text": "“그런 식으로 단순하게 결론 내리지 마라.”",
      "expression": "indifferent",
      "next": "story-9-18"
    },
    "story-9-18": {
      "id": "story-9-18",
      "chapter": 9,
      "who": "주인공",
      "text": "“그럼 뭔데요?”",
      "expression": "indifferent",
      "next": "story-9-19"
    },
    "story-9-19": {
      "id": "story-9-19",
      "chapter": 9,
      "who": "마왕",
      "text": "“……모른다.”",
      "expression": "indifferent",
      "next": "story-10-entry",
      "reward": {
        "affection": 8,
        "flags": [
          "마왕의첫선물"
        ]
      }
    },
    "story-9-entry": {
      "id": "story-9-entry",
      "chapter": 9,
      "who": "이야기",
      "text": "",
      "next": "story-9-0",
      "gate": "gift"
    },
    "story-10-0": {
      "id": "story-10-0",
      "chapter": 10,
      "who": "이야기",
      "text": "시장 골목에서 약초상을 다시 만났다. 어제 부탁한 연고를 받는 동안, 사람들 사이로 낯익은 검은 왕관이 보였다.",
      "expression": "jealous",
      "location": "city",
      "next": "story-10-1"
    },
    "story-10-1": {
      "id": "story-10-1",
      "chapter": 10,
      "who": "이야기",
      "text": "당신이 마계의 다른 여성과 이야기한다.",
      "expression": "jealous",
      "next": "story-10-2"
    },
    "story-10-2": {
      "id": "story-10-2",
      "chapter": 10,
      "who": "이야기",
      "text": "마왕은 멀리서 그 모습을 본다.",
      "expression": "jealous",
      "next": "story-10-3"
    },
    "story-10-3": {
      "id": "story-10-3",
      "chapter": 10,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-10-4"
    },
    "story-10-4": {
      "id": "story-10-4",
      "chapter": 10,
      "who": "부하",
      "text": "“폐하?”",
      "expression": "jealous",
      "next": "story-10-5"
    },
    "story-10-5": {
      "id": "story-10-5",
      "chapter": 10,
      "who": "마왕",
      "text": "“……아무것도 아니다.”",
      "expression": "jealous",
      "next": "story-10-6"
    },
    "story-10-6": {
      "id": "story-10-6",
      "chapter": 10,
      "who": "부하",
      "text": "“화나셨습니까?”",
      "expression": "jealous",
      "next": "story-10-7"
    },
    "story-10-7": {
      "id": "story-10-7",
      "chapter": 10,
      "who": "마왕",
      "text": "“아니다.”",
      "expression": "jealous",
      "next": "story-10-8"
    },
    "story-10-8": {
      "id": "story-10-8",
      "chapter": 10,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-10-9"
    },
    "story-10-9": {
      "id": "story-10-9",
      "chapter": 10,
      "who": "부하",
      "text": "“…….”",
      "expression": "jealous",
      "next": "story-10-10"
    },
    "story-10-10": {
      "id": "story-10-10",
      "chapter": 10,
      "who": "마왕",
      "text": "“저 인간은 왜 저렇게 오래 이야기하지?”",
      "expression": "jealous",
      "next": "story-10-11"
    },
    "story-10-11": {
      "id": "story-10-11",
      "chapter": 10,
      "who": "부하",
      "text": "“그걸 제가 어떻게 압니까?”",
      "expression": "jealous",
      "next": "story-10-12"
    },
    "story-10-12": {
      "id": "story-10-12",
      "chapter": 10,
      "who": "마왕",
      "text": "“…….”",
      "expression": "jealous",
      "next": "story-10-13"
    },
    "story-10-13": {
      "id": "story-10-13",
      "chapter": 10,
      "who": "이야기",
      "text": "다음 날.",
      "expression": "jealous",
      "next": "story-10-14"
    },
    "story-10-14": {
      "id": "story-10-14",
      "chapter": 10,
      "who": "이야기",
      "text": "당신이 그 여성을 다시 만나려고 하자 마왕이 나타난다.",
      "expression": "jealous",
      "next": "story-10-15"
    },
    "story-10-15": {
      "id": "story-10-15",
      "chapter": 10,
      "who": "마왕",
      "text": "“무슨 일이지?”",
      "expression": "jealous",
      "next": "story-10-16"
    },
    "story-10-16": {
      "id": "story-10-16",
      "chapter": 10,
      "who": "여성",
      "text": "“폐하, 저는 그냥—”",
      "expression": "jealous",
      "next": "story-10-17"
    },
    "story-10-17": {
      "id": "story-10-17",
      "chapter": 10,
      "who": "마왕",
      "text": "“끝났으면 가라.”",
      "expression": "jealous",
      "next": "story-10-18"
    },
    "story-10-18": {
      "id": "story-10-18",
      "chapter": 10,
      "who": "이야기",
      "text": "여성이 떠난다.",
      "expression": "jealous",
      "next": "story-10-19"
    },
    "story-10-19": {
      "id": "story-10-19",
      "chapter": 10,
      "who": "주인공",
      "text": "“마왕님.”",
      "expression": "jealous",
      "next": "story-10-20"
    },
    "story-10-20": {
      "id": "story-10-20",
      "chapter": 10,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "jealous",
      "next": "story-10-21"
    },
    "story-10-21": {
      "id": "story-10-21",
      "chapter": 10,
      "who": "주인공",
      "text": "“질투하세요?”",
      "expression": "jealous",
      "next": "story-10-22"
    },
    "story-10-22": {
      "id": "story-10-22",
      "chapter": 10,
      "who": "마왕",
      "text": "“……누가?”",
      "expression": "jealous",
      "next": "story-10-23"
    },
    "story-10-23": {
      "id": "story-10-23",
      "chapter": 10,
      "who": "주인공",
      "text": "“마왕님.”",
      "expression": "jealous",
      "next": "story-10-24"
    },
    "story-10-24": {
      "id": "story-10-24",
      "chapter": 10,
      "who": "마왕",
      "text": "“내가 왜 질투를 하지?”",
      "expression": "jealous",
      "next": "story-10-25"
    },
    "story-10-25": {
      "id": "story-10-25",
      "chapter": 10,
      "who": "주인공",
      "text": "“그럼 왜 방해했어요?”",
      "expression": "jealous",
      "next": "story-10-26"
    },
    "story-10-26": {
      "id": "story-10-26",
      "chapter": 10,
      "who": "마왕",
      "text": "“…….”",
      "expression": "jealous",
      "next": "story-choice-8"
    },
    "story-10-entry": {
      "id": "story-10-entry",
      "chapter": 10,
      "who": "이야기",
      "text": "",
      "next": "story-10-0",
      "gate": null
    },
    "story-branch-8-1-0": {
      "id": "story-branch-8-1-0",
      "chapter": 10,
      "who": "마왕",
      "text": "“아니다!”",
      "expression": "jealous",
      "next": "story-branch-8-1-1"
    },
    "story-branch-8-1-1": {
      "id": "story-branch-8-1-1",
      "chapter": 10,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-branch-8-1-2"
    },
    "story-branch-8-1-2": {
      "id": "story-branch-8-1-2",
      "chapter": 10,
      "who": "주인공",
      "text": "“그런데 얼굴은 빨간데요?”",
      "expression": "jealous",
      "next": "story-branch-8-1-3"
    },
    "story-branch-8-1-3": {
      "id": "story-branch-8-1-3",
      "chapter": 10,
      "who": "마왕",
      "text": "“시끄럽다!”",
      "expression": "flustered",
      "next": "story-11-entry"
    },
    "story-branch-8-2-0": {
      "id": "story-branch-8-2-0",
      "chapter": 10,
      "who": "마왕",
      "text": "“…….”",
      "expression": "jealous",
      "next": "story-branch-8-2-1"
    },
    "story-branch-8-2-1": {
      "id": "story-branch-8-2-1",
      "chapter": 10,
      "who": "마왕",
      "text": "“네가 다른 인간과 있는 게…… 마음에 들지 않았다.”",
      "expression": "jealous",
      "next": "story-branch-8-2-2"
    },
    "story-branch-8-2-2": {
      "id": "story-branch-8-2-2",
      "chapter": 10,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "jealous",
      "next": "story-branch-8-2-3"
    },
    "story-branch-8-2-3": {
      "id": "story-branch-8-2-3",
      "chapter": 10,
      "who": "마왕",
      "text": "“모른다.”",
      "expression": "jealous",
      "next": "story-11-entry"
    },
    "story-branch-8-3-0": {
      "id": "story-branch-8-3-0",
      "chapter": 10,
      "who": "마왕",
      "text": "“…….”",
      "expression": "jealous",
      "next": "story-branch-8-3-1"
    },
    "story-branch-8-3-1": {
      "id": "story-branch-8-3-1",
      "chapter": 10,
      "who": "이야기",
      "text": "마왕은 아무 말도 하지 못한다.",
      "expression": "jealous",
      "next": "story-branch-8-3-2"
    },
    "story-branch-8-3-2": {
      "id": "story-branch-8-3-2",
      "chapter": 10,
      "who": "이야기",
      "text": "한참 후.",
      "expression": "jealous",
      "next": "story-branch-8-3-3"
    },
    "story-branch-8-3-3": {
      "id": "story-branch-8-3-3",
      "chapter": 10,
      "who": "마왕",
      "text": "“……그 질문은 나중에 하자.”",
      "expression": "jealous",
      "next": "story-11-entry"
    },
    "story-branch-8-4-0": {
      "id": "story-branch-8-4-0",
      "chapter": 10,
      "who": "마왕",
      "text": "“……제일 편하다고?”",
      "expression": "jealous",
      "next": "story-branch-8-4-1"
    },
    "story-branch-8-4-1": {
      "id": "story-branch-8-4-1",
      "chapter": 10,
      "who": "주인공",
      "text": "“네.”",
      "expression": "jealous",
      "next": "story-branch-8-4-2"
    },
    "story-branch-8-4-2": {
      "id": "story-branch-8-4-2",
      "chapter": 10,
      "who": "이야기",
      "text": "마왕의 분노가 가라앉는다.",
      "expression": "jealous",
      "next": "story-branch-8-4-3"
    },
    "story-branch-8-4-3": {
      "id": "story-branch-8-4-3",
      "chapter": 10,
      "who": "마왕",
      "text": "“……그렇다면 됐다.”",
      "expression": "jealous",
      "next": "story-11-entry"
    },
    "story-choice-8": {
      "id": "story-choice-8",
      "chapter": 10,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“질투하셨네요.”",
          "next": "story-branch-8-1-0",
          "delta": 4,
          "trust": 0,
          "anger": 4,
          "flags": [],
          "tone": "playful"
        },
        {
          "label": "“그냥 제가 마음에 안 들었던 건가요?”",
          "next": "story-branch-8-2-0",
          "delta": 7,
          "trust": 0,
          "anger": 0,
          "flags": [
            "질투"
          ],
          "tone": "cautious"
        },
        {
          "label": "“혹시 저를 좋아하세요?”",
          "next": "story-branch-8-3-0",
          "delta": 10,
          "trust": 0,
          "anger": 0,
          "flags": [
            "사랑자각_전조"
          ],
          "tone": "direct"
        },
        {
          "label": "“괜찮아요. 저도 마왕님이 제일 편해요.”",
          "next": "story-branch-8-4-0",
          "delta": 12,
          "trust": 3,
          "anger": 0,
          "flags": [],
          "tone": "gentle"
        }
      ],
      "checkpoint": true,
      "expression": "jealous"
    },
    "story-11-0": {
      "id": "story-11-0",
      "chapter": 11,
      "who": "이야기",
      "text": "익숙한 복도에 분홍 꽃잎이 떨어졌다. 돌아갈 수 있다는 말은 기다리던 말이어야 했다. 그런데 당신은 선뜻 기뻐할 수 없었다.",
      "expression": "curious",
      "location": "castle",
      "next": "story-11-1"
    },
    "story-11-1": {
      "id": "story-11-1",
      "chapter": 11,
      "who": "이야기",
      "text": "어느 날 여신이 나타난다.",
      "expression": "indifferent",
      "effects": [
        [
          0,
          "flash"
        ],
        [
          160,
          "sparkle"
        ]
      ],
      "next": "story-11-2"
    },
    "story-11-2": {
      "id": "story-11-2",
      "chapter": 11,
      "who": "사랑의 여신",
      "text": "“이제 돌아갈 때가 되었네요.”",
      "expression": "indifferent",
      "next": "story-11-3"
    },
    "story-11-3": {
      "id": "story-11-3",
      "chapter": 11,
      "who": "주인공",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-11-4"
    },
    "story-11-4": {
      "id": "story-11-4",
      "chapter": 11,
      "who": "이야기",
      "text": "마왕은 아무 말도 하지 않는다.",
      "expression": "indifferent",
      "next": "story-11-5"
    },
    "story-11-5": {
      "id": "story-11-5",
      "chapter": 11,
      "who": "사랑의 여신",
      "text": "“당신의 임무는 충분히 진행되었습니다.”",
      "expression": "indifferent",
      "next": "story-11-6"
    },
    "story-11-6": {
      "id": "story-11-6",
      "chapter": 11,
      "who": "주인공",
      "text": "“마왕님.”",
      "expression": "indifferent",
      "next": "story-11-7"
    },
    "story-11-7": {
      "id": "story-11-7",
      "chapter": 11,
      "who": "마왕",
      "text": "“……가라.”",
      "expression": "indifferent",
      "next": "story-11-8"
    },
    "story-11-8": {
      "id": "story-11-8",
      "chapter": 11,
      "who": "주인공",
      "text": "“정말요?”",
      "expression": "indifferent",
      "next": "story-11-9"
    },
    "story-11-9": {
      "id": "story-11-9",
      "chapter": 11,
      "who": "마왕",
      "text": "“인간의 세계로 돌아가라.”",
      "expression": "indifferent",
      "next": "story-11-10"
    },
    "story-11-10": {
      "id": "story-11-10",
      "chapter": 11,
      "who": "사랑의 여신",
      "text": "“정말 괜찮겠어요?”",
      "expression": "indifferent",
      "next": "story-11-11"
    },
    "story-11-11": {
      "id": "story-11-11",
      "chapter": 11,
      "who": "마왕",
      "text": "“괜찮다.”",
      "expression": "indifferent",
      "next": "story-11-12"
    },
    "story-11-12": {
      "id": "story-11-12",
      "chapter": 11,
      "who": "이야기",
      "text": "당신은 마왕을 바라본다.",
      "expression": "indifferent",
      "next": "story-choice-9"
    },
    "story-11-entry": {
      "id": "story-11-entry",
      "chapter": 11,
      "who": "이야기",
      "text": "",
      "next": "story-11-0",
      "gate": null
    },
    "story-branch-9-1-0": {
      "id": "story-branch-9-1-0",
      "chapter": 11,
      "who": "주인공",
      "text": "“그럼 다녀올게요.”",
      "expression": "indifferent",
      "next": "story-branch-9-1-1"
    },
    "story-branch-9-1-1": {
      "id": "story-branch-9-1-1",
      "chapter": 11,
      "who": "마왕",
      "text": "“……그래.”",
      "expression": "indifferent",
      "next": "story-branch-9-1-2"
    },
    "story-branch-9-1-2": {
      "id": "story-branch-9-1-2",
      "chapter": 11,
      "who": "이야기",
      "text": "당신이 떠난다.",
      "expression": "indifferent",
      "next": "story-branch-9-1-3"
    },
    "story-branch-9-1-3": {
      "id": "story-branch-9-1-3",
      "chapter": 11,
      "who": "이야기",
      "text": "마왕은 혼자 남는다.",
      "expression": "indifferent",
      "next": "story-12-entry"
    },
    "story-branch-9-2-0": {
      "id": "story-branch-9-2-0",
      "chapter": 11,
      "who": "마왕",
      "text": "“……왜?”",
      "expression": "indifferent",
      "next": "story-branch-9-2-1"
    },
    "story-branch-9-2-1": {
      "id": "story-branch-9-2-1",
      "chapter": 11,
      "who": "주인공",
      "text": "“여기 있는 게 싫지 않아요.”",
      "expression": "indifferent",
      "next": "story-branch-9-2-2"
    },
    "story-branch-9-2-2": {
      "id": "story-branch-9-2-2",
      "chapter": 11,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-12-entry"
    },
    "story-branch-9-3-0": {
      "id": "story-branch-9-3-0",
      "chapter": 11,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-branch-9-3-1"
    },
    "story-branch-9-3-1": {
      "id": "story-branch-9-3-1",
      "chapter": 11,
      "who": "이야기",
      "text": "마왕은 한참 고민한다.",
      "expression": "indifferent",
      "next": "story-branch-9-3-2"
    },
    "story-branch-9-3-2": {
      "id": "story-branch-9-3-2",
      "chapter": 11,
      "who": "마왕",
      "text": "“……가지 마라.”",
      "expression": "indifferent",
      "next": "story-branch-9-3-3"
    },
    "story-branch-9-3-3": {
      "id": "story-branch-9-3-3",
      "chapter": 11,
      "who": "이야기",
      "text": "처음으로 마왕이 직접 붙잡는다.",
      "expression": "indifferent",
      "next": "story-12-entry"
    },
    "story-branch-9-4-0": {
      "id": "story-branch-9-4-0",
      "chapter": 11,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-branch-9-4-1"
    },
    "story-branch-9-4-1": {
      "id": "story-branch-9-4-1",
      "chapter": 11,
      "who": "이야기",
      "text": "오랜 침묵.",
      "expression": "indifferent",
      "next": "story-branch-9-4-2"
    },
    "story-branch-9-4-2": {
      "id": "story-branch-9-4-2",
      "chapter": 11,
      "who": "마왕",
      "text": "“……가지 않았으면 한다.”",
      "expression": "indifferent",
      "next": "story-branch-9-4-3"
    },
    "story-branch-9-4-3": {
      "id": "story-branch-9-4-3",
      "chapter": 11,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "indifferent",
      "next": "story-branch-9-4-4"
    },
    "story-branch-9-4-4": {
      "id": "story-branch-9-4-4",
      "chapter": 11,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "next": "story-branch-9-4-5"
    },
    "story-branch-9-4-5": {
      "id": "story-branch-9-4-5",
      "chapter": 11,
      "who": "마왕",
      "text": "“모르겠다.”",
      "expression": "indifferent",
      "next": "story-12-entry"
    },
    "story-choice-9": {
      "id": "story-choice-9",
      "chapter": 11,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“그럼 다녀올게요.”",
          "next": "story-branch-9-1-0",
          "delta": 0,
          "trust": 0,
          "anger": 0,
          "flags": [
            "이별"
          ],
          "tone": "cautious"
        },
        {
          "label": "“가기 싫은데요.”",
          "next": "story-branch-9-2-0",
          "delta": 8,
          "trust": 0,
          "anger": 0,
          "flags": [
            "이별_보류"
          ],
          "tone": "direct"
        },
        {
          "label": "“마왕님이 가지 말라고 하면 안 갈게요.”",
          "next": "story-branch-9-3-0",
          "delta": 15,
          "trust": 5,
          "anger": 0,
          "flags": [
            "마왕이붙잡음"
          ],
          "tone": "gentle"
        },
        {
          "label": "“……마왕님은 제가 가길 바라세요?”",
          "next": "story-branch-9-4-0",
          "delta": 15,
          "trust": 0,
          "anger": 0,
          "flags": [
            "사랑자각_가속"
          ],
          "tone": "gentle"
        }
      ],
      "checkpoint": true,
      "expression": "curious"
    },
    "story-12-0": {
      "id": "story-12-0",
      "chapter": 12,
      "who": "이야기",
      "text": "며칠간 인간 세계에서 지내기로 했다. 고향의 밤은 조용했다. 당신은 창가에 앉아 마왕성에서 쓰던 잔을 손안에서 굴렸다.",
      "expression": "curious",
      "location": "village",
      "next": "story-12-1",
      "reward": {
        "trust": 4,
        "flags": [
          "서로의시간"
        ]
      }
    },
    "story-12-1": {
      "id": "story-12-1",
      "chapter": 12,
      "who": "사랑의 여신",
      "text": "“궁금하죠? 당신이 없는 동안 그 사람이 어떻게 지내는지. 잠깐만 보여드릴게요.”",
      "effects": [
        [
          0,
          "sparkle"
        ]
      ],
      "next": "story-12-2"
    },
    "story-12-2": {
      "id": "story-12-2",
      "chapter": 12,
      "who": "이야기",
      "text": "손바닥 위 빛 속에 낯익은 식탁이 비쳤다. 당신은 숨을 죽였다. 그 너머의 목소리가, 멀리서 들려왔다.",
      "next": "story-12-3"
    },
    "story-12-3": {
      "id": "story-12-3",
      "chapter": 12,
      "who": "이야기",
      "text": "빛 속에 마왕성의 식탁이 나타났다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-4"
    },
    "story-12-4": {
      "id": "story-12-4",
      "chapter": 12,
      "who": "이야기",
      "text": "그녀는 늘 앉던 자리에 앉아 있었다. 맞은편 의자는 비어 있었다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-5"
    },
    "story-12-5": {
      "id": "story-12-5",
      "chapter": 12,
      "who": "이야기",
      "text": "그런데 손에 든 포크가 움직이지 않았다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-6"
    },
    "story-12-6": {
      "id": "story-12-6",
      "chapter": 12,
      "who": "이야기",
      "text": "음식을 한 입 맛본 그녀는 접시를 조금 밀어놓았다. 남은 음식이 천천히 식어갔다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-7"
    },
    "story-12-7": {
      "id": "story-12-7",
      "chapter": 12,
      "who": "이야기",
      "text": "빛 속 풍경이 서재로 바뀌었다. 한참을 지켜봐도 책장은 넘어가지 않았다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-8"
    },
    "story-12-8": {
      "id": "story-12-8",
      "chapter": 12,
      "who": "이야기",
      "text": "도시를 걷는 그녀가 옆으로 고개를 돌렸다. 당신이 함께 걷던 자리에는 아무도 없었다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-9"
    },
    "story-12-9": {
      "id": "story-12-9",
      "chapter": 12,
      "who": "부하",
      "text": "“폐하.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-10"
    },
    "story-12-10": {
      "id": "story-12-10",
      "chapter": 12,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-11"
    },
    "story-12-11": {
      "id": "story-12-11",
      "chapter": 12,
      "who": "부하",
      "text": "“오늘도 아무것도 안 드셨습니다.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-12"
    },
    "story-12-12": {
      "id": "story-12-12",
      "chapter": 12,
      "who": "마왕",
      "text": "“배가 안 고프다.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-13"
    },
    "story-12-13": {
      "id": "story-12-13",
      "chapter": 12,
      "who": "부하",
      "text": "“잠도 제대로 안 주무셨습니다.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-14"
    },
    "story-12-14": {
      "id": "story-12-14",
      "chapter": 12,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-15"
    },
    "story-12-15": {
      "id": "story-12-15",
      "chapter": 12,
      "who": "부하",
      "text": "“혹시 그 인간 때문입니까?”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-16"
    },
    "story-12-16": {
      "id": "story-12-16",
      "chapter": 12,
      "who": "마왕",
      "text": "“아니다.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-17"
    },
    "story-12-17": {
      "id": "story-12-17",
      "chapter": 12,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "remote": true,
      "next": "story-12-18"
    },
    "story-12-18": {
      "id": "story-12-18",
      "chapter": 12,
      "who": "부하",
      "text": "“아직 아무 말도 안 했는데요.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-19"
    },
    "story-12-19": {
      "id": "story-12-19",
      "chapter": 12,
      "who": "마왕",
      "text": "“…….”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-20"
    },
    "story-12-20": {
      "id": "story-12-20",
      "chapter": 12,
      "who": "이야기",
      "text": "빛 너머로 밤이 내려왔다. 마왕은 빈 의자에 손끝을 대고, 작은 목소리로 중얼거렸다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-21"
    },
    "story-12-21": {
      "id": "story-12-21",
      "chapter": 12,
      "who": "마왕",
      "text": "“……돌아오길 바라고 있다.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-22"
    },
    "story-12-22": {
      "id": "story-12-22",
      "chapter": 12,
      "who": "이야기",
      "text": "침묵.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-23"
    },
    "story-12-23": {
      "id": "story-12-23",
      "chapter": 12,
      "who": "마왕",
      "text": "“왜?”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-24"
    },
    "story-12-24": {
      "id": "story-12-24",
      "chapter": 12,
      "who": "이야기",
      "text": "그녀는 질문을 던지고도 아무에게도 눈길을 주지 않았다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-25"
    },
    "story-12-25": {
      "id": "story-12-25",
      "chapter": 12,
      "who": "마왕",
      "text": "“왜 저 인간이 없으니까 이렇게…….”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-26"
    },
    "story-12-26": {
      "id": "story-12-26",
      "chapter": 12,
      "who": "이야기",
      "text": "오랫동안 닫혀 있던 입술이, 아주 조금 움직였다.",
      "expression": "indifferent",
      "remote": true,
      "next": "story-12-27"
    },
    "story-12-27": {
      "id": "story-12-27",
      "chapter": 12,
      "who": "마왕",
      "text": "“……보고 싶다.”",
      "expression": "indifferent",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "remote": true,
      "next": "story-12-28"
    },
    "story-12-28": {
      "id": "story-12-28",
      "chapter": 12,
      "who": "이야기",
      "text": "마왕의 얼굴이 새빨개진다.",
      "expression": "shy",
      "remote": true,
      "next": "story-12-29"
    },
    "story-12-29": {
      "id": "story-12-29",
      "chapter": 12,
      "who": "마왕",
      "text": "“……말도 안 돼.”",
      "expression": "indifferent",
      "remote": true,
      "next": "story-13-entry",
      "reward": {
        "flags": [
          "사랑자각"
        ]
      }
    },
    "story-12-entry": {
      "id": "story-12-entry",
      "chapter": 12,
      "who": "이야기",
      "text": "",
      "next": "story-12-0",
      "gate": null,
      "reward": {
        "flags": [
          "사랑자각"
        ]
      }
    },
    "story-13-0": {
      "id": "story-13-0",
      "chapter": 13,
      "who": "이야기",
      "text": "마계의 공기는 여전히 차가웠다. 하지만 이번에는, 성문 앞에서 당신을 기다리는 사람이 있었다.",
      "expression": "shy",
      "location": "castle",
      "next": "story-13-1",
      "reward": {
        "trust": 6,
        "flags": [
          "귀환약속"
        ]
      }
    },
    "story-13-1": {
      "id": "story-13-1",
      "chapter": 13,
      "who": "이야기",
      "text": "당신이 마계로 돌아온다.",
      "expression": "shy",
      "next": "story-13-2"
    },
    "story-13-2": {
      "id": "story-13-2",
      "chapter": 13,
      "who": "이야기",
      "text": "마왕은 최대한 태연한 표정을 짓는다.",
      "expression": "shy",
      "next": "story-13-3"
    },
    "story-13-3": {
      "id": "story-13-3",
      "chapter": 13,
      "who": "마왕",
      "text": "“……왜 왔지?”",
      "expression": "shy",
      "next": "story-13-4"
    },
    "story-13-4": {
      "id": "story-13-4",
      "chapter": 13,
      "who": "주인공",
      "text": "“보고 싶어서요.”",
      "expression": "shy",
      "next": "story-13-5"
    },
    "story-13-5": {
      "id": "story-13-5",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-13-6"
    },
    "story-13-6": {
      "id": "story-13-6",
      "chapter": 13,
      "who": "이야기",
      "text": "마왕의 얼굴이 빨개진다.",
      "expression": "shy",
      "next": "story-13-7"
    },
    "story-13-7": {
      "id": "story-13-7",
      "chapter": 13,
      "who": "주인공",
      "text": "“왜 그래요?”",
      "expression": "shy",
      "next": "story-13-8"
    },
    "story-13-8": {
      "id": "story-13-8",
      "chapter": 13,
      "who": "마왕",
      "text": "“그런 말을 아무렇지도 않게 하지 마라.”",
      "expression": "shy",
      "next": "story-13-9"
    },
    "story-13-9": {
      "id": "story-13-9",
      "chapter": 13,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "shy",
      "next": "story-13-10"
    },
    "story-13-10": {
      "id": "story-13-10",
      "chapter": 13,
      "who": "마왕",
      "text": "“……화나니까.”",
      "expression": "shy",
      "next": "story-13-11"
    },
    "story-13-11": {
      "id": "story-13-11",
      "chapter": 13,
      "who": "이야기",
      "text": "하지만 빠직 표시는 없다.",
      "expression": "shy",
      "next": "story-13-12"
    },
    "story-13-12": {
      "id": "story-13-12",
      "chapter": 13,
      "who": "주인공",
      "text": "“마왕님.”",
      "expression": "shy",
      "next": "story-13-13"
    },
    "story-13-13": {
      "id": "story-13-13",
      "chapter": 13,
      "who": "마왕",
      "text": "“뭐지?”",
      "expression": "shy",
      "next": "story-13-14"
    },
    "story-13-14": {
      "id": "story-13-14",
      "chapter": 13,
      "who": "주인공",
      "text": "“저 보고 싶었죠?”",
      "expression": "shy",
      "next": "story-13-15"
    },
    "story-13-15": {
      "id": "story-13-15",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-choice-10"
    },
    "story-13-entry": {
      "id": "story-13-entry",
      "chapter": 13,
      "who": "이야기",
      "text": "",
      "next": "story-13-0",
      "gate": null
    },
    "story-branch-10-1-0": {
      "id": "story-branch-10-1-0",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-10-1-1"
    },
    "story-branch-10-1-1": {
      "id": "story-branch-10-1-1",
      "chapter": 13,
      "who": "마왕",
      "text": "“그래.”",
      "expression": "shy",
      "next": "story-branch-10-1-2"
    },
    "story-branch-10-1-2": {
      "id": "story-branch-10-1-2",
      "chapter": 13,
      "who": "이야기",
      "text": "짧은 대답.",
      "expression": "shy",
      "next": "story-branch-10-1-3"
    },
    "story-branch-10-1-3": {
      "id": "story-branch-10-1-3",
      "chapter": 13,
      "who": "이야기",
      "text": "하지만 마왕은 고개를 돌린다.",
      "expression": "shy",
      "next": "story-14-entry"
    },
    "story-branch-10-2-0": {
      "id": "story-branch-10-2-0",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-10-2-1"
    },
    "story-branch-10-2-1": {
      "id": "story-branch-10-2-1",
      "chapter": 13,
      "who": "마왕",
      "text": "“너는 정말 건방지군.”",
      "expression": "flustered",
      "next": "story-branch-10-2-2"
    },
    "story-branch-10-2-2": {
      "id": "story-branch-10-2-2",
      "chapter": 13,
      "who": "이야기",
      "text": "하지만 화내지 않는다.",
      "expression": "shy",
      "next": "story-14-entry"
    },
    "story-branch-10-3-0": {
      "id": "story-branch-10-3-0",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-10-3-1"
    },
    "story-branch-10-3-1": {
      "id": "story-branch-10-3-1",
      "chapter": 13,
      "who": "이야기",
      "text": "마왕은 당신을 바라본다.",
      "expression": "shy",
      "next": "story-branch-10-3-2"
    },
    "story-branch-10-3-2": {
      "id": "story-branch-10-3-2",
      "chapter": 13,
      "who": "마왕",
      "text": "“……다시는 그렇게 오래 떠나지 마라.”",
      "expression": "shy",
      "next": "story-14-entry"
    },
    "story-branch-10-4-0": {
      "id": "story-branch-10-4-0",
      "chapter": 13,
      "who": "마왕",
      "text": "“심심해서가 아니다.”",
      "expression": "shy",
      "next": "story-branch-10-4-1"
    },
    "story-branch-10-4-1": {
      "id": "story-branch-10-4-1",
      "chapter": 13,
      "who": "주인공",
      "text": "“그럼요?”",
      "expression": "shy",
      "next": "story-branch-10-4-2"
    },
    "story-branch-10-4-2": {
      "id": "story-branch-10-4-2",
      "chapter": 13,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-10-4-3"
    },
    "story-branch-10-4-3": {
      "id": "story-branch-10-4-3",
      "chapter": 13,
      "who": "마왕",
      "text": "“네가 없어서 싫었다.”",
      "expression": "shy",
      "next": "story-14-entry"
    },
    "story-choice-10": {
      "id": "story-choice-10",
      "chapter": 13,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“맞죠?”",
          "next": "story-branch-10-1-0",
          "delta": 8,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "direct"
        },
        {
          "label": "“대답 안 해도 알아요.”",
          "next": "story-branch-10-2-0",
          "delta": 5,
          "trust": 0,
          "anger": 0,
          "flags": [],
          "tone": "gentle"
        },
        {
          "label": "“저도 보고 싶었어요.”",
          "next": "story-branch-10-3-0",
          "delta": 12,
          "trust": 0,
          "anger": 0,
          "flags": [
            "서로의마음"
          ],
          "tone": "gentle"
        },
        {
          "label": "“역시 제가 없으니까 심심했죠?”",
          "next": "story-branch-10-4-0",
          "delta": 15,
          "trust": 0,
          "anger": 0,
          "flags": [
            "서로의마음"
          ],
          "tone": "playful"
        }
      ],
      "checkpoint": true,
      "expression": "shy"
    },
    "story-14-0": {
      "id": "story-14-0",
      "chapter": 14,
      "who": "이야기",
      "text": "당신은 처음 만났던 테라스로 올라갔다. 같은 난간, 같은 하늘이었다. 이번에는 방패를 움켜쥐지 않아도 되었다.",
      "expression": "shy",
      "location": "balcony",
      "next": "story-14-1"
    },
    "story-14-1": {
      "id": "story-14-1",
      "chapter": 14,
      "who": "이야기",
      "text": "마왕은 당신을 마왕성의 높은 곳으로 부른다.",
      "expression": "shy",
      "next": "story-14-2"
    },
    "story-14-2": {
      "id": "story-14-2",
      "chapter": 14,
      "who": "마왕",
      "text": "“오늘은 할 말이 있다.”",
      "expression": "shy",
      "next": "story-14-3"
    },
    "story-14-3": {
      "id": "story-14-3",
      "chapter": 14,
      "who": "주인공",
      "text": "“무슨 일인데요?”",
      "expression": "shy",
      "next": "story-14-4"
    },
    "story-14-4": {
      "id": "story-14-4",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-14-5"
    },
    "story-14-5": {
      "id": "story-14-5",
      "chapter": 14,
      "who": "이야기",
      "text": "한참 동안 말을 못 한다.",
      "expression": "shy",
      "next": "story-14-6"
    },
    "story-14-6": {
      "id": "story-14-6",
      "chapter": 14,
      "who": "주인공",
      "text": "“마왕님?”",
      "expression": "shy",
      "next": "story-14-7"
    },
    "story-14-7": {
      "id": "story-14-7",
      "chapter": 14,
      "who": "마왕",
      "text": "“처음에는 네가 용사인 줄 알았다.”",
      "expression": "shy",
      "next": "story-14-8"
    },
    "story-14-8": {
      "id": "story-14-8",
      "chapter": 14,
      "who": "주인공",
      "text": "“알고 있습니다.”",
      "expression": "shy",
      "next": "story-14-9"
    },
    "story-14-9": {
      "id": "story-14-9",
      "chapter": 14,
      "who": "마왕",
      "text": "“그래서 죽였다.”",
      "expression": "shy",
      "next": "story-14-10"
    },
    "story-14-10": {
      "id": "story-14-10",
      "chapter": 14,
      "who": "주인공",
      "text": "“그것도 알고 있습니다.”",
      "expression": "shy",
      "next": "story-14-11"
    },
    "story-14-11": {
      "id": "story-14-11",
      "chapter": 14,
      "who": "마왕",
      "text": "“몇 번이나.”",
      "expression": "shy",
      "next": "story-14-12"
    },
    "story-14-12": {
      "id": "story-14-12",
      "chapter": 14,
      "who": "마왕",
      "text": "“그것도…….”",
      "expression": "shy",
      "next": "story-14-13"
    },
    "story-14-13": {
      "id": "story-14-13",
      "chapter": 14,
      "who": "마왕",
      "text": "“그런데도 너는 나를 떠나지 않았다.”",
      "expression": "shy",
      "next": "story-14-14"
    },
    "story-14-14": {
      "id": "story-14-14",
      "chapter": 14,
      "who": "주인공",
      "text": "“마왕님이 죽이지 않았으니까요.”",
      "expression": "shy",
      "next": "story-14-15"
    },
    "story-14-15": {
      "id": "story-14-15",
      "chapter": 14,
      "who": "마왕",
      "text": "“그게 전부인가?”",
      "expression": "shy",
      "next": "story-14-16"
    },
    "story-14-16": {
      "id": "story-14-16",
      "chapter": 14,
      "who": "주인공",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-14-17"
    },
    "story-14-17": {
      "id": "story-14-17",
      "chapter": 14,
      "who": "마왕",
      "text": "“나는 네가 이상했다.”",
      "expression": "shy",
      "next": "story-14-18"
    },
    "story-14-18": {
      "id": "story-14-18",
      "chapter": 14,
      "who": "마왕",
      "text": "“계속 죽어도 나에게 말을 걸었고.”",
      "expression": "shy",
      "next": "story-14-19"
    },
    "story-14-19": {
      "id": "story-14-19",
      "chapter": 14,
      "who": "마왕",
      "text": "“내가 화를 내도 도망가지 않았고.”",
      "expression": "shy",
      "next": "story-14-20"
    },
    "story-14-20": {
      "id": "story-14-20",
      "chapter": 14,
      "who": "마왕",
      "text": "“내가 힘들어할 때 옆에 있었고.”",
      "expression": "shy",
      "next": "story-14-21"
    },
    "story-14-21": {
      "id": "story-14-21",
      "chapter": 14,
      "who": "마왕",
      "text": "“다른 인간과는 달랐다.”",
      "expression": "shy",
      "next": "story-14-22"
    },
    "story-14-22": {
      "id": "story-14-22",
      "chapter": 14,
      "who": "이야기",
      "text": "마왕이 당신을 바라본다.",
      "expression": "shy",
      "next": "story-14-23"
    },
    "story-14-23": {
      "id": "story-14-23",
      "chapter": 14,
      "who": "마왕",
      "text": "“그리고 네가 없어진 뒤…….”",
      "expression": "shy",
      "next": "story-14-24"
    },
    "story-14-24": {
      "id": "story-14-24",
      "chapter": 14,
      "who": "이야기",
      "text": "잠시 침묵.",
      "expression": "shy",
      "next": "story-14-25"
    },
    "story-14-25": {
      "id": "story-14-25",
      "chapter": 14,
      "who": "마왕",
      "text": "“알았다.”",
      "expression": "shy",
      "next": "story-14-26"
    },
    "story-14-26": {
      "id": "story-14-26",
      "chapter": 14,
      "who": "주인공",
      "text": "“뭘요?”",
      "expression": "shy",
      "next": "story-14-27"
    },
    "story-14-27": {
      "id": "story-14-27",
      "chapter": 14,
      "who": "마왕",
      "text": "“네가 필요하다는 걸.”",
      "expression": "shy",
      "next": "story-14-28"
    },
    "story-14-28": {
      "id": "story-14-28",
      "chapter": 14,
      "who": "이야기",
      "text": "마왕이 얼굴을 붉힌다.",
      "expression": "shy",
      "next": "story-14-29"
    },
    "story-14-29": {
      "id": "story-14-29",
      "chapter": 14,
      "who": "마왕",
      "text": "“……좋아한다.”",
      "expression": "shy",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "next": "story-14-30"
    },
    "story-14-30": {
      "id": "story-14-30",
      "chapter": 14,
      "who": "주인공",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-14-31"
    },
    "story-14-31": {
      "id": "story-14-31",
      "chapter": 14,
      "who": "마왕",
      "text": "“왜 아무 말도 하지 않는 거지?”",
      "expression": "shy",
      "next": "story-choice-11"
    },
    "story-14-entry": {
      "id": "story-14-entry",
      "chapter": 14,
      "who": "이야기",
      "text": "",
      "next": "story-14-0",
      "gate": "confession"
    },
    "story-branch-11-1-0": {
      "id": "story-branch-11-1-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-1-1"
    },
    "story-branch-11-1-1": {
      "id": "story-branch-11-1-1",
      "chapter": 14,
      "who": "이야기",
      "text": "마왕의 얼굴이 새빨개진다.",
      "expression": "shy",
      "next": "story-branch-11-1-2"
    },
    "story-branch-11-1-2": {
      "id": "story-branch-11-1-2",
      "chapter": 14,
      "who": "마왕",
      "text": "“……그럼 됐다.”",
      "expression": "shy",
      "next": "story-branch-11-1-3"
    },
    "story-branch-11-1-3": {
      "id": "story-branch-11-1-3",
      "chapter": 14,
      "who": "주인공",
      "text": "“그게 끝이에요?”",
      "expression": "shy",
      "next": "story-branch-11-1-4"
    },
    "story-branch-11-1-4": {
      "id": "story-branch-11-1-4",
      "chapter": 14,
      "who": "마왕",
      "text": "“더 말하면 부끄러우니까 안 된다.”",
      "expression": "shy",
      "next": "story-15-entry"
    },
    "story-branch-11-2-0": {
      "id": "story-branch-11-2-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“뭐가 이상하지?”",
      "expression": "shy",
      "next": "story-branch-11-2-1"
    },
    "story-branch-11-2-1": {
      "id": "story-branch-11-2-1",
      "chapter": 14,
      "who": "주인공",
      "text": "“처음에는 저 죽이려고 하셨잖아요.”",
      "expression": "shy",
      "next": "story-branch-11-2-2"
    },
    "story-branch-11-2-2": {
      "id": "story-branch-11-2-2",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-2-3"
    },
    "story-branch-11-2-3": {
      "id": "story-branch-11-2-3",
      "chapter": 14,
      "who": "마왕",
      "text": "“그때의 나와 지금의 나는 다르다.”",
      "expression": "shy",
      "next": "story-15-entry"
    },
    "story-branch-11-3-0": {
      "id": "story-branch-11-3-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-3-1"
    },
    "story-branch-11-3-1": {
      "id": "story-branch-11-3-1",
      "chapter": 14,
      "who": "주인공",
      "text": "“사랑의 힘.”",
      "expression": "shy",
      "next": "story-branch-11-3-2"
    },
    "story-branch-11-3-2": {
      "id": "story-branch-11-3-2",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-3-3"
    },
    "story-branch-11-3-3": {
      "id": "story-branch-11-3-3",
      "chapter": 14,
      "who": "주인공",
      "text": "“이제 인정하시죠?”",
      "expression": "shy",
      "next": "story-branch-11-3-4"
    },
    "story-branch-11-3-4": {
      "id": "story-branch-11-3-4",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-3-5"
    },
    "story-branch-11-3-5": {
      "id": "story-branch-11-3-5",
      "chapter": 14,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-branch-11-3-6"
    },
    "story-branch-11-3-6": {
      "id": "story-branch-11-3-6",
      "chapter": 14,
      "who": "마왕",
      "text": "“그 이야기는 하지 말라고 했을 텐데.”",
      "expression": "shy",
      "next": "story-branch-11-3-7"
    },
    "story-branch-11-3-7": {
      "id": "story-branch-11-3-7",
      "chapter": 14,
      "who": "주인공",
      "text": "“하하.”",
      "expression": "shy",
      "next": "story-branch-11-3-8"
    },
    "story-branch-11-3-8": {
      "id": "story-branch-11-3-8",
      "chapter": 14,
      "who": "마왕",
      "text": "“……그래도.”",
      "expression": "shy",
      "next": "story-branch-11-3-9"
    },
    "story-branch-11-3-9": {
      "id": "story-branch-11-3-9",
      "chapter": 14,
      "who": "이야기",
      "text": "마왕이 작게 웃는다.",
      "expression": "shy",
      "next": "story-branch-11-3-10"
    },
    "story-branch-11-3-10": {
      "id": "story-branch-11-3-10",
      "chapter": 14,
      "who": "마왕",
      "text": "“이제는 싫지 않다.”",
      "expression": "shy",
      "next": "story-15-entry"
    },
    "story-branch-11-4-0": {
      "id": "story-branch-11-4-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“싫다.”",
      "expression": "shy",
      "next": "story-branch-11-4-1"
    },
    "story-branch-11-4-1": {
      "id": "story-branch-11-4-1",
      "chapter": 14,
      "who": "주인공",
      "text": "“한 번만.”",
      "expression": "shy",
      "next": "story-branch-11-4-2"
    },
    "story-branch-11-4-2": {
      "id": "story-branch-11-4-2",
      "chapter": 14,
      "who": "마왕",
      "text": "“……좋아한다.”",
      "expression": "shy",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "next": "story-branch-11-4-3"
    },
    "story-branch-11-4-3": {
      "id": "story-branch-11-4-3",
      "chapter": 14,
      "who": "주인공",
      "text": "“한 번 더.”",
      "expression": "shy",
      "next": "story-branch-11-4-4"
    },
    "story-branch-11-4-4": {
      "id": "story-branch-11-4-4",
      "chapter": 14,
      "who": "마왕",
      "text": "“죽인다.”",
      "expression": "shy",
      "next": "story-branch-11-4-5"
    },
    "story-branch-11-4-5": {
      "id": "story-branch-11-4-5",
      "chapter": 14,
      "who": "주인공",
      "text": "“하하.”",
      "expression": "shy",
      "next": "story-branch-11-4-6"
    },
    "story-branch-11-4-6": {
      "id": "story-branch-11-4-6",
      "chapter": 14,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-branch-11-4-7"
    },
    "story-branch-11-4-7": {
      "id": "story-branch-11-4-7",
      "chapter": 14,
      "who": "이야기",
      "text": "하지만 마왕 역시 웃고 있다.",
      "expression": "shy",
      "next": "story-15-entry"
    },
    "story-choice-11": {
      "id": "story-choice-11",
      "chapter": 14,
      "who": "주인공",
      "text": "당신은 잠시 말을 골랐다.",
      "choices": [
        {
          "label": "“저도 좋아합니다.”",
          "next": "story-branch-11-1-0",
          "delta": 15,
          "trust": 0,
          "anger": 0,
          "flags": [
            "고백성공"
          ],
          "tone": "gentle"
        },
        {
          "label": "“마왕님이 먼저 고백하니까 이상하네요.”",
          "next": "story-branch-11-2-0",
          "delta": 10,
          "trust": 0,
          "anger": 0,
          "flags": [
            "고백성공"
          ],
          "tone": "cautious"
        },
        {
          "label": "“그럼 이제 사랑의 힘 인정하시나요?”",
          "next": "story-branch-11-3-0",
          "delta": 15,
          "trust": 0,
          "anger": 0,
          "flags": [
            "사랑의힘_화해",
            "고백성공"
          ],
          "tone": "playful"
        },
        {
          "label": "“한 번 더 말해주세요.”",
          "next": "story-branch-11-4-0",
          "delta": 12,
          "trust": 0,
          "anger": 0,
          "flags": [
            "고백성공"
          ],
          "tone": "playful"
        }
      ],
      "checkpoint": true,
      "expression": "shy"
    },
    "story-15-0": {
      "id": "story-15-0",
      "chapter": 15,
      "who": "이야기",
      "text": "소식은 국경을 넘어 퍼졌다. 축하보다 의심이 먼저 도착했지만, 서로의 말을 들으러 찾아오는 사절도 생겼다. 평화는 아직 완성되지 않았다.",
      "expression": "shy",
      "location": "castle",
      "next": "story-15-1"
    },
    "story-15-1": {
      "id": "story-15-1",
      "chapter": 15,
      "who": "이야기",
      "text": "마왕과 당신의 관계가 알려진다.",
      "expression": "shy",
      "next": "story-15-2"
    },
    "story-15-2": {
      "id": "story-15-2",
      "chapter": 15,
      "who": "이야기",
      "text": "인간과 마족 사이에는 여전히 갈등이 남아 있다.",
      "expression": "shy",
      "next": "story-15-3"
    },
    "story-15-3": {
      "id": "story-15-3",
      "chapter": 15,
      "who": "이야기",
      "text": "그러나 두 사람의 관계는 상징이 된다.",
      "expression": "shy",
      "next": "story-15-4"
    },
    "story-15-4": {
      "id": "story-15-4",
      "chapter": 15,
      "who": "이야기",
      "text": "여신이 다시 나타난다.",
      "expression": "shy",
      "effects": [
        [
          0,
          "flash"
        ],
        [
          160,
          "sparkle"
        ]
      ],
      "next": "story-15-5"
    },
    "story-15-5": {
      "id": "story-15-5",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“드디어 여기까지 왔네요.”",
      "expression": "shy",
      "next": "story-15-6"
    },
    "story-15-6": {
      "id": "story-15-6",
      "chapter": 15,
      "who": "주인공",
      "text": "“여신님이 처음부터 이걸 계획한 겁니까?”",
      "expression": "shy",
      "next": "story-15-7"
    },
    "story-15-7": {
      "id": "story-15-7",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“후후.”",
      "expression": "shy",
      "next": "story-15-8"
    },
    "story-15-8": {
      "id": "story-15-8",
      "chapter": 15,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-15-9"
    },
    "story-15-9": {
      "id": "story-15-9",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“왜 그렇게 노려보세요?”",
      "expression": "shy",
      "next": "story-15-10"
    },
    "story-15-10": {
      "id": "story-15-10",
      "chapter": 15,
      "who": "마왕",
      "text": "“네가 이 인간을 보낸 것이지?”",
      "expression": "shy",
      "next": "story-15-11"
    },
    "story-15-11": {
      "id": "story-15-11",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“맞아요.”",
      "expression": "shy",
      "next": "story-15-12"
    },
    "story-15-12": {
      "id": "story-15-12",
      "chapter": 15,
      "who": "마왕",
      "text": "“그리고 이 인간에게 사랑의 힘을 줬고?”",
      "expression": "shy",
      "next": "story-15-13"
    },
    "story-15-13": {
      "id": "story-15-13",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“맞아요.”",
      "expression": "shy",
      "next": "story-15-14"
    },
    "story-15-14": {
      "id": "story-15-14",
      "chapter": 15,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-15-15"
    },
    "story-15-15": {
      "id": "story-15-15",
      "chapter": 15,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-15-16"
    },
    "story-15-16": {
      "id": "story-15-16",
      "chapter": 15,
      "who": "주인공",
      "text": "“또 화났는데요?”",
      "expression": "shy",
      "next": "story-15-17"
    },
    "story-15-17": {
      "id": "story-15-17",
      "chapter": 15,
      "who": "마왕",
      "text": "“……이번에는 아니다.”",
      "expression": "shy",
      "next": "story-15-18"
    },
    "story-15-18": {
      "id": "story-15-18",
      "chapter": 15,
      "who": "이야기",
      "text": "마왕이 당신의 손을 잡는다.",
      "expression": "shy",
      "next": "story-15-19"
    },
    "story-15-19": {
      "id": "story-15-19",
      "chapter": 15,
      "who": "마왕",
      "text": "“덕분에 이 인간을 만났으니까.”",
      "expression": "shy",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "next": "story-15-20"
    },
    "story-15-20": {
      "id": "story-15-20",
      "chapter": 15,
      "who": "사랑의 여신",
      "text": "“그럼 결혼식은—”",
      "expression": "shy",
      "next": "story-15-21"
    },
    "story-15-21": {
      "id": "story-15-21",
      "chapter": 15,
      "who": "마왕",
      "text": "“잠깐.”",
      "expression": "shy",
      "next": "story-15-22"
    },
    "story-15-22": {
      "id": "story-15-22",
      "chapter": 15,
      "who": "주인공",
      "text": "“왜요?”",
      "expression": "shy",
      "next": "story-15-23"
    },
    "story-15-23": {
      "id": "story-15-23",
      "chapter": 15,
      "who": "마왕",
      "text": "“인간들은 결혼할 때 무엇을 하지?”",
      "expression": "shy",
      "next": "story-15-24"
    },
    "story-15-24": {
      "id": "story-15-24",
      "chapter": 15,
      "who": "주인공",
      "text": "“반지를 교환하죠.”",
      "expression": "shy",
      "next": "story-15-25"
    },
    "story-15-25": {
      "id": "story-15-25",
      "chapter": 15,
      "who": "마왕",
      "text": "“그럼 반지를 준비해라.”",
      "expression": "shy",
      "next": "story-15-26"
    },
    "story-15-26": {
      "id": "story-15-26",
      "chapter": 15,
      "who": "주인공",
      "text": "“제가요?”",
      "expression": "shy",
      "next": "story-15-27"
    },
    "story-15-27": {
      "id": "story-15-27",
      "chapter": 15,
      "who": "마왕",
      "text": "“네가 나와 결혼할 거니까.”",
      "expression": "shy",
      "next": "story-15-28"
    },
    "story-15-28": {
      "id": "story-15-28",
      "chapter": 15,
      "who": "주인공",
      "text": "“제가 언제 결혼한다고 했는데요?”",
      "expression": "shy",
      "next": "story-15-29"
    },
    "story-15-29": {
      "id": "story-15-29",
      "chapter": 15,
      "who": "이야기",
      "text": "마왕의 표정이 굳는다.",
      "expression": "shy",
      "next": "story-15-30"
    },
    "story-15-30": {
      "id": "story-15-30",
      "chapter": 15,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-15-31"
    },
    "story-15-31": {
      "id": "story-15-31",
      "chapter": 15,
      "who": "이야기",
      "text": "말은 거칠었지만, 그녀는 시선을 피하고 있었다.",
      "expression": "flustered",
      "effects": [],
      "next": "story-15-32"
    },
    "story-15-32": {
      "id": "story-15-32",
      "chapter": 15,
      "who": "주인공",
      "text": "“……농담입니다.”",
      "expression": "flustered",
      "next": "story-15-33"
    },
    "story-15-33": {
      "id": "story-15-33",
      "chapter": 15,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-15-34"
    },
    "story-15-34": {
      "id": "story-15-34",
      "chapter": 15,
      "who": "주인공",
      "text": "“사랑의 힘?”",
      "expression": "shy",
      "next": "story-15-35"
    },
    "story-15-35": {
      "id": "story-15-35",
      "chapter": 15,
      "who": "마왕",
      "text": "“…….”",
      "expression": "shy",
      "next": "story-15-36"
    },
    "story-15-36": {
      "id": "story-15-36",
      "chapter": 15,
      "who": "주인공",
      "text": "“이번에는 안 죽이시네요?”",
      "expression": "shy",
      "next": "story-15-37"
    },
    "story-15-37": {
      "id": "story-15-37",
      "chapter": 15,
      "who": "마왕",
      "text": "“……이제는 네가 죽는 게 싫으니까.”",
      "expression": "shy",
      "next": "story-15-38"
    },
    "story-15-38": {
      "id": "story-15-38",
      "chapter": 15,
      "who": "이야기",
      "text": "마왕이 손을 내민다.",
      "expression": "shy",
      "next": "story-15-39"
    },
    "story-15-39": {
      "id": "story-15-39",
      "chapter": 15,
      "who": "마왕",
      "text": "“그러니까.”",
      "expression": "shy",
      "next": "story-15-40"
    },
    "story-15-40": {
      "id": "story-15-40",
      "chapter": 15,
      "who": "마왕",
      "text": "“내 옆에 있어라.”",
      "expression": "shy",
      "next": "story-15-41"
    },
    "story-15-41": {
      "id": "story-15-41",
      "chapter": 15,
      "who": "이야기",
      "text": "당신이 손을 잡는다.",
      "expression": "shy",
      "next": "marriage-gate",
      "reward": {}
    },
    "story-15-entry": {
      "id": "story-15-entry",
      "chapter": 15,
      "who": "이야기",
      "text": "",
      "next": "story-15-0",
      "gate": null
    },
    "gift-closed-0": {
      "id": "gift-closed-0",
      "chapter": 9,
      "who": "이야기",
      "text": "그날, 당신의 방문을 두드리는 사람은 없었다. 식사 때 마왕은 필요한 것만 짧게 물었다. 선물에 관해 했던 말은 아직 그녀에게 닿지 않은 모양이었다.",
      "expression": "indifferent",
      "next": "story-10-entry"
    },
    "friend-ending-0": {
      "id": "friend-ending-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“너는 이제 침입자가 아니다. 이 성에 네 자리를 남겨두겠다.”",
      "expression": "curious",
      "next": "friend-ending-1"
    },
    "friend-ending-1": {
      "id": "friend-ending-1",
      "chapter": 14,
      "who": "이야기",
      "text": "좋아한다는 말까지는 닿지 못했다. 그래도 두 종족 사이에, 다시 찾아갈 수 있는 문이 하나 생겼다.",
      "next": "end-friend"
    },
    "distance-ending-0": {
      "id": "distance-ending-0",
      "chapter": 14,
      "who": "마왕",
      "text": "“아직 인간을 믿을 수는 없다. 그래도 네가 한 일까지 부정하지는 않겠다.”",
      "expression": "gloomy",
      "next": "distance-ending-1"
    },
    "distance-ending-1": {
      "id": "distance-ending-1",
      "chapter": 14,
      "who": "이야기",
      "text": "당신은 국경으로 돌아왔다. 마지막까지 마왕은 공격하지 않았다. 두 사람의 이야기는 아직 평화가 될 만큼 가까워지지 못했다.",
      "next": "end-distance"
    },
    "end-friend": {
      "id": "end-friend",
      "chapter": 15,
      "who": "FRIEND END",
      "text": "국경 너머의 친구\n\n사랑에 이르지는 못했지만, 돌아갈 자리가 생겼습니다.",
      "end": true,
      "ending": "end-friend"
    },
    "end-distance": {
      "id": "end-distance",
      "chapter": 15,
      "who": "NORMAL END",
      "text": "열리지 않은 마음\n\n더 깊은 신뢰를 쌓을 기회가 필요했습니다.",
      "end": true,
      "ending": "end-distance"
    },
    "end-promise": {
      "id": "end-promise",
      "chapter": 15,
      "who": "PROMISE END",
      "text": "아직 끝나지 않은 약속\n\n마음을 확인한 두 사람은 결혼보다 먼저, 함께 살아갈 시간을 선택했습니다.",
      "end": true,
      "ending": "end-promise"
    },
    "marriage-gate": {
      "id": "marriage-gate",
      "chapter": 15,
      "who": "이야기",
      "text": "",
      "next": "proposal",
      "gate": "marriage"
    },
    "proposal": {
      "id": "proposal",
      "chapter": 15,
      "who": "이야기",
      "text": "마왕이 내민 손을 잡았다. 당신이 준비한 반지가 손바닥 안에서 작게 빛났다.",
      "expression": "shy",
      "effects": [
        [
          0,
          "sparkle"
        ]
      ],
      "choices": [
        {
          "label": "“앞으로도 당신의 곁에 있겠습니다.”",
          "next": "wedding-vow",
          "delta": 0
        }
      ],
      "checkpoint": true
    },
    "wedding-vow": {
      "id": "wedding-vow",
      "chapter": 15,
      "who": "마왕",
      "text": "",
      "dynamic": "vow",
      "expression": "shy",
      "effects": [
        [
          0,
          "hearts"
        ]
      ],
      "next": "wedding-peace"
    },
    "wedding-peace": {
      "id": "wedding-peace",
      "chapter": 15,
      "who": "이야기",
      "text": "반지를 교환하는 자리에는 인간과 마족의 사절이 함께 서 있었다. 오래된 미움이 오늘 모두 사라지지는 않았다. 하지만 두 사람은 내일부터의 이야기를 함께 쓰기로 했다.",
      "expression": "shy",
      "next": "end-married"
    },
    "end-married": {
      "id": "end-married",
      "chapter": 15,
      "who": "TRUE END",
      "text": "마왕과 결혼했습니다.\n\n「죽이려던 마왕과 결혼한 인간」\n「사랑의 힘을 인정받은 자」",
      "expression": "shy",
      "end": true,
      "ending": "end-married",
      "effects": [
        [
          0,
          "hearts"
        ]
      ]
    }
  }
};
