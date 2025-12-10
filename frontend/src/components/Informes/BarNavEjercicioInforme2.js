



 import React from 'react';
 import { Link } from 'react-router-dom';


const BarNavEjercicioInforme2 = () => {
  return (
    <div className="tertiary-bar">
      <Link   className='bar-button'  to="/registroejercicio/registronadar"  >  Nadar </Link>
      <Link className='bar-button'   to="/registroejercicio/registroboxeodesaco"> Boxeo de Saco  </Link>
      <Link to="/registroejercicio/registrobicicleta" className="bar-button">   Bicicleta  </Link>
      

    </div>
  );
};

export default BarNavEjercicioInforme2;





