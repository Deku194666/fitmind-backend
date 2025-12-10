



import { Link } from 'react-router-dom';
 
const NavBarAntihipertensivos = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/iecas" className='bar-button'> IECAs  </Link>
      <Link to="/farmacos/araii" className='bar-button' > ARA II  </Link>
      <Link to="/farmacos/diureticos" className='bar-button' > Diureticos </Link>
      <Link to="/farmacos/betabloqueadores" className='bar-button' > BetaBloqueadores </Link>
      <Link to="/farmacos/bloqueadorescanalesca" className='bar-button' > Bloqueadres de los Canales de Ca+  </Link>

  
    </div>

    );
};

export default NavBarAntihipertensivos;