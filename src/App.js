import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Layout/Header";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Hobby from "./components/Hobby";
import Behaviour from "./components/Behaviour";
import Final from "./components/Final";

import './styles.css';
import './components/global.css';

export class App extends Component {
  state = {
    person: {
      id: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      behaviour: [],
    }
  };

  myCallback = state => {
    this.setState({
      ...this.state,
      person: { ...this.state.person, ...state.person }
    });
  };

genderUpdate = (gender) =>{
  this.setState({
    ...this.state,
    person: { ...this.state.person, gender}
  });
}

hobbyUpdate = (hobbies) =>{
  this.setState({
    ...this.state,
    person: { ...this.state.person, hobbies}
  });
}
behaviourUpdate = (behaviour) =>{
  this.setState({
    ...this.state,
    person: { ...this.state.person, behaviour}
  });
}

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
        <React.Fragment>
          <div>
            <Header></Header>
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Login
                  callbackFromParent={this.myCallback}
                  person={this.state.person}
                  {...props} 
                />
              )}
            />
            <Route 
              path="/welcome"
              render={props => (
                <Welcome genderUpdate={this.genderUpdate} name={this.state.person.name} 
                {...props}
                />
              )}
            />
            <Route 
              path="/moreaboutyou"
              render={props => (
                <Hobby  hobbyUpdate={this.hobbyUpdate}
                {...props}
                />
              )}
            />
            <Route 
              path="/nature"
              render={props => (
                <Behaviour behaviourUpdate={this.behaviourUpdate}
                {...props}
                />
              )}
            />
            <Route 
              path="/final"
              render={props => (
                <Final gender={this.state.person.gender}
                 hobbies={this.state.person.hobbies} 
                 behaviour={this.state.person.behaviour} 
                {...props}
                />
              )}
            />
          </Switch>
          </React.Fragment>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
