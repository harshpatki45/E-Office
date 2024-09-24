import React from 'react'
import '../index.css'
import logo from '../Assets/Emblem_of_IMC_Indore.jpg';


function Navbar() {
  return (
    <header className="header" >
        <img src={logo} alt="Eoffice logo"/>
        
        <a href="/" className="logo">E-Office</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">Departments</a>
            <a href="/">News & Events</a>
            <a href="/">Login</a>
            <a href="/">Help</a>

        </nav>
        

    </header>
  )
}

export default Navbar
