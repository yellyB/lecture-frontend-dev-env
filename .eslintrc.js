// TODO: eslint를 구성해 보세요.
/*
    1. npm i eslint
    2. npx eslint --init 한 후 터미널에서 설정을 선택해줌
    3. 린트설정파일에 설정이 생성됨
*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
