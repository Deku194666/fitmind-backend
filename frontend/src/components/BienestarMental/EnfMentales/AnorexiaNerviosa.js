

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function AnorexiaNerviosa() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Anorexia Nerviosa </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        La anorexia nerviosa es un trastorno alimentario potencialmente mortal caracterizado por <strong>restricción calórica extrema</strong>, <strong>miedo intenso a ganar peso</strong> y <strong>alteración en la percepción corporal</strong>. Con una mortalidad del <strong>5-10% a 10 años</strong> (la más alta entre los trastornos psiquiátricos), afecta predominantemente a mujeres jóvenes (ratio 9:1) y suele iniciarse entre los <strong>12-25 años</strong>. No es un "estilo de vida" sino una enfermedad biopsicosocial compleja.
      </p>
        
      <p className='p14'> 🧠 Subtipos Clínicos</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Restrictivo:</strong> Pérdida de peso mediante dieta, ayuno y ejercicio excesivo (50-60% de casos).</li>
        <li> <strong>Atracón/purga:</strong> Episodios de ingesta compulsiva seguidos de vómitos/laxantes (más común en varones).</li>
        <li> <strong>Mixto:</strong> Combinación de ambos patrones con variabilidad temporal.</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Alteración en la red de recompensa:</strong> Hiperactivación del núcleo accumbens ante imágenes de bajo peso.</li>
        <li> <strong>Disfunción hipotalámica:</strong> Niveles alterados de leptina, grelina y péptido YY.</li>
        <li> <strong>Cambios estructurales cerebrales:</strong> Reducción de volumen en ínsula y corteza prefrontal.</li>
        <li> <strong>Adaptación metabólica:</strong> Disminución del metabolismo basal (hasta un 30-40%).</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (heredabilidad 50-80%)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo patológico</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Presión cultural por delgadez</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Polimorfismos en genes BDNF y COMT</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Baja autoestima corporal</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Deportes estéticos (danza, gimnasia)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comorbilidad con TOC (30-40%)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alexitimia (dificultad identificar emociones)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia de bullying por peso</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className='p16'> 💡 Requisitos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Restricción energética:</strong> Peso corporal significativamente bajo (IMC ≤17.5 en adultos).</li>
        <li><strong>Miedo intenso a engordar:</strong> Persiste a pesar de la delgadez.</li>
        <li><strong>Alteración corporal:</strong> Distorsión de la imagen corporal o subestimación del bajo peso.</li>
        <li><strong>Especificar:</strong> Tipo restrictivo o atracón/purga + nivel de gravedad (IMC).</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Clínica</p>
      <p className='p16'> 1. Exámenes Esenciales:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Analítica completa:</strong> Electrolitos, función tiroidea, albúmina, hemograma.</li>
        <li><strong><Link to="/examenes/ekg">  Electrocardiograma (EKG)</Link>:</strong> Detectar bradicardia (menor de 50 lpm) o prolongación QT.</li>
        <li><strong>Densitometría ósea:</strong> En casos mayor a 6 meses de amenorrea.</li>
      </ul>

      <p className='p16'> 2. Escalas Validados:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>EDI-3 (Inventario de Trastornos Alimentarios):</strong> Evalúa actitudes y síntomas.</li>
        <li><strong>SCOFF Questionnaire:</strong> Screening rápido (2+ respuestas positivas = riesgo).</li>
      </ul>

      <p className='p14'> 💊 Tratamiento Multidisciplinar</p>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Nutricional </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Realimentación progresiva </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1,200-1,500 kcal/día inicial, aumento 200-300 kcal/semana</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Farmacológico </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Olanzapina (2.5-10 mg/día) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce ansiedad y facilita ganancia peso</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Monitorización </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Protocolo de realimentación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Prevenir síndrome de realimentación (fósforo menos de 3.0 mg/dL)</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 Psicoterapias:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia Familiar (Maudsley):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Fase 1: Padres supervisan todas las comidas.</li>
            <li>Fase 2: Transición progresiva de control al paciente.</li>
            <li>Fase 3: Trabajar autonomía y prevención de recaídas.</li>
          </ul>
        </li>
        <li><strong>CBT-E (TCC específica):</strong> Modificar creencias sobre peso, comida y autovalía.</li>
        <li><strong>Terapia de Aceptación y Compromiso (ACT):</strong> Manejo de emociones sin conductas restrictivas.</li>
      </ul>

      <p className='p14'> 🌱 Manejo de la Imagen Corporal</p>
      <p className='p16'> 🟢 Técnicas Específicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Exposición con espejo:</strong> Observación gradual sin conductas de evitación.</li>
        <li><strong>Reconocimiento corporal:</strong> Uso de prendas ajustadas para reintegrar sensaciones.</li>
        <li><strong>Reestructuración cognitiva:</strong> Cuestionar creencias ("Grasa = seguridad").</li>
      </ul>

      <p className='p16'> 🚨 Señales de Alerta Médica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Inestabilidad cardiovascular:</strong> Bradicardia menos de 40 lpm, hipotensión mas 90/60 mmHg.</li>
        <li><strong>Alteraciones hidroelectrolíticas:</strong> Potasio menos de 3.0 mEq/L, fósforo menos de 2.0 mg/dL.</li>
        <li><strong>Hipotermia:</strong> Temperatura menos de 35.5°C.</li>
      </ul>

      <p className='p14'> 📌Pronóstico</p>
      <p className='p150'>
        Con tratamiento intensivo, <strong>50-70% logran recuperación significativa</strong>, pero el 30% desarrolla curso crónico.
        Factores de buen pronóstico incluyen diagnóstico temprano (menos de 3 años de evolución) y apoyo familiar. La mortalidad a 
        largo plazo sigue siendo elevada (20% a 20 años), principalmente por complicaciones médicas o suicidio.
      </p>
    </div>
  );
}

export default AnorexiaNerviosa;