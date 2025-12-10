

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCL() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Colateral Lateral (LCL)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        El <strong>Ligamento Colateral Lateral (LCL)</strong> es el principal estabilizador contra las fuerzas en varo de la rodilla, representando el <strong>2-8% de las lesiones ligamentosas</strong> de esta articulación. 
        A diferencia del LCM, suele lesionarse por mecanismos de alta energía y frecuentemente se asocia a daños en el complejo posterolateral, requiriendo un manejo especializado.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LCL</strong>: Se extiende desde el epicóndilo femoral lateral hasta la cabeza del peroné. No tiene inserción tibial.
        </li>
        <li>
          <strong>Función principal</strong>: Resistir las fuerzas en varo y rotación externa.
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Complejo posterolateral</strong>: Ligamento popliteofibular, tendón poplíteo</li>
            <li><strong>Nervio peroneo común</strong>: Pasa cerca de su inserción peronea</li>
          </ul>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros sin elongación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor lateral localizado, edema mínimo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (5-10mm en varo a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, inestabilidad leve</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa (mayor a 10mm en varo a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad marcada, dolor en cabeza peronea</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hiperextensión + varo forzado</strong>: Mecanismo más común (ej.: esquiadores)</li>
        <li><strong>Trauma directo medial</strong>: Golpe en cara medial de rodilla/pierna</li>
        <li><strong>Lesiones asociadas frecuentes</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>LCP (75% de los casos)</li>
            <li>LCA (15-30%)</li>
            <li>Complejo posterolateral (90% en lesiones grado III)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Varo stress test</strong>: A 0° (evalúa CPL) y 30° (evalúa LCL aislado)</li>
        <li><strong>Prueba de recurvatum</strong>: Hiperextensión + rotación externa</li>
        <li><strong>Dial test</strong>: Rotación externa aumentada a 30° y 90°</li>
        <li><strong>Evaluación nervio peroneo</strong>: Parestesias/pie caído</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión de cabeza peronea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico de fracturas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema posterolateral, integridad del CPL</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación completa de estructuras</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiografías estrés</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Apertura articular lateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuantificación de inestabilidad</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I-II aisladas</li>
        <li>Pacientes de baja demanda</li>
        <li>Lesiones crónicas sin inestabilidad funcional</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-4 semanas)</strong>: Rodillera articulada (0-90°), carga progresiva</li>
        <li><strong>Fortalecimiento</strong>: Músculos posterolaterales (bíceps femoral, poplíteo)</li>
        <li><strong>Evitar</strong>: Varo forzado y rotación externa en primeras 6 semanas</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III con inestabilidad</li>
        <li>Lesiones del complejo posterolateral</li>
        <li>Lesiones multiligamentosas (LCL + LCP/LCA)</li>
        <li>Avulsiones óseas desplazadas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación primaria</strong>: Para avulsiones frescas del fémur/peroné</li>
        <li><strong>Reconstrucción anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica de LaPrade (reconstrucción LCL + popliteofibular)</li>
            <li>Autoinjerto (tendón semitendinoso, bíceps femoral)</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización en extensión 6 semanas</li>
        <li>Carga protegida 8-12 semanas</li>
        <li>Limitación de flexión (90° hasta 12 semanas)</li>
        <li>Rehabilitación prolongada (6-9 meses)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM 0-90°, protección del injerto</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción, control neuromuscular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo controlado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad posterolateral crónica</strong>: Principal complicación</li>
        <li><strong>Lesión nervio peroneo</strong>: Hasta 15% de los casos</li>
        <li><strong>Artrosis compartimento lateral</strong>: Por aumento de carga</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento del CPL</strong>: Bíceps femoral, poplíteo</li>
        <li><strong>Técnica de caída</strong>: Evitar hiperextensión-varo en deportes</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del <strong> LCL </strong> requieren alta sospecha clínica por su frecuente asociación con el complejo posterolateral. 
        Mientras las lesiones aisladas grado I-II pueden manejarse conservadoramente, las lesiones grado III o combinadas 
        suelen necesitar reconstrucción quirúrgica temprana. La rehabilitación debe ser cautelosa para proteger el injerto 
        en las fases iniciales, con énfasis en la recuperación del control neuromuscular.
      </p>
    </div>
  );
}

export default LCL;