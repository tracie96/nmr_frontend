import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import { Button, Form, Select,Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
} from '../../slice/increase';

export default function Ninthcontent() {
    const { Title, Paragraph, Text, Link } = Typography;
    const [fastTrack,setFastTrack]=useState('')
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const next = () => {
      const data = {
        fastTrack: fastTrack,
        token: sessionStorage.getItem('token') ,
        userId: sessionStorage.getItem('userID'),
   

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
  const { Option } = Select;
  const formRef = React.createRef();

  return (
    <div>
      <Form layout="vertical" name="control-ref">
      <Title level={5}>Fast track application</Title>
      <p>Do you want to fast track the record processing process? (If Yes is selected this option reduces wait times from 3.5 months to just 3 weeks. This paid service adds $5.00 to the application fee)</p>
        <Form.Item name="gender" label="What type of application are you making?" rules={[{ required: true }]}>
          <Select
            placeholder="Fast Track?"
            onChange={value=>(setFastTrack(value))}
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
          <Button type="primary" onClick={()=>next()} style={{float: "right"}}>
            Next
          </Button>  
      </div>
      </Form>
    </div>
  );
}
