import * as api from '@/api'

export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        SET_STARRED_DATA (state, payload) {
            state.data = payload
        },
        SET_ISSUES_DATA: (state, { id, issues }) => {
            state.data = state.data.map((repo) => {
                const editedRepo = repo
                if (repo.id === id) {
                    editedRepo.issues = issues
                }
                return editedRepo
            })
        }
    },
    getters: {},
    actions: {
        async fetchStarredRepos ({ commit }, payload) {
            try {
                const response = await api.starred.getStarredRepo({ imit: payload?.limit })
                const data = await response.data
                commit('SET_STARRED_DATA', data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchIssuesForRepo ({ commit }, { id, owner, repo }) {
            commit('SET_ISSUES_DATA', {
                id,
                issues: {
                    loading: true
                }
            })
            try {
                const response = await api.issues.getIssues({ owner, repo })
                const data = await response.data
                console.log(data)
                commit('SET_ISSUES_DATA', {
                    id,
                    issues: {
                        data,
                        loading: false
                    }
                })
            } catch (e) {
                commit('SET_ISSUES_DATA', {
                    id,
                    issues: {
                        loading: false,
                        error: e
                    }
                })
                console.log(e)
                throw e
            }
        }
    }
}
