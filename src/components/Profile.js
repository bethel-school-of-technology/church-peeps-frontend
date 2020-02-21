import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";



class Profile extends Component {
    constructor(props) {
        super(props);

        this.setState = {
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
        // this.fetchusers().then(response => {
        //     this.setState({
        //         users: response.users
        //     });
        // });
        // this.fetchusers();

        axios.get('/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState = {
                        users: response.data,
                    };
                }
            })
            .catch((error) => {
                console.log(error);
            })

        // axios.get('/profile')
        // .then(response => {
        //     if (response.data.length > 0) {
        //         this.setState({
        //             profile: response
        //         })
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
    render() {

        console.log(this.setState.users);
        if (this.setState.users.length === 0) {
            return <div><h2>Failed to fetch users</h2></div>;
        }
        
        const users = this.setState.users.map((user, index) => (

            <div key={index}>

                <div className="wrapper">


                    <li><h5>{user.firstName} {user.lastName}</h5></li>
                    {/* <em>{user.username}</em>: {user.firstName} {user.lastName} */}
                </div>
            </div>
        ));
        return <div>{users}</div>

    }
}
export default Profile;