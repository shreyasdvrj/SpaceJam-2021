import React from "react";
import ReactDOM from "react-dom";
import { Button, version } from "antd";
import "antd/dist/antd.css";
import "./Login.css";
import logo from '../../img/logo.png';
import { Card, Input} from "antd";

const Login = () => (
    <div>
    <div className="Nav">
    <img className="Home_Logo" src={logo} alt="Logo" />
        <h2 className="Header">Pitch Perfect</h2>
    </div>
  <div className="LogIn">
    <Card
      title="LOGIN"
      style={{ width: 600, height: 350}}
      bordered={false}
      className="logInCard"
    >
      <Input placeholder="Username" data-lpignore="true" />
      <Input type="password" placeholder="Password" />
      <Button className='signup_button' type="primary" block>
        Sign Up
      </Button><br/>
      <a className='gologin' >Don't have an account?</a>
    </Card>
  </div>
  </div>
);

export default Login;