export const localize = (value, language) =>
  value?.[language] || value?.ko || "";
const text = (ko, en) => ({ ko, en });

// Optional media use { src: 'assets/...', alt: { ko, en } }.
// Optional links use { label: { ko, en }, url: 'https://...' }.
// A lower homeOrder puts a project earlier and makes the first card larger.
export const projects = [
  {
    slug: "keystone",
    name: text("KeyStone", "KeyStone"),
    category: "case",
    featured: true,
    homeOrder: 1,
    summary: text(
      "해달이 성게를 먹어 켈프숲을 구하는 엔드리스 아케이드 생존 게임",
      "An endless arcade survival game about an otter saving a kelp forest by eating sea urchins.",
    ),
    environment: "Verse8",
    team: text("인턴십 · 1인 제작", "Internship · Solo"),
    status: text("원스토어 AI Games 배포", "Released on ONE store AI Games"),
    roles: [
      text("인턴십 팀장", "Internship team lead"),
      text("게임 1인 제작", "Solo game production"),
    ],
    color: "#cbded5",
    achievements: [
      text("교내 공모전 장려상", "Encouragement award in a campus competition"),
      text("원스토어 AI Games 배포", "Released on ONE store AI Games"),
      text("2026 지스타 출품 예정", "Planned for G-STAR 2026"),
    ],
    sections: {
      gameplay: [
        text(
          "해달이 성게를 먹으며 생존하고 켈프숲을 구합니다.",
          "Survive as an otter, eat sea urchins and save the kelp forest.",
        ),
      ],
      results: [
        text(
          "교내 공모전 장려상을 수상했으며 원스토어 AI Games에 배포했습니다. 2026 지스타 출품을 준비하고 있습니다.",
          "Received a campus encouragement award and released on ONE store AI Games. A G-STAR 2026 exhibition is planned.",
        ),
      ],
    },
  },
  {
    slug: "computer-escape",
    name: text("컴퓨터 탈출기", "컴퓨터 탈출기"),
    category: "case",
    featured: true,
    homeOrder: 2,
    summary: text(
      "위로 올라가 탈출하는 플랫폼 액션",
      "A platform action game about climbing upward to escape.",
    ),
    environment: "Unity",
    team: text("3인 팀", "Team of 3"),
    status: text("전시 경험", "Previously exhibited"),
    roles: [
      text("팀장 · 기획 · 아트", "Team lead · Game design · Art"),
      text("AI 활용 프로그래밍 참여", "Contributed to AI-assisted programming"),
    ],
    color: "#d9d4e8",
    achievements: [
      text("교내 공모전 우수상", "Excellence award in a campus competition"),
      text("이전 지스타 전시", "Previously exhibited at G-STAR"),
    ],
  },
  {
    slug: "orbit",
    name: text("ORBIT", "ORBIT"),
    category: "case",
    featured: true,
    homeOrder: 3,
    summary: text(
      "공전하는 동료와 연계 콤보를 만드는 파티 기반 2D 서바이벌",
      "Party-based 2D survival with orbiting companions, automatic attacks and combo synergies.",
    ),
    environment: "Verse8 + Codex",
    team: text("개인 제작", "Solo"),
    status: text("추후 업데이트 가능", "Open to future updates"),
    roles: [text("1인 제작", "Solo production")],
    color: "#d2dcea",
    history: [
      text("초기 3일 집중 제작", "Initial three-day development sprint"),
    ],
    sections: {
      gameplay: [
        text(
          "동료 공전, 자동 공격, 연계 콤보를 중심으로 플레이합니다.",
          "Play revolves around orbiting companions, automatic attacks and combo synergies.",
        ),
      ],
    },
  },
  {
    slug: "just-blocked",
    name: text("막았을뿐인데", "막았을뿐인데"),
    category: "case",
    featured: true,
    summary: text(
      "공격 버튼 없이 방패와 패링으로 싸우는 액션",
      "An action game built around shields and parrying, with no attack button.",
    ),
    environment: "Unity",
    team: text("개인 제작", "Solo"),
    status: text("개발 중", "In development"),
    roles: [text("1인 제작", "Solo production")],
    color: "#e3d8cd",
    history: [
      text(
        "GPT Sites 웹 프로토타입 제작 후 Unity로 개발",
        "Development in Unity following a GPT Sites web prototype",
      ),
    ],
    sections: {
      process: [
        text(
          "GPT Sites에서 웹 프로토타입을 제작한 뒤 Unity 개발로 이어가고 있습니다.",
          "A GPT Sites web prototype is being developed further in Unity.",
        ),
      ],
      results: [
        text(
          "향후 핵심 대표작으로 발전시킬 계획입니다.",
          "Planned to grow into a key portfolio project.",
        ),
      ],
    },
  },
  {
    slug: "trunk",
    name: text("TRUNK", "TRUNK"),
    category: "case",
    featured: true,
    summary: text(
      "차량을 이동식 거점으로 사용하는 사막 협동 생존",
      "Cooperative desert survival with a vehicle serving as a mobile base.",
    ),
    environment: "Unreal Engine",
    team: text("팀 프로젝트", "Team project"),
    status: text("개발 중", "In development"),
    roles: [text("UI", "UI")],
    color: "#e3ddc5",
  },
  {
    slug: "frog-sokoban",
    name: text("개구리 소코반", "개구리 소코반"),
    category: "more",
    summary: text("HTML 기반 웹 퍼즐 게임", "An HTML-based web puzzle game."),
    environment: "HTML",
    team: text("개별 게임 1인 제작", "Solo game within a course project"),
    status: text(
      "개발 중 · itch.io 배포 예정",
      "In development · Planned for itch.io",
    ),
    roles: [
      text("팀장 · 개별 게임 1인 제작", "Team lead · Solo game production"),
    ],
    history: [
      text("자기설계교과 3회차", "Self-designed course, third iteration"),
    ],
    color: "#d7dfca",
  },
  {
    slug: "mystery-number",
    name: text("Mystery Number", "Mystery Number"),
    category: "more",
    summary: text("모바일 숫자 추리 퍼즐", "A mobile number deduction puzzle."),
    environment: "Verse8",
    team: text("인턴십 · 1인 제작", "Internship · Solo"),
    status: text("기본 기능 프로토타입", "Basic-feature prototype"),
    roles: [
      text("인턴십 팀장 · 1인 제작", "Internship team lead · Solo production"),
    ],
    color: "#ddd9cd",
  },
  {
    slug: "rcc-factory",
    name: text("RCC Factory", "RCC Factory"),
    category: "more",
    summary: text("모바일 방치형 게임", "A mobile idle game."),
    environment: "Unity",
    team: text("4인 팀", "Team of 4"),
    status: text("제작 완료", "Completed"),
    roles: [text("팀장 · 기획", "Team lead · Game design")],
    history: [
      text("자기설계교과 1회차", "Self-designed course, first iteration"),
    ],
    color: "#cfdcda",
  },
  {
    slug: "long-tailed-tit",
    name: text("오목눈이의 역습", "오목눈이의 역습"),
    category: "more",
    summary: text("오프라인 보드게임", "An offline board game."),
    environment: text("보드게임", "Board game"),
    team: text("3인 팀", "Team of 3"),
    roles: [
      text("팀장 · 기획", "Team lead · Game design"),
      text(
        "AI 생성 카드 디자인 직접 수정",
        "Manually refined AI-generated card designs",
      ),
    ],
    history: [
      text("자기설계교과 2회차", "Self-designed course, second iteration"),
    ],
    color: "#e4d6d3",
  },
  {
    slug: "legend-sword",
    name: text("성검을 얻었는데 몸이 약하다", "성검을 얻었는데 몸이 약하다"),
    category: "more",
    summary: text("Unity 팀 프로젝트", "A Unity team project."),
    environment: "Unity",
    team: text("팀 프로젝트", "Team project"),
    roles: [
      text("AI 활용 프로그래밍 참여", "Contributed to AI-assisted programming"),
    ],
    color: "#d9d5df",
    achievements: [
      text("교내 공모전 최우수상", "Top award in a campus competition"),
      text("2026 지스타 출품 예정", "Planned for G-STAR 2026"),
    ],
    sections: {
      contribution: [
        text(
          "AI 활용 프로그래밍에 참여했습니다. 본인 기여 비중은 상대적으로 적습니다.",
          "Contributed to AI-assisted programming. My contribution was relatively limited.",
        ),
      ],
    },
  },
  {
    slug: "world-first-kill",
    name: text(
      "The World Frist Kill Chellenge",
      "The World Frist Kill Chellenge",
    ),
    category: "art",
    summary: text(
      "제공받은 원화 기반 몬스터 도트 애니메이션",
      "Monster pixel animation based on supplied concept art.",
    ),
    environment: text("그래픽·애니메이션", "Art & Animation"),
    team: text("그래픽 작업 참여", "Art contribution"),
    roles: [text("몬스터 도트 애니메이션", "Monster pixel animation")],
    color: "#d5d9dc",
    sections: {
      contribution: [
        text(
          "제공받은 원화를 바탕으로 몬스터 도트 애니메이션을 제작했습니다. 캐릭터 원화 및 게임 전체 디자인은 담당하지 않았습니다.",
          "Created monster pixel animation from supplied concept art. Character concept art and overall game design were outside my role.",
        ),
      ],
    },
  },
];

export const projectGroups = [
  {
    id: "case",
    title: "Case Studies",
    description: text("대표 프로젝트", "Featured projects"),
  },
  {
    id: "more",
    title: "More Projects",
    description: text(
      "다양한 환경에서 만든 작업",
      "Work across different formats",
    ),
  },
  {
    id: "art",
    title: "Art & Animation",
    description: text(
      "그래픽과 애니메이션 기여 작업",
      "Art and animation contributions",
    ),
  },
];
