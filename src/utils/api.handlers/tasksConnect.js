import apiConstructor from './apiConstructor'

class tasksConnect extends apiConstructor {
  constructor(){
    super('task')
  }

  getAllTasks = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export default new tasksConnect ()