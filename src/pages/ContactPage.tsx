import NavBar from "../components/NavBar";
import "../styles/contactPage.css";
import dialog from "../assets/Me-contacter.png";
import Chevron from "../components/Chevron";
import { useState } from "react";

const ContactPage = () => {
  const [data, setData] = useState<string | any>({
    nom: "",
    email: "",
    message: "",
  });
  const { nom, email, message } = data;
  const handlechange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  async function  handleSubmit (e:any) {
    e.preventDefault();
   
    try {
      const responses = await fetch("https://v1.nocodeapi.com/pathy/google_sheets/GRtcoCmqJDPyMNfe?tabId=sheet1",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify([[nom,email,message,new Date().toLocaleString()]])
        }
      )
      await responses.json()
      setData({...data,nom:"",email:"",message:"",})
      
    } catch (error) {
      console.log(error);
      
    }
    };

  return (
    <div className="contact">
      <NavBar />
      <div className="container contact-details">
        <div className="contact-picture">
          <img src={dialog} alt="" />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="contact-form">
            <div className="inputgroup">
              <input
                type="text"
                id="nom"
                placeholder="Votre nom"
                name="nom"
                value={nom}
                onChange={handlechange}
              />
              {/* <label className="mylabelName" htmlFor="nom">
            Votre nom
            </label> */}
            </div>
            <div className="inputgroup">
              <input
                type="text"
                id="email"
                placeholder="Votre email"
                name="email"
                value={email}
                onChange={handlechange}
              />
              {/* <label className="mylabelName" htmlFor="email">
              Votre email
            </label> */}
            </div>
            <div className="input-text-area">
              <textarea
                id="txtid"
                name="message"
                className="message"
                placeholder="Ton message .."
                value={message}
                onChange={handlechange}
              ></textarea>
              {/* <label className="mylabelMessage" htmlFor="">Message</label> */}
            </div>
            <div className="inputgroup">
              <button>Envoyer</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Chevron />
      </div>
    </div>
  );
};

export default ContactPage;
