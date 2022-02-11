import SupportService from '@/services/support.service'

const actions = {
    getSupportsOfLesson ({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports))
    },

    createSupport ({commit}, params) {
        return SupportService.storeSupport(params)
                                .then(response => commit('ADD_NEW_SUPPORT', response.data))
    },

    createNewReplyToSupport ({commit}, params) {
        return SupportService.newReplySupport(params)
                                .then(response => {
                                    const data = {
                                        reply: response.data,
                                        supportId: params.support
                                    }
                                    commit('ADD_NEW_REPLY_TO_SUPPORT', data)
                                })
    },

    getMySupports ({commit}, params) {
        return SupportService.getMySupports(params)
                                .then(response => commit('SET_SUPPORTS', response))
    },
}

export default actions