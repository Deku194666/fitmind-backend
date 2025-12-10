



import { Link } from 'react-router-dom';
 
const NavBarTendones = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/tendinopatiacodo" className='bar-button'> Lesiones Tendinosas Codo  </Link>
      <Link to="/ejercicio/lesiones/tendinopatiammdedos" className='bar-button' > Lesiones Tendinosas Muñeca-Mano-Dedos  </Link>
  
    </div>

    );
};

export default NavBarTendones;