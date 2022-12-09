import React from "react";
import NavBar from "../components/NavBar";
import "../styles/homepage.css";
import gift from "../assets/developer-dribbble.gif";
import Chevron from "../components/Chevron";

const Homepage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container header">
        <div className="introduction">
          <h1>Salut , je suis Pathy Mavuba</h1>
          <h5>Développeur full-stack</h5>
          <p>
            Je suis très passionné par ce métier{" "}
            <span className="p-color">des développeurs</span>, je suis une
            personne intègre,ponctuelle,honnête et tenace ;je sais aussi bien
            travailler en équipe . <br /> Je sais travailler et gérer avec soin
            toutes les tâches qui me sont confiées.
          </p>
          <a
            href="/PATHY.pdf"
            download="PATHY"
            target="_blank"
          >
            <button>Télecharger mon CV</button>
          </a>
        </div>
        <div className="gif">
          <img src={gift} alt="gift" />
        </div>
      </div>

      <Chevron />
    </div>
  );
};

export default Homepage;
