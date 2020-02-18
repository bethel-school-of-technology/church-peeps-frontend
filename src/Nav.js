import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {

  render() {
    const navStyle = {
      color: "beige"      
    };
    return (
      <nav>
        <ul className="nav-links">
        <Link style={navStyle} to="/"><h4>Home</h4></Link>
  
            <li>
              <Link style={navStyle} to="/signup">Signup</Link>
            </li>
            <li>
              <Link style={navStyle} to="/login">Login</Link>
            </li>
            <li>
              <Link style={navStyle} to="/profile">Peeps</Link>
            </li>
            <li>
              <Link style={navStyle} to="/prayer">Prayer Requests</Link>
            </li>
          </ul>
        
      </nav>
    );
  }
}