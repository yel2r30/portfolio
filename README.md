# portfolio

**RIN Portfolio**는 게임 크리에이터 RIN의 개인 포트폴리오입니다. HOME, WORKS, 11개 프로젝트의 상세 페이지를 제공합니다. 기본 언어는 한국어이며 영어 전환과 시스템·라이트·다크 테마 선택을 지원합니다.

공식 개발 저장소는 [`yel2r30/portfolio`](https://github.com/yel2r30/portfolio)이며 기본 브랜치는 `main`입니다.

## 로컬 실행

Node.js 24와 npm이 필요합니다. Node 버전은 `.nvmrc`에 기록되어 있습니다.

```sh
npm ci
npm run dev
```

터미널에 표시된 로컬 주소를 엽니다. 배포용 빌드를 확인하려면 다음을 실행합니다.

```sh
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. 기본 미리보기 주소는 `http://localhost:4173/portfolio/`입니다.

## 소스 구조

| 경로 | 용도 |
| --- | --- |
| `src/components/` | 재사용 UI |
| `src/pages/` | 페이지 컴포넌트 |
| `src/data/` | 언어별 문구 및 콘텐츠 |
| `public/assets/` | 빌드 시 복사되는 정적 파일 |

## GitHub Pages 배포

1. [저장소의 Pages 설정](https://github.com/yel2r30/portfolio/settings/pages)에서 **Build and deployment → Source**를 **GitHub Actions**로 지정합니다.
2. PR에서는 빌드 검사가 실행됩니다. 사용자 승인 후 변경 사항이 `main`에 반영되면 **Build and deploy to GitHub Pages** 워크플로가 `dist/`를 빌드하고 배포합니다. **Actions** 탭에서 `main`을 선택해 수동으로 실행할 수도 있습니다.
3. **Actions** 탭에서 배포 결과를 확인한 후 [RIN Portfolio](https://yel2r30.github.io/portfolio/)를 엽니다.

Vite의 `base`는 프로젝트 사이트 경로인 `/portfolio/`입니다. `public/assets/`의 파일을 JSX에서 참조할 때는 `${import.meta.env.BASE_URL}assets/파일명`으로 주소를 구성합니다. [Vite GitHub Pages 배포 가이드](https://vite.dev/guide/static-deploy#github-pages)

## 페이지와 콘텐츠 관리

- HOME은 `/portfolio/#/`, WORKS는 `/portfolio/#/works`, 상세 페이지는 `/portfolio/#/works/keystone` 형식입니다. 해시 기반 경로로 GitHub Pages에서 상세 주소 직접 접근과 새로고침을 처리합니다.
- `src/data/projects.js`가 목록, HOME 대표작, 상세 페이지의 단일 데이터 소스입니다. `category`는 `case`, `more`, `art`를 사용합니다. `homeOrder` 숫자가 작은 프로젝트부터 HOME에 최대 3개를 노출하고 첫 카드를 크게 배치합니다.
- `name`, `summary`, `team`, `status`, `roles`, `history`, `achievements`는 `{ ko, en }` 형식으로 관리합니다. 공식 영어 제목이 없는 작품은 한국어 이름을 유지합니다.
- 선택 필드 `period`는 제작 기간, `image`는 대표 이미지, `images`는 추가 이미지, `links`는 확인한 외부 링크를 담습니다. 이미지는 `{ src: 'assets/파일명', alt: { ko, en } }`, 링크는 `{ label: { ko, en }, url: 'https://...' }` 형태입니다. 이미지 로딩 실패 시 준비 중 썸네일로 대체합니다.
- `sections`의 `gameplay`, `contribution`, `process`, `results`에 언어별 문단 배열을 넣습니다. 자료가 없는 섹션은 표시하지 않습니다. 향후 `easterEgg` 선택 필드를 프로젝트 데이터에 추가할 수 있으며 이번 구현에는 실행 로직이 없습니다.
- 테마 팔레트는 `src/styles.css`의 CSS 변수로 관리합니다. 수동 테마는 `rin-theme` 키로 브라우저에 저장하고 시스템 선택 시 저장값을 제거합니다.
- 현재 실제 이미지, 확인된 외부 링크, 연락처는 제공되지 않아 준비 상태입니다. 기획 과정과 회고는 확인된 자료가 확보되면 추가합니다.
