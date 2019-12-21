const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  mode: 'production',
  entry: {
    Aex: './src/Aex.ts'
  },
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: '[name].js',
    library: 'Aex',
    libraryTarget: 'umd'
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
