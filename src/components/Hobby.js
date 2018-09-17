import React, { Component } from "react";

import gardening from "../images/gardening.png";
import camping from "../images/camping.png";
import movies from "../images/movies.png";

class TellUs extends Component {
  state = {
    person: {
      hobbies: []
    }
  };
  checkedChanged = e => {
    switch (e.target.checked) {
      case true: {
        this.setState({
          ...this.state,
          person: {
            ...this.state.person,
            hobbies: [...this.state.person.hobbies, e.target.name]
          }
        });
        break;

      }

      case false:{
        this.setState({
          ...this.state,
          person: {
              ...this.state.person,
              hobbies: this.state.person.hobbies.filter(
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

  onSubmit = e => {
    e.preventDefault();
    this.props.hobbyUpdate(this.state.person.hobbies);
    this.props.history.push("/nature");

  }; 
  render() {
    return (
      <div className="v-center text-center">
       <h3 className="mb-4">Tell us your hobbies</h3>
        <div className="row">
          <form className="form-hobbies" onSubmit={this.onSubmit}>
           <div className="d-inline-flex">
            <div className={'form-check mr-5' + (this.state.person.hobbies.includes('Gardening') ? " checked":'')}>
              <input
                type="checkbox"
                name="Gardening"
                checked={
                  this.state.person.hobbies.find(
                    item => item === "Gardening"
                  ) !== undefined
                }
                onChange={this.checkedChanged}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                <img className="img-fluid" src={gardening} alt="" />
              </label>
            </div>
            <div className={'form-check mr-5' + (this.state.person.hobbies.includes('Movies') ? " checked":'')}>
              <input
                type="checkbox"
                name="Movies"
                checked={
                  this.state.person.hobbies.find(
                    item => item === "Movies"
                  ) !== undefined
                }
                onChange={this.checkedChanged}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                <img className="img-fluid" src={movies} alt="" />
              </label>
            </div>
            <div className={'form-check' + (this.state.person.hobbies.includes('camping') ? " checked":'')}>
              <input
                type="checkbox"
                name="camping"
                checked={
                  this.state.person.hobbies.find(
                    item => item === "camping"
                  ) !== undefined
                }
                onChange={this.checkedChanged}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                <img className="img-fluid" src={camping} alt="" />
              </label>
            </div>
            </div>
            <div>
            <button className="btn mt-5" type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TellUs;
