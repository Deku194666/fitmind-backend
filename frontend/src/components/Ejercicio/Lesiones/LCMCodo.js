

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCMCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Colateral Medial (LCM) de Codo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión del <strong>Ligamento Colateral Medial (LCM)</strong> del codo es una patología frecuente en deportes de lanzamiento, representando aproximadamente el <strong>15-20% de todas las lesiones de codo</strong> en atletas.
        Es particularmente común en lanzadores de béisbol (incidencia del 25-35% en pitchers profesionales), jugadores de balonmano y tenistas. El LCM es el principal estabilizador contra las fuerzas de valgo en el codo.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estructura del LCM</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Haz anterior</strong>: Principal estabilizador (resistencia a valgo en 30-120° flexión)</li>
            <li><strong>Haz posterior</strong>: Actúa en flexión mayor a 60°</li>
            <li><strong>Haz transversal</strong>: Poca función mecánica</li>
          </ul>
        </li>
        <li>
          <strong>Biomecánica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Soporta hasta 40 Nm de torque en valgo durante lanzamiento</li>
            <li>Resiste 70% de la carga de valgo a 90° de flexión</li>
            <li>Tensión máxima durante fase de aceleración del lanzamiento</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio cubital discurre posterior al LCM</li>
            <li>Músculo flexor común como estabilizador dinámico</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Clasificación de Lesiones</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clínicos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros sin laxitud</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor medial, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor + laxitud leve (3-5mm apertura)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud marcada (mayor a 5mm), inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Crónica</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Insuficiencia ligamentosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad recurrente, dolor crónico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma agudo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída con brazo extendido y valgo forzado</li>
            <li>Luxación de codo (presente en 50% de luxaciones posteriores)</li>
          </ul>
        </li>
        <li><strong>Microtrauma repetitivo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Lanzadores (especialmente fase de aceleración)</li>
            <li>Tenis (servicio con rotación externa excesiva)</li>
            <li>Jabalina, waterpolo, balonmano</li>
          </ul>
        </li>
        <li><strong>Factores de riesgo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Mala técnica de lanzamiento ("arm lag")</li>
            <li>Déficit rotación glenohumeral interna (GIRD)</li>
            <li>Hiperlaxitud ligamentosa</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inspección</strong>: Edema medial, equimosis en lesiones agudas</li>
        <li><strong>Palpación</strong>: Dolor a 1-2 cm distal a epicóndilo medial</li>
        <li><strong>Prueba de valgo a 30°</strong>: Dolor/laxitud (sensibilidad 85%)</li>
        <li><strong>Prueba de lechero modificada</strong>: Valgo + supinación (sensibilidad 92%)</li>
        <li><strong>Prueba de estrés en flexión</strong>: Para evaluar haz posterior</li>
        <li><strong>Evaluación nervio cubital</strong>: Parestesias en 15% de casos</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Calcificaciones, avulsiones, osteofitos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Vista estrés valgo, evaluación ósea</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad fibras, edema óseo, desgarros</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard (sensibilidad 95%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espesor ligamento, laxitud en valgo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación intraoperatoria, seguimiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ArtroRMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarros parciales, lesiones intrasustancia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos complejos o diagnóstico incierto</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Tratamiento Conservador</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I y II (80% de los casos)</li>
        <li>Algunas grado III en no deportistas</li>
        <li>Fase inicial en atletas con temporada en curso</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reposo relativo, inmovilización con férula 90°</li>
            <li>Crioterapia, AINEs, analgésicos</li>
            <li>Evitar valgo y lanzamientos</li>
          </ul>
        </li>
        <li><strong>Fase subaguda (2-6 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva sin dolor</li>
            <li>Ejercicios isométricos, fortalecimiento flexores</li>
            <li>Propiocepción básica</li>
          </ul>
        </li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento excéntrico, ejercicios pliométricos</li>
            <li>Programa de lanzamiento progresivo (Thrower's Ten)</li>
            <li>Reeducación gestual deportiva</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III en deportistas de lanzamiento</li>
        <li>Fracaso tratamiento conservador (3-6 meses)</li>
        <li>Inestabilidad crónica con dolor limitante</li>
        <li>Lesiones asociadas (fractura, osteocondritis)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación directa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Indicada en avulsiones recientes</li>
            <li>Anclajes o suturas transóseas</li>
          </ul>
        </li>
        <li><strong>Reconstrucción con injerto</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica de Jobe modificada (túnel humeral en "docking")</li>
            <li>Injerto palmaris longus o semitendinoso</li>
            <li>Reconstrucción DANE TJ (túnel único cubital)</li>
          </ul>
        </li>
        <li><strong>Técnicas asociadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Descompresión nervio cubital si sintomático</li>
            <li>Osteotomía descompresiva en valgo excesivo</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización 2-3 semanas (férula 90°)</li>
        <li>Movilización progresiva desde 3-4 semana</li>
        <li>Fortalecimiento iniciar a las 6 semanas</li>
        <li>Programa de lanzamiento a los 4 meses</li>
        <li>Retorno competitivo a los 9-12 meses</li>
      </ul>

      <p className='p14'>🏋️‍♂️ Rehabilitación</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección injerto, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 60%, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 80%, gestos específicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (6-12 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principal complicación postquirúrgica (15-20%)</li>
        <li><strong>Inestabilidad residual</strong>: Por fallo técnico o rehabilitación inadecuada</li>
        <li><strong>Neuropatía cubital</strong>: Por manipulación quirúrgica (8-10%)</li>
        <li><strong>Artrosis medial</strong>: Secuela tardía por inestabilidad crónica</li>
        <li><strong>Fallo del injerto</strong>: Mayor riesgo en retorno precoz al deporte</li>
      </ul>

      <p className='p14'>🛡️ Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas de prehabilitación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento excéntrico flexores</li>
            <li>Ejercicios de rotación glenohumeral</li>
          </ul>
        </li>
        <li><strong>Control carga deportiva</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Contar lanzamientos en béisbol</li>
            <li>Periodos de descanso adecuados</li>
          </ul>
        </li>
        <li><strong>Optimización técnica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corrección "arm lag" en lanzadores</li>
            <li>Mecánica adecuada de servicio en tenis</li>
          </ul>
        </li>
        <li><strong>Evaluación biomecánica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Análisis de lanzamiento con tecnología 3D</li>
            <li>Detección precoz alteraciones cinemáticas</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del LCM de codo requieren un enfoque multidisciplinario que combine evaluación clínica exhaustiva, estudios de imagen adecuados y tratamiento individualizado según grado de lesión y demanda funcional.
        Mientras las lesiones parciales responden bien al tratamiento conservador, las roturas completas en atletas suelen requerir reconstrucción quirúrgica. La rehabilitación progresiva y el respeto de los tiempos biológicos son esenciales para optimizar resultados y prevenir recidivas.
      </p>
    </div>
  );
}

export default LCMCodo;