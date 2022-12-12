import NavBar from "../components/NavBar";
import "../styles/contactPage.css";
import dialog from "../assets/Me-contacter.png";
import Chevron from "../components/Chevron";

const ContactPage = () => {
  return (
    <div className="contact">
      <NavBar />
      <div className="container contact-details">
        <div className="contact-picture">
          <img src={dialog} alt="" />
        </div>
        <div className="contact-form">
          <div className="inputgroup">
            <input type="text" id="nom" placeholder="Votre nom"/>
            {/* <label className="mylabelName" htmlFor="nom">
            Votre nom
            </label> */}
          </div>
          <div className="inputgroup">
            <input type="text" id="email" placeholder="Votre email"/>
            {/* <label className="mylabelName" htmlFor="email">
              Votre email
            </label> */}
          </div>
          <div className="input-text-area">
            <textarea
              id="txtid"
              name="txtname"
              className="message"
              placeholder="Ton message .."
            >
            </textarea>
            {/* <label className="mylabelMessage" htmlFor="">Message</label> */}
          </div>
          <div className="inputgroup">
            <button>Envoyer</button>
          </div>
        </div>
      </div>
      <div>
        <Chevron />
      </div>
    </div>
  );
};

export default ContactPage;
