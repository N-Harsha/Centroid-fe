import "./Login.css";
import React from "react";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useAuthContext } from "../common/contexts/AuthContext";
import { useMutation, useQuery } from "react-query";
import { api, signupAction } from "../common/utils/APIMethods";
import { useNavigate } from "react-router-dom";
import APIConstants from "../../common/constants/APIConstants";

const Login = () => {
  const { dispatch, authConfig } = useAuthContext();
  const navigate = useNavigate();
  const { loginURL } = APIConstants;
  const [error, setError] = useState({
    there: false,
    message: null
  });
  const [onLogin, setOnLogin] = useState(true);

  const mutation = useMutation((formData) => signupAction(formData), {
    onSuccess: (response) => {
      console.log(response);
      navigate("/login", {
        state: { username: response?.username },
        replace: true
      });
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const { isLoading, mutate } = useMutation(
    ({ username, password }) =>
      api({
        url: loginURL,
        method: "POST",
        body: { username, password },
        checkAuth: false
      }),
    {
      onSuccess: (response) => {
        dispatch({ type: "onLogin", payload: response });
        navigate("/dashboard", { replace: true });
      },
      onError: (response) => {
        console.log(response);
      }
    }
  );

  const onFinish = (values) => {
    console.log(values);
    if (onLogin) {
      mutate(values);
    } else {
      fetch("http://localhost:4000/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        if (res.status === 400) {
          setError({
            there: true,
            message: "user already exists please login"
          });
        } else {
          setIsLoggedIn(true);
        }
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const loginTitle = (
    <div className="heading">
      <h2
        className={!onLogin ? null : "active"}
        onClick={() => {
          setOnLogin(true);
        }}
      >
        Log In
      </h2>
    </div>
  );
  const signUpTitle = (
    <div className="heading">
      <h2
        className={!onLogin ? "active" : null}
        onClick={() => {
          setOnLogin(false);
        }}
      >
        Sign Up
      </h2>
    </div>
  );

  return (
    <div className="wrapper">
      <div className="form">
        <div className="title">
          {signUpTitle}
          {loginTitle}
        </div>
        <br />
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {!onLogin && (
            <>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first Name!"
                  }
                ]}
              >
                <Input onChange={() => setError(false)} />
              </Form.Item>
              <br />
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: false
                  }
                ]}
              >
                <Input onChange={() => setError(false)} />
              </Form.Item>
              <br />
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!"
                  }
                ]}
              >
                <Input />
              </Form.Item>
              ;
              <br />
            </>
          )}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input onChange={() => setError(false)} />
          </Form.Item>
          <br />
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          {!onLogin && (
            <>
              <br />
              <Form.Item
                label="Verify Password"
                name="Verify password"
                rules={[
                  {
                    required: true,
                    message: "Please input your verify password!"
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>
            </>
          )}
          <br />
          {error.there && <p className="error"> {error.message}</p>}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit">
              {onLogin ? "Login" : "SignUp"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
