import "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';

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
  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const login = {
      username: this.state.username,
      password: this.state.password
    }
    // let login1=JSON.stringify(login);
    // axios.post('/users/login', login1, {headers: {
    //   "Content-Type": "application/json"
    // }}).then(() => {

    // });

    axios.post("/users/login", login)
      .then(response => {
        if (response.data === "Wrong password") {
          console.log(response);
          alert("Invalid password! Please try again.");
        }
        if (formValid(this.state.formErrors)) {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        } else if (response.data !== "Wrong password" && response.status === 200) {
          console.log(response);
          console.log(response.headers.authorization);
          const authCookie = "auth=" + response.headers.authorization;
          document.cookie = authCookie;
          alert("You are logged in!");
          this.props.history.push("/profile");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
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
    //   if (this.setState.users.length === 0) {
    //     return <Redirect to="/profile" />
    // }
    return (
      <div className="wrapper">
        {/* <Redirect to="/profile" /> */}
        <header>
          <h2>
            <img src={require("./images/faviconicon.jpg")} width="50"></img>
            ChurchPeeps Login</h2>
        </header>
        <div className="form-wrapper">
          {/* <h1>Profile for</h1> */}
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
            <div className="login">
              <button type="submit" className="btn btn-secondary center">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;