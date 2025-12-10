
// src/components/TertiaryBar.js
import React from 'react';
import './TertiaryBar.css';
import { Link } from 'react-router-dom';


const TertiaryBar = () => {
  return (
    <div className="tertiary-bar">
      <Link   className='bar-button'  to="/ejercicio"  >  Ejercicio </Link>
      <Link className='bar-button'   to="/hidratacion">Hidratación</Link>
      <Link to="/registroalimentos" className="bar-button">Registro de Alimentos</Link>
      <Link to="/bienestarmental" className='bar-button'>Bienestar Mental</Link>
      <Link to="/examenes"  className='bar-button'  > Exámenes  </Link>
      <Link to="/farmacos" className="bar-button">Fármacos</Link>


    </div>
  );
};

export default TertiaryBar;





