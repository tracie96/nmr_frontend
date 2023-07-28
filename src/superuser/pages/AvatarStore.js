import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import AdminMain from '../components/layout/Main';

const { TextArea } = Input;

const AvatarForm = () => {
  const onFinish = (values) => {
    // Send form data to backend or perform desired actions
    console.log(values);
    // Reset form fields
    Form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AdminMain>
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{width:"50%",margin:'auto'}}
    >
      <Form.Item label="Item Name" name="itemName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Images" name="images">
        <Input type="file" multiple />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true, type: 'number' }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item label="Size" name="size">
        <Input />
      </Form.Item>
      <Form.Item label="Color" name="color">
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Rating" name="rating" rules={[{ type: 'number' }]}>
        <InputNumber min={0} max={5} />
      </Form.Item>
      <Form.Item label="Shipping Information" name="shippingInfo">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </AdminMain>
  );
};

export default AvatarForm;
