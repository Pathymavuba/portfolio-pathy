import NavBar from "../components/NavBar";
import "../styles/servicePage.css";
import code from "../assets/code.png";
import phone from "../assets/iPhone.png";
import car from "../assets/car.png";
import design from "../assets/mondesign.png";
import Chevron from "../components/Chevron";

const ServicePage = () => {
  return (
    <div className="services">
      <NavBar />
      <div className="container service">
        <div className="details">
          <div className="detail">
            <img src={code} alt="" />
            <h2>Web Developpement</h2>
            <p>
              Nous sommes disponibles pour éditer des sites web, vous créer des
              plus belles applications, et même à les déployer sur Internet ou
              en Intranet...
            </p>
          </div>
          <div className="detail">
            <img src={phone} alt="" />
            <h2>Application Mobile</h2>
            <p>
              Nous sommes disponibles pour rendre vos marques mobiles, pour que
              par notre service , votre marque accompagne partout vos clients...
            </p>
          </div>
          <div className="detail">
            <img src={car} alt="" />
            <h2>E-commerce</h2>
            <p>
              Nous sommes disponibles à vous offrir les plus belles conceptions
              pour vos boutiques en ligne avec des moyens de payment très
              efficace..
            </p>
          </div>
          <div className="detail">
            <img src={design} alt="" />
            <h2>UX/Ui Design</h2>
            <p>
              Nous savons l’effet qu’une grande marque peut avoir sur son
              public.chez nous vous aurez des conceptions hors normes...
            </p>
          </div>
        </div>
        <div className="mybtn">
          <a href="/contact">
          <button>Contactez-moi</button>
          </a>
        </div>
      </div>
      <div className="chevron">
        <Chevron />
      </div>
    </div>
  );
};

export default ServicePage;
