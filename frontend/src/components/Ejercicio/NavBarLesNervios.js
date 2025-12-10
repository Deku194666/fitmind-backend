


import { Link } from 'react-router-dom';
 
const NavBarLesNervios = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/radiculopatiacervical" className='bar-button'> Radiculopatía Cervical </Link>
      <Link to="/ejercicio/lesiones/radiculopatialumbar" className='bar-button'> Radiculopatía Lumbar </Link>
      <Link to="/ejercicio/lesiones/lesnervioradial" className='bar-button' > Lesion Nervio Radial  </Link>
      <Link to="/ejercicio/lesiones/lesnerviomediano" className='bar-button' > Lesion Nervio Mediano  </Link>            
      <Link to="/ejercicio/lesiones/lesnervioulnar" className='bar-button' > Lesion Nervio Ulnar </Link>
      <Link to="/ejercicio/lesiones/lesnerviociatico" className='bar-button' > Lesion Nervio Ciatico </Link>
      <Link to="/ejercicio/lesiones/lesnervioperoneo" className='bar-button' > Lesion Nervio Peroneo </Link>            
            
            
  
    </div>

    );
};

export default NavBarLesNervios;