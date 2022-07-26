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
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
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
      /**
       * TODO: babel-loader를 구성해 보세요.
       */

      /*
      1. npm i babel-loader
      2. 설치 후 바벨로더 설정해주기.
       *  .js 파일을 만나면 웹팩이 바벨로더 실행하도록 해줬는데
          바벨을 실행하려면 바벨코어 필요.
          npm i @babel/core
          그 후 바벨코어를 위해 바벨설정파일에서 설정해줌
       * 바벨로더가 엔트리포인트부터 모든 js파일 찾아갈 때 노드모듈 파일은 빼주기
      */
      {
        test: /\.js$/,
        loader: "babel-loader", // 혹은 use: ["babel-loader"]
        exclude: /node_modules/,
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
