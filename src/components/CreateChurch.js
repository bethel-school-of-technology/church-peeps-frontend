// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import "../App"

class CreateChurch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            city: "",
            state: "" 
        }
    };

    componentDidMount() {
        axios.get('/church')
        .then(response => {
            this.state({
               title: response.data.title
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('/users')
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
    onChangecity(e) {
        this.setState({
            city: e.target.value
        })
    }
    onChangestate(e) {
        this.setState({
            state: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const church = {
            title: this.state.title
        }
        console.log(church);

        axios.post('/church/admin/add', church)
        .then(res => console.log(res.data));

        window.location = '/Home'
       
    }

    render() {
        return (
            <div>
                <h3>Create New Church</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="title">Church: </label>
                        <input type="text"
                            name="title" noValidate onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" noValidate onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" noValidate onChange={this.handleChange} />
                    </div>
                    <div className="church">
                        <button type="submit" className="btn btn-secondary">Create Church</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateChurch;