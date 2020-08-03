import axios from 'axios'

const api = axios.create({
  baseURL: 'https://celebrations-api.herokuapp.com/'
})

export default api;