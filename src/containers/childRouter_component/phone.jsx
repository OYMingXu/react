import React, { Component } from 'react'
import {reqcatalog} from '../../api/index';
import {Table,message} from 'antd'



   
  
  

export default class Phone extends Component {
   


    state = {
        reqcatalog:[]
    }

    //获取图书列表
    getreqcatalog=async() => {
        let data = await reqcatalog()
        const {resultcode,result,error_code} = data.data
        if (resultcode === "200") this.setState({reqcatalog:result})
        else message.error(error_code,1)
        
    }
    componentDidMount(){
        this.getreqcatalog()
      }       
       
    render() {
        const dataSource = this.state.reqcatalog
        
        const columns = [
            {
              title: '分类',
              dataIndex: 'catalog',
              key: 'name',
            },
           
          ];
        return (
            <div>
                <Table dataSource={dataSource} 
                columns={columns}
                rowKey='id'
                pagination={{pageSize:5}}
                >
               
                </Table>
                
            </div>
        )
    }
}
