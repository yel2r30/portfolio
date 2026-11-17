# portfolio

**RIN Portfolio**는 게임 크리에이터 RIN의 개인 포트폴리오입니다. DEV-001에서는 한국어와 영어를 전환할 수 있는 임시 홈페이지를 제공합니다. 기본 언어는 한국어입니다.

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
