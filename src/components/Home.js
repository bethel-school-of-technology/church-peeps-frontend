import React from 'react';
import '../App';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Home() {
  // let match = useRouteMatch();
  return (
    <body>
      <div class="home-header">
        <h1>Welcome to Church Peeps. Please find your church in the list below before creating a profile. Enjoy your experience with our app.</h1>
      </div><br></br>

      {/* <div>
        <ul>
          <li>
            <Link to={`${match.url}/titles`}>Churhes</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:titleId`}>
            <Title />
          </Route>
          <Route path={match.path}>
            <h3>Please select your home church.</h3>
          </Route>
        </Switch>
      </div> */}
    </body>
  );
}



export default Home;