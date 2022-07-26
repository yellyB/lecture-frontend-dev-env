/**
 * TODO: IE11에서도 동작하는 자바스크립트로 변환할수 있게 바벨을 구성하세요.
 */

/*
1. preset을 설치
2. 이 단계에서 build를 실행하는데 babel/core를 찾을 수 없다는 에러 메시지만 뜨길래
    여러가지 시도를 다 해보았는데
    결론은 바벨코어와 바벨로더를 데브디펜던시로 설치해야 했었다.
    혹시나해서 바벨코어만 -dev로 설치해보았었는데 둘 다 그렇게 설치해야했었나봄
     npm install babel-core babel-loader --save-dev
3. 빌드된 파일에서 찾아보면 기존에 있던 const는 검색결과 없고 var만 존재.
    하지만 Promise같은건 남아있기 때문에 따로 설정 필요
*/
module.exports = {
  presets: [
    "@babel/preset-env",
    {
      targets: {
        ie: "11",
      },
      // 폴리필 쓰기위한 부분
      // IE가 이해하지 못하는 코드(Promise같은)에 폴리필 임포트하는 코드 추가함
      // 임포트 될 라이브러리 사용해야함 (= corejs)
      useBuiltIns: "usage",
      corejs: {
        version: 2,
      },
    },
  ],
};
