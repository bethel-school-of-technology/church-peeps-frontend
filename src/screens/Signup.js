import React from "react";

import "../App";



function Signup() {
    return (
        <div>
            <form>
                <h1 class="signup">Signup</h1>
                <div class="container">
                    <div class="first">
                        <label>
                            First Name:
                            </label>
                        <br></br>
                        <input class="firstName" type="text" />
                    </div>

                    <div class="last">
                        <label>
                            Last Name:
                            </label>
                        <br></br>
                        <input class="lastName" type="text" />

                    </div>
                    <div class="em">
                        <label>
                            Email:
                            </label>
                        <br></br>
                        <input class="email" type="email" />

                    </div>
                    <div class="user">
                        <label>
                            Username:
                            </label>
                        <br></br>
                        <input class="username" type="text" />

                    </div>
                    <div class="pass">
                        <label>
                            Password:
                            </label>
                        <br></br>
                        <input class="password" type="text" />

                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Signup;