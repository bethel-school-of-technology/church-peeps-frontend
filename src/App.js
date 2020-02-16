import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App';
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from './Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import Prayer from './components/Prayer';
import Login from './components/login';
import Signup from './components/Signup';
// import Church from './components/Church';
import CreateChurch from './components/CreateChurch';
import CreatePrayer from './components/CreatePrayer';
import EditChurch from './components/EditChurch';
import EditPrayer from './components/EditPrayer';
import EditProfile from './components/EditProfile';
// import UserAdmin from './components/UserAdmin';
import PrayerAdmin from './components/PrayerAdmin';
import Logout from './components/logout';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
    
          <Route path="/signup" component={Signup} />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/update/:id" component={EditProfile} />
          
          {/* <Route path="/users/admin/update/:id" component={UserAdmin} /> */}

          <Route path="/prayer" component={Prayer} />
          <Route path="/prayer/update/:id" component={EditPrayer} />
          <Route path="/addprayer" component={CreatePrayer} />
          
          <Route path="/prayer/admin/update/:id" component={PrayerAdmin} />


          {/* <Route path="/church" component={Church} /> */}
          <Route path="/church/update" component={EditChurch} />
          <Route path="/church/add" component={CreateChurch} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;