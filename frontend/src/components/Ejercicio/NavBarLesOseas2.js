


import { Link } from 'react-router-dom';
 
const NavBarLesOseas2 = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/fxcolumna" className='bar-button'> Fractras Columna </Link>
      <Link to="/ejercicio/lesiones/fxpelvis" className='bar-button'> Fracturas Pelvis  </Link>
      <Link to="/ejercicio/lesiones/fxcadera" className='bar-button' > Fracturas Cadera  </Link>
      <Link to="/ejercicio/lesiones/fxfemur" className='bar-button' > Fracturas Femur  </Link>            
      <Link to="/ejercicio/lesiones/fxrodilla" className='bar-button' > Fracturas Rodilla </Link>
      <Link to="/ejercicio/lesiones/fxpierna" className='bar-button' > Fracturas Pierna </Link>         
      <Link to="/ejercicio/lesiones/fxtobpiededos" className='bar-button' > Fracturas Tobillo-Pie </Link>            
   
            
  
    </div>

    );
};

export default NavBarLesOseas2;