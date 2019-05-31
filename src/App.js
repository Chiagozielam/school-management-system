import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Profile from './components/profile'

function App() {
  return (
    <div className="App">

    <Switch>

      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/profile' component={Profile} />

    </Switch>

    </div>
  );
}

export default App;
