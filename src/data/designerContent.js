const text = (ko, en) => ({ ko, en });

export const designAreas = [
  {
    title: "Gameplay Design",
    description: text(
      "조작, 전투, 상호작용을 통해 플레이의 핵심 경험을 설계합니다.",
      "Designing the core experience through controls, combat and interaction.",
    ),
    projects: ["just-blocked", "keystone"],
  },
  {
    title: "System Design",
    description: text(
      "규칙, 자원 관리, 자동 공격, 성장·연계 구조 사이의 관계를 설계합니다.",
      "Designing relationships between rules, resources, automatic attacks, progression and synergies.",
    ),
    projects: ["orbit", "keystone"],
  },
  {
    title: "Prototyping & Iteration",
    description: text(
      "아이디어를 플레이할 수 있는 형태로 만들고 테스트와 피드백으로 수정합니다.",
      "Turning ideas into playable prototypes and refining them through testing and feedback.",
    ),
    projects: ["just-blocked", "orbit"],
  },
  {
    title: "Game UI / UX",
    description: text(
      "플레이어에게 필요한 정보와 조작 흐름을 명확하게 전달하는 인터페이스를 설계합니다.",
      "Designing interfaces that clearly communicate information and interaction flow.",
    ),
    projects: ["trunk"],
  },
];

export const experienceHighlights = [
  {
    title: "Awards",
    items: [
      text(
        "KeyStone · 교내 공모전 장려상",
        "KeyStone · Campus encouragement award",
      ),
      text(
        "컴퓨터 탈출기 · 교내 공모전 우수상",
        "컴퓨터 탈출기 · Campus excellence award",
      ),
      text(
        "성검을 얻었는데 몸이 약하다 · 팀 프로젝트 교내 공모전 최우수상",
        "성검을 얻었는데 몸이 약하다 · Team project campus top award",
      ),
    ],
  },
  {
    title: "Exhibitions & Releases",
    items: [
      text(
        "KeyStone · 원스토어 AI Games 배포",
        "KeyStone · Released on ONE store AI Games",
      ),
      text(
        "컴퓨터 탈출기 · 과거 지스타 전시",
        "컴퓨터 탈출기 · Previously exhibited at G-STAR",
      ),
      text(
        "KeyStone · 성검 프로젝트 · 2026 지스타 출품 예정",
        "KeyStone and 성검 project · Planned for G-STAR 2026",
      ),
    ],
  },
  {
    title: "Internship",
    items: [
      text(
        "Verse8 인턴십 · 인턴십 팀장 경험",
        "Verse8 internship · Internship team lead experience",
      ),
      text(
        "KeyStone과 Mystery Number 개별 제작",
        "Individual production of KeyStone and Mystery Number",
      ),
    ],
  },
  {
    title: "Collaboration & Leadership",
    items: [
      text(
        "팀 프로젝트 기획 및 팀장 경험",
        "Game planning and team leadership in collaborative projects",
      ),
      text(
        "Unity · Unreal Engine · Verse8 · 웹 제작 환경",
        "Unity · Unreal Engine · Verse8 · Web production",
      ),
      text(
        "자기설계교과의 여러 프로젝트 참여",
        "Participation in multiple self-designed course projects",
      ),
    ],
  },
];

export const contactLinks = [
  { label: "Email", value: "joy6420@naver.com", url: "mailto:joy6420@naver.com" },
  { label: "GitHub", value: "github.com/yel2r30", url: "https://github.com/yel2r30" },
];
