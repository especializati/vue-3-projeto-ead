import AuthService from "@/services/auth.service"
import ResetPasswordService from "@/services/password.reset.service"

export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER (state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT (state) {
            state.user = {
                name: '',
                email: '',
            }

            state.loggedIn = false
        }
    },

    actions: {
        auth ({state, dispatch}, params) {
            state.loggedIn
            return AuthService.auth(params)
                                .then(() => dispatch('getMe'))
        },

        getMe ({commit}) {
            commit('CHANGE_LOADING', true)

            AuthService.getMe()
                        .then(response => commit('SET_USER', response.data))
                        .finally(() => commit('CHANGE_LOADING', false))
        },

        forgetPassword ({state}, params) {
            state.loggedIn
            return ResetPasswordService.forgetPassword(params)
        },
    },
}