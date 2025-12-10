



import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TAG() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno de Ansiedad Generalizada (TAG)  </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  El <strong>TAG</strong> es un trastorno de ansiedad caracterizado por preocupación excesiva y persistente (≥6 meses) sobre 
        diversos aspectos de la vida (salud, trabajo, relaciones), incluso sin motivos reales. Afecta al 3-5% de la población mundial (OMS)
        y es más común en mujeres. A diferencia del estrés normal, el TAG interfiere severamente en la vida diaria y se acompaña de 
        síntomas físicos. </p>
        
      <p className='p14'>  🧠 Tipos de Ansiedad Relacionados </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> TAG puro: </strong> Preocupación crónica sin desencadenantes específicos. </li>
        <li> <strong>  TAG + somatización: </strong>  Ansiedad con síntomas físicos predominantes (dolor, fatiga). </li>
        <li> <strong> TAG comórbido: </strong> Asociado a depresión u otros trastornos de ansiedad.  </li>
      </ul>


      <p className='p14'>   🧬Fisiopatología    </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Desequilibrio neuroquímico:  </strong> GABA ↓ (neurotransmisor calmante), Noradrenalina y serotonina alteradas. </li>
        <li> <strong> Hiperactividad cerebral:  </strong> Amígdala (miedo) sobreactivada, Corteza prefrontal (regulación emocional) menos eficiente. </li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (30-50% herencia)		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Perfeccionismo	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estrés crónico (laboral, familiar) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones en el eje HPA (cortisol)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Intolerancia a la incertidumbre		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trauma infantil  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedades crónicas (tiroides) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sesgo atencional (hacia amenazas) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Acontecimientos vitales estresantes</td>
    </tr>
  </tbody>
</table>


       <p className='p14'> 🚨 Síntomas Clave (DSM-5)  </p>
      <p className='p16'> 💡 Criterios diagnósticos: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Ansiedad y preocupación excesiva ≥6 meses.  </li>
        <li> • Dificultad para controlar la preocupación.   </li>
        <li> • <strong>  3+ de estos síntomas: </strong> Inquietud o nerviosismo, Fatiga fácil, Dificultad para concentrarse, Irritabilidad, 
        Tensión muscular (ej.: dolor de cuello), Alteraciones del sueño (insomnio o sueño no reparador).  </li>
        </ul>

        <p className='p14'> 🩺 Diagnóstico </p>
        <p className='p16'> 1. Evaluación Clínica: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Entrevista estructurada (GAD-7, escala de ansiedad).  </li>
        <li> • Descarte de condiciones médicas (hipertiroidismo, cardiopatías).  </li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> GAD-7	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Severidad de ansiedad	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-21 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> STAI </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ansiedad estado/rasgo</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 20-80   </td>
    </tr>
  </tbody>
</table>

 <p className='p16'>  3. Exámenes Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Analítica sanguínea: </strong> cortisol, hormonas tiroideas  </li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Sertralina, Escitalopram	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IRSN </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Venlafaxina  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina + Noradrenalina </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Benzodiacepinas	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alprazolam (solo corto plazo)	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Potencian GABA   </td>
    </tr>
  </tbody>
</table>
 

      <p className='p16'> 🟢 No Farmacológico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Terapia Cognitivo-Conductual (TCC): </strong>  Reestructuración de pensamientos, Exposición gradual a preocupaciones.  </li>
        <li> <strong> Mindfulness: </strong> Reducción del 30% en síntomas con 8 semanas de práctica. </li>
        <li> <strong> Biofeedback: </strong>  Entrenamiento para controlar respuestas fisiológicas (frecuencia cardíaca, tensión muscular). </li>
      </ul>
   
 

      <p className='p14'>  🌱 Prevención y Manejo </p>
      <p className='p16'> 🟢 Rutinas Saludables: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Ejercicio aeróbico (libera endorfinas). </li>
        <li> Técnicas de respiración diafragmática (4-7-8).  </li>
        <li> Exposición a luz solar. </li>
      </ul>
        <p className='p16'> 🧘‍♂️ Técnicas de Autogestión:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> "Diario de preocupaciones": Escribirlas y posponerlas a un "momento de preocupación" programado. </li>
        <li> Lista de "peores escenarios" para confrontar miedos irracionales.    </li>
      </ul>
        <p className='p16'> 🚨 Señales de Alerta:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Evitar actividades por miedo excesivo.  </li>
        <li> Síntomas físicos persistentes (mareos, taquicardias).   </li>
        <li> Consumo de sustancias para "automedicarse".   </li>

       </ul>
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> El <strong>TAG</strong> es un trastorno multifactorial con bases biológicas y psicológicas, pero altamente tratable. 
        La combinación de medicación + TCC tiene una eficacia del 70-80%. La psicoeducación y la detección temprana son clave para 
        evitar complicaciones (ej.: depresión secundaria).</p>
   
    </div>
    
  );
}

export default TAG;