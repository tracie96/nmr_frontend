import React,{useState} from "react";
import { Form, Select,Button,message, Typography, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
} from '../../slice/increase';

export default function Eightcontent() {
  const { Title, Paragraph, Text, Link } = Typography;
  const { TextArea } = Input;

  // const [useofrep, setUseofRep ] = useState("");
  // const [ useofrepurl, setUrlRepUrl ] = useState("");
  const [image, setImageUrl] = useState('');
  const [achievement_data, setAchievementData ] = useState("");
  const [achievement_data_url, setAccievementDataUrl ] = useState("");

  const [useofrep, setUseofRep ] = useState("");
  const [ useofrepurl, setUrlRepUrl ] = useState("");

  const [metaachievementdata, setMetaAchieveData ] = useState("");
  const [metaachievementdataurl, setMetaAchieveDataUrl ] = useState("");

  const [thirdpartyapproval, setThirdPartyApproval ] = useState("");
  const [thirdpartyapprovalurl, setThirdPartyApprovaUrl ] = useState("");

  const [statementofintent, setStatementOfIntent ] = useState("");
  const [statementofintenturl, setStatementOfIntentUrl ] = useState("");

  const [nationalidentity, setNationalIdentity ] = useState("");
  const [nationalidentityurl, setNationalIdentityUrl ] = useState("");

  const [digitalphoto, setDigitalPhoto ] = useState("");
  const [digitalphotourl, setDigitalPhotoUrl ] = useState("");

  const [additionaldoc, setAdditionalDoc ] = useState("");
  const [additionaldocurl, setAdditionalDocUrl ] = useState("");



  const dispatch = useDispatch();
  const useOfRep = () => {
    const data = new FormData()
    data.append("file", useofrep)
    data.append("upload_preset", "iez0wvtt")
    data.append("cloud_name","tracysoft")
    fetch("https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setUrlRepUrl(data.url)
    })
    .catch(err => console.log(err))
  }
    const SubmitMetaAchieve = () => {
      const data = new FormData()
      data.append("file", metaachievementdata)
      data.append("upload_preset", "iez0wvtt")
      data.append("cloud_name","tracysoft")
      fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
        setMetaAchieveDataUrl(data.url)
      })
      .catch(err => console.log(err))
  }
  const SubmitThirdPartyApproval = () => {
        const data = new FormData()
        data.append("file", thirdpartyapproval)
        data.append("upload_preset", "iez0wvtt")
        data.append("cloud_name","tracysoft")
        fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
          setThirdPartyApprovaUrl(data.url)
        })
        .catch(err => console.log(err))
  }
  const SubmitStatementOfIntent = () => {
          const data = new FormData()
          data.append("file", statementofintent)
          data.append("upload_preset", "iez0wvtt")
          data.append("cloud_name","tracysoft")
          fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
          method:"post",
          body: data
          })
          .then(resp => resp.json())
          .then(data => {
            setStatementOfIntentUrl(data.url)
          })
          .catch(err => console.log(err))
  }
  const SubmitNationalIdentity = () => {
            const data = new FormData()
            data.append("file", nationalidentity)
            data.append("upload_preset", "iez0wvtt")
            data.append("cloud_name","tracysoft")
            fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
            method:"post",
            body: data
            })
            .then(resp => resp.json())
            .then(data => {
              setNationalIdentityUrl(data.url)
            })
            .catch(err => console.log(err))
  }      
  const SubmitDigitalPhoto = () => {
          const data = new FormData()
          data.append("file", digitalphoto)
          data.append("upload_preset", "iez0wvtt")
          data.append("cloud_name","tracysoft")
          fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
          method:"post",
          body: data
          })
          .then(resp => resp.json())
          .then(data => {
            setDigitalPhotoUrl(data.url)
          })
          .catch(err => console.log(err))
  }
  const SubmitAdditionalDocs = () => {
        const data = new FormData()
        data.append("file", additionaldoc)
        data.append("upload_preset", "iez0wvtt")
        data.append("cloud_name","tracysoft")
        fetch("  https://api.cloudinary.com/v1_1/tracysoft/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
          setAdditionalDoc(data.url)
        })
        .catch(err => console.log(err))
  }
  const next = () => {
    const data = {
       useofrepurl: useofrepurl,
       thirdpartyapprovalurl: thirdpartyapprovalurl,
       metaachievementdataurl: metaachievementdataurl,
       statementofintenturl:statementofintenturl,
       nationalidentityurl: nationalidentityurl,
       digitalphotourl:digitalphotourl,
       additionaldocurl:additionaldocurl,

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
        <Title level={5}>Application to set/ break a record</Title>
        <Form.Item label="Use of a Representative" valuePropName="fileList">
        <input type="file" onChange= {(e)=> setUseofRep(e.target.files[0])}></input>
        <Button onClick={useOfRep}>Upload</Button>
        </Form.Item>

        <Form.Item label="Metaverse achievement data." valuePropName="fileList">
        <input type="file" onChange= {(e)=> setMetaAchieveData(e.target.files[0])}></input>
        <Button onClick={SubmitMetaAchieve}>Upload</Button>
        </Form.Item>
        

        <Form.Item label="Third party appraisal." valuePropName="fileList">
        <input type="file" onChange= {(e)=> setThirdPartyApproval(e.target.files[0])}></input>
        <Button onClick={SubmitThirdPartyApproval}>Upload</Button>
        </Form.Item>

        <Form.Item label="Statement of intent and consent." valuePropName="fileList">
        <input type="file" onChange= {(e)=> setStatementOfIntent(e.target.files[0])}></input>
        <Button onClick={SubmitStatementOfIntent}>Upload</Button>
        </Form.Item>

        <Form.Item label="National identity document" valuePropName="fileList">
        <input type="file" onChange= {(e)=> setNationalIdentity(e.target.files[0])}></input>
        <Button onClick={SubmitNationalIdentity}>Upload</Button>
        </Form.Item>

        <Form.Item label="Digital photo" valuePropName="fileList">
        <input type="file" onChange= {(e)=> setDigitalPhoto(e.target.files[0])}></input>
        <Button onClick={SubmitDigitalPhoto}>Upload</Button>
        </Form.Item>

        <Form.Item label="Additional documents" valuePropName="fileList">
        <input type="file" onChange= {(e)=> setAdditionalDoc(e.target.files[0])}></input>
        <Button onClick={SubmitAdditionalDocs}>Upload</Button>
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
