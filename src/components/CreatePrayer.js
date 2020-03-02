import React, { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../App"

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors are empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    //validate form was completed
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

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state;

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
            description: description.target.value
        })
    }
    onChangedate(date) {
        this.setState({
            date: date
        })
    }


    onSubmit(e) {
        e.preventDefault();
    }




    handleSubmit = e => {
        e.preventDefault();
        const prayer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description,
            date: this.state.date
        }
      
        axios.post('/prayer/add', prayer)
            .then(res => {
                if (res.status === 200) {
                    console.log("Prayer created!");
                    this.props.history.push('/prayer');
                }
            })
            .catch(err => {
                console.log(err);
                alert("Something is wrong.");
                if (formValid(this.state.formErrors)) {

                } else {
                    console.err("FORM INVALID - DISPLAY ERROR MESSAGE");
                }
            });
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
                        <h2>
                            <img src={require("./images/faviconicon.jpg")} alt="logo" width="50"></img>
                            Create New Prayer Request</h2>
                            <h6>This is the reason I urge you to boldly believe for whatever you ask for in prayer—believe that you have received it and it will be yours. 25 And whenever you stand praying,[a] if you find that you carry something in your heart against another person, release him and forgive him[b] so that your Father in heaven will also release you and forgive you of your faults. 26 But if you will not release forgiveness, don’t expect your Father in heaven to release you from your misdeeds.  Mark 11:24-26</h6>
                    </header>
                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name: </label><br></br>
                                <input className={formErrors.firstName.length > 0 ? "error" : null}
                                    type="text" name="firstName" noValidate
                                    onChange={this.handleChange} />
                                {formErrors.firstName.length > 0 && (
                                    <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name: </label><br></br>
                                <input className={formErrors.lastName.length > 0 ? "error" : null}
                                    type="text" name="lastName" noValidate
                                    onChange={this.handleChange} />
                                {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description: </label><br></br>
                                <textarea className="Description"
                                    type="text" name="description"
                                    rows="5" cols="50"
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