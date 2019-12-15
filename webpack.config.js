const path = require('path');
const webpack = require("webpack");
// const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      // include: /\.min\.js$/
    })]
  }
};