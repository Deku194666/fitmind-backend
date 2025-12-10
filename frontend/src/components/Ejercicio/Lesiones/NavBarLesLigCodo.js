

import { Link } from 'react-router-dom';
 
const NavBarLesLigCodo = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/lcmcodo " className='bar-button'> Lesión Ligamento Colateral Medial </Link>
      <Link to="/ejercicio/lesiones/lclcodo" className='bar-button'> Lesión Ligamento Colateral Lateral </Link>
      <Link to="/ejercicio/lesiones/inestplcodo" className='bar-button' > Inestabilidad PosteroLateral de Codo </Link>
      <Link to="/ejercicio/lesiones/luxacioncodo" className='bar-button' > Luxación de Codo </Link>
      
    </div>

    );
};

export default NavBarLesLigCodo;