const path = require('path');
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'bundle.jsx'
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
    terserOptions: {
      ecma: 6,
      compress: true,
      output: {
        comments: false,
        beautify: false
      }
    }
  })]
}
};