import axios from 'axios'

class apiConnect {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    })
  }
}

export default new apiConnect()
