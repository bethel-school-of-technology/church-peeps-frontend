import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateChurch from './CreateChurch';
import { Link } from "react-router-dom";
import "../App";

export default class Church extends Component {
    render() {
        return (
            <div>
                <h3 class="church">Churches</h3>
                <Route path="/church/admin/add" component={CreateChurch} />
                <nav>
                    <Link to="/church/admin/add">Add your church here please.</Link>
                </nav>
            </div>
        );
    }
}