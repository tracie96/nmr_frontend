
import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Select,
} from "antd";
import "antd/dist/reset.css";
// var axios = require('axios');
import axios from "axios";
import logo1 from "../assets/images/logos-facebook.svg";
import logo2 from "../assets/images/logo-apple.svg";
import logo3 from "../assets/images/Google__G__Logo.svg.png";

import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const template = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const profile = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const signup = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];

const signin = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      className="fill-muted"
      d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
    />
  </svg>
];


export default function SignUp() {

  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')


  const inputProps = {
    inputStyle: 'box',
    labelStyle: 'stacked',
    placeholder: 'Please select...'
  };
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  // const fetchCountry = () => {
  //   var data = '';
  //   var config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'https://trial.mobiscroll.com/content/countries.json',
  //     headers: {},
  //     data: data
  //   };
  //   console.log('yesss')
  //   axios(config)
  //     .then(function (response) {
  //       const countries = [];
  //       console.log(response, 'respone')
  //       for (let i = 0; i < response.data.length; ++i) {
  //         const country = response.data[i];
  //         countries.push({ text: country.text, value: country.value });
  //       }
  //       setMyData(countries);
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }



  const onFinish = (values) => {
    var data = JSON.stringify({
      "fullname": firstname,
      "lastname": lastName,
      "email": email,
      "country": "Gradientfi",
      "password": password
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8083/api/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // set
        console.log(JSON.stringify(response.data));

      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="layout-default ant-layout layout-sign-up">

        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Sign Up</Title>
              <p className="text-lg">
                Sign in to Start creating you NFT's
              </p>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Register With</h5>}
            bordered="false"
          >
            <div className="sign-up-gateways">
              <Button type="false">
                <img src={logo1} alt="logo 1" />
              </Button>
              <Button type="false">
                <img src={logo2} alt="logo 2" />
              </Button>
              <Button type="false">
                <img src={logo3} alt="logo 3" />
              </Button>
            </div>
            <p className="text-center my-25 font-semibold text-muted">Or</p>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item
                name="Name"
                rules={[
                  { required: true, message: "Please input your firstname!" },
                ]}
              >
                <Input placeholder="First Name" value="" onChange={(e) => setFirstName(e.target.value)} />
              </Form.Item>

              <Form.Item
                name="Name"
                rules={[
                  { required: true, message: "Please input your lastname!" },
                ]}
              >
                <Input placeholder="Last Name" value="" onChange={(e) => setLastName(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" value="" onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" value="" onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <Select
                  labelInValue
                  defaultValue={{
                    value: 'Country',
                    label: 'Country'
                  }}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      "value": "AF",
                      "group": "A",
                      "text": "Afghanistan"
                    },
                    {
                      "value": "AL",
                      "group": "A",
                      "text": "Albania"
                    },
                    {
                      "value": "DZ",
                      "group": "A",
                      "text": "Algeria"
                    },
                    {
                      "value": "AD",
                      "group": "A",
                      "text": "Andorra"
                    },
                    {
                      "value": "AO",
                      "group": "A",
                      "text": "Angola"
                    },
                    {
                      "value": "AR",
                      "group": "A",
                      "text": "Argentina"
                    },
                    {
                      "value": "AM",
                      "group": "A",
                      "text": "Armenia"
                    },
                    {
                      "value": "AW",
                      "group": "A",
                      "text": "Aruba"
                    },
                    {
                      "value": "AU",
                      "group": "A",
                      "text": "Australia"
                    },
                    {
                      "value": "AT",
                      "group": "A",
                      "text": "Austria"
                    },
                    {
                      "value": "AZ",
                      "group": "A",
                      "text": "Azerbaijan"
                    },
                    {
                      "value": "BH",
                      "group": "B",
                      "text": "Bahrain"
                    },
                    {
                      "value": "BD",
                      "group": "B",
                      "text": "Bangladesh"
                    },
                    {
                      "value": "BY",
                      "group": "B",
                      "text": "Belarus"
                    },
                    {
                      "value": "BE",
                      "group": "B",
                      "text": "Belgium"
                    },
                    {
                      "value": "BZ",
                      "group": "B",
                      "text": "Belize"
                    },
                    {
                      "value": "BJ",
                      "group": "B",
                      "text": "Benin"
                    },
                    {
                      "value": "BT",
                      "group": "B",
                      "text": "Bhutan"
                    },
                    {
                      "value": "BO",
                      "group": "B",
                      "text": "Bolivia"
                    },
                    {
                      "value": "BA",
                      "group": "B",
                      "text": "Bosnia And Herzegovina"
                    },
                    {
                      "value": "BW",
                      "group": "B",
                      "text": "Botswana"
                    },
                    {
                      "value": "BR",
                      "group": "B",
                      "text": "Brazil"
                    },
                    {
                      "value": "IO",
                      "group": "B",
                      "text": "British Indian Ocean Territory"
                    },
                    {
                      "value": "BN",
                      "group": "B",
                      "text": "Brunei Darussalam"
                    },
                    {
                      "value": "BG",
                      "group": "B",
                      "text": "Bulgaria"
                    },
                    {
                      "value": "BF",
                      "group": "B",
                      "text": "Burkina Faso"
                    },
                    {
                      "value": "BI",
                      "group": "B",
                      "text": "Burundi"
                    },
                    {
                      "value": "KH",
                      "group": "C",
                      "text": "Cambodia"
                    },
                    {
                      "value": "CM",
                      "group": "C",
                      "text": "Cameroon"
                    },
                    {
                      "value": "CV",
                      "group": "C",
                      "text": "Cape Verde"
                    },
                    {
                      "value": "CF",
                      "group": "C",
                      "text": "Central African Republic"
                    },
                    {
                      "value": "TD",
                      "group": "C",
                      "text": "Chad"
                    },
                    {
                      "value": "CL",
                      "group": "C",
                      "text": "Chile"
                    },
                    {
                      "value": "CN",
                      "group": "C",
                      "text": "China"
                    },
                    {
                      "value": "CO",
                      "group": "C",
                      "text": "Colombia"
                    },
                    {
                      "value": "KM",
                      "group": "C",
                      "text": "Comoros"
                    },
                    {
                      "value": "CG",
                      "group": "C",
                      "text": "Congo"
                    },
                    {
                      "value": "CD",
                      "group": "C",
                      "text": "Congo, Democratic Republic"
                    },
                    {
                      "value": "CK",
                      "group": "C",
                      "text": "Cook Islands"
                    },
                    {
                      "value": "CR",
                      "group": "C",
                      "text": "Costa Rica"
                    },
                    {
                      "value": "CI",
                      "group": "C",
                      "text": "Cote D'Ivoire"
                    },
                    {
                      "value": "HR",
                      "group": "C",
                      "text": "Croatia"
                    },
                    {
                      "value": "CU",
                      "group": "C",
                      "text": "Cuba"
                    },
                    {
                      "value": "CY",
                      "group": "C",
                      "text": "Cyprus"
                    },
                    {
                      "value": "CZ",
                      "group": "C",
                      "text": "Czech Republic"
                    },
                    {
                      "value": "DK",
                      "group": "D",
                      "text": "Denmark"
                    },
                    {
                      "value": "DJ",
                      "group": "D",
                      "text": "Djibouti"
                    },
                    {
                      "value": "EC",
                      "group": "E",
                      "text": "Ecuador"
                    },
                    {
                      "value": "EG",
                      "group": "E",
                      "text": "Egypt"
                    },
                    {
                      "value": "SV",
                      "group": "E",
                      "text": "El Salvador"
                    },
                    {
                      "value": "GQ",
                      "group": "E",
                      "text": "Equatorial Guinea"
                    },
                    {
                      "value": "ER",
                      "group": "E",
                      "text": "Eritrea"
                    },
                    {
                      "value": "EE",
                      "group": "E",
                      "text": "Estonia"
                    },
                    {
                      "value": "ET",
                      "group": "E",
                      "text": "Ethiopia"
                    },
                    {
                      "value": "FK",
                      "group": "F",
                      "text": "Falkland Islands (Malvinas)"
                    },
                    {
                      "value": "FO",
                      "group": "F",
                      "text": "Faroe Islands"
                    },
                    {
                      "value": "FJ",
                      "group": "F",
                      "text": "Fiji"
                    },
                    {
                      "value": "FI",
                      "group": "F",
                      "text": "Finland"
                    },
                    {
                      "value": "FR",
                      "group": "F",
                      "text": "France"
                    },
                    {
                      "value": "PF",
                      "group": "F",
                      "text": "French Polynesia"
                    },
                    {
                      "value": "GA",
                      "group": "G",
                      "text": "Gabon"
                    },
                    {
                      "value": "GM",
                      "group": "G",
                      "text": "Gambia"
                    },
                    {
                      "value": "GE",
                      "group": "G",
                      "text": "Georgia"
                    },
                    {
                      "value": "DE",
                      "group": "G",
                      "text": "Germany"
                    },
                    {
                      "value": "GH",
                      "group": "G",
                      "text": "Ghana"
                    },
                    {
                      "value": "GI",
                      "group": "G",
                      "text": "Gibraltar"
                    },
                    {
                      "value": "GR",
                      "group": "G",
                      "text": "Greece"
                    },
                    {
                      "value": "GL",
                      "group": "G",
                      "text": "Greenland"
                    },
                    {
                      "value": "GT",
                      "group": "G",
                      "text": "Guatemala"
                    },
                    {
                      "value": "GN",
                      "group": "G",
                      "text": "Guinea"
                    },
                    {
                      "value": "GW",
                      "group": "G",
                      "text": "Guinea-Bissau"
                    },
                    {
                      "value": "GY",
                      "group": "G",
                      "text": "Guyana"
                    },
                    {
                      "value": "HT",
                      "group": "H",
                      "text": "Haiti"
                    },
                    {
                      "value": "HN",
                      "group": "H",
                      "text": "Honduras"
                    },
                    {
                      "value": "HK",
                      "group": "H",
                      "text": "Hong Kong"
                    },
                    {
                      "value": "HU",
                      "group": "H",
                      "text": "Hungary"
                    },
                    {
                      "value": "IS",
                      "group": "I",
                      "text": "Iceland"
                    },
                    {
                      "value": "IN",
                      "group": "I",
                      "text": "India"
                    },
                    {
                      "value": "ID",
                      "group": "I",
                      "text": "Indonesia"
                    },
                    {
                      "value": "IR",
                      "group": "I",
                      "text": "Iran, Islamic Republic Of"
                    },
                    {
                      "value": "IQ",
                      "group": "I",
                      "text": "Iraq"
                    },
                    {
                      "value": "IE",
                      "group": "I",
                      "text": "Ireland"
                    },
                    {
                      "value": "IL",
                      "group": "I",
                      "text": "Israel"
                    },
                    {
                      "value": "IT",
                      "group": "I",
                      "text": "Italy"
                    },
                    {
                      "value": "JP",
                      "group": "J",
                      "text": "Japan"
                    },
                    {
                      "value": "JO",
                      "group": "J",
                      "text": "Jordan"
                    },
                    {
                      "value": "KP",
                      "group": "K",
                      "text": "KP"
                    },
                    {
                      "value": "KE",
                      "group": "K",
                      "text": "Kenya"
                    },
                    {
                      "value": "KI",
                      "group": "K",
                      "text": "Kiribati"
                    },
                    {
                      "value": "KR",
                      "group": "K",
                      "text": "Korea"
                    },
                    {
                      "value": "KW",
                      "group": "K",
                      "text": "Kuwait"
                    },
                    {
                      "value": "KG",
                      "group": "K",
                      "text": "Kyrgyzstan"
                    },
                    {
                      "value": "LA",
                      "group": "L",
                      "text": "Lao People's Democratic Republic"
                    },
                    {
                      "value": "LV",
                      "group": "L",
                      "text": "Latvia"
                    },
                    {
                      "value": "LB",
                      "group": "L",
                      "text": "Lebanon"
                    },
                    {
                      "value": "LS",
                      "group": "L",
                      "text": "Lesotho"
                    },
                    {
                      "value": "LR",
                      "group": "L",
                      "text": "Liberia"
                    },
                    {
                      "value": "LY",
                      "group": "L",
                      "text": "Libyan Arab Jamahiriya"
                    },
                    {
                      "value": "LI",
                      "group": "L",
                      "text": "Liechtenstein"
                    },
                    {
                      "value": "LT",
                      "group": "L",
                      "text": "Lithuania"
                    },
                    {
                      "value": "LU",
                      "group": "L",
                      "text": "Luxembourg"
                    },
                    {
                      "value": "MO",
                      "group": "M",
                      "text": "Macao"
                    },
                    {
                      "value": "MK",
                      "group": "M",
                      "text": "Macedonia"
                    },
                    {
                      "value": "MG",
                      "group": "M",
                      "text": "Madagascar"
                    },
                    {
                      "value": "MW",
                      "group": "M",
                      "text": "Malawi"
                    },
                    {
                      "value": "MY",
                      "group": "M",
                      "text": "Malaysia"
                    },
                    {
                      "value": "MV",
                      "group": "M",
                      "text": "Maldives"
                    },
                    {
                      "value": "ML",
                      "group": "M",
                      "text": "Mali"
                    },
                    {
                      "value": "MT",
                      "group": "M",
                      "text": "Malta"
                    },
                    {
                      "value": "MH",
                      "group": "M",
                      "text": "Marshall Islands"
                    },
                    {
                      "value": "MR",
                      "group": "M",
                      "text": "Mauritania"
                    },
                    {
                      "value": "MU",
                      "group": "M",
                      "text": "Mauritius"
                    },
                    {
                      "value": "MX",
                      "group": "M",
                      "text": "Mexico"
                    },
                    {
                      "value": "FM",
                      "group": "M",
                      "text": "Micronesia, Federated States Of"
                    },
                    {
                      "value": "MD",
                      "group": "M",
                      "text": "Moldova"
                    },
                    {
                      "value": "MC",
                      "group": "M",
                      "text": "Monaco"
                    },
                    {
                      "value": "MN",
                      "group": "M",
                      "text": "Mongolia"
                    },
                    {
                      "value": "ME",
                      "group": "M",
                      "text": "Montenegro"
                    },
                    {
                      "value": "MA",
                      "group": "M",
                      "text": "Morocco"
                    },
                    {
                      "value": "MZ",
                      "group": "M",
                      "text": "Mozambique"
                    },
                    {
                      "value": "NA",
                      "group": "N",
                      "text": "Namibia"
                    },
                    {
                      "value": "NP",
                      "group": "N",
                      "text": "Nepal"
                    },
                    {
                      "value": "NL",
                      "group": "N",
                      "text": "Netherlands"
                    },
                    {
                      "value": "NC",
                      "group": "N",
                      "text": "New Caledonia"
                    },
                    {
                      "value": "NZ",
                      "group": "N",
                      "text": "New Zealand"
                    },
                    {
                      "value": "NI",
                      "group": "N",
                      "text": "Nicaragua"
                    },
                    {
                      "value": "NE",
                      "group": "N",
                      "text": "Niger"
                    },
                    {
                      "value": "NG",
                      "group": "N",
                      "text": "Nigeria"
                    },
                    {
                      "value": "NU",
                      "group": "N",
                      "text": "Niue"
                    },
                    {
                      "value": "NF",
                      "group": "N",
                      "text": "Norfolk Island"
                    },
                    {
                      "value": "NO",
                      "group": "N",
                      "text": "Norway"
                    },
                    {
                      "value": "OM",
                      "group": "A",
                      "text": "Oman"
                    },
                    {
                      "value": "PK",
                      "group": "P",
                      "text": "Pakistan"
                    },
                    {
                      "value": "PA",
                      "group": "P",
                      "text": "Panama"
                    },
                    {
                      "value": "PG",
                      "group": "P",
                      "text": "Papua New Guinea"
                    },
                    {
                      "value": "PY",
                      "group": "P",
                      "text": "Paraguay"
                    },
                    {
                      "value": "PE",
                      "group": "P",
                      "text": "Peru"
                    },
                    {
                      "value": "PH",
                      "group": "P",
                      "text": "Philippines"
                    },
                    {
                      "value": "PL",
                      "group": "P",
                      "text": "Poland"
                    },
                    {
                      "value": "PT",
                      "group": "P",
                      "text": "Portugal"
                    },
                    {
                      "value": "QA",
                      "group": "A",
                      "text": "Qatar"
                    },
                    {
                      "value": "RO",
                      "group": "R",
                      "text": "Romania"
                    },
                    {
                      "value": "RU",
                      "group": "R",
                      "text": "Russian Federation"
                    },
                    {
                      "value": "RW",
                      "group": "R",
                      "text": "Rwanda"
                    },
                    {
                      "value": "WS",
                      "group": "S",
                      "text": "Samoa"
                    },
                    {
                      "value": "SM",
                      "group": "S",
                      "text": "San Marino"
                    },
                    {
                      "value": "ST",
                      "group": "S",
                      "text": "Sao Tome And Principe"
                    },
                    {
                      "value": "SA",
                      "group": "S",
                      "text": "Saudi Arabia"
                    },
                    {
                      "value": "SN",
                      "group": "S",
                      "text": "Senegal"
                    },
                    {
                      "value": "RS",
                      "group": "S",
                      "text": "Serbia"
                    },
                    {
                      "value": "SC",
                      "group": "S",
                      "text": "Seychelles"
                    },
                    {
                      "value": "SL",
                      "group": "S",
                      "text": "Sierra Leone"
                    },
                    {
                      "value": "SG",
                      "group": "S",
                      "text": "Singapore"
                    },
                    {
                      "value": "SK",
                      "group": "S",
                      "text": "Slovakia"
                    },
                    {
                      "value": "SI",
                      "group": "S",
                      "text": "Slovenia"
                    },
                    {
                      "value": "SB",
                      "group": "S",
                      "text": "Solomon Islands"
                    },
                    {
                      "value": "SO",
                      "group": "S",
                      "text": "Somalia"
                    },
                    {
                      "value": "ZA",
                      "group": "S",
                      "text": "South Africa"
                    },
                    {
                      "value": "ES",
                      "group": "S",
                      "text": "Spain"
                    },
                    {
                      "value": "LK",
                      "group": "S",
                      "text": "Sri Lanka"
                    },
                    {
                      "value": "SD",
                      "group": "S",
                      "text": "Sudan"
                    },
                    {
                      "value": "SR",
                      "group": "S",
                      "text": "Suriname"
                    },
                    {
                      "value": "SZ",
                      "group": "S",
                      "text": "Swaziland"
                    },
                    {
                      "value": "SE",
                      "group": "S",
                      "text": "Sweden"
                    },
                    {
                      "value": "CH",
                      "group": "S",
                      "text": "Switzerland"
                    },
                    {
                      "value": "SY",
                      "group": "S",
                      "text": "Syrian Arab Republic"
                    },
                    {
                      "value": "TW",
                      "group": "T",
                      "text": "Taiwan"
                    },
                    {
                      "value": "TJ",
                      "group": "T",
                      "text": "Tajikistan"
                    },
                    {
                      "value": "TZ",
                      "group": "T",
                      "text": "Tanzania"
                    },
                    {
                      "value": "TH",
                      "group": "T",
                      "text": "Thailand"
                    },
                    {
                      "value": "TL",
                      "group": "T",
                      "text": "Timor-Leste"
                    },
                    {
                      "value": "TG",
                      "group": "T",
                      "text": "Togo"
                    },
                    {
                      "value": "TK",
                      "group": "T",
                      "text": "Tokelau"
                    },
                    {
                      "value": "TO",
                      "group": "T",
                      "text": "Tonga"
                    },
                    {
                      "value": "TN",
                      "group": "T",
                      "text": "Tunisia"
                    },
                    {
                      "value": "TR",
                      "group": "T",
                      "text": "Turkey"
                    },
                    {
                      "value": "TM",
                      "group": "T",
                      "text": "Turkmenistan"
                    },
                    {
                      "value": "TV",
                      "group": "T",
                      "text": "Tuvalu"
                    },
                    {
                      "value": "UG",
                      "group": "U",
                      "text": "Uganda"
                    },
                    {
                      "value": "UA",
                      "group": "U",
                      "text": "Ukraine"
                    },
                    {
                      "value": "AE",
                      "group": "U",
                      "text": "United Arab Emirates"
                    },
                    {
                      "value": "GB",
                      "group": "U",
                      "text": "United Kingdom"
                    },
                    {
                      "value": "US",
                      "group": "U",
                      "text": "United States"
                    },
                    {
                      "value": "UY",
                      "group": "U",
                      "text": "Uruguay"
                    },
                    {
                      "value": "VU",
                      "group": "V",
                      "text": "Vanuatu"
                    },
                    {
                      "value": "VE",
                      "group": "V",
                      "text": "Venezuela"
                    },
                    {
                      "value": "VN",
                      "group": "V",
                      "text": "Viet Nam"
                    },
                    {
                      "value": "WF",
                      "group": "W",
                      "text": "Wallis And Futuna"
                    },
                    {
                      "value": "YE",
                      "group": "Y",
                      "text": "Yemen"
                    },
                    {
                      "value": "ZM",
                      "group": "Z",
                      "text": "Zambia"
                    },
                    {
                      "value": "ZW",
                      "group": "Z",
                      "text": "Zimbabwe"
                    }
                  ]}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  I agree the{" "}
                  <a href="#pablo" className="font-bold text-dark">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%", background: '#1677ff' }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>

      </div>
    </>
  );
}
