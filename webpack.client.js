const webpack 			= require('webpack');
const path 	  			= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');
module.exports = {
	entry: './src/client/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
	module: {
		// WHEN A FILE MEETS THE CRITERIA, THEN RUN THE LOADER
		// IN THIS CASE, LOOK FOR ALL JS FILES AND USE BABEL TO CONVERT REACT, JSX AND ES6 TO ES5
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		// IN THIS CASE, LOOK FOR ALL S/CSS FILES AND USE LOADERS TO CONVERT TO CSS 
		{
			test: /\.s?css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
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
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			ISCLIENT: "true",
		}),
	],
	// TYPE OF SOURCEMAP TO ENHANCE THE DEBUGGING
	devtool: isProduction ? 'source-map' : 'inline-source-map'
	// devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     // TELLS THE SERVER THAT WE WILL HANDLE ROUTING VIA CLIENT SIDE
    //     historyApiFallback: true,
    //     // THE PATH OF THE ASSESTS (BUNDLE). IT WILL LOOK FOR THE BUNDLE.JS AND STYLES.CSS IN THIS PATH
    //     publicPath: '/dist/'
    // }
};