/**
 * TODO eslint가 중복 세미콜론을 제거합니다.
 */

/*
    1. package.json에 lint스크립트 추가해줌.
        --fix옵션으로 자동으로 소스 고쳐지도록(문제에 나온 중복 세미콜론 제거됨)
    2. 그리고 터미널에 
         10:7  error  'foo' is assigned a value but never used  no-unused-vars
        이와 같은 에러를 볼 수 있는데 foo 변수가 사용되지 않는다는 경고임
*/

import MainController from "./controllers/MainController.js";

import "./app.scss";

const foo = "";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
