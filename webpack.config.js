module.exports = {
	devServer: {
		contentBase: './dist'
	},
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
		publicPath: '/'
	}
};
