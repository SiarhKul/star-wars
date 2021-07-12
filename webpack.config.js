const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const filename = ext => (isDev ? `bundle.${ext}` : `bundle.[fullhash].${ext}`);

const config = {
  mode: 'development',

  entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: filename('css') }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 3000,
    open: isDev,
    watchContentBase: true,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : false,
};

module.exports = config;
