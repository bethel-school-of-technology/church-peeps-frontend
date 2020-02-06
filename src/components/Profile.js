import React from "react";
import "../App";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
import PropTypes from "prop-types";


function Profile() {
  return (
    <div className="profile">
      <h1>Profile for </h1>


      {/* <div className="user-list">
        <span>{props.users}</span>
      </div> */}
    </div>
  );
}
// Profile.propTypes = {
//   users: PropTypes.string.isRequired
// };

export default Profile;
