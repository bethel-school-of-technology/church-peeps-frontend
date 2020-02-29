import "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import CreatePrayer from './CreatePrayer';
import { Link } from "react-router-dom";
import axios from 'axios';
import ChurchPeeps from './images/ChurchPeeps.jpg';

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

        // console.log(this.setState.prayer);
        // if (this.state.prayer.length === 0) {
        //     return <div><h2>Failed to fetch prayer requests</h2></div>;
        // }
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

                {/* <h1>Your Church Peeps are here for you, please let us know how we can pray for you.</h1>   
              */}
                <header>
                    <h2 className="prayer">
                        <img src={require("./images/faviconicon.jpg")} width="50"></img>
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
