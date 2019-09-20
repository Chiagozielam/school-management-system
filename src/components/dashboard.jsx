import React, { Component } from "react";
import Card from './card'
class Dashboard extends Component {

render() {

    return (
        <div className="theme-color">

            <div className="row dashboard-main">
                <div className="col-sm-4">
                    <Card color="orange-gradient" link="/addstudent" linkText="REGISTER A STUDENT" />
                    <Card color="white-bg" link="/allstudents" linkText="ALL STUDENTS" />
                </div>
                <div className="col-sm-4">
                    <Card  link="/profile" linkText="TIMETABLE" />
                    <Card color="orange-gradient" link="/addstudent" linkText="REGISTER A STUDENT" />
                </div>
                <div className="col-sm-4">
                    <Card color="orange-gradient" />
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
