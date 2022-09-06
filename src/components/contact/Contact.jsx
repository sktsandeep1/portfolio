import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k98vmgo', 'template_obj7zws', form.current, 'u_rCx6Ty_doA2aPAN')
     e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>  
            <h4>Email</h4>
            <h5>sktsandeep1@gmail.com</h5>
            <a href="mailto:sktsandeep1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option ">
            <BsTwitter className='contact__option-icon'/>  
            <h4>Twitter</h4>
            <h5>sktsandeep1</h5>
            <a href="https://twitter.com/sktsandeep1"target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsTwitter className='contact__option-icon' />  
            <h4>Linkedin</h4>
            <h5>sktsandeep1</h5>
            <a href="https://linkedin.com/in/sktsandeep1/"target="_blank">Send a message</a>
          </article>

          


        </div>
        {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact