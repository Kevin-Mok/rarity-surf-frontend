import React from 'react'
import './NavBar.css'

const NavBar = props => {
  console.log(props)
  return (
    <div className="nav-bar p-1">
      <img className="h-8 ml-2 my-1 inline" src="/icon-dark.png"/>
      <p className="logo-text inline relative object-center tracking-wide">
        Rarity Check
      </p>
    </div>
  )
}

export default NavBar
