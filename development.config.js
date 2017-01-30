module.exports = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	devtool: 'source-map',
	entry: {
		activity: './src/index'
	},
	output: {
		filename: 'main.js',
		chunkFilename: 'main.chunk.js',
		path: __dirname + '/dist'
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
