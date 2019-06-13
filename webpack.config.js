const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = env => {
  return ({
    entry: './src/index.mjs',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: 7,
                compress: true
            },
            sourceMap: true
        })],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Example Webpack App',
        template: path.join(__dirname, 'public', 'index.html'),
        filename: './index.html'
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      }),
    ],
  });
};