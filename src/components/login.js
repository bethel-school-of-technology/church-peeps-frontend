import "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formErrors: {
        username: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }
    let user1=JSON.stringify(user);
    axios.post('/users/login', user1, {headers: {
      "Content-Type": "application/json"
    }});

    

    if (formValid(this.state.formErrors)) {
      // console.log(`
      //    --SUBMITTING--
      //     Username: ${this.state.username}
      //     Password: ${this.state.password}
      //   `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state;

    console.log("Name: ", name);
    console.log("value: ", value);

    switch (name) {
      case "username":
        formErrors.username = value.length < 3 && value.length > 0
          ? "minimum 3 characters required"
          : "";
        break;
      case "password":
        formErrors.password =
          value.length < 8 && value.length > 0
            ? "minimum 8 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () =>
      console.log(this.state));
  };
  componentDidMount() {
    // axios.get('http://localhost:5000/users')
    //   .then(response => {
    //     this.state({
    //       firstName: response.data.firstName,
    //       lastName: response.data.lastName,
    //       email: response.data.email,
    //       username: response.data.username,
    //       password: response.data.password,
    //       date: new Date(response.date.date)
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

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
  onSubmit(e) {
    e.preventDefault();

    const Login = {
      Login: this.state.Login
    }
    console.log(Login);

    axios.post('/users/login', Login)
    .then(res => console.res.data);

  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Profile for</h1>
          <form onSubmit={this.handleSubmit}
            noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username" type="text" name="username"
                noValidate onChange={this.handleChange} />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate onChange={this.handleChange} />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <Link to="/profile"><h5>Login</h5></Link>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;