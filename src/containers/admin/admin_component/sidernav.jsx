import React, { Component } from 'react'
import {Menu} from 'antd'
import { RightOutlined,} from '@ant-design/icons';
import SiderList from '../../../config/list_config/sider_list'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';



const {Item}=Menu

@withRouter
 class Sidernav extends Component {
    // componentDidMount() {
        // console.log(this.props)
    // } 
        
    render() {
        // let {pathname} = this.props.location
        return (
            <Menu className="sider-nav-menu"
                // defaultSelectedKeys={[pathname.split('/').splice(0)]}
                mode="inline"
                theme="dark"
            >
                {
                    SiderList.map((item,index) => {
                        return (
                            <Item className="sider-nav-item" key={index}>
                                <Link to={item.path}>
                                {item.title}<RightOutlined className="sider-nav-icon" />
                                </Link>
                                
                            </Item>
                        )
                    })
                }
            </Menu>
        )
    }
}
export default Sidernav