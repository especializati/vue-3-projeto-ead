import CourseService from '@/services/course.service'

const actions = {
    getCourses ({commit}) {
        CourseService.getCourses()
                        .then(response => commit('ADD_MY_COURSES', response.data))
    }
}

export default actions