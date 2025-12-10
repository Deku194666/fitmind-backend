

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisLumbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis Lumbar (Espondiloartrosis Lumbar)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis lumbar es una <strong>degeneración progresiva de las articulaciones facetarias y discos intervertebrales</strong> de la columna lumbar, afectando al <strong>70% de mayores de 40 años</strong>. 
        Es la causa más común de lumbalgia crónica en adultos y puede producir compresión radicular o estenosis lumbar en casos avanzados.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Segmentos afectados</strong>: L4-L5 (45%) y L5-S1 (40%) son los más frecuentes
        </li>
        <li>
          <strong>Articulaciones facetarias</strong>: Sinoviales, con orientación sagital que limita la rotación
        </li>
        <li>
          <strong>Disco intervertebral</strong>: Nucleo pulposo y anillo fibroso sujeto a deshidratación
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Raíces nerviosas L4 a S1, cauda equina
        </li>
      </ul>

      <p className='p14'>Clasificación de la Artrosis Lumbar 📊</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lumbalgia mecánica intermitente, rigidez matutina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Moderada</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos definidos, esclerosis subcondral, pinzamiento discal moderado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor crónico, limitación de movimiento, ciatalgia ocasional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Severa</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos grandes, estrechamiento foraminal, espondilolistesis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiculopatía persistente, claudicación neurogénica, déficit neurológico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Edad</strong>: Prevalencia ,mayor a 80% en mayores de 55 años</li>
        <li><strong>Ocupacional</strong>: Trabajos con levantamiento de pesos o vibración</li>
        <li><strong>Obesidad</strong>: Aumenta carga sobre articulaciones facetarias</li>
        <li><strong>Sedentarismo</strong>: Debilidad de musculatura paravertebral</li>
        <li><strong>Traumatismos</strong>: Fracturas vertebrales previas</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome lumbar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor localizado en región lumbar (mecánico, mejora en decúbito)</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Crepitación con movimientos</li>
          </ul>
        </li>
        <li><strong>Radiculopatía lumbar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ciatalgia (dolor irradiado a glúteo/pierna en dermatoma específico)</li>
            <li>Signo de Lasègue positivo</li>
            <li>Debilidad muscular segmentaria</li>
          </ul>
        </li>
        <li><strong>Estenosis lumbar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Claudicación neurogénica (dolor al caminar que mejora al sentarse)</li>
            <li>Parestesias en ambas piernas</li>
            <li>Disfunción vesical en casos avanzados</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos, pinzamiento discal, esclerosis facetaria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión radicular, degeneración discal, estenosis canal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio gold standard</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Detalle óseo, osteofitos foraminales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>EMG</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Denervación en miotomas afectados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diferenciar radiculopatía de neuropatía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Artrosis lumbar sin déficit neurológico</li>
        <li>Radiculopatía leve-moderada</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs (diclofenaco, celecoxib) por periodos cortos</li>
            <li>Relajantes musculares (tiocolchicósido)</li>
            <li>Analgésicos (paracetamol, tramadol)</li>
            <li>Antineuríticos (gabapentina, pregabalina) para dolor radicular</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de fortalecimiento core (transverso abdominal, multífidos)</li>
            <li>Terapia manual (McKenzie, Maitland)</li>
            <li>Electroterapia analgésica (TENS)</li>
          </ul>
        </li>
        <li><strong>Modificaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Evitar sedentarismo</li>
            <li>Reducción de peso en obesos</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infiltraciones facetarias</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corticoides intraarticulares bajo guía fluoroscópica</li>
            <li>Eficacia en 50-60% de casos seleccionados</li>
          </ul>
        </li>
        <li><strong>Bloqueos epidurales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para radiculopatías refractarias</li>
          </ul>
        </li>
        <li><strong>Rizólisis por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Denervación de ramas mediales para dolor facetario</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Síndrome de cauda equina (urgencia)</li>
        <li>Radiculopatía con déficit motor progresivo</li>
        <li>Estenosis lumbar con claudicación incapacitante</li>
        <li>Fallo de tratamiento conservador mayor a 6 meses</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Descompresión</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Laminectomía descompresiva</li>
            <li>Foraminotomía para liberación radicular</li>
          </ul>
        </li>
        <li><strong>Fusión lumbar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Artrodesis posterolateral con instrumentación</li>
            <li>TLIF/PLIF (fusión intercorporal)</li>
          </ul>
        </li>
        <li><strong>Técnicas dinámicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Stabilink (sistema de estabilización dinámica)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reposo relativo, educación postural</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar movilidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de flexibilización, hidroterapia</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avanzada (mayor a 6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento profundo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de core stability, reentrenamiento funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Radiculopatía crónica</strong>: Por compresión prolongada</li>
        <li><strong>Síndrome de cauda equina</strong>: Urgencia quirúrgica</li>
        <li><strong>Estenosis lumbar severa</strong>: Claudicación neurogénica incapacitante</li>
        <li><strong>Inestabilidad vertebral</strong>: Espondilolistesis degenerativa</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Higiene postural</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnicas adecuadas para levantar pesos</li>
            <li>Adaptación ergonómica de puestos de trabajo</li>
          </ul>
        </li>
        <li><strong>Ejercicio regular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento de musculatura abdominal y lumbar</li>
            <li>Actividades de bajo impacto (natación, ciclismo)</li>
          </ul>
        </li>
        <li><strong>Control de peso</strong>: Reducción de IMC mayor a 25</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis lumbar es una condición <strong>prevalente y multifactorial</strong> cuyo manejo requiere enfoque multidisciplinario. 
        El tratamiento conservador es efectivo en la mayoría de casos, reservando la cirugía para situaciones con compromiso neurológico. 
        La prevención mediante ejercicio terapéutico y corrección postural es clave para reducir la progresión y mantener la funcionalidad.
      </p>
    </div>
  );
}

export default ArtrosisLumbar;