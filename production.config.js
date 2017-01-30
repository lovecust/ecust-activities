let webpack = require('webpack');

module.exports = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	// We generate sourcemaps in production. This is slow but gives good results.
	// You can exclude the *.map files from the build during deployment.
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
	},
	plugins: [
		// Minify the code.
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		// This helps ensure the builds are consistent if source hasn't changed:
		new webpack.optimize.OccurrenceOrderPlugin(),
		// Try to dedupe duplicated modules, if any:
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true, // React doesn't support IE8
				// warnings: false
				warnings: false
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				screw_ie8: true,
				comments: false
			}
		})
	],
	resolve: {
		// Using PReact to substitute for React.
		// @Ref: https://preactjs.com/guide/switching-to-preact
		// alias: {
		// 	'react': "preact-compat",
		// 	'react-dom': "preact-compat"
		// }
	}
};
