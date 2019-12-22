const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  mode: 'production',
  entry: {
    'main': './src/main.ts',
    'SearchUnsplash': './src/generate/SearchUnsplash.ts',
    'SearchSketchfab': './src/generate/search/SearchSkechfab.ts',
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
    minimize: false,
  //   minimizer: [new UglifyJsPlugin({
  //     // include: /\.min\.js$/
  //   })]
  }
};
