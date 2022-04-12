import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav>

      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active': ''}> <FaHome /> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active': ''}> <FaUserAlt /> </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active': ''}> <FaBook /> </a>
      <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav ==='#service' ? 'active': ''}> <RiServiceFill /> </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active': ''}> <RiContactsBook2Fill /> </a>

    </nav>

  )
}

export default Nav