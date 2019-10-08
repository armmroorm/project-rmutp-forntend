export const user = {
    namespaced: true,
    actions: {
        getUsername: ({ commit }, Username) => {
            commit('addUsername', Username)
        },
        getToken: ({ commit }, token) => {
            commit('addToken', token)
        },
        getAvatar:({commit},urlAvatar) =>{
            commit('setAvatar',urlAvatar)
        },
        getStat:({commit},Boolean) => {
            commit('setStat',Boolean)
        },
        logout: ({ commit }) => {
            commit('remove')
        }
    }, state: {
            username: null,
            token: null,
            urlAvatar: null,
            stat: false
    }, mutations: {
        addUsername: (state, newUsername) => {
            state.username = newUsername
        },
        addToken: (state, newToken) => {
            state.token = newToken
            localStorage.setItem('token', newToken)
        },
        setAvatar:(state, urlAvatar) => {
            state.urlAvatar = urlAvatar
        },
        setStat:(state, Boolean) => {
            state.stat = Boolean
        },
        remove: (state) => {
            state.username = null
            state.token = null
            state.urlAvatar = null
            state.stat = false
            localStorage.removeItem('token', null)
        }
    }, getters: {
            username: state => state.username,
            token: state => state.token,
            urlAvatar: state => state.urlAvatar,
            stat: state => state.stat
    }
}