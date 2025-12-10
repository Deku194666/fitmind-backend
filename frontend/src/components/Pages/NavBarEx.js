
import { Link } from 'react-router-dom';
import './NavBarEx.css';

const NavBarEx = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/musculacion" className='bar-button'>Ejericicios Musculares</Link>
      <Link to="/ejercicio/cv" className='bar-button'> Ejercicios CardioVasculares</Link>
      <Link to="/ejercicio/elongacion" className='bar-button' > Elongación  </Link>            
      <Link  to="/ejercicio/lesmusc"  className='bar-button'> Lesiones Musculares  </Link>
      <Link to="/ejercicio/leslig" className="bar-button"> Lesiones Ligamentosas </Link>
  
    </div>

    );

};

export default NavBarEx;



