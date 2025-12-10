

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Esquizo() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Esquizofrenia </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        La esquizofrenia es un trastorno psicótico crónico que afecta la percepción de la realidad, caracterizado por <strong>síntomas positivos</strong> (alucinaciones, delirios), <strong>negativos</strong> (apatía, aislamiento) y <strong>cognitivos</strong>. Afecta aproximadamente al <strong>1% de la población mundial</strong> (OMS) y suele debutar entre los <strong>15-35 años</strong>. No es "personalidad múltiple" ni implica violencia inherente: con tratamiento adecuado, muchos pacientes logran una vida funcional.
      </p>
        
      <p className='p14'> 🧠 Tipos Clínicos</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Paranoide:</strong> Delirios persecutorios/religiosos + alucinaciones auditivas (el tipo más común).</li>
        <li> <strong>Desorganizada:</strong> Lenguaje y conducta caóticos, afectividad inapropiada.</li>
        <li> <strong>Catatónica:</strong> Alteraciones psicomotoras (inmovilidad o agitación extrema).</li>
        <li> <strong>Residual:</strong> Predominio de síntomas negativos tras episodios agudos.</li>
        <li> <strong>Indiferenciada:</strong> Síntomas mixtos no clasificables en otros tipos.</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Exceso dopaminérgico:</strong> Hiperactividad en vía mesolímbica (síntomas positivos).</li>
        <li> <strong>Déficit dopaminérgico:</strong> Hipofunción en vía mesocortical (síntomas negativos/cognitivos).</li>
        <li> <strong>Alteraciones estructurales:</strong> Ventrículos cerebrales agrandados, reducción de materia gris.</li>
        <li> <strong>Inflamación neuroglial:</strong> Microglía activada en corteza prefrontal.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (riesgo 10% si un familiar de 1° grado lo padece)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dificultades en teoría de la mente</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Consumo de cannabis en adolescencia (especialmente variedades high-THC)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mutaciones en genes como DISC1 o COMT</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estilo cognitivo "jump-to-conclusions"</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trauma infantil (abuso, bullying)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Complicaciones obstétricas (hipoxia neonatal)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> -</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Migración urbana en jóvenes vulnerables</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Síntomas Clave (DSM-5)</p>
      <p className='p16'> 💡 Criterios diagnósticos (requiere 2+ por ≥1 mes):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Positivos:</strong> Delirios, alucinaciones (auditivas en 70% de casos), lenguaje desorganizado.</li>
        <li><strong>Negativos:</strong> Abulia (falta de voluntad), alogia (pobreza verbal), anhedonia.</li>
        <li><strong>Desorganizados:</strong> Conducta impredecible, afecto inapropiado.</li>
        <li><strong>Cognitivos:</strong> Déficits en memoria de trabajo, atención sostenida.</li>
      </ul>

      <p className='p14'> 🩺 Diagnóstico</p>
      <p className='p16'> 1. Evaluación Clínica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Escala <strong>PANSS</strong> (Positive and Negative Syndrome Scale).</li>
        <li>Entrevista clínica estructurada (SCID-5).</li>
        <li>Historia familiar y descarte de consumo de sustancias.</li>
      </ul>

      <p className='p16'> 2. Exámenes Complementarios:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Neuroimagen:</strong> RMN para descartar lesiones (tumores, quistes).</li>
        <li><strong>Analítica:</strong> TSH, vitamina B12, screening toxicológico.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento</p>
      <p className='p16'> 🔴 Farmacológico:</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Mecanismo </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antipsicóticos típicos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Haloperidol, Clorpromazina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo receptores D2 (riesgo de EPS)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antipsicóticos atípicos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Risperidona, Olanzapina, Aripiprazol </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo D2 + 5-HT2A (menos EPS)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Adyuvantes </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antidepresivos ISRS (para síntomas negativos) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 No Farmacológico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia Cognitivo-Conductual para Psicosis (TCCp):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Normalización de experiencias.</li>
            <li>Reestructuración de delirios mediante pruebas de realidad.</li>
          </ul>
        </li>
        <li><strong>Entrenamiento en Habilidades Sociales:</strong> Mejora interacciones y autonomía.</li>
        <li><strong>Remediación Cognitiva:</strong> Ejercicios computarizados para atención/memoria.</li>
        <li><strong>Psicoeducación Familiar:</strong> Manejo de crisis y reducción de EMC (Emoción Expresada Crítica).</li>
      </ul>

      <p className='p14'> 🌱 Prevención y Manejo</p>
      <p className='p16'> 🟢 Intervenciones Tempranas (Pródromo):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Programas como "RAISE" (NIMH):</strong> Detección en adolescentes con síntomas básicos (ej.: percepción alterada).</li>
        <li><strong>Ácidos grasos omega-3:</strong> Pueden reducir riesgo de conversión a psicosis.</li>
      </ul>

      <p className='p16'> 🧠 Estrategias de Autogestión:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Diario de síntomas:</strong> Registrar desencadenantes de alucinaciones/delirios.</li>
        <li><strong>Técnicas de grounding:</strong> Uso de objetos fríos o música para anclarse durante alucinaciones.</li>
      </ul>

      <p className='p16'> 🚨 Señales de Alerta (Recaída):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Aumento de aislamiento (dejar de salir de la habitación).</li>
        <li>Deterioro en higiene personal.</li>
        <li>Hablar solo o reírse sin motivo aparente.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        La esquizofrenia es un trastorno <strong>manejable con antipsicóticos + terapias psicosociales</strong>. El diagnóstico precoz y la adherencia al tratamiento mejoran significativamente el pronóstico. Aunque no tiene cura, hasta un <strong>30% de pacientes logran remisión funcional</strong>. La desestigmatización y el apoyo comunitario son esenciales para la reinserción social.
      </p>
    </div>
  );
}

export default Esquizo;