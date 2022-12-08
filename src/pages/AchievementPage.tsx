import NavBar from "../components/NavBar";
import "../styles/achivementPage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import app from "../assets/appquiz.png";
import landing from "../assets/landingpage.png";
import Chevron from "../components/Chevron";

const AchievementPage = () => {
  return (
    <div className="achievement">
      <NavBar />
      <div className="container slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="realisation">
              <h4>Quiz App</h4>
              <img className="appli" src={app} alt="" />
              <a href="/">
                <button className="mybtn">en savoir plus</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="realisation">
              <h4>Landing Page</h4>
              <img className="appli" src={landing} alt="" />
              <a href="/">
                <button className="mybtn">en savoir plus</button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="chevron">
        <Chevron />
      </div>
    </div>
  );
};

export default AchievementPage;
