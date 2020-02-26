import React, { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../App"


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
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            date: new Date(),
            users: [],
            formErrors: {
                firstName: '',
                lastName: ''
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const prayer = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description,
            date: this.state.date
        }
        // let prayer1 = JSON.stringify(prayer);
        // axios.post('/prayer/add', prayer1, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        axios.post('/prayer/add', prayer)
            .then(res => {
                if (res.status === 200) {
                    console.log("Prayer created!");
                    this.props.history.push('/prayer');
                }
            })
            .catch(err => {
                console.log(err);
                alert("Something is wrong.")
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
                formErrors.firstName = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            case "lastName":
                formErrors.lastName = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            default:
                break;

        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log());
    };

    componentDidMount() {

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
    onChangedescription(description) {
        this.setState({
            description: description
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
            prayer: this.state.prayer
        }

        console.log();

    }

    render() {
        var documentCookie = document.cookie;
        var token = documentCookie.split("Bearer ");
        console.log(token);
        if (token.length === 2) {

            const { formErrors } = this.state;
            return (
                <div className="wrapper">
                    <header>
                        <h2>Create New Prayer Request</h2>
                    </header>
                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name: </label>
                                <input className={formErrors.firstName.length > 0 ? "error" : null}
                                    type="text" name="firstName" noValidate
                                    onChange={this.handleChange} />
                                {formErrors.firstName.length > 0 && (
                                    <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name: </label>
                                <input className={formErrors.lastName.length > 0 ? "error" : null}
                                    type="text" name="lastName" noValidate onChange={this.onChange} />
                                {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description: </label>

                                <textarea
                                    className="form-control"
                                    rows="10" cols="100"
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
                </div>

            );
        } else {
            return (
                <div>
                    <h2>Please log in to create a prayer request.</h2>
                    <a href="/login">Login</a>
                </div>
            );
        }
    }
}
export default CreatePrayer;