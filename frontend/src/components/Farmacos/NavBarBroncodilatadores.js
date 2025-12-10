
import { Link } from 'react-router-dom';
 
const NavBarBroncodilatadores = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/saba" className='bar-button'> Agonistas β2 de acción corta (SABA)	 </Link>
      <Link to="/farmacos/laba" className='bar-button' > Agonistas β2 de acción prolongada (LABA)	  </Link>
      <Link to="/farmacos/anticolinergicos" className='bar-button' > Anticolinérgicos </Link>
      <Link to="/farmacos/metilxantinas" className='bar-button' > Metilxantinas	 </Link>
      
    </div>

    );
};

export default NavBarBroncodilatadores;