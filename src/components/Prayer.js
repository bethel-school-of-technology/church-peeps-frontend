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
                        <h6>Don’t be pulled in different directions or worried about a thing. Be saturated in prayer throughout each day, offering your faith-filled requests before God with overflowing gratitude. Tell him every detail of your life, 7 then God’s wonderful peace that transcends human understanding, will make the answers known to you through Jesus Christ.[a] 8 So keep your thoughts continually fixed on all that is authentic and real, honorable and admirable, beautiful and respectful, pure and holy, merciful and kind. And fasten your thoughts on every glorious work of God,[b] praising him always. Philippians 4:6-8</h6>
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
