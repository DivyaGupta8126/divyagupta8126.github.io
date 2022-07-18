import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
       <a href="https://www.instagram.com/divyagupta8126/" target="_blank"><BsInstagram className='ico' /></a>
       <a href="https://www.linkedin.com/in/divyagupta8126/" target="_blank"><BsLinkedin className='ico' /></a>
       <a href="https://github.com/DivyaGupta8126" target="_blank"><BsGithub className='ico'/></a>
       </div>
       <div className="foot_para">
        Divya Gupta &copy; All rights reserved.
       </div>
    </div>
  )
}

export default footer
