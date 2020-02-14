// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import "../App"

class EditChurch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    };

    componentDidMount() {
        axios.put('http://localhost:5000/church')
        .then(response => {
            this.state({
               title: response.data.title
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('http://localhost:5000/users')
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
        
        const church = {
            title: this.state.title
        }
        console.log(church);

        axios.post('http://localhost:5000/church/admin/add', church)
        .then(res => console.log(res.data));

        window.location = '/Home'
       
    }

    render() {
        return (
            <div>
            <h3>Edit New Church</h3>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="title">
                    <label htmlFor="title">Church Name: </label>
                    <input type="text"
                    name="title" noValidate onChange={this.handleChange}
                    />
                </div>
                <div className="church">
                    <button type="submit"  className="btn btn-secondary">Edit Church</button>
                </div>
            </form>
            </div>
        );
    }
}

export default EditChurch;