

// src/components/TertiaryBar.js
import React from 'react';
 import { Link } from 'react-router-dom';


const BarNavInforme = () => {
  return (
    <div className="tertiary-bar">
      
      <Link className='bar-button'   to="/hidratacioninforme">Hidratación</Link>
      <Link to="/registroalimentosinforme" className="bar-button">Registro de Alimentos</Link>
      <Link to="/bienestarmentalinforme" className='bar-button'>Bienestar Mental</Link>
      <Link to="/examenesinforme"  className='bar-button'  > Exámenes  </Link>
      
    </div>
  );
};

export default BarNavInforme;
