// import NavBar from '../components/NavBar'
import '../styles/skillsPage.css'
import frontend from "../assets/frontend.png"
import backend from "../assets/Group 1 (1).png"
import design from "../assets/design.png"
// import Chevron from '../components/Chevron'


const SkillsPage = () => {
  return (
    <div className='skills'>
        {/* <NavBar /> */}
        <h4 className="title-section">Mes <span>Compétences</span></h4>
        <div className='container skill' >
            <div className="mySkill">
              <img className='frontend'  src={frontend} alt="" />
              <h1>Frontend</h1>
              <div className='details'>
                <div className="detail">
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>Wordpress</li>
                </div>
              </div>
            </div>
            <div className="mySkill">
              <img className='backend' src={backend} alt="" />
              <h1>Backend</h1>
              <div className='details'>
                <div className="detail">
                <li>Node</li>
                <li>Express</li>
                <li>Mysql</li>
                <li>Mongodb</li>
                </div>
              </div>
            </div>
            <div className="mySkill">
              <img className='design' src={design} alt="" />
              <h1>Others</h1>
              <div className='details'>
                <div className="detail">
                <li>Photoshop</li>
                <li>Figma</li>
                </div>
              </div>
            </div>
        </div>
        {/* <Chevron /> */}

    </div>
  )
}

export default SkillsPage