import './App.css';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicePage';
import AchievementPage from './pages/AchievementPage';
import "swiper/css/bundle";
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';




function App() {
  
  return (
    <div className="App" >
      <Homepage />
       <AboutPage/>
      <ServicePage />
      <AchievementPage/>
      <SkillsPage />
      <ContactPage/>
      <Footer />
      
    
    </div>
  );
}

export default App;
