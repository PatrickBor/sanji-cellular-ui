'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'eval-source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-cellular-ui.js';
config.output.library = 'sjCellular';
config.output.libraryTarget = 'umd';
config.externals = {
  'sanji-core-ui': 'sjCore'
};

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.plugins.push(
  new ExtractTextPlugin('sanji-cellular-ui.css'),
  new WebpackNotifierPlugin({title: 'Webpack'}),
  new webpack.optimize.DedupePlugin()
);
module.exports = config;
