/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021  (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by 
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
import Main from "../components/layout/Main";
import { useEffect, useState } from "react";
import axios from 'axios';

const { Title } = Typography;


const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "Application Type",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Avatar Name",
    dataIndex: "avatar",
    key: "name",
    width: "32%",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "name",
    width: "32%",
  },
  {
    title: "Organisation Name",
    dataIndex: "orgname",
    key: "function",
  },
  {
    title: "Date Updated",
    dataIndex: "updated",
    key: "function",
  },
  {
    title: "Action",
    key: "status",
    dataIndex: "status",
  },

];


// project table start
const project = [
  {
    title: "Name",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "Status",
    dataIndex: "age",
  },
  {
    title: "Date",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "completion",
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Spotify Version</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$14,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Progress Track</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$3,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Jira Platform Errors</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">Not Set</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">done</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Launch new Mobile App</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$20,600</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Web Dev</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$4,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Redesign Online Store</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$2,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },
];

function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [newdata,setData]=useState([])
  const userId = sessionStorage.getItem('userID')
  const data =  [
    {
      key: "1",
      name: (
        <>
            <div className="avatar-info">
              <Title level={5}>{newdata.application_type}</Title>
            </div>
        </>
      ),
      avatar: (
        <>
          <div className="author-info">
            <Title level={5}>{newdata.avatar_name}</Title>
          </div>
        </>
      ),
      country: (
        <>
          <div className="author-info">
            <Title level={5}>{newdata.countryofcitizenship}</Title>
          </div>
        </>
      ),
      orgname: (
        <>
          <div className="author-info">
            <Title level={5}>{newdata.orgName}</Title>
          </div>
        </>
      ),
      updated: (
        <>
          <div className="author-info">
            <Title level={5}>{newdata.updatedAt}</Title>
          </div>
        </>
      ),

  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            Pending
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },


  ];

  const renderedData = newdata.map((newdata) => ({
  key: newdata.key,
  name: (
    <div className="avatar-info">
      <Title level={5}>{newdata.application_type}</Title>
    </div>
  ),
  avatar: (
    <div className="author-info">
      <Title level={5}>{newdata.avatar_name}</Title>
    </div>
  ),
  country: (
    <div className="author-info">
      <Title level={5}>{newdata.countryofcitizenship}</Title>
    </div>
  ),
  orgname: (
    <div className="author-info">
      <Title level={5}>{newdata.orgName}</Title>
    </div>
  ),
  updated: (
    <div className="author-info">
      <Title level={5}>{newdata.updatedAt}</Title>
    </div>
  ),
  status: (
    <Button type="primary" className="tag-primary">
      Pending
    </Button>
  ),
  employed: (
    <div className="ant-employed">
      <span>23/04/18</span>
      <a href="#pablo">Edit</a>
    </div>
  ),
}));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8083/api/application/${userId}`, {
        });
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Applications Table"
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={renderedData}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Submitted Applications"

            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  // dataSource={dataproject}
                  dataSource={[]}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>

            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default Tables;
