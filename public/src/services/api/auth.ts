import ajax from 'ajax'

export default {
    login(data: object): Promise<any> {
        return ajax.post('auth/login', data || {})
    }
}
