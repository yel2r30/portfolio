export const localize = (value, language) =>
  value?.[language] || value?.ko || "";

// Optional image/images use { src: 'assets/...', alt: { ko, en } }.
// cardRole is a concise summary; roles retain the full contribution scope.
const text = (ko, en) => ({ ko, en });

export const projects = [
  {
    slug: "keystone",
    name: text("KeyStone", "KeyStone"),
    category: "case",
    featured: true,
    homeOrder: 1,
    summary: text(
      "성게를 먹고 산소를 관리하며 켈프숲을 구하는 아케이드 생존 게임",
      "An arcade survival game about eating sea urchins, managing oxygen and saving a kelp forest.",
    ),
    environment: "Verse8",
    team: text("인턴십 · 1인 제작", "Internship · Solo"),
    status: text("원스토어 AI Games 배포", "Released on ONE store AI Games"),
    roles: [
      text(
        "게임플레이 및 핵심 반복 구조 기획 · 개인 제작",
        "Gameplay and core loop design · Solo production",
      ),
      text("Verse8 인턴십 팀장 경험", "Verse8 internship team lead experience"),
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
          "성게를 더 먹어 켈프숲을 구하는 행동과 수면으로 올라가 산소를 회복하는 행동 사이에서 선택합니다.",
          "Choose between eating more sea urchins to save the kelp forest and returning to the surface to recover oxygen.",
        ),
      ],
      results: [
        text(
          "교내 공모전 장려상을 수상했으며 원스토어 AI Games에 배포했습니다. 2026 지스타 출품을 준비하고 있습니다.",
          "Received a campus encouragement award and released on ONE store AI Games. A G-STAR 2026 exhibition is planned.",
        ),
      ],
    },
    cardRole: text(
      "게임플레이 기획 · 개인 제작",
      "Gameplay design · Solo production",
    ),
    focus: "Gameplay Design / Core Loop / Solo Production",
  },
  {
    slug: "computer-escape",
    name: text("컴퓨터 탈출기", "컴퓨터 탈출기"),
    category: "case",
    featured: true,
    homeOrder: 2,
    summary: text(
      "점프를 차지하며 낙하 위험을 넘어 위로 탈출하는 플랫폼 액션",
      "A vertical platform action game built around charged jumps and the risk of falling.",
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
    cardRole: text("팀장 · 기획 · 아트", "Team lead · Design · Art"),
    focus: "Gameplay Design / Level Design / Team Leadership",
    sections: {
      gameplay: [
        text(
          "점프 차지와 낙하 위험을 고려하며 위로 올라가 탈출합니다.",
          "Charge jumps and manage the risk of falling while climbing upward to escape.",
        ),
      ],
    },
  },
  {
    slug: "orbit",
    name: text("ORBIT", "ORBIT"),
    category: "case",
    featured: true,
    homeOrder: 3,
    summary: text(
      "공전하는 동료와 연속 공격 콤보를 만드는 2D 탑다운 파티 서바이벌",
      "A top-down party survival game with orbiting companions and consecutive-attack combos.",
    ),
    environment: "Verse8 + Codex",
    team: text("개인 제작", "Solo"),
    status: text(
      "초기 제작 후 개선·확장 중",
      "Iterating and expanding after initial development",
    ),
    roles: [
      text("게임 기획 · 시스템 설계", "Game planning · System design"),
      text(
        "프로토타이핑 방향 수립 · 테스트와 개선 판단",
        "Prototyping direction · Testing and iteration decisions",
      ),
      text("AI 개발 협업 관리", "AI development collaboration management"),
    ],
    color: "#d2dcea",
    history: [
      text("초기 3일 집중 제작", "Initial three-day development sprint"),
    ],
    sections: {
      gameplay: [
        text(
          "플레이어를 중심으로 동료가 공전하며 자동 공격합니다. 서로 다른 동료의 연속 공격으로 콤보를 만들고 점프와 착지 공격을 활용합니다. 던전·상점·성장·파티 시스템은 확장 중입니다.",
          "Companions orbit the player and attack automatically. Consecutive attacks from different companions create combos, alongside jumping and landing attacks. Dungeon, shop, progression and party systems are being expanded.",
        ),
      ],
    },
    cardRole: text(
      "시스템 기획 · AI 개발 협업",
      "System design · AI development collaboration",
    ),
    focus: "System Design / Gameplay Loop / Iteration",
  },
  {
    slug: "just-blocked",
    name: text("막았을뿐인데", "막았을뿐인데"),
    category: "case",
    featured: true,
    summary: text(
      "공격 버튼 없이 방패 방어와 타이밍 패링으로 싸우는 2D 액션",
      "A 2D action game about shield defense and timed parries, with no attack button.",
    ),
    environment: "Unity",
    team: text("개인 제작", "Solo"),
    status: text("개발 중", "In development"),
    roles: [
      text(
        "전투 규칙 기획 · 개인 프로토타이핑 및 개발",
        "Combat rule design · Solo prototyping and development",
      ),
    ],
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
      gameplay: [
        text(
          "이동과 바라보는 방향을 독립적으로 제어하며, 방패 방어와 정확한 타이밍의 패링으로 싸웁니다.",
          "Control movement and facing independently, using shield defense and precisely timed parries.",
        ),
      ],
    },
    cardRole: text(
      "전투 규칙 기획 · 개인 프로토타이핑",
      "Combat rules · Solo prototyping",
    ),
    focus: "Combat Design / Game Rules / Prototyping",
  },
  {
    slug: "trunk",
    name: text("TRUNK", "TRUNK"),
    category: "case",
    featured: true,
    summary: text(
      "차량을 이동식 거점으로 삼아 운전·채집·제작을 이어가는 사막 협동 생존",
      "Cooperative desert survival built around driving, gathering and crafting with a mobile vehicle base.",
    ),
    environment: "Unreal Engine 5",
    team: text("팀 프로젝트", "Team project"),
    status: text("개발 중", "In development"),
    roles: [
      text(
        "인벤토리 · 저장고 · 제작 메모장 · 정보 팝업 UI 제작·조정 참여",
        "Contributed to inventory, storage, crafting notebook and information popup UI production and refinement",
      ),
    ],
    color: "#e3ddc5",
    cardRole: text("게임 UI 제작·조정", "Game UI production and refinement"),
    focus: "Game UI / UX / Information Architecture",
  },
  {
    slug: "frog-sokoban",
    name: text("개구리 소코반", "개구리 소코반"),
    category: "more",
    summary: text(
      "압력판·컨베이어·게이트·특수 바닥을 활용하는 소코반 이동 퍼즐",
      "A Sokoban movement puzzle with pressure plates, conveyors, gates and special floor tiles.",
    ),
    environment: "HTML",
    team: text(
      "4인 그룹 · 본인 게임 개별 제작",
      "Group of 4 · Individually produced game",
    ),
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
    cardRole: text(
      "그룹 팀장 · 퍼즐 기획·개별 제작",
      "Group lead · Puzzle design · Solo production",
    ),
    focus: "Puzzle Design / Rule Design / Level Design",
  },
  {
    slug: "mystery-number",
    name: text("Mystery Number", "Mystery Number"),
    category: "more",
    summary: text("모바일 숫자 추리 퍼즐", "A mobile number deduction puzzle."),
    environment: "Verse8",
    team: text("인턴십 · 1인 제작", "Internship · Solo"),
    status: text(
      "기본 기능 프로토타입 · 작업 보류",
      "Basic-feature prototype · On hold",
    ),
    roles: [
      text("인턴십 팀장 · 1인 제작", "Internship team lead · Solo production"),
    ],
    color: "#ddd9cd",
    cardRole: text(
      "퍼즐 기획 · 개인 프로토타이핑",
      "Puzzle design · Solo prototyping",
    ),
    focus: "Puzzle Design / Prototyping",
    history: [
      text(
        "Verse8 인턴십 중 개인 제작. 에셋 및 완성도 작업 미완료, KeyStone 우선 개발로 보류",
        "Produced individually during the Verse8 internship. Assets and polish remain unfinished; paused to prioritize KeyStone.",
      ),
    ],
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
    cardRole: text("팀장 · 게임 기획", "Team lead · Game planning"),
    focus: "Game Planning / Team Leadership",
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
    cardRole: text("팀장 · 규칙 기획", "Team lead · Rule design"),
    focus: "Rule Design / Board Game Design / Team Leadership",
  },
  {
    slug: "legend-sword",
    name: text("성검을 얻었는데 몸이 약하다", "성검을 얻었는데 몸이 약하다"),
    category: "more",
    summary: text("Unity 팀 프로젝트", "A Unity team project."),
    environment: "Unity",
    team: text("팀 프로젝트", "Team project"),
    roles: [
      text(
        "핵심 게임 기능 구현 (AI 활용)",
        "Core gameplay implementation (AI-assisted)",
      ),
    ],
    color: "#d9d5df",
    achievements: [
      text(
        "팀 프로젝트 교내 공모전 최우수상",
        "Team project top award in a campus competition",
      ),
      text("2026 지스타 출품 예정", "Planned for G-STAR 2026"),
    ],
    sections: {
      contribution: [
        text(
          "게임의 핵심 기능 구현을 담당했으며, AI를 개발 보조 도구로 활용해 기능을 제작하고 검토했습니다.",
          "Responsible for implementing core gameplay functionality, using AI-assisted tools for implementation and review.",
        ),
      ],
    },
    cardRole: text(
      "핵심 게임 기능 구현 (AI 활용)",
      "Core gameplay implementation (AI-assisted)",
    ),
    focus: "Core Gameplay Implementation / AI-assisted Development",
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
    cardRole: text("몬스터 도트 애니메이션", "Monster pixel animation"),
    focus: "Pixel Animation",
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
