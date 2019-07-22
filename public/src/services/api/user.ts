import ajax from 'ajax'

export default {
    getUsers(data: object): Promise<any> {
        return ajax.get('user', data || {})
    },

    createUser(data: object): Promise<any> {
        return ajax.post('user/create', data || {})
    },

    modifyUser(data: object): Promise<any> {
        return ajax.put('user/modify', data || {})
    },

    deleteUser(data: object): Promise<any> {
        return ajax.delete('user/delete', data || {})
    }
}
