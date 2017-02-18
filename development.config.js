/**
 * Webpack configure File for development.
 */

'use strict';

let path = require('path');

module.exports = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	devtool: 'source-map',
	entry: {
		activity: './src/index'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
};
