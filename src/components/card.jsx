import React from 'react'
import {Link} from 'react-router-dom'

export default function card(props) {
    return (
        <div style={{height: '280px', marginBottom:'10%', marginTop: '10%', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', textAlign: 'center', paddingTop:'30%'}} className={props.color}>
           <h4> <Link style={{color: 'black'}}  to= {props.link}>{props.linkText}</Link></h4> 
        </div>
    )
}
