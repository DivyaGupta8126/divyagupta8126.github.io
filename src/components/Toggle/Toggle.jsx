import React from 'react'
import './Toggle.css'
import {FiSun} from 'react-icons/fi'
import {BsFillMoonFill} from 'react-icons/bs'

const Toggle = (props) => {
  return (
   <div className="toggle" onClick={props.toggle}>
            <BsFillMoonFill/>
        <FiSun color='yellow'/>
        <div style={props.mode==='dark'?{left: "2px"}:{right: "2px"}} className="t-button"></div>
   </div>
  )
}

export default Toggle
