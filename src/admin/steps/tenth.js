import React, { useState } from "react";
import { Button, Form, Select, Typography } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Input from "antd/lib/input/Input";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {
  decrement,
  increment,
} from '../../slice/increase';
export default function Tenth() {
  const { Title, Paragraph, Text, Link } = Typography;

  const { Option } = Select;
  const formRef = React.createRef();
  const onGenderChange = (value) => {
    console.log(value, "val");
    localStorage.setItem("data", JSON.stringify(value));
  };
  const [firstname, setFirstname] = useState('')
  const [givenName, setGivenName] = useState('')
  const userId = sessionStorage.getItem('userID')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const next = () => {
    const data = {
      signedName: firstname,
      givenName: givenName,
      userId: userId,
    };
    var newData = localStorage.getItem('data')
    var curdata = JSON.parse(newData)
    const secondstep = Object.assign(curdata, data);
    localStorage.setItem('data', JSON.stringify(secondstep))
    dispatch(increment());
  };

  return (
    <div>
      <Form layout="vertical" name="control-ref">
        <Title level={5}>Consent/Disclaimer and Signature</Title>
        <p style={{ marginTop: "3%", color: "#000" }}>
          You have confirmed that the information you provided on this
          application is complete and accurate. You agree for us to communicate
          to you and deliver documents to you electronically by providing your
          contact information on this application. NMR is not liable for how or
          what a third party does with an applicant’s or user’s information,
          when (or after) the applicant or user has instructed NMR to share the
          information to the third party.
        </p>
        <p style={{ marginTop: "3%", color: "#000" }}>
          Personal information, NMR account information, and card details
          security should be upheld by applicants and users at all times. Do not
          share any personal information, NMR account information, card details
          with untrusted persons. Do not leave your account unattended when
          logged in or filling any form on the NMR website. We use state of the
          art technology to ensure your information is safe and secured on our
          database. We will not provide your information and answers to security
          questions when we contact you, but to verify it is you, we will need
          you to confirm your information and answers to security questions when
          we contact you.
        </p>

        <Checkbox style={{ width: "100%", marginTop: "2%" }}>
          I agree with the consent/disclaimer
        </Checkbox>{" "}
        <p style={{ marginTop: "2%", fontWeight: "600" }}>
          Signature</p>
        <p style={{ marginTop: "2%" }}>
          By providing your name below you electronically sign the application. This will also cover for any of the supporting documents that you omitted your signature.</p>
        <Form.Item
          name="name"
          label="Last name/Surname"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginTop: "3%"
          }}

        >
          <Input
            placeholder="Last name/Surname" onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Given name(s)"
          rules={[
            {
              required: true,
            },
          ]}
          name="given names"

        >
          <Input
            placeholder="Given Names" onChange={(e) => setGivenName(e.target.value)}
          />
        </Form.Item>
        <div className="steps-action">
          <Button type="primary" onClick={()=>navigate("/dashboard/checkout")}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
