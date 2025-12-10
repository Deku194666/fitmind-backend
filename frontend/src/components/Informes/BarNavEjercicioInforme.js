


 import React from 'react';
 import { Link } from 'react-router-dom';

const BarNavEjercicioInforme = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroejercicio/registromusculacion" className='bar-button'>Musculación</Link>
    <Link to="/registroejercicio/registrotrote" className='bar-button'>Trote</Link>
    <Link to="/registroejercicio/registrocorrer" className='bar-button' > Correr  </Link>  
    <Link to="/registroejercicio/registrocaminar" className='bar-button' > Caminata  </Link>       
    <Link to="/registroejercicio/registrosprint" className='bar-button' > Sprints  </Link>            
     
          
 

  </div>

  );
};

export default BarNavEjercicioInforme;