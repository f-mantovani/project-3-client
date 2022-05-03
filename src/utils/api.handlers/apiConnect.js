import apiConstructor from './apiConstructor'
class apiConnect extends apiConstructor {
  constructor(){
    super('auth')
  }

  signUp = async (payload) => {
    try {
      const { data } = await this.api.post('/signup', payload)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  logIn = async (credentials) => {
    try {
      const { data } = await this.api.post('/login', credentials)
      return data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default new apiConnect()

