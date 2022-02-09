import CourseService from '@/services/course.service'

const actions = {
    getCourses ({commit}) {
        CourseService.getCourses()
                        .then(response => commit('ADD_MY_COURSES', response.data))
    },

    markLessonViewed ({commit, state}) {
        CourseService.markLessonViewed(state.lessonPlayer.id)
                        .then(() => commit('ADD_NEW_VIEW_LESSON'))
    },
}

export default actions