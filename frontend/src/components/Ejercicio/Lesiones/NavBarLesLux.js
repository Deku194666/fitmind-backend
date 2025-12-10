


import { Link } from 'react-router-dom';
 
const NavBarLesLux = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/luxacionhombro" className='bar-button'> Luxación de Hombro </Link>
      <Link to="/ejercicio/lesiones/luxacioncodo " className='bar-button'> Luxacion de Codo </Link>
      <Link to="/ejercicio/lesiones/luxacionmmdedos" className='bar-button'> Luxacion de Muñeca-Mano-Dedos  </Link>
      <Link to="/ejercicio/lesiones/luxacioncadera" className='bar-button' > Luxación de Cadera </Link>
      <Link to="/ejercicio/lesiones/luxacionrodilla" className='bar-button' > Luxación Rodilla </Link>
      <Link to="/ejercicio/lesiones/luxaciontobpiededos" className='bar-button' > Luxación Tobillo-Pie-Dedos </Link>


      
    </div>

    );
};

export default NavBarLesLux;