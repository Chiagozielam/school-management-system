import React, { Component } from 'react'

export default class profile extends Component {
    render() {
        const { studentName, studentEmail, studentClass, studentGender, studentImg} = this.props.student
        return (
            <div>
                <div class="card profile-single" style={{ width: "18rem" }}>
                    <img
                        class="card-img-top"
                        src={studentImg}
                        alt="Card image cap"
                    />
                    <div class="card-body">
                        <p class="card-text">
                        <p class="card-text">
                        Class: SSS1
                        <p><b>Name:</b> {studentName}}</p>
                        <p><b>Age:</b> 17</p>
                        <p><b>Email:</b>{studentEmail}</p>
                        <p><b>Class:</b>{studentClass}</p>
                        <p><b>Gender:</b>{studentGender}</p>
                        </p>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}