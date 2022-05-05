import axios from 'axios'
import useRemoveToken from '../controllers/useRemoveToken'

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
        useRemoveToken(error)
        throw error
      }
    )
  }


}

export default apiConstructor