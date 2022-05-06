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

