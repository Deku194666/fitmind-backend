


import { Link } from 'react-router-dom';
 
const NavBarFarmacosRespi = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/broncodilatadores" className='bar-button'> Broncodilatadores	  </Link>
      <Link to="/farmacos/antiinflamatoriosrespiratorio" className='bar-button' > Antiinflamatorios Respiratorios  </Link>
      <Link to="/farmacos/antihistaminicos" className='bar-button' > Antihistamínicos </Link>
      <Link to="/farmacos/mucoliticosyexpectorantes" className='bar-button' > Mucoliticos y Expectorantes </Link>
      <Link to="/farmacos/antibioticosrespiratorios" className='bar-button' > Antibióticos  </Link>
 
      
    </div>

    );
};

export default NavBarFarmacosRespi;