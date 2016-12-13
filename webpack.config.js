
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var react = path.resolve(__dirname, 'source/');
var build = path.resolve(__dirname, 'dist/');
var path = require("path");

const config = {
  context: __dirname,

  entry:{
     filename: react+'/index.jsx'
  },
  output:{
    path: build,
    filename: 'js/bundle.js?cache=[hash]'
  },
  resolve: {
    root: [
      path.resolve('./source')
    ]
  },
  module: {
    loaders : 
      [

      {test: /\.(jpg|png|gif|svg)$/i,loader: 'url-loader?mimetype=image/png'},
      {test : /\.(js|jsx)$/, loaders : ['babel-loader'], exclude: /(node_modules|bower_components)/},
      {test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') }
      ]
  },
  exclude: [
    path.resolve(__dirname, "node_modules"),
  ],
  plugins: [
   new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
    new ExtractTextPlugin('css/app.css')
    /*
     new HtmlWebpackPlugin({
      title: 'My App',
      template: react+'/views/react.ejs',
      filename: build+'/react.ejs'

    })
    */
  /*
  new webpack.optimize.UglifyJsPlugin({
        compress: {
              warnings: false
        }
      })
      */
  ]
};

module.exports = config;

