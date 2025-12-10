

import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarFar = () => {


    return (
    
  <div className="secondary-bar">
    <Link to="/farmacos/farmacoscv" className='bar-button'> Farmacos CardioVasculares </Link>
    <Link to="/farmacos/farmacosrespi" className='bar-button'> Farmacos Respiratorios </Link>
    <Link to="/farmacos/farmacosdig" className='bar-button' > Farmacos Digestivos  </Link>            
    <Link  to="/farmacos/farmacosost"  className='bar-button'  > Farmacos Traumatologicos </Link>


  </div>
  );


}

export default NavBarFar;