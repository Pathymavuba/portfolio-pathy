import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='container navbar'>
      <h3 className="logo">M.Pathy</h3>
      <div className="menu">
            <a href="/accueil">Accueil</a>
            <a href="/about">A Propos</a>
            <a href="/services">services</a>
            <a href="/réalisations">Réalisatons</a>
            <a href="/contact"><button>contact</button></a>
        </div>
    </div>
  )
}

export default NavBar