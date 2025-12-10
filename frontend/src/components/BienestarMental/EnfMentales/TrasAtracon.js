

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TrasPorAtracón() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno por Atracón </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El Trastorno por Atracón (BED) es el trastorno alimentario más común en adultos, caracterizado por <strong>episodios recurrentes 
            de ingesta compulsiva</strong> sin conductas compensatorias. Afecta al <strong>2-3.5% de la población mundial</strong> (DSM-5) 
            con una distribución más equitativa entre géneros (2:1 mujeres/hombres) que otros TCA. El 60-70% de los casos presentan obesidad, pero puede ocurrir en cualquier IMC. Reconocido como diagnóstico independiente desde 2013, implica grave malestar y pérdida de control sobre la alimentación.
      </p>
        
      <p className='p14'> 🧠 Características Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Atracones objetivos:</strong> Ingesta de mayor de 2,000 kcal en menos de 2h con sensación de voracidad.</li>
        <li> <strong>Atracones subjetivos:</strong> Pequeñas cantidades percibidas como excesivas.</li>
        <li> <strong>Comorbilidades:</strong> 80% tienen trastorno del estado de ánimo, 50% ansiedad.</li>
        <li> <strong>Curso crónico:</strong> 40% permanecen sintomáticos a 5 años sin tratamiento.</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Desregulación dopaminérgica:</strong> Disminución de receptores D2 en estriado ventral.</li>
        <li> <strong>Alteraciones en el eje HPA:</strong> Respuesta exagerada al estrés con hipercortisolemia.</li>
        <li> <strong>Resistencia a leptina:</strong> Alteración en señales de saciedad.</li>
        <li> <strong>Patrón circadiano alterado:</strong> 70% de atracones ocurren por la noche.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Polimorfismos en gene FTO (rs9939609)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Desregulación emocional</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia de dietas yo-yó</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Deficiencia de BDNF</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo alimentario</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Acceso a comida hiperpalatable</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comorbilidad con TDAH (25%)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alexitimia</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Abuso emocional en infancia</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className='p16'> 💡 Requisitos (≥1 episodio/semana por 3 meses):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Ingesta acelerada:</strong> Comer mucho más rápido de lo normal.</li>
        <li><strong>Malestar físico:</strong> Hasta sentirse desagradablemente lleno.</li>
        <li><strong>Sin hambre:</strong> Comer grandes cantidades sin apetito.</li>
        <li><strong>Vergüenza:</strong> Preferencia por comer en solitario.</li>
        <li><strong>Asco/culpa:</strong> Posterior al episodio.</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Clínica</p>
      <p className='p16'> 1. Instrumentos Validados:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>EDE-Q (Eating Disorder Examination):</strong> Evalúa frecuencia y severidad.</li>
        <li><strong>BES (Binge Eating Scale):</strong> Específico para sintomatología.</li>
        <li><strong>Inventario de Alimentación Caótica:</strong> Detecta patrones irregulares.</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Bulimia nerviosa:</strong> Presencia de conductas compensatorias.</li>
        <li><strong>Obesidad sin TCA:</strong> Ausencia de pérdida de control.</li>
        <li><strong>Síndrome del comedor nocturno:</strong> Ingesta mayor a 25% de calorías tras la cena.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento Basado en Evidencia</p>
      <p className='p16'> 🔴 Intervenciones Médicas:</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Modalidad </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Opción </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Efectividad </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Farmacológico </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lisdexanfetamina (50-70 mg/día) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce 65% episodios (único aprobado por FDA)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Nutricional </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alimentación regular cada 3-4h </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Disminuye 40% urgencias por comer</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cirugía bariátrica </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación prequirúrgica obligatoria </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 30% desarrollan nuevos atracones post-cirugía</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 Psicoterapias Efectivas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>TCC específica:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Autorregistro de episodios (hora, desencadenante, alimentos).</li>
            <li>Exposición a alimentos prohibidos sin atracón.</li>
            <li>Reestructuración de pensamientos "todo o nada".</li>
          </ul>
        </li>
        <li><strong>DBT (Terapia Dialéctico-Conductual):</strong> Entrenamiento en:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Tolerancia al malestar.</li>
            <li>Regulación emocional.</li>
            <li>Efectividad interpersonal.</li>
          </ul>
        </li>
        <li><strong>Terapia de Aceptación y Compromiso (ACT):</strong> Reducción de evitación experiencial.</li>
      </ul>

      <p className='p14'> 🌱 Técnicas de Alimentación Consciente</p>
      <p className='p16'> 🟢 Protocolo BASICO:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>B</strong>ajar el tenedor entre bocados.</li>
        <li><strong>A</strong>preciar colores/olores de la comida.</li>
        <li><strong>S</strong>aborear cada bocado (20 segundos).</li>
        <li><strong>I</strong>dentificar señales de saciedad.</li>
        <li><strong>C</strong>omprobar hambre real (escala 1-10).</li>
        <li><strong>O</strong>bservar emociones sin juzgar.</li>
      </ul>

      <p className='p16'> 🚨 Complicaciones Frecuentes:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Metabólicas:</strong> Resistencia a insulina, hígado graso.</li>
        <li><strong>Gastrointestinales:</strong> Reflujo, síndrome de intestino irritable.</li>
        <li><strong>Psicológicas:</strong> Depresión (60%), ideación suicida (15%).</li>
      </ul>

      <p className='p14'> 📌Pronóstico</p>
      <p className='p150'>
        Con tratamiento adecuado, <strong>50-60% logran remisión sostenida</strong> a 2 años. La TCC alcanza tasas de éxito del 
        <strong>70% en reducción de episodios</strong> a los 4 meses. Factores predictivos positivos incluyen: menor duración 
        del trastorno, ausencia de antecedentes de trauma complejo y buen apoyo social. La mortalidad es menor que en otros TCA
         (menor a 1%), pero la calidad de vida se ve significativamente afectada.
      </p>
    </div>
  );
}

export default TrasPorAtracón;