import React from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Sidenav from "./components/sidenav"
import LandingPage from "./components/landing"
import StudentLogin from "./components/studentLogin"
import Dashboard from "./components/dashboard"
import AddStudent from './components/addStudent'
import AllStudents from "./components/allStudents"
import StudentPage from "./components/studentPage"
import "bootstrap/dist/css/bootstrap.min.css"

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-sm-2" style={{}}>
          <Sidenav />
        </div>
        <div className="col-sm-10">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/studentlogin" component={StudentLogin} />
            <Route path="/admindashboard" component={Dashboard} />
            <Route path="/allstudents" component={AllStudents} />
            <Route path="/addstudent" component={AddStudent} />
            <Route path="/studentpage" component={StudentPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
