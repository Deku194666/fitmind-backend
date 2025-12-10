

import { Link } from 'react-router-dom';
 
const NavBarAntiinflamatoriosRespi = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/corticoidesinhalados" className='bar-button'> Corticoides inhalados  </Link>
      <Link to="/farmacos/corticoidessistemicos" className='bar-button' > Corticoides sistémicos  </Link>
      <Link to="/farmacos/antileucotrienos" className='bar-button' > Antileucotrienos </Link>
 
 
      
    </div>

    );
};

export default NavBarAntiinflamatoriosRespi;