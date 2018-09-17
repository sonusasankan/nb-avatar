import React, { Component } from "react";

import female from "../images/female.png";
import male from "../images/male.png";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { gender: "female" };
    this.checkedChanged = this.checkedChanged.bind(this);
  }
  checkedChanged(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.genderUpdate(this.state.gender);
    this.props.history.push("/moreaboutyou");
  };

  render() {
    return (
      <div className="app-avatar-wrapper">
        <h3>Hey {this.props.name}! you can set your avatar</h3>
        <form className="mt-5" onSubmit={this.onSubmit}>
          <div className="d-inline-flex">
            <div className={'form-check mr-5' + (this.state.gender === "female"?" checked":'')}>
              <input
                className='form-check-input'
                type="radio"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.checkedChanged}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                <img className="img-fluid" src={female} alt=""/>
              </label>
            </div>
            <div className={'form-check mr-5' + (this.state.gender === "male"?" checked":'')}>
              <input
                className='form-check-input'
                type="radio"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.checkedChanged}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                <img className="img-fluid" src={male} alt=""/>
              </label>
            </div>
          </div>
          <div>
            <button className="btn mt-5" type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Welcome;
