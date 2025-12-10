

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisCuello() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis Cervical (Espondiloartrosis Cervical)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis cervical es una <strong>degeneración progresiva de las articulaciones facetarias y discos intervertebrales</strong> de la columna cervical, afectando al <strong>60-80% de mayores de 50 años</strong>. 
        Es la causa más común de dolor cervical crónico en adultos y puede producir compresión radicular o mielopatía en casos avanzados.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Segmentos afectados</strong>: C5-C6 (40%) y C6-C7 (30%) son los más frecuentes
        </li>
        <li>
          <strong>Articulaciones facetarias</strong>: Sinoviales, susceptibles a cambios artrósicos
        </li>
        <li>
          <strong>Uncus vertebral</strong>: Forma articulaciones uncovertebrales (de Luschka)
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Raíces nerviosas C5 a C8, arteria vertebral
        </li>
      </ul>

      <p className='p14'>Clasificación de la Artrosis Cervical 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones Clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Leve</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos incipientes, leve disminución del espacio discal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor cervical intermitente, rigidez matutina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Moderada</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos definidos, esclerosis subcondral, pinzamiento discal moderado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor crónico, limitación de movimiento, radiculalgia ocasional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Severa</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos grandes, estrechamiento foraminal, posible mielopatía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiculopatía persistente, déficit neurológico, mielopatía cervical</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Edad</strong>: Prevalencia aumenta al 90% en mayores de 65 años</li>
        <li><strong>Ocupacional</strong>: Trabajos con vibración o movimientos repetitivos del cuello</li>
        <li><strong>Traumatismos</strong>: Accidentes de tránsito (latigazo cervical)</li>
        <li><strong>Genética</strong>: Historia familiar de artrosis</li>
        <li><strong>Postura</strong>: "Tech neck" por uso prolongado de dispositivos</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome cervical</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor localizado en nuca (mecánico, mejora con reposo)</li>
            <li>Rigidez matutina mayor a 30 minutos</li>
            <li>Crepitación con movimientos cervicales</li>
          </ul>
        </li>
        <li><strong>Radiculopatía cervical</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor irradiado en dermatoma específico</li>
            <li>Parestesias, hipoestesia, debilidad muscular</li>
            <li>Reflejos osteotendinosos disminuidos</li>
          </ul>
        </li>
        <li><strong>Mielopatía cervical</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Marcha espástica, clonus, signo de Babinski</li>
            <li>Pérdida de destreza manual (signo del "botón")</li>
            <li>Disfunción esfinteriana en casos avanzados</li>
          </ul>
        </li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos, pinzamiento discal, esclerosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión medular/radicular, cambios degenerativos discales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación de tejidos blandos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Detalle óseo, osteofitos foraminales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>EMG</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Denervación aguda/crónica en miotomas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación radiculopatía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Artrosis cervical sin déficit neurológico</li>
        <li>Radiculopatía leve-moderada</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs (ibuprofeno, naproxeno) por periodos cortos</li>
            <li>Relajantes musculares (ciclibenzaprina, tizanidina)</li>
            <li>Analgésicos (paracetamol, tramadol)</li>
            <li>Gabapentinoides para dolor neuropático</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de fortalecimiento cervical</li>
            <li>Movilizaciones pasivas y tracción cervical</li>
            <li>Termoterapia/electroterapia</li>
          </ul>
        </li>
        <li><strong>Ortesis</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Collarín blando (uso limitado a 1-2 semanas)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infiltraciones facetarias</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corticoides + anestésico local bajo guía fluoroscópica</li>
            <li>Eficacia en 60-70% de casos seleccionados</li>
          </ul>
        </li>
        <li><strong>Bloqueos foraminales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para radiculopatías refractarias</li>
          </ul>
        </li>
        <li><strong>Rizólisis por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Denervación de articulaciones facetarias dolorosas</li>
            <li>Alivio por 6-12 meses</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Mielopatía cervical progresiva</li>
        <li>Radiculopatía con déficit motor severo/persistente</li>
        <li>Fallo de tratamiento conservador mayor a 3 meses</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Descompresión anterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Discectomía cervical anterior con fusión (ACDF)</li>
            <li>Corpectomía para compresión multinivel</li>
          </ul>
        </li>
        <li><strong>Descompresión posterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Laminectomía o laminoplastia</li>
          </ul>
        </li>
        <li><strong>Artroplastia cervical</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prótesis discal en casos seleccionados</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intervenciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control del dolor, protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modificación actividades, termoterapia</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM, inicio fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios isométricos, movilizaciones</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avanzada (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento profundo, reeducación postural</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios contra resistencia, ergonomía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Radiculopatía irreversible</strong>: Por compresión prolongada</li>
        <li><strong>Mielopatía cervical</strong>: Daño medular permanente</li>
        <li><strong>Síndrome de la arteria vertebral</strong>: Por osteofitos grandes</li>
        <li><strong>Disfagia</strong>: En artrosis cervical anterior severa</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ergonomía postural</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ajuste de estaciones de trabajo</li>
            <li>Posición neutra de cabeza al usar dispositivos</li>
          </ul>
        </li>
        <li><strong>Ejercicios cervicales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento de músculos profundos</li>
            <li>Movilizaciones suaves diarias</li>
          </ul>
        </li>
        <li><strong>Control de factores metabólicos</strong>: Diabetes, obesidad</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis cervical es una condición <strong>frecuente y potencialmente discapacitante</strong> que requiere enfoque escalonado. 
        Mientras la mayoría de pacientes responden al manejo conservador, los casos con compromiso neurológico pueden requerir intervención quirúrgica. 
        La educación postural y el ejercicio terapéutico son pilares fundamentales para prevenir la progresión y mantener la funcionalidad cervical.
      </p>
    </div>
  );
}

export default ArtrosisCuello;