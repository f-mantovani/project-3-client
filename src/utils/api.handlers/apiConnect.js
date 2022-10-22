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
      console.log(error)
      throw error.response.data
    }
  }

  logIn = async (credentials) => {
    try {
      console.table(credentials)
      const { data } = await this.api.post('/login', credentials)
      console.log(data)
      return data
    } catch (error) {
      console.log('erro no service', error.status)
      throw error.response.data
    }
  }
}

export default new apiConnect()

