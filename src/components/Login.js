import React, { Component } from "react";

import "./Login.css";

import loginImage from "../images/login-screen.png";

class Login extends Component {
  state = {
    person: { name: "", email: "", password: "" },
    fields: {},
    errors: {}
  };

  onChange = (e) => {
    this.setState({
      person: { ...this.state.person, [e.target.name]: e.target.value },
    });
  };
  
  componentDidUpdate() {
    this.state.fields = this.state.person
  }
  

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.callbackFromParent(this.state);
    if (this.handleValidation()) {
      this.props.history.push("/welcome");
    } else {
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="v-center">
          <div className="row">
            <div className="col-md-6">
              <h1>Hey!<br/> Welcome</h1>
              <div className="app-login-form">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter name.."
                      type="text"
                      name="name"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                    <span className="error">{this.state.errors["name"]}</span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter email.."
                      type="email"
                      name="email"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                    <span className="error">{this.state.errors["email"]}</span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Set password.."
                      type="password"
                      name="password"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                    <span className="error">
                      {this.state.errors["password"]}
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={loginImage} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
