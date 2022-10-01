import React from "react";
import { NavLink } from "react-router-dom";
import './navbarstyles.css';



export default function Navbar(props) {
  var loggedIn = props.loggedIn;
  return (

    
  
    <div className="navBarDiv">
      <nav className="navBar">
        <ul>
          <li><NavLink to="/login" >{loggedIn}</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </nav>
    </div>
  );

  Navbar.defaultProps = {
    loggedIn: "Login"
  }
  
}