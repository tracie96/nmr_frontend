import React, { useState } from "react";
import { Button, Form, Select,Typography } from "antd";
import {
  decrement,
  increment,
} from '../../slice/increase';
import { useSelector, useDispatch } from "react-redux";

export default function Firstcontent() {
  const dispatch = useDispatch();
  const current= useSelector((state) => state.counter)
  const { Title} = Typography;

  const { Option } = Select;
  const formRef = React.createRef();

  const [apptype,setApptype]=useState('')

  const next = () => {
    const data = {
      application_type: apptype,

    };
    localStorage.setItem('data', JSON.stringify(data));

    dispatch(increment());
  };

  const prev = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Form layout="vertical" name="control-ref">
      <Title level={5}>Application type</Title>
        <Form.Item name="gender" label="What type of application are you making?" rules={[{ required: true }]}>
          <Select
            placeholder="Select Application Type"
            onChange={(value)=>setApptype(value)}
            allowClear
          >
            <Option value="individual">Individual</Option>
            <Option value="organization">Organization</Option>

          </Select>
        </Form.Item>
      </Form>
      <div className="steps-action">
        
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>      
      </div>
    </div>
  );
}
