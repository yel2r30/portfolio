# RIN Portfolio 작업 지침

## 협업 절차

- 사용자가 결과를 검토하고 최종 승인한다.
- ChatGPT는 기획, 디자인 및 개발 요구사항을 관리하고 작업 지시서를 작성한다.
- Codex는 확정된 요구사항에 따라 단계별로 구현하고 테스트 및 오류 수정을 진행한 뒤 GitHub에 PR을 올린다.
- PR에 변경 파일, 검증 결과, 배포 상태를 기록한다. 병합은 사용자의 최종 승인을 거친다.

## 저장소 및 배포

- 공식 저장소는 `https://github.com/yel2r30/portfolio.git`이고 PR 대상은 `main`이다.
- GitHub Pages 주소는 `https://yel2r30.github.io/portfolio/`이다. Vite의 `base`를 `/portfolio/`로 유지하고 JSX에서 `public/assets/` 파일의 URL을 구성할 때 `import.meta.env.BASE_URL`을 사용한다.

## 개발 기준

- React, Vite, npm을 사용한다. 새 의존성은 기존 도구로 충족하기 어려운 요구사항에만 추가한다.
- 화면 단위 코드는 `src/pages`, 재사용 UI는 `src/components`, 언어별 문구 및 콘텐츠는 `src/data`에 둔다. 정적 파일은 `public/assets`에 둔다.
- 사용자에게 표시하는 문구를 추가할 때 한국어와 영어를 함께 관리한다. 언어 선택 기능을 수정할 때 문서의 `lang` 속성도 확인한다.
- 화면은 좁은 뷰포트와 키보드로 사용할 수 있어야 한다.
- PR을 제출하기 전에 `npm ci`와 `npm run build`를 실행한다. 화면이나 상호작용이 바뀌면 브라우저에서 해당 동작을 확인한다.
