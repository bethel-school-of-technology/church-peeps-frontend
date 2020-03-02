import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import "../App"

export default class PrayerAdmin extends Component {
    constructor(props) {
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            date: new Date(),
            users: []
        }

       
    }
    componentDidMount() {
        axios.get('/prayer')
        .then(response => {
            this.state({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                description: response.data.description,
                date: new Date(response.date.date)  
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('/prayer')
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

    onChangefirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    onChangelastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangedescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangedate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const PrayerAdmin = {
            churchName: this.state.churchName
        }
        console.log(PrayerAdmin);

        axios.post('/prayer/admin/update', PrayerAdmin)
        .then(res => console.log(res.data));

        window.location = '/'
       
    }

    render() {
        return (
            <div>
            <h3>Edit prayer requests here.</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                    required
                    classname="form-control"
                    value={this.state.description}
                    onChange={this.onChangedescription}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit Request" className="btn btn-secondary" />
                </div>
            </form>
            </div>
        )
    }
}