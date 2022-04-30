import axios from 'axios'
import removeToken from '../controllers/removeToken'
import apiConstructor from './apiConstructor'

class apiConnect extends apiConstructor {
  constructor(){
    let path = 'auth'
    super(path)
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

