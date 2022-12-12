import './App.css';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicePage';
import AchievementPage from './pages/AchievementPage';
import "swiper/css/bundle";
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/accueil'  element={<Homepage/>} />
        <Route path='/about'  element={<AboutPage/>} />
        <Route path='/compétences'  element={<SkillsPage/>} />
        <Route path='/services'  element={<ServicePage />} />
        <Route path='/réalisations'  element={<AchievementPage />} />
        <Route path='/contact'  element={<ContactPage />} />
        <Route path='*' element={<Navigate to='/accueil'/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
