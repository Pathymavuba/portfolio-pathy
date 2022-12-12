import './App.css';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicePage';
import AchievementPage from './pages/AchievementPage';
import "swiper/css/bundle";
import ContactPage from './pages/ContactPage';
// import { useState , createContext } from 'react';

// interface Props {
//   children?: React.ReactNode;
// }
// export interface ContextProps {
//   currentPage: string;
//   setCurrentPage(currentPage:string): void;
// }
// export const MyContext = createContext<ContextProps>({
//   currentPage:"home",
//   setCurrentPage: () => {},
// });
// export const Provider: React.FC<Props> = ({ children }) => {
//   const [currentPage,setCurrentPage] = useState<string>("home")
//   return (
//     <MyContext.Provider
//       value={{
//         currentPage,
//         setCurrentPage,
//       }}
//     >
//     {children}
//   </MyContext.Provider>
//  );
// };

function App() {
  
  return (
    <div className="App">

      {/* <Provider >
      <Routes>
        <Route path='/accueil'  element={<Homepage/>} />
        <Route path='/about'  element={<AboutPage/>} />
        <Route path='/compétences'  element={<SkillsPage/>} />
        <Route path='/services'  element={<ServicePage />} />
        <Route path='/réalisations'  element={<AchievementPage />} />
        <Route path='/contact'  element={<ContactPage />} />
        <Route path='*' element={<Navigate to='/accueil'/>} />
      </Routes>
      </Provider> */}
      <Homepage />
       <AboutPage/>
      <ServicePage />
      <AchievementPage/>
      <SkillsPage />
      <ContactPage/>
    
    </div>
  );
}

export default App;
