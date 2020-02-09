import React, { Component } from 'react';
import '../App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Church from './Church';
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Church Peeps. Please find your church in the list below before creating a profile. Enjoy your experience with our app.</h1>
        <Route path="/church" component={Church} />
        <nav>
          <Link to="/church"><h3>Churches:</h3> </Link>
        </nav>
      </div>

    );
  }
}