import axios from 'axios'
import removeToken from '../controllers/removeToken'

class apiConstructor {
  constructor(path) {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/${path}`,
    })
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => {
        throw error
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        removeToken(error)
      }
    )
  }


}

export default apiConstructor