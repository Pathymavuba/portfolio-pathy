import "../styles/achivementPage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import app from "../assets/appquiz.png";
import quizgame from "../assets/quizgame.png";
import pathsound from "../assets/pathsound.png"
import vlab from "../assets/vlab-dataview..png"
import captur from "../assets/captur.png"


const AchievementPage = () => {
  return (
    <div className="achievement" id="réalisations">
      {/* <NavBar /> */}
      <h4 className="title-section">Mes <span>réalisations</span></h4>
      <div className="container slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className="realisation">
              <h4>Captur photography</h4>
              <img className="mobile" src={captur} alt="" />
              <a href="https://captur-photography-ten.vercel.app/">
                <button className="mybutn">voir l'application</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="realisation">
              <h4>Quiz App</h4>
              <img className="mobile" src={app} alt="" />
              <a href="https://quiz-app-three-gamma.vercel.app">
                <button className="mybutn">voir l'application</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="realisation">
              <h4>PathSound</h4>
              <img className="tablet" src={pathsound} alt="" />
              <a href="https://path-sound-web.vercel.app">
                <button className="mybutn">voir l'application</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="realisation">
              <h4>Quizgame</h4>
              <img className="tablet" src={quizgame} alt="" />
              <a href="https://quiz-app-react-chi-six.vercel.app/">
                <button className="mybutn">voir l'application</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="realisation">
              <h4>Vlab-dataview de vodacom</h4>
              <img className="tablet" src={vlab} alt="" />
              <a href="https://vlab-dataview.vercel.app/">
                <button className="mybutn">voir l'application</button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="chevron">
        {/* <Chevron /> */}
      </div>
    </div>
  );
};

export default AchievementPage;
