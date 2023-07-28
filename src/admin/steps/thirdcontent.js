import React, { useState } from "react";
import { Form, Select, Typography, Button, Input } from "antd";
import { decrement, increment } from "../../slice/increase";
import { useSelector, useDispatch } from "react-redux";

export default function Thirdcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const { TextArea } = Input;
  const [recognized, setRecognzed] = useState('')
  const { Option } = Select;
  const formRef = React.createRef();
  const dispatch = useDispatch();
  const [orgName, setOrgName] = useState('')
  const [orgUrl, setOrgUrl] = useState('')
  const next = () => {
    const data = {
      orgName: orgName,
      orgUrl: orgUrl,
      recognized: recognized,
    };
    var newData = localStorage.getItem('data')
    var curdata = JSON.parse(newData)
    const secondstep = Object.assign(curdata, data);
    localStorage.setItem('data', JSON.stringify(secondstep))
    dispatch(increment());
  };

  const prev = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <Form layout="vertical" name="control-ref">
        <Title level={5}>Organization information</Title>
        <Form.Item
          label="What is the name of your organization?        "
          name="org_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setOrgName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="What is your organization URL?"
          name="username"
          rules={[{ required: true, message: "Please input your organization URL!" }]}
        >
          <Input onChange={(e) => setOrgUrl(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Are you a recognized executive in your organization?"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select Application Type"
            onChange={(value) => setRecognzed(value)}
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
