// 配置api发送请求
// 登陆请求
import axios from 'axios'
import {BASE_URL} from '../config'

export const reqlogin = () => axios.get(`${BASE_URL}`)
