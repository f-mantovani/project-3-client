import axios from 'axios'

class apiConnect {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
    })  
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
