import "../App";
import axios from "axios";
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
                        <img src={require("./images/faviconicon.jpg")} alt="logo" width="50"></img>
                        Your Church Peeps</h2>
                        <h6>This is not the time to pull away and neglect[a] meeting together, as some have formed the habit of doing, because we need each other! In fact, we should come together even more frequently, eager to encourage and urge each other onward as we anticipate that day dawning. Hebrews 10:25</h6>
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