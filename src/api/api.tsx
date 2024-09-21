import axios from 'axios'

import { API_BASE_URL} from './const'

export const api = axios.create({
  baseURL: API_BASE_URL
})

api.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)
