import apiConstructor from './apiConstructor'

class eventsConnect extends apiConstructor {
  constructor(){
    super('event')
  }

  getAllEvents = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  createEvent = async (newEvent) => {
    try {
      const { data } = await this.api.post('/', newEvent)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  updateEvent = async (id ,updatedEvent) => {
    try {
      const { data } = await this.api.put(`/${id}`, updatedEvent)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  deleteEvent = async (id) => {
    try {
      const { data } = await this.api.delete(`/deleteOne/${id}`)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  deleteAllEvents = async () => {
    try {
      const { data } = await this.api.delete('/deleteAll')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

}

export default new eventsConnect ()