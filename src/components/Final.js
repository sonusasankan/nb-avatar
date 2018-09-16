import React, { Component } from "react";

import female from "../images/female.png";
import male from "../images/male.png";
import gardening from "../images/gardening.png";
import camping from "../images/camping.png";
import movies from "../images/movies.png";

import './Final.css';

class Final extends Component {
  constructor(props){
      super(props);
     
      this.state = {

      }
  }  

  render() {
     const array = this.props.hobbies; 
    return (
      <div className="center">
       <h4>All set! Here is your final avatar</h4>
        <div className="final-avatar">
         <div className="final-hobbies">
           <img className="img-fluid" src={array.includes('Gardening')? gardening: movies} alt=""/>
         </div>
          <div className="field-gender">
            <img src={this.props.gender === 'female' ? female : male} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Final;
