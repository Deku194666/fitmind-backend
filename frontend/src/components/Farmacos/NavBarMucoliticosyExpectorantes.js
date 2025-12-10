

import { Link } from 'react-router-dom';
 
const NavBarMucoliticosyExpectorantes = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/mucoliticos" className='bar-button'> Mucoliticos	 </Link>
      <Link to="/farmacos/expectorantes" className='bar-button' > Expectorantes  </Link>
        
    </div>

    );
};

export default NavBarMucoliticosyExpectorantes;