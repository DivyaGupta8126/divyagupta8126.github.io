import React from 'react'
import './Contact.css'

const Contact = (props) => {
  return (
    <div className='contact' id='Fourth'>
        <div className="contact_left">
          <span>Contact</span>
          <span>Me</span>
          <div style={{background: props.mode==='dark'?"black":""}} className="blur1 contact_blur1"></div>
        </div>

        <div className="contact_right">
         <form className="form" action='https://formspree.io/f/xknydndb' method='POST'>
          <input className='form_input' name='name' type="text" placeholder='Enter your name'/>
          <input className='form_input' name="email" type="email" id="" placeholder='Enter your email' />
          <textarea className='form_input' name="message" id="" placeholder='Enter your msg' ></textarea>
          <button type='submit' className="button contact_btn">Send</button>
         </form>
        </div>

    </div>
  )
}

export default Contact
