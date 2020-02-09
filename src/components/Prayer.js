import "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import CreatePrayer from './CreatePrayer';
import { Link } from "react-router-dom";


export default class Prayer extends Component {
    render() {
        return (
            <div>
                <h3 class="prayer">Prayer Requests</h3>
                <Route path="/prayer/add" component={CreatePrayer} />
                <nav>
                    <Link to="/prayer/add">Add Prayer Request</Link>
                </nav>
            </div>
        );
    }
}
