



import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTrasPsico = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/esquizo" className='bar-button'> Esquizofrenia </Link>
    <Link to="/bienestarmental/enfmentales/trasdelirante" className='bar-button'> Trastorno Delirante   </Link>
  </div>

  );
};

export default NavBarTrasPsico;