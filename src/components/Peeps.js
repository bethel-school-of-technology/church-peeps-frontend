import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";



class Peeps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            profile: []
        };
    }
    fetchusers = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    users: response.data
                };
            });
        });
    };

    componentDidMount() {

        axios.get('/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        // console.log(this.setState.users);
        if (this.state.users.length === 0) {
            return <div><h2>Failed to fetch users</h2></div>;
        }

        const users = this.state.users.map((user, index) => (

            <div key={index}>

                <div className="wrapper" rows="4" cols="500">
                    <div className="ChurchPeeps">
                        <li>{user.firstName} {user.lastName}</li>

                    </div>
                </div>
            </div>
        ));
        return (
            <div>
                <header>
                    <h2>
                        <img src={require("./images/faviconicon.jpg")} width="50"></img>
                        Your Church Peeps</h2>
                </header>
                <div className="footer">
                    <p>We love our ChurchPeeps</p>
                </div>
                <div className="peeps">{users}</div>
            </div>
        )

    }
}
export default Peeps;