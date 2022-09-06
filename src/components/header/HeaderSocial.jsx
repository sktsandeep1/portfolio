import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        
        <a href="https://linkedin.com" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com" target="_blank"> <BsGithub /> </a>
        <a href="https://twitter.com" target="_blank"> <FaTwitter /> </a>
        <a href="https://dribbb le.com" target="_blank"> <BsDribbble /> </a>
        
    </div>
  )
}

export default HeaderSocial