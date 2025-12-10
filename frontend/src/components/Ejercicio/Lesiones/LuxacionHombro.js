import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LuxacionHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxación de Hombro y Clavícula</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La luxación glenohumeral es la <strong>articulación más frecuentemente luxada</strong>, representando el 50% de todas las luxaciones. Las lesiones acromioclaviculares constituyen el 12% de las lesiones del cinturón escapular, con mayor incidencia en varones jóvenes (20-30 años) y deportistas. La recurrencia en menores de 25 años alcanza el <strong>70-90%</strong> en ausencia de tratamiento adecuado.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Hombro (Glenohumeral)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Labrum glenoideo</strong>: Ancla los ligamentos glenohumerales</li>
            <li><strong>Ligamento glenohumeral inferior</strong> (IGHL): Principal estabilizador en abducción</li>
            <li><strong>Manguito rotador</strong>: Estabilización dinámica</li>
          </ul>
        </li>
        <li>
          <strong>Clavícula (Articulación AC)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamentos acromioclaviculares</strong>: Controlan movimiento horizontal</li>
            <li><strong>Ligamentos coracoclaviculares</strong> (conoide y trapezoide): Estabilidad vertical</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio axilar (lesión en 5-10% de luxaciones)</li>
            <li>Arteria axilar (compromiso en &lt;1%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Clasificación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Articulación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }} rowSpan="3"><strong>Glenohumeral</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>95%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abducción + rotación externa + fuerza posterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracción axial con brazo en aducción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inferior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperabducción forzada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }} rowSpan="3"><strong>Acromioclavicular</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo I-II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Esguince/ruptura parcial ligamentos AC</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ruptura completa ligamentos AC y CC</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo IV-VI</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dislocación grave con compromiso muscular</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro anterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano abducida y rotada externamente</li>
            <li>Impacto directo posterior en hombro abducido</li>
          </ul>
        </li>
        <li><strong>Hombro posterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma directo anterior en hombro aducido</li>
            <li>Convulsiones o electrocución (contracción muscular violenta)</li>
          </ul>
        </li>
        <li><strong>Lesión AC</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída directa sobre hombro (90%)</li>
            <li>Tracción superior del brazo (10%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro anterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Hombro cuadrado, brazo en rotación externa</li>
            <li>Palpación de cabeza humeral anterior</li>
          </ul>
        </li>
        <li><strong>Hombro posterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Rotación interna fija, prominencia coracoides</li>
            <li>Dificultad para rotación externa activa</li>
          </ul>
        </li>
        <li><strong>Lesión AC</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deformidad escalonada (signo de la tecla de piano)</li>
            <li>Dolor localizado sobre articulación AC</li>
          </ul>
        </li>
        <li><strong>Evaluación neurovascular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Función nervio axilar (sensación regimiento deltoideo)</li>
            <li>Pulsos distales y perfusión</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Verdadera AP, axial, Y escapular (hombro)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defectos óseos (Bankart óseo, Hill-Sachs)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación prequirúrgica, fracturas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones labrales, ligamentarias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxaciones recurrentes, planificación quirúrgica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Manejo Inicial</p>
      <p className='p16'>Reducción Cerrada:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnicas hombro anterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Stimson</strong>: Decúbito prono con peso 5-10kg</li>
            <li><strong>Milch</strong>: Abducción + tracción + rotación externa</li>
            <li><strong>Kocher</strong>: Tracción + rotación externa + aducción + rotación interna</li>
          </ul>
        </li>
        <li><strong>Técnicas hombro posterior</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tracción axial + rotación externa + presión anterior</li>
          </ul>
        </li>
        <li><strong>Lesión AC</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción manual + inmovilización (sling)</li>
            <li>Tipos I-II: tratamiento conservador</li>
            <li>Tipos IV-VI: quirúrgico</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Luxaciones recurrentes (&gt;2 episodios)</li>
            <li>Defecto óseo glenoideo &gt;20-25% o Hill-Sachs "engaging"</li>
            <li>Luxación bloqueada irreductible</li>
            <li>Pacientes jóvenes (&lt;25 años) con alta demanda</li>
          </ul>
        </li>
        <li><strong>Clavícula</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Lesiones tipo IV-VI</li>
            <li>Pacientes jóvenes activos con tipo III</li>
            <li>Fallo tratamiento conservador (dolor crónico)</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Bankart artroscópico</strong>: 3-4 anclas (2.5-3.5mm)</li>
            <li><strong>Latarjet</strong>: Transferencia coracoides (defecto óseo &gt;25%)</li>
            <li><strong>Remplissage</strong>: Para Hill-Sachs grande</li>
          </ul>
        </li>
        <li><strong>Clavícula</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>TightRope</strong>: Sistema de botón suspensorio</li>
            <li><strong>Reconstrucción CC</strong>: Injerto semitendinoso</li>
            <li><strong>Weaver-Dunn modificado</strong>: Transferencia CA</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔄 Rehabilitación</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hombro</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-3 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sling, movilización pasiva limitada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sling, movilidad codo/muñeca</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (3-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios pendulares, ROM progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilidad activa asistida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fortalecimiento (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento rotadores, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios resistencia progresiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Avanzada (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo gradual</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Actividades plenas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Recurrencia (50-90% en jóvenes no tratados)</li>
            <li>Rigidez (10-15%)</li>
            <li>Artrosis postraumática (tardía)</li>
            <li>Lesión nervio axilar (5-10%)</li>
          </ul>
        </li>
        <li><strong>Clavícula</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inestabilidad residual (5-10%)</li>
            <li>Osteólisis distal (2-5%)</li>
            <li>Artrosis AC (10-15%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hombro</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Luxaciones simples: 85-90% buenos resultados</li>
            <li>Recurrencia: 50-90% en &lt;25 años sin cirugía</li>
            <li>Postquirúrgico: 5-15% recurrencia</li>
          </ul>
        </li>
        <li><strong>Clavícula</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tipos I-II: 90% buenos resultados conservador</li>
            <li>Tipos III: 70-80% satisfacción</li>
            <li>Tipos IV-VI: Requieren reparación quirúrgica</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La luxación glenohumeral requiere reducción inmediata y evaluación cuidadosa de lesiones asociadas. En pacientes jóvenes con alta demanda, la reparación quirúrgica temprana puede prevenir recurrencias. Las lesiones AC grado I-II responden bien al tratamiento conservador, mientras las formas severas (IV-VI) generalmente requieren reparación quirúrgica. La rehabilitación progresiva es clave para optimizar resultados funcionales en ambos casos.
      </p>
    </div>
  );
}

export default LuxacionHombro;