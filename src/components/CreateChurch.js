// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import "../App"

export default class CreateChurch extends Component {
    constructor(props) {
        super(props);

        this.onChangechurchName = this.onChangechurchName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            churchName: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/church'+this.props.match.params.id)
        .then(response => {
            this.state({
               churchName: response.data.churchName
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('http://localhost:5000/church')
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

    onChangechurchName(e) {
        this.setState({
            churchName: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const church = {
            churchName: this.state.churchName
        }
        console.log(church);

        axios.post('http://localhost:5000/church/admin/add' + this.props.match.params.id, church)
        .then(res => console.log(res.data));

        window.location = '/'
       
    }

    render() {
        return (
            <div>
            <h3>Create New Church</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Church Name: </label>
                    <input type="text"
                    required
                    classname="form-control"
                    value={this.state.churchName}
                    onChange={this.onChangeChurchName}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Church" className="btn btn-secondary" />
                </div>
            </form>
            </div>
        )
    }
}