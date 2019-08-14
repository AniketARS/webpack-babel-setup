const path = require("path");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src/js/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
