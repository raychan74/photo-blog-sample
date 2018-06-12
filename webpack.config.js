const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		contentBase: './'
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
