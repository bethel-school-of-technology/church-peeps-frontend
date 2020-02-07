import "../App";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
// import "./App.css";
export default class prayer extends Component {
    render() {
        return (
            <div>
            <h3 class="prayer">Prayer Requests</h3>
           <a href="./prayer/create">Prayer Request</a>
            </div>
        )
    }
}
