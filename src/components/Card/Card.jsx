import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
   <div className="card">
    <img src={props.image} alt="" />
    <h2>{props.primary}</h2>
    <p>{props.secondary}</p>
   </div>
  )
}

export default Card
