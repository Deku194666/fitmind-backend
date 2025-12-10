


import { Link } from 'react-router-dom';
 
const NavBarHipolipemiantes = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/estatinas" className='bar-button'> Estatinas  </Link>
      <Link to="/farmacos/fibratos" className='bar-button' > Fibratos  </Link>
      <Link to="/farmacos/ezetemiba" className='bar-button' > Ezetemiba </Link>
      <Link to="/farmacos/resinas" className='bar-button' > Resinas </Link>
      <Link to="/farmacos/inhibidorespcsk9" className='bar-button' > Inhibidores PCSK9	  </Link>
 
      
    </div>

    );
};

export default NavBarHipolipemiantes;