import React, { useState } from "react";
import { Form, Select, Typography, Input, Checkbox, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slice/increase";
export default function Sixthcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [avatar_name, setAvatarName] = useState("")
  const [who_built, setWhoBuilt] = useState("")
  const [nft_focus, setNFTFocus] = useState("")
  const [do_you_own, setDoYouOwn] = useState("")
  const [titlechoice, setTitleChoice] = useState("")

console.log(avatar_name,who_built,nft_focus,do_you_own,titlechoice)
  const next = () => {
    const data = {
      avatar_name: avatar_name,
      who_built: who_built,
      nft_focus: nft_focus,
      do_you_own: do_you_own,
      titlechoice: titlechoice,
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
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        this.formRef.current.setFieldsValue({
          note: "Hi, man!",
        });
        return;
      case "female":
        this.formRef.current.setFieldsValue({
          note: "Hi, lady!",
        });
        return;
      case "other":
        this.formRef.current.setFieldsValue({
          note: "Hi there!",
        });
    }
  };
  return (
    <div>
      <Form layout="vertical" name="control-ref">
        <Title level={5}>Information about metaverse, title choices, and NFT focus</Title>
        <Form.Item
          name="avatar_name"
          rules={[{ message: "Please input data!" }]}
        >
          <Input placeholder="Avatar name on the metaverse" onChange={(e) => setAvatarName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="who_built"
          rules={[{ message: "Please input data!" }]}
        >
          <Input placeholder="Who built the metaverse that the achievement happened in? " onChange={(e) => setWhoBuilt(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="hardware_devices"
          rules={[{ message: "Please input data!" }]}
        >
          <Input placeholder="What hardware devices did you use? State manufacturers. " />
        </Form.Item>

        <Form.Item
          name="do_you_own"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Did you do a Record Attempt?
            "
            onChange={(value)=>setDoYouOwn(value)}
            allowClear
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="nwankwotrail"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Did you do a Nwankwo Metaverse Record Trial?"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="title_choice"
          rules={[{ message: "Please input data!" }]}
        >
          <Input placeholder="What title choices are you suggesting?" onChange={(e)=>setTitleChoice(e.target.value)}/>
        </Form.Item>

        <Form.Item
          name="nft_focus"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="What is your NFT focus preference? Focus on “individual” would be more profitable if the individual is a public figure. Focus on “organization” would attract NFT rewards from the organization.            "
            onChange={(value)=>setNFTFocus(value)}
            allowClear
          >
            <Option value="individual">Individual</Option>
            <Option value="organisation">Organisation</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="choice"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Checkbox style={{ width: "100%" }} >
            Consent to use your/individual’s/organization’s avatar(s) and or logo(s) on the NFT
            </Checkbox>{" "}
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
