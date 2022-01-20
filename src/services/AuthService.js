import BaseService from "./BaseService"

export default class AuthService extends BaseService {

    static async auth (params) {
        return this.request()
                    .post('/auth', params)
    }

}