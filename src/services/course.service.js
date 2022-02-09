import BaseService from "./base.service"

export default class CourseService extends BaseService {

    static async getCourses () {
        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .get('/courses')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async markLessonViewed (lessonId) {
        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .post('/lessons/viewed', {
                    lesson: lessonId
                })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}