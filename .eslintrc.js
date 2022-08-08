module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // TODO: 프리티어 설정을 추가하세요.
  /*
    1. app.js에서 한것처럼 수동으로 돌리는건 귀찮음.
        때문에 자동으로 코드 수정되도록 설정하기

        npm i eslint-config-pretter eslint-plugin-prettier 로 두가지 설치

    2. rules에 추가해도 되지만 간단하게 extends에서 prettier plugin을 설정해줌
    3. npm run lint로 이미 추가되어있는 lint 스크립트를 돌려줌
    */
  rules: {},
};
