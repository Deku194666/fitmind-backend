


import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTrasAlimen = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/anorexianerviosa" className='bar-button'> Anorexia Nerviosa </Link>
    <Link to="/bienestarmental/enfmentales/bulimianerviosa" className='bar-button'> Bulimia Nerviosa  </Link>
    <Link to="/bienestarmental/enfmentales/trasporatracon" className='bar-button'> Trastorno por Atracón  </Link>

  </div>

  );
};

export default NavBarTrasAlimen;