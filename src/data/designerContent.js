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
      {
        ...text(
          "UPTRAND · 2024년 2학기~현재 / 2026 부회장",
          "UPTRAND · Fall 2024–present / Vice President (2026)",
        ),
        url: "https://uptrand.com/",
      },
      {
        ...text(
          "GAME OVER? · 2026 제1회 컨퍼런스 운영진",
          "GAME OVER? · Organizing team, inaugural conference (2026)",
        ),
        url: "https://game-dev-conference-gameover.github.io/GAMEOVER_Homepage/",
      },
      text("재밌넥 4기 수료 · 미믹 취급 주의 제작 / Grave Shot 선정 과제", "Completed Jaemitnet cohort 4 · Mimic project / Grave Shot selected project"),
    ],
  },
  {
    title: "Awards",
    items: [
      text("2026 TU 게임챌린지 · 성검 최우수상", "2026 TU Game Challenge · Legend Sword, Top Award"),
      text("2026 TU 게임챌린지 · KeyStone / Grave Shot 장려상", "2026 TU Game Challenge · KeyStone / Grave Shot, Encouragement Awards"),
      text("2025 TU 게임챌린지 · 컴퓨터 탈출기 우수상", "2025 TU Game Challenge · Computer Escape, Excellence Award"),
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
