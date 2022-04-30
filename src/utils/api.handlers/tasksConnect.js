import axios from 'axios'
import removeToken from '../controllers/removeToken'

class tasksConnect {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/task`,
    })
  




}

export default new tasksConnect()

signUp = async (payload) => {
  try {
    const { data } = await this.api.post('/signup', payload)
    return data
  } catch (error) {
    console.log(error.response.data)
  }
}

logIn = async (credentials) => {
  try {
    const { data } = await this.api.post('/login', credentials)
    return data
  } catch (error) {
    console.log(error.response.data)
  }
}
