const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const babel_jsx = require('@babel/plugin-transform-react-jsx');

module.exports = env => {
  return ({
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "to-string-loader",
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env',
                { targets: { chrome: 72 } },
              ]],
              plugins: [[
                '@babel/plugin-transform-react-jsx',
                {
                  "pragma": "createJSXElement",
                  "pragmaFrag": "DomFrag",
                  "throwIfNamespace": false
                }
              ]]
            }
          }
        },
      ],
    },
    optimization: {
      minimizer: [new TerserPlugin({
        terserOptions: {
          ecma: 7,
          compress: false
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