import { del, get, post, put } from 'koa-router-decors';

export default class user {

    @get('/user')
    public async getUser(ctx) {
        ctx.body = {
            "data": {
                "total": 7, 
                "users": [
                    {
                        "category": "user", 
                        "_id": "5d3449329346d51584ed41a6", 
                        "account": "11121212", 
                        "createdAt": "2019-07-21T11:14:58.264Z", 
                        "updatedAt": "2019-07-21T11:14:58.264Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "user", 
                        "_id": "5d341ee99346d51584ed41a5", 
                        "account": "222", 
                        "createdAt": "2019-07-21T08:14:33.379Z", 
                        "updatedAt": "2019-07-21T08:14:33.379Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "user", 
                        "_id": "5d341edc9346d51584ed41a4", 
                        "account": "111", 
                        "createdAt": "2019-07-21T08:14:20.757Z", 
                        "updatedAt": "2019-07-21T08:14:20.757Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "user", 
                        "_id": "5d3342719346d51584ed41a3", 
                        "account": "212", 
                        "createdAt": "2019-07-20T16:33:53.604Z", 
                        "updatedAt": "2019-07-20T16:33:53.604Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "admin", 
                        "_id": "5d2c17fe9346d51584ed419d", 
                        "account": "admin1", 
                        "createdAt": "2019-07-15T06:06:54.905Z", 
                        "updatedAt": "2019-07-15T06:06:54.905Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "user", 
                        "_id": "5d257c629346d51584ed419b", 
                        "account": "11", 
                        "createdAt": "2019-07-10T05:49:22.047Z", 
                        "updatedAt": "2019-07-17T07:10:01.686Z", 
                        "__v": 0
                    }, 
                    {
                        "category": "admin", 
                        "_id": "5d257c569346d51584ed419a", 
                        "account": "144", 
                        "createdAt": "2019-07-10T05:49:10.589Z", 
                        "updatedAt": "2019-07-15T06:18:40.971Z", 
                        "__v": 0
                    }
                ]
            }, 
            "msg": "success", 
            "errCode": 0
        }
    }
    @put('/user/modify')
    public async postUser(ctx) {
        ctx.body = {
            "msg": "success", 
            "errCode": 0
        }
    }

    @post('/user/create')
    public async createUser(ctx) {
        ctx.body = {
            "msg": "success", 
            "errCode": 0
        }
    }

    @del('/user/delete')
    public async delUser(ctx) {
        ctx.body = {
            "msg": "success", 
            "errCode": 0
        }
    }
}