import React from 'react'
import './Home.css'
import vector1 from '../../Images/Vector1.png'
import vector2 from '../../Images/Vector2.png'
import me from '../../Images/mine.png'
import Navbar from '../Navbar/Navbar'
import Toggle from '../Toggle/Toggle'

const Home = (props) => {
  return (
    <>
    <div className="home" id='First'>

      <div className="home_details">
        <span>Divya</span>
      <Toggle toggle={props.toggle} mode={props.mode}/>
        <h1>Hello, I am</h1>
        <span>Divya Gupta</span>
        <span>Front-End Developer</span>
      </div>

      <div className="home_img">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={me} alt="" />
        <div style={{background: props.mode==='dark'?"black":""}} className="blur1"></div>
      </div>
      <Navbar/>
    </div>
    </>
  )
}

export default Home
