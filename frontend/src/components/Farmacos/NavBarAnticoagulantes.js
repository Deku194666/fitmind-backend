



import { Link } from 'react-router-dom';
 
const NavBarAnticoagulantes = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/antagonistasvitk" className='bar-button'> Antagonistas de la Vitamina K  </Link>
      <Link to="/farmacos/heparinas" className='bar-button' > Heparinas  </Link>
      <Link to="/farmacos/anticoagulantesorales" className='bar-button' > Anticoagulantes Orales </Link>

      
    </div>

    );
};

export default NavBarAnticoagulantes