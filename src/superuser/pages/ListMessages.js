import React, { useEffect, useState } from 'react'
import Main from '../../admin/components/layout/Main'
import { Button, Form, Input, InputNumber, Select, Table } from 'antd';
import axios from "axios"
import AdminMain from '../components/layout/Main';


export default function MessageList() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8083/api/messages/');
                console.log(response.data,"response")
                setMessages(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const columns = [
        {
          title: 'Recipient',
          dataIndex: 'receiver',
        },
        {
          title: 'Message',
          dataIndex: 'message',
        },
        {
          title: 'Date',
          dataIndex: 'timestamp',
        },
      ];
    //   const data = [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //     },
    //   ];

    return (
        <AdminMain>
           <Table columns={columns} dataSource={messages} size="middle" />
        </AdminMain>
    )
}
