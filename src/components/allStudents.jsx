import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Student from "./parts/student"

class Profile extends Component {
  render() {
    return (
      <div class="">
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search Students By Name...."
            />
            <button type="submit" class="searchButton orange-gradient">
              <i class="fa fa-search" />
            </button>
          </div>
        </div>

        <p className="spacing" style={{height:'150px'}}></p>
        <div className="row profile-main profile-all">
          <ProductConsumer>
                {value => {
                  return value.allStudents.map(student => {
                    return <div className="col-sm-10 col-ml-4 col-lg-3">
                      <Student key={student._id} student={student} />
                    </div>
                  });
                }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Profile;
