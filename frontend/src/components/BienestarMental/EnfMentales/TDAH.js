

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TDAH() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno por Déficit de Atención e Hiperactividad (TDAH) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El TDAH es un trastorno del neurodesarrollo que afecta aproximadamente al <strong>5-7% de los niños</strong> y persiste en la edad adulta en el 60% de los casos (OMS, 2023), con una ratio de 2:1 hombres/mujeres. Se caracteriza por patrones persistentes de <strong>inatención</strong>, <strong>hiperactividad</strong> e <strong>impulsividad</strong> que interfieren con el funcionamiento diario. Es un trastorno con base biológica que requiere manejo multimodal.
      </p>
        
      <p className='p14'> 🧠 Subtipos (DSM-5)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Presentación combinada:</strong> Síntomas de inatención e hiperactividad-impulsividad.</li>
        <li> <strong>Presentación predominante inatenta:</strong> Dificultades de atención sin hiperactividad marcada.</li>
        <li> <strong>Presentación predominante hiperactiva/impulsiva:</strong> Inquietud e impulsividad predominantes.</li>
      </ul>

      <p className='p14'> 🧬Bases Neurobiológicas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Disfunción dopaminérgica:</strong> Alteración en receptores DRD4 y DAT1.</li>
        <li> <strong>Diferencias estructurales:</strong> Volumen reducido en corteza prefrontal y ganglios basales.</li>
        <li> <strong>Factores genéticos:</strong> 75% heredabilidad, genes implicados (DRD4, SNAP25).</li>
        <li> <strong>Procesamiento ejecutivo:</strong> Dificultades en memoria de trabajo, control inhibitorio.</li>
      </ul>

      <p className='p14'> 📌 Características Clave</p>

<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Área </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Manifestaciones </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inatención </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dificultad para mantener el foco </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Errores por descuido, pérdida de objetos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hiperactividad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Movimiento excesivo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Incapacidad para permanecer sentado, hablar en exceso </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Impulsividad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Actuar sin pensar </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Interrumpir conversaciones, tomar decisiones precipitadas </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Señales Tempranas (6-12 años)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Dificultad para seguir instrucciones múltiples.</li>
        <li>Evita tareas que requieren esfuerzo mental sostenido.</li>
        <li>Se levanta en situaciones donde debe permanecer sentado.</li>
        <li>Habla excesivamente y responde antes de terminar la pregunta.</li>
        <li>Dificultad para esperar turnos en juegos o actividades.</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Diagnóstica</p>
      <p className='p16'> 1. Herramientas Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Conners CBRS:</strong> Escalas para evaluar síntomas.</li>
        <li><strong>ADHD-RS:</strong> Escala de calificación para TDAH.</li>
        <li><strong>Evaluación neuropsicológica:</strong> Pruebas de funciones ejecutivas.</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>TEA:</strong> Dificultades sociales más marcadas.</li>
        <li><strong>Ansiedad:</strong> Inatención secundaria a preocupación.</li>
        <li><strong>Trastornos del aprendizaje:</strong> Dificultades académicas específicas.</li>
      </ul>

      <p className='p14'> 💡 Estrategias de Manejo</p>
      <p className='p16'> 🔹 Ambiente:</p>
      
<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Técnica </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Implementación </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Beneficio </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estructuración </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Rutinas predecibles </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce ansiedad </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fragmentación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dividir tareas en pasos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Facilita la ejecución </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Señales visuales </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Recordatorios gráficos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Compensa fallas de memoria </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🔹 Manejo Conductual:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Refuerzo positivo:</strong> Premiar conductas deseadas inmediatamente.</li>
        <li><strong>Tiempo fuera:</strong> Para manejar impulsividad agresiva.</li>
        <li><strong>Economía de fichas:</strong> Sistema estructurado de recompensas.</li>
      </ul>

      <p className='p14'> 🌱 Intervenciones Basadas en Evidencia</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia cognitivo-conductual:</strong> Para manejo de impulsividad en adultos.</li>
        <li><strong>Entrenamiento en habilidades parentales:</strong> Para manejo en niños.</li>
        <li><strong>Intervenciones académicas:</strong> Adaptaciones en el aula.</li>
        <li><strong>Mindfulness:</strong> Mejora atención y regulación emocional.</li>
      </ul>

      <p className='p16'> 🚨 Consideraciones Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Comorbilidades frecuentes:</strong> Trastornos de aprendizaje (40%), ansiedad (30%), trastorno oposicionista (50%).</li>
        <li><strong>Manejo farmacológico:</strong> Estimulantes (metilfenidato) y no estimulantes (atomoxetina).</li>
        <li><strong>Pronóstico:</strong> Mejor con diagnóstico temprano e intervención multimodal.</li>
      </ul>

      <p className='p14'> 📌Enfoque Neurodiverso</p>
      <p className='p150'>
        El TDAH no es un "déficit" sino una <strong>forma diferente de funcionamiento cerebral</strong>. Las intervenciones deben enfocarse en desarrollar fortalezas (creatividad, pensamiento divergente) mientras se proveen estrategias para los desafíos. La meta es lograr un <strong>funcionamiento óptimo</strong> respetando las características individuales.
      </p>
    </div>
  );
}

export default TDAH;