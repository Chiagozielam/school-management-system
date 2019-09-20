import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidenav() {
    return (
        <div style={{ height:'100vh', color: 'white', position: 'fixed', backgroundColor: '#151B26', padding: '5%', paddingLeft: '2%'}}>
            <h4>sms</h4>
            <Link to='/' className="link"><h5><i class="fas fa-address-book"></i> DashBoard</h5></Link>
            <Link to='/' className="link"><p><i class="fas fa-address-book"></i> Timetable</p></Link>
            <Link to='/allstudents' className="link"><p><i class="fas fa-address-book"></i> All Students</p></Link>
            <Link to='/addstudent' className="link"><p><i class="fas fa-address-book"></i> Register New Students</p></Link>

            <hr style={{ borderColor: 'gray'}}/>

            

        </div>
    )
}
