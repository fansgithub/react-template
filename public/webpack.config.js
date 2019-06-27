/* 改文件已被拆分，待删除 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Happypack = require('happypack')
const gitRevision = require('git-revision');

const port = require('./package.json').config.port
const apiPort = require('../server/package.json').config.port

console.log(process.env.NODE_ENV)

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'build'),
        //publicPath: 'http://www.baidu.com'
    },
    devtool: 'source-map',
    // watch: true,
    // watchOptions: {
    //     poll: 1000,
    //     aggregateTimeout: 500,
    //     ignored: /node_modules/
    // },
    resolve: {
        modules: [path.resolve('node_modules')],
        alias: {//别名
            
        },
        extensions: ['.tsx', '.ts', '.js', '.less', '.json'], //扩展名，依次查找
    },
    externals: {
        //使用CDN后 依然像写 import $ from 'jquery' 写法
        jquery: "$"
    },
    module: {
        noParse: /jquery|lodash/, //不去解析jquery
        rules: [{
            test: /\.html$/,
            use: 'html-withimg-loader'
        },{
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 40 * 1024,
                    outputPath: '/img',
                    //publicPath: 'http://www.baidu.com'
                }
            }
        },{
            test: /\.js$/,
            // use: {
            //     loader: 'eslint-loader',
            //     options: {
            //         enforce: 'pre' //pre post 执行顺序 loader的执行顺序 是从右到左，从下到上
            //     }
            // }
        }, {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'awesome-typescript-loader',
            }]
        }, {
            test: /\.(le|sa|sc|c)ss$/,
            //use: 'Happypack/loader?id=style',
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
        }]
    },
    plugins: [
        new Happypack({
            id: 'js',
            use: ['babel-loader'],
        }),
        // new Happypack({
        //     id: 'style',
        //     //报错
        //     //use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        //     use: ['css-loader', 'postcss-loader']
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, 'build/minifest.json')
        // }),
        new webpack.DefinePlugin({
            DEV: JSON.stringify('dev')
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            favicon: './src/assets/images/favicon.ico',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            chunks: ['index'],
            banner: {
                branch: gitRevision('branch'),
                tag: gitRevision('tag'),
                date: new Date().toLocaleString(),
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: 'assets'
        }]),
        new webpack.BannerPlugin(new Date().toLocaleString()),
        new webpack.IgnorePlugin(/\.\/local/, /moment/),
        //打印更新模块
        new webpack.NamedChunksPlugin(),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port,
        open: true,
        progress: true,
        useLocalIp: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        //contentBase: './build',
        compress: true,
        hot: true,
        proxy: {
            '/api': {
                target: `http://localhost:${apiPort}`,
                pathRewrite: {'/api': ''}
            }
        },
        // before(app){
        //     app.get('/api/user', (req, res)=>{
        //         res.json({name: 'fanxing'})
        //     })
        // }
    },
    optimization: {
        //使用 optimize-css-assets-webpack-plugin 压缩css后，js也必须使用 uglifyjs-webpack-plugin 来压缩
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            //分割代码块
            cacheGroups: {
                common: {
                    //公共模块
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2,
                    name: 'common'
                },
                vendor: {
                    //权重优先抽离
                    priority: 1,
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2,
                    name: 'vendor'
                }
            }
        }
    }
}