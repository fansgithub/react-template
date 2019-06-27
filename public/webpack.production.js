const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = smart(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([{
        //     from: './src/assets',
        //     to: 'assets'
        // }])
    ],
    optimization: {
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
})