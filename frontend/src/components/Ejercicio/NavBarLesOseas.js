

import { Link } from 'react-router-dom';
 
const NavBarLesOseas = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/fxhombro" className='bar-button'> Fractras Hombro </Link>
      <Link to="/ejercicio/lesiones/fxhumero" className='bar-button'> Fracturas Humero </Link>
      <Link to="/ejercicio/lesiones/fxcodo" className='bar-button' > Fracturas Codo  </Link>
      <Link to="/ejercicio/lesiones/fxantebrazo" className='bar-button' > Fracturas Antebrazo  </Link>            
      <Link to="/ejercicio/lesiones/fxmmdedos" className='bar-button' > Fracturas Muñeca-Mano-Dedos </Link>            
  
    </div>

    );
};

export default NavBarLesOseas;