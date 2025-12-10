

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './RNM.css';

function RNM() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Resonancia Nuclear Magnetica (RNM)</p>
      <img src="https://privaclinic.com/wp-content/uploads/2022/03/privaclinic-resonancia-magnetica-en-hospitalet.jpg" className="imagen-derecha" alt="Radiografía" />
      <p className='p14'>Introducción</p>
      <p className='p150'>  La <strong> Resonancia Nuclear Magnética (RNM)</strong>, también conocida como Imagen por Resonancia Magnética (IRM), 
      es una técnica de diagnóstico por imágenes no invasiva que utiliza campos magnéticos y ondas de radio para generar imágenes detalladas 
      de los órganos y tejidos del cuerpo. Es una herramienta esencial en la medicina moderna, especialmente para evaluar el cerebro,
      la columna vertebral, las articulaciones y los tejidos blandos. A diferencia de los rayos X o la <Link to="/examenes/tc"> Tomografia Computarizada (TC) </Link> 
      la <strong> RNM </strong> no utiliza radiación ionizante, lo que la hace más segura para pacientes que requieren múltiples estudios.</p>
        
      <p className='p14'>  📜 Historia de la Resonancia Magnética  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1938: </strong> El físico Isidor Rabi describe el fenómeno de la resonancia magnética nuclear, sentando las bases teóricas. </li>
        <li> <strong> 1946: </strong> Felix Bloch (Universidad de Stanford) y Edward Purcell (Harvard) demuestran la RMN en materia condensada, ganando el Premio Nobel de Física en 1952. </li>
        <li> <strong> 1980s: </strong> Se comercializan los primeros escáneres de <strong> RNM </strong> para uso clínico.</li>
        <li> <strong> Actualidad: </strong> La tecnología ha evolucionado con equipos de alto campo (3 Tesla) y técnicas avanzadas como la RNM funcional (fMRI).</li>
      </ul>


  
      <p className='p14'>  🔍 ¿Cómo Funciona la RNM? </p>
      <p className='p150'> La <strong> RNM </strong>se basa en las propiedades magnéticas de los átomos de hidrógeno (presentes en el agua y grasas del cuerpo). El proceso incluye:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Campo magnético fuerte:  </strong> El paciente se introduce en un imán que alinea los protones de hidrógeno.  </li>
        <li> <strong> Ondas de radio:  </strong> Se emiten pulsos que alteran la alineación de los protones.   </li>
        <li> <strong> Señal de resonancia:  </strong> Al volver a su estado original, los protones emiten señales que son captadas por antenas.  </li>
        <li> <strong> Reconstrucción de imágenes:  </strong> Una computadora procesa las señales y genera imágenes en 2D o 3D.  </li>
      </ul>
      
      <p className='p14'>  🏥 Usos y Aplicaciones de la RNM </p>
      <p className='p150'> La <strong> RNM </strong> se utiliza para diagnosticar y monitorear múltiples condiciones médicas:  </p>
      <p className='p16'> 📌 1. Neurología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/acv"> Accidente Cerebro Vascular  (ACV). </Link>  </li>
        <li> Tumores cerebrales. </li>
        <li> Esclerosis múltiple. </li>
        <li> Hernias discales. </li>
      </ul>

      <p className='p16'> 📌 2.  Cardiología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Malformaciones cardíacas. </li>
        <li> <Link to="/ecnt/iam"> Infarto Agudo de Miocardio  (IAM).  </Link> </li>
        <li> Evaluación de función cardíaca. </li>
      </ul>

      <p className='p16'> 📌 3. Oncología  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Detectar y estadificar tumores. </li>
        <li> Monitorizar respuesta a quimioterapia. </li>
      </ul>

      <p className='p16'> 📌 4. Traumatología y Reumatología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Lesiones de ligamentos (rodilla, hombro). </li>
        <li> Artritis y daño articular.  </li>
      </ul>

      <p className='p16'> 📌 5. Abdomen y Pelvis  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Tumores hepáticos o pancreáticos. </li>
        <li> Enfermedades inflamatorias intestinales. </li>
      </ul>


   
      <p className='p14'> ✅ Ventajas de la RNM </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🌟 No usa radiación ionizante. </li>
        <li> 🌟 Imágenes de alta resolución en tejidos blandos. </li> 
        <li> 🌟 Permite estudios funcionales (fMRI, espectroscopia). </li> 
      </ul>

      <p className='p14'> ❌ Desventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Coste elevado en comparación con <Link to="/examenes/tc"> Tomografia Computarizada (TC) </Link>  o <Link to="/examenes/radiografia"> Radiografia (Rx). </Link>  </li>
        <li> ⚠️ Tiempo prolongado (30-60 minutos por estudio). </li> 
        <li> ⚠️ Incomodidad para pacientes claustrofóbicos. </li> 
      </ul>

      <p className='p14'> Contraindicaciones </p>
      <p className='p16'> ❌ No apta para personas con:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Marcapasos o implantes metálicos (riesgo de desplazamiento). </li>
        <li> Claustrofobia severa (aunque existen equipos abiertos).  </li>
        <li> Embarazo (primer trimestre, salvo emergencias). </li>
      </ul>
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Resonancia Nuclear Magnetica (RNM)  </strong> es una de las tecnologías más avanzadas en diagnóstico médico, 
      con aplicaciones que van desde la neurología hasta la oncología. Su capacidad para generar imágenes detalladas sin radiación la 
      convierte en una opción segura para muchos pacientes. Aunque tiene limitaciones (como su costo y duración), su precisión la hace 
      indispensable en la medicina moderna. Futuros avances, como la inteligencia artificial en interpretación de imágenes, prometen
      hacerla aún más eficiente. </p>
    </div>
    
  );
}

export default RNM;