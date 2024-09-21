import axios from 'axios'

import { API_BASE_URL_LOCAL } from './const'

export const apiLocal = axios.create({
  baseURL: API_BASE_URL_LOCAL
})

apiLocal.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)
