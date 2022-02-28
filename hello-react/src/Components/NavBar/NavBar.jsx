import React from 'react'
import './NavBar.css'
import logo from '../../images/ironhack-logo-xs.png'
import dash from '../../images/menu-top-xs.png'

function NavBar() {
  return (
    <nav>        
        <img src={logo} alt="iron logo" />
        <img src={dash} alt="dash logo" />
    </nav>
  )
}

export default NavBar