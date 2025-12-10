

import React from 'react';
import { Link } from 'react-router-dom';
import BarNavInforme from './BarNavInforme';

const BarNavSVInforme = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registrosv" className='bar-button' > Registro Signos Vitales  </Link>            
   
  </div>

  );
};

export default BarNavSVInforme;
