import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App";
export default class Logout extends Component {

    onSubmit(e) {
        e.preventDefault();
        axios.post("/users/logout")
            .then(res => console.log(res));
    }

    render() {
        return (
            <div className="logout">
                <h2>
                    <img src={require("./images/faviconicon.jpg")} alt="logo" width="50"></img>
                    You are now logged out.</h2>

                <Link to="/login"><h6>Log back in?</h6></Link>
            </div>
        );
    }
}