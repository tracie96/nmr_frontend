import React, { useState } from "react";
import { Form, Select, Typography, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slice/increase";

export default function Seventhcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const dispatch = useDispatch();
  const [nftpriviledges, setbenefit] = useState("");
  const next = () => {
    const data = {
      nftpriviledges: nftpriviledges,
    };

    var newData = localStorage.getItem('data')
    var curdata =JSON.parse(newData)
    const secondstep = Object.assign(curdata,data);
    localStorage.setItem("data", JSON.stringify(secondstep));
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
        <Title level={5}>NFTs rewards to holders</Title>
        <Form.Item
          name="year"
          label="What privileges are you placing on the main NFT? At least 2 real world return privileges must be provided. (Please limit the text to 1500 characters)."
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder=""
            name="benefits"
            onChange={(e) => setbenefit(e.target.value)}
          />
        </Form.Item>
        <p>
          Unlimited access to Nwankwo Metaverse Records museum (NMR fixed reward
          to main NFT/duplicates holder)
        </p>
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
