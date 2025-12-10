



import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarExamen = () => {


    return (
    
  <div className="secondary-bar">
    <Link to="/lab" className='bar-button'> Examenes de Laboratorio </Link>
    <Link to="/imagen" className='bar-button'> Examenes de Imagenología </Link>


  </div>
  );


}

export default NavBarExamen;
