import axios from 'axios'
import removeToken from '../controllers/removeToken'

class apiConnect {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
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
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        removeToken(error)
        throw error
      }
    )
  }

  signUp = async (payload) => {
    try {
      const { data } = await this.api.post('/signup', payload)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  logIn = async (credentials) => {
    try {
      const { data } = await this.api.post('/login', credentials)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export default new apiConnect()
