

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarTrasNeurodesar from './NavBarTrasNeurodesar';

function TrasNeurodesarrollo() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
    <NavBarTrasNeurodesar />

      <p className='p13'> Trastornos del Neurodesarrollo </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        Los <strong> Trastornos del Neurodesarrollo </strong> son condiciones de origen neurológico que afectan el crecimiento y desarrollo del sistema nervioso, manifestándose en la infancia y persistiendo frecuentemente hasta la edad adulta. Representan el <strong>15-20% de las consultas pediátricas</strong> (OMS) y requieren abordajes personalizados que combinen intervenciones terapéuticas, educativas y familiares. Estos trastornos no son "etapas" que se superan, sino variaciones neurobiológicas que demandan adaptaciones específicas.
      </p>
        
      <p className='p16'> 📌<Link to="/bienestarmental/enfmentales/tdah"> TDAH </Link> (Niños y Adultos)</p>
      <p className='p150'>
        El     <Link to="/bienestarmental/enfmentales/tdah"> Trastorno por Déficit de Atención/Hiperactividad (TDAH) </Link> afecta aproximadamente al <strong>5-7% de niños</strong> y al <strong>2.5-4% de adultos</strong> mundialmente. Se caracteriza por un patrón persistente de inatención, hiperactividad e impulsividad que interfiere con el funcionamiento diario. El 60% de los casos infantiles continúan presentando síntomas en la adultez.
      </p>

      <p className='p150'> <strong>Test de Conners (Versión 3):</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Para niños:</strong> 87% de sensibilidad en diagnóstico, evalúa:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Inatención (ej.: dificultad para sostener tareas)</li>
            <li>Hiperactividad (ej.: movimiento excesivo)</li>
            <li>Problemas de aprendizaje</li>
          </ul>
        </li>
        <li><strong>Para adultos:</strong> Escala autoaplicada que identifica:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Dificultades organizativas</li>
            <li>Procrastinación crónica</li>
            <li>Regulación emocional</li>
          </ul>
        </li>
      </ul>

      <p className='p150'> <strong>Técnicas de enfoque:</strong> </p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Técnica </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Beneficio </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pomodoro </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 25 min trabajo + 5 min descanso </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mejora sostenibilidad atencional </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Body doubling </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Presencia física/virtual de acompañante </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce procrastinación </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Externalización </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Listas visibles y recordatorios físicos </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Compensa fallos en memoria de trabajo </td>
          </tr>
        </tbody>
      </table>

      <p className='p16'> 📌 <Link to="/bienestarmental/enfmentales/tea" > Trastorno del Espectro Autista (TEA)</Link>
      </p>
      <p className='p150'>
        El <Link to="/bienestarmental/enfmentales/tea" > TEA </Link> es una condición del neurodesarrollo que afecta aproximadamente al <strong>1-2% de la población</strong>, con una ratio hombres/mujeres de 4:1. Se caracteriza por diferencias en la comunicación social y patrones restringidos/repetitivos de comportamiento. El 70% de los casos presentan comorbilidades (ansiedad, TDAH o epilepsia).
      </p>

      <p className='p150'> <strong>Guía de comunicación:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lenguaje claro:</strong> Evitar metáforas o ironías ("Pies en el suelo" vs "Pon atención").</li>
        <li><strong>Apoyos visuales:</strong> Uso de pictogramas o agendas gráficas.</li>
        <li><strong>Tiempo de procesamiento:</strong> Esperar 10-15 segundos tras hacer una pregunta.</li>
        <li><strong>Scripting social:</strong> Enseñar frases para interacciones específicas.</li>
      </ul>

      <p className='p150'> <strong>Integración sensorial:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hipersensibilidad:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Auditiva: Uso de tapones o auriculares con cancelación de ruido.</li>
            <li>Táctil: Ropa sin etiquetas y tejidos suaves.</li>
          </ul>
        </li>
        <li><strong>Hipo-sensibilidad:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Propioceptiva: Actividades con presión profunda (abrazos firmes).</li>
            <li>Vestibular: Columpios o plataformas oscilantes.</li>
          </ul>
        </li>
      </ul>

      <p className='p14'> 📌 Intervenciones Clave</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Trastorno </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Terapia </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Farmacología </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TDAH </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Entrenamiento en funciones ejecutivas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Metilfenidato, Atomoxetina </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TEA </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Análisis Conductual Aplicado (ABA) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Risperidona (para irritabilidad) </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Estrategias de Apoyo</p>
      <p className='p16'> 🟢 Para familias:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rutinas estructuradas:</strong> Horarios visuales predecibles.</li>
        <li><strong>Refuerzo positivo:</strong> Premiar esfuerzos más que resultados.</li>
        <li><strong>Espacios de descompresión:</strong> Zonas tranquilas para regularse.</li>
      </ul>

      <p className='p16'> 🚨 Señales Tempranas (2-5 años):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>TDAH:</strong> Dificultad para esperar turnos, accidentes frecuentes.</li>
        <li><strong>TEA:</strong> Ausencia de señalar objetos, poco contacto visual.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        Los trastornos del neurodesarrollo requieren <strong>adaptaciones específicas</strong> más que "curas". Con intervenciones tempranas y apoyos adecuados, las personas con TDAH o TEA pueden desarrollar al máximo su potencial. La neurodiversidad enfatiza que estas diferencias cerebrales son variaciones naturales humanas que merecen aceptación y ajustes razonables en entornos educativos/laborales.
      </p>
    </div>
  );
}

export default TrasNeurodesarrollo;