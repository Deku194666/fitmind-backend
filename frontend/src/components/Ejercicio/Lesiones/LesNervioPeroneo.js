

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesNervioPeroneo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Lesión del Nervio Peroneo Común</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El nervio peroneo común (L4-S2) es la rama más vulnerable del ciático, con alta incidencia de lesión por su trayecto superficial alrededor de la cabeza del peroné. 
        Es la **causa más frecuente de pie caído adquirido**, representando hasta el **75%** de las mononeuropatías de miembro inferior. Su afectación produce incapacidad para la dorsiflexión y eversión del pie.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Origen</strong>: Rama del ciático poplíteo externo (L4-S2)</li>
        <li><strong>Recorrido crítico</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Cuello fibular (punto de máxima vulnerabilidad)</li>
            <li>Bifurcación en peroneo superficial y profundo</li>
          </ul>
        </li>
        <li><strong>Inervación motora</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Peroneo profundo</strong>: Tibial anterior, extensores dedos (dorsiflexión)</li>
            <li><strong>Peroneo superficial</strong>: Peroneo largo y corto (eversión)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Localizaciones Comunes de Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causa Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuello fibular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión externa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilizaciones prolongadas, posiciones en cuclillas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arco fibular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Atrapamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fibrosis postraumática</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma agudo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación rodilla/fracturas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Accidentes de tráfico, deportivos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Manifestaciones Clínicas 🩺</p>
      <p className='p16'>1. Síntomas Motores</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pie caído</strong>: Incapacidad para dorsiflexión (marcha en steppage)</li>
        <li><strong>Debilidad eversión</strong>: Por afectación peroneo superficial</li>
        <li><strong>Atrofia tibial anterior</strong>: Visible en casos crónicos</li>
      </ul>

      <p className='p16'>2. Síntomas Sensitivos</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hipoestesia</strong>: Cara lateral pierna y dorso del pie</li>
        <li><strong>Tinel positivo</strong>: Percusión en cuello fibular</li>
        <li><strong>Dolor</strong>: Poco frecuente (excepto en síndromes compresivos)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Test dorsiflexión resistida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pedir levantar pie contra resistencia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Debilidad tibial anterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Test eversión resistida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pedir eversión contra resistencia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Debilidad peroneos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>EMG/NCV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio conducción nerviosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Localiza nivel lesión (sensibilidad 90%)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Para Compresiones Leves:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Órtesis de pie caído</strong></li>
        <li><strong>Modificación de hábitos</strong>: Evitar cruzar piernas</li>
        <li><strong>Terapia física</strong>: Electroestimulación, ejercicios de rango</li>
      </ul>

      <p className='p16'>Para Neuropraxia Postraumática:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Observación</strong>: Hasta 3-6 meses (tiempo de regeneración axonal)</li>
        <li><strong>Vitamina B12</strong>: Posible efecto neurotrófico</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pie caído persistente mayor a 3-6 meses</li>
        <li>EMG con denervación aguda sin mejoría</li>
        <li>Lesiones traumáticas completas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Neurolisis</strong>: Liberación en cuello fibular</li>
        <li><strong>Transferencia tendinosa</strong>: Tibial posterior a dorsiflexores</li>
        <li><strong>Injerto nervioso</strong>: En defectos mayor a 3cm</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevenir equino, mantener ROM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta recuperación motora inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reentrenamiento marcha</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza selectiva, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Deformidad en equinovaro</strong>: Por desbalance muscular</li>
        <li><strong>Ulceraciones dorso del pie</strong>: Por pérdida sensitiva</li>
        <li><strong>Fallo transferencia tendinosa</strong>: Hasta 20% de casos</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protección cuello fibular</strong>: En cirugías prolongadas</li>
        <li><strong>Educación pacientes</strong>: Evitar posiciones compresivas</li>
        <li><strong>Vigilancia EMG</strong>: En fracturas de peroné proximal</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del peroneo común requieren diagnóstico precoz por su impacto en la marcha. El 70% de las neuropraxias se recuperan espontáneamente en 3 meses. 
        En casos quirúrgicos, la neurolisis tiene éxito en el 85% si se realiza dentro de los 6 meses. Las transferencias tendinosas ofrecen buenos resultados funcionales 
        cuando la reparación nerviosa no es posible, permitiendo marcha sin órtesis en el 65% de los casos.
      </p>
    </div>
  );
}

export default LesNervioPeroneo;