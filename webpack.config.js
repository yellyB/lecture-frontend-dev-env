const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

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
        test: /\.(scss|css)$/, // scss와 css 둘다 처리할 수 있도록 해줌
        use: [
          /**
           * TODO: SASS 코드를 사용할수 있겠끔 sass-loader를 구성하세요.
           */

          /*
            1.
            npm run build를 실행해보면 아래와 같은 에러가 뜸

            ERROR in ./src/views/FormView.scss 1:0
            Module parse failed: Unexpected character '@' (1:0)

            FormView.js에서 사스파일을 불러오는데 사스파일을 로더가 처리하지 못하는 문제임.
            이걸 해결해주는것이 sass-loader

            2.
            sass-loader(웹팩에서 노드사스를 돌려줌) node-sass(사스코드를 css로 컴파일) webpack 세가지를 설치해야함
            웹팩은 이미 있으니 npm i sass-loader node-sass 해줌

            3.
            그 후 웹팩 로더 설정에 sass-loader를 추가해준다
            
           */
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
          "sass-loader",
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      hash: process.env.NODE_ENV === "production",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
