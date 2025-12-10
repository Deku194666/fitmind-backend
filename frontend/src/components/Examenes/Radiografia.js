

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Radiografia.css';

function Radiografia() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Radiografia (Rx) </p>
      <img src="https://i.blogs.es/4e7a0c/xray/1366_2000.jpg" className="imagen-derecha" alt="Radiografía" />
      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>  La <strong> Radiografía </strong>convencional es una de las técnicas de diagnóstico por imagen más antiguas y ampliamente utilizadas 
        en medicina. Mediante el uso de rayos X, permite visualizar estructuras internas del cuerpo, especialmente huesos y algunos tejidos 
        blandos, de forma rápida y no invasiva. Sigue siendo fundamental en el diagnóstico inicial de fracturas, infecciones 
        pulmonares y muchas otras condiciones médicas. Al lado derecho se ve la primera <strong> Radiografía </strong>  tomada por Wihelm Roentgen a su esposa, en 1895.  </p>
        
      <p className='p14'>  📜 Historia de la Radiografía  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1895: </strong>  Wilhelm Conrad Röntgen descubre los rayos X (Premio Nobel de Física en 1901). </li>
        <li> <strong> 1896: </strong>  Primera radiografía médica (mano de la esposa de Röntgen). </li>
        <li> <strong> Primera mitad del siglo XX: </strong>  Uso masivo en medicina y industria.  </li>
        <li> <strong> 1950s-1980s: </strong> Desarrollo de técnicas de contraste (bario, yodo). </li>
        <li> <strong> 1990s-presente: </strong> Transición a sistemas digitales (CR y DR).</li>
      </ul>


  
      <p className='p14'>  🔍 ¿Cómo Funciona? </p>
      <p className='p150'> <strong> 1) Generación de rayos X: </strong>  Tubo de rayos X emite radiación ionizante. </p>
      <p className='p150'> <strong>  2) Atravesamiento del cuerpo: </strong>  Los tejidos absorben radiación según su densidad. </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Huesos (blanco):  </strong> Alta absorción.  </li>
        <li> <strong> Tejidos blandos (gris): </strong>Media absorción.  </li>
        <li> <strong> Aire (negro): </strong> Baja absorción. </li>
      </ul>
    <p className='p150'> <strong> 3) Captación de la imagen: </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Analógica:  </strong> Película radiográfica.  </li>
        <li> <strong> Digital (CR/DR): </strong> Detectores electrónicos.  </li>
      </ul>
      
      <p className='p14'>  🏥 Usos Principales </p>
      <p className='p16'> 📌 1. Traumatología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Fracturas óseas. </li>
        <li> Luxaciones articulares. </li>
        <li> Detección de cuerpos extraños. </li>
      </ul>

      <p className='p16'> 📌 2. Neumología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Neumonía. </li>
        <li> Tuberculosis. </li>
        <li> Neumotórax. </li>
      </ul>

      <p className='p16'> 📌 3. Odontología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Caries. </li>
        <li> Infecciones dentales. </li>
        <li> Planificación de implantes. </li>
      </ul>

      <p className='p16'> 📌 4. Abdomen </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Cálculos renales. </li>
        <li> Obstrucción intestinal. </li>
        <li> Perforaciones (aire libre). </li>
      </ul>

      <p className='p16'> 📌 5. Otras Aplicaciones  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Mamografía (versión especializada para mama). </li>
        <li> Estudios con contraste (tránsito intestinal, urografía). </li>
      </ul>


      <p className='p14'> ✅ Ventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🌟 Rápida (segundos-minutos). </li>
        <li> 🌟 Ampliamente disponible y costo-efectiva. </li> 
        <li> 🌟 Óptima para estructuras óseas. </li> 
      </ul>

      <p className='p14'> ❌ Desventajas </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Radiación ionizante (aunque en dosis bajas). </li>
        <li> ⚠️Limitada para tejidos blandos (mejor evaluados con <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica </Link>/
        <Link to="/examenes/tc"> Tomografia Computarizada </Link>). </li> 
        <li> ⚠️ Superposición de estructuras (imágenes 2D). </li> 
      </ul>

      <p className='p14'> Contraindicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ❌ Embarazo (especialmente primer trimestre). </li>
        <li> ❌ Uso repetido innecesario (riesgo acumulativo de radiación). </li>
      </ul>


      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Radiografía </strong> convencional sigue siendo pilar fundamental en el diagnóstico médico, especialmente en urgencias y
        patología ósea. Aunque tecnologías como la <Link to="/examenes/tc"> Tomografia Computarizada </Link>  y <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica </Link>ofrecen mayor detalle, su accesibilidad, velocidad y bajo costo la mantienen
        como primer paso en la evaluación imagenológica. Los avances en radiografía digital han mejorado su resolución y reducido la dosis 
        de radiación, asegurando su relevancia en la era moderna. Su uso juicioso, combinado con otras modalidades cuando sea necesario,
        optimiza el diagnóstico y cuidado del paciente.</p>
    </div>
    
  );
}

export default Radiografia;
