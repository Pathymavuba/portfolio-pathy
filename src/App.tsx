import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SkillsPage from './pages/SkillsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/accueil'  element={<Homepage/>} />
        <Route path='/about'  element={<AboutPage/>} />
        <Route path='/compétences'  element={<SkillsPage/>} />
        <Route path='*' element={<Navigate to='/accueil'/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
