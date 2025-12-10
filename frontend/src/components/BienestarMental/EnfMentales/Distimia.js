


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Distimia() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Distimia (Trastorno Depresivo Persistente)  </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  La <strong> Distimia </strong> es un trastorno depresivo crónico que afecta al 3-6% de la población. Se caracteriza por un estado 
        de ánimo deprimido persistente (≥2 años), menos intenso que la depresión mayor pero más prolongado. Muchos pacientes describen 
        sentirse "siempre así", lo que dificulta su identificación y tratamiento oportuno. </p>
        
      <p className='p14'>  🧠  Tipos de Distimia </p>
      <p className='p16'> 📌 Distimia Típica:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Síntomas depresivos leves pero constantes.  </li>
        <li> Duración ≥2 años en adultos (1 año en adolescentes).     </li>
      </ul>
 
      <p className='p16'> 📌 Distimia con Depresión Mayor Superpuesta:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Episodios de depresión mayor que ocurren sobre la distimia base.     </li>
        <li>  Conocida como "depresión doble".   </li>
       </ul>
 



      <p className='p14'>   🧬Fisiopatología    </p>
      <p className='p150'>  El cerebro con distimia muestra: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Desequilibrio neuroquímico:  </strong> Serotonina ↓ (similar a depresión mayor pero menos intenso), Noradrenalina ↓ (afecta energía y motivación).  </li>
        <li> <strong> Cambios estructurales: </strong> Reducción moderada del hipocampo,  Menor actividad en la corteza prefrontal.  </li>
      </ul>

      <p className='p14'> 📌 Factores de Riesgo </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Biológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Psicológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ambientales  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia familiar de depresión </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Baja autoestima </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Negligencia emocional en infancia  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedades crónicas	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aislamiento social prolongado </td>
    </tr>
 
  </tbody>
</table>


       <p className='p14'> 🚨 Síntomas Clave (DSM-5)  </p>
      <p className='p16'> 💡 Requisito: Estado de ánimo deprimido la mayor parte del día, durante ≥2 años </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Pérdida de apetito o sobrealimentación. </li>
        <li> • Insomnio o hipersomnia. </li>
        <li> • Falta de energía o fatiga. </li>
        <li> • Baja autoestima. </li>
        <li> • Dificultades de concentración. </li>
        <li> • Sentimientos de desesperanza.  </li>
      </ul>

        <p className='p14'> 🩺 Diagnóstico </p>
        <p className='p16'> 1. Evaluación Clínica: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Entrevista estructurada.  </li>
        <li> <strong> • Escalas: </strong>  PHQ-9 (para depresión), Escala de Depresión de Hamilton.  </li>
       </ul>

        <p className='p16'> 2. Diagnóstico Diferencial:  </p>

    <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Diferencias </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Depresión Mayor		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Episodios más intensos pero menos duraderos   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trastorno de Adaptación	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relacionado con un evento estresante específico   </td>
    </tr>
 
  </tbody>
</table>

 <p className='p16'>  3. Exámenes Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Analítica: </strong> hormonas tiroideas, vitamina D   </li>
        <li>  <strong> Neuroimagen: </strong> en casos resistentes  </li>
      </ul>


  
      <p className='p14'>  💊 Tratamiento Médico  </p>
      <p className='p16'> 🔴 Farmacológico:  </p>
      
        <ul className='p17' style={{ listStyleType: 'disc'}} >
        <li> • <strong> ISRS: </strong>  Sertralina, Escitalopram </li>
        <li> <strong> • Bupropión: </strong>  Para fatiga y falta de motivación.  </li>
       </ul>

      <p className='p16'> 🟢 No Farmacológico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Terapia Cognitivo-Conductual (TCC):   </strong>  Reestructuración de pensamientos negativos, Activación conductual gradual. </li>
        <li> <strong> Mindfulness: </strong>  Reducción del estrés basado en atención plena.  </li>
       </ul>
   
 

      <p className='p14'>  🌱 Prevención y Manejo </p>
      <p className='p16'> 🟢 Rutinas Saludables:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Ejercicio regular (aumenta BDNF).  </li>
        <li> Higiene del sueño.   </li>
        <li> Exposición a luz solar.   </li>
      </ul>
        <p className='p16'> 🧘‍♂️Técnicas de Autogestión:   </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Diario de emociones.   </li>
        <li> Lista de actividades placenteras.   </li>
      </ul>
        <p className='p16'> 🚨Señales de Alerta:   </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Aislamiento social repentino.   </li>
        <li> Abandono de responsabilidades. </li>
       </ul>
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> La <strong> Distimia </strong> aunque menos intensa que la depresión mayor, es igualmente discapacitante por su naturaleza crónica,
         llegando a normalizarse como parte de la personalidad. Sin embargo, es tratable: la combinación de terapia cognitivo-conductual,
         medicación cuando sea necesaria y cambios en el estilo de vida puede disipar esa "niebla emocional" persistente. El proceso 
         requiere paciencia (por su cronicidad), pero la recuperación es posible, permitiendo redescubrir la capacidad de disfrutar la vida. 
         Lo crucial es buscar ayuda profesional y entender que ese estado no define la identidad, sino que es una condición médica manejable. </p>
         
    </div>
    
  );
}

export default Distimia;