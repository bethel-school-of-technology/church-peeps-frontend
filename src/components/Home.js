import React, { Component } from 'react';
import '../App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Church Peeps. Please go to Signup and Create a Profile if new or to login if you aleady have a Profile. Enjoy your experience with our app.</h2>
        {/* <img src="ChurchPeeps.jpg" alt="logo" height="42" width="42"></img> */}
       
          {/* <h2>Church:</h2>
        
        <ul className="church">
          <li className="church">This is a place holder for the list for your church that should reside here.</li>
          <li className="church">church one</li>
          <li className="church">church two</li>
        </ul>

        <Link to="/signup"><h6>Signup</h6></Link>
        <Link to="/profile/add"><h6>Create Profile</h6></Link>
        <Link to="/login"><h6>Login</h6></Link>
        */}
      </div>

    );
  }
}