import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios'

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    };

    componentDidMount() {
        axios.put('/profile')
        .then(response => {
            this.state({
               title: response.data.title
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.put('/users')
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

    onChangetitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const profile = {
            title: this.state.title
        }
        console.log(profile);

        axios.put('/profile/admin/add', profile)
        .then(res => console.log(res.data));       
    }

    render() {
        return (
            <div>
            <h3>Edit Profile</h3>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="title">
                    <label htmlFor="title">Profile: </label>
                    <input type="text"
                    name="title" noValidate onChange={this.handleChange}
                    />
                </div>
                <div className="profile">
                    <button type="submit" className="btn btn-secondary">Edit Profile</button>
                </div>
            </form>
            </div>
        );
    }
}

export default EditProfile;