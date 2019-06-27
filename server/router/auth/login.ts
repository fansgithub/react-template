import { post} from 'koa-router-decors';

export default class Login {

  
    @post('/auth/login')
    public async postDemo(ctx) {
        ctx.body = {
            errCode: 0,
            data: {
                name: 'demo'
            }
        }
    }
}