import { observable, action } from 'mobx'
import ajax from 'ajax'

class AuthStore {
	/**
	 * 用户信息
	 *
	 * @type {IAuthStore.UserInfo}
	 * @memberof AuthStore
	 */
    @observable
    userInfo = { name: 'zhangsan' }
    @action
    login = async (params): Promise<any> => {
        try {
            const res = await ajax.post('auth/login', params || {})
            if (res) {
                location.href = '#/home'
            }
        } catch (err) {
            console.error(err)
        }
    }
    logout = () => {

    }
}

export default new AuthStore()
