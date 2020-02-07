import "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
// import "./App.css";
export default class Login extends Component {
    render() {
        return (
          <div>
          <form>
            <h1 class="login">Login</h1>
            <div class="user">
              <label>
                Username:
          </label>
              <br></br>
              <input class="username" type="text" /></div> <br></br>
            
            <div class="pass">
              <label>
                Password:
          </label>
              <br></br>
              <input class="password" type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        )
    }
}
