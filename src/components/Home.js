import React from 'react';
import '../App';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  function Church(props) {
    return (
      <body>
        <div class="home-header">
          <h1>Welcome to Church Peeps. Please find your church in the list below before creating a profile. Enjoy your experience with our app.</h1>
        </div><br></br>


        <div className="church-list">

          <span>{props.title}</span>

        </div>
      </body>
    );
  }
  // Church.propTypes = {
  //   title: PropTypes.string.isRequired
  // };


export default Church;