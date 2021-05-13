const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "fp-dom-alert.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "fp-dom-alert",
      type: "umd",
    },
    clean: true,
  },
  externals: {
    lodash: {
      commonjs: "fp-dom-tool",
      commonjs2: "fp-dom-tool",
      amd: "fp-dom-tool",
      root: "_",
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
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
