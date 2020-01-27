import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Prayer from './Prayer';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/profile" component={Profile} />
     <Route path="/prayer" component={Prayer} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
