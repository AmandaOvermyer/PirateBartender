var path = require('path');

var webpack = require('webpack');

var output = 'build.js';

module.exports = {
	entry: path.resolve(__dirname, 'js/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: output,
	},
  
	module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
}