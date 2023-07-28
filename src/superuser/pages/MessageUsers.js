import React, { useEffect, useState } from 'react'
import Main from '../../admin/components/layout/Main'
import { Button, Form, Input, InputNumber, Select,message } from 'antd';
import axios from "axios"
import AdminMain from '../components/layout/Main';


export default function MessageUsers() {
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

    const onFinish = () => {
        let data = JSON.stringify({
            "sender": adminid,
            "receiver": userid,
            "message": messages
        });

        const success = () => {
          messageApi.open({
            type: 'success',
            content: 'Message sent successfully',
          });
        };
        const errorMessage = () => {
          messageApi.open({
            type: 'error',
            content: 'Error sending message',
          });
        };


        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8083/api/messages',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                success()
            })
            .catch((error) => {
                console.log(error);
                errorMessage()
            });

    };

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
        <AdminMain>
            {contextHolder}

            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >

                <Form.Item
                    name="user"
                    label="UserList"
                >
                    <Select placeholder="select user" onChange={(value) => setUserId(value)}>
                        {users.map((user, key) =>
                            <Option value={user.id}>{user.fullname}</Option>
                        )}

                    </Select>
                </Form.Item>
                <Form.Item name={['user', 'messages']} label="Messages" onChange={(e) => setMessage(e.target.value)}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </AdminMain>
    )
}
