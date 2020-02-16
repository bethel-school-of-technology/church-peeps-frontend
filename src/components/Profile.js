import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";



class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = { users: [] };
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
        // this.fetchusers();
        axios.get('/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })


    }
    render() {
        console.log(this.state.users);
        if (this.state.users.length === 0) {
            return <div>Failed to fetch users</div>;
        }
        const users = this.state.users.map(user => (
            <div key={user.UserId}>
                <h2>Your Church Peeps</h2>
                <div>
                    <div>{this.state.users.firstName}</div>
                    <div> {this.state.users.lastName} </div>
                    </div>
                <input type="file" accept="image/*;capture=camera"></input>
                <img src=""></img>
                
                <em>{user.firstName} {user.lastName}</em>: {user.firstName} {user.lastName}
            </div>
        ));
        return <div>{users}</div>
    }
}
export default Profile;