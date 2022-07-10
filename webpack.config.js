const path = require("path");

// es6모듈시스템이 아니라 노드의 모듈 시스템 사용하는것이라서 아래와 같은 키워드 사용
module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js", // entry에서 일치하는 키값(main)으로 번들링파일 이름 정함. 동적으로 파일 생성위해
    path: path.resolve("./dist"),
  },
};
