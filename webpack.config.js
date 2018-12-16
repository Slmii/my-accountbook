const autoprefixer		 = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const nodeExternals 	 = require('webpack-node-externals');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path 	  			 = require('path');
const UglifyJsPlugin 	 = require('uglifyjs-webpack-plugin');
const webpack 			 = require('webpack');

let pathsToClean = [
	'./build/*.*',
	'./public/*.*',
	'./public/assets/images/*.*'
]

const isProduction = (process.env.NODE_ENV === 'production');
const clientConfig = {
	entry: './src/client/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: './public/'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: !isProduction ? 'assets/images/[name].[ext]' : 'assets/images/[hash].[ext]'
							// publicPath: url => url.replace('dist/', "")
						}  
					  }
				]					
			},
			{
				test: /\.(svg|eot|ttf|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: 'assets/fonts/[name].[ext]'
					}
				}
			},
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
		new CleanWebpackPlugin(pathsToClean),
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
		path: path.join(__dirname, 'build'),
		filename: 'server.js',
		publicPath: './build/'
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
};

module.exports = [clientConfig, serverConfig];