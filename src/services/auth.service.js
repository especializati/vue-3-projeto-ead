import BaseService from "./base.service"

export default class AuthService extends BaseService {

    static async auth (params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/auth', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

}