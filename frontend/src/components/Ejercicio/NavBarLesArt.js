
import { Link } from 'react-router-dom';
 
const NavBarLesArt = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ecnt/artrosis " className='bar-button'> Artrosis </Link>
      <Link to="/ejercicio/lesiones/luxaciones " className='bar-button'> Luxaciones </Link>
      <Link to="/ejercicio/lesiones/ar" className='bar-button'> Artritis Reumatoidea  </Link>
      <Link to="/ejercicio/lesiones/gota" className='bar-button' > Gota </Link>
      
    </div>

    );
};

export default NavBarLesArt;