const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000, // 10Kb
        },
      },
    ],
  },
  /**
   * TODO: 아래 플러그인을 추가해서 번들 결과를 만들어 보세요.
   * 1. BannerPlugin: 결과물에 빌드 시간을 출력하세요.
   * 2. HtmlWebpackPlugin: 동적으로 html 파일을 생성하세요.
   * 3. CleanWebpackPlugin: 빌드 전에 아웃풋 폴더를 깨끗히 정리하세요.
   * 4. MiniCssExtractPlugin: 모듈에서 css 파일을 분리하세요.
   */

  /*
  전부 entry포인트에서 시작해서 output파일로 빌드하는 과정임.
  빌드 결과는 dist의 파일들로 확인하자
  [BannerPlugin]
    - BannerPlugin은 웹팩에서 기본적으로 제공함.
      그렇기때문에 따로 설치 없이 webpack모듈에서 임포트
    1. webpack설정파일에서 플러그인 설정부분을 만든 뒤 배너 설정
    2. 빌드하면 main.js에서 상단에 날짜, 시간 확인 가능
  [HtmlWebpackPlugin]
    1. npm i html-webpack-plugin@4 로 버전 명시해서 설치
    2. 플러그인 설정 해준 뒤 빌드하면 일단 dist의 index.html 하단에 main.js 임포트 됨
    3. webpack설정파일에서 templateParameters 설정을 해줌
    * (NODE_ENV에러나서 아직 해결중. 일단은 ===연산자를 !==로 변경함)
  [CleanWebpackPlugin]
    1. npm i clean-webpakc-plugin 설치
    2. 생성자 함수로 임포트
    3. plugin에서 new 키워드로 선언만 해주면 끝
    * 테스트하려면 dist에 임시파일 만든 뒤 빌드해봐서 임시파일 삭제 되는지 보자
  [MiniCssExtractPlugin]
    1. npm i mini-css-extract-plugin@1
    2. 운영환경에서만 css파일 분리되도록 plugins에서 설정해주고
    3. style-loader대신에 mini-css-extract 써야하므로 삼항연산자로 style-loader대신 mini css 로더 불러오도록 해줌
    * (NODE_ENV에러나서 아직 해결중. 일단은 ===연산자를 !==로 변경함)
  */

  plugins: [
    new webpack.BannerPlugin({
      banner: `Build Time: ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV !== "development" ? "(개발용)" : "",
      },
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV !== "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ],
};
