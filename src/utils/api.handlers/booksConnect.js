import apiConstructor from './apiConstructor'

class booksConnect extends apiConstructor {
  constructor(){
    super('book')
  }

  getAllTasks = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  createTask = async (newEvent) => {
    try {
      const { data } = await this.api.post('/', newEvent)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  updateTitle = async (id ,updatedEvent) => {
    try {
      const { data } = await this.api.put(`/${id}`, updatedEvent)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  deleteTask = async (id) => {
    try {
      const { data } = await this.api.delete(`/deleteOne/${id}`)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  deleteAllTasks = async () => {
    try {
      const { data } = await this.api.delete('/deleteAll')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

}

export default new booksConnect ()