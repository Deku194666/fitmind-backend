

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTrasOtrasCond = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/tept" className='bar-button'> Trastorno de Estrés Postraumático </Link>
    <Link to="/bienestarmental/enfmentales/traslimiteperso" className='bar-button'> Trastorno Límite de Personalidad  </Link>
  </div>

  );
};

export default NavBarTrasOtrasCond;