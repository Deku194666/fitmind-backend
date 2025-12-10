
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import imagen3 from '../images/imagen3.png'

function Navbar () {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
          <Link to="/" className="navbar-logo">FitMind</Link>
          <img src={imagen3} className="logo-img" /> 
          

        </div>
        <div className='navbar-rigth' >
            <Link to="/login" className="navbar-link2">Login</Link>
            <Link to="/register" className="navbar-link1">Registro</Link>
            
        </div>
    </nav>
  );
};

export default Navbar;


