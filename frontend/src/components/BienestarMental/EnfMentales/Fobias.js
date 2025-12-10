


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Fobias() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Fobias Específicas </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        Las fobias específicas son un tipo de trastorno de ansiedad caracterizado por un <strong>miedo intenso e irracional</strong> hacia objetos o situaciones concretas (ej.: arañas, alturas, sangre). Afectan al <strong>7-9% de la población</strong> (DSM-5) y generan respuestas de evitación que interfieren con la vida diaria. A diferencia del miedo normal, la reacción es desproporcionada y persistente (≥6 meses).
      </p>
        
      <p className='p14'> 🧠 Tipos Comunes</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Animales:</strong> Arañas (aracnofobia), perros (cinofobia).</li>
        <li> <strong>Ambientales:</strong> Alturas (acrofobia), tormentas (astrafobia).</li>
        <li> <strong>Sangre-inyecciones-daño (SID):</strong> Agujas (belonefobia), sangre (hematofobia).</li>
        <li> <strong>Situacionales:</strong> Aviones (aerofobia), espacios cerrados (claustrofobia).</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Hiperactivación amígdala:</strong> Respuesta exagerada al estímulo fóbico.</li>
        <li> <strong>Déficit regulación cortical:</strong> Corteza prefrontal no logra inhibir el miedo.</li>
        <li> <strong>Condicionamiento clásico:</strong> Asociación traumática previa (ej.: mordedura de perro).</li>
      </ul>

      <p className='p14'> 📌 Factores de Riesgo</p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Biológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Psicológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ambientales </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (2-3x más riesgo si familiares directos)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sensibilidad a la ansiedad</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Experiencias traumáticas directas</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Respuesta vasovagal exagerada (en fobias SID)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sesgo atencional hacia amenazas</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aprendizaje vicario (ver a otros reaccionar con miedo)</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Síntomas Clave (DSM-5)</p>
      <p className='p16'> 💡 Criterios diagnósticos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Miedo marcado hacia un objeto/situación específica.</li>
        <li>El estímulo casi siempre provoca ansiedad inmediata (puede llegar a ataque de pánico).</li>
        <li>Evitación activa o resistencia con intenso malestar.</li>
        <li>Duración ≥6 meses.</li>
        <li>Deterioro significativo en áreas sociales/laborales.</li>
      </ul>

      <p className='p14'> 🩺 Diagnóstico</p>
      <p className='p16'> 1. Evaluación Clínica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Entrevista estructurada (<strong>ADIS-5</strong>).</li>
        <li>Escala de <strong>Fear Questionnaire (FQ)</strong> para gravedad.</li>
      </ul>

      <p className='p16'> 2. Exámenes Complementarios</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>En fobias SID: prueba de inclinación para evaluar respuesta vasovagal.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento</p>
      <p className='p16'> 🔴 Farmacológico (solo en casos graves):</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Uso </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Betabloqueantes </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Propranolol </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce síntomas físicos (ej.: antes de vuelos)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Benzodiacepinas </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lorazepam </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Uso ocasional en exposición inevitable</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 No Farmacológico (tratamiento de primera línea):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia de Exposición:</strong> 
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>En vivo:</strong> Enfrentamiento gradual al estímulo (ej.: acercarse a un perro).</li>
            <li><strong>Realidad Virtual:</strong> Para fobias difíciles de replicar (ej.: volar en avión).</li>
          </ul>
        </li>
        <li><strong>Técnica de Tensión Aplicada (para fobias SID):</strong> Contracción muscular para prevenir desmayos.</li>
      </ul>

      <p className='p14'> 🌱 Prevención y Manejo</p>
      <p className='p16'> 🟢 Técnicas de Autogestión:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Desensibilización sistemática:</strong> Lista jerárquica de exposiciones de menor a mayor ansiedad.</li>
        <li><strong>Respiración con biofeedback:</strong> Monitorear frecuencia cardíaca durante exposición.</li>
      </ul>

      <p className='p16'> 🚨 Señales de Alerta:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Evitación que limita actividades esenciales (ej.: no ir al médico por miedo a agujas).</li>
        <li>Ataques de pánico ante el estímulo fóbico.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        Las fobias específicas son altamente tratables con <strong>terapia de exposición</strong> (eficacia del 75-90%). La clave es la constancia en las prácticas de enfrentamiento gradual. En casos leves, la psicoeducación y técnicas de relajación pueden ser suficientes, mientras que en fobias incapacitantes, la combinación con realidad virtual muestra excelentes resultados.
      </p>
    </div>
  );
}

export default Fobias;