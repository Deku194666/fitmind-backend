

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function BulimiaNerviosa() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Bulimia Nerviosa </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        La bulimia nerviosa es un trastorno alimentario caracterizado por <strong>episodios recurrentes de atracones</strong> seguidos de <strong>conductas compensatorias</strong> (vómitos, laxantes, ejercicio excesivo). Afecta al <strong>1-3% de la población</strong>, con un pico de inicio entre los <strong>15-25 años</strong> (90% mujeres). A diferencia de la anorexia, el 70% de pacientes tienen peso normal, lo que dificulta su detección. Presenta alta comorbilidad con depresión (50-70%) y abuso de sustancias (30%).
      </p>
        
      <p className='p14'> 🧠 Subtipos Clínicos</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Purgativo:</strong> Uso regular de vómitos/laxantes/diuréticos (80% de casos).</li>
        <li> <strong>No purgativo:</strong> Compensación mediante ayuno o ejercicio excesivo (menos común).</li>
        <li> <strong>Mixto:</strong> Alternancia entre métodos purgativos y no purgativos.</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Desregulación serotoninérgica:</strong> Niveles bajos de 5-HT predisponen a impulsividad.</li>
        <li> <strong>Alteraciones en el circuito de recompensa:</strong> Hiperactivación del núcleo accumbens durante atracones.</li>
        <li> <strong>Desequilibrio electrolítico:</strong> Hipokalemia e hipocloremia por purgas recurrentes.</li>
        <li> <strong>Adaptación gástrica:</strong> Retraso en el vaciamiento por vómitos crónicos.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Polimorfismos en genes 5-HTT y COMT</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Impulsividad alta</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dietas restrictivas previas</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antecedentes familiares de TCA</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo disfuncional</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Presión social por delgadez</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comorbilidad con TDAH (20%)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dificultad regulación emocional</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Abuso sexual en la infancia</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className='p16'> 💡 Requisitos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Atracones recurrentes:</strong> Ingesta de mayor a 2,000 kcal en menor a 2h con sensación de pérdida de control.</li>
        <li><strong>Conductas compensatorias:</strong> ≥1 vez/semana durante 3 meses.</li>
        <li><strong>Autoevaluación influenciada:</strong> Por el peso/figura corporal.</li>
        <li><strong>No exclusivo:</strong> De anorexia nerviosa.</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Clínica</p>
      <p className='p16'> 1. Exámenes Esenciales:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Electrolitos séricos:</strong> K+ menor a 3.0 mEq/L requiere hospitalización.</li>
        <li><strong>Amilasa salival:</strong> Elevada en vómitos crónicos.</li>
        <li><strong>Evaluación dental:</strong> Erosión del esmalte (pH bucal menor a 5.0).</li>
      </ul>

      <p className='p16'> 2. Escalas Validados:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>EDI-3 (Inventario de Trastornos Alimentarios):</strong> Subescalas de bulimia e insatisfacción corporal.</li>
        <li><strong>BULIT-R:</strong> Específica para síntomas bulímicos.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento Basado en Evidencia</p>
      <p className='p16'> 🔴 Intervenciones Médicas:</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ámbito </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Intervención </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Detalles </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Farmacológico </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fluoxetina (60 mg/día) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Único fármaco aprobado por FDA para BN</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Nutricional </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Plan de 3 comidas + 2 snacks </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evitar períodos mayor a 4h sin comer</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Urgencias </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Corrección de hipokalemia </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> KCl IV si K+ menor a 2.5 mEq/L</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 Psicoterapias Efectivas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>TCC específica para BN:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Fase 1: Psicoeducación y normalización alimentaria.</li>
            <li>Fase 2: Exposición gradual a alimentos "prohibidos".</li>
            <li>Fase 3: Prevención de recaídas.</li>
          </ul>
        </li>
        <li><strong>DBT (Terapia Dialéctico-Conductual):</strong> Manejo de emociones intensas sin atracones.</li>
        <li><strong>Terapia Interpersonal:</strong> Para casos con relaciones problemáticas.</li>
      </ul>

      <p className='p14'> 🌱 Manejo del Ciclo Atracón-Purga</p>
      <p className='p16'> 🟢 Técnicas Clave:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Registro alimentario:</strong> Anotar hora, alimento, emoción y contexto.</li>
        <li><strong>Demora progresiva:</strong> Aumentar tiempo entre atracón y purga (inicial 15 min).</li>
        <li><strong>Exposición con prevención:</strong> Comer alimentos temidos sin purgar.</li>
      </ul>

      <p className='p16'> 🚨 Complicaciones Médicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Gastrointestinales:</strong> Esofagitis, síndrome de Mallory-Weiss.</li>
        <li><strong>Cardíacas:</strong> Arritmias por hipokalemia.</li>
        <li><strong>Endocrinas:</strong> Amenorrea secundaria (30% de casos).</li>
      </ul>

      <p className='p14'> 📌Pronóstico</p>
      <p className='p150'>
        Con tratamiento, <strong>50-70% logran remisión sostenida</strong> a 5 años. Factores de buen pronóstico incluyen: inicio temprano
        del tratamiento, ausencia de abuso de sustancias y buen apoyo social. La mortalidad es del 2-3% (por arritmias o suicidio). 
        La <strong>TCC tiene una eficacia del 60%</strong> en reducir conductas purgativas a los 6 meses.
      </p>
    </div>
  );
}

export default BulimiaNerviosa;