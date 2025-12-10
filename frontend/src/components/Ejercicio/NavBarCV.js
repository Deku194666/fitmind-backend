

import { Link } from 'react-router-dom';
 
const NavBarCV = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/cv/trote" className='bar-button'> Trote </Link>
      <Link to="/ejercicio/cv/correr" className='bar-button'> Correr </Link>
      <Link to="/ejercicio/cv/sprint" className='bar-button' > Sprints  </Link>            
      <Link to="/ejercicio/cv/bicicleta"  className='bar-button'> Bicicleta  </Link>
      <Link to="/ejercicio/cv/caminar" className="bar-button"> Caminar </Link>
      <Link to="/ejercicio/cv/nadar" className="bar-button"> Nadar </Link>
      <Link to="/ejercicio/cv/boxeosaco" className="bar-button"> Boxeo con Saco </Link>
  
    </div>

    );

};

export default NavBarCV;