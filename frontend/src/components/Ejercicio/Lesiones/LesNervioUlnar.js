

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesNervioUlnar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Lesión del Nervio Ulnar</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El nervio ulnar es clave para la función intrínseca de la mano, controlando la mayoría de los músculos intrínsecos y la sensibilidad del 5º dedo y mitad medial del 4º. 
        Su compresión en el codo (canal cubital) es la **segunda neuropatía por atrapamiento más común** en extremidades superiores. Las lesiones crónicas pueden llevar a la **"mano en garra ulnar"** característica.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Origen</strong>: Cordón medial del plexo braquial (C8-T1)</li>
        <li><strong>Recorrido crítico</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Surco epitrócleo-olecraniano (codo)</li>
            <li>Canal de Guyon (muñeca)</li>
          </ul>
        </li>
        <li><strong>Ramas motoras clave</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Músculos intrínsecos de la mano (interóseos, hipotenar, lumbricales 3-4)</li>
            <li>Flexor cubital del carpo</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Localizaciones Comunes de Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causa Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Canal cubital (codo)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome del canal cubital</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión por arcada de Osborne</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Canal de Guyon (muñeca)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome del canal de Guyon</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma repetitivo (ciclistas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arco de Struthers</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión supracondílea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bandas fibrosas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Manifestaciones Clínicas 🩺</p>
      <p className='p16'>1. Síntomas Motores</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pérdida de aducción/abducción dedos</strong>: Por afectación interóseos</li>
        <li><strong>Debilidad pinza clave (pulgar-índice)</strong>: Por afectación del aductor del pulgar</li>
        <li><strong>"Mano en garra"</strong>: Hiperextensión MCF + flexión IF (lumbricales 3-4)</li>
      </ul>

      <p className='p16'>2. Síntomas Sensitivos</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Parestesias</strong>: 5º dedo y mitad ulnar del 4º</li>
        <li><strong>Signo de Tinel positivo</strong>: Percusión en canal cubital</li>
        <li><strong>Dolor</strong>: Cara medial codo (peor en flexión prolongada)</li>
      </ul>

      <p className='p14'>Pruebas Diagnósticas 🔍</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Técnica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Positividad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Froment</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sujetar papel entre pulgar e índice</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compensación con FPL (flexión IF pulgar)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Wartenberg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Observar posición 5º dedo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abducción pasiva (por pérdida del 3er interóseo palmar)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tinel</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percusión sobre canal cubital</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parestesias en territorio ulnar</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Para Síndrome del Canal Cubital:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Órtesis nocturna</strong>: Codo en 45° de flexión</li>
        <li><strong>Modificación actividades</strong>: Evitar apoyos prolongados en codo</li>
        <li><strong>Ejercicios deslizamiento nervio</strong>: Movilizaciones neuromusculares</li>
      </ul>

      <p className='p16'>Para Síndrome del Canal de Guyon:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Evitar presión</strong>: Cambios en manejo de bicicleta/herramientas</li>
        <li><strong>Férula muñeca</strong>: Posición neutra</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Déficit motor progresivo</li>
        <li>Atrofia muscular intrínseca</li>
        <li>Falla tratamiento conservador mayor a 3 meses</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Descompresión canal cubital</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Transposición anterior subcutánea</li>
            <li>Epineurolysis</li>
          </ul>
        </li>
        <li><strong>Liberación canal de Guyon</strong>: Sección del ligamento palmar</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección, control edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retiro suturas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (3-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilidad, prevención fibrosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (mayor a 8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza intrínseca, función fina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Por inmovilización prolongada</li>
        <li><strong>Recidiva</strong>: Hasta 25% en técnicas simples</li>
        <li><strong>Déficit residual</strong>: En casos de atrofia muscular establecida</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protección codo</strong>: Evitar apoyos prolongados</li>
        <li><strong>Ergonomía laboral</strong>: Ajuste altura teclados</li>
        <li><strong>Ejercicios fortalecimiento</strong>: Músculos intrínsecos</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del nervio ulnar generan discapacidad significativa en la función fina de la mano. El diagnóstico temprano es crucial para prevenir la atrofia muscular irreversible. 
        La compresión en el codo requiere abordaje quirúrgico más frecuentemente que el síndrome del túnel carpiano. Los resultados postquirúrgicos dependen del tiempo de evolución 
        y grado de afectación preoperatorio, con recuperación completa en el 60-80% de los casos tratados oportunamente.
      </p>
    </div>
  );
}

export default LesNervioUlnar;