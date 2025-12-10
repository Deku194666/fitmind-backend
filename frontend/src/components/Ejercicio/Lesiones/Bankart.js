

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Bankart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión de Bankart</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión de Bankart es una de las <strong>causas más comunes de inestabilidad anterior del hombro</strong>, representando aproximadamente el <strong>85% de los casos de luxación glenohumeral traumática</strong>.
        Esta lesión ocurre cuando el labrum glenoideo y los ligamentos glenohumerales se desprenden del borde anterior de la glenoides, resultando en pérdida de la estabilidad estática de la articulación.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Labrum glenoideo</strong>: Rodete fibrocartilaginoso que profundiza la cavidad glenoidea (aumenta 50% la congruencia)
        </li>
        <li>
          <strong>Complejo ligamentoso inferior</strong>: Principal estabilizador contra la traslación anterior con el brazo en abducción y rotación externa
        </li>
        <li>
          <strong>Zona de inserción</strong>: El labrum sirve como punto de anclaje para los ligamentos glenohumerales y el tendón de la porción larga del bíceps
        </li>
      </ul>

      <p className='p14'>Clasificación de las Lesiones de Bankart 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Implicancias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Bankart clásico</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desprendimiento del labrum y ligamento glenohumeral inferior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad anterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Bankart óseo</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura por avulsión del borde anteroinferior de la glenoides</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor riesgo de recurrencia (mayor a 30%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>ALPSA</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión Bankart desplazada medialmente (Anterior Labroligamentous Periosteal Sleeve Avulsion)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Forma crónica, más difícil de diagnosticar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>GLAD</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro labral con defecto cartilaginoso adyacente (Glenoid Labral Articular Disruption)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor sin inestabilidad marcada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>HAGL</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión humeral del ligamento glenohumeral (Humeral Avulsion of Glenohumeral Ligament)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Requiere reparación quirúrgica específica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación anterior traumática</strong>: Brazo en abducción, rotación externa y extensión (posición de lanzamiento)</li>
        <li><strong>Impacto directo</strong>: Golpe posterior sobre el hombro en posición vulnerable</li>
        <li><strong>Microtrauma repetitivo</strong>: En atletas de lanzamiento (pitchers, tenistas)</li>
        <li><strong>Deportes de riesgo</strong>: Fútbol americano (25%), rugby (20%), hockey (15%)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de apreensión</strong>: Dolor/inestabilidad en abducción y rotación externa</li>
        <li><strong>Prueba de relocación</strong>: Alivia los síntomas de apreensión</li>
        <li><strong>Prueba de carga y desplazamiento</strong>: Evalúa traslación humeral anterior</li>
        <li><strong>Signo del surco</strong>: Sugiere laxitud multidireccional asociada</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de Hill-Sachs, Bankart óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar defectos óseos asociados</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desprendimiento labral, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 85-95% para Bankart</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Detalle de lesiones labrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor precisión para ALPSA/GLAD</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TC 3D</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación defectos óseos glenoideos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuantificar pérdida ósea (mayor  20% indica Latarjet)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Primera luxación en pacientes mayor a 40 años</li>
        <li>Pacientes sedentarios con mínima inestabilidad</li>
        <li>Contraindicaciones quirúrgicas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-3 semanas)</strong>: Inmovilización breve (1-2 semanas), control dolor</li>
        <li><strong>Fase subaguda (3-6 semanas)</strong>: Recuperación progresiva de ROM</li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>: Fortalecimiento rotadores y escapulotorácicos</li>
        <li><strong>Retorno deportivo</strong>: No antes de 12 semanas, con protección</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pacientes jóvenes (menor a 25 años) con primera luxación</li>
        <li>Luxaciones recurrentes (≥2 episodios)</li>
        <li>Atletas de lanzamiento o deportes de contacto</li>
        <li>Defecto óseo glenoideo mayor a 20% o lesión de Hill-Sachs grande</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación artroscópica de Bankart</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reinserción labral con anclajes (3-4 anclajes usualmente)</li>
            <li>Capsulorrafia asociada</li>
          </ul>
        </li>
        <li><strong>Procedimientos óseos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Latarjet (transferencia coracoidea)</li>
            <li>Injerto óseo (iliaco, distal de clavícula)</li>
          </ul>
        </li>
        <li><strong>Procedimientos abiertos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Bankart abierto (en casos seleccionados)</li>
            <li>Reparación de HAGL</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con cabestrillo 4-6 semanas</li>
        <li>Progresión lenta de ROM (evitar rotación externa inicial)</li>
        <li>Fortalecimiento iniciado a las 8-10 semanas</li>
        <li>Retorno deportivo a los 6-9 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (4-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo pasivo/activo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (8-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento inicial (isométrico)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento avanzado, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios específicos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 12 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad recurrente</strong>: 5-15% post-reparación artroscópica</li>
        <li><strong>Rigidez postquirúrgica</strong>: Pérdida de rotación externa</li>
        <li><strong>Artrosis glenohumeral</strong>: A largo plazo (10-20 años)</li>
        <li><strong>Fallo del anclaje</strong>: Migración o fallo de integración</li>
        <li><strong>Neuropraxia</strong>: Nervio axilar o musculocutáneo</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas de fortalecimiento</strong>: Enfoque en rotadores y escapulotorácicos</li>
        <li><strong>Modificación técnica</strong>: En atletas de lanzamiento</li>
        <li><strong>Protecciones</strong>: En deportes de contacto</li>
        <li><strong>Rehabilitación completa</strong>: Antes de retorno deportivo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La lesión de Bankart representa un desafío terapéutico que requiere un enfoque individualizado. Mientras que la reparación artroscópica ofrece excelentes resultados en la mayoría de los casos, 
        los defectos óseos significativos pueden requerir procedimientos de aumento óseo como el Latarjet. La rehabilitación postoperatoria meticulosa y progresiva es fundamental para restaurar la función 
        completa y prevenir recurrencias, especialmente en la población atlética.
      </p>
    </div>
  );
}

export default Bankart;