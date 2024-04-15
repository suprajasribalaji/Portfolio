import styled from "styled-components";
import React from "react";
import { NextPage } from "next";
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';


interface SubmitButtonProps {
    form: FormInstance;
}
  
const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
  
    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);
  
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
};

const Contact: NextPage = () => {
    const [form] = Form.useForm();

    return (
        <ContactPage>
            <div>
                <div>
                    mail icon
                    phone-number icon
                    address icon
                    linkedin-profile icon
                </div>
                <div>
                    <h3>Let's Connect!</h3>
                    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="Mail Id" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="message" label="Your Message" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                            <SubmitButton form={form}>Connect</SubmitButton>
                            <Button htmlType="reset">Refresh</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ContactPage>
    );
};

export default Contact;

const ContactPage = styled.div`

`;