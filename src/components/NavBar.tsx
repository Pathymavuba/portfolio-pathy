import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='container navbar'>
      <h3 className="logo">M.Pathy</h3>
      <div className="menu">
            <a href="#accueil">Accueil</a>
            <a href="#aboutme">A Propos</a>
            <a href="#messervices">services</a>
            <a href="#mesrealisations">Réalisatons</a>
            <a href="#contactez-moi"><button>contact</button></a>
        </div>
    </div>
  )
}

export default NavBar