

import { Link } from 'react-router-dom';
import './NavBarEx2.css';

const NavBarEx2 = () => {

    return ( 
    
    <div className="secondary-bar1">
      <Link to="/ejercicio/lesart" className='bar-button'> Lesiones Articulares </Link>
      <Link to="/ejercicio/lesoseas" className='bar-button'> Lesiones Oseas  </Link>
      <Link  to="/ejercicio/lesnervios"  className='bar-button'> Lesiones Nerviosas  </Link>
      <Link to="/ejercicio/lestendinosas" className="bar-button"> Lesiones Tendinosas </Link>
  
    </div>

    );
};

export default NavBarEx2;