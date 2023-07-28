import { Button, Col, message, Row, Steps } from "antd";
import React, { useState } from "react";
import 'antd/dist/reset.css';
import Firstcontent from "./firstcontent";
import Secondcontent from "./secondcontent";
import Thirdcontent from "./thirdcontent";
import Fourthcontent from "./fourthcontent";
import FifthContent from "./fifthcontent";
import Sixthcontent from "./sixthcontent";
import Seventhcontent from "./seventhcontent";
import Eightcontent from "./eigthcontent";
import Ninthcontent from "./ninthcontent";
import Tenth from "./tenth";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom"; // version 5.2.0

const steps = [
  {
    title: "Application type",
    content: <Firstcontent />,
  },
  {
    title: "Use of a Representative",
    content: <Secondcontent />,
  },
  {
    title: "Organization information",
    content: <Thirdcontent />,
  },
  {
    title: "Application to set/ break a record",
    content: <Fourthcontent />,
  },
  {
    title: "Applicant information",
    content: <FifthContent />,
  },
  {
    title: "Metaverse information ",
    content: <Sixthcontent />,
  },
  {
    title: "NFT  holder privileges",
    content: <Seventhcontent />,
  },
  {
    title: "Supporting documents",
    content: <Eightcontent />,
  },
  {
    title: "Fast track application",
    content: <Ninthcontent />,
  },
  {
    title: "Consent/Disclaimer and Signature   ",
    content: <Tenth />,
  },
];
const Stepper = () => {
  // const [current, setCurrent] = useState(0);
  const current = useSelector((state) => state.counter);
  console.log(current.count);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  let history = useNavigate();

  const handlepayment = () => {
    message.success("Processing complete!");
    history("/admin/checkout");
  };
  return (
    <>
      {current !== 4 ? (
        <>
          <Row>
            <Col span={12}><Steps
              current={current.count}
              items={items}
              direction="vertical"
              style={{ marginTop: "5%" }}
            /></Col>
            <Col span={12}><div className="steps-content">{steps[current.count].content}</div>
            </Col>
          </Row>

        </>
      ) : (
        <div></div>
      )}

    </>
  );
};
export default Stepper;
