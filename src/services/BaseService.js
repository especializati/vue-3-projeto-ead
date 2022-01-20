import Http from "./Http.init"

export default class BaseService {

    constructor() {
        this.instance = new BaseService
    }

    static request (status = { auth: false }) {
        return new Http(status)
    }

}