

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión de los Ligamentos Acromioclaviculares del Hombro</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        La lesión de los <strong>Ligamentos Acromioclaviculares</strong> es una de las lesiones más comunes en el hombro, representando aproximadamente el <strong>9-12% de todas las lesiones de la cintura escapular</strong>.
        Estas lesiones son particularmente frecuentes en deportes de contacto y caídas sobre el hombro. La articulación acromioclavicular (AC) es clave para la transmisión de fuerzas entre el miembro superior y el esqueleto axial.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Ligamentos acromioclaviculares</strong>: Superior, inferior, anterior y posterior. El ligamento superior es el más fuerte y resistente.
        </li>
        <li>
          <strong>Ligamentos coracoclaviculares</strong>: Trapezoide (lateral) y conoide (medial). Son los principales estabilizadores verticales.
        </li>
        <li>
          <strong>Biomecánica</strong>: Resiste fuerzas de cizallamiento y compresión. Los ligamentos coracoclaviculares soportan el 90% de la carga axial.
        </li>
      </ul>

      <p className='p14'>Clasificación de Rockwood 📊</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Esguince ligamentos AC (intactos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor localizado, sin deformidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura ligamentos AC, coracoclaviculares intactos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Elevación clavicular ≤50%, dolor moderado</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa ligamentos AC y coracoclaviculares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Elevación clavicular 100%, deformidad visible</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>IV</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula desplazada posteriormente a través del trapecio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula palpable posteriormente</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>V</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disrupción extrema con separación 100-300%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deformidad marcada, piel tenting</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>VI</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula desplazada inferior a la coracoides</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rara, asociada a trauma de alta energía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Impacto directo</strong>: Caída sobre el hombro con brazo aducido (mecanismo más común)</li>
        <li><strong>Trauma indirecto</strong>: Caída sobre mano extendida con fuerza transmitida al hombro</li>
        <li><strong>Deportes de contacto</strong>: Fútbol americano (28%), hockey (19%), rugby (15%)</li>
        <li><strong>Accidentes</strong>: Motocicletas, bicicletas (22% de los casos)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inspección</strong>: Deformidad en "tecla de piano" (grados III-VI)</li>
        <li><strong>Prueba de compresión horizontal</strong>: Dolor al comprimir la articulación AC</li>
        <li><strong>Prueba de Paxinos</strong>: Dolor al presionar acromion y clavícula simultáneamente</li>
        <li><strong>Movilidad</strong>: Dolor con aducción horizontal cruzada</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento espacio AC, elevación clavicular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Vista Zanca (15-30° cefálico), estrés con peso</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad ligamentos, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar lesiones asociadas, grados altos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dinámica articular, hematoma</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial rápida, seguimiento</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I y II (90% de los casos)</li>
        <li>Algunas grado III en pacientes sedentarios</li>
        <li>Pacientes mayores con baja demanda funcional</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-2 semanas)</strong>: Cabestrillo para comodidad, hielo, AINEs</li>
        <li><strong>Fase subaguda (2-6 semanas)</strong>: Movilización progresiva, ejercicios pendulares</li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>: Fortalecimiento escapular y deltoides</li>
        <li><strong>Retorno deportivo</strong>: A las 8-12 semanas según tolerancia</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado IV, V y VI</li>
        <li>Grado III en pacientes jóvenes activos o trabajadores manuales</li>
        <li>Fracaso del tratamiento conservador (dolor crónico)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reconstrucción anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica de TightRope® (suspensión coracoclavicular)</li>
            <li>Reconstrucción con injerto (semitendinoso, fascia lata)</li>
          </ul>
        </li>
        <li><strong>Técnicas no anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteosíntesis con gancho (Weaver-Dunn modificado)</li>
            <li>Placa coracoclavicular</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con cabestrillo 4-6 semanas</li>
        <li>Progresión lenta de movilidad (evitar estrés inicial)</li>
        <li>Retorno deportivo a los 4-6 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, ROM pasivo limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-4 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento avanzado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (4-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8-12 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artrosis acromioclavicular</strong>: Desarrollo tardío en 30-50% de los casos</li>
        <li><strong>Dolor residual</strong>: Por inestabilidad crónica o calcificaciones</li>
        <li><strong>Fallo de reconstrucción</strong>: Mayor riesgo en técnicas no anatómicas</li>
        <li><strong>Osteólisis distal clavicular</strong>: En levantadores de peso o trabajadores pesados</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protección en deportes de contacto</strong>: Almohadillas para hombros</li>
        <li><strong>Fortalecimiento escapular</strong>: Mejora la estabilidad dinámica</li>
        <li><strong>Técnica de caída</strong>: Entrenamiento para rodar en impactos</li>
        <li><strong>Equipamiento</strong>: Cascos y protecciones en deportes de riesgo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones de los <strong>Ligamentos Acromioclaviculares</strong> requieren un enfoque individualizado basado en el grado de lesión y las demandas funcionales del paciente.
        Mientras que las lesiones de bajo grado responden bien al tratamiento conservador, las lesiones de alto grado en pacientes activos suelen requerir reparación quirúrgica.
        La rehabilitación temprana y progresiva es clave para optimizar los resultados funcionales y prevenir complicaciones a largo plazo.
      </p>
    </div>
  );
}

export default AC;