

import { Link } from 'react-router-dom';
 
const NavBarFarmacosIC = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/diureticosasa" className='bar-button'> Diuréticos de asa	  </Link>
      <Link to="/farmacos/araii" className='bar-button' > ARA II  </Link>
      <Link to="/farmacos/iecas" className='bar-button' > IECA </Link>
      <Link to="/farmacos/betabloqueadores" className='bar-button' > Betabloqueadores </Link>
      <Link to="/farmacos/antagonistasmra" className='bar-button' > Antagonistas MRA  </Link>
      <Link to="/farmacos/arni" className='bar-button' > ARNI </Link>

      
    </div>

    );
};

export default NavBarFarmacosIC;