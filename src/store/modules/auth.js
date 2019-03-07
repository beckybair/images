import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

// State
const state = {
  // Token
  token: window.localStorage.getItem('imgur_token')
}

// Getters
const getters =  {
  // isLoggedIn
  isLoggedIn: state => !!state.token
}

// Actions
const actions = {
  // login
  login: () => {
    api.login()
  },

  // finalizeLogin
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''))

    commit('setToken', query.access_token)
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push('/')
  },
  
  // logout
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
  }
}

// Mutations
const mutations = {
  // setToken
  setToken: (state, token) => {
    state.token = token

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}