import React, { Component } from 'react'

import '../admin/css/admin.less'




export default class Admin extends Component {
  render() {
    return (
      <div>
        <div className="topbar">
          <div className="container">
            <div className="topbar-nav">
              <a href="">小米商城</a><span>|</span>
              <a href="">MIUI</a><span>|</span>
              <a href="">IoT</a><span>|</span>
              <a href="">云服务</a><span>|</span>
              <a href="">金融</a><span>|</span>
              <a href="">有品</a><span>|</span>
              <a href="">小爱开放平台</a><span>|</span>
              <a href="">政企服务</a><span>|</span>
              <a href="">Select Region</a>
            </div>
            <div className="topbar-cart"><a href=""><i className="iconfont">&#xe60c;</i>购物车<span>（0）</span></a>
            </div>
            <div className="topbar-info clearfix">
              <a href="">登录</a><span>|</span>
              <a href="">注册</a><span>|</span>
              <a href="" className="sep">消息通知</a>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="header-logo">
              <a href="#" className="lr">小米官网</a>
            </div>
            <div className="header-nav">
              <ul className="nav-list clearfix">
                <li className="nav-category">
                  <a href="">全部商品分类</a>
                </li>
                <li className="nav-item">
                  <a href="">小米手机</a>
                </li>
                <li className="nav-item">
                  <a href="">红米</a>
                </li>
                <li className="nav-item">
                  <a href="">电视</a>
                </li>
                <li className="nav-item">
                  <a href="">笔记本</a>
                </li>
                <li className="nav-item">
                  <a href="">空调</a>
                </li>
                <li className="nav-item">
                  <a href="">新品</a>
                </li>
                <li className="nav-item">
                  <a href="">路由器</a>
                </li>
                <li className="nav-item">
                  <a href="">智能硬件</a>
                </li>
                <li className="nav-item">
                  <a href="">服务</a>
                </li>
                <li className="nav-item">
                  <a href="">社区</a>
                </li>
              </ul>
            </div>
            <div className="header-search">
              <form action="" className="search-form">
                <input type="search" name="keyword" className="search-text" />
                <input type="submit" value="&#xe616;" className="search-btn iconfont" />
              </form>
            </div>
          </div>
        </div>

        
      
    </div>
  
    )
  }
}
