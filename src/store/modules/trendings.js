import * as api from '@/api'

export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        SET_TRENDINGS (state, trendings) {
            state.data = trendings.map(item => {
                item.following = {
                    status: false,
                    loading: false,
                    error: ''
                }
                return item
            })
        },
        SET_README (state, payload) {
            state.data = state.data.map((repo) => {
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                }
                return repo
            })
        },
        SET_FOLLOWING (state, payload) {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.following = {
                        ...repo.following,
                        ...payload.data
                    }
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
        },
        async starRepo ({ commit, getters }, id) {
            const { name: repo, owner } = getters.getRepoById(id)

            commit('SET_FOLLOWING', {
                id,
                data: {
                    status: false,
                    loading: true,
                    error: ''
                }
            })
            try {
                await api.starred.starRepo({ owner: owner.login, repo })
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        status: true
                    }
                })
            } catch (error) {
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        status: false,
                        error: 'error has happend'
                    }
                })
            } finally {
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        loading: false
                    }
                })
            }
            console.log('id', id)
        }
    }
}
