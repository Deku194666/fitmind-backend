

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LuxacionCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxación de Cadera</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La luxación de cadera representa una <strong>urgencia ortopédica</strong> que requiere reducción inmediata. Representa el 5% de todas las luxaciones, siendo la <strong>posterior (85-90%)</strong> la más frecuente. La luxación traumática ocurre típicamente por accidentes de alta energía, con riesgo aumentado de <strong>necrosis avascular (10-20%)</strong> si no se reduce en las primeras 6 horas.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estabilizadores primarios</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Labrum acetabular</strong>: Aumenta profundidad articular en 20%</li>
            <li><strong>Ligamento iliofemoral</strong> (de Bigelow): Principal restricción a extensión y rotación externa</li>
            <li><strong>Morfología ósea</strong>: Orientación acetábulo (anteversión 20°)</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio ciático (10-20% lesión en luxaciones posteriores)</li>
            <li>Arteria circunfleja medial (riesgo en luxaciones anteriores)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Clasificación de Thompson-Epstein</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación simple sin fractura</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25-30%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Con fractura pared posterior acetábulo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>40-45%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Con fractura reborde acetabular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-15%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>IV</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Con fractura fondo acetábulo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>V</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Con fractura cabeza femoral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10%</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación posterior (85-90%)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Accidente vehicular (rodilla impacta tablero con cadera flexionada)</li>
            <li>Caída desde altura sobre rodilla flexionada</li>
          </ul>
        </li>
        <li><strong>Luxación anterior (10-15%)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Abducción forzada + rotación externa</li>
            <li>Impacto lateral en cadera abducida</li>
          </ul>
        </li>
        <li><strong>Factores de riesgo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Displasia acetabular</li>
            <li>Antecedente de cirugía cadera</li>
            <li>Enfermedades del colágeno</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación posterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Cadera en flexión, aducción y rotación interna</li>
            <li>Acortamiento del miembro</li>
            <li>Dificultad para movilización pasiva</li>
          </ul>
        </li>
        <li><strong>Luxación anterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Cadera en abducción y rotación externa</li>
            <li>Deformidad palpable cabeza femoral inguinal (obturatriz) o supraacetabular (ilíaca)</li>
          </ul>
        </li>
        <li><strong>Evaluación neurovascular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Examen completo nervio ciático (10-20% afectación en luxaciones posteriores)</li>
            <li>Evaluación arteria femoral (pulsos distales)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Relación articular, fracturas asociadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP pelvis, Judet (45° oblicuas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fragmentos intraarticulares, fracturas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Post-reducción (obligatorio)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones partes blandas, edema medular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación necrosis avascular tardía</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Manejo Inicial</p>
      <p className='p16'>Reducción Cerrada (Urgente):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Allis</strong>: Tracción en línea con flexión 90° + rotación</li>
            <li><strong>Stimson</strong>: Decúbito prono con peso en pierna flexionada</li>
            <li><strong>Bigelow</strong>: Tracción + rotaciones sucesivas</li>
          </ul>
        </li>
        <li><strong>Consideraciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Sedación profunda/anestesia general</li>
            <li>Máximo 3 intentos (riesgo fractura cabeza femoral)</li>
            <li>Evaluar estabilidad post-reducción</li>
          </ul>
        </li>
        <li><strong>Post-reducción</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inmovilización con tracción cutánea o abducción limitada</li>
            <li>TC post-reducción obligatorio</li>
            <li>Profilaxis trombosis venosa profunda</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Reducción abierta fallida</li>
        <li>Inestabilidad persistente post-reducción</li>
        <li>Fracturas asociadas (acetábulo, cabeza femoral)</li>
        <li>Fragmentos intraarticulares irreductibles</li>
        <li>Luxación abierta</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Vías de abordaje</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Posterior (Kocher-Langenbeck)</strong>: Para luxaciones posteriores</li>
            <li><strong>Anterior (Smith-Petersen)</strong>: Para luxaciones anteriores</li>
            <li><strong>Ilioinguinal</strong>: Fracturas acetabulares complejas</li>
          </ul>
        </li>
        <li><strong>Procedimientos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteosíntesis fracturas acetabulares</li>
            <li>Extracción fragmentos intraarticulares</li>
            <li>Reparación labrum/ligamentos</li>
            <li>Artroplastia (fracturas cabeza femoral severas)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔄 Rehabilitación</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actividades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-4 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección, disminuir inflamación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización pasiva, ejercicios isométricos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (4-8 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios activos, fortalecimiento progresivo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fortalecimiento (8-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar 80% fuerza</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios resistencia, propiocepción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Avanzada (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades plenas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Entrenamiento funcional específico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Necrosis avascular cabeza femoral</strong> (10-20%):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Riesgo aumenta con tiempo hasta reducción</li>
            <li>Mayor incidencia en luxaciones posteriores</li>
          </ul>
        </li>
        <li><strong>Artrosis postraumática</strong> (20-30%)</li>
        <li><strong>Inestabilidad recurrente</strong> (5-10%)</li>
        <li><strong>Lesión nervio ciático</strong> (10-20% en luxaciones posteriores)</li>
        <li><strong>Heterotopia ósea</strong> (2-5%)</li>
      </ul>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxaciones simples reducidas temprano</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>85-90% buenos resultados funcionales</li>
            <li>Menor riesgo complicaciones</li>
          </ul>
        </li>
        <li><strong>Luxaciones complejas/fractura-luxaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>50-60% resultados satisfactorios</li>
            <li>Mayor riesgo artrosis y necrosis avascular</li>
          </ul>
        </li>
        <li><strong>Factores pronósticos negativos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Retraso en reducción (mayor a 6 horas)</li>
            <li>Fracturas asociadas</li>
            <li>Lesión cartílago articular</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La luxación de cadera constituye una emergencia ortopédica que requiere reducción inmediata (menor a 6 horas) para prevenir necrosis avascular. El manejo debe incluir evaluación cuidadosa de fracturas asociadas y lesiones neurovasculares. Las luxaciones complejas o inestables requieren tratamiento quirúrgico, mientras las simples pueden manejarse conservadoramente con inmovilización temporal. El seguimiento a largo plazo es esencial para detectar complicaciones tardías como artrosis o necrosis avascular.
      </p>
    </div>
  );
}

export default LuxacionCadera;