import React from 'react';

import {Button, Col, Form, Input, Row, Typography} from "antd";

import {LockOutlined, UserOutlined} from "@ant-design/icons/lib";
import {ConnectedProps} from "react-redux";
import {connectorLoginPage} from "containers/LoginPageContainer";
import {NavLink, Redirect} from "react-router-dom";
import {RouteComponentProps} from "../types/reactRouter";


type TProps = { isAuth: boolean | null }
    & ConnectedProps<typeof connectorLoginPage>
    & RouteComponentProps<any>

export const LoginPage: React.FC<TProps> = (props) => {
    const onFinish = async (values: any) => {
        const result = await props.authUser(values.email, values.password)
    };

    if (props.isAuth) return <Redirect to="/"/>

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
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Typography.Title style={{textAlign: "center", width: "100%"}}> Login </Typography.Title>
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Username"
                                   autoComplete="true"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                                autoComplete="true"
                            />
                        </Form.Item>
                        <Form.Item style={{textAlign: "center"}}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <NavLink to={"/signup"}>register now!</NavLink>
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
        </React.Fragment>
    );
};