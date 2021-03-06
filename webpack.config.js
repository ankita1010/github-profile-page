
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const manifestJson = require('./public/manifest.json');

const VENDOR_LIBS = ["react", "react-dom", "redux", "redux-thunk", "react-redux"];
const config = function (env) {
  	const isProduction = env === 'production';
	return {
		mode: isProduction ? "production" : "development",
		devtool: isProduction ? "none" : "cheap-module-eval-source-map",
		entry: {
			bundle: ["@babel/polyfill", "./src/index.js"],
			vendor: VENDOR_LIBS
		},
		output: {
			path: path.resolve(__dirname, "build"),
			filename: isProduction ? "js/[name].[hash:8].chunk.js" : "js/[name].js"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				favicon: './public/assets/favicon.png' 
			}),
			new MiniCssExtractPlugin({
				filename: "styles/[name].built.css"
			}),
			new ManifestPlugin({
				generate: () => manifestJson
			})
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						enforce: true
					}
				}
			}
		},
		devServer: {
			contentBase: "./build",
			host: "localhost",
			open: true,
			historyApiFallback: true,
		},
		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: "babel-loader"
				},
				{
					test: /.(json)/,
					exclude: /node_modules/,
					use: [{
						loader: 'file-loader',
						options: { name: '[name].[ext]' },
					}],
				},
				{
					test: /.(jpg|png|ogg|mp3)$/,
					use: {
						loader: "file-loader",
						options: {
							name: "static/media/[name].[hash:8].[ext]"
						}
					}
				},
				{
					test: /.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader" },
						{ loader: "sass-loader" }
					]
				}
			]
		}
	}
}
module.exports = config;
