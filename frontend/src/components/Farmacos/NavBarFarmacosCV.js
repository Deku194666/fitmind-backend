

import { Link } from 'react-router-dom';
 
const NavBarFarmacosCV = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/antihipertensivos" className='bar-button'> Antihipertensivos  </Link>
      <Link to="/farmacos/antiarritmicos" className='bar-button' > Antiarrítmicos  </Link>
      <Link to="/farmacos/anticoagulantes" className='bar-button' > Anticoagulantes </Link>
      <Link to="/farmacos/antiagregantes" className='bar-button' > Antiagregantes Plaquetarios </Link>
      <Link to="/farmacos/hipolipemiantes" className='bar-button' > Hipolipemiantes  </Link>
      <Link to="/farmacos/farmacosic" className='bar-button' > Farmacos para Insuficiencia Cardiaca  </Link>

      
    </div>

    );
};

export default NavBarFarmacosCV;