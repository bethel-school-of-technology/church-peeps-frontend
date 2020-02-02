import React from "react";
import "../App";

function Prayer () {  
  return (
      <div>
        <h1>Prayer Request</h1>
        <form>
          <p><input type="text" placeholder="Enter Your Full Name" name="fullName" /></p>
          <br></br>
          <p><input type="text" placeholder="Enter Prayer Request" name="prayer" /></p>
          <p><button>Submit</button></p>
        </form>
      </div>
    )
}

export default Prayer;