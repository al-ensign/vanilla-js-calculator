const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['.ts', '.tsx', '.js']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'esbuild-loader',
        options: {
            loader: 'ts',
            target: 'es6',
            exclude: /node_modules/,
            include: resolve(__dirname, 'src'),
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
