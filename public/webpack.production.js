const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [new CleanWebpackPlugin()];
if(process.env.Bundle_ANALYZER === 'true'){
    plugin = [new BundleAnalyzerPlugin()]
}

module.exports = smart(base, {
    mode: 'production',
    plugins,
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