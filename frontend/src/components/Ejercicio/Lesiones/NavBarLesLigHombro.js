




import { Link } from 'react-router-dom';
 
const NavBarLesLigHombro = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/gh " className='bar-button'> Lesión Ligamentos Gleno-Humerales </Link>
      <Link to="/ejercicio/lesiones/ac" className='bar-button'> Lesión Ligamentos Acromio-Claviculares </Link>
      <Link to="/ejercicio/lesiones/bankart" className='bar-button' > Lesión de Bankart </Link>
      <Link to="/ejercicio/lesiones/slap" className='bar-button' > Lesión de Slap </Link> 

      
    </div>

    );
};

export default NavBarLesLigHombro;