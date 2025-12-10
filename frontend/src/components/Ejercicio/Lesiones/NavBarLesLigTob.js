



import { Link } from 'react-router-dom';
 
const NavBarLesLigTob = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/lpaa " className='bar-button'> Ligamento Peroneoastragalino Anterior </Link>
      <Link to="/ejercicio/lesiones/ligdeltoideo" className='bar-button'> Ligamento Deltoideo </Link>
      <Link to="/ejercicio/lesiones/lpcylpap" className='bar-button' > LPC y LPAP </Link>  
        
    </div>

    );
};

export default NavBarLesLigTob;