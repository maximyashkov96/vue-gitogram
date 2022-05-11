import * as api from '@/api'

export default {
    namespaced: true,
    state: {
        data: {}
    },
    mutations: {
        SET_USER (state, payload) {
            state.data = payload
        }
    },
    getters: {

    },
    actions: {
        async fetchUser ({ commit }) {
            try {
                const response = await api.user.getUser()
                const data = await response.data
                commit('SET_USER', data)
                console.log(data.login)
                console.log(data)
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
}
