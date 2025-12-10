

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Cruzado Posterior (LCP)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        El <strong>Ligamento Cruzado Posterior (LCP)</strong> es el ligamento intraarticular más resistente de la rodilla, representando solo el <strong>3-20% de todas las lesiones ligamentosas</strong> de esta articulación. 
        A diferencia del LCA, suele lesionarse por traumatismos de alta energía y con frecuencia pasa desapercibido inicialmente ("lesión silenciosa").
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LCP</strong>: Se extiende desde la cara lateral del cóndilo femoral medial hasta la parte posterior de la tibia. Presenta dos fascículos (anterolateral y posteromedial).
        </li>
        <li>
          <strong>Función principal</strong>: Limita el desplazamiento posterior de la tibia y la hiperextensión.
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Forma el "techo" de la escotadura intercondílea y se relaciona íntimamente con los meniscos.
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento sin discontinuidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor posterior leve, mínima inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, derrame, inestabilidad funcional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura total ± avulsión ósea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad marcada, dificultad para escaleras</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>"Dashboard injury"</strong>: Impacto directo en tibia proximal con rodilla flexionada (ej.: accidente automovilístico)</li>
        <li><strong>Hiperextensión forzada</strong>: Caída con pie en flexión plantar</li>
        <li><strong>Trauma directo anterior</strong>: Golpe en la cara anterior de la tibia</li>
        <li><strong>Lesiones asociadas frecuentes</strong>: LCP + PLC (esquina posterolateral) en 60% de casos</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba del cajón posterior</strong>: Gold standard (rodilla a 90° de flexión)</li>
        <li><strong>Posterior sag sign</strong>: Caída espontánea de la tibia</li>
        <li><strong>Prueba de Godfrey</strong>: Versión modificada en decúbito supino</li>
        <li><strong>Quadriceps active test</strong>: Contracción del cuádriceps reduce desplazamiento</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión tibial (fragmento de Wagstaffe)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico de lesiones óseas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RMN </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo posterolateral, integridad ligamentaria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 97% para lesiones completas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Teledistensión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Medición cuantitativa de traslación tibial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivización de la inestabilidad</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I-II sin inestabilidad funcional</li>
        <li>Pacientes de baja demanda</li>
        <li>Lesiones aisladas sin compromiso de esquina posterolateral</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-4 semanas)</strong>: Inmovilización en extensión, carga progresiva</li>
        <li><strong>Fortalecimiento prioritario</strong>: Cuádriceps (especialmente vasto medial)</li>
        <li><strong>Evitar</strong>: Flexión mayor a 90° y ejercicios de isquiotibiales iniciales</li>
        <li><strong>Ortesis</strong>: Rodilleras con soporte posterior para actividades</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III con inestabilidad funcional</li>
        <li>Avulsiones óseas desplazadas (mayor a 10mm)</li>
        <li>Lesiones multiligamentosas (especialmente con PLC)</li>
        <li>Fracaso del tratamiento conservador</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación directa</strong>: Para avulsiones tibiales frescas</li>
        <li><strong>Reconstrucción anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica transtibial (túnel único o doble)</li>
            <li>Técnica inlay tibial (mayor estabilidad biomecánica)</li>
          </ul>
        </li>
        <li><strong>Injertos</strong>: Tendón cuadricipital, hueso-tendón-hueso o aloinjerto</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización en extensión 4-6 semanas</li>
        <li>Carga protegida con muletas 8-12 semanas</li>
        <li>Limitación de flexión (90° hasta 12 semanas)</li>
        <li>Rehabilitación prolongada (9-12 meses)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM 0-90°, marcha con apoyo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción, ejercicios funcionales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez en flexión</strong>: Por inmovilización prolongada</li>
        <li><strong>Inestabilidad residual</strong>: Principalmente en rotación</li>
        <li><strong>Artrosis compartimento medial</strong>: Por aumento de estrés en flexión</li>
        <li><strong>Lesiones vasculares</strong>: Riesgo en reconstrucciones transtibiales</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Uso de cinturón de seguridad</strong>: Prevención de "dashboard injuries"</li>
        <li><strong>Fortalecimiento cuádriceps</strong>: Principal estabilizador dinámico</li>
        <li><strong>Técnica de caída</strong>: Evitar hiperextensión en deportes</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del <strong> LCP </strong> requieren un alto índice de sospecha clínica. Mientras las lesiones aisladas pueden manejarse conservadoramente, 
        las lesiones completas o combinadas suelen necesitar reconstrucción quirúrgica. La rehabilitación debe enfocarse en proteger el injerto 
        en las fases iniciales y recuperar la función completa de manera progresiva, con especial atención a la prevención de la rigidez articular.
      </p>
    </div>
  );
}

export default LCP;