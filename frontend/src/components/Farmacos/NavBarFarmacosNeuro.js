




import { Link } from 'react-router-dom';
 
const NavBarFarmacosNeuro = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/farmacos/antiepilepticos" className='bar-button'> Antiepilépticos  </Link>
      <Link to="/farmacos/antiparkinsonianos" className='bar-button' > Antiparkinsonianos </Link>
      <Link to="/farmacos/em" className='bar-button' > Para Esclerosis Múltiple (EM)  </Link>
      <Link to="/farmacos/migraña" className='bar-button' > Para Migraña </Link>
      <Link to="/farmacos/dolorneuropatico" className='bar-button' > Para Dolor Neuropático </Link>
      <Link to="/farmacos/farmacosneuromusculares" className='bar-button' > Para Enfermedades Neuromusculares </Link>
      
    </div>

    );
};

export default NavBarFarmacosNeuro;