const mutations = {
    ADD_MY_COURSES (state, myCourses) {
        state.myCourses = myCourses
    },

    SET_COURSE_SELECTED (state, course) {
        state.courseSelected = course
    }
}

export default mutations