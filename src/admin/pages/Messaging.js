import React, { useEffect, useState } from 'react'
import Main from '../../admin/components/layout/Main'
import { Button, Form, Input, InputNumber, Select,message } from 'antd';
import axios from "axios"
import Messenger from '../components/messaging/Messenger';

export default function Messages() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const { Option } = Select;
    const [users, setUser] = useState([])
    const [userid, setUserId] = useState("")
    const [adminid, setAdminId] = useState("645fc66e5d77c60f7c804943")
    const [messages, setMessage] = useState("")
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8083/api/users/');
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Main>
            <Messenger/>
        </Main>
    )
}
