





import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
 

function Lab() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Exámenes de Laboratorio </p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> Los <strong>  Exámenes de Laboratorio </strong>  son herramientas fundamentales para evaluar el estado de salud de una persona,
        diagnosticar enfermedades y monitorear tratamientos. A través de diversas pruebas desde análisis de sangre hasta estudios 
        por imágenes los profesionales de la salud pueden detectar alteraciones en el cuerpo, muchas veces antes de que aparezcan
        síntomas visibles. Esta sección tiene como objetivo ayudarte a conocer los distintos tipos de exámenes, su utilidad y 
        cómo pueden aportar datos clave para tu bienestar.</p>
        
        <p className='p14'> Exámenes de Laboratorio🧬 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <Link to="/examenes2/hemograma"> Hemograma: </Link> mide componentes de la sangre como glóbulos rojos, blancos y plaquetas. </li>
        <li> 📌 <Link to="/examenes2/perfillipidico"> Perfil Lipidico: </Link>   evalúa niveles de colesterol total, HDL, LDL y triglicéridos. </li>
        <li> 📌 <Link to="/examenes2/glicemia"> Glicemia: </Link> indica el nivel de azúcar y es clave para diagnosticar diabetes. </li>
        <li> 📌 <strong> Función hepática y renal: </strong> analiza enzimas, creatinina, urea, entre otros. </li>
      </ul>
      
     

    </div>
    
  );
}

export default Lab;
