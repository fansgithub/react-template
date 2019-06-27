const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
const port = require('./package.json').config.port
const apiPort = require('../server/package.json').config.port

module.exports = smart(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port,
        open: true,
        progress: true,
        useLocalIp: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        compress: true,
        hot: true,
        proxy: {
            '/api': {
                target: `http://localhost:${apiPort}`,
                pathRewrite: {'/api': ''}
            }
        },
    }
})