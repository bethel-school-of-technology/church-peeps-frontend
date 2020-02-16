import React, { Component } from 'react';
import '../App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Church Peeps. Please find your church in the list below before creating a profile. Enjoy your experience with our app.</h1>
       
          <h2>Churches:</h2>
        
        <ul className="churches">
          <li className="church">This is a place holder for the list of churches that should reside here.</li>
          <li className="church">church one</li>
          <li className="church">church two</li>
        </ul>
    
        <Link to="/church/add"><h6>Add a new church here</h6></Link>
       
      </div>

    );
  }
}