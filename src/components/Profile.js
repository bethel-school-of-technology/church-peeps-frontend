import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";



class Profile extends Component {
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

        console.log(this.setState.users);
        if (this.state.users.length === 0) {
            return <div><h2>Failed to fetch users</h2></div>;
        }

        const users = this.state.users.map((user, index) => (

            <div key={index}>

                <div className="wrapper">


                    <li><h5>{user.firstName} {user.lastName}</h5></li>

                </div>
            </div>
        ));
        return (
            <div>
            <h1>Your Church Peeps</h1>
       
        <div>{users}</div>
        </div>
        )

    }
}
export default Profile;