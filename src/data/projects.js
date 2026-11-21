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
    summary: text("해달이 되어 성게를 제거하고, 산소와 콤보를 관리해 켈프 숲을 회복시키는 엔드리스 아케이드", "An endless arcade game about eating sea urchins, managing oxygen and combos, and restoring a kelp forest."),
    environment: "Verse8 · Phaser / React · Windows EXE",
    team: text("Verse8 인턴십 · 개인 제작", "Verse8 internship · Solo project"),
    status: text("원스토어 AI Games 배포 · 전시용 PC 빌드 제작", "Released on ONE store AI Games · Exhibition PC build"),
    roles: [
      text("핵심 게임 루프 · 산소·점수·콤보 시스템 기획", "Core loop, oxygen, scoring and combo design"),
      text("UI·아트 방향 설정 · 프로토타입 제작·밸런스 조정", "UI/art direction, prototyping and balancing"),
      text("인턴십 팀장 · PC 전시 빌드 검증", "Internship team lead · Exhibition build testing"),
    ],
    color: "#cbded5",
    achievements: [
      text("2026 TU 게임챌린지 장려상", "2026 TU Game Challenge · Encouragement Award"),
      text("원스토어 AI Games 배포", "Released on ONE store AI Games"),
    ],
    image: {
      src: "assets/keystone/keystone-game-only.webp",
      alt: text("KeyStone 해달과 켈프 숲이 보이는 게임 타이틀 화면", "KeyStone game title screen featuring an otter and kelp forest"),
    },
    history: [
      text("Verse8 웹 프로토타입에서 Windows 오프라인 전시 빌드로 확장", "Expanded from a Verse8 web prototype to an offline Windows exhibition build"),
    ],
    sections: {
      gameplay: [
        text("화면을 누른 채 방향을 조절해 해달을 이동시킵니다. 깊이 내려갈수록 고득점 성게가 등장하지만 산소도 빠르게 줄어, 콤보를 이어갈지 수면으로 돌아갈지 판단해야 합니다.", "Hold and steer to swim. Deeper water offers higher-value sea urchins but consumes oxygen faster, creating a trade-off between continuing combos and surfacing."),
        text("성게를 제거하면 켈프가 되살아나는 변화를 통해 점수 획득과 생태계 회복을 같은 플레이 행동에 연결했습니다.", "Removing sea urchins also helps kelp recover, connecting score-chasing to the game's ecological theme."),
      ],
      contribution: [
        text("위험–보상 구조, 성게·복어 상호작용, 점수·콤보·산소 HUD를 설계하고 AI 개발 도구를 활용해 구현·플레이 테스트·개선 과정을 진행했습니다.", "Designed the risk–reward loop, sea-life interactions, and score/combo/oxygen HUD; coordinated AI-assisted implementation, playtesting and iteration."),
      ],
      process: [
        text("수심별 산소 소모와 성게 보상을 연결하고, 복어가 무한히 누적되어 퇴로를 막지 않도록 출현·퇴장 규칙을 조정했습니다. 플레이 중 학습하는 순차 튜토리얼도 기획했습니다.", "Linked oxygen drain and rewards to depth, tuned pufferfish circulation to avoid unfair routes being blocked, and designed an in-game step-by-step tutorial."),
      ],
      results: [
        text("2026 TU 게임챌린지 장려상 및 원스토어 AI Games 배포를 달성했고, 전시용 Windows 빌드의 로컬 순위표와 운영 흐름을 검증했습니다.", "Received a 2026 TU Game Challenge Encouragement Award, released on ONE store AI Games, and tested a Windows exhibition build with a local leaderboard."),
      ],
    },
    cardRole: text("게임플레이·시스템 기획 · 개인 제작", "Gameplay & system design · Solo project"),
    focus: "Gameplay Design / Risk–Reward / Core Loop / Prototype & Iteration",
  },
  {
    slug: "computer-escape",
    name: text("컴퓨터 탈출기", "컴퓨터 탈출기"),
    icon: "assets/computer-escape/computer-escape-icon.webp",
    image: {
      src: "assets/computer-escape/computer-escape-title.webp",
      alt: text("컴퓨터 탈출기 타이틀 화면", "컴퓨터 탈출기 title screen"),
    },
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
    images: [
      {
        src: "assets/computer-escape/computer-escape-digital-stage.webp",
        alt: text("격자형 디지털 배경의 발판과 포털, 플레이어와 HP UI가 보이는 플레이 장면", "Gameplay with grid-themed platforms, portal, player and HP interface"),
        caption: text("디지털 스테이지 · 발판과 포털", "Digital stage · Platforms and portal"),
      },
      {
        src: "assets/computer-escape/computer-escape-forest-stage.webp",
        alt: text("숲 배경의 스테이지와 캐릭터, 파란 포털이 보이는 플레이 화면", "Gameplay showing the character in a forest-themed stage with a blue portal"),
        caption: text("숲 스테이지 · 이동과 액션", "Forest stage · Movement and action"),
      },
      {
        src: "assets/computer-escape/computer-escape-character-assets.svg",
        alt: text("컴퓨터 탈출기 팀 프로젝트의 캐릭터 표정 일러스트 자료", "Character expression artwork from the Computer Escape team project"),
        caption: text("2D 캐릭터 리소스 · 프로젝트 제작 자료", "2D character asset · Team production material"),
      },
    ],
    video: {
      youtubeId: "HlOlBL3tFLw",
      belowGallery: true,
      title: text("컴퓨터 탈출기 · 플레이 영상", "Computer Escape · Gameplay Video"),
    },
    achievements: [
      text("2025 TU 게임챌린지 우수상", "2025 TU Game Challenge · Excellence Award"),
      text("이전 지스타 전시", "Previously exhibited at G-STAR"),
    ],
    cardRole: text("팀장 · 기획 · 아트", "Team lead · Design · Art"),
    focus: "Gameplay Design / Level Design / Team Leadership",
    sections: {
      gameplay: [
        text(
          "점프를 최대 1초까지 차지해 높이를 조절하고, 낙하 위험을 감수하며 컴퓨터 안의 세계를 위로 올라가는 액션 플랫폼 게임입니다.",
          "Charge jumps for up to one second to control height and climb through a computer world while managing the risk of falling.",
        ),
      ],
      process: [
        text(
          "수정 기획서에서 세로 상승과 전투를 핵심으로 정리하고, 움직이는 발판·반동 블록·에러 블록 등은 난이도와 선택을 확장하는 기믹으로 설계했습니다. 문서의 모든 기믹이 최종 빌드에 구현됐다는 뜻은 아닙니다.",
          "The revised design focused on vertical ascent and combat. Moving, bouncing and error blocks were planned to broaden player decisions; not every documented mechanic is verified in the final build.",
        ),
      ],
    },
  },
  {
    slug: "orbit",
    name: text("ORBIT", "ORBIT"),
    icon: "assets/orbit/ORBIT_app_icon.webp",
    links: [
      {
        label: text("게임 플레이", "Play Game"),
        url: "https://verse8.io/t5E8q9x",
      },
    ],
    category: "case",
    featured: true,
    homeOrder: 3,
    summary: text(
      "공전하는 동료와 연계 콤보로 살아남는 2D 파티 액션 서바이버",
      "A 2D action survivor built around orbiting companions and coordinated attack combos.",
    ),
    environment: "Verse8 · Phaser / React",
    team: text("개인 프로젝트 · AI 활용 개발", "Solo project · AI-assisted development"),
    status: text("개발 중 · 플레이테스트 및 개선", "In development · Playtesting and refinement"),
    roles: [
      text("게임플레이 · 전투 및 성장 시스템 기획", "Gameplay, combat and progression system design"),
      text("캐릭터 · UI/UX 방향 설계", "Character and UI/UX direction"),
      text("AI 구현 협업 관리 · 플레이테스트 및 개선", "AI-assisted implementation coordination, playtesting and iteration"),
    ],
    color: "#d2dcea",
    image: {
      src: "assets/orbit/ORBIT_combat_portfolio.webp",
      alt: text(
        "공전하는 파티원들이 자동 공격하고 연계 콤보를 쌓는 ORBIT 일반 전투 화면",
        "ORBIT combat with orbiting companions, automatic attacks and combo counter",
      ),
    },
    images: [
      {
        src: "assets/orbit/ORBIT_title_portfolio.webp",
        alt: text("ORBIT 타이틀과 시작 동료 선택 화면", "ORBIT title and starting companion selection"),
        caption: text("타이틀 · 시작 동료 선택", "Title · Starting companion"),
      },
      {
        src: "assets/orbit/ORBIT_shop_portfolio.webp",
        alt: text("ORB로 동료를 영입하고 파티를 강화하는 PARTY SHOP", "PARTY SHOP for recruiting and upgrading companions using ORB"),
        caption: text("PARTY SHOP · 동료 영입과 강화", "PARTY SHOP · Recruitment and upgrades"),
      },
      {
        src: "assets/orbit/ORBIT_archive_portfolio.webp",
        alt: text(
          "ORBIT 파티원 도감 화면, 캐릭터 일러스트와 종족별 분류 및 해금 상태",
          "ORBIT companion archive showing character portraits, categories and unlock states",
        ),
        caption: text("동료 도감 · 캐릭터와 세계관", "Companion Archive · Characters and lore"),
      },
      {
        src: "assets/orbit/ORBIT_boss_portfolio.webp",
        alt: text("보스 적월의 관측핵의 레이저 패턴에 대응하는 ORBIT 전투 화면", "ORBIT boss battle against Red Moon Observatory Core with a laser attack pattern"),
        caption: text("보스전 · 공격 예고와 회피", "Boss battle · Telegraphs and dodging"),
      },
    ],
    history: [
      text("초기 3일 집중 프로토타입 제작 후 지속 개선", "Initial three-day prototype sprint followed by ongoing iteration"),
    ],
    sections: {
      gameplay: [
        text(
          "동료들이 플레이어를 중심으로 공전하며 각자의 방식으로 자동 공격합니다. 서로 다른 동료의 연속 적중으로 콤보가 쌓이고, 플레이어는 이동과 점프 착지 충격파로 전투에 개입합니다.",
          "Companions orbit and attack automatically with distinct patterns. Hits from different companions build combos, while the player contributes through movement and jump-landing shockwaves.",
        ),
        text(
          "EXP는 레벨업 강화에, ORB는 상점에서 동료 영입·중복 강화에 사용합니다. 파티 정원은 성장 선택으로 최대 5명까지 확장할 수 있습니다.",
          "EXP fuels level-up upgrades; ORB recruits or upgrades companions at shops. Party capacity can grow to five through level-up choices.",
        ),
        text(
          "필드의 균열로 일반·고난도 던전과 보스전에 진입하고, 클리어 후 보상 3종 중 하나를 선택합니다.",
          "Rifts lead to regular, harder and boss encounters, followed by a choice of one of three rewards.",
        ),
      ],
      contribution: [
        text(
          "전투 규칙, 연계 콤보, 파티 성장, 던전·상점 흐름과 HUD의 정보 구조를 기획했습니다. 캐릭터 계열·색상·일러스트 활용 방향을 정하고, AI 개발 도구로 구현된 결과를 플레이하며 수정 사항을 결정했습니다.",
          "Designed combat rules, combo mechanics, party progression, dungeon/shop flows and HUD hierarchy. Set character, color and illustration direction, then reviewed AI-assisted implementation through hands-on playtesting.",
        ),
      ],
      process: [
        text(
          "초기 3일간 핵심 전투 프로토타입을 만든 뒤, 동료 10종과 파티 영입·성장, 던전, 보스전으로 확장했습니다.",
          "Built the core combat prototype in an initial three-day sprint, then expanded toward ten companions, party progression, dungeons and boss encounters.",
        ),
        text(
          "실제 플레이에서 피격감과 안내의 가독성을 점검했고, 파티 만석이어도 중복 영입으로 강화할 수 있도록 구매 규칙과 UI를 함께 조정했습니다.",
          "Used playtests to refine hit feedback and on-screen guidance, and aligned shop logic with UI so duplicate recruits can upgrade an existing companion even when the party is full.",
        ),
      ],
      results: [
        text(
          "공전 자동 공격과 파티 빌딩을 연결하는 플레이 루프를 구성했습니다. 다만 장시간 밸런스와 튜토리얼 전달력은 계속 검증·개선 중입니다.",
          "Established a gameplay loop combining orbiting auto-combat and party building. Long-session balance and tutorial clarity remain under evaluation.",
        ),
      ],
    },
    cardRole: text(
      "전투·성장 시스템 기획 · AI 협업 개발",
      "Combat & progression design · AI-assisted development",
    ),
    focus: "Gameplay / Systems / Playtesting / UI UX",
  },
  {
    slug: "just-blocked",
    name: text("막았을뿐인데", "막았을뿐인데"),
    category: "case",
    featured: true,
    summary: text("공격 버튼 없이 방패의 방향과 타이밍으로 적의 공격을 받아치는 액션 프로토타입", "A shield-only action prototype where facing and parry timing replace the attack button."),
    environment: "Unity 2D · GPT Sites prototype",
    team: text("개인 기획·프로토타이핑", "Solo design & prototyping"),
    status: text("Unity 전투 프로토타입 개발 중", "Unity combat prototype in development"),
    roles: [
      text("전투 규칙 · 조작·방향·패링 판정 기획", "Combat rules, input/facing design and parry judgment"),
      text("AI 도구 활용 웹·Unity 프로토타입 검증", "Web and Unity prototype validation with AI-assisted tools"),
    ],
    color: "#e3d8cd",
    history: [
      text("GPT Sites 웹 실험에서 시작해 Unity 전투 실험으로 이전", "Moved from a GPT Sites web experiment to a Unity combat prototype"),
    ],
    sections: {
      gameplay: [
        text("방향키로 8방향 이동, WASD로 8방향 바라보기를 독립 조작하고 Space로 방패를 사용합니다. 공격 버튼이 없으며, 공격 직전의 정확한 방어가 패링으로 이어집니다.", "Arrow keys move in eight directions, WASD independently controls facing, and Space raises the shield. There is no attack button: precise defense timing enables parries."),
      ],
      contribution: [
        text("공격 버튼을 없앤 제약에서 시작해 일반 막기와 받아치기를 구분하고, 방향·유효각·판정 시간·재사용 규칙을 정의했습니다.", "Started with the constraint of no direct attack, separating standard blocks from parries and defining direction, valid angles, timing windows and reuse rules."),
      ],
      process: [
        text("웹 실험에서 적 인식 거리와 공격 속도를 조정한 뒤 Unity로 옮겼습니다. Unity에서는 이동·방향·방패 상태 전환과 전방 방어 판정을 단계적으로 구현·테스트하고 있습니다.", "Iterated enemy detection and attack pacing in the web prototype, then moved to Unity to test independent movement/facing, shield state changes and frontal block judgment."),
      ],
      results: [
        text("현재는 조작과 방패·패링의 기본 판정 검증 단계입니다. 기획서에 있는 적 연쇄 충돌·방 탐색·강화 시스템은 향후 확장 설계이며 완료 기능으로 표기하지 않습니다.", "The current prototype validates movement, shield behavior and basic parry rules. Chain collisions, room exploration and upgrades remain planned extensions, not finished features."),
      ],
    },
    cardRole: text("전투 시스템 기획 · Unity 프로토타이핑", "Combat systems · Unity prototyping"),
    focus: "Combat Design / Input & Facing / Parry Rules / Prototyping",
  },
  {
    slug: "trunk",
    name: text("TRUNK", "TRUNK"),
    icon: "assets/trunk/TRUNK_logo.png",
    category: "case",
    featured: true,
    summary: text(
      "차량을 이동식 거점으로 삼아 사막을 탐험하는 협동 생존 게임",
      "A cooperative desert survival game built around a vehicle as a mobile base.",
    ),
    environment: "Unreal Engine 5",
    team: text("3인 팀 · UI/UX 담당", "3-person team · UI/UX contributor"),
    status: text("개발 진행 중 · UI/UX 제작", "In development · UI/UX production"),
    history: [
      text("2026년 9월, 개발 중인 프로젝트에 UI/UX 담당으로 중도 합류",
           "Joined the ongoing project in September 2026 as a UI/UX contributor"),
    ],
    roles: [
      text("인벤토리·저장고 UI 디자인 및 배치 조정",
           "Inventory and storage UI design and layout refinement"),
      text("제작 메모장·레시피 정보·재료 호버 팝업 UI 제작",
           "Crafting notebook, recipe information and material hover tooltip UI"),
    ],
    color: "#d9b895",
    video: {
      youtubeId: "5l-P5u_edeE",
      title: text("TRUNK · 기존 플레이 영상", "TRUNK · Earlier Gameplay Video"),
      caption: text(
        "UI 개편 이전에 촬영된 플레이 영상입니다. 현재 진행 중인 제 UI/UX 작업은 영상에 반영되지 않았습니다.",
        "Gameplay recorded before the UI redesign. The UI/UX work I am currently contributing is not shown in this video.",
      ),
    },
    image: {
      src: "assets/trunk/TRUNK_title.png",
      alt: text("TRUNK 기존 타이틀 화면 · UI 개편 이전", "TRUNK title screen · Before the UI redesign"),
    },
    images: [
      {
        src: "assets/trunk/TRUNK_gameplay.png",
        alt: text("사막 웜, 트럭과 생존 HUD가 보이는 기존 TRUNK 게임플레이",
                  "Earlier TRUNK gameplay with a desert worm, truck and survival HUD"),
        caption: text("사막 생존 플레이 · UI 개편 이전 화면",
                      "Desert survival gameplay · Before the UI redesign"),
      },
    ],
    sections: {
      gameplay: [
        text(
          "트럭을 이동식 거점으로 삼아 위험한 사막을 탐색하는 협동 생존 게임입니다. 물자와 연료를 확보하고 채집·제작을 이어가며 사막 생물과 환경 위협에 대응합니다.",
          "Cooperative desert survival built around a mobile truck base. Players manage supplies and fuel, gather resources, craft equipment and face desert creatures and environmental threats.",
        ),
      ],
      contribution: [
        text(
          "2026년 9월, 개발 중이던 팀 프로젝트에 중간 합류해 UI/UX를 담당하고 있습니다. 인벤토리·저장고 패널과 슬롯 구성, 제작 메모장의 레시피·재료 정보, 호버 팝업의 디자인과 배치를 작업했습니다.",
          "Joined the ongoing team project in September 2026 to work on UI/UX. Designed and refined inventory/storage panels and slots, crafting notebook recipe/material information, and hover tooltips.",
        ),
      ],
      process: [
        text(
          "인벤토리·저장고의 슬롯 크기와 간격, 패널 위치를 조정하고 함께 열릴 때의 화면 구성을 점검했습니다.",
          "Refined inventory/storage slot size, spacing and panel positioning, including their layout when opened together.",
        ),
        text(
          "제작 메모장과 재료 호버 팝업의 정보 구조와 가독성을 개선하며 Unreal Engine UI 적용을 조정하고 있습니다.",
          "Refining the crafting notebook and hover-tooltip information hierarchy and readability while iterating on Unreal Engine UI integration.",
        ),
      ],
      results: [
        text(
          "현재 UI 제작·개선이 진행 중입니다. 첨부한 게임 화면과 YouTube 영상은 UI 개편 전 자료로, 제가 제작 중인 새 UI를 보여주지는 않습니다. 개편 UI 자료는 추후 추가할 예정입니다.",
          "UI production and refinement are ongoing. The images and linked YouTube video show the project before the UI redesign, not the UI I am currently creating. Updated UI materials will be added later.",
        ),
      ],
    },
    cardRole: text("2026.09 합류 · 인벤토리·제작 UI/UX",
                   "Joined Sep 2026 · Inventory & crafting UI/UX"),
    focus: "Game UI / UX / Inventory / Crafting / Information Architecture",
  },
  {
    slug: "grave-shot",
    name: text("Grave Shot", "Grave Shot"),
    category: "more",
    summary: text(
      "유령을 처치해 골드를 모으고, 성문을 수리하거나 무기를 강화하며 성지를 지키는 탑뷰 웨이브 디펜스",
      "A top-down wave defense game: defeat ghosts, earn gold, repair gates or upgrade your weapon to protect the sanctuary.",
    ),
    environment: "Unity",
    team: text("게임 기획·개발", "Game design and development"),
    status: text("2026 TU 게임챌린지 장려상", "2026 TU Game Challenge · Encouragement Award"),
    period: text("2026.07.04–07.06", "July 4–6, 2026"),
    history: [
      text("재밌넥 4기 선정 과제 · 2026 TU 게임챌린지 장려상", "Jaemitnet cohort 4 selected project · 2026 TU Game Challenge Encouragement Award"),
    ],
    roles: [
      text("게임 기획 · 전투 및 웨이브 구조 설계", "Game design · Combat and wave system"),
      text("프로토타입 개발 및 플레이 검증", "Prototype development and gameplay testing"),
    ],
    color: "#c8c6d7",
    image: {
      src: "assets/grave-shot/grave-shot-title.webp",
      alt: text("공동묘지 배경과 유령이 등장하는 Grave Shot 타이틀 화면", "Grave Shot title screen with a ghost in a graveyard"),
    },
    video: {
      driveId: "1mSiT9IOKV2O5qtCxjwmNVTPpdltz0jr2",
      title: text("Grave Shot · 플레이 영상", "Grave Shot · Gameplay Video"),
      caption: text("게임 플레이 영상 (약 3분)", "Gameplay footage (about 3 minutes)"),
      fallback: text("영상이 보이지 않나요? Google Drive에서 보기", "Video not loading? Watch on Google Drive"),
    },
    images: [
      {
        src: "assets/grave-shot/grave-shot-tutorial.webp",
        alt: text("Grave Shot 이동·공격 방법 안내 화면", "Grave Shot movement and shooting instructions"),
        caption: text("조작 안내 · 이동 및 조준 공격", "Controls · Movement and aimed shooting"),
      },
      {
        src: "assets/grave-shot/grave-shot-wave.webp",
        alt: text("세 성문을 지키는 Grave Shot 웨이브 1 플레이 장면", "Grave Shot wave 1 with three defensive gates"),
        caption: text("웨이브 전투 · 성문 방어", "Wave combat · Gate defense"),
      },
      {
        src: "assets/grave-shot/grave-shot-boss.webp",
        alt: text("Grave Shot 5웨이브 보스 출현 장면", "Grave Shot boss appearance at wave 5"),
        caption: text("5웨이브 · 보스 등장", "Wave 5 · Boss encounter"),
      },
      {
        src: "assets/grave-shot/grave-shot-victory.webp",
        alt: text("Grave Shot 승리 및 전투 결과 화면", "Grave Shot victory and results screen"),
        caption: text("전투 결과 · 처치 수와 골드", "Results · Enemies defeated and gold"),
      },
    ],
    achievements: [
      text("제4회 TU 게임챌린지 2026 · 트랙 1-A (게임시스템) 장려상", "4th TU Game Challenge 2026 · Track 1-A (Game Systems), Encouragement Award"),
    ],
    links: [
      {
        label: text("TU 게임챌린지 수상 소개", "TU Game Challenge Award"),
        url: "https://ai.tu.ac.kr/game/sub05_05.do?articleNo=428131&mode=view",
      },
    ],
    sections: {
      gameplay: [
        text(
          "플레이어는 공동묘지에서 몰려오는 유령을 조준 사격해 처치하고, A·B·C 세 성문과 성지를 방어합니다. 성문이 무너지면 성지가 공격받습니다.",
          "Defeat incoming ghosts through aimed shooting while protecting three gates (A, B and C) and the sanctuary behind them.",
        ),
        text(
          "처치 보상으로 얻은 골드를 성문 수리와 공격력 강화 사이에 배분하고, 15초 정비 시간 뒤 다음 웨이브에 대응합니다. 5웨이브마다 보스가 등장합니다.",
          "Spend gold from defeated enemies on gate repairs or attack upgrades. Prepare for 15 seconds between waves; a boss arrives every fifth wave.",
        ),
      ],
      contribution: [
        text(
          "유령 처치 → 골드 획득 → 성문 수리/무기 강화 → 다음 웨이브로 이어지는 반복 구조와 게임플레이를 기획하고, 프로토타입 개발과 검증에 참여했습니다.",
          "Designed the ghost combat → gold → repairs/upgrades → next wave loop and contributed to prototyping and gameplay validation.",
        ),
      ],
      process: [
        text(
          "방어할 성문과 플레이어 공격력을 같은 재화로 관리하게 하여, 생존을 위한 수리와 전투 효율을 위한 강화 사이에 선택을 만들었습니다.",
          "Connected defensive repairs and offensive upgrades through one shared currency to create meaningful resource allocation decisions.",
        ),
      ],
      results: [
        text(
          "3일간 핵심 플레이를 구현한 프로토타입으로 2026 TU 게임챌린지 게임시스템 부문 장려상을 수상했습니다.",
          "Built a core gameplay prototype over three days and received an Encouragement Award in the 2026 TU Game Challenge game-systems track.",
        ),
      ],
    },
    cardRole: text("게임 기획 · 전투·웨이브 설계", "Game design · Combat and wave design"),
    focus: "Top-down Action Defense / Wave System / Resource Management / Prototyping",
  },
  {
    slug: "mimic-handle-with-care",
    name: text("미믹 취급 주의", "Mimic: Handle with Care"),
    category: "more",
    summary: text(
      "재밌넥 4기에서 4인 팀으로 참여한 게임 프로젝트",
      "A four-person game project created during Jaemitnet cohort 4.",
    ),
    environment: text("게임 프로젝트 · 기획/UI", "Game project · Design/UI"),
    status: text("재밌넥 4기 수료 작품", "Jaemitnet cohort 4 completion project"),
    team: text("재밌넥 4기 · 4인 팀", "Jaemitnet cohort 4 · 4-person team"),
    roles: [
      text("게임 기획 · UI 담당", "Game planning · UI"),
    ],
    color: "#e8c79d",
    image: {
      src: "assets/mimic/mimic-title.webp",
      alt: text("미믹 취급 주의 게임 타이틀 이미지", "Mimic: Handle with Care title artwork"),
    },
    sections: {
      contribution: [
        text(
          "재밌넥 4기 4인 팀 프로젝트에서 게임 기획과 UI 작업을 담당했습니다.",
          "Contributed game planning and UI work in a four-person Jaemitnet cohort 4 project.",
        ),
      ],
    },
    cardRole: text("4인 팀 · 게임 기획/UI", "4-person team · Game planning/UI"),
    focus: "Game Planning / UI / Team Project",
  },
  {
    slug: "frog-sokoban",
    name: text("개구리 소코반", "개구리 소코반"),
    category: "more",
    summary: text("개구리·알·벌레와 컨베이어·게이트·압력판을 활용하는 스테이지형 소코반 퍼즐", "A stage-based Sokoban puzzle combining frogs, eggs and bugs with conveyors, gates and pressure plates."),
    environment: "HTML5 · Web",
    team: text("4인 연구 그룹 · 개별 게임 1인 제작", "4-person study group · Individually produced game"),
    status: text("40개 스테이지 설계·검증 진행 중", "40-stage design and validation in progress"),
    roles: [
      text("연구 그룹 팀장 · 개인 게임 기획·제작", "Study group lead · Individual game design & production"),
      text("퍼즐 규칙·레벨 설계·해법 및 난이도 검증", "Puzzle rules, level design, solution and difficulty validation"),
    ],
    history: [
      text("자기설계교과 3회차 · 소코반 장르 분석 기반 실험", "Self-designed course, third project · Sokoban design study"),
    ],
    color: "#d7dfca",
    sections: {
      gameplay: [
        text("물체를 밀어 경로와 행동 순서를 계획하는 소코반에 알 부화·벌레 포획, 압력판·게이트, 방향이 바뀌는 컨베이어와 균열 바닥 같은 규칙을 더했습니다.", "Builds on Sokoban's push-and-plan rules with frog hatching, bug capture, pressure plates/gates, reversible conveyors and fragile floor tiles."),
      ],
      contribution: [
        text("4인 그룹의 팀장을 맡되 게임은 각자 제작하는 형태였습니다. 개인 게임의 규칙과 레벨을 설계하고, 두 버전의 40개 스테이지에 대한 풀이와 기믹 필요성을 분석했습니다.", "Led a four-person study group where each member built a separate game. Designed this game's rules and levels, analyzing solutions and mechanic necessity across 40 stage variants."),
      ],
      process: [
        text("규칙 소개 → 기본 적용 → 조합 문제의 학습 흐름을 설계하고, 최단 풀이가 실제 기믹을 우회하는 사례와 스테이지 간 상태 계승 문제를 찾아 재검토 항목으로 기록했습니다.", "Structured learning from introducing a rule to combining it with others, and recorded bypass solutions and cross-stage state carryover issues for level redesign."),
      ],
      results: [
        text("VER.1·VER.2를 포함한 40개 스테이지의 설계 및 해법 분석 자료를 마련했습니다. 튜토리얼과 최종 난이도 조정은 계속 진행 중입니다.", "Prepared design and solution-analysis materials for 40 stage variants across VER.1 and VER.2. Tutorial and final difficulty tuning remain in progress."),
      ],
    },
    cardRole: text("퍼즐 기획 · 레벨 디자인 · 검증", "Puzzle design · Level design · Validation"),
    focus: "Puzzle Design / Level Design / Rule Introduction / Solution Testing",
  },
  {
    slug: "mystery-number",
    name: text("Mystery Number", "Mystery Number"),
    category: "more",
    summary: text("숨겨진 숫자를 상대로 싸울지 피할지 판단하는 모바일 숫자 추리·위험 선택 퍼즐", "A mobile number puzzle built around hidden values, risk assessment and deduction."),
    environment: "Verse8 · React / TypeScript",
    team: text("인턴십 · 개인 기획·프로토타이핑", "Internship · Solo design & prototyping"),
    status: text("기본 기능 프로토타입 · 개발 보류", "Core prototype · Development on hold"),
    roles: [
      text("일반·용사 모드의 숫자 판정 및 보상 구조 기획", "Normal/Hero mode number rules and rewards design"),
      text("힌트 아이템 · 난이도·스테이지 구조 설계", "Hint item, difficulty and stage structure design"),
    ],
    color: "#ddd9cd",
    history: [
      text("Verse8 인턴십 중 개인 기획. KeyStone 개발을 우선하면서 추가 제작 보류", "Solo design during Verse8 internship; paused to prioritize KeyStone"),
    ],
    sections: {
      gameplay: [
        text("일반 모드는 숨겨진 적 숫자와 내 숫자를 비교해 전투 또는 회피를 선택하는 위험 판단 방식입니다. 용사 모드는 숫자를 직접 추측하고 힌트로 정답을 좁히도록 구상했습니다.", "Normal mode uses fight-or-flee decisions against a hidden enemy number. Hero mode is designed around entering guesses and narrowing candidates through hints."),
      ],
      contribution: [
        text("두 모드가 숫자 판정과 보상 규칙을 공유하도록 설계하고, 나침반·업다운·숫자 야구 등의 정보 아이템과 높은 점수를 위한 위험–보상 구조를 기획했습니다.", "Designed shared number-based outcomes across two modes and planned compass, up/down and number-baseball hints with risk–reward scoring."),
      ],
      results: [
        text("기본 기능을 시험하는 프로토타입 단계에서 보류했습니다. 기획서의 15개 스테이지·무한 모드·마왕전은 전체 구현이 확인된 기능이 아닌 기획 범위입니다.", "Paused at the basic-feature prototype stage. The 15-stage campaign, endless mode and final boss are design scope, not verified completed features."),
      ],
    },
    cardRole: text("숫자 퍼즐 · 판정·보상 설계", "Number puzzle · Rules & rewards"),
    focus: "Puzzle Rules / Risk–Reward / Prototype & Systems",
  },
  {
    slug: "rcc-factory",
    name: text("RCC Factory", "RCC Factory"),
    category: "more",
    summary: text("치즈떡을 자동 생산·판매하고 농장 재료로 공장을 강화하며 도감을 채우는 방치형 게임", "An idle factory game about producing, selling and collecting cheese rice cakes while upgrading with farm resources."),
    environment: "Unity · Mobile",
    team: text("4인 팀 · 팀장·기획", "4-person team · Team lead & game design"),
    status: text("팀 프로젝트 제작 완료", "Completed team project"),
    roles: [
      text("팀장 · 게임 기획·생산·성장 시스템 설계", "Team lead · Game, production and progression design"),
      text("공장·농장 경제 순환 및 도감·UI 구조 기획", "Factory/farm economy loop, collection and UI structure design"),
    ],
    color: "#cfdcda",
    image: {
      src: "assets/rcc-factory/rcc-factory-logo.png",
      alt: text("RCC Factory 치즈떡 공장 게임 로고", "RCC Factory cheese rice-cake game logo"),
    },
    history: [
      text("자기설계교과 1회차 · 4인 팀 제작", "Self-designed course, first project · Four-person team"),
    ],
    sections: {
      gameplay: [
        text("공장에서 치즈떡을 자동 생산·판매해 코인을 얻고, 농장에서 수확한 강화 재료로 기계를 성장시킵니다. 강화·재료 연구를 통해 새로운 종류를 발견하고 도감에 수집합니다.", "Factories automatically produce and sell cheese rice cakes for coins, while farm harvests provide upgrade materials. Upgrades and research unlock additional varieties for the collection."),
      ],
      contribution: [
        text("팀장으로서 자동 생산 → 판매 → 투자, 농장 수확 → 공장 강화의 두 성장 순환을 설계하고, 공장·농장·도감 화면의 흐름을 기획했습니다.", "As team lead, designed the production → sales → investment and farming → upgrades loops, plus the factory, farm and collection-screen flow."),
      ],
      process: [
        text("Canva에서 화면 구조와 생산·연구·강화 관계를 정리하고, 짧은 조작으로도 성장과 수집 보상이 체감되도록 성장 단계를 구분했습니다.", "Mapped UI flows and production/research/upgrade relationships in Canva, focusing on short interactions and visible collection/progression milestones."),
      ],
      results: [
        text("4인 팀의 Unity 게임을 제작 완료했습니다. 기획서의 인테리어·알바·스토리는 확장안으로, 실제 빌드에 반영되지 않은 기능과 구분했습니다.", "Completed the four-person Unity project. Decoration, employee and story systems were planned extensions and are not presented as shipped features."),
      ],
    },
    cardRole: text("팀장 · 방치형 경제·성장 기획", "Team lead · Idle economy & progression"),
    focus: "Idle Game Design / Economy Loops / Progression / Team Leadership",
  },
  {
    slug: "long-tailed-tit",
    name: text("오목눈이의 역습", "오목눈이의 역습"),
    category: "more",
    summary: text(
      "숨겨진 카드를 뒤집는 위험 선택과 주사위 판정으로 마지막 생존자를 가리는 파티형 카드게임",
      "A competitive survival card game built around hidden-card risks, dice checks and reactive special cards.",
    ),
    environment: text("오프라인 카드·보드게임", "Physical card / board game"),
    team: text("3인 팀 · 팀장", "3-person team · Team lead"),
    status: text("실물 프로토타입 제작·전시", "Physical prototype produced and displayed"),
    roles: [
      text("팀장 · 게임 규칙 및 카드 효과 기획", "Team lead · Game rules and card effect design"),
      text("카드 UI 디자인·레이아웃 수정", "Card UI design and layout refinement"),
    ],
    color: "#e4d6d3",
    links: [
      {
        label: text("카드 UI 디자인 보기", "View Card UI Designs"),
        url: "https://www.canva.com/d/3HfnqYLLPs_YOsE",
      },
    ],
    image: {
      src: "assets/long-tailed-tit/long-tailed-tit-title.webp",
      alt: text("오목눈이의 역습 카드게임 타이틀 로고", "Revenge of the Long-tailed Tit card game title art"),
    },
    images: [
      {
        src: "assets/long-tailed-tit/long-tailed-tit-cards.webp",
        alt: text("제작된 카드와 게임 설명서 실물 사진", "Physical prototype cards and rules printed on paper"),
        caption: text("실물 카드 프로토타입", "Printed card prototype"),
      },
      {
        src: "assets/long-tailed-tit/long-tailed-tit-table.webp",
        alt: text("테이블 위에 전시된 게임 카드와 체험 준비물", "Tabletop display with card decks and game materials"),
        caption: text("전시·체험 테이블", "Exhibition and playtest table"),
      },
    ],
    history: [
      text("자기설계교과 2회차 · 팀 프로젝트", "Self-designed coursework, second project"),
    ],
    cardShowcase: [
      {
        label: text("일반 카드", "General Cards"),
        note: text("빨강 · 깃털 공격 카드", "Red · Feather attack card"),
        backSrc: "assets/long-tailed-tit/card-general-back.png",
        frontSrc: "assets/long-tailed-tit/card-general-front.png",
        backAlt: text("빨간색 일반 카드 뒷면", "Red back of a general card"),
        frontAlt: text("깃털 1데미지 공격 카드 앞면", "Front of Feather, a one-damage attack card"),
      },
      {
        label: text("직업 카드", "Role Cards"),
        note: text("초록 뒷면 · 역할별 앞면", "Green back · Role-specific fronts"),
        backSrc: "assets/long-tailed-tit/card-role-back.png",
        frontSrc: "assets/long-tailed-tit/card-role-front.png",
        backAlt: text("초록색 직업 카드 공통 뒷면", "Shared green back of a role card"),
        frontAlt: text("보라색 마법눈이 직업 카드 앞면", "Purple mage role card front"),
      },
      {
        label: text("특수 카드", "Special Cards"),
        note: text("검정 뒷면 · 대응 효과", "Black back · Reactive effects"),
        backSrc: "assets/long-tailed-tit/card-special-back.png",
        frontSrc: "assets/long-tailed-tit/card-special-front.png",
        backAlt: text("검정색 특수 카드 뒷면", "Black back of a special card"),
        frontAlt: text("솜뭉치 가드 특수 카드 앞면", "Front of Fluff Guard special card"),
      },
    ],
    sections: {
      gameplay: [
        text(
          "2~5명이 캐릭터 능력을 선택하고, 뒤집힌 '둥지' 카드에서 한 장씩 공개하며 생존 경쟁을 펼칩니다. 카드에는 공격·자폭·보급이 있으며, 주사위 판정에 따라 피해와 방어가 달라집니다.",
          "For 2–5 players, each character has a distinct ability. Players reveal hidden nest cards in turn; attacks, self-damage and supplies interact with dice-based hit and defense checks.",
        ),
        text(
          "특수 카드로 피해를 막거나 되돌리고, 상대의 카드와 차례를 방해할 수 있습니다. 대응 카드의 효과는 나중에 낸 것부터 처리되며 마지막까지 살아남은 사람이 승리합니다.",
          "Special cards can block, reflect or redirect damage and interfere with opponents' cards or turns. Responses resolve in reverse play order; the last surviving player wins.",
        ),
      ],
      contribution: [
        text(
          "3인 팀의 팀장으로 게임 기획과 생존·카드 상호작용 규칙을 설계했습니다. 카드 UI에서는 카드명, 피해량, 발동 조건 및 효과 설명의 정보 배치와 레이아웃을 수정했습니다. 일러스트 생성은 담당하지 않았습니다.",
          "Led a three-person team and designed gameplay and survival/card interaction rules. Refined card UI layout and the presentation of names, damage values, activation conditions and effect text. Illustration generation was not part of my role.",
        ),
      ],
      process: [
        text(
          "직업별 능력과 공격 카드의 주사위 난이도를 구분하고, 위험한 자폭 카드를 특수 카드 획득으로 연결해 선택의 보상을 설계했습니다.",
          "Designed distinct character abilities and attack risk levels, connecting self-damage cards to special-card rewards for meaningful risk–reward decisions.",
        ),
        text(
          "특수 카드 간 대응 순서를 규칙으로 정리한 뒤 카드와 설명서를 실물로 제작하고, 테이블 및 프로젝트 전시 형태로 선보였습니다.",
          "Defined a reverse-order response system, produced physical cards and instructions, and presented the prototype in a project display.",
        ),
      ],
      results: [
        text(
          "캐릭터 능력·주사위·특수 카드 대응을 결합한 실물 카드게임 프로토타입을 제작하고, 제작 과정과 구성물을 전시했습니다.",
          "Produced and displayed a playable physical card-game prototype combining character abilities, dice checks and reactive card effects.",
        ),
      ],
    },
    cardRole: text("팀장 · 게임 기획·규칙 설계 · 카드 UI", "Team lead · Game and rules design · Card UI"),
    focus: "Board Game Design / Risk–Reward / Card Systems / Team Leadership",
  },
  {
    slug: "legend-sword",
    name: text("성검을 얻었는데 몸이 약하다", "성검을 얻었는데 몸이 약하다"),
    category: "more",
    summary: text("제한된 검 사용 횟수로 환경 장치를 작동시키고 연쇄 처치를 만드는 퍼즐 액션 플랫포머", "A puzzle-action platformer using limited sword swings to trigger environmental chain reactions."),
    environment: "Unity · PC",
    team: text("6인 팀 · 핵심 기능 구현", "6-person team · Core gameplay implementation"),
    roles: [
      text("프로그래밍 담당 · 게임 핵심 기능 구현 (AI 활용)", "Programming role · Core gameplay implementation (AI-assisted)"),
    ],
    color: "#d9d5df",
    achievements: [
      text("2026 TU 게임챌린지 최우수상", "2026 TU Game Challenge · Top Award"),
      text("2026 지스타 전시 참여", "Exhibited at G-STAR 2026"),
    ],
    image: {
      src: "assets/legend-sword/legend-sword-game-only.webp",
      alt: text("성검을 얻었는데 몸이 약하다 판타지 숲 게임 아트 발표 화면", "Fantasy forest artwork displayed for the Legend Sword game"),
    },
    sections: {
      gameplay: [
        text("주인공은 검을 스테이지마다 제한된 횟수만 사용할 수 있습니다. 적을 직접 베기보다 밧줄·통나무·벌집·버섯 등의 환경 기믹을 작동시켜 연쇄 처치하는 것이 핵심입니다.", "Sword swings are limited per stage. Rather than attacking enemies directly, players trigger logs, hives, ropes and mushrooms to set off chain reactions."),
      ],
      contribution: [
        text("6인 팀에서 프로그래밍을 맡아 게임의 핵심 플레이 기능을 구현했습니다. AI 도구를 보조적으로 활용해 기능을 제작하고 동작을 검토했으며, 전체 기획·원화·스테이지 디자인을 단독 담당한 것은 아닙니다.", "Handled core gameplay programming in a six-person team, using AI assistance for implementation and review. Overall concept, artwork and stage design were shared with other roles."),
      ],
      process: [
        text("기획서의 '검 사용 횟수 제한 → 환경 트리거 → 연쇄 처치' 흐름이 게임 내에서 작동하도록 핵심 기능 구현에 집중했습니다.", "Focused on implementing the core loop of limited sword swings, environmental triggers and chain defeats defined by the team."),
      ],
      results: [
        text("2026 TU 게임챌린지 최우수상 수상 및 2026 지스타 전시에 참여한 팀 프로젝트입니다.", "A team project recognized with a top award at the 2026 TU Game Challenge and shown at G-STAR 2026."),
      ],
    },
    cardRole: text("핵심 게임 기능 구현 (AI 활용)", "Core gameplay programming (AI-assisted)"),
    focus: "Core Gameplay Implementation / Puzzle Action / AI-assisted Development",
  },
  {
    slug: "world-first-kill",
    name: text(
      "The World Frist Kill Chellenge",
      "The World Frist Kill Chellenge",
    ),
    category: "art",
    summary: text(
      "제공받은 원화를 바탕으로 몬스터 5종 × 진화 5단계의 도트 애니메이션 작업",
      "Pixel animations for five monster types across five evolution stages, based on supplied concept art.",
    ),
    environment: text("그래픽·애니메이션", "Art & Animation"),
    team: text("그래픽 작업 참여", "Art contribution"),
    roles: [text("몬스터 도트 애니메이션", "Monster pixel animation")],
    color: "#d5d9dc",
    spritePreview: [
      {
        label: text("늑대", "Wolf"),
        src: "assets/world-first-kill/motion/wolf-motion.webp",
        stillSrc: "assets/world-first-kill/motion/wolf-still.webp",
        stages: [
          { sheet: "assets/world-first-kill/evolution/wolf-1.png", frames: 8 },
          { sheet: "assets/world-first-kill/evolution/wolf-2.png", frames: 7 },
          { sheet: "assets/world-first-kill/evolution/wolf-3.png", frames: 8 },
          { sheet: "assets/world-first-kill/evolution/wolf-4.png", frames: 8 },
          { motion: "assets/world-first-kill/motion/wolf-motion.webp", still: "assets/world-first-kill/motion/wolf-still.webp" },
        ],
      },
      {
        label: text("슬라임", "Slime"),
        src: "assets/world-first-kill/motion/slime-motion.webp",
        stillSrc: "assets/world-first-kill/motion/slime-still.webp",
        stages: [
          { sheet: "assets/world-first-kill/evolution/slime-1.png", frames: 10 },
          { sheet: "assets/world-first-kill/evolution/slime-2.png", frames: 14 },
          { sheet: "assets/world-first-kill/evolution/slime-3.png", frames: 11 },
          { sheet: "assets/world-first-kill/evolution/slime-4.png", frames: 11 },
          { motion: "assets/world-first-kill/motion/slime-motion.webp", still: "assets/world-first-kill/motion/slime-still.webp" },
        ],
      },
      {
        label: text("고블린", "Goblin"),
        src: "assets/world-first-kill/motion/goblin-motion.webp",
        stillSrc: "assets/world-first-kill/motion/goblin-still.webp",
        stages: [
          { sheet: "assets/world-first-kill/evolution/goblin-1.png", frames: 6 },
          { sheet: "assets/world-first-kill/evolution/goblin-2.png", frames: 6 },
          { sheet: "assets/world-first-kill/evolution/goblin-3.png", frames: 6 },
          { sheet: "assets/world-first-kill/evolution/goblin-4.png", frames: 6 },
          { motion: "assets/world-first-kill/motion/goblin-motion.webp", still: "assets/world-first-kill/motion/goblin-still.webp" },
        ],
      },
      {
        label: text("스켈레톤", "Skeleton"),
        src: "assets/world-first-kill/motion/skeleton-motion.webp",
        stillSrc: "assets/world-first-kill/motion/skeleton-still.webp",
        stages: [
          { sheet: "assets/world-first-kill/evolution/skeleton-1.png", frames: 9 },
          { sheet: "assets/world-first-kill/evolution/skeleton-2.png", frames: 9 },
          { sheet: "assets/world-first-kill/evolution/skeleton-3.png", frames: 9 },
          { sheet: "assets/world-first-kill/evolution/skeleton-4.png", frames: 9 },
          { motion: "assets/world-first-kill/motion/skeleton-motion.webp", still: "assets/world-first-kill/motion/skeleton-still.webp" },
        ],
      },
      {
        label: text("골렘", "Golem"),
        src: "assets/world-first-kill/motion/golem-motion.webp",
        stillSrc: "assets/world-first-kill/motion/golem-still.webp",
        stages: [
          { sheet: "assets/world-first-kill/evolution/golem-1.png", frames: 10 },
          { sheet: "assets/world-first-kill/evolution/golem-2.png", frames: 10 },
          { sheet: "assets/world-first-kill/evolution/golem-3.png", frames: 10 },
          { sheet: "assets/world-first-kill/evolution/golem-4.png", frames: 10 },
          { motion: "assets/world-first-kill/motion/golem-motion.webp", still: "assets/world-first-kill/motion/golem-still.webp" },
        ],
      },
    ],
    image: {
      src: "assets/world-first-kill/wfkc-monster-animation-cover.svg",
      alt: text("늑대·고블린·슬라임·골렘 몬스터 도트 스프라이트 대표 이미지", "Pixel sprite preview of wolf, goblin, slime and golem monsters"),
    },
    images: [{
      src: "assets/world-first-kill/wfkc-monster-animation-sheets.svg",
      alt: text("몬스터 5종의 5단계 진화 스프라이트 시트 모음", "Evolution stage 5 sprite sheets for all five monster types"),
      caption: text("5단계 진화 스프라이트 시트 비교", "Evolution stage 5 sprite sheet comparison"),
    }],
    sections: {
      contribution: [
        text(
          "제공받은 원화를 바탕으로 늑대·슬라임·고블린·스켈레톤·골렘 5종의 진화 1~5단계 도트 애니메이션을 작업했습니다. 캐릭터 원화와 게임 전체 기획은 담당하지 않았습니다.",
          "Created frame-based pixel animations for five evolution stages of each monster type: wolf, slime, goblin, skeleton and golem, based on provided concept art. Original character concepts and overall game design were not my role.",
        ),
      ],
      results: [
        text(
          "몬스터 5종 × 진화 5단계, 총 25개의 애니메이션 스프라이트 시트를 정리했습니다. 공개된 자료는 애니메이션 프레임 결과물이며 게임 플레이 영상은 아닙니다.",
          "Prepared 25 sprite sheets covering five monster types and five evolution stages each. These show animation frames rather than full in-game gameplay footage.",
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
