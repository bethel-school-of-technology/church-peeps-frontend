import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Profile extends Component {

    render() {
        return <div>
            <h2>Profile for </h2>
            <input type="file" accept="image/*;capture=camera"></input>
            <img src=""></img>


            <Link to="/logout"><h5>Logout</h5></Link>


        </div>
    }
}
export default Profile;