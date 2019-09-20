import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import {getJwt} from '../helpers/jwt'
import Axios from 'axios';

export default class StudentPage extends Component {
    state =  {
        users: undefined
    }

    componentDidMount(){
        const jwt = getJwt()
        if(!jwt){
            this.props.history.push('/studentlogin')
            localStorage.removeItem('cool-jwt')
        }

        Axios.post('http://localhost:5005/getstudent', {headers: { authorization: `Bearer ${jwt}`}})
        .then(res => {
            this.setState({ users: res.data})
        })

        
    }
    render() {
        if( this.state.users === undefined) {
            return(
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        )
    }
}
