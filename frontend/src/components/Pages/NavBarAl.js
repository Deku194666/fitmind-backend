


import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarAl = () => {


    return (
    
  <div className="secondary-bar">
    <Link to="/alimentos/alimentos" className='bar-button'> Alimentos </Link>
    <Link to="/informes" className='bar-button'> Comidas </Link>
    <Link to="/comidas" className='bar-button' > Recetas Saladas Saludables  </Link>            
    <Link  to="/comidas2"  className='bar-button'  > Recetas Dulces Saludables </Link>

  </div>
  );


}

export default NavBarAl;



