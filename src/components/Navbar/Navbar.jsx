import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GoProject} from 'react-icons/go'
import {FcContacts} from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className="navbar">
        <button className='navbar_home'><a href="#First" ><AiOutlineHome size="1.3rem" color="orange"/></a></button>
        <button className='navbar_about'><a href="#Second"><FcAbout size="1.2rem" /></a></button>
        <button className='navbar_project'><a href="#Third"><GoProject size="1.2rem" color='#658cc9'/></a></button>
        <button className='navbar_contact'><a href="#Fourth"><FcContacts size="1.2rem" color='black'/></a></button>
    </div>
  )
}

export default Navbar
