/**
 * TODO: Prettier가 스타일을 수정합니다.
 */

/*
    1. npm i prettier 로 프리티어 설치
    2. npx prettier src/app.js --write 로 코드 정리
      싱글쿼터가 더블쿼트로, 생략된 세미콜론이 추가됨, 애로우펑션 빈공간, 인덴트 추가
*/

import MainController from "./controllers/MainController.js";

import "./app.scss";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
