

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SLAP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión SLAP (Superior Labrum Anterior to Posterior)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión SLAP es un <strong>desgarro del labrum glenoideo en su porción superior</strong>, donde se inserta el tendón de la porción larga del bíceps. 
        Representa aproximadamente el <strong>6-12% de todas las patologías del hombro</strong> y es especialmente común en atletas que realizan movimientos 
        repetitivos por encima de la cabeza (lanzadores, tenistas, nadadores).
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Labrum superior</strong>: Zona de anclaje del tendón de la porción larga del bíceps y del ligamento glenohumeral superior
        </li>
        <li>
          <strong>Zona de transición</strong>: Área histológicamente vulnerable entre el cartílago fibroso del labrum y el cartílago hialino de la glenoides
        </li>
        <li>
          <strong>Complejo bíceps-labrum</strong>: Estructura funcional que absorbe fuerzas de tracción y torsión durante actividades de lanzamiento
        </li>
      </ul>

      <p className='p14'>Clasificación de Snyder (Tipos SLAP) 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Degeneración y desflecamiento del labrum superior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Borde irregular pero inserción del bíceps intacta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desinserción del labrum y tendón del bíceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo más común (41-55%), requiere reparación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro en "asa de balde" del labrum</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inserción del bíceps intacta, puede resecarse</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>IV</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extensión del desgarro al tendón del bíceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Requiere tenodesis si mayor a 30% del tendón afectado</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>V-X</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variantes combinadas con otras lesiones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Asociación con Bankart, HAGL, etc.</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tracción aguda</strong>: Caída con brazo extendido sobre la cabeza</li>
        <li><strong>Compresión</strong>: Caída sobre hombro abducido</li>
        <li><strong>Microtrauma repetitivo</strong>: Movimientos de lanzamiento (fase de deceleración)</li>
        <li><strong>Luxación glenohumeral</strong>: Asociada en 10-15% de los casos</li>
        <li><strong>Deportes de riesgo</strong>: Béisbol (38%), tenis (22%), natación (15%)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de O'Brien</strong>: Dolor en rotación interna resistida (sensibilidad 63%, especificidad 73%)</li>
        <li><strong>Prueba de Speed</strong>: Dolor en flexión anterior resistida</li>
        <li><strong>Prueba de compresión rotatoria</strong>: Dolor con rotación en carga</li>
        <li><strong>Prueba de biceps load I y II</strong>: Evalúa compromiso del tendón largo del bíceps</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Generalmente normal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar otras patologías óseas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro labral superior, señal anormal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 82-89%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extensión del contraste bajo labrum</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 86-91%, gold standard</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Limitada para SLAP, útil para patología del bíceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Poco útil para diagnóstico directo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>SLAP tipo I y algunos tipo III</li>
        <li>Pacientes mayores con baja demanda funcional</li>
        <li>Primer enfoque en atletas no profesionales</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-4 semanas)</strong>: Reposo relativo, AINEs, modificación actividades</li>
        <li><strong>Fase intermedia (4-8 semanas)</strong>: Ejercicios de ROM, fortalecimiento escapular</li>
        <li><strong>Fase avanzada (8-12 semanas)</strong>: Fortalecimiento rotadores, propiocepción</li>
        <li><strong>Retorno deportivo</strong>: Programa progresivo específico para el deporte</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>SLAP tipo II (principal indicación)</li>
        <li>SLAP tipo IV con compromiso mayor a 30% del tendón</li>
        <li>Fracaso de 3-6 meses de tratamiento conservador</li>
        <li>Atletas profesionales con alta demanda</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación artroscópica SLAP</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reinserción labral con anclajes (1-2 anclajes usualmente)</li>
            <li>Desbridamiento de tejido degenerado</li>
          </ul>
        </li>
        <li><strong>Tenodesis del bíceps</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Indicada en SLAP IV, pacientes mayor a 35-40 años</li>
            <li>Técnicas abiertas o artroscópicas</li>
          </ul>
        </li>
        <li><strong>Desbridamiento simple</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para SLAP I y III seleccionados</li>
            <li>Resección del fragmento inestable</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con cabestrillo 3-4 semanas (reparación)</li>
        <li>Movilización precoz en tenodesis (1-2 semanas)</li>
        <li>Restricción de rotación externa y abducción inicial</li>
        <li>Retorno deportivo completo a los 6-9 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (4-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (8-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento inicial (isométrico)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento avanzado, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios específicos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 12 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez postquirúrgica</strong>: Pérdida de rotación externa (5-15%)</li>
        <li><strong>Dolor persistente</strong>: Por falla de reparación o patología asociada</li>
        <li><strong>Fallo de reparación</strong>: Mayor riesgo en lanzadores</li>
        <li><strong>Popeye deformity</strong>: En tenodesis fallida</li>
        <li><strong>Artrosis glenohumeral</strong>: A largo plazo en casos mal manejados</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas de fortalecimiento</strong>: Enfoque en rotadores y escapulotorácicos</li>
        <li><strong>Modificación técnica</strong>: En atletas de lanzamiento (mecánica de lanzamiento)</li>
        <li><strong>Control de volumen</strong>: Evitar sobreuso en deportes repetitivos</li>
        <li><strong>Rehabilitación completa</strong>: Antes de retorno deportivo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las <strong> Lesiones SLAP </strong> representan un desafío diagnóstico y terapéutico, especialmente en atletas de lanzamiento. Mientras que las lesiones tipo I y III pueden manejarse frecuentemente con tratamiento conservador, 
        las tipo II generalmente requieren reparación artroscópica. La tenodesis del bíceps ha emergido como una alternativa efectiva, especialmente en pacientes mayores. La rehabilitación debe ser individualizada y 
        progresiva, con especial atención a la recuperación de la estabilidad dinámica y la mecánica escapular adecuada.
      </p>
    </div>
  );
}

export default SLAP;