

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Depresion() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Depresión  </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  La <strong>  Depresión  </strong> es un trastorno del estado de ánimo incapacitante que afecta a más de 280 millones 
        de personas en el mundo (OMS). No es solo "estar triste", sino una condición médica seria caracterizada por alteraciones
        neuroquímicas demostrables y cambios estructurales en el cerebro. Es la principal causa de discapacidad global y puede aparecer 
        a cualquier edad, aunque es más frecuente entre los 20-40 años. </p>
        
      <p className='p14'>  🧠 Tipos de Depresión </p>
      <p className='p16'> 📌 Depresión Mayor Típica: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Episodios de ≥2 semanas con síntomas graves. </li>
        <li>Puede ser recurrente.</li>
      </ul>
 
      <p className='p16'> 📌 Depresión Melancólica: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Pérdida de placer en todas las actividades.   </li>
        <li>  Empeoramiento matutino.  </li>
      </ul>

      <p className='p16'> 📌 Depresión Atípica: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Reactividad emocional (mejora con eventos positivos).  </li>
        <li> Aumento de apetito/sueño.  </li>
      </ul>

      <p className='p16'> 📌 Depresión Psicótica:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Presencia de delirios o alucinaciones. </li>
      </ul>


      <p className='p14'>   🧬Fisiopatología    </p>
      <p className='p150'>  El cerebro deprimido muestra: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Desequilibrio neuroquímico:  </strong> Serotonina ↓ (regula ánimo), Noradrenalina ↓ (energía), Dopamina ↓ (motivación) </li>
        <li> <strong> Cambios estructurales: </strong> Hipocampo reducido (memoria), Corteza prefrontal menos activa (toma de decisiones). </li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia familiar	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Baja autoestima </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estrés crónico </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones hormonales	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trauma infantil  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedades crónicas	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pensamiento rígido	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aislamiento social  </td>
    </tr>
  </tbody>
</table>


       <p className='p14'> 🚨 Síntomas Clave (DSM-5)  </p>
      <p className='p16'> 💡 Requisito: 5+ síntomas por ≥2 semanas: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Estado de ánimo depresivo casi todo el día.  </li>
        <li> • Pérdida de interés en actividades placenteras.  </li>
        <li> • Cambios de peso/apetito (↑ o ↓). </li>
        <li> • Insomnio o hipersomnia. </li>
        <li> • Agitación o enlentecimiento psicomotor. </li>
        <li> • Fatiga constante.  </li>
        <li> • Sentimientos de inutilidad o culpa excesiva. </li>
        <li> • Disminución de la concentración. </li>
        <li> • Pensamientos recurrentes de muerte. </li>
      </ul>

        <p className='p14'> 🩺 Diagnóstico </p>
        <p className='p16'> 1. Evaluación Clínica: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Entrevista estructurada (PHQ-9).  </li>
        <li> • Descarte de causas médicas (hipotiroidismo, etc.).  </li>
      </ul>

        <p className='p16'> 2. Escalas Validadas:  </p>

    <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Test </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Qué Mide </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Puntaje   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> PHQ-9	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Severidad	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-27 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hamilton </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas físicos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-52  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Beck </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pensamientos negativos	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-63   </td>
    </tr>
  </tbody>
</table>

 <p className='p16'>  3. Exámenes Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Analítica sanguínea: </strong> hormonas tiroideas, vitamina D   </li>
        <li>  <strong> Neuroimagen: </strong> en casos resistentes  </li>
      </ul>


  
      <p className='p14'>  💊 Tratamiento Médico  </p>
      <p className='p16'> 🔴 Farmacológico:  </p>
      
    <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Mecanismo   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ISRS </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Fluoxetina, Sertralina		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IRSN </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Venlafaxina, Duloxetina	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina + Noradrenalina </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Atípicos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bupropión	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Dopamina    </td>
    </tr>
  </tbody>
</table>
 

      <p className='p16'> 🟢 No Farmacológico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Terapia Cognitivo-Conductual (TCC): </strong>  Reestructuración de pensamientos, Activación conductual.  </li>
        <li> <strong> Mindfulness: </strong> 8 semanas de reducción de estrés. </li>
        <li> <strong> Estimulación Magnética Transcraneal (rTMS): </strong>  Para casos resistentes. </li>
      </ul>
   
 

      <p className='p14'>  🌱 Prevención y Manejo </p>
      <p className='p16'> 🟢 Rutinas Saludables: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Ejercicio aeróbico (aumenta BDNF). </li>
        <li> Higiene del sueño.  </li>
        <li>  Exposición a luz solar. </li>
      </ul>
        <p className='p16'> 🧘‍♂️ Técnicas de Autogestión:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Diario de emociones.  </li>
        <li> Lista de actividades placenteras.   </li>
      </ul>
        <p className='p16'> 🚨 Señales de Alerta:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Aislamiento social repentino.  </li>
        <li> Abandono de responsabilidades.  </li>
       </ul>
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> La <strong> Depresión </strong>  es un trastorno complejo con bases biológicas, psicológicas y sociales que requiere 
        un abordaje integral. No es una debilidad personal, sino una condición médica tratable con intervenciones basadas en evidencia.
         La combinación de terapia farmacológica, psicológica y cambios en el estilo de vida ha demostrado ser altamente efectiva para
         la mayoría de los pacientes.  </p>
        <p className='p150'> La educación sobre salud mental y la eliminación de estigmas son esenciales para que las personas busquen
             ayuda oportunamente. Con el apoyo adecuado, es posible recuperar la calidad de vida y el funcionamiento pleno.  </p>
    </div>
    
  );
}

export default Depresion;