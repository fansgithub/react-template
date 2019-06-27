import { observable, action } from 'mobx';
import Ajax from 'Ajax';

class AuthStore {
    /**
     * 用户信息
     *
     * @type {IAuthStore.UserInfo}
     * @memberof AuthStore
     */
    @observable
    userInfo = ''

    @action
    login = async (params): Promise<any> => {
        try {
            const res = await Ajax.post('auth/login', params || {})
            if(res){
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
