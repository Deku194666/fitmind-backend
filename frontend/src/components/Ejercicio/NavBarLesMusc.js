

import { Link } from 'react-router-dom';
 
const NavBarLesMusc = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/desgarros" className='bar-button'> Desgarros </Link>
      <Link to="/ejercicio/lesiones/contusion" className='bar-button'> Contusiones  </Link>
      <Link to="/ejercicio/lesiones/contractura" className='bar-button' > Contracturas  </Link>            
  
    </div>

    );
};

export default NavBarLesMusc;