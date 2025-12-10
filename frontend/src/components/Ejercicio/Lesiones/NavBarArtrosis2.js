




import { Link } from 'react-router-dom';
 
const NavBarArtrosis2 = () => {

    return ( 
    
    <div className="secondary-bar">
     
      <Link to="/ejercicio/lesiones/artrosiscadera" className='bar-button' > Artrosis de Cadera </Link>
      <Link to="/ejercicio/lesiones/artrosisrodilla" className='bar-button' > Artrosis de Rodila </Link>
      <Link to="/ejercicio/lesiones/artrosistobpie" className='bar-button' > Artrosis de Tobillo-Pie </Link>
      
    </div>

    );
};

export default NavBarArtrosis2;