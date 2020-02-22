import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import { Link } from "react-router-dom";
// import "../App";
// import CreateChurch from './CreateChurch';
// import axios from "axios";

// class Church extends Component {
//     constructor(props) {
//       super(props);
  
//       this.setState = {
//           church: []        
//       };
//   }
//   fetchusers = () => {
//       var encodedURI = window.encodeURI(this.props.uri);
//       return axios.get(encodedURI).then(response => {
//           this.setState(() => {
//               return {
//                   church: response.data
//               };
//           });
//       });
//   };
  
//   componentDidMount() {
  
//       axios.get('/church')
//           .then(response => {
//               if (response.data.length > 0) {
//                   this.setState = {
//                       church: response.data,
//                   };
//               }
//           })
//           .catch((error) => {
//               console.log(error);
//           })
  
//   }
//   render() {
  
//       console.log(this.setState.church);
//       if (this.setState.church.length === 0) {
//           return <div><h2>Failed to fetch churches</h2></div>;
//       }
//       const church = this.setState.church.map((church, index) => (
//           <div key={index}>
//               <div className="wrapper">
//                   <div>
//                       <h1>Your Church Peeps</h1>
//       <li>{church.title} {church.city} {church.state}</li>
//                   </div>
  
//               </div>
//           </div>
//       ));
//       return <div>{church}</div>
  
//   }
//   }
  
//   export default Church;




// export default class Church extends Component {
//     render() {
//         return (
//             <div>
//                 <h5 className="church">Churches</h5>
//                 <Route path="/church/add" component={CreateChurch} />
//                 <nav>
//                     <Link to="/church/add"><h6>Add your church here please.</h6></Link>
//                 </nav>
//             </div>
//         );
//     }
// }