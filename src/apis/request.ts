// 基于axios封装的请求模块
import axios from 'axios'

// 创建实例时配置默认值
const request = axios.create({
  baseURL: 'http://localhost:8080/api',
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_API : '/api',
  timeout: 100000,
  // 自定义请求头
  headers: {
    'Content-Type': 'application/json'
  },
  // 允许携带cookie请求
  // withCredentials: true
})

// 环境切换
//axios.defaults.baseURL = '/api';
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

// post请求头
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
request.interceptors.request.use(
  //所有请求会经过这里
  //config 是当前请求相关的配置对象
  (config) => {
    // 当这里return config之后请求才会真正的发出去
    return config
  },
  // 请求失败，会经过这里
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('error', error.response.data.msg)
    return Promise.reject(error)
  }
)

//导出请求方法
export default request
