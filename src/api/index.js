// 配置api发送请求
// 登陆请求
// import axios from 'axios'
import {BASE_URL} from '../config/'
import jsonp from 'jsonp'
import {message} from 'antd'

// 登陆请求
// export const reqLogin = (username,password)=> myAxios.post(`${BASE_URL}/login`,{username,password})
// 获取图书列表
export const reqcatalog = ()=>{
    return new Promise((resolve, reject) => {
        jsonp(`${BASE_URL}`,(err,data) => {
        if (err) {
            message.error('请求失败，请联系商家')
            return new Promise(() => {})
        } else {

            let catalogobj ={data}
            resolve(catalogobj)
        }
            
        })
    })
    
}

