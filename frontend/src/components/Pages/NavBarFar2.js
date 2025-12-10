


// src/components/NavBarFar2.js
import React from 'react';
import './NavBarFar2.css';
import { Link } from 'react-router-dom';


const NavBarFar2 = () => {
  return (
    <div className="tertiary-bar">
      <Link   className='bar-button'  to="/farmacos/farmacosneuro"  >  Farmacos Neurologicos </Link>
      <Link className='bar-button'   to="/farmacos/registrofarmacos/registrofarmacoscalendario">  Registro de tus medicamentos  </Link>
 


    </div>
  );
};

export default NavBarFar2;
