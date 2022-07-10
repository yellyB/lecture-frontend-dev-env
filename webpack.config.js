const path = require("path");

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
        test: /\.css$/, // css로 끝나는 모든 파일
        use: ["style-loader", "css-loader"], // 순서 중요: 배열의 뒤에서부터 순서대로 처리
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[ext]?[hash]", // hash값은 웹팩이 빌드할때마다 변경되는 해쉬 값
      //     publicPath: "./dist", // dist폴더에 있는 이미지 호출하도록: index파일이 src바깥에 있기 때문에 dist에 있는거 호출한다고 알려주기
      //   },
      // },

      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]", // hash값은 웹팩이 빌드할때마다 변경되는 해쉬 값
          publicPath: "./dist", // dist폴더에 있는 이미지 호출하도록: index파일이 src바깥에 있기 때문에 dist에 있는거 호출한다고 알려주기
          limit: 10000, //100kb미만은 url로더가 처리. 그 이상은 파일로더가 처리
        },
      },
    ],
  },
};
