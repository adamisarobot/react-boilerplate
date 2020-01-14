const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          { 
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }, 
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(png|jpg?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
  ]
};
