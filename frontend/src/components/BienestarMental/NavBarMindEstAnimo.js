



import React from 'react';
import { Link } from 'react-router-dom';

const NavBarMindEstAnimo = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/depresion" className='bar-button'> Depresión   </Link>
    <Link to="/bienestarmental/enfmentales/trasbipolar" className='bar-button'> Trastornos Bipolar  </Link>
    <Link to="/bienestarmental/enfmentales/distimia" className='bar-button' > Distimia  </Link>            

  </div>

  );
};

export default NavBarMindEstAnimo;