require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


const config = {
  entry: ['./src/frontAdminPanel/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      }, {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { 
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"] 
      },
    ],
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname, "src", "frontAdminPanel"), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src", "frontAdminPanel")
  },
  plugins: [
    new FaviconsWebpackPlugin(path.join(__dirname, "public", "logo.ico")),
    new HtmlWebpackPlugin({
      template  : path.join(__dirname, "public", "template-index.html"),
      filename : 'index.html',
      inject : 'body'
  }),
    new Dotenv({
      path: './.env',
    }),
  ],
};

module.exports = config;
