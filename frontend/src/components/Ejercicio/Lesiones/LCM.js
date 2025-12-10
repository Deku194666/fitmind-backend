

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Colateral Medial (LCM)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        El <strong>Ligamento Colateral Medial (LCM)</strong> es la estructura ligamentosa más frecuentemente lesionada de la rodilla, representando el <strong>40% de todas las lesiones ligamentosas</strong> de esta articulación. 
        A diferencia de los ligamentos cruzados, tiene buena vascularización y capacidad de cicatrización, lo que permite en muchos casos un tratamiento conservador exitoso.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LCM</strong>: Se extiende desde el epicóndilo femoral medial hasta la metáfisis tibial proximal. Consta de:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Capa superficial</strong>: Principal restrictor del valgo</li>
            <li><strong>Capa profunda</strong>: Unida al menisco medial (meniscofemoral y meniscotibial)</li>
          </ul>
        </li>
        <li>
          <strong>Función principal</strong>: Resistir las fuerzas en valgo y rotación externa.
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Íntima relación con el menisco medial ("complejo medial").
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros sin elongación (mayor a 5mm en valgo a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor medial localizado, edema mínimo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (5-10mm en valgo a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, edema, limitación funcional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa (mayor a 10mm en valgo a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad marcada, hematoma medial</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Valgo forzado</strong>: Golpe lateral en rodilla extendida (ej.: placaje en fútbol)</li>
        <li><strong>Rotación externa</strong>: Pie fijo con rotación del cuerpo</li>
        <li><strong>Lesiones asociadas frecuentes</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>LCA (20-40% de casos)</li>
            <li>Menisco medial (30%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Valgo stress test</strong>: A 0° (evalúa LCM + cápsula posterior) y 30° (evalúa LCM aislado)</li>
        <li><strong>Palpación</strong>: Dolor en epicóndilo femoral medial o inserción tibial</li>
        <li><strong>Prueba de Slocum</strong>: Valgo + rotación externa</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión ósea (Pellegrini-Stieda)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico de lesiones óseas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema medial, grado de rotura ligamentaria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 95% para lesiones grado III</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Discontinuidad fibrilar, líquido periligamentario</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación dinámica en consulta</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I-II (90% de los casos)</li>
        <li>Lesiones grado III aisladas sin otras estructuras comprometidas</li>
        <li>Pacientes de cualquier edad y nivel de actividad</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>: RICE, rodillera articulada (0-90°), carga según dolor</li>
        <li><strong>Fortalecimiento</strong>: Cuádriceps e isquiotibiales progresivo</li>
        <li><strong>Movilidad</strong>: ROM completo desde fase temprana</li>
        <li><strong>Retorno deportivo</strong>: Cuando fuerza mayor a 80% contralateral</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III con inestabilidad funcional persistente</li>
        <li>Avulsiones óseas desplazadas (mayor a 5mm)</li>
        <li>Lesiones multiligamentosas (LCM + LCA/LCP)</li>
        <li>Atletas de élite con inestabilidad medial</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación primaria</strong>: Para avulsiones frescas del cóndilo femoral o tibia</li>
        <li><strong>Reconstrucción anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Autoinjerto (semitendinoso, fascia lata)</li>
            <li>Aloinjerto para reconstrucciones complejas</li>
          </ul>
        </li>
        <li><strong>Técnica de Bosworth</strong>: Para insuficiencia crónica del LCM</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización en extensión 2-4 semanas</li>
        <li>Movilización progresiva controlada</li>
        <li>Carga parcial 6-8 semanas</li>
        <li>Rehabilitación completa en 4-6 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, ROM 0-90°, marcha con apoyo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción, ejercicios funcionales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principalmente en flexión</li>
        <li><strong>Inestabilidad residual</strong>: En lesiones grado III no tratadas</li>
        <li><strong>Artrosis medial</strong>: Por alteración de biomecánica a largo plazo</li>
        <li><strong>Neuroma del nervio safeno</strong>: Por trauma directo o cirugía</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Entrenamiento neuromuscular</strong>: Enfoque en control de valgo dinámico</li>
        <li><strong>Fortalecimiento de aductores</strong>: Sinergistas del LCM</li>
        <li><strong>Técnica de placaje</strong>: En deportes de contacto</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La mayoría de las lesiones del <strong> LCM </strong> pueden manejarse exitosamente con tratamiento conservador gracias a su excelente capacidad de cicatrización. 
        Las lesiones grado III o aquellas asociadas a otras estructuras pueden requerir reparación quirúrgica. La rehabilitación debe enfocarse en 
        recuperar la movilidad completa tempranamente mientras se protege el ligamento en cicatrización, con especial atención a prevenir la rigidez articular.
      </p>
    </div>
  );
}

export default LCM;