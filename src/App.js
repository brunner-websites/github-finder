import React from 'react';
import Navbar from './components/layout/Navbar';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import NotFound from './components/pages/NotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon="fab fa-github" title="Github-Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
                )} />
            </Switch>
            </div>
          </div >
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;
