import "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import Prayer from "./Prayer";
import { Link } from "react-router-dom";
import { BrowserRouter as Route } from 'react-router-dom';
import Logout from "./logout";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.deletePrayer = this.deletePrayer.bind(this);
        this.state = { prayer: [] };
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

    render() {
        return (
            <div>
                <h2>        
                    <img src={require("./images/faviconicon.jpg")} alt="logo" height="50"></img>
                    Welcome to your profile.  Here you can upload your image, edit or delete your contact information, and update or delete your prayer requests. </h2>

                    <h6>You formed my innermost being, shaping my delicate inside and my intricate outside, and wove them all together in my mother’s womb.[a]
                    I thank you, God, for making me so mysteriously complex!  Everything you do is marvelously breathtaking.  It simply amazes me to think about it! How thoroughly you know me, Lord!  You even formed every bone in my body when you created me in the secret place,[b] carefully, skillfully shaping me[c] from nothing to something.  Psalms 139:13-15</h6>
                <div className="footer">
                    <p> <Link to="/addprayer" >Create your prayer</Link> | <Link to="/editprayer">Edit your prayer</Link> | <Link to="/logout">Logout</Link></p>
                </div>
                <Route path="/logout" component={Logout} />
            </div>

        );
    }
}