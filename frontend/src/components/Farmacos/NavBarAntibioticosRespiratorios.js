

import { Link } from 'react-router-dom';
 
const NavBarAntibioticosRespiratorios = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/penicilinhibidorbeta" className='bar-button'> Penicilinas + inhibidor de β-lactamasas 	 </Link>
      <Link to="/farmacos/macrolidos" className='bar-button' > Macrólidos	  </Link>
      <Link to="/farmacos/cefalosporinas" className='bar-button' > Cefalosporinas  </Link>
      <Link to="/farmacos/fluoroquinolonas" className='bar-button' > Fluoroquinolonas </Link>
      <Link to="/farmacos/tetraciclinas" className='bar-button' > Tetraciclinas </Link>

 
    </div>

    );
};

export default NavBarAntibioticosRespiratorios;