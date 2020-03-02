import React, { Component } from 'react';
import '../App';

export default class Home extends Component {
  render() {
    return (
      <div>


        <h2>
          <img src={require("./images/ChurchPeeps.jpg")} alt="logo" className="cp" height="100"></img>
          Welcome to Church Peeps. Please go to Signup and Create a Profile if new or to login if you aleady have a Profile. Enjoy your experience with our app.</h2>
          <h6>Our reconciling “Peace” is Jesus! He has made Jew and non-Jew one in Christ. By dying as our sacrifice, he has broken down every wall of prejudice that separated us and has now made us equal through our union with Christ. 15 Ethnic hatred has been dissolved by the crucifixion of his precious body on the cross. The legal code that stood condemning every one of us has now been repealed by his command. His triune essence has made peace between us by starting over—forming[a] one new race of humanity,[b] Jews and non-Jews fused together! Two have now become one, and we live restored to God and reconciled in the body of Christ. Through his crucifixion, hatred died. Ephesians 2:14-16</h6>

      </div>

    );
  }
}