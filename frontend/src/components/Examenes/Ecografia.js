


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Ecografia.css';

function Ecografia() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Ecografía (Ultrasonido) </p>
      <img src="https://www.drgdiaz.com/eco/ecografia/ecografo.jpg" className="imagen-derecha" alt="Radiografía" />
      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>  La <strong> Ecografía </strong> (también llamada ultrasonografía o sonografía) es una técnica de diagnóstico por imagen no invasiva, 
        segura y accesible que utiliza ondas sonoras de alta frecuencia (ultrasonidos) para visualizar estructuras internas del cuerpo en 
        tiempo real. Es ampliamente utilizada en obstetricia, cardiología, abdomen y emergencias, destacando por su ausencia de radiación 
        ionizante.  </p>
        
      <p className='p14'>  📜 Historia de la Ecografía </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1794: </strong>  Lazzaro Spallanzani estudia la ecolocalización en murciélagos (base física del ultrasonido). </li>
        <li> <strong> 1940s-1950s: </strong> Desarrollo de aplicaciones médicas (Karl Dussik en Austria y John Wild en EE.UU.). </li>
        <li> <strong> 1958: </strong>  Primer ecógrafo comercial (para ginecología).  </li>
        <li> <strong> 1960s-1970s: </strong> Avances en modo-B (imágenes bidimensionales). </li>
        <li> <strong> 1980s-presente: </strong> Doppler color, ecografía 3D/4D y portátiles (pocket ultrasound). </li>
      </ul>


  
      <p className='p14'>  🔍 ¿Cómo Funciona? </p>
      <p className='p150'> <strong>  1) Emisión de ultrasonidos: </strong> Un transductor emite ondas sonoras (2-18 MHz). </p>
      <p className='p150'> <strong>  2) Reflexión de ondas: </strong>  Los ecos rebotan en tejidos según su densidad.    </p>
      <p className='p150'> <strong>  3) Recepción y procesamiento: </strong>  El transductor capta los ecos y una computadora los convierte en imágenes.   </p>
      <p className='p150'> <strong>  4) Modos de visualización: </strong>  </p>  
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Modo-B (brillo):  </strong>  Imágenes anatómicas en 2D.  </li>
        <li> <strong> Doppler: </strong>  Evalúa flujo sanguíneo (color o espectral).   </li>
      </ul>

      
      <p className='p14'>  🏥 Usos y Aplicaciones Principales </p>
      <p className='p16'> 📌 1. Obstetricia y Ginecología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Control prenatal (monitoreo fetal, sexo, malformaciones). </li>
        <li> Embarazo ectópico. </li>
        <li> Ovarios y útero (quistes, miomas). </li>
      </ul>

      <p className='p16'> 📌 2. Abdomen</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Hígado, vesícula biliar (cálculos, cirrosis).  </li>
        <li> Riñones (quistes, tumores, hidronefrosis).  </li>
        <li> Páncreas y bazo.  </li>
      </ul>

      <p className='p16'> 📌 3. Cardiología  <Link to="/examenes/ecg">  (Ecocardiograma)</Link>  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Función cardíaca (eyección ventricular). </li>
        <li> Valvulopatías.  </li>
        <li> Derrames pericárdicos.  </li>
      </ul>

      <p className='p16'> 📌 4. Partes Blandas y Musculoesqueléticas  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Tiroides (nódulos). </li>
        <li> Mamas (complemento a mamografía).  </li>
        <li> Tendones y músculos (roturas, hematomas).  </li>
      </ul>

      <p className='p16'> 📌 5. Procedimientos Guiados   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Biopsias.  </li>
        <li> Drenaje de abscesos.  </li>
        <li> Bloqueos nerviosos.   </li>
      </ul>


      <p className='p14'> ✅ Ventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🌟 <strong> Segura: </strong> Sin radiación ionizante (ideal para embarazadas y niños).  </li>
        <li> 🌟 <strong> Tiempo real: </strong> Visualización de movimiento (ej.: latidos fetales).  </li> 
        <li> 🌟 <strong> Portátil y accesible: </strong> Equipos móviles para urgencias. </li>
        <li> 🌟 Económica vs. otras técnicas de imagen. </li> 
      </ul>

      <p className='p14'> ❌ Desventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Resolución limitada vs. <Link to="/examenes/tc"> 📌 Tomografia Computarizada (TC) </Link> o <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica (RNM) </Link> (en tejidos profundos).  </li>
        <li> ⚠️ Artificios por gas intestinal o calcificaciones. </li> 
      </ul>

      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Ecografía </strong> es una herramienta diagnóstica versátil y segura, fundamental en medicina moderna. 
        Su aplicación en obstetricia, emergencias y procedimientos guiados la hace insustituible. Los avances en elastografía, 
        contraste ecográfico y dispositivos portátiles están expandiendo sus usos, promoviendo la medicina point-of-care (POCUS).</p>
    </div>
    
  );
}

export default Ecografia;

