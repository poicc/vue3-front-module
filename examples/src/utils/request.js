import axios from 'axios'
import store from '@/store'
import { PoiMessage as $message } from 'poicc-components'

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
    config.headers.icode = 'D90283B2B55717FF'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      $message('warn', message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理token 超时
    if (error.response?.data?.code === 401) {
      // 退出
      store.dispatch('user/logout')
    }
    $message('error', error.response.data.message)
    return Promise.reject(error)
  }
)

export default service
