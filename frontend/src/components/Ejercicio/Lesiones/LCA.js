

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Cruzado Anterior (LCA)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        La lesión del <strong>Ligamento Cruzado Anterior (LCA)</strong> es una de las lesiones deportivas más graves de la rodilla, representando el <strong>40% de todas las lesiones ligamentosas</strong> de esta articulación. 
        Es especialmente frecuente en deportes con cambios de dirección bruscos (fútbol, baloncesto, esquí) y tiene un alto impacto en la estabilidad rotatoria de la rodilla.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LCA</strong>: Se extiende desde la cara posterior del fémur hasta la tibia anterior. Está compuesto por dos fascículos (anteromedial y posterolateral).
        </li>
        <li>
          <strong>Función principal</strong>: Limita el desplazamiento anterior de la tibia y la rotación excesiva.
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Interactúa con el menisco medial y el ligamento cruzado posterior (LCP).
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento sin rotura (elasticidad aumentada)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor leve, inflamación mínima, estabilidad conservada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (25-75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, derrame articular, inestabilidad leve</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura total (mayor a 75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>"Pop" audible, dolor intenso, hemartrosis, inestabilidad marcada</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Mecanismo típico</strong>: Rotación + valgo forzado (pie fijo + rodilla en extensión)</li>
        <li><strong>Hiperextensión</strong>: Aterrizaje brusco con rodilla hiperextendida</li>
        <li><strong>Desaceleración</strong>: Cambio de dirección repentino</li>
        <li><strong>Deportes de riesgo</strong>: Fútbol (41%), baloncesto (21%), esquí (12%)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de Lachman</strong>: Gold standard (sensibilidad 85%)</li>
        <li><strong>Prueba del cajón anterior</strong>: Menos sensible pero específica</li>
        <li><strong>Pivot shift test</strong>: Evalúa inestabilidad rotatoria</li>
        <li><strong>Signo del "pop"</strong>: 70% de los pacientes refieren sonido audible</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura de Segond, avulsión tibial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar lesiones óseas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, integridad ligamentaria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación diagnóstica (sensibilidad 95%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artroscopia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización directa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico + tratamiento simultáneo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p cl50ssName='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pacientes sedentarios o de baja demanda</li>
        <li>Lesiones parciales sin inestabilidad</li>
        <li>Contraindicaciones quirúrgicas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>: RICE, movilización temprana</li>
        <li><strong>Fase subaguda (2-6 semanas)</strong>: Fortalecimiento cuádriceps/isquiotibiales</li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>: Ejercicios pliométricos y propiocepción</li>
        <li><strong>Ortesis</strong>: Rodilleras funcionales para actividades deportivas</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pacientes jóvenes y activos</li>
        <li>Lesión completa con inestabilidad</li>
        <li>Lesiones asociadas (meniscos, otros ligamentos)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reconstrucción anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Hueso-tendón-hueso (autoinjerto de rótula)</li>
            <li>Tendones isquiotibiales (semitendinoso/gracilis)</li>
            <li>Aloinjerto (en reconstrucciones revisiones)</li>
          </ul>
        </li>
        <li><strong>Técnicas de preservación del LCA</strong>: Para lesiones parciales</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con rodillera 2-4 semanas</li>
        <li>Carga progresiva según protocolo</li>
        <li>Rehabilitación prolongada (6-12 meses)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor/edema, ROM 0-90°</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, marcha normal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 70% contralateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica</strong>: Riesgo aumentado de lesiones meniscales</li>
        <li><strong>Artrosis precoz</strong>: 50-70% a 10-15 años post-lesión</li>
        <li><strong>Rigidez articular</strong>: Pérdida de extensión completa</li>
        <li><strong>Fallo del injerto</strong>: 5-10% de los casos</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas neuromusculares</strong>: Reducen incidencia en un 50%</li>
        <li><strong>Entrenamiento de aterrizaje</strong>: Flexión de rodilla/ cadera al caer</li>
        <li><strong>Fortalecimiento</strong>: Enfoque en glúteo medio y core</li>
        <li><strong>Calentamiento estructurado</strong>: FIFA 11+ para futbolistas</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La lesión del <strong> LCA </strong> requiere un enfoque multidisciplinario. Mientras el tratamiento conservador puede ser adecuado para pacientes de baja demanda, 
        la reconstrucción quirúrgica sigue siendo el estándar para atletas. La rehabilitación prolongada y los programas de prevención son esenciales 
        para minimizar el riesgo de re-lesión y artrosis secundaria.
      </p>
    </div>
  );
}

export default LCA;