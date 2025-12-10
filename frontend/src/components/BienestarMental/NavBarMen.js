

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarMen = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/trasestanimo" className='bar-button'> Trastornos del Estado de Ánimo  </Link>
    <Link to="/bienestarmental/trasansiedad" className='bar-button'> Trastornos de Ansiedad   </Link>
    <Link to="/bienestarmental/traspsicotico" className='bar-button' > Trastornos Psicóticos  </Link>            
    <Link  to="/bienestarmental/trasalimentario"  className='bar-button'  > Trastornos Alimentarios  </Link>
    <Link to="/bienestarmental/trasneurodesarrollo" className="bar-button">  Neurodesarrollo  </Link>
    <Link to="/bienestarmental/trasotrascondiciones" className="bar-button"> Otras Condiciones Relevantes  </Link>





  </div>

  );
};

export default NavBarMen;