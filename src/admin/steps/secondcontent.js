import React, { useState } from "react";
import { Form, Button,Select,Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from '../../slice/increase';

export default function Secondcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const [gender,setGender]=useState('')
  const { Option } = Select;  
  const dispatch = useDispatch();

  const formRef = React.createRef();
  const onGenderChange = (value) => {
    // eslint-disable-next-line default-case
  setGender(value)
  };
  const next = () => {
    const data = {
      are_you_a_rep: gender,
    };
    var newData = localStorage.getItem('data')
    var curdata =JSON.parse(newData)
    const secondstep = Object.assign(curdata,data);
    localStorage.setItem('data',JSON.stringify(secondstep))
    dispatch(increment());
  };

  const prev = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Form layout="vertical" name="control-ref">
      <Title level={5}>Use of Representative
      </Title>
        <Form.Item name="gender" label="Are you a representative handling a record application on behalf of an individual or organization" rules={[{ required: true }]}>
          <Select
            placeholder="Select Application Type"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>

          </Select>
        </Form.Item>
        <div className="steps-action">
        <Button type="primary" onClick={() => prev()}>
            Prev
          </Button> 
          <Button type="primary" onClick={() => next()} style={{float: "right"}}>
            Next
          </Button>      
      </div>
      </Form>
    </div>
  );
}
