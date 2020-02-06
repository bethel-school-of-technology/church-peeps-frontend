import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import Prayer from './components/Prayer';
import Login from './components/login';
import Signup from './components/Signup';
import Church from './components/Church';
import CreateChurch from './components/CreateChurch';
import CreatePrayer from './components/CreatePrayer';
import EditChurch from './components/EditChurch';
import EditPrayer from './components/EditPrayer';
import EditProfile from './components/EditProfile';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/edit/:id" component={EditProfile} />

          <Route path="/prayer" component={Prayer} />
          <Route path="/prayer/edit/:id" component={EditPrayer} />
          <Route path="/prayer/create" component={CreatePrayer} />

          <Route path="/login" component={Login} />
          
          <Route path="/Church" component={Church} />
          <Route path="/Church/edit" component={EditChurch} />
          <Route path="/Church/create" component={CreateChurch} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;