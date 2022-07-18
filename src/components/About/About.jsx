import React from 'react'
import Card from '../Card/Card'
import './About.css'
import education from '../../Images/education.png'
import languages from '../../Images/languages.png'
import skills from '../../Images/skills.png'
import resume from '../../Images/Resume.pdf'

const About = (props) => {
  return (
    <div className="about" id='Second'>
      
        <div className="about_left">
        <span>About</span>
       <span>Me</span>
       <div>I am Divya Gupta, an Enthusiastic Front-End Developer. Always ready to learn new things.</div>
       <div className="about_btn">
       <button className="button about-btn1"><a href={resume}download="Divya Gupta">Download CV</a></button>
       <button className="button about-btn2"><a href="#Fourth">Hire Me</a></button>
       </div>
       <div style={{background: props.mode==='dark'?"black":""}} className="blur2 about_blur2"></div>
        </div>
        <div className="about_right">
            <Card image={education} primary="Education" secondary="Persuing B.Tech (CSE) from DIT University, Dehradun."/>
            <Card image={languages} primary="Languages" secondary="Java, Html, CSS, Javascript, C. "/>
            <Card image={skills} primary="Skills" secondary="Front-End Development, Problem Solving, Team Management."/>
            <div style={{background: props.mode==='dark'?"black":""}} className="blur1 about_blur1"></div>
                <div style={{background: props.mode==='dark'?"black":""}} className="blur2"></div>
        </div>
    </div>
  )
}

export default About
