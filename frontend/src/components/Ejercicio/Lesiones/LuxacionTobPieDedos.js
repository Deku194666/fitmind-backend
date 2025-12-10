

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LuxacionTobPieDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxaciones de Tobillo, Pie y Dedos</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las luxaciones en el complejo del tobillo y pie representan <strong>5-7% de todas las luxaciones</strong>, siendo las más frecuentes las subtalares (40%) y mediotarsianas (35%). Requieren atención inmediata por su <strong>alto riesgo de complicaciones vasculares y cutáneas</strong>. Las luxaciones de dedos son comunes en deportes y accidentes laborales, con el primer dedo siendo el más afectado (60% de casos).
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Tarjeta Tobillo */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', flex: '1', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Tobillo</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Ligamento deltoideo</strong>: Estabilidad medial</li>
            <li><strong>Ligamento lateral</strong> (3 fascículos): Estabilidad lateral</li>
            <li><strong>Sindesmosis</strong>: Estabilidad tibiofibular distal</li>
          </ul>
        </div>

        {/* Tarjeta Pie */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', flex: '1', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Articulaciones del Pie</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Subtalar</strong>: Articulación talocalcánea</li>
            <li><strong>Chopart</strong>: Articulación talonavicular y calcaneocuboidea</li>
            <li><strong>Lisfranc</strong>: Articulación tarsometatarsiana</li>
          </ul>
        </div>

        {/* Tarjeta Dedos */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', flex: '1', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Dedos</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Placa plantar</strong>: Estabilizador principal</li>
            <li><strong>Ligamentos colaterales</strong>: Estabilidad lateral</li>
            <li><strong>Mecanismo flexor</strong>: Tendones flexores y extensores</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📊 Clasificación</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Tabla Luxación Tobillo */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4>Luxación de Tobillo (Broos-Bisschop)</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lateral (60%)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Medial (25%)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Posterior (10%)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anterior (5%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Luxación Lisfranc */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4>Luxación Lisfranc (Myerson)</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento homogéneo (mayor a 50%)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento parcial</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>C</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad divergente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma en rotación forzada (inversión/eversión)</li>
            <li>Hiperflexión plantar/dorsal extrema</li>
          </ul>
        </li>
        <li><strong>Lisfranc</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Compresión axial en pie flexionado (caídas, accidentes)</li>
            <li>Hiperflexión dorsal forzada</li>
          </ul>
        </li>
        <li><strong>Dedos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma directo (impacto)</li>
            <li>Hiperextensión forzada (atrapamiento)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deformidad evidente, equimosis</li>
            <li>Evaluación pulsos pedio y tibial posterior</li>
            <li>Prueba de estrés (solo post-reducción)</li>
          </ul>
        </li>
        <li><strong>Pie</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor en "barra" en mediopie</li>
            <li>Signo del "pie plano traumático"</li>
            <li>Prueba de estrés en abducción/pronsación</li>
          </ul>
        </li>
        <li><strong>Dedos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deformidad digital, edema localizado</li>
            <li>Evaluación neurovascular distal</li>
            <li>Prueba de estabilidad colateral</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tobillo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Pie</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dedos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografías</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral/mortise</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral/oblícua pie</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral dedo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas osteocondrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación desplazamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentarias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones Lisfranc</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones placa plantar</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Manejo Inicial</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Manejo Tobillo */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Tobillo</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reducción cerrada urgente</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Tracto axial + corrección deformidad</li>
                <li>Sedación/analgesia adecuada</li>
              </ul>
            </li>
            <li><strong>Inmovilización post-reducción</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Férula posterior o yeso</li>
                <li>Posición neutra</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Manejo Pie */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Pie (Lisfranc/Chopart)</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reducción cerrada</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Tracto axial + manipulación</li>
                <li>Requiere anestesia</li>
              </ul>
            </li>
            <li><strong>Inmovilización</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Yeso o férula</li>
                <li>Posición funcional</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Manejo Dedos */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Dedos</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reducción digital</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Tracto axial + flexión</li>
                <li>Bloqueo digital con anestesia</li>
              </ul>
            </li>
            <li><strong>Inmovilización</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Férula o buddy taping</li>
                <li>3-4 semanas</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Cirugía Tobillo */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Tobillo</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Indicaciones</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Inestabilidad post-reducción</li>
                <li>Fractura asociada desplazada</li>
                <li>Lesión cutánea grave</li>
              </ul>
            </li>
            <li><strong>Técnicas</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Osteosíntesis fracturas</li>
                <li>Reparación ligamentosa</li>
                <li>Fijación temporaria sindesmosis</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Cirugía Pie */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Pie</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Indicaciones</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Desplazamiento mayor a 2mm en Lisfranc</li>
                <li>Inestabilidad subtalar</li>
                <li>Fractura-luxación</li>
              </ul>
            </li>
            <li><strong>Técnicas</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Reducción abierta + fijación interna</li>
                <li>Artrodesis selectiva (casos crónicos)</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Cirugía Dedos */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Dedos</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Indicaciones</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Luxación irreductible</li>
                <li>Fractura intraarticular</li>
                <li>Inestabilidad crónica</li>
              </ul>
            </li>
            <li><strong>Técnicas</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Reparación placa plantar</li>
                <li>Fijación con agujas K-wire</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className='p14'>🔄 Rehabilitación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tobillo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Pie</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dedos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-3 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, descarga</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yeso, no apoyo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Buddy taping</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (3-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización progresiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Apoyo parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios activos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fortalecimiento (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción, resistencia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento intrínseco</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso normal</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Complicaciones Tobillo */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Tobillo</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Inestabilidad crónica (15-20%)</li>
            <li>Artrosis postraumática (20-30%)</li>
            <li>Rigidez articular (10-15%)</li>
          </ul>
        </div>

        {/* Complicaciones Pie */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Pie</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Artrosis tarsometatarsiana (40-50%)</li>
            <li>Deformidad en plano/pie cavo</li>
            <li>Síndrome compartimental</li>
          </ul>
        </div>

        {/* Complicaciones Dedos */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '30%', minWidth: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Dedos</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Rigidez (25-30%)</li>
            <li>Deformidad residual</li>
            <li>Artrosis interfalángica</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>80-90% buenos resultados con tratamiento adecuado</li>
            <li>Peor pronóstico en lesiones sindesmales</li>
          </ul>
        </li>
        <li><strong>Pie</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Lisfranc: 60-70% buenos resultados con reducción anatómica</li>
            <li>Subtalar: Alto riesgo de artrosis postraumática</li>
          </ul>
        </li>
        <li><strong>Dedos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>85-90% recuperación completa en 6-8 semanas</li>
            <li>Primer dedo requiere mayor tiempo</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las luxaciones de tobillo requieren reducción inmediata y evaluación de estabilidad, con reconstrucción ligamentosa en casos inestables. Las lesiones de Lisfranc necesitan reducción anatómica precisa (quirúrgica si mayor a 2mm desplazamiento). Las luxaciones digitales suelen manejarse conservadoramente, excepto en primer dedo con inestabilidad. La rehabilitación progresiva es clave para todos los casos, con seguimiento para detectar complicaciones tardías como artrosis o inestabilidad crónica.
      </p>
    </div>
  );
}

export default LuxacionTobPieDedos;