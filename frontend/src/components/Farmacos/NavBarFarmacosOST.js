


import { Link } from 'react-router-dom';
 
const NavBarFarmacosOST = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/farmacoshuesos" className='bar-button'> Para Huesos  </Link>
      <Link to="/farmacos/farmacosmusculos" className='bar-button' > Para Músculos </Link>
      <Link to="/farmacos/farmacostendonesligamentos" className='bar-button' > Para Tendones/Ligamentos </Link>
      <Link to="/farmacos/farmacosfascia" className='bar-button' > Para Fascia </Link>
      <Link to="/farmacos/farmacosnervioscolumna" className='bar-button' > Para Nervios Periféricos/Columna </Link>

      
    </div>

    );
};

export default NavBarFarmacosOST;