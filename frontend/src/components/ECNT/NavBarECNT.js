


import { Link } from 'react-router-dom';
 
const NavBarECNT = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ecnt/cardiovascularesecnt" className='bar-button'> Enfermedades CardioVasculares </Link>
      <Link to="/ecnt/respiecnt " className='bar-button'> Enfermedades Pulmonares </Link>
      <Link to="/ecnt/metabolicasecnt" className='bar-button'> Enfermedades Metabolicas  </Link>
      <Link to="/ecnt/neurodegenerativasecnt" className='bar-button' > Enfermedades Cerebrales </Link>
 
    </div>

    );
};

export default NavBarECNT;