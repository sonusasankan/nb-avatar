import React, { Component } from "react";

import foodie from "../images/foodie.png";
import party from "../images/party.png";

class Behaviour extends Component {
  state = {
    person: {
      behaviour: []
    }
  };

  checkedChanged = e => {
    switch (e.target.checked) {
      case true: {
        this.setState({
          ...this.state,
          person: {
            ...this.state.person,
            behaviour: [...this.state.person.behaviour, e.target.name]
          }
        });
        break;
      }

      case false: {
        this.setState({
          ...this.state,
          person: {
            ...this.state.person,
            behaviour: this.state.person.behaviour.filter(
              item => item !== e.target.name
            )
          }
        });
        break;
      }
      default:
        return this.state;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.behaviourUpdate(this.state.person.behaviour);
    this.props.history.push("/final");
  };

  render() {
    return (
      <div className="v-center text-center">
        <h3 className="mb-4">Tell us your hobbies</h3>
        <div className="row">
          <form className="form-hobbies" onSubmit={this.onSubmit}>
            <div className="d-inline-flex">
              <div
                className={
                  "form-check mr-5" +
                  (this.state.person.behaviour.includes("foodie")
                    ? " checked"
                    : "")
                }
              >
                <input
                  type="checkbox"
                  name="foodie"
                  checked={
                    this.state.person.behaviour.find(
                      item => item === "foodie"
                    ) !== undefined
                  }
                  onChange={this.checkedChanged}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  <img className="img-fluid" src={foodie} alt="" />
                </label>
              </div>
              <div
                className={
                  "form-check mr-5" +
                  (this.state.person.behaviour.includes("partyAnimal")
                    ? " checked"
                    : "")
                }
              >
                <input
                  type="checkbox"
                  name="partyAnimal"
                  checked={
                    this.state.person.behaviour.find(
                      item => item === "partyAnimal"
                    ) !== undefined
                  }
                  onChange={this.checkedChanged}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  <img className="img-fluid" src={party} alt="" />
                </label>
              </div>
            </div>
            <div>
              <button className="btn mt-5" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Behaviour;
