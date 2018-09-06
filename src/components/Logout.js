import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  render() {
    localStorage.removeItem("user");
    alert("Đã đăng xuất!");
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
}

export default Login;
