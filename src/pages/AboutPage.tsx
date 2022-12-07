import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/aboutPage.css'
import photo from "../assets/codeur.svg"
import facebook from "../assets/Facebook.png"
import github from "../assets/GitHub.png"
import instagram from "../assets/Instagram Circle.png"
import linkdin from "../assets/LinkedIn Circled.png"
import Chevron from '../components/Chevron'

const AboutPage = () => {
  return (
    <div className='about'>
      <NavBar />
      <div className='container about-me'>
        <div className='picture'>
          <img src={photo} alt="ok"  />
        </div>
        <div className='introduction'>
        <h1>Qui est Pathy Mavuba ? </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis. Ex dignissimos exercitationem esse doloribus minima quas delectus illum vero quam, neque molestiae. Et mollitia, dignissimos ratione quas architecto odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis. Ex dignissimos exercitationem esse doloribus minima quas delectus illum vero quam, neque molestiae. Et mollitia, dignissimos ratione quas architecto odit.</p>
        <div className="mybtn"><button>Contactez-moi</button></div>
        <div className='icone-rx'>
          <a href="/"><img className='icone' src={github} alt="" /></a>
          <a href="/"><img className='icone' src={linkdin} alt="" /></a>
          <a href="/"><img className='icone' src={instagram} alt="" /></a>
          <a href="/"><img className='icone' src={facebook} alt="" /></a>
          
        </div>
        </div>
      </div>
      <div className="chevron">
      <Chevron/>
      </div>
    </div>
  )
}

export default AboutPage