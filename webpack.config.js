const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				exclude: path.resolve(__dirname, 'node_modules'),
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: ['transform-class-properties']
						}
					}
				]
			}
		]
	}
};
