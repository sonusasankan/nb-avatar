import React, { Component } from 'react'

import logo from '../images/logo.svg'
 class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
          Netbramha 
        </a>
      </nav>
    )
  }
}

export default Header;