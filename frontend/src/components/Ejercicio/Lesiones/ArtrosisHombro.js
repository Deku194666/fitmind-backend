

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis de Hombro (Omartrosis)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis de hombro es una <strong>degeneración progresiva del cartílago articular glenohumeral</strong>, menos frecuente que en caderas/rodillas pero con gran impacto funcional. 
        Afecta al <strong>5-10% de mayores de 65 años</strong> y suele ser secundaria a roturas crónicas del manguito rotador o traumatismos.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación glenohumeral</strong>: Superficie convexa humeral vs glenoides cóncava (solo 25-30% de congruencia)
        </li>
        <li>
          <strong>Manguito rotador</strong>: Estabilizador dinámico (supraespinoso, infraespinoso, subescapular, redondo menor)
        </li>
        <li>
          <strong>Cartílago hialino</strong>: 1.5-2mm de espesor en cabeza humeral
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Nervio axilar, arteria circunfleja humeral
        </li>
      </ul>

      <p className='p14'>Clasificación de la Artrosis de Hombro 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones Clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Leve</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular mínimo, osteofitos incipientes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor post-actividad, movilidad conservada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Moderada</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento mayor a 50%, esclerosis subcondral, osteofitos marginales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor nocturno, limitación funcional, crepitación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Severa</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pérdida completa del espacio articular, geodas subcondrales, deformación cabeza humeral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en reposo, rigidez importante, pseudoparálisis</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rotura crónica de manguito</strong>: Artropatía por manguito roto (80% de casos)</li>
        <li><strong>Traumatismos</strong>: Fracturas de cabeza humeral o glenoides</li>
        <li><strong>Necrosis avascular</strong>: Uso prolongado de corticoides, alcoholismo</li>
        <li><strong>Inestabilidad</strong>: Luxaciones recidivantes</li>
        <li><strong>Enfermedades sistémicas</strong>: Artritis reumatoide, condrocalcinosis</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome articular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor mecánico en cara anterolateral hombro</li>
            <li>Rigidez progresiva (especialmente rotación externa)</li>
            <li>Crepitación palpable durante movimientos</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Arco doloroso (60-120° de abducción)</li>
            <li>Limitación de rotación interna (signo de la mano en la espalda)</li>
            <li>Atrofia de músculos del manguito en casos avanzados</li>
          </ul>
        </li>
        <li><strong>Pruebas especiales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Test de Neer/Hawkins (dolor en conflicto subacromial)</li>
            <li>Signo del clarín (dolor al gesto de llevarse la mano a la boca)</li>
          </ul>
        </li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular, osteofitos, migración superior cabeza humeral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones específicas (AP, axilar, outlet)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estado del manguito rotador, cartílago residual, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar tejidos blandos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defectos óseos glenoides, version glenoidea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación protésica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estado del manguito rotador, derrame articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación dinámica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Artrosis grado leve-moderado</li>
        <li>Pacientes no candidatos a cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs tópicos/orales (diclofenaco, celecoxib)</li>
            <li>Analgésicos (paracetamol, tramadol)</li>
            <li>Infiltraciones intraarticulares (corticoides + anestésico)</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de Codman (pendulares)</li>
            <li>Estiramientos de cápsula posterior</li>
            <li>Fortalecimiento escapulotorácico</li>
          </ul>
        </li>
        <li><strong>Modificaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Evitar movimientos por encima de 90°</li>
            <li>Uso de herramientas de asistencia (alargadores)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Viscosuplementación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ácido hialurónico intraarticular (3-5 aplicaciones)</li>
            <li>Efecto lubricante y antiinflamatorio</li>
          </ul>
        </li>
        <li><strong>PRP (Plasma Rico en Plaquetas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para artrosis temprana con cartílago residual</li>
          </ul>
        </li>
        <li><strong>Radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Denervación de nervios articulares (suprascapular, axilar)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Dolor incapacitante refractario a tratamiento conservador (mayor a 6 meses)</li>
        <li>Pérdida funcional grave (incapacidad para actividades básicas)</li>
        <li>Artrosis severa con destrucción articular en imagen</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artroplastia anatómica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prótesis total de hombro (con manguito intacto)</li>
            <li>Hemiartroplastia (en pacientes jóvenes)</li>
          </ul>
        </li>
        <li><strong>Artroplastia invertida</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para artropatía por manguito roto</li>
            <li>Centra la articulación usando deltoides</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Limpieza articular, sinovectomía en casos seleccionados</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación Postquirúrgica 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intervenciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección de reparación, control dolor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización con cabestrillo, ejercicios pasivos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (4-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios activo-asistidos, estiramientos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar fuerza y función</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios contra resistencia, reentrenamiento funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez postquirúrgica</strong>: Capsulitis adhesiva</li>
        <li><strong>Infección de prótesis</strong>: (0.5-3% de casos)</li>
        <li><strong>Fallo de implante</strong>: Aflojamiento aséptico</li>
        <li><strong>Lesión nerviosa</strong>: Nervio axilar o musculocutáneo</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Manejo precoz de roturas de manguito</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reparación quirúrgica en casos indicados</li>
          </ul>
        </li>
        <li><strong>Ejercicios de estabilización escapular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento de serrato anterior/trapecio inferior</li>
          </ul>
        </li>
        <li><strong>Evitar microtraumatismos repetidos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Modificación de gestos laborales/deportivos</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis de hombro es una condición <strong>discapacitante que requiere enfoque multidisciplinario</strong>. 
        El tratamiento conservador es fundamental en estadios iniciales, mientras que la artroplastia ofrece excelentes resultados en casos avanzados. 
        La rehabilitación especializada y el manejo de factores predisponentes son clave para preservar la función articular.
      </p>
    </div>
  );
}

export default ArtrosisHombro;