

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTrasAns = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/bienestarmental/enfmentales/tag" className='bar-button'> Trastorno de Ansiedad Generalizada </Link>
    <Link to="/bienestarmental/enfmentales/ataquespanico" className='bar-button'> Ataques de Pánico  </Link>
    <Link to="/bienestarmental/enfmentales/fobias" className='bar-button' > Fobias Específicas  </Link>            
    <Link to="/bienestarmental/enfmentales/toc"  className='bar-button'  > Trastorno Obsesivo-Compulsivo   </Link>

  </div>

  );
};

export default NavBarTrasAns;
