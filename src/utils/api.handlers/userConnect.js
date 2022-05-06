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

  updateUser = async (payload) => {
    
    try {
      const { data } = await this.api.put('/', payload)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  updateImage = async (file) => {

    try {

      const { data } = await this.api.put(' /profile-image', file)
      return data
    } catch (error) {
      throw error.respose.data
    }
  }

  changeBookshelves = async (payload) => {
    const { oldStatus, status, id } = payload
    try {
      const { data } = await this.api.put(`/book/${id}`, {oldStatus, status})
      return data
    } catch (error) {
      throw error.response.data
    }
  }

}

export default new userConnect()

