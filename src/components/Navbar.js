import React from 'react'
import '../index.css';
import logo from '../Assets/Emblem_of_IMC_Indore.jpg';




function Navbar() {
  return (
    <header className="header" >
        <img src={logo} alt="Eoffice logo"/>
        
        <a href="/" className="logo">E-Office</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/department">Department</a>
            <a href="/NewsandEvents">News & Events</a>
            <a href="/login">Login</a>
            <a href="/Help">Help</a>

        </nav>
        

    </header>
  )
}

export default Navbar
