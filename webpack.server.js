const webpack 			= require('webpack');
const path 	  			= require('path');
const nodeExternals 	= require('webpack-node-externals');

const isProduction = (process.env.NODE_ENV === 'production');
module.exports = {
    target: 'node',
    entry: './src/server/index.js',
    externals: [nodeExternals()],
	output: {
		filename: 'server.js',
		path: path.join(__dirname, 'build'),
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [{
				loader: 'css-loader',
				options: {
					sourceMap: true,
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}]
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			ISCLIENT: "false",
		}),
	],
	// TYPE OF SOURCEMAP TO ENHANCE THE DEBUGGING
	devtool: isProduction ? 'source-map' : 'inline-source-map'
};