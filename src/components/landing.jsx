import React, { Component } from 'react'
import Card from './card'


export default class landing extends Component {
    render() {
        return (
            <div className="theme-color">

            <div className="row center">
                <div className="col-sm-4">
                    <Card color="orange-gradient" link="/studentlogin" linkText="ENTER AS STUDENT" />
                </div>
                <div className="col-sm-4">
                    <Card  link="/admindashboard" linkText="ENTER AS ADMIN" />
                </div>
            </div>
        </div>
        )
    }
}
