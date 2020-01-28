import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
      <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile Account</li>
        </Link>
        <Link style={navStyle} to="/prayer">
          <li>Prayer Request</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
