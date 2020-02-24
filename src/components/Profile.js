import "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import Prayer from "./Prayer";
import { Link } from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.deletePrayer = this.deletePrayer.bind(this);
        this.state = {prayer: [] };
    }

    componentDidMount() {
        console.log(process.env);
        axios.get("/prayer/")
        .then(response => {
            this.setState({ prayer: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    deletePrayer(id) {
        axios.delete("/prayer/" + id).then(res => console.log(res.data));

        this.setState({
            prayer: this.state.prayer.filter(el => el._id !== id)
        });
    }

    prayerList() {
        return this.state.prayer.map(currentprayer => {
            return (
                <Prayer
                prayer={currentprayer}
                deletePrayer={this.deletePrayer}
                key={currentprayer._id}
                />
            );
        });
    }

    render () {
        return (
            <div>
                <h2>Welcome to your profile. </h2>
                    <h5>Here you can upload your image, edit or delete your contact information, and update or delete your prayer requests. </h5>
                <p>Prayer Requests | <Link to="/addprayer" >Create your prayer</Link> | <Link to="/editprayer">Edit your prayer</Link></p>
                {/* <p>{this.prayerList()}</p> */}
            </div>
        );
    }
}