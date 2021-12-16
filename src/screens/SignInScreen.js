import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Layout,
  Col,
  Row,
  Typography,
  Divider,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  FbAuthUser,
  GoogleAuthUser,
  signInEmailAndPassword,
  SignUpWithEmailAndPassword,
} from "../firebase/auth";
import { Content } from "antd/lib/layout/layout";
import Logo from "../vectors/Logo";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUser } from "../redux/reducers/userSlice";

function SignInScreen() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onFinish = (values) => {
    signInEmailAndPassword(values.email, values.password);
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Layout>
      <Content
        style={{
          backgroundColor: "white",
          height: "100vh",
          padding: "2.5rem 0",
        }}
      >
        <>
          <Row align="middle" justify="center" style={{ height: "100%" }}>
            <Col flex xs={11} sm={8} md={8} lg={7}>
              <div className="mb-3">
                <div className="flex h-16 justify-center w-full ">
                  <Logo />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 text-center">
                  Openwave
                </h1>
              </div>
              <div className="bg-white p-8 pb-4 rounded shadow-lg mb-6">
                <h1 className="text-xl text-gray-500 mb-6 text-center">
                  Log in to your account
                </h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  size="large"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                    size="large"
                  >
                    <Input className="mb-4" placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                      {
                        min: 8,
                        message: "Password must be at least 8 characters!",
                      },
                    ]}
                  >
                    <Input type="password" placeholder="Enter your password" />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      className="login-form-button"
                      block
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <p className="text-gray-400 text-center">Or</p>

                <div
                  onClick={GoogleAuthUser}
                  className="bg-white shadow py-3 px-5 flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                  <FcGoogle className="text-xl mr-4" />
                  <h4 className="mb-0 font-bold text-gray-500 ">
                    Continue with Google
                  </h4>
                </div>
                <div
                  onClick={FbAuthUser}
                  className="bg-white shadow py-3 px-5 flex items-center justify-center cursor-pointer hover:bg-gray-50 mt-3"
                >
                  <div>
                    <GrFacebook className="text-xl mr-4 text-blue-600" />
                  </div>
                  <h4 className="mb-0 font-bold text-gray-500 ">
                    Continue with Facebook
                  </h4>
                </div>
                <Divider />

                <Link to="/signup">
                  <p className="text-center text-blue-600 hover:underline hover:text-indigo-800">
                    Sign up for an account
                  </p>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      </Content>
    </Layout>
  );
}

export default SignInScreen;
