const path = require('path');
const ENV = process.env.NODE_ENV || 'production';
const MINIMIZE = process.env.NODE_WEBPACK_MINIMIZE || false;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ts = {
  mode: ENV,
  entry: {
    main: './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: MINIMIZE === 'yes',
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {comments: /^\**!|@preserve|@license|@cc_on/},
      },
    })]
  },
};

module.exports = [ts];
