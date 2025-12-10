

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesNervioCiatico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Lesión del Nervio Ciático</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El nervio ciático es el **nervio más largo y voluminoso** del cuerpo humano (L4-S3). Controla la musculatura posterior del muslo y toda la pierna distal a la rodilla. 
        Su lesión causa **discapacidad severa** en la marcha y tiene múltiples etiologías, desde compresiones hasta traumatismos. La **ciática** (dolor irradiado en su trayecto) 
        afecta al **10-40%** de la población en algún momento de su vida.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Origen</strong>: Plexo sacro (raíces L4-S3)</li>
        <li><strong>Recorrido crítico</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Borde inferior del piriforme (posible atrapamiento)</li>
            <li>Porción posterior del muslo</li>
            <li>Bifurcación en poplítea (n. tibial y n. peroneo común)</li>
          </ul>
        </li>
        <li><strong>Ramas importantes</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio tibial (flexión plantar, sensibilidad plantar)</li>
            <li>Nervio peroneo común (dorsiflexión, eversión)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Salida pélvica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome del piriforme</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipertrofia/espasmo del piriforme</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Región glútea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma iatrogénico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inyecciones intramusculares</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fémur posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas de fémur</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Manifestaciones Clínicas 🩺</p>
      <p className='p16'>1. Síntomas Motores</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Debilidad flexión rodilla</strong>: Semitendinoso, semimembranoso, bíceps femoral</li>
        <li><strong>Pie caído</strong>: Si afectación predominante de fibras peroneas</li>
        <li><strong>Imposibilidad para ponerse de puntillas</strong>: Si afectación tibial</li>
      </ul>

      <p className='p16'>2. Síntomas Sensitivos</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor irradiado</strong>: Desde glúteo hasta pie (dermatomas L4-S2)</li>
        <li><strong>Parestesias</strong>: Cara posterior muslo, pierna y pie</li>
        <li><strong>Signo de Lasègue positivo</strong>: Dolor al elevar pierna extendida mayor a 30°</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lasègue</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Elevación pierna extendida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor menor a 30° sugiere compresión radicular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>FAIR test</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flexión+aducción+rotación interna cadera</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en síndrome piriforme</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>EMG/NCV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio conducción nerviosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Localiza nivel lesión (sensibilidad 85%)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Para Ciática por Hernia Discal:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reposo relativo</strong>: Máximo 2-3 días</li>
        <li><strong>AINEs + relajantes musculares</strong>: Control sintomático</li>
        <li><strong>Ejercicios de McKenzie</strong>: Para hernias contenidas</li>
        <li><strong>Infiltraciones epidurales</strong>: En casos refractarios</li>
      </ul>

      <p className='p16'>Para Síndrome del Piriforme:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Estiramientos piriforme</strong>: Rotación externa cadera en flexión</li>
        <li><strong>Terapia manual </strong> </li>
        <li><strong>Modificación actividades</strong>: Evitar sentado prolongado</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Déficit motor progresivo (pie caído)</li>
        <li>Síndrome de cauda equina (urgente)</li>
        <li>Falla tratamiento conservador mayor a 6-12 semanas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Discectomía lumbar</strong>: Para hernias discales compresivas</li>
        <li><strong>Neurolisis</strong>: En atrapamientos por fibrosis</li>
        <li><strong>Reparación microquirúrgica</strong>: Para lesiones traumáticas completas</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, prevención contracturas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta resolución dolor agudo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (4-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación arco de movimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (mayora 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reentrenamiento marcha, fuerza</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome de dolor regional complejo</strong>: Hasta 5% postquirúrgico</li>
        <li><strong>Pie equino</strong>: Por fibrosis en denervación crónica</li>
        <li><strong>Ulceraciones plantares</strong>: Por pérdida sensibilidad</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Higiene postural</strong>: Técnicas adecuadas de levantamiento</li>
        <li><strong>Fortalecimiento core</strong>: Músculos lumbares y abdominales</li>
        <li><strong>Ergonomía laboral</strong>: Ajuste de asientos para conductores</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del ciático representan un desafío multidisciplinario por su impacto en la movilidad y alta prevalencia. 
        El 90% de los casos por hernia discal mejoran con tratamiento conservador en 6 semanas. Las lesiones traumáticas requieren 
        intervención temprana para optimizar recuperación. La rehabilitación prolongada es clave para prevenir secuelas funcionales, 
        especialmente en lesiones completas donde la recuperación puede tardar **12-18 meses**.
      </p>
    </div>
  );
}

export default LesNervioCiatico;