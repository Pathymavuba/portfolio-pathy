import './navbar.css'

// window.addEventListener('scroll',(e)=>{
//   const navbar:HTMLElement= document.getElementById('navbar')
//   navbar.classList.add('scrollage');
  
//  //  console.log(window.scrollY)
 
//   if (window.scrollY < 30) {
//       navbar.classList.remove("scrollage");
//   }
//  })
//  'container navbar'
// {window.scrollY > 30 ? 'container navbar removeScrolling' : 'container navbar scrollage'}
 
const NavBar = () => {
  return (
    <div className='navbarContainer'>
    <div className='container navbar'>
      <h3 className="logo">M.Pathy</h3>
      <div className="menu">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">A Propos</a>
            <a href="#services">services</a>
            <a href="#réalisations">Réalisatons</a>
            <a href="#contact"><button>contact</button></a>
        </div>
    </div>
    </div>
  )
}

export default NavBar