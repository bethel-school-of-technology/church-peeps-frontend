import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class Profile extends Component {
    state = {
        users: []
    };

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
        this.fetchusers();
    }
    render() {
        console.log(this.state.users);
        if (this.state.users.length ===0) {
            return <div>Faile to fetch users</div>;
        }
        const users = this.state.users.map(user => (
            <div key={user.UserId}>
                <em>{user.firstName} {user.lastName}</em>: {user.firstName} {user.lastName}
            </div>
        ));
        return <div>{users}</div>
    }
}
export default Profile;