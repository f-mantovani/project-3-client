import apiConstructor from './apiConstructor'

class userConnect extends apiConstructor {
  constructor(){
    super('user')
  }

  getUser = async () => {
    try {
      const { data } = await this.api.get('/')
      console.log(data)
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
      const imgData = new FormData()
      imgData.append('image', file)

      await this.api.put('/profile-image/', imgData)
      
    } catch (error) {
      throw error.response
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

