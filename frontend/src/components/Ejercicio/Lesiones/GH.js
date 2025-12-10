

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function GH() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión de los Ligamentos Glenohumerales del Hombro</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        La lesión de los <strong>Ligamentos Glenohumerales</strong> es una causa frecuente de inestabilidad y dolor en el hombro, representando aproximadamente el <strong>30% de todas las lesiones de la articulación glenohumeral</strong>. 
        Estos ligamentos son cruciales para la estabilidad estática del hombro, especialmente en los rangos extremos de movimiento. Son particularmente relevantes en deportes de lanzamiento y actividades con movimientos por encima de la cabeza.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Ligamento glenohumeral superior (LGHS)</strong>: Se extiende desde el borde superior de la glenoides hasta la parte superior del húmero. Limita la traslación inferior y la rotación externa.
        </li>
        <li>
          <strong>Ligamento glenohumeral medio (LGHM)</strong>: Desde la parte anterosuperior de la glenoides hasta el húmero. Estabiliza contra la traslación anterior con el brazo en abducción de 45°.
        </li>
        <li>
          <strong>Ligamento glenohumeral inferior (LGHI)</strong>: El más importante, forma un complejo en forma de hamaca. Tiene dos bandas (anterior y posterior) que limitan la traslación anterior y posterior respectivamente.
        </li>
      </ul>

      <p className='p14'>Clasificación de la Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microtrauma sin laxitud clínica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor con movimientos extremos, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento/rotura parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor + inestabilidad subjetiva, subluxaciones</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación franca o inestabilidad multidireccional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma agudo</strong>: Caída con brazo en abducción y rotación externa (luxación anterior)</li>
        <li><strong>Microtrauma repetitivo</strong>: Atletas de lanzamiento (pitchers, tenistas)</li>
        <li><strong>Hiperlaxitud congénita</strong>: Síndrome de Ehlers-Danlos o Marfan</li>
        <li><strong>Deportes de riesgo</strong>: Rugby (22%), baloncesto (18%), natación (15%)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de apreensión</strong>: Evalúa inestabilidad anterior</li>
        <li><strong>Prueba de sulcus</strong>: Para inestabilidad inferior</li>
        <li><strong>Prueba de relocación</strong>: Diferencia dolor de inestabilidad</li>
        <li><strong>Prueba de carga y desplazamiento</strong>: Evalúa traslación humeral</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar fracturas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad ligamentaria, labrum</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación de tejidos blandos (sensibilidad 85%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarros labrales, lesión HAGL</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor precisión para lesiones capsuloligamentarias</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Primera luxación en pacientes mayores de 40 años</li>
        <li>Inestabilidad multidireccional sin trauma claro</li>
        <li>Pacientes sedentarios o de baja demanda</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-3 semanas)</strong>: Inmovilización breve, control dolor/edema</li>
        <li><strong>Fase subaguda (3-6 semanas)</strong>: Recuperación ROM progresiva</li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>: Fortalecimiento rotadores y escapulares</li>
        <li><strong>Fase de retorno (3-6 meses)</strong>: Ejercicios específicos deportivos</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Luxaciones recurrentes (especialmente en jóvenes)</li>
        <li>Lesión de Bankart o HAGL</li>
        <li>Fracaso del tratamiento conservador</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación artroscópica de Bankart</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reinserción labral con anclajes</li>
            <li>Plicatura capsular</li>
          </ul>
        </li>
        <li><strong>Procedimientos abiertos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Procedimiento de Latarjet (transferencia coracoidea)</li>
            <li>Reparación de HAGL</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con cabestrillo 3-6 semanas</li>
        <li>Rehabilitación progresiva con protección de la reparación</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección, control dolor, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo pasivo, inicio fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios específicos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-9 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad recurrente</strong>: Hasta 20% en pacientes jóvenes</li>
        <li><strong>Rigidez postquirúrgica</strong>: Pérdida de rotación externa</li>
        <li><strong>Artrosis glenohumeral</strong>: A largo plazo por inestabilidad crónica</li>
        <li><strong>Lesión del nervio axilar</strong>: En luxaciones o cirugías</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento escapular</strong>: Base para la estabilidad dinámica</li>
        <li><strong>Control neuromuscular</strong>: Entrenamiento de los rotadores</li>
        <li><strong>Modificación técnica</strong>: En deportes de lanzamiento</li>
        <li><strong>Programas de prehabilitación</strong>: Para atletas de riesgo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones de los <strong>Ligamentos Glenohumerales</strong> requieren un enfoque individualizado basado en la edad, nivel de actividad y tipo de inestabilidad. 
        Mientras que el tratamiento conservador puede ser efectivo en casos seleccionados, la reparación artroscópica ofrece excelentes resultados en pacientes con inestabilidad traumática recurrente. 
        La rehabilitación prolongada y el fortalecimiento de la musculatura periarticular son esenciales para prevenir recurrencias.
      </p>
    </div>
  );
}

export default GH;