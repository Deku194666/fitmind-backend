

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function RadiculopatiaCervical() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Radiculopatía Cervical</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La radiculopatía cervical afecta aproximadamente al <strong>3.5% de la población general</strong>, con mayor incidencia entre los 40-50 años. 
        Representa una compresión de las raíces nerviosas cervicales, causando dolor radicular y déficit neurológico. 
        Es la segunda causa más común de radiculopatía después de la lumbar.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Raíces cervicales</strong>: Emergen entre C1-C7 (8 raíces cervicales ya que C8 sale entre C7-T1)
        </li>
        <li>
          <strong>Zonas vulnerables</strong>: Foramen intervertebral (osteofitos) y disco intervertebral (hernias)
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Arteria vertebral cercana a raíces superiores (C1-C4)
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70% casos agudos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión directa raíz nerviosa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Espondilosis</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>80% casos crónicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estrechamiento foraminal por osteofitos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Trauma</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura/subluxación vertebral</td>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>C5</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deltoides</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hombro lateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bicipital</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>C6</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bíceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pulgar y antebrazo lateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bicipital/braquiorradial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>C7</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tríceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dedo medio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tricipital</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>C8</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intrínsecos mano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4°-5° dedos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No reflejo específico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Diagnóstico 🔍</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de Spurling</strong>: Compresión cervical con rotación (sensibilidad 60%, especificidad 90%)</li>
        <li><strong>Prueba de distracción cervical</strong>: Alivio del dolor con tracción (sensibilidad 40-45%)</li>
        <li><strong>Examen neurológico</strong>: Evaluación fuerza, sensibilidad y reflejos por dermatoma</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espondilosis, alineación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea, bajo costo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hernias discales, compresión neural</td>
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
        <li>Casos leves-moderados sin déficit neurológico progresivo</li>
        <li>Primer episodio sin signos de alarma</li>
        <li>Pacientes con contraindicaciones quirúrgicas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>: AINEs, collarín blando (uso limitado)</li>
        <li><strong>Fase subaguda (2-6 semanas)</strong>: Terapia física, tracción cervical</li>
        <li><strong>Fase crónica (mayor a 6 semanas)</strong>: Ejercicios de fortalecimiento y posturales</li>
        <li><strong>Intervenciones</strong>: Infiltraciones epidurales en casos refractarios</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Déficit neurológico progresivo</li>
        <li>Falla del tratamiento conservador (6-12 semanas)</li>
        <li>Compresión medular asociada (mielopatía)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Discectomía anterior con fusión (ACDF)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Estándar para patología a 1-2 niveles</li>
            <li>Tasa de éxito 85-90%</li>
          </ul>
        </li>
        <li><strong>Foraminotomía posterior</strong>: Para compresión foraminal unilateral</li>
        <li><strong>Artroplastia discal</strong>: Alternativa en pacientes jóvenes</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>75-90% casos conservadores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación motora</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Buena si intervención temprana</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reincorporación laboral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>90% casos no quirúrgicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-4 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ergonomía postural</strong>: Ajuste de estación de trabajo</li>
        <li><strong>Ejercicios cervicales</strong>: Fortalecimiento flexores/extensores</li>
        <li><strong>Control factores de riesgo</strong>: Tabaquismo, obesidad</li>
        <li><strong>Prevención traumas</strong>: Uso cinturón de seguridad</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La radiculopatía cervical tiene un manejo principalmente conservador con excelentes resultados en la mayoría de casos. 
        El tratamiento quirúrgico está reservado para casos con déficit neurológico progresivo o refractarios. 
        La identificación temprana del nivel afectado y la causa subyacente son cruciales para seleccionar la estrategia terapéutica óptima.
      </p>
    </div>
  );
}

export default RadiculopatiaCervical;