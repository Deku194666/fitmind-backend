





import { Link } from 'react-router-dom';
 
const NavBarLesLigMM = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/lesionligescafolunar" className='bar-button'> Lesión Ligamento Escafolunar </Link>
      <Link to="/ejercicio/lesiones/lesionfct" className='bar-button'> Lesión Fibrocartilago Triangular </Link>
      <Link to="/ejercicio/lesiones/lesionstener" className='bar-button' > Lesion de Stener </Link>
      <Link to="/ejercicio/lesiones/luxaciondedos" className='bar-button' > Luxación de dedos </Link>
      
    </div>

    );
};

export default NavBarLesLigMM;