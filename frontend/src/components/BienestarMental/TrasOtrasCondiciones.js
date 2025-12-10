

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarTrasOtrasCond from './NavBarTrasOtrasCond';

function TrasOtrasCondiciones() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarTrasOtrasCond />

      <p className='p13'> Otras Condiciones Clínicas Relevantes </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        Existen diversas condiciones psicológicas que requieren abordajes específicos y basados en evidencia. Estas afectan significativamente la calidad de vida y el funcionamiento diario, pero con las herramientas adecuadas pueden manejarse efectivamente. Presentamos tres condiciones prevalentes con sus respectivas intervenciones.
      </p>
        
      <p className='p16'> 📌Trastorno de Estrés Postraumático (TEPT)</p>
      <p className='p150'>
        El TEPT afecta aproximadamente al <strong>3.5% de la población adulta</strong> (OMS) y se caracteriza por síntomas intrusivos, evitación y alteraciones en la reactividad tras experimentar un evento traumático. El 30% de los casos desarrollan síntomas crónicos sin tratamiento adecuado.
      </p>

      <p className='p150'> <strong>EMDR Básico (Ejercicios Oculares):</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protocolo simplificado:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Identificar recuerdo traumático específico</li>
            <li>Movimientos oculares laterales (2-3 series de 30 segundos)</li>
            <li>Reevaluación de la angustia subjetiva (escala 0-10)</li>
          </ul>
        </li>
        <li><strong>Ejercicio práctico:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Seguir con los ojos un dedo o punto luminoso</li>
            <li>20 movimientos por serie</li>
            <li>3 series con pausas de 1 minuto</li>
          </ul>
        </li>
      </ul>

      <p className='p150'> <strong>Narrativa Terapéutica:</strong> </p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Fase </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Técnica </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Objetivo </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1. Estabilización </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Linea de vida temporal </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Contextualizar el trauma </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 2. Elaboración </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reescritura con final alternativo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Empoderamiento </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 3. Integración </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Carta al yo del pasado </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cierre simbólico </td>
          </tr>
        </tbody>
      </table>

      <p className='p16'> 📌Trastorno Límite de Personalidad (TLP)</p>
      <p className='p150'>
        El TLP afecta al <strong>1.6% de la población</strong>, con mayor prevalencia en mujeres (3:1). Se caracteriza por inestabilidad emocional, relaciones intensas y conductas impulsivas. El 70% presentan conductas autolesivas a lo largo de su vida.
      </p>

      <p className='p150'> <strong>Regulación Emocional (DBT Simplificada):</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnica STOP:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>S</strong>top (detenerse)</li>
            <li><strong>T</strong>ake a step back (dar un paso atrás)</li>
            <li><strong>O</strong>bserve (observar)</li>
            <li><strong>P</strong>roceed mindfully (proceder con atención)</li>
          </ul>
        </li>
        <li><strong>Ejercicio de tolerancia al malestar:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Sumergir cara en agua fría (activar reflejo de inmersión)</li>
            <li>Respiración 4-7-8 (4 inhalar, 7 retener, 8 exhalar)</li>
            <li>Distracción sensorial intensa (hielo, goma elástica)</li>
          </ul>
        </li>
      </ul>

      <p className='p150'> <strong>Habilidades básicas DBT:</strong> </p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Módulo </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Habilidad clave </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mindfulness </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Observar sin juzgar </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 3 minutos diarios de escaneo corporal </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Efectividad interpersonal </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> DEAR MAN </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comunicación asertiva estructurada </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Regulación emocional </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Opuestos a la emoción </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Actuar contrario al impulso emocional </td>
          </tr>
        </tbody>
      </table>

      <p className='p16'> 📌Insomnio Crónico</p>
      <p className='p150'>
        Afecta al <strong>10-15% de adultos</strong>, con mayor prevalencia en mayores de 65 años. Se define como dificultad para iniciar o mantener el sueño al menos 3 noches por semana durante 3 meses, causando deterioro diurno.
      </p>

      <p className='p150'> <strong>Higiene del Sueño:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rutina pre-sueño:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Hora fija para acostarse/levantarse (±30 min)</li>
            <li>Actividad relajante 1 hora antes (lectura, música)</li>
            <li>Evitar pantallas 2 horas antes (luz azul)</li>
          </ul>
        </li>
        <li><strong>Ambiente óptimo:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Temperatura 18-21°C</li>
            <li>Oscuridad total (uso de antifaz si es necesario)</li>
            <li>Ruido blanco o sonidos ambientales suaves</li>
          </ul>
        </li>
      </ul>

      <p className='p150'> <strong>Sonidos Binaurales:</strong> </p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Frecuencia </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Efecto </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Duración recomendada </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1-4 Hz (Delta) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sueño profundo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 30 min antes de dormir </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 4-8 Hz (Theta) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relajación profunda </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 20-45 min diarios </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 8-13 Hz (Alpha) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Transición vigilia-sueño </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 15-30 min pre-sueño </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Intervenciones Clave</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Terapia </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Herramienta práctica </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TEPT </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> EMDR, Terapia Narrativa </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Diario de procesamiento </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TLP </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> DBT, Terapia de esquemas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tarjeta de crisis </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Insomnio </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Terapia cognitivo-conductual </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Restricción de sueño </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Estrategias de Autogestión</p>
      <p className='p16'> 🟢 Para TEPT:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Anclaje sensorial:</strong> Objeto/textura para conectar con el presente</li>
        <li><strong>Respiración cuadrada:</strong> 4-4-4-4 (inhalar, retener, exhalar, pausa)</li>
      </ul>

      <p className='p16'> 🟢 Para TLP:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lista de distracción:</strong> 10 actividades alternativas a autolesión</li>
        <li><strong>Escala emocional:</strong> Auto-monitoreo de intensidad (0-10)</li>
      </ul>

      <p className='p16'> 🟢 Para Insomnio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Control de estímulos:</strong> Cama solo para dormir (no ver TV)</li>
        <li><strong>Registro de sueño:</strong> Patrones y factores asociados</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        Estas condiciones requieren <strong>abordajes específicos y personalizados</strong>. Las intervenciones presentadas tienen sólida evidencia científica y pueden adaptarse a cada caso particular. La consistencia en la práctica y la combinación de técnicas suelen ofrecer los mejores resultados. En casos severos, siempre se recomienda supervisión profesional.
      </p>
    </div>
  );
}

export default TrasOtrasCondiciones;