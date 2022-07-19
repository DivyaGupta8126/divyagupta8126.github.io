import React from 'react'
import './Project.css'
import snake from '../../Images/snake.png'
import movie from '../../Images/bg1.jpg'
import portfolio from '../../Images/portfolio.png'
import android from '../../Images/android.png'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const Project = (props) => {
    const projs=[{
        image: snake,
        heading: "The Eater-Snake",
        detail: "The Eater Snake is a game in which we have to take the snake towards the food and after eating the food length of the snake increases. It is made using Vanilla Javascipt.",
        github: "https://github.com/DivyaGupta8126/Eater-Snake",
        livedemo: "https://divyagupta8126.github.io/Eater-Snake/"
    },
{
    image: movie,
    heading: "Movie-Hacking",
    detail: "Movie-Hacking is a website that provides information of the entered movie name. It is made using React.",
    github: "https://github.com/DivyaGupta8126/Movie-Hacking",
    livedemo: "https://divyagupta8126.github.io/Movie-Hacking/"
},
{
    image: portfolio,
    heading: "Portfolio Website",
    detail: "It is a portfolio website that contains my personal information. It is made using React.",
    github: "https://github.com/DivyaGupta8126/divyagupta8126.github.io/tree/master",
    livedemo: "https://divyagupta8126.github.io/"
},
{
    image: android,
    heading: "White- Knight",
    detail: "White-Knight is an android application that gives you a reminder when any of your entered object got expired. It is made using Java.",
    github: "https://github.com/DivyaGupta8126/White-Knight",
    livedemo: "#"
}
]
  return (
    <div className="project" id='Third'>
      <span>My</span>
      <span>Projects</span>

      <Swiper  
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        spaceBetween={30}
        grabCursor={true}
        >
    {projs.map((item,index)=>(
                <SwiperSlide  key={index}>
                    <div  className="column">
                    <img src={item.image} alt="" />
                    <span>{item.heading}</span>
                    <span >{item.detail}</span>
                    <div className="btt">
                 <button className='button btn-1'>  <a className="git" href={item.github} target="_blank">Github</a></button>
                    <button className='button btn-2'><a className='live' href={item.livedemo} target="_blank" >LiveDemo</a></button>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
     </Swiper>
     <div style={{background: props.mode==='dark'?"black":""}} className="blur1 p-blur"></div>
    </div>
    
  )
}

export default Project
