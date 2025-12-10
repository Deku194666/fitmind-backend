

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTrasNeurodesar = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/tdah" className='bar-button'> TDAH </Link>
    <Link to="/bienestarmental/enfmentales/tea" className='bar-button'> TEA  </Link>
  </div>

  );
};

export default NavBarTrasNeurodesar;