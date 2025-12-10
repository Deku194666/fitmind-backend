

import { Link } from 'react-router-dom';
 
const NavBarLesLig = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/lesionligtobillo " className='bar-button'> Lesiones Tobillo </Link>
      <Link to="/ejercicio/lesiones/lesionligrodilla" className='bar-button'> Lesiones Rodilla  </Link>
      <Link to="/ejercicio/lesiones/lesionlighombro" className='bar-button' > Lesiones Hombro  </Link>  
      <Link to="/ejercicio/lesiones/lesionligcodo" className='bar-button' > Lesiones Codo  </Link>            
      <Link to="/ejercicio/lesiones/lesionligmm" className='bar-button' > Lesiones Muñeca-Mano  </Link>            

          
  
    </div>

    );
};

export default NavBarLesLig;