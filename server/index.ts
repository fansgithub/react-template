import * as Koa from 'koa';
import * as bodify from 'koa-body';
import * as timing from 'koa-xtime';
import * as logger from 'koa-logger';
import chalk from 'chalk';
import * as router from 'koa-router-decors';

//接口转发
const httpProxy = require('http-proxy');
const port = require('./package.json').config.port;
const proxyPort = port + 1;
const config = {
    'dev': `http://localhost:${proxyPort}`,
    /* 如果要与其他后端接口调试，添加配置项即可
        product: 'http://192.168.0.4:8080'
    */
};
const target = config['dev'];
httpProxy.createProxyServer({target}).listen(port);

//koa服务
const app = new Koa();
app.use(logger());
app.use(timing());
app.use(bodify());

app.use(router.load('', `${__dirname}/router`, {extname: '.{ts,js}'}).routes());
app.listen(proxyPort);
console.warn(`Server started: http://localhost:${chalk.red('' + port)}`);
