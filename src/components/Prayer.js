import "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import CreatePrayer from './CreatePrayer';
import { Link } from "react-router-dom";
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

        console.log(this.setState.prayer);
        if (this.state.prayer.length === 0) {
            return <div><h2>Failed to fetch prayer requests</h2></div>;
        }
        const users = this.state.prayer.map((prayer, index) => (
            <div key={index}>
                <div className="wrapper">
                    <div>
                        <li>{prayer.firstName} {prayer.lastName}'s prayer request is:  {prayer.description}</li>
                    </div>
                    
                </div>
            </div>
        ));
        return ( 
        <div>
            <header>
            <h1>Your Church Peeps are here for you, please let us know how we can pray for you.</h1>                
            <h2 className="prayer">Prayer Requests</h2>
            </header>
            <div className="footer"> 
            
                <Link to="/addprayer"><p>Add Prayer Request</p></Link>
         
            <Route path="/addprayer" component={CreatePrayer} />
            </div>
             <div>{users}</div>
        </div>
        )
    }

}
export default Prayer;
