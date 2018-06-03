const autoprefixer		 = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin 	 = require('uglifyjs-webpack-plugin');
const nodeExternals 	 = require('webpack-node-externals');
const path 	  			 = require('path');
const webpack 			 = require('webpack');

let pathsToClean = [
	'./build/*.*',
	'./public/*.*'
]

const isProduction = (process.env.NODE_ENV === 'production');
const clientConfig = {
	entry: './src/client/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
	module: {
		// WHEN A FILE MEETS THE CRITERIA, THEN RUN THE LOADER
		// IN THIS CASE, LOOK FOR ALL JS FILES AND USE BABEL TO CONVERT REACT, JSX AND ES6 TO ES5
		rules: [
			{
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
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [autoprefixer()],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
			}
		]
	},
	// TYPE OF SOURCEMAP TO ENHANCE THE DEBUGGING
	devtool: isProduction ? 'source-map' : 'inline-source-map',
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js$/,
				exclude: /node_modules/,
				parallel: true,
				sourceMap: true,
				cache: true,
			}),
		  	new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		// new CleanWebpackPlugin(pathsToClean),
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			ISCLIENT: "true"
		}),
	],
};

const serverConfig = {
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
				loader: 'css-loader/locals',
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
			ISCLIENT: "false"
		})
	]
	// TYPE OF SOURCEMAP TO ENHANCE THE DEBUGGING
	// devtool: isProduction ? 'source-map' : 'inline-source-map'
};

module.exports = [clientConfig, serverConfig];