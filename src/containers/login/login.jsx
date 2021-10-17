import React, { Component } from 'react'
import './css/login.less'
import logo from './imgs/logo.png'
import { Form, Input, Button } from 'antd';
import {QqOutlined} from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import {reqlogin} from '../../api'



class Login extends Component {
    onFinish = (values) => {
        if (values.username === 'admin' || values.password === 'admin') {
            console.log('表单提交了')
            this.props.history.replace('/admin')
        } else {
            console.log('表单没提交')
        }
        //  请求登陆接口
        // reqlogin()
        // .then(function (response) {
        //  // handle success
        // console.log(response);
        //   })
        // .catch(function (error) {
        // // handle error
        // console.log(error);
        //   });
    }


    render() {
        return (
            <div className="login">
                <header>
                    <div className="mi-left">
                        <img src={logo} alt="logo" />
                        <h1>用户账号</h1>
                    </div>
                    <div className="mi-right">
                        <Button type="link">用户协议</Button>
                        <Button type="link">隐私政策</Button>
                        <Button type="link">帮助中心</Button>
                        <span>中文（简体）</span>


                    </div>
                </header>

                <section>
                    <h1>登陆 注册</h1>
                    <Form onFinish={this.onFinish}>
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '请输入用户名!', },
                                { max: 12, message: '用户名不能超过12位数', },
                                { min: 4, message: '用户名不能小于4位数', },
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: '请输入密码!', },
                                { max: 12, message: '密码不能超过12位数', },
                                { min: 4, message: '密码不能小于4位数', },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登陆
                             </Button>
                        </Form.Item>
                    </Form>
                    <h1>其他方式</h1>
                    <Button>
                     <QqOutlined />
                    </Button>

                </section>

            </div>
        )
    }
}
export default Login
