

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LCLCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Colateral Lateral (LCL) de Codo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión del <strong>ligamento colateral lateral (LCL)</strong> del codo es menos frecuente que la del LCM pero crucial en la estabilidad contra fuerzas de varo y rotación. Representa el <strong>5-10% de las lesiones ligamentosas de codo</strong>, siendo más común en traumatismos agudos (caídas) o luxaciones posterolaterales. El complejo LCL es el principal estabilizador contra la inestabilidad posterolateral.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estructura del LCL</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Fascículo lateral</strong>: Principal estabilizador primario</li>
            <li><strong>Ligamento anular</strong>: Estabiliza cabeza radial</li>
            <li><strong>Ligamento accesorio lateral</strong>: Refuerzo posterolateral</li>
          </ul>
        </li>
        <li>
          <strong>Biomecánica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Resiste fuerzas de varo y rotación externa</li>
            <li>Máxima tensión en extensión completa</li>
            <li>Estabiliza 40% de resistencia a varo a 30° flexión</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio radial próximo al complejo LCL</li>
            <li>Músculo extensor común como estabilizador dinámico</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor lateral, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor + laxitud leve (2-4mm apertura)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud marcada (mayor a 5mm), inestabilidad rotatoria</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Crónica</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Insuficiencia ligamentosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad recurrente, artrosis tardía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma agudo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano extendida con codo en supinación</li>
            <li>Luxación posterolateral (presente en 90% de luxaciones)</li>
            <li>Trauma directo cara lateral codo</li>
          </ul>
        </li>
        <li><strong>Microtrauma repetitivo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deportes con carga axial en varo (gimnasia, levantamiento pesas)</li>
            <li>Lanzadores con mecánica alterada</li>
          </ul>
        </li>
        <li><strong>Factores de riesgo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Hiperlaxitud ligamentosa</li>
            <li>Mal alineamiento articular (cubitus varus)</li>
            <li>Cirugías previas (liberación de epicóndilo lateral)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inspección</strong>: Edema lateral, equimosis en agudas</li>
        <li><strong>Palpación</strong>: Dolor en epicóndilo lateral y área LCL</li>
        <li><strong>Prueba de varo a 30°</strong>: Dolor/laxitud (sensibilidad 80%)</li>
        <li><strong>Prueba de silla</strong>: Paciente levanta silla con codo en flexión</li>
        <li><strong>Prueba de mesa</strong>: Apoyo sobre mano con codo extendido</li>
        <li><strong>Prueba de pivot shift</strong>: Para inestabilidad rotatoria</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsiones, fracturas cabeza radial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Vista estrés varo, evaluación ósea</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad fibras, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard (sensibilidad 90%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud en varo, desgarros</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación intraoperatoria</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artrografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extravasación contraste</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos seleccionados</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Tratamiento Conservador</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I y II (85% de los casos)</li>
        <li>Pacientes no deportistas con baja demanda</li>
        <li>Lesiones parciales sin inestabilidad clínica</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-3 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inmovilización con férula 90°</li>
            <li>Crioterapia, AINEs, analgésicos</li>
            <li>Evitar varo y apoyo</li>
          </ul>
        </li>
        <li><strong>Fase subaguda (3-6 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva</li>
            <li>Ejercicios isométricos extensores</li>
            <li>Protección contra varo</li>
          </ul>
        </li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento excéntrico</li>
            <li>Ejercicios propioceptivos</li>
            <li>Reincorporación gradual a actividades</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III con inestabilidad</li>
        <li>Fracaso tratamiento conservador (3 meses)</li>
        <li>Inestabilidad posterolateral recurrente</li>
        <li>Lesiones asociadas (fractura cabeza radial)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación directa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Avulsiones recientes (menor a 3 semanas)</li>
            <li>Anclajes o suturas transóseas</li>
          </ul>
        </li>
        <li><strong>Reconstrucción con injerto</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica de Nestor (reconstrucción anatómica)</li>
            <li>Técnica de triangulación (3 puntos fijos)</li>
            <li>Injerto de palmaris longus o fascia lata</li>
          </ul>
        </li>
        <li><strong>Técnicas asociadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteotomía correctiva en varo excesivo</li>
            <li>Artroplastia radial si cabeza radial fracturada</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización 3-4 semanas (férula 90°)</li>
        <li>Movilización progresiva desde 4ª semana</li>
        <li>Fortalecimiento iniciar a las 8 semanas</li>
        <li>Retorno deportivo a los 6-9 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (4-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (8-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 60%, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 80%, gestos específicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad residual</strong>: Principal complicación (10-15%)</li>
        <li><strong>Rigidez articular</strong>: Menos frecuente que en LCM</li>
        <li><strong>Neuropatía radial</strong>: Por manipulación quirúrgica (5%)</li>
        <li><strong>Artrosis lateral</strong>: Por inestabilidad crónica</li>
        <li><strong>Heterotopia ósea</strong>: En traumatismos complejos</li>
      </ul>

      <p className='p14'>🛡️ Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento muscular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Extensores y supinadores</li>
            <li>Ejercicios excéntricos</li>
          </ul>
        </li>
        <li><strong>Protección en deportes</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica adecuada de caídas</li>
            <li>Equipamiento protector en gimnasia</li>
          </ul>
        </li>
        <li><strong>Rehabilitación post-luxación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Programa supervisado tras reducción</li>
            <li>Control precoz de inestabilidad</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del LCL requieren alto índice de sospecha, especialmente tras luxaciones. Mientras las lesiones parciales pueden manejarse conservadoramente, las completas con inestabilidad suelen necesitar reparación quirúrgica. La reconstrucción anatómica y rehabilitación progresiva son clave para restaurar la estabilidad rotatoria. El pronóstico es generalmente bueno con tratamiento adecuado, aunque las lesiones crónicas tienen mayor riesgo de artrosis secundaria.
      </p>
    </div>
  );
}

export default LCLCodo;