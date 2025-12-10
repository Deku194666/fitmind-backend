


import { Link } from 'react-router-dom';
 
const NavBarAntiHistaminicos = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/antihistaminicosh1primeragen" className='bar-button'> Antihistamínicos H1 (1ra generación)		 </Link>
      <Link to="/farmacos/antihistaminicosh1segundagen" className='bar-button' > Antihistamínicos H1 (2da generación)	  </Link>
      <Link to="/farmacos/antihistaminicosh2" className='bar-button' > Antihistamínicos H2 </Link>
       
    </div>

    );
};

export default NavBarAntiHistaminicos;