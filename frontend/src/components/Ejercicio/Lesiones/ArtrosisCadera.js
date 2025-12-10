

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis de Cadera (Coxartrosis)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis de cadera es una <strong>degeneración progresiva del cartílago articular de la articulación coxofemoral</strong>, 
        afectando al <strong>8-10% de adultos mayores de 45 años</strong>. Es una de las principales causas de dolor inguinal crónico 
        y discapacidad funcional en adultos mayores, con importante impacto en la marcha y actividades básicas.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación coxofemoral</strong>: Enartrosis (bola-cavidad) con amplio rango de movimiento
        </li>
        <li>
          <strong>Cartílago articular</strong>: 3-4mm de espesor en zona de carga (semiesfera superior)
        </li>
        <li>
          <strong>Vascularización</strong>: Arterias circunflejas femorales medial/lateral
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Nervio ciático, músculos pelvitrocantéreos
        </li>
      </ul>

      <p className='p14'>Clasificación de la Coxartrosis 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado (Tönnis)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones Clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 1</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve pinzamiento, osteofitos incipientes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor tras actividad prolongada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 2</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento moderado, quistes subcondrales, esclerosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor inguinal al caminar, limitación de rotación interna</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 3</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento severo, deformación cabeza femoral, osteofitos grandes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en reposo, cojera marcada, acortamiento de extremidad</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Edad</strong>: Prevalencia mayor a 35% en mayores de 80 años</li>
        <li><strong>Malformaciones</strong>: Displasia de cadera, enfermedad de Perthes</li>
        <li><strong>Sobrecarga mecánica</strong>: Obesidad (IMC mayor a 30), actividades de impacto</li>
        <li><strong>Traumatismos</strong>: Fracturas acetabulares o cabeza femoral</li>
        <li><strong>Ocupacional</strong>: Trabajos con carga de pesos repetitiva</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome articular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor inguinal profundo (80% casos) que puede irradiar a rodilla</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Signo del "calzado": Dificultad para calzarse por limitación de rotación interna</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Limitación de rotación interna (primer signo en mayor a 90% casos)</li>
            <li>Disminución de rango de flexión (normal mayor 120°)</li>
            <li>Test de Trendelenburg positivo en casos avanzados</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Antálgica (acortamiento fase de apoyo)</li>
            <li>Marcha en Trendelenburg en insuficiencia glútea</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular superior, osteofitos, quistes subcondrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyección AP pelvis y axial de cadera</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, estado cartílago residual, necrosis avascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico temprano (pre-radiográfico)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC 3D</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Análisis de deformidad, planificación protésica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar defectos óseos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Coxartrosis grado I-II (Tönnis)</li>
        <li>Pacientes no candidatos a cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs (naproxeno, celecoxib) por periodos cortos</li>
            <li>Analgésicos (paracetamol como primera línea)</li>
            <li>SYSADOA (sulfato de glucosamina/condroitín)</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de fortalecimiento glúteo medio/mínimo</li>
            <li>Estiramientos de rotadores internos</li>
            <li>Hidroterapia para mejorar movilidad</li>
          </ul>
        </li>
        <li><strong>Medidas generales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción de peso (IMC menor a 25 ideal)</li>
            <li>Uso de bastón contralateral (reduce carga en 30-40%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infiltraciones intraarticulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corticoides guiados por ecografía/RX (alivio 3-6 meses)</li>
            <li>Ácido hialurónico (viscosuplementación)</li>
          </ul>
        </li>
        <li><strong>Ozonoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para sinovitis asociada refractaria</li>
          </ul>
        </li>
        <li><strong>Denervación por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ramas articulares del nervio obturador y femoral</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Dolor incapacitante refractario a tratamiento mayor a 6 meses</li>
        <li>Coxartrosis grado III-IV (Tönnis)</li>
        <li>Limitación funcional grave (índice de Harris menor a 60)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artroplastia total de cadera</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Vía anterolateral (Watson-Jones) o posterior (Moore)</li>
            <li>Prótesis cementadas vs no cementadas según edad/calidad ósea</li>
          </ul>
        </li>
        <li><strong>Osteotomías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Femoral (varizante) o acetabular (periacetabular)</li>
            <li>Para casos seleccionados en pacientes jóvenes</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Desbridamiento articular, resección de osteofitos</li>
            <li>Para pinzamientos femoroacetabulares asociados</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevención complicaciones, inicio movilidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deambulación precoz con andador, ejercicios isométricos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar marcha independiente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo, reeducación de marcha</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tardía (mayor a 6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación funcional completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de equilibrio, reincorporación a actividades</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación protésica</strong>: 1-3% casos (mayor riesgo en vía posterior)</li>
        <li><strong>Infección protésica</strong>: 0.5-2% (Staphylococcus spp.)</li>
        <li><strong>Trombosis venosa profunda</strong>: Profilaxis obligatoria</li>
        <li><strong>Diferencia de longitud</strong>: Meticulosa planificación prequirúrgica</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Detección precoz displasia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ecografía neonatal en factores de riesgo</li>
          </ul>
        </li>
        <li><strong>Control de peso</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción de IMC mayor a 25 (cada 5kg reducen carga en 20kg por paso)</li>
          </ul>
        </li>
        <li><strong>Ejercicio adecuado</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Natación, ciclismo (evitar impacto)</li>
            <li>Fortalecimiento de abductores</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis de cadera es una condición <strong>altamente discapacitante</strong> cuyo manejo requiere enfoque multidisciplinar. 
        El tratamiento conservador es fundamental en estadios iniciales, mientras la artroplastia total ofrece excelentes resultados 
        en casos avanzados. La prevención mediante control de factores de riesgo y el diagnóstico precoz de malformaciones 
        congénitas son clave para reducir su incidencia.
      </p>
    </div>
  );
}

export default ArtrosisCadera;