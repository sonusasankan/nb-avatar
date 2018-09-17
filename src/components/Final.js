import React, { Component } from "react";

import female from "../images/female.png";
import male from "../images/male.png";
import gardening from "../images/gardening.png";
import camping from "../images/camping.png";
import movies from "../images/movies.png";
import foodie from "../images/foodie.png";
import party from "../images/party.png";

import './Final.css';

class Final extends Component {
  constructor(props){
      super(props);
     
      this.state = {

      } 
  }  

  render() {
     const hobby = this.props.hobbies; 
     const personType = this.props.behaviour; 
    return (
      <div className="center">
       <h4>All set! Here is your final avatar</h4>
        <div className="final-avatar">
         <div className="final-hobbies">
           <img className="img-fluid" src={hobby.includes('Gardening')? gardening: null} alt=""/>
           <img className="img-fluid" src={hobby.includes('Movies')? movies: null} alt=""/>
           <img className="img-fluid" src={hobby.includes('camping')? camping: null} alt=""/>
         </div>
          <div className="field-gender">
            <img src={this.props.gender === 'female' ? female : male} alt="" />
          </div>
          <div className="person-type">
           <img className="img-fluid" src={personType.includes('foodie')? foodie: null} alt=""/>
           <img className="img-fluid" src={personType.includes('partyAnimal')? party: null} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Final;
