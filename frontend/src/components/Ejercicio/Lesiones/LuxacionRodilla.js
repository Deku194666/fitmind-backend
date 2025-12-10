

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LuxacionRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxación de Rodilla e Inestabilidad Patelofemoral</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las luxaciones de rodilla representan <strong>emergencias ortopédicas</strong> que requieren manejo inmediato. Constituyen menos del 0.5% de todas las luxaciones pero tienen <strong>alto riesgo de complicaciones neurovasculares</strong> (40% lesión arterial poplítea). La inestabilidad patelofemoral afecta al 7-49% de la población, siendo más frecuente en mujeres jóvenes (15-20 años) y atletas.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estabilizadores de rodilla</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamentos cruzados</strong> (ACL/PCL): Estabilidad anteroposterior</li>
            <li><strong>Ligamentos colaterales</strong> (MCL/LCL): Estabilidad medial/lateral</li>
            <li><strong>Cápsula articular</strong>: Soporte global</li>
          </ul>
        </li>
        <li>
          <strong>Estabilizadores patelofemorales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamento patelofemoral medial</strong> (MPFL): Principal restricción a luxación (50-60% de resistencia)</li>
            <li><strong>Morfología ósea</strong>: Surco troclear, altura rótula (índice de Insall-Salvati)</li>
            <li><strong>Músculos</strong>: Vasto medial oblicuo (VMO) - dinámico</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Arteria poplítea (40% riesgo en luxaciones de rodilla)</li>
            <li>Nervio peroneo común (25-35% en luxaciones posterolaterales)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Clasificación</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Tabla Luxación Rodilla */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4>Luxación Tibiofemoral (Schenck)</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>KD-I</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ligamento colateral lesionado (MCL o LCL)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>KD-II</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ambos colaterales lesionados</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>KD-III</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de ambos colaterales + cruzado</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>KD-IV</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de los 4 ligamentos principales</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>KD-V</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura-luxación</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Inestabilidad Patelar */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4>Inestabilidad Patelofemoral (Fulkerson)</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo I</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad sin displasia</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo II</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Displasia troclear</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo III</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alta patela (patella alta)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo IV</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Displasia severa con inestabilidad grave</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación tibiofemoral</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma de alta energía (accidentes vehiculares, caídas altura)</li>
            <li>Hiperextensión + rotación + fuerza varo/valgo</li>
          </ul>
        </li>
        <li><strong>Luxación patelar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma directo en rótula (30%)</li>
            <li>Mecanismo indirecto (rotación tibial externa + valgo + contracción cuadriceps)</li>
            <li>Factores predisponentes: displasia troclear, patella alta, rotación femoral excesiva</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación tibiofemoral</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deformidad evidente, elongación vascular urgente</li>
            <li>Prueba de estrés en anestesia (evaluar laxitud)</li>
            <li>Evaluar signos isquemia (pulso, color, temperatura, capilar)</li>
          </ul>
        </li>
        <li><strong>Inestabilidad patelar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prueba de aprensión positiva (95% sensibilidad)</li>
            <li>Medición Q-angle (mayor a 20° en mujeres, mayor a 15° en hombres)</li>
            <li>Evaluar tracking patelar en flexión-extensión</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación Tibiofemoral</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad Patelar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografías</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral, estrés, axial rótula</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Merchant/sunrise (30°-45° flexión)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar fracturas, alineación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TT-TG distance (mayor a 20mm patológico)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentosas, meniscales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar MPFL, cartílago, morfología troclear</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Angiografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sospecha lesión vascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Manejo Inicial</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Manejo Luxación Rodilla */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Luxación Tibiofemoral</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reducción inmediata</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Tracto axial + corrección deformidad</li>
                <li>Sedación profunda/anestesia</li>
              </ul>
            </li>
            <li><strong>Evaluación post-reducción</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Examen neurovascular completo</li>
                <li>Inmovilización con férula en extensión</li>
              </ul>
            </li>
            <li><strong>Indicaciones quirúrgicas urgentes</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Isquemia aguda</li>
                <li>Luxación irreducible</li>
                <li>Fractura abierta</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Manejo Inestabilidad Patelar */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Inestabilidad Patelar</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Primer episodio</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Reducción espontánea frecuente</li>
                <li>Inmovilización 2-3 semanas en extensión</li>
              </ul>
            </li>
            <li><strong>Evaluación factores de riesgo</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Morfología troclear, alineación extremidad</li>
                <li>Integridad MPFL</li>
              </ul>
            </li>
            <li><strong>Indicaciones quirúrgicas</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Fractura osteocondral</li>
                <li>Inestabilidad recurrente (mayor a 2 episodios)</li>
                <li>Factores anatómicos de riesgo</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Cirugía Luxación Rodilla */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Luxación Tibiofemoral</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reconstrucción ligamentosa</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Reparación primaria vs reconstrucción con injerto</li>
                <li>Secuencia: PCL → ACL → esquina posterolateral → MCL</li>
              </ul>
            </li>
            <li><strong>Técnicas especiales</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Fijador externo articulado (casos complejos)</li>
                <li>Reparación vascular urgente si compromiso</li>
              </ul>
            </li>
            <li><strong>Timing quirúrgico</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Urgente: Lesión vascular, fractura abierta</li>
                <li>Diferido (7-14 días): Reducción edema</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Cirugía Inestabilidad Patelar */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Inestabilidad Patelofemoral</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Reconstrucción MPFL</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Injerto semitendinoso o gracilis</li>
                <li>Anclaje femoral anatómico</li>
              </ul>
            </li>
            <li><strong>Procedimientos óseos</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Osteotomía tibial anteromedial (malalignment)</li>
                <li>Avance tuberosidad tibial (patella alta)</li>
                <li>Trocleoplastia (displasia severa)</li>
              </ul>
            </li>
            <li><strong>Técnicas artroscópicas</strong>:
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Liberación retináculo lateral</li>
                <li>Reparación cartílago/osteocondral</li>
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
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación Tibiofemoral</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad Patelar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-4 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, movilización pasiva limitada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Férula extensión, ejercicios isométricos VMO</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (4-8 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM progresivo, fortalecimiento isométrico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios cadena cinética cerrada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fortalecimiento (8-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios resistencia, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento excéntrico cuadriceps</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Avanzada (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo gradual</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Entrenamiento neuromuscular específico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Complicaciones Luxación Rodilla */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Luxación Tibiofemoral</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Lesión vascular</strong> (40%):
              <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
                <li>Trombosis arterial tardía (hasta 48h post-reducción)</li>
              </ul>
            </li>
            <li><strong>Lesión nervio peroneo</strong> (25-35%)</li>
            <li><strong>Rigidez articular</strong> (30-40%)</li>
            <li><strong>Inestabilidad crónica</strong> (15-20%)</li>
          </ul>
        </div>

        {/* Complicaciones Inestabilidad Patelar */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h4>Inestabilidad Patelofemoral</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Artrosis patelofemoral</strong> (tardía)</li>
            <li><strong>Inestabilidad recurrente</strong> (15-45% sin cirugía)</li>
            <li><strong>Dolor anterior de rodilla crónico</strong></li>
            <li><strong>Lesiones osteocondrales</strong> (hasta 50% en luxaciones agudas)</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación tibiofemoral</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Resultados funcionales buenos en 60-70% con tratamiento adecuado</li>
            <li>Riesgo artrosis postraumática 30-50% a 10 años</li>
            <li>Factores pronóstico negativos: Lesión vascular, fracturas asociadas</li>
          </ul>
        </li>
        <li><strong>Inestabilidad patelar</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>85-90% éxito con reconstrucción MPFL</li>
            <li>Mayor recurrencia en displasia severa no corregida</li>
            <li>Factores pronóstico: Alineación, integridad cartílago, adherencia rehabilitación</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La luxación de rodilla requiere evaluación vascular urgente y reducción inmediata, con reconstrucción ligamentosa multiaxial en casos inestables. La inestabilidad patelofemoral necesita enfoque individualizado según factores anatómicos, con reconstrucción MPFL como gold standard para inestabilidad recurrente. La rehabilitación prolongada y supervisada es clave para ambos cuadros, con seguimiento a largo plazo para detectar complicaciones como artrosis o inestabilidad residual.
      </p>
    </div>
  );
}

export default LuxacionRodilla;