import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <button></button>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Dash Board
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/allstudents" className="nav-link">
                All Students
              </Link>
            </li>
            <li className="nav-item ml-5">
            <Link to="/addstudent" className="nav-link">
              Register Student
            </Link>
          </li>
          </ul>
          
        </nav>
      </div>
    );
  }
}
