import "../styles/aboutPage.css";
import photo from "../assets/codeur.svg";
import facebook from "../assets/Facebook.png";
import github from "../assets/GitHub.png";
import instagram from "../assets/Instagram Circle.png";
import linkdin from "../assets/LinkedIn Circled.png";

const AboutPage = () => {
  return (
    <div className="about" id="apropos">
      <h4 className="title-section">
        A <span>Propos</span>
      </h4>
      <div className="container about-me">
        <div className="picture">
          <img src={photo} alt="ok" />
        </div>
        <div className="introduction">
          <h1>Qui est Pathy Mavuba ? </h1>
          <p>
            Je suis un developpeur très passionné , je suis interressé depuis
            mon jeune âge par le web et les nouvelles technologies , Ma mission
            est de créer des applications web et mobiles très performantes .
            j'ai été formé dans la meilleure école des codes de kinshasa ,
            KINSHASA DIGITAL ACADEMY ; j'ai fait mes études universitaires à
            l'université de kinshasa en mathématiques et informatiques. <br />
            <a href="#compétences">
              <span className=".p-color">voir mes compétences</span>
            </a>
          </p>
          <div className="mybtn">
            <a href="#contact">
              <button>Contactez-moi</button>
            </a>
          </div>
          <div className="icone-rx">
            <a href="https://github.com/Pathymavuba">
              <img className="icone" src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/pathy-mavuba-a35880237/">
              <img className="icone" src={linkdin} alt="" />
            </a>
            <a href="https://www.instagram.com/mavubapathy/?hl=fr">
              <img className="icone" src={instagram} alt="" />
            </a>
            <a href="https://web.facebook.com/pathy.mavuba/">
              <img className="icone" src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
