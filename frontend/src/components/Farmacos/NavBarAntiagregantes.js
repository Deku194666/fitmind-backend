

import { Link } from 'react-router-dom';
 
const NavBarAntiagregantes = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/inhibidorescox1" className='bar-button'> Inhibidores COX-1  </Link>
      <Link to="/farmacos/inhibidoresp2y12" className='bar-button' > Inhibidores del receptor P2Y12  </Link>
      <Link to="/farmacos/inhibidoresgpiibiiia" className='bar-button' > Inhibidores GP IIb/IIIa </Link>
 
      
    </div>

    );
};

export default NavBarAntiagregantes;