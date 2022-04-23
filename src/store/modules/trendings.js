import * as api from '@/api'

export default {
    namespaced: true,
    state: {
        trendings: {
            data: []
        }
    },
    mutations: {
        SET_TRENDINGS (state, trendings) {
            state.data = trendings
        },
        SET_README (state, payload) {
            state.data = state.data.map((repo) => {
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                }
                return repo
            })
        }
    },
    getters: {
        getRepoById: (state) => (id) => state.data.find((trendingRepo) => trendingRepo.id === id)
    },
    actions: {
        async fetchTrendings ({ commit }) {
            try {
                const { data } = await api.trendings.getTrendings()
                commit('SET_TRENDINGS', data.items)
                console.log(data)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async fetchReadme ({ commit, getters }, { id, owner, repo }) {
            const currentRepo = getters.getRepoById(id)
            if (currentRepo.readme !== undefined) return

            try {
                const { data } = await api.readme.getReadme({ owner, repo })
                commit('SET_README', { id, content: data })
                console.log(data)
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
}
