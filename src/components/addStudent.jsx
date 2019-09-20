import React, { Component } from "react";
import Axios from 'axios'

export default class addStudent extends Component { 
  state= {
    studentName: '',
    studentEmail: '',
    studentClass: '',
    studentGender: '',
    studentImg: '',
    studentPassword: '',
    studentDescription: ''

  }

  formSubmit = e => {
    e.preventDefault();
    console.log("clicked!!");

    const stateItems = {
      studentName: this.state.studentName,
      studentEmail: this.state.studentEmail,
      studentClass: this.state.studentClass,
      studentGender: this.state.studentGender,
      studentImg: this.state.studentImg,
      studentPassword: this.state.studentPassword,
      studentDescription: this.state.studentDescription
    };

    // -------HERE WE POST THE DATA TO THE ROUTE FOR ADDING STUDENTS----------
    Axios.post("http://localhost:5005/addstudents", stateItems)
      .then(res => {
        console.log("successfully posted to api products endpoint");
      })
      .catch(err => console.log(`the error is ${err}`));

    // -------HERE WE SET THE ORIGINAL STATE OF EACH STATE ITEM TO EMPTY, THIS WOULD MAKE ALL FORM
    //BOXES TO BE EMPTY AGAIN----------
    this.setState({
      studentName: '',
      studentEmail: '',
      studentClass: '',
      studentGender: '',
      studentImg: '',
      studentPassword: '',
      studentDescription: ''
    });

    // function
  };

  imgUpload = e => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcft8yhab/upload";
    const CLOUDINARY_UPLOAD_PRESET = "qa4hsadk";

    var file = e.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    Axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "applicaction/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(res => {
        console.log(res.data.secure_url);
        this.setState({ studentImg: res.data.secure_url });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="whole-form">
        <form onSubmit={this.formSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Student's Name</label>
            <input
              type="name"
              class="form-control form-control-lg"
              id="name"
              placeholder="Daniel Don"
              value= {this.state.studentName}
              onChange={(e) => {
                this.setState({ studentName: e.target.value})
              }}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              id="email"
              placeholder="name@example.com"
              value= {this.state.studentEmail}
              onChange={(e) => {
                this.setState({ studentEmail: e.target.value})
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
              value= {this.state.studentPassword}
              onChange={(e) => {
                this.setState({ studentPassword: e.target.value})
              }}
            />
          </div>
          <div class="form-group">
            <label for="class">Class</label>
            <select 
            class="form-control form-control-lg" 
            id="class"  
            value={this.state.studentClass}
            onChange={(e) => {
              this.setState({studentClass: e.target.value})
            }}
            >
              <option>...</option>
              <option>JSS1</option>
              <option>JSS2</option>
              <option>JSS3</option>
              <option>SSS1</option>
              <option>SSS2</option>
              <option>SSS3</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="class">Gender</label>
            <select 
            class="form-control form-control-lg" 
            id="class"  
            value={this.state.studentGender}
            onChange={(e) => {
              this.setState({studentGender: e.target.value})
            }}
            >
              <option>...</option>
              <option>male</option>
              <option>female</option>
              <option>transgender</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlFile1">Upload Image</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              onChange={this.imgUpload}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">About student</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.studentDescription}
              onChange={(e) => {
              this.setState({studentDescription: e.target.value})
            }}
              
            />
          </div>

          <button type="submit" class="btn btn-primary orange-gradient" style={{width: '100%', height: "100px", border: 'none'}}><h4>Register</h4></button>
        </form>
      </div>
    );
  }
}
