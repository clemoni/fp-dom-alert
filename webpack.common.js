const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },

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
    fpdomtool: {
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
    ],
  },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./src/index.html",
  //     }),
  //   ],
};
