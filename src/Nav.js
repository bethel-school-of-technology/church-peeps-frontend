import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "beige"
  };
  return (
    <nav>      
      <ul className="nav-links">
        <Link style={navStyle} to="/">
      <h3>Home</h3>
      </Link>
        <Link style={navStyle} to="/signup">
          <li>Signup</li>
        </Link>
      <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to="/prayer">
          <li>Prayer Requests</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
