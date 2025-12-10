

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function RadiculopatiaLumbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Radiculopatía Lumbar</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La radiculopatía lumbar afecta aproximadamente al <strong>3-5% de la población</strong>, siendo una de las causas más comunes de dolor lumbar irradiado. 
        El 90% de los casos ocurren en los niveles <strong>L4-L5 y L5-S1</strong>. Es más frecuente entre los 30-50 años y tiene un impacto significativo en la capacidad laboral.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Raíces lumbares</strong>: Emergen desde L1 hasta S1, formando el plexo lumbosacro
        </li>
        <li>
          <strong>Puntos críticos</strong>: Receso lateral (hernias posterolaterales) y foramen intervertebral (estenosis)
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Nervio ciático (L4-S3) y cauda equina
        </li>
      </ul>

      <p className='p14'>Etiología y Factores de Riesgo 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causa</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Hernia discal</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>75% casos agudos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión por núcleo pulposo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Estenosis foraminal</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60% casos crónicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipertrofia facetaria/osteofitos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Síndrome facetario</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>15-30%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inflamación articular</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Niveles Afectados y Manifestaciones Clínicas 🩺</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nivel</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Déficit Motor</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Déficit Sensitivo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Reflejo Afectado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>L3-L4</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuádriceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cara anterior muslo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Patelar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>L4-L5</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extensor dedo gordo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cara lateral pierna</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No específico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>L5-S1</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gastrocnemio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cara posterior pierna</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aquiliano</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Diagnóstico 🔍</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de elevación pierna recta (Lasègue)</strong>: Sensibilidad 91% para hernia discal</li>
        <li><strong>Prueba de Bragard</strong>: Aumenta especificidad de Lasègue</li>
        <li><strong>Examen neurológico focal</strong>: Evaluación fuerza, reflejos y sensibilidad</li>
        <li><strong>Signo de Waddell</strong>: Para identificar componentes no orgánicos</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Utilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alteraciones estructurales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea, descartar inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hernias discales, compresión nerviosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard (sensibilidad 95%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>EMG/NCV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión radicular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación nivel afectado</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Casos sin déficit neurológico progresivo</li>
        <li>Primer episodio sin signos de alarma</li>
        <li>Pacientes con síntomas leves-moderados</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>: AINEs, reposo relativo (≤2 días)</li>
        <li><strong>Fase subaguda (2-6 semanas)</strong>: Terapia física, ejercicios McKenzie</li>
        <li><strong>Fase crónica (mayor a 6 semanas)</strong>: Fortalecimiento core, ejercicios de estabilización</li>
        <li><strong>Intervenciones</strong>: Infiltraciones epidurales/foraminales guiadas</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Síndrome de cauda equina (urgencia absoluta)</li>
        <li>Déficit neurológico progresivo</li>
        <li>Falla tratamiento conservador (6-12 semanas)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Discectomía lumbar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Estándar para hernias discales</li>
            <li>Tasa de éxito 85-90%</li>
          </ul>
        </li>
        <li><strong>Laminectomía/foraminotomía</strong>: Para estenosis foraminal</li>
        <li><strong>Fusión lumbar</strong>: Casos con inestabilidad asociada</li>
      </ul>

      <p className='p14'>Rehabilitación y Pronóstico 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Aspecto</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Expectativa</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alivio dolor radicular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>80% casos conservadores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación motora</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Buena si intervención temprana</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-12 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reincorporación laboral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>85% casos no quirúrgicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-6 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Mecánica corporal adecuada</strong>: Técnicas de levantamiento</li>
        <li><strong>Fortalecimiento core</strong>: Ejercicios abdominales y lumbares</li>
        <li><strong>Control de peso</strong>: Reducción carga lumbar</li>
        <li><strong>Ejercicio regular</strong>: Natación, caminata, yoga</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La radiculopatía lumbar tiene un excelente pronóstico con manejo conservador en la mayoría de casos. 
        El tratamiento quirúrgico está indicado en déficits neurológicos progresivos o síndrome de cauda equina. 
        La prevención mediante ejercicios de fortalecimiento y adecuada mecánica corporal es fundamental para reducir recurrencias.
      </p>
    </div>
  );
}

export default RadiculopatiaLumbar;