import React, { useEffect, useState } from "react";
import { Form, Select, Typography, Button, Input } from "antd";
import { decrement, increment } from "../../slice/increase";
import { useSelector, useDispatch } from "react-redux";

export default function Fourthcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const { TextArea } = Input;
  const [data, setData] = useState("");
  const [sdata, ssetData] = useState("");

  const { Option } = Select;
  const formRef = React.createRef();
  console.log(data);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);
  const dispatch = useDispatch();
const [apptypeinner, setapptypeinner] = useState('')
const [commorpub, setcommorpub] = useState('')
const [whattoachieve, setwhattoachieve] = useState('')


 
  const next = () => {
    const data = {
      apptypeinner: apptypeinner,
      commorpub: commorpub,
      whattoachieve: whattoachieve,
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
        <Title level={5}>Application to set/ break a record in the metaverse</Title>
        
          <Form.Item
            name="gender"
            label="Motive behind record. (If the commercial purposes option is selected, it allows you to give concise information that will help boost your business marketing and this adds $90.00 on your application fee. If the public relations purposes is selected, we will provide unlimited referencing and make achievement publications on NMR news to give you the invaluable celebrity/ star publicity you need and this adds $50.00 on your application fee)"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Application Type"
              onChange={(value)=>setapptypeinner(value)}
              allowClear
            >
                    {data === "organization" ?"":<Option value="public">Public relations purposes (for Individuals Applications only)</Option>}
                    {data === "individual" ?"":<Option value="comm">Commercial purposes (for Organizations Applications only)</Option>}
                  <Option value="na">Not applicable</Option>

            </Select>
          </Form.Item>
    

      {sdata === "na" ? (
         ""
        ) : (
          <Form.Item
          label="If commercial purposes or public relations purposes was selected above- provide Marketing/ Publicity information. (Please limit the text to 500 characters):          "
          name="username"
          rules={[{ required: true, message: "Please input details!" }]}
        >
          <Input value={commorpub} onChange={(e)=>setcommorpub(e.target.value)} />
        </Form.Item>        )}

        <Form.Item
          label="What exactly did you achieve in the metaverse? Include dates. (Please limit the text to 1500 characters)          "
          name="whattoachieve"
          rules={[{ required: true, message: "Please input details!" }]}
        >
          <Input onChange={(e)=>setwhattoachieve(e.target.value)} value={whattoachieve}/>
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
