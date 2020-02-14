import React, { Component } from "react";
import "../App";
import axios from 'axios';

const emailRegex = RegExp(
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
);

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

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Username: ${this.state.username}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state;

    console.log("Name: ", name);
    console.log("value: ", value);

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "username":
        formErrors.username =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;


      case "password":
        formErrors.password =
          value.length < 8 && value.length > 0
            ? "minimum 8 characters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  componentDidMount() {
    // axios.get('http://localhost:5000/users')
    // .then(response => {
    //     this.state({
    //         firstName: response.data.firstName,
    //         lastName: response.data.lastName,
    //         email: response.data.email,
    //         username: response.data.username,
    //         password: response.data.password,
    //         date: new Date(response.date.date)  
    //     })
    // })
    // .catch(function(error) {
    //     console.log(error);
    // })

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
onChangeemail(e) {
    this.setState({
        email: e.target.value
    })
}
onChangeusername(e) {
  this.setState({
    username: e.target.value
  })
}
onChangepassword(e) {
  this.setState({
    password: e.target.value
  })
}
onChangedate(date) {
    this.setState({
        date: date
    })
}

onSubmit(e) {
    e.preventDefault();
    
    const Signup = {
        Signup: this.state.Signup
    }
    console.log();

    axios.post('/users/add', Signup)
    .then(res => console.log(res.data));

    window.location = '/profile'
   
}


  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Personal Info</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>


            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="username">
              <label htmlFor="username">Username </label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit">Sign Up</button>
              <br></br>
              <small>Already Have an <a href="./login">Account?</a></small>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;