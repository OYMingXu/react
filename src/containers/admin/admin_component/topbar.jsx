import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button} from 'antd'
import { ShoppingCartOutlined} from '@ant-design/icons';
import TopbarList from '../../../config/list_config/topbar_list'



@withRouter
 class Topbar extends Component {
    render() {
        return (
            <div className="top-container">
            <div className="top-nav">
              {
                TopbarList.map((item,index) => {
                  return (
                    <Button className="top-nav-left" 
                    type="link" size="small" 
                    href={item.path}
                    key={index}
                    >
                      {item.title}
                    </Button>
                  )
                })
              }
            </div>
            <div className="top-cars">

              <Button className="top-btn-cars" href="" type="link" size="small">
                <ShoppingCartOutlined />
                购物车<span>（0）</span>
              </Button>
            </div>


          </div>
        )
    }
}
export default Topbar
