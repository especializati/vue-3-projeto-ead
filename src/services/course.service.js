import BaseService from "./base.service"

export default class CourseService extends BaseService {

    static async getCourses (params) {
        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .get('/courses', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

}