


import { Link } from 'react-router-dom';
 
const NavBarLesTendones = () => {

    return ( 
    
    <div className="secondary-bar">
 
      <Link to="/ejercicio/lesiones/tendinopatiacadera" className='bar-button' > Lesiones Tendinosas Cadera  </Link>            
      <Link to="/ejercicio/lesiones/tendinopatiarodilla" className='bar-button' > Lesiones Tendinosas Rodilla </Link>
      <Link to="/ejercicio/lesiones/tendinopatiatobpiededos" className='bar-button' > Lesiones Tendinosas Tobillo-Pie-Dedos </Link>
      <Link to="/ejercicio/lesiones/tendinopatiahombro" className='bar-button'> Lesiones Tendinosas Hombro </Link> 
  
    </div>

    );
};

export default NavBarLesTendones;