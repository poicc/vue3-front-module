import axios from 'axios'
import { storeKey } from 'vuex'
import store from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ` + store.getters.token
    }
    config.headers.icode = '918D3B3F609DBEBC'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  return Promise.reject(new Error(message))
})

export default service
