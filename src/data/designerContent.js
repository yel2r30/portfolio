const text = (ko, en) => ({ ko, en });

// Keep the landing page focused on specialties, not repeated project descriptions.
export const focusAreas = [
  "Gameplay Design",
  "System Design",
  "Prototyping",
  "Game UI / UX",
];

export const backgroundHighlights = [
  {
    title: "Education",
    items: [
      text(
        "동명대학교 게임그래픽학과 · 재학 중",
        "Dongmyung University · Game Graphics (enrolled)",
      ),
    ],
  },
  {
    title: "Experience",
    items: [
      text("Verse8 인턴십 · 팀장", "Verse8 internship · Team lead"),
      text("UPTRAND 동아리 부회장", "UPTRAND club · Vice president"),
    ],
  },
  {
    title: "Awards",
    items: [
      text("KeyStone · 교내 공모전 장려상", "KeyStone · Campus encouragement award"),
      text("컴퓨터 탈출기 · 교내 공모전 우수상", "컴퓨터 탈출기 · Campus excellence award"),
      text("성검을 얻었는데 몸이 약하다 · 팀 프로젝트 최우수상", "성검을 얻었는데 몸이 약하다 · Team project top award"),
    ],
  },
  {
    title: "Exhibitions & Releases",
    items: [
      text("지스타 전시 참가 경험", "G-STAR exhibition experience"),
      text("KeyStone · 원스토어 AI Games 배포", "KeyStone · Released on ONE store AI Games"),
    ],
  },
];

export const contactLinks = [
  { label: "Email", value: "joy6420@naver.com", url: "mailto:joy6420@naver.com" },
  { label: "GitHub", value: "github.com/yel2r30", url: "https://github.com/yel2r30" },
];
