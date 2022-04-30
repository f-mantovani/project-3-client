import apiConstructor from './apiConstructor'

class booksConnect extends apiConstructor {
  constructor() {
    super('book')
  }

  getAllBooks = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  getOneBook = async (id) => {
    try {
      const { data } = await this.api.get(`${id}`)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  createBook = async (newBook) => {
    try {
      const { data } = await this.api.post('/', newBook)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  updateBook = async (id, updatedBook) => {
    try {
      const { data } = await this.api.put(`/${id}`, updatedBook)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  updateImage = async (file) => {
    try {
      const imgData = new FormData()
      imgData.append('image', file)
      const { data } = await this.api.put('/user/image', imgData)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  deleteBooks = async (id) => {
    try {
      const { data } = await this.api.delete(`/deleteOne/${id}`)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export default new booksConnect()
