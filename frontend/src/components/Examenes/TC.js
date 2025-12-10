
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './TC.css';

function TC() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Tomografia Computarizada (TC)</p>
      <img src="https://www.nibib.nih.gov/sites/default/files/inline-images/CT-Patient-400x276_0.jpg" className="imagen-derecha" alt="Radiografía" />
      <p className='p14'>Introducción</p>
      <p className='p150'> La <strong>  Tomografía Computarizada (TC),   </strong> también conocida como escáner CT (por sus siglas en inglés Computed Tomography), 
        es una técnica de diagnóstico por imagen que combina rayos X con procesamiento computarizado para generar imágenes transversales
        (en "rebanadas") del cuerpo. Ofrece mayor detalle que las radiografías convencionales, permitiendo visualizar huesos, órganos internos,
        vasos sanguíneos y tejidos blandos con alta precisión. Es esencial en emergencias, oncología y neurología.</p>
        
      <p className='p14'>  📜 Historia de la Tomografía Computarizada </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1967: </strong> Godfrey Hounsfield (Ingeniero británico) desarrolla el primer prototipo de TC. </li>
        <li> <strong> 1971: </strong> Primera TC clínica en un hospital de Londres (para imágenes cerebrales). </li>
        <li> <strong> 1979: </strong> Hounsfield y Allan Cormack (físico) ganan el Premio Nobel de Medicina por su contribución. </li>
        <li> <strong> 1980s-1990s: </strong> Avances en velocidad y resolución (TC helicoidal).  </li>
        <li> <strong> 2000s-presente: </strong> TC multidetector (hasta 640 cortes), reducción de dosis de radiación y reconstrucciones 3D.  </li>
      </ul>


  
      <p className='p14'>  🔍 ¿Cómo Funciona la TC? </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Emisión de rayos X: </strong> Un tubo rotatorio emite haces de rayos X desde múltiples ángulos.  </li>
        <li> <strong> Detectores: </strong> Miden la absorción de radiación por los tejidos (en unidades Hounsfield).   </li>
        <li> <strong> Reconstrucción computarizada:  </strong> Algoritmos generan imágenes en 2D (axiales) o 3D.  </li>
        <li> <strong> Contraste (opcional): </strong> Medios yodados intravenosos resaltan vasos sanguíneos o tumores. </li>
      </ul>
      
      <p className='p14'>  🏥 Usos y Aplicaciones de la TC </p>
      <p className='p16'> 📌 1. Neurología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/acv"> Accidente Cerebro Vascular</Link>.  </li>
        <li> Tumores cerebrales. </li>
        <li> <strong> Traumatismos craneoencefálicos (TEC)</strong>. </li>
      </ul>

      <p className='p16'> 📌 2. Emergencias </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Traumas múltiples (politraumatizados). </li>
        <li> Hemorragias internas. </li>
        <li> Fracturas complejas (columna, pelvis). </li>
      </ul>

      <p className='p16'> 📌 3. Oncología  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Detección y estadificación de cáncer (pulmón, hígado, páncreas). </li>
        <li> Guía para biopsias. </li>
      </ul>

      <p className='p16'> 📌 4. Cardiología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Angio-TC coronaria (evaluación de arterias). </li>
        <li> Cálculo de calcio coronario. </li>
      </ul>

      <p className='p16'> 📌 5. Abdomen y Pelvis  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Apendicitis, diverticulitis. </li>
        <li> Cálculos renales. </li>
        <li> Aneurismas aórticos. </li>
      </ul>



   
      <p className='p14'> ✅ Ventajas de la TC </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🌟 Imágenes detalladas en segundos. </li>
        <li> 🌟 Excelente para estructuras óseas y vasculares. </li> 
        <li> 🌟 Guía procedimientos intervencionistas. </li> 
      </ul>

      <p className='p14'> ❌ Desventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Radiación ionizante (mayor que la <Link to="/examenes/radiografia"> radiografia </Link>convencional).  </li>
        <li> ⚠️ Costo elevado vs. <Link to="/examenes/radiografia"> radiografia </Link> simple. </li> 
        <li> ⚠️ Artificios metálicos (implantes pueden distorsionar imágenes). </li> 
      </ul>

      <p className='p14'> Contraindicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ❌ Embarazo (riesgo de radiación al feto). </li>
        <li> ❌ Alergia al contraste yodado (en estudios con medio de contraste).</li>
        <li> ❌ Insuficiencia renal (el contraste puede ser nefrotóxico).</li>
      </ul>
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Tomografia Computarizada  </strong> es una herramienta diagnóstica poderosa que equilibra velocidad, precisión y accesibilidad.
        Aunque implica exposición a radiación, sus beneficios en diagnósticos urgentes y planificación terapéutica la hacen indispensable.
        Los avances en <strong> Tomografia Computarizada </strong> de baja dosis y reconstrucciones 3D continúan expandiendo sus aplicaciones, manteniéndola como pilar de la 
        imagenología moderna. </p>
    </div>
    
  );
}

export default TC;
