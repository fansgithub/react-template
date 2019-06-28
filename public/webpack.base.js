
const path = require('path')
const gitRevision = require('git-revision');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const Happypack = require('happypack')

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        modules: [path.resolve('node_modules')],
        alias: {//别名
            'utils': path.join(__dirname, './src/utils/index.ts'),
            'ajax': path.join(__dirname, './src/services/index.ts'),
            '@components': path.join(__dirname, './src/components'),
            '@views': path.join(__dirname, './src/views'),
            '@theme': path.join(__dirname, './src/styles/theme.less'),
        },
        extensions: ['.tsx', '.ts', '.js', '.less', '.json'], //扩展名，依次查找
    },
    externals: {
        //使用CDN后 依然像写 import $ from 'jquery' 写法
        jquery: "$"
    },
    module: {
        noParse: /jquery/, //不去解析jquery
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
                }
            }
        }, {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'awesome-typescript-loader'
            }]
        }, {
            test: /\.(le|sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('dev')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new webpack.BannerPlugin(new Date().toLocaleString()),
        new webpack.IgnorePlugin(/\.\/local/, /moment/),
        //打印更新模块
        new webpack.NamedChunksPlugin(),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
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
    ]
}