import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  config.headers = {
    'icode': '918D3B3F609DBEBC'
  }
  return config
})
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if(success) {
    return data
  }
  return Promise.reject(new Error(message))
})


export default service