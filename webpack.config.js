const path = require('path');
const webpack =require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.join(__dirname, './src/public/js/index.js'),
	output:{
		filename: 'js/index.js', //输出的文件名
		path: path.join(__dirname,'./build/public/'),
		publicPath:'/'
	},
	module:{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader:'babel-loader',
			query:{
				presets:['es2015','stage-0']
			}
		},{
			test: /\.styl$/,
			loader: ExtractTextPlugin.extract({
				fallback:'style-loader',
				use:['css-loader','stylus-loader']
			})
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback:'style-loader',
				use:['css-loader']
			})			
		},{
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        query: {
	          limit: 10000
	        }
	    },{
			test: /\.vue$/,
			loader: "vue-loader"
		}]
	},
    resolve: {
        extensions: ['.js', '.vue','.styl'],
        alias: {
            'vue$': 'vue/dist/vue.js',
            'axios$': 'axios/dist/axios.min.js'
        }
	},  
    devtool: "#source-map",
	plugins:[
		new LiveReloadPlugin({
			appendScriptTag:true
		}),
		new LiveReloadPlugin({
			appendScriptTag:true
		}),
		new ExtractTextPlugin("style/index.css"),
		new HtmlWebpackPlugin({
			filename:'../view/index.swig',
			template:'src/view/index.swig'
		})
	]
};