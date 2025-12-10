

import { Link } from 'react-router-dom';
 
const NavBarFarmacosDigestivos = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/antiacidos" className='bar-button'> Antiácidos   </Link>
      <Link to="/farmacos/protectoresgastricos" className='bar-button' > Protectores Gástricos </Link>
      <Link to="/farmacos/procineticos" className='bar-button' > Procinéticos </Link>
      <Link to="/farmacos/antiemeticos" className='bar-button' > Antieméticos </Link>
      <Link to="/farmacos/laxantes" className='bar-button' > Laxantes </Link>
      <Link to="/farmacos/antidiarreicos" className='bar-button' > Antidiarreicos  </Link>

      
    </div>

    );
};

export default NavBarFarmacosDigestivos;