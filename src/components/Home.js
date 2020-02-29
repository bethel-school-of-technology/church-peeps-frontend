import React, { Component } from 'react';
import '../App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
// import images from "./images";

export default class Home extends Component {
  render() {
    return (
      <div>


        <h2>
          <img src={require("./images/ChurchPeeps.jpg")} className="cp" height="100"></img>
          Welcome to Church Peeps. Please go to Signup and Create a Profile if new or to login if you aleady have a Profile. Enjoy your experience with our app.</h2>

        <Link to="/signup"><h4>Signup</h4></Link>
        <Link to="/profile/add"><h4>Create Profile</h4></Link>
        <Link to="/login"><h4>Login</h4></Link>

      </div>

    );
  }
}