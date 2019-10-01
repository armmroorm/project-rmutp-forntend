export const user = {
    namespaced: true,
    actions: {
        // getUsername: ({ commit }, Username) => {
        //     commit('addUsername', Username)
        // },
        getToken: ({ commit }, token) => {
            commit('addToken', token)
        },
        // getAvatar:({commit},urlAvatar) =>{
        //     commit('setAvatar',urlAvatar)
        // },
        logout: ({ commit }) => {
            commit('remove')
        }
    }, state: {
        // username: null,
        token: null,
    }, mutations: {
        // addUsername: (state, newUsername) => {
        //     state.username = newUsername
        // },
        addToken: (state, newToken) => {
            state.token = newToken
            localStorage.setItem('token', newToken)
        },
        remove: (state) => {
            // state.username = null
            state.token = null
            localStorage.removeItem('token', null)
        }
    }, getters: {
        // username: state => state.username,
        token: state => state.token,
    }
}