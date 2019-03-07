import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = 'c53bfc3d0c65dd9'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  },

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData()
      formData.append('image', image)

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })

    return Promise.all(promises)
  }
}


// https://api.imgur.com/oauth2/authorize?
// client_id = CLIENT_ID &
//   response_type=token &
//   state=APPLICATION_STATE

// Client ID:  c53bfc3d0c65dd9
// Client secret:  ba20c7c28cad1a3a0f8385bd01cd6ba4f51a3ac6
