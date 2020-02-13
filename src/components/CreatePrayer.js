import React, { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../App"

export default class CreatePrayer extends Component {
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
        };
    }

    componentDidMount() {
        // axios.get('http://localhost:5000/prayer')
        // .then(response => {
        //     this.state({
        //         firstName: response.data.firstName,
        //         lastName: response.data.lastName,
        //         description: response.data.description,
        //         date: new Date(response.date.date)                
        //     })
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })

        axios.get('http://localhost:5000/prayer')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.firstName),
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

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

        const prayer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description,
            date: this.state.date
        }

        console.log(prayer);

        axios.post('http://localhost:5000/prayer/add', prayer)
            .then(res => console.log(res.data));

        window.location = '/prayer';
    }

    render() {
        return (
            <div>
                <h3>Create New Prayer Request</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label>First Name</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstName}>
                            {
                                this.state.users.map(function (user) {
                                    return (
                                        <option
                                            key={user}
                                            value={user}>{user}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangelastName}>
                            {
                                this.state.users.map(function (user) {
                                    return (
                                        <option
                                            key={user}
                                            value={user}>{user}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description: </label>
                        <textarea 
                            className="form-control"
                            noValidate onChange={this.handleChange} ></textarea>

                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create New Prayer Request" className="btn btn-secondary" />
                    </div>
                </form>

            </div>
        );
    }
}