import '../styles/aboutPage.css'
import photo from "../assets/codeur.svg"
import facebook from "../assets/Facebook.png"
import github from "../assets/GitHub.png"
import instagram from "../assets/Instagram Circle.png"
import linkdin from "../assets/LinkedIn Circled.png"


const AboutPage = () => {
  return (
    <div className='about' id='apropos'>
      <h4 className='title-section'>A <span>Propos</span></h4>
      <div className='container about-me'>
        <div className='picture'>
          <img src={photo} alt="ok"  />
        </div>
        <div className='introduction'>
        <h1>Qui est Pathy Mavuba ? </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis. Ex dignissimos exercitationem esse doloribus minima quas delectus illum vero quam, neque molestiae. Et mollitia, dignissimos ratione quas architecto odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis. Ex dignissimos exercitationem esse doloribus minima quas delectus illum vero quam, neque molestiae. Et mollitia, dignissimos ratione quas architecto odit. <br/> 
        <a href='#compétences'><span className='.p-color'>voir mes compétences</span></a></p>
        <div className="mybtn"><button>Contactez-moi</button></div>
        <div className='icone-rx'>
          <a href="https://github.com/Pathymavuba"><img className='icone' src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/pathy-mavuba-a35880237/"><img className='icone' src={linkdin} alt="" /></a>
          <a href="https://www.instagram.com/mavubapathy/?hl=fr"><img className='icone' src={instagram} alt="" /></a>
          <a href="https://web.facebook.com/pathy.mavuba/"><img className='icone' src={facebook} alt="" /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage