import apiConstructor from './apiConstructor'

class userConnect extends apiConstructor {
  constructor(){
    super('user')
  }

  getUser = async () => {
    try {
      const { data } = await this.api.get('/')
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

export default new userConnect()

