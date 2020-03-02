import "../App";
import React, { Component } from "react";
import axios from 'axios';

class Prayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            prayer: []
        };
    }
    fetchusers = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    prayer: response.data
                };
            });
        });
    };

    componentDidMount() {

        axios.get('/prayer')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        prayer: response.data,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    render() {

        const users = this.state.prayer.map((prayer, index) => (
            <div key={index}>
                <div className="background">
                    <div className="transbox">
                        <div>{prayer.firstName} {prayer.lastName}'s prayer request:  {prayer.description}</div>
                    </div>

                </div>
            </div>
        ));
        return (
            <div>

                <header>
                    <h2 className="prayer">
                        <img src={require("./images/faviconicon.jpg")} alt="logo" width="50"></img>
                        Prayer Requests</h2>
                </header>
             
                <div className="prayers">{users}</div>
                <div className="footer">
                    <h6>We are praying for you.</h6>
                </div>
            </div>
        )
    }

}
export default Prayer;
