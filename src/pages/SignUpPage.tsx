import React from 'react';
import {Button, Col, Form, Input, Row, Typography} from "antd";

import {ConnectedProps} from "react-redux";
import {connectorSignUpPage} from "../containers/SignUpPageContainer";
import {NavLink} from "react-router-dom";

type Props = ConnectedProps<typeof connectorSignUpPage>

export const SignUpPage: React.FC<Props> = (props) => {

    const onFinish = (values: any) => {
        props.signup(values.email, values.password)
    }

    return (
        <React.Fragment>
            <Col xl={{span: 6, offset: 9}}
                 lg={{span: 6, offset: 9}}
                 md={{span: 8, offset: 8}}
                 sm={{span: 10, offset: 7}}
                 xs={{span: 12, offset: 6}}
            >
                <Row style={{height: "80%"}} justify="space-around" align="middle">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Typography.Title style={{textAlign: "center", width: "100%"}}> Sign up </Typography.Title>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Invalid email!'
                                }
                                    ]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {required: true, message: 'Please input your password!',},
                                {min: 8, message: "Password length less then 8!"},
                                {pattern: /^\S*$/, message: "Password have whitespace!"},
                                {pattern: /^(?=.*\d)(?=.*[a-zA-Z]).+$/, message: "Password should contain letters and digits"},
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password" />
                        </Form.Item>
                        <Form.Item style={{textAlign: "center"}}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                <span style={{letterSpacing: "1px"}}>CREATE ACCOUNT</span>
                            </Button>
                            <NavLink to="/login">
                                Back to Login
                            </NavLink>
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
        </React.Fragment>
    );
};