import React, { Component } from 'react'
import { Card } from 'antd';
import { ThunderboltTwoTone } from '@ant-design/icons';
import Countdown from 'react-countdown';




// Random component
const Completionist = () => <span>活动已结束</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};
export default class Xiaomiskill extends Component {

    

    render() {
        return (
            <div>
                <div className="xmskill-top">
                    <h1>小米秒杀</h1>
                </div>
                <div className="site-card-border-less-wrapper">
                    <Card style={{ width: 234, height: 340 }}>
                        <h1>20:00场</h1>
                        <ThunderboltTwoTone style={{ fontSize: 40 }} />
                        <p>距离开始还有</p>
                        <Countdown
                            date={Date.now() + 50000}
                            renderer={renderer}
                        />
                    </Card>
                   {/* 获取图书列表 */}
                  

                </div>
            </div>
        )
    }
}
