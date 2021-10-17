import React, { Component } from 'react'
import { Layout, Button, Input, Carousel } from 'antd'
import '../admin/css/admin.less'
import Topbar from './admin_component/topbar'
import Sidernav from './admin_component/sidernav'
import Contentbox from './admin_component/contentbox'
import HeaderList from '../../config/list_config/header_list'
import logo from '../login/imgs/logo.png'
import slideshow1 from './imgs/slideshow1.jpeg'
import slideshow2 from './imgs/slideshow2.jpeg'
import slideshow3 from './imgs/slideshow3.jpeg'
import Xiaomiskill from './admin_component/xiaomiskill'

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const contentStyle = {
  height: '460px',
  color: '#FFFFFF',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



export default class Admin extends Component {
  render() {
    return (
      <Layout className="layout">
        {/* topbar部分 */}
        <Header className="topbar">
          <Topbar />
        </Header>
        <Layout className="layout-body">
          {/* header部分 */}
          <Header className="header">
            <Button type="link">
              <img src={logo} alt="logo" />
            </Button>
            {
              HeaderList.map((item,index) => {
                return (
                  <Button className="header-btn" type="link"
                   size="small" 
                   href={item.path}
                   key={index}
                   >
                    {item.title}
                  </Button>
                )
              })
            }
            <Search className="header-search" placeholder="小米11"
              //  onSearch={onSearch} 
              style={{ width: 296, height: 50 }} size="large" />


          </Header>
          <Layout className="sider">
            <Sider className="sider-nav">
              <Sidernav/>
                
              
            </Sider>
            {/* 轮播图 */}
            <Content className="slideshow">
              <Carousel autoplay>
                <div >
                  <img style={contentStyle} src={slideshow1} alt='slideshow1' />

                </div>
                <div>
                  <img style={contentStyle} src={slideshow2} alt='slideshow2' />

                </div>
                <div>
                  <img style={contentStyle} src={slideshow3} alt='slideshow3' />

                </div>
              </Carousel>
            </Content>
          </Layout>
          <Layout>
            <Content className="content-box">
              <Contentbox />
            </Content>
            <Content className="xmskill">
              <Xiaomiskill />
            </Content>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>

      </Layout>

    )
  }
}
