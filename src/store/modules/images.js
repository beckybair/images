import api from '../../api/imgur'
import { router } from '../../main'

// State
const state = {
  // images
  images: []
}

// Getters
const getters = {
  // allImages
  allImages: state => state.images
}

// Actions
const actions = {
  // fetchImages
  async fetchImages({ rootState, commit } ) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.data)
  },

  // uploadImage
  async uploadImages({ rootState, commit }, images) {
    // get access token
    const { token } = rootState.auth

    // call api to upload images
    await api.uploadImages(images, token)

    // redirect to ImagesList component (Galleries)
    router.push('/')
  }
}

// Mutations
const mutations = {
  // setImages
  setImages: (state, images) => {
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}