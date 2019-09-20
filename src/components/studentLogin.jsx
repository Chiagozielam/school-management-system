import React, { Component } from "react";
import Axios from 'axios'

export default class addStudent extends Component { 
  state= {
    email: '',
    password: '',
    loggedIn: false

  }

  formSubmit = e => {
    e.preventDefault();
    console.log("clicked!!");


    const stateItems = {
      email: this.state.email,
      password: this.state.password
    };

    const {history} = this.props

    // -------HERE WE POST THE DATA TO THE ROUTE FOR LOGIN----------
    Axios.post("http://localhost:5005/login", stateItems)
      .then(res => {
        console.log("successfully posted to api login endpoint");
        this.setState({ loggedIn: true})        
        console.log(this.state)
        history.push("/studentpage")
        localStorage.setItem('cool-jwt', res.data.token)
      })
      .catch(err => console.log(`the error is ${err}`));

  };

  

  render() {
    return (
      <div className="whole-form">
        <form onSubmit={this.formSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              id="email"
              placeholder="name@example.com"
              value= {this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value})
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              id="password"
              placeholder="*********************"
              value= {this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value})
              }}
            />
          </div>
          

          <button type="submit" class="btn btn-primary orange-gradient" style={{width: '100%', height: "100px", border: 'none'}}><h4>Login</h4></button>
        </form>
      </div>
    );
  }
}
