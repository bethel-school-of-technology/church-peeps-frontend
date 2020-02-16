import "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import CreatePrayer from './CreatePrayer';
import { Link } from "react-router-dom";


export default class Prayer extends Component {
    render() {
        return (
            <div>
                <h2 className="prayer">Prayer Requests</h2>
                <Route path="/addprayer" component={CreatePrayer} />
                <nav>
                    <Link to="/addprayer"><h6>Add Prayer Request</h6></Link>
                </nav>
            </div>
        );
    }
}
