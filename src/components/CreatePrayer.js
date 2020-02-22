import React, { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../App"
import { Link } from 'react-router-dom';

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors are empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    //validate form was completed
    Object.values(rest).forEach(val => {
        val == null && (valid = false);
    });

    return valid;
};

class CreatePrayer extends Component {
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

    handleSubmit = e => {
        e.preventDefault();
        const prayer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description
        }
        let prayer1 = JSON.stringify(prayer);
        axios.post('/prayer/add', prayer1, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {

        });
        if (formValid(this.state.formErrors)) {
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state;

        // console.log("name: ", prayer);
        // console.log("value: ", value);

        switch (name) {
            case "firstName":
                formErrors.firstName = value.length < 0 && value.length > 0
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 0 && value.length > 0 && value.length > 0
                    break;
            case "description":
                formErrors.description = value.length < 0 && value.length > 0
                break;
            default:
                break;

        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state));
    };

    componentDidMount() {

        axios.get('/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data,

                    });
                }
            })
            axios.get('/prayer/add')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data,

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

        axios.post('/prayer/add', prayer)
            .then(res => console.log(res.data));


    }

    render() {
        return (
            <div>
                <h2>Create New Prayer Request</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label>First Name</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstName}>
                            {
                                this.state.users.map(function (user, index) {
                                    return (
                                        <option
                                            key={index}
                                            value={user.firstName}>{user.firstName}
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
                                this.state.users.map(function (user, index) {
                                    return (
                                        <option
                                            key={index}
                                            value={user.lastName}>{user.lastName}
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
                    <button type="submit">Share your prayer request</button>
                </form>

            </div>
        );
    }
}
export default CreatePrayer;