


import { Link } from 'react-router-dom';
 
const NavBarArtrosis = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/artrosiscuello" className='bar-button'> Artrosis Cuello </Link>
      <Link to="/ejercicio/lesiones/artrosislumbar" className='bar-button'> Artrosis Lumbar </Link>
      <Link to="/ejercicio/lesiones/artrosishombro" className='bar-button' > Artrosis de Hombro </Link>
      <Link to="/ejercicio/lesiones/artrosismano" className='bar-button' > Artrosis de Muñeca-Mano </Link>
      
    </div>

    );
};

export default NavBarArtrosis;