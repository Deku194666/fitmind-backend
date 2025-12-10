

// src/components/ECNT.js


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarExamen from './NavBarExamen';
import './Examenes.css';


function Examenes() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarExamen />
      <p className='p13'> Exámenes Médicos: </p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> Los <strong> Exámenes Médicos </strong> son herramientas fundamentales para evaluar el estado de salud de una persona,
        diagnosticar enfermedades y monitorear tratamientos. A través de diversas pruebas desde análisis de sangre hasta estudios 
        por imágenes los profesionales de la salud pueden detectar alteraciones en el cuerpo, muchas veces antes de que aparezcan
        síntomas visibles. Esta sección tiene como objetivo ayudarte a conocer los distintos tipos de exámenes, su utilidad y 
        cómo pueden aportar datos clave para tu bienestar.</p>
      <p className='p14'> Exámenes 🧬 </p>
      <p className='p150'> En esta sección encontraras los tipos de exámenes que hay para el diagnostico y tratamiento de enfermedades, 
      como examenes de laboratorio, que incluyen distintos examenes de sangre, como <Link to="/examenes2/hemograma"> Hemograma</Link>,
      <Link to="/examenes2/perfillipidico"> Perfil Lipidico</Link>, <Link to="/examenes2/glicemia"> Glicemia</Link>, Examenes de orina, entre otros. Tambien encontraras los distintos tipos de examenes imagenologicos, 
      estos incluyen la <Link to="/examenes/radiografia"> Radiografia</Link>, <Link to="/examenes/ecografia"> Ecografía</Link>,
      <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica</Link> entre otros.</p>
    </div>  
  );
}

export default Examenes;

