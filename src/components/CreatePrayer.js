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
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastname: '',
            description: '',
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }


    onChangefirstname(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    onChangelastname(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDate(date) {
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

        console.log(prayer)

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Create New Prayer Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstName}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
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
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>New Prayer Request</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} />

                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Create New Prayer Request" className="btn btn-primary" />
                        </div>
            </form>
                    
                    </div>
                )
            }
}