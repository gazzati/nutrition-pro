import axios from 'axios'
import config from '../../config'

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:${config.SERVER_PORT}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
