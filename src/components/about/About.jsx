import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaFolderOpen } from 'react-icons/fa'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>

            <article className="about__card">
              <FaUser className='about__icon' />
              <h5>Clients</h5>
              <small>5+ WorldWide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Commodi veniam quibusdam tempora corrupti, quam nam distinctio
            recusandae illum, magni odit consequatur nihil placeat velit 
            expedita iure at nisi modi voluptatibus.
          </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About