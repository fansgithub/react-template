import { del, get, post, put } from 'koa-router-decors';

export default class Demo {

    @get('/demo')
    public async getDemo(ctx) {
        ctx.body = {
            content: '这是一个模拟的get请求的响应值'
        }
    }
    @post('/demo')
    public async postDemo(ctx) {
        ctx.body = {
            content: '这是一个模拟的post请求的响应值'
        }
    }
    @put('/demo')
    public async putDemo(ctx) {
        ctx.body = {
            content: '这是一个模拟的put请求的响应值'
        }
    }
    @del('/demo')
    public async delDemo(ctx) {
        ctx.body = {
            content: '这是一个模拟的del请求的响应值'
        }
    }
}