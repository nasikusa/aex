const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development';

const ts = {
  mode: ENV,
  entry: {
    'main': './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: '[name].js'
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
    minimize: ENV === 'production',
  },
};

module.exports = [ts];