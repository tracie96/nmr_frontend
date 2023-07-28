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
  Modal,
  Input,
  Form,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import pencil from "../assets/images/pencil.svg";
import Main from "../components/layout/Main";

const { Title } = Typography;
const { Option } = Select;
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

function AdminTables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [newdata, setData] = useState([])
  console.log(newdata, "newdata")
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const[modal1Open,setModal1Open]= useState(false)
  const [image, setImage ] = useState("");
  const [imageUrl, setImageUrl ] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [uploadText, setUploadtext ] = useState("Upload");

  const [formData, setFormData] = useState({
    name: '',
    imageLink: '',
    privileges: [],
    price: 0,
    userId: sessionStorage.getItem('userID'),
    isDemo: false,
    isArchive: false,
    isListed: false
  });

  const showModal = () => {
    setOpen(true);
  };
  const submitAvatar = (e) => {
    e.preventDefault()
    setUploadtext('Uploading...')
    const data = new FormData()

    data.append("file", image)
    data.append("upload_preset", "iez0wvtt")
    data.append("cloud_name","tracysoft")
    fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setImageUrl(data.url)
      console.log(imageUrl)
      setUploadtext('Uploaded')
    })
    .catch(err => console.log(err))
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked
    }));
  };


  const [customPrivilege, setCustomPrivilege] = useState('');

  const handlePrivilegesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      privileges: selectedOptions
    }));
  };

  const handleCustomPrivilegeChange = (e) => {
    setCustomPrivilege(e.target.value);
  };

  const handleAddCustomPrivilege = () => {
    if (customPrivilege.trim() !== '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        privileges: [...prevFormData.privileges, customPrivilege]
      }));
      setCustomPrivilege('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the API endpoint for NFT creation
    setFormData({
      name: '',
      imageLink: imageUrl,
      privileges: [],
      price: 0,
      userId: sessionStorage.getItem('userID'),
      isDemo: false,
      isArchive: false
    });
    let data = JSON.stringify({
      "name": formData.name,
      "imageLink": imageUrl,
      "privileges": formData.privileges,
      "price": formData.price,
      "userId": "645f782f3fef9b77d58639ae",
      "isDemo": formData.isDemo,
      "isArchive": formData.isArchive
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8083/api/nft',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      setOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Record Created Succcessfully',
      });

    })
    .catch((error) => {
      console.log(error);
    });
    
  };
  const data = [
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
            <Title level={5}>{Date(newdata.updatedAt)}</Title>
          </div>
        </>
      ),

      status: (
        <>
          <Button type="primary" className="tag-primary" onClick={() => setModal1Open(true)}>
            View Application
          </Button>

          <Button type="primary" onClick={showModal} className="tag-primary ml-2" style={{ marginLeft: "2%" }}>
            Create Record
          </Button>
        </>
      ),
  
    },

  ];

  const renderedData = newdata.map((newdata) => ({
    key: newdata.key,
    name: (
      <div className="avatar-info">
        <Title level={5}>{newdata.application_type.toUpperCase()}</Title>
      </div>
    ),
    avatar: (
      <div className="author-info">
        <Title level={5}>{newdata.avatar_name.toUpperCase()}</Title>
      </div>
    ),
    country: (
      <div className="author-info">
        <Title level={5}>{newdata.countryofcitizenship.toUpperCase()}</Title>
      </div>
    ),
    orgname: (
      <div className="author-info">
        <Title level={5}>{newdata.orgName.toUpperCase()}</Title>
      </div>
    ),
    updated: (
      <div className="author-info">
        <Title level={5}>{newdata.updatedAt.toUpperCase()}</Title>
      </div>
    ),
    status: (
      <>
      <Button type="primary" className="tag-primary" onClick={() => setModal1Open(true)}>
            View Application
          </Button>

          <Button type="primary" onClick={showModal} className="tag-primary ml-2" style={{ marginLeft: "2%" }}>
            Create Record
          </Button>
        
    </>
      
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
        const response = await axios.get('http://localhost:8083/api/application', {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkFuZWxlIiwibGFzdG5hbWUiOiJBbWFyYWNoaSIsImVtYWlsIjoidHJhY3lhbWFyYTA3QGdtYWlsLmNvbSIsImNvdW50cnkiOiJHcmFkaWVudGZpIiwicGFzc3dvcmQiOiJ5eXl5eXkiLCJpYXQiOjE2ODM2Mzk0MTgsImV4cCI6MTY4MzY0MzAxOH0.kecNqrUYPOZeU47raGOaRtmhzKTXMzkC65w-qr3zKfA',
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
            {contextHolder}

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
            <Modal
              title="Create Record"
              open={open}
              confirmLoading={confirmLoading}
              onOk={()=>setOpen(false)}
            >
              <form onSubmit={handleSubmit} className="container">
              
                <div className="mb-3">
                  <label htmlFor="imageLink" className="form-label">Image Link:</label>
                  <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                  <button onClick={submitAvatar} className="btn btn-primary"  style={{background:"#1677ff"}}>{uploadText}</button>
                </div>
                <div>
        <label htmlFor="privileges">Privileges:</label>
        <Select
          id="privileges"
          name="privileges"
          mode="multiple"
          value={formData.privileges}
          onChange={handlePrivilegesChange}
          style={{ width: '100%' }}
        >
          <Option value="privilege1"></Option>
        </Select>
      </div>
      <br/>
                <div className="form-group">
                  <label htmlFor="customPrivilege">Custom Privilege:</label>
                  <div className="input-group">
                    <input type="text" id="customPrivilege" className="form-control" value={customPrivilege} onChange={handleCustomPrivilegeChange} />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary" onClick={handleAddCustomPrivilege} style={{background:"#1677ff"}}>Add Custom Privilege</button>
                    </div>
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" id="isDemo" name="isDemo" checked={formData.isDemo} onChange={handleCheckboxChange} className="form-check-input" />
                  <label htmlFor="isDemo" className="form-check-label">Is Demo</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" id="isArchive" name="isArchive" checked={formData.isArchive} onChange={handleCheckboxChange} className="form-check-input" />
                  <label htmlFor="isArchive" className="form-check-label">Is Archive</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{background:"#1677ff"}}>Create NFT</button>
              </form>
            </Modal>

            <Modal
        title="View Application"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <label>Avatar Name:</label>
          <span>{newdata.avatar_name}</span>
        </Col>
        <Col span={12}>
          <label>Email:</label>
          <span>{newdata.email}</span>
        </Col>
        <Col span={12}>
          <label>Country:</label>
          <span>{newdata.country}</span>
        </Col>
        <Col span={12}>
          <label>Gender:</label>
          <span>{newdata.gender}</span>
        </Col>
        <Col span={12}>
          <label>Organization Name:</label>
          <span>{newdata.orgName}</span>
        </Col>
        <Col span={12}>
          <label>Province:</label>
          <span>{newdata.province}</span>
        </Col>
        <Col span={12}>
          <label>Application Type:</label>
          <span>{newdata.application_type}</span>
        </Col>
        <Col span={12}>
          <label>Are you a Representative:</label>
          <span>{newdata.are_you_a_rep}</span>
        </Col>
        <Col span={12}>
          <label>Country of Citizenship:</label>
          <span>{newdata.countryofcitizenship}</span>
        </Col>
        <Col span={12}>
          <label>Digital Photo:</label>
          <span>{newdata.digitalphotourl}</span>
        </Col>
        <Col span={12}>
          <label>NFT Priviledges:</label>
          <span>{newdata.nftpriviledges}</span>
        </Col>
        {/* Add more fields as needed */}
      </Row>
      </Modal>

          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default AdminTables;
