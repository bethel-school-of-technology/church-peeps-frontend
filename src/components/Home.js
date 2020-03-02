import React, { Component } from 'react';
import '../App';

export default class Home extends Component {
  render() {
    return (
      <div>


        <h2>
          <img src={require("./images/ChurchPeeps.jpg")} alt="logo" className="cp" height="100"></img>
          Welcome to Church Peeps. Please go to Signup and Create a Profile if new or to login if you aleady have a Profile. Enjoy your experience with our app.</h2>

      </div>

    );
  }
}