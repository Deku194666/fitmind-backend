

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxColumna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Columna y Costillas</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de columna representan <strong>5-6% de todas las fracturas óseas</strong>, mientras que las fracturas costales son las más frecuentes 
        en trauma torácico (35-40%). Su importancia radica en el potencial de compromiso neurológico y complicaciones respiratorias, 
        requiriendo un enfoque multidisciplinario.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Columna vertebral</strong>: 33 vértebras (7 cervicales, 12 torácicas, 5 lumbares, 5 sacras, 4 coccígeas)</li>
        <li><strong>Unidades funcionales</strong>: Cuerpo vertebral, pedículos, láminas, procesos articulares</li>
        <li><strong>Costillas</strong>: 12 pares (7 verdaderas, 3 falsas, 2 flotantes), articulaciones costovertebrales</li>
        <li><strong>Estructuras críticas</strong>: Médula espinal, raíces nerviosas, pleura, paquete vasculonervioso intercostal</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas Vertebrales 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Compresión</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Axial + flexión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colapso cuerpo vertebral anterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estable si &lt;50% altura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Burst</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga axial pura</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura todo el cuerpo vertebral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable si compromete canal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Chance</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flexión-distracción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura horizontal través elementos posteriores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable (lesión de 3 columnas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fractura-luxación</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerzas combinadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disrupción de las 3 columnas + desplazamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Altamente inestable</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Clasificación de Fracturas Costales 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Riesgo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Simples</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Unilateral, 1-3 costillas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bajo (5% complicaciones)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Múltiples</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥3 costillas consecutivas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tórax inestable si &gt;3 segmentos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Bilaterales</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arco costal completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fallo respiratorio (40%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Flail chest</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥3 fracturas por costilla</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Paradoja respiratoria</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Alta energía</strong>: Accidentes vehiculares (45%), caídas de altura (20%)</li>
        <li><strong>Trauma directo</strong>: Impactos deportivos, agresiones</li>
        <li><strong>Osteoporosis</strong>: Fracturas por fragilidad (especialmente T12-L2)</li>
        <li><strong>Trauma penetrante</strong>: Heridas por arma blanca o de fuego</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Inicial (ATLS)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>ABCDE</strong>: Priorizar vía aérea y ventilación</li>
        <li><strong>Examen neurológico</strong>: Nivel sensoriomotor, reflejos</li>
        <li><strong>Puntos dolorosos</strong>: Apófisis espinosas, líneas paravertebrales</li>
        <li><strong>Signos de alarma</strong>: Priapismo, shock neurogénico</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Screening inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas evidentes, alineación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso canal, fragmentos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso medular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema medular, hematoma</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía FAST</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma múltiple</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hemotórax, hemoperitoneo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas vertebrales estables sin déficit neurológico</li>
        <li>Fracturas costales simples (&lt;3 costillas, no desplazadas)</li>
        <li>Pacientes de alto riesgo quirúrgico</li>
      </ul>

      <p className='p16'>Protocolos:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Columna estable</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ortesis rígida (TLSO para toracolumbares)</li>
            <li>Analgesia multimodal (evitar AINEs en fracturas por compresión)</li>
            <li>Movilización temprana con protección</li>
            <li>Control imagenológico a las 6 semanas</li>
          </ul>
        </li>
        <li><strong>Costillas simples</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Analgesia (bloqueos intercostales si necesario)</li>
            <li>Ejercicios respiratorios (espirometría incentiva)</li>
            <li>Evitar vendajes compresivos</li>
            <li>Fisioterapia respiratoria precoz</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones Absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Déficit neurológico progresivo</li>
        <li>Compresión medular aguda</li>
        <li>Inestabilidad biomecánica severa</li>
        <li>Flail chest con insuficiencia respiratoria</li>
        <li>Fracturas abiertas con contaminación</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Columna</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Descompresión + fusión posterior (pedicle screws)</li>
            <li>Corpectomía + cage anterior (para burst fractures)</li>
            <li>Osteosíntesis percutánea (fracturas seleccionadas)</li>
            <li>Cifoplastia/vertebroplastia (fracturas osteoporóticas)</li>
          </ul>
        </li>
        <li><strong>Costillas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fijación interna con placas (flail chest sintomático)</li>
            <li>Toracotomía por hemotórax masivo</li>
            <li>Drenaje pleural por neumotórax a tensión</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Columna</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Costillas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, analgesia, evitar flexión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios respiratorios, control dolor</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento core, movilización progresiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramientos, recuperación amplitud</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reeducación postural, ejercicios funcionales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento intercostales, reintegración</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Mantenimiento (mayor a 6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevención osteoporosis, ejercicio regular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Actividades aeróbicas, fortalecimiento</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Neurológicas</strong>: Déficit motor/sensorial, síndrome de cauda equina</li>
        <li><strong>Respiratorias</strong>: Neumonía, atelectasias, SDRA (en fracturas múltiples costales)</li>
        <li><strong>Vasculares</strong>: Hematoma epidural, lesión de arteria de Adamkiewicz</li>
        <li><strong>Mecánicas</strong>: Cifosis progresiva, pseudoartrosis</li>
        <li><strong>Sistémicas</strong>: Tromboembolismo pulmonar, úlceras por presión</li>
      </ul>

      <p className='p14'>Consideraciones Especiales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pacientes ancianos</strong>: Mayor riesgo de complicaciones respiratorias y tromboembólicas</li>
        <li><strong>Politraumatizados</strong>: Evaluar lesiones asociadas (aorta, vísceras)</li>
        <li><strong>Osteoporosis</strong>: Iniciar tratamiento antirresortivo post-fractura</li>
        <li><strong>Pacientes pediátricos</strong>: Mayor elasticidad costal, menor incidencia de fracturas</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        El manejo de las fracturas de columna y costillas requiere una evaluación integral del estado neurológico, 
        estabilidad biomecánica y función respiratoria. Mientras las fracturas estables pueden tratarse conservadoramente, 
        las lesiones inestables o con compromiso neurológico requieren intervención quirúrgica temprana. La rehabilitación 
        multidisciplinaria es esencial para optimizar la recuperación funcional y prevenir complicaciones a largo plazo, 
        especialmente en pacientes con trauma de alta energía o fracturas múltiples.
      </p>
    </div>
  );
}

export default FxColumna;