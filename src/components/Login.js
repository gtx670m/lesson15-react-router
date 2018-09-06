import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      loggedInUser: localStorage.getItem("user")
    };
  }
  onChange = e => {
    let { target } = e;
    let { name } = target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword
        })
      );
    }
    this.setState({
      loggedInUser: localStorage.getItem("user")
    });
  };

  render() {
    let { txtUsername, txtPassword, loggedInUser } = this.state;
    if (loggedInUser !== null) {
      return <Redirect to="/products" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUsername"
                  value={txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{" "}
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
