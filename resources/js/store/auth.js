import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        async login({commit}, user = null){
            if (user) {
                commit('SET_USER', user)
                commit('SET_AUTHENTICATED', true)
                return user
            }
            try {
                const { data } = await axios.get('/api/user')
                commit('SET_USER', data)
                commit('SET_AUTHENTICATED', true)
                return user
            } catch (e) {
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED', false)
                return null
            }
        },
        logout({commit}){
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false)
        }
    }
}
