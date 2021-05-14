const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  target: "web",
  output: {
    filename: "fp-dom-alert.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "fpDomAlert",
      type: "umd",
      globalObject: "this",
      umdNamedDefine: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
