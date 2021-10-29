import React from 'react'
import './NavBar.css'

const NavBar = props => {
  return (
    <div className="nav-bar w-full p-1">
      <img className="h-7 ml-2 my-1 inline" 
        alt="Rarity Check icon" src="/icon-surf-compact-filled.png"/>
      <p className="logo-text inline relative object-center tracking-wide">
        Rarity Surf
      </p>
    </div>
  )
}

export default NavBar
