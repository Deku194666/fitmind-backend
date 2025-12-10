

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Codo</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de codo representan aproximadamente el <strong>5-7% de todas las fracturas</strong> en adultos y son particularmente comunes en niños (10% de todas las fracturas pediátricas). 
        La articulación del codo es compleja, compuesta por tres articulaciones (humeroulnar, humeroradial y radioulnar proximal) que funcionan como una unidad coordinada. 
        Las fracturas en esta región pueden comprometer significativamente la función del miembro superior.
      </p>

      {/* ANATOMÍA CLAVE */}
      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Húmero distal:</strong> Tróclea, cóndilo, epicóndilos y fosas coronoides/olecraneana</li>
        <li><strong>Cúbito proximal:</strong> Olécranon y apófisis coronoides</li>
        <li><strong>Radio proximal:</strong> Cabeza y cuello radial</li>
        <li><strong>Estabilidad:</strong> Depende de estructuras óseas (60%) y ligamentosas (40%)</li>
      </ul>

      {/* TIPOS DE FRACTURAS */}
      <p className='p14'>📌 Tipos de Fracturas de Codo</p>
      
      <p className='p16'>Fracturas de Húmero Distal:</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo (AO)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Incidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extraarticulares (supracondíleas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>30% (70% en niños)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parcialmente articulares (unicondíleas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>C</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Completamente articulares (bicondíleas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50%</td>
          </tr>
        </tbody>
      </table>

      <p className='p16'>Fracturas de Olécranon:</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo (Mayo)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manejo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No desplazada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Conservador</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazada, estable</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Quirúrgico (tensión)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazada, inestable</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Quirúrgico (placa)</td>
          </tr>
        </tbody>
      </table>

      <p className='p16'>Fracturas de Cabeza Radial (Mason):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tipo I:</strong> No desplazada (menor a 2mm) - Tratamiento conservador</li>
        <li><strong>Tipo II:</strong> Desplazada (amyor a 2mm, menor a 30% cabeza) - Reducción o resección</li>
        <li><strong>Tipo III:</strong> Conminuta - Artroplastia o prótesis</li>
        <li><strong>Tipo IV:</strong> Con luxación - Reducción urgente</li>
      </ul>

      {/* DIAGNÓSTICO */}
      <p className='p14'>📌 Diagnóstico</p>
      <p className='p16'>Examen Físico:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Triada dolor-edema-deformidad</strong></li>
        <li><strong>Evaluación neurovascular:</strong> Nervio cubital (50% de lesiones en fracturas supracondíleas)</li>
        <li><strong>Pruebas de estabilidad:</strong> Prueba de estrés en varo/valgo</li>
        <li><strong>Signo del "codo flotante":</strong> Fracturas ipsilaterales de húmero distal y antebrazo</li>
      </ul>

      <p className='p16'>Estudios de Imagen:</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Todos los casos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones AP, lateral y oblicuas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, fragmentos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentosas asociadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad del LCL/MCL</td>
          </tr>
        </tbody>
      </table>

      {/* TRATAMIENTO */}
      <p className='p14'>📌 Tratamiento</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '48%' }}>
          <p className='p16'>Conservador 🏥</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Indicaciones:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Fracturas no desplazadas</li>
                <li>Pacientes de baja demanda</li>
                <li>Contraindicaciones quirúrgicas</li>
              </ul>
            </li>
            <li><strong>Protocolo:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Inmovilización con yeso posterior 3-4 semanas</li>
                <li>Control radiográfico semanal inicial</li>
                <li>Movilización progresiva supervisada</li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ width: '48%' }}>
          <p className='p16'>Quirúrgico 🔪</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Indicaciones:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Desplazamiento mayor a 2mm en superficies articulares</li>
                <li>Inestabilidad articular</li>
                <li>Fracturas abiertas</li>
                <li>Compromiso neurovascular</li>
              </ul>
            </li>
            <li><strong>Técnicas:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Osteosíntesis con placa bloqueada</li>
                <li>Clavos percutáneos (niños)</li>
                <li>Artroplastia radial (Mason III-IV)</li>
                <li>Fijación externa (lesiones complejas)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* REHABILITACIÓN */}
      <p className='p14'>📌 Rehabilitación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tiempo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intervenciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-3 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor/edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, ejercicios digitales</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización activa-asistida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar fuerza</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios isométricos/progresivos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Funcional</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>mayor a 12 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios específicos</td>
          </tr>
        </tbody>
      </table>

      {/* COMPLICACIONES */}
      <p className='p14'>⚠️ Complicaciones</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '32%' }}>
          <p className='p16'>Tempranas:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Síndrome compartimental</li>
            <li>Lesión neurovascular</li>
            <li>Infección (quirúrgicas)</li>
          </ul>
        </div>
        <div style={{ width: '32%' }}>
          <p className='p16'>Tardías:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Rigidez articular (40%)</li>
            <li>Pseudoartrosis (5-10%)</li>
            <li>Artrosis postraumática</li>
          </ul>
        </div>
        <div style={{ width: '32%' }}>
          <p className='p16'>Específicas:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Sínostosis radiocubital</li>
            <li>Inestabilidad crónica</li>
            <li>Heterotópica osificación</li>
          </ul>
        </div>
      </div>

      {/* PREVENCIÓN */}
      <p className='p14'>🛡️ Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protección en deportes:</strong> Equipo adecuado para actividades de riesgo</li>
        <li><strong>Prevención de caídas:</strong> Especialmente en ancianos</li>
        <li><strong>Rehabilitación precoz:</strong> Evitar rigideces postinmovilización</li>
        <li><strong>Manejo osteoporosis:</strong> En pacientes de riesgo</li>
      </ul>

      {/* CONCLUSIÓN */}
      <p className='p14'>📌 Conclusión</p>
      <p className='p150'>
        Las fracturas de codo representan un desafío terapéutico debido a la complejidad anatómica y la importancia funcional de esta articulación. 
        El tratamiento debe individualizarse según el tipo de fractura, desplazamiento y características del paciente. 
        Mientras las fracturas no desplazadas pueden manejarse conservadoramente, las desplazadas requieren reducción anatómica y fijación estable. 
        La rehabilitación temprana y supervisada es clave para optimizar los resultados funcionales y minimizar complicaciones como la rigidez articular.
      </p>
    </div>
  );
}

export default FxCodo;