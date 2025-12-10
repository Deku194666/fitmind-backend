

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TEA() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno del Espectro Autista (TEA) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El Trastorno del Espectro Autista es una condición del neurodesarrollo que afecta aproximadamente al <strong>1-2% de la población mundial</strong> (CDC, 2023), con una ratio de 4:1 hombres/mujeres. Se caracteriza por diferencias en la <strong>comunicación social</strong> y patrones <strong>repetitivos/restrictivos</strong> de comportamiento. No es una enfermedad sino una forma diferente de procesar la información, que requiere apoyos personalizados según cada individuo.
      </p>
        
      <p className='p14'> 🧠 Niveles de Soporte (DSM-5)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Nivel 1 (Requiere apoyo):</strong> Dificultades en interacciones sociales, independiente pero con desafíos.</li>
        <li> <strong>Nivel 2 (Apoyo sustancial):</strong> Comunicación verbal y no verbal marcadamente alterada, rutinas inflexibles.</li>
        <li> <strong>Nivel 3 (Apoyo muy sustancial):</strong> Limitaciones graves en comunicación, conductas disruptivas.</li>
      </ul>

      <p className='p14'> 🧬Bases Neurobiológicas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Conectividad cerebral atípica:</strong> Hipoconectividad en redes sociales, hiperconectividad en áreas sensoriales.</li>
        <li> <strong>Diferencias estructurales:</strong> Mayor volumen cerebral en primeros años, crecimiento acelerado del amygdala.</li>
        <li> <strong>Factores genéticos:</strong> 80% heredabilidad, genes implicados (SHANK3, NLGN3).</li>
        <li> <strong>Procesamiento sensorial:</strong> 90% presentan hipo/hipersensibilidad.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Social </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dificultad en reciprocidad emocional </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> No responder a sonrisas, contacto visual limitado </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comunicación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Uso literal del lenguaje </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dificultad con ironía o metáforas </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Conductual </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Intereses restringidos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fascinación por temas específicos (ej: horarios de trenes) </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Señales Tempranas (12-24 meses)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>No responde a su nombre para los 12 meses.</li>
        <li>No señala objetos para mostrar interés (14 meses).</li>
        <li>No juega "simulando" (ej: dar de comer a muñecas) para los 18 meses.</li>
        <li>Evita el contacto visual o prefiere jugar solo.</li>
        <li>Alinamiento obsesivo de juguetes.</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Diagnóstica</p>
      <p className='p16'> 1. Herramientas Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>ADOS-2:</strong> Observación semiestructurada (gold standard).</li>
        <li><strong>ADI-R:</strong> Entrevista a padres/cuidadores.</li>
        <li><strong>M-CHAT:</strong> Cuestionario de screening para niños pequeños.</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>TDAH:</strong> Dificultad atención sin problemas sociales.</li>
        <li><strong>Mutismo selectivo:</strong> Ansiedad social específica.</li>
        <li><strong>Trastorno del lenguaje:</strong> Sin patrones repetitivos.</li>
      </ul>

      <p className='p14'> 💡 Estrategias de Apoyo</p>
      <p className='p16'> 📌 Comunicación:</p>
      
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lenguaje claro </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Frases cortas y literales </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reduce malentendidos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Apoyos visuales </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Agendas con pictogramas </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Facilita transiciones </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historias sociales </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Guiones para situaciones </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Prepara para interacciones </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 📌 Integración Sensorial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Hipersensibilidad auditiva:</strong> Uso de auriculares con cancelación de ruido.</li>
        <li><strong>Hipo-sensibilidad táctil:</strong> Chalecos con peso o abrazos firmes.</li>
        <li><strong>Dificultad vestibular:</strong> Columpios o hamacas terapéuticas.</li>
      </ul>

      <p className='p14'> 🌱 Intervenciones Basadas en Evidencia</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>ABA (Análisis Conductual Aplicado):</strong> 40 horas/semana en niños pequeños.</li>
        <li><strong>TEACCH:</strong> Estructuración visual del ambiente.</li>
        <li><strong>Floortime:</strong> Interacción a través del juego.</li>
        <li><strong>Terapia Ocupacional:</strong> Enfoque en integración sensorial.</li>
      </ul>0

      <p className='p16'> 🚨 Consideraciones Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Comorbilidades frecuentes:</strong> Ansiedad (40%), epilepsia (30%), TDAH (50%).</li>
        <li><strong>Manejo farmacológico:</strong> Sólo para síntomas específicos (ej: risperidona para irritabilidad).</li>
        <li><strong>Pronóstico:</strong> Mejor con diagnóstico temprano (menor a 3 años) e intervención intensiva.</li>
      </ul>

      <p className='p14'> 📌Enfoque Neurodiverso</p>
      <p className='p150'>
        El TEA no es un "déficit" sino una <strong>forma diferente de ser</strong>. Las intervenciones deben enfocarse en desarrollar 
        fortalezas (atención al detalle, pensamiento lógico) mientras se proveen apoyos para los desafíos. La meta no es "normalizar"
         sino permitir una <strong>calidad de vida autodeterminada</strong>, respetando la identidad autista.
      </p>
    </div>
  );
}

export default TEA;