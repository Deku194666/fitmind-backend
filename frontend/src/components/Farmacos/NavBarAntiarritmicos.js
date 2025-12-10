

import { Link } from 'react-router-dom';
 
const NavBarAntiarrtimicos = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/bloqueadorescanalesna" className='bar-button'> Bloqueadores de Canales de Sodio  </Link>
      <Link to="/farmacos/betabloqueadores" className='bar-button' > Betabloqueadores  </Link>
      <Link to="/farmacos/bloqueadorescanalesk" className='bar-button' > Bloqueadores de los Canales de Potasio </Link>
      <Link to="/farmacos/bloqueadorescanalesca" className='bar-button' > Bloqueadores de los Canales de Calcio </Link>
      <Link to="/farmacos/otrosantiarritmicos" className='bar-button' > Otros  </Link>
      
    </div>

    );
};

export default NavBarAntiarrtimicos;