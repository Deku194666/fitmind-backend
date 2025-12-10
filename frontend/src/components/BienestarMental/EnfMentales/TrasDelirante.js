

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TrasDelirante() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno Delirante </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El trastorno delirante es una condición psiquiátrica caracterizada por <strong>delirios no extraños</strong> (creencias
        falsas pero plausibles) que persisten durante <strong>≥1 mes</strong>, sin alucinaciones prominentes. Afecta al <strong>0.2% de
        la población</strong> (DSM-5) y suele manifestarse entre los <strong>40-55 años</strong>. A diferencia de la esquizofrenia, los 
        pacientes mantienen un funcionamiento relativamente normal en áreas no relacionadas con su delirio, lo que dificulta su detección
        temprana.
      </p>
        
      <p className='p14'> 🧠 Tipos Clínicos (según tema delirante)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Persecutorio:</strong> Creencia de ser víctima de espionaje, engaño o conspiración (60-70% de casos).</li>
        <li> <strong>Celotípico:</strong> Convicción infundada de infidelidad de la pareja ("síndrome de Otelo").</li>
        <li> <strong>Erómano:</strong> Idea delirante de que alguien (generalmente de mayor estatus) está enamorado del paciente.</li>
        <li> <strong>Grandioso:</strong> Creencia de tener talentos, conocimientos o relaciones especiales (ej.: "soy un genio incomprendido").</li>
        <li> <strong>Somático:</strong> Preocupación por funciones corporales (ej.: "tengo parásitos bajo la piel").</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Disfunción dopaminérgica:</strong> Hiperactividad en vía mesolímbica (similar a esquizofrenia pero localizada).</li>
        <li> <strong>Alteraciones en unión temporoparietal:</strong> Fallos en la atribución de agencia (origen de los pensamientos).</li>
        <li> <strong>Déficit en monitorización de realidad:</strong> Incapacidad para contrastar creencias con evidencia objetiva.</li>
        <li> <strong>Factores neuroinflamatorios:</strong> Elevación de marcadores como IL-6 en algunos pacientes.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia familiar de trastornos psicóticos</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estilo cognitivo rígido</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aislamiento social prolongado</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lesiones en ganglios basales</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sesgo atribucional externo ("todo es culpa de otros")</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estrés migratorio ("síndrome de Ulises")</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hipoacusia/ceguera (teoría de la privación sensorial)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> -</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Acoso laboral ("mobbing") persistente</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Síntomas Clave (DSM-5)</p>
      <p className='p16'> 💡 Criterios diagnósticos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Delirios no extraños</strong> (ej.: ser engañado, seguido o envenenado) durante ≥1 mes.</li>
        <li><strong>Sin alucinaciones prominentes</strong> (pueden presentarse transitoriamente si son táctiles/olfativas).</li>
        <li>Funcionamiento fuera del área delirante relativamente preservado.</li>
        <li>No cumple criterios de esquizofrenia.</li>
        <li>No atribuible a sustancias u otra condición médica.</li>
      </ul>

      <p className='p14'> 🩺 Diagnóstico</p>
      <p className='p16'> 1. Evaluación Clínica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Entrevista con <strong>Escala de Delirios de Peters (PDI-21)</strong>.</li>
        <li>Evaluación de <strong>insight</strong> (generalmente ausente o pobre).</li>
        <li>Historia de <strong>sobrevaloración ideativa</strong> (ideas fijas previas al delirio).</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Esquizofrenia:</strong> Presencia de alucinaciones auditivas y síntomas negativos.</li>
        <li><strong>Trastorno obsesivo-compulsivo:</strong> El paciente reconoce lo irracional de sus pensamientos.</li>
        <li><strong>Demencia:</strong> Deterioro cognitivo global y fluctuaciones.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento</p>
      <p className='p16'> 🔴 Farmacológico:</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Estrategia </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antipsicóticos atípicos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Risperidona, Paliperidona </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dosis más bajas que en esquizofrenia</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ISRS </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sertralina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Para componentes ansiosos/depresivos</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Terapia depot </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Paliperidona palmitato </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> En casos de mala adherencia</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 No Farmacológico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia Cognitiva para Delirios (Manschreck):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Explorar <strong>evidencia alternativa</strong> sin confrontar directamente el delirio.</li>
            <li>Trabajar <strong>consecuencias emocionales</strong> ("¿Cómo le afecta esta creencia?").</li>
          </ul>
        </li>
        <li><strong>Terapia Familiar:</strong> Reducir EMC (Emoción Expresada Crítica) y evitar alimentar el delirio.</li>
        <li><strong>Entrenamiento en Habilidades Sociales:</strong> Mejorar relaciones interpersonales no afectadas por el delirio.</li>
      </ul>

      <p className='p14'> 🌱 Manejo Práctico</p>
      <p className='p16'> 🟢 Estrategias para Familiares:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>No confrontar:</strong> Evitar discusiones directas sobre el delirio ("Veo que eso te preocupa" vs. "Eso es imposible").</li>
        <li><strong>Redirigir:</strong> Centrar conversaciones en áreas neutras (pasatiempos, noticias).</li>
        <li><strong>Establecer límites:</strong> No participar en rituales derivados del delirio (ej.: revisar cámaras de seguridad).</li>
      </ul>

      <p className='p16'> 🧠 Técnicas de Autogestión (para insight parcial):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Registro de "señales de alarma":</strong> Identificar patrones previos a exacerbaciones.</li>
        <li><strong>Técnica del "como si":</strong> Actuar temporalmente como si el delirio no fuera cierto.</li>
      </ul>

      <p className='p16'> 🚨 Señales de Riesgo:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Delirios de tipo persecutorio:</strong> Riesgo de auto/heteroagresividad.</li>
        <li><strong>Abandono de tratamiento:</strong> Recuperación de síntomas en 2-4 semanas.</li>
        <li><strong>Consumo de sustancias:</strong> Empeoramiento de síntomas.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        El trastorno delirante tiene <strong>mejor pronóstico que la esquizofrenia</strong>, con un <strong>50% de remisión 
        completa</strong> con tratamiento adecuado. La terapia cognitiva adaptada y el manejo familiar son esenciales para evitar
         la cronificación. Aunque la falta de insight dificulta la adherencia, enfoques colaborativos ("tratamiento para el estrés 
         que le causan sus creencias") pueden mejorar la aceptación.
      </p>
    </div>
  );
}

export default TrasDelirante;