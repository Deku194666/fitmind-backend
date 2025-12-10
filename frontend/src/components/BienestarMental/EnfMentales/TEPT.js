

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TEPT() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno de Estrés Postraumático (TEPT) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El TEPT es un trastorno de ansiedad que afecta aproximadamente al <strong>3.5% de la población adulta</strong> (OMS, 2023), con mayor prevalencia en mujeres (2:1). Se desarrolla tras experimentar o presenciar eventos traumáticos como violencia, accidentes o desastres naturales. Se caracteriza por <strong>reviviscencia del trauma</strong>, <strong>evitación</strong> y <strong>hiperactivación</strong> que persisten más de un mes e interfieren significativamente con la vida diaria.
      </p>
        
      <p className='p14'>  Sintomatología Clínica (DSM-5)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Síntomas intrusivos:</strong> Flashbacks, pesadillas, reacciones disociativas.</li>
        <li> <strong>Evitación persistente:</strong> De estímulos asociados al trauma.</li>
        <li> <strong>Alteraciones cognitivas:</strong> Culpa, vergüenza, expectativas negativas.</li>
        <li> <strong>Hiperactivación autonómica:</strong> Hipervigilancia, sobresalto, irritabilidad.</li>
      </ul>

      <p className='p14'> 🧠 Bases Neurobiológicas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Amígdala hiperactiva:</strong> Respuesta exagerada al miedo.</li>
        <li> <strong>Hipocampo reducido:</strong> Dificultad en procesamiento contextual.</li>
        <li> <strong>Corteza prefrontal hipofuncionante:</strong> Dificultad en regulación emocional.</li>
        <li> <strong>Eje HPA alterado:</strong> Respuesta anormal al estrés.</li>
      </ul>

      <p className='p14'> 📌 Subtipos Clínicos</p>

<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Características </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prevalencia </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TEPT complejo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trauma prolongado, alteración identidad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 25% de casos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TEPT disociativo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Despersonalización/desrealización </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 15-30% de casos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TEPT de inicio tardío </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Síntomas aparecen meses/años después </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 10-20% de casos </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Factores de Riesgo</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Exposición previa a traumas (especialmente en infancia).</li>
        <li>Falta de apoyo social post-trauma.</li>
        <li>Historia personal/familiar de trastornos mentales.</li>
        <li>Estilo cognitivo con tendencia a rumiación.</li>
        <li>Alto nivel de percepción de amenaza durante el evento.</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Diagnóstica</p>
      <p className='p16'> 1. Herramientas Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>CAPS-5:</strong> Entrevista clínica estandarizada (gold standard).</li>
        <li><strong>PCL-5:</strong> Escala autoadministrada de 20 ítems.</li>
        <li><strong>IES-R:</strong> Evalúa impacto del evento traumático.</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Trastorno de adaptación:</strong> Síntomas menos intensos y duraderos.</li>
        <li><strong>Depresión mayor:</strong> Sin síntomas intrusivos específicos.</li>
        <li><strong>Trastorno de ansiedad generalizada:</strong> Preocupación no ligada a trauma.</li>
      </ul>

      <p className='p14'> 💡 Intervenciones Basadas en Evidencia</p>
      <p className='p16'> 🔹 EMDR (Reprocesamiento por Movimientos Oculares):</p>
      
<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Fase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Técnica </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Objetivo </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Preparación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lugar seguro imaginario </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estabilización emocional </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Procesamiento </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Movimientos oculares bilaterales </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reprocesamiento del trauma </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reevaluación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Escala SUDS (0-10) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Monitoreo de progreso </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🔹 Terapia Narrativa:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Reconstrucción cronológica:</strong> Integrar el trauma en la historia vital.</li>
        <li><strong>Externalización:</strong> Separar la identidad del trauma ("El trauma vs. yo").</li>
        <li><strong>Documentos terapéuticos:</strong> Cartas o diarios de procesamiento.</li>
      </ul>

      <p className='p14'> 🌱 Estrategias de Autoregulación</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Técnica 5-4-3-2-1:</strong> 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que sabes.</li>
        <li><strong>Respiración diafragmática:</strong> 6 respiraciones por minuto durante 5 minutos.</li>
        <li><strong>Anclaje seguro:</strong> Objeto/textura para conectar con el presente.</li>
        <li><strong>Escritura expresiva:</strong> 20 minutos diarios durante 3-4 días.</li>
      </ul>

      <p className='p16'> 🚨 Consideraciones Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Comorbilidades frecuentes:</strong> Depresión (50%), abuso de sustancias (30%), dolor crónico (40%).</li>
        <li><strong>Manejo farmacológico:</strong> ISRS (sertralina, paroxetina), prazosín para pesadillas.</li>
        <li><strong>Pronóstico:</strong> 50% se recuperan completamente con tratamiento adecuado.</li>
      </ul>

      <p className='p14'> 📌 Conclusión </p>
      <p className='p150'>
        El TEPT no es una "debilidad" sino una <strong>respuesta normal a eventos anormales</strong>. La recuperación implica 
        procesar el trauma sin eliminarlo, integrandolo en la narrativa vital. La meta es <strong>reducir el sufrimiento</strong> 
        mientras se fortalece la resiliencia y se reconstruye un sentido de seguridad y control.
      </p>
    </div>
  );
}

export default TEPT;