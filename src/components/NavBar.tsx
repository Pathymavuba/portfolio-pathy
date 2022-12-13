import { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [hover, setHover] = useState<string>("accueil");
  return (
    <div className="navbarContainer">
      <div className="container navbar">
        <h3 className="logo">M.Pathy</h3>
        <div className="menu">
          <a
            href="#accueil"
            className={hover === "accueil" ? "btn-menu-click" : "btn-menu"}
            onClick={() => setHover("accueil")}
          >
            Accueil
          </a>
          <a
            href="#apropos"
            className={hover === "apropos" ? "btn-menu-click" : "btn-menu"}
            onClick={() => setHover("apropos")}
          >
            A Propos
          </a>
          <a
            href="#services"
            className={hover === "services" ? "btn-menu-click" : "btn-menu"}
            onClick={() => setHover("services")}
          >
            services
          </a>
          <a
            href="#réalisations"
            className={hover === "realisations" ? "btn-menu-click" : "btn-menu"}
            onClick={() => setHover("realisations")}
          >
            Réalisatons
          </a>
          <a href="#contact" onClick={() => setHover("contact")}>
            <button>contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
