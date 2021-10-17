import React, { Component } from 'react'
import {Button} from 'antd'
import Contentboxlist from '../../../config/list_config/contentbox_list'
import Contentboxpiclist from '../../../config/list_config/contentbox-pic_list'





export default class Contentbox extends Component {
    render() {
        return (
            <div className="content-box">
                <div className="content-box-left">
                {
                   Contentboxlist.map((item,index) => {
                       return(
                        <Button className="content-box-left-btn6" 
                        key={index}
                        >
                            <div className="content-box-left-icon">{item.icon}</div>
                        <span>{item.title}</span>
                    </Button>
                       )         
                   })    
                }
            </div>
            <div className="content-box-right">
               
                {
                   Contentboxpiclist.map((item,index) => {
                       return(
                            <Button className="content-box-right-btn3"
                             type="link"
                             key={index}
                             >
                                {item.picture}
                                </Button>
                       )         
                   })    
                }
                
            </div>
            </div>
            
        )
    }
}
