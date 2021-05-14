const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  target: "web",
  output: {
    filename: "fp-dom-alert.js",
    path: path.resolve(__dirname, "lib"),
    library: {
      name: "fpDomAlert",
      type: "umd",
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
};
