

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxPierna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Pierna (Tibia y Peroné)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de tibia y peroné representan <strong>10-15% de todas las fracturas</strong> en adultos, siendo la diáfisis tibial la localización más común. 
        Presentan desafíos únicos debido a la <strong>escasa cobertura muscular</strong> en el tercio distal (riesgo de pseudoartrosis) y alta tasa de fracturas abiertas (30-40% en trauma de alta energía).
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tibia</strong>: Soporta el 85% del peso corporal, con vascularización precaria en tercio distal</li>
        <li><strong>Peroné</strong>: Función principalmente muscular (inserción de peroneos) y estabilización lateral</li>
        <li><strong>Compartimentos</strong>: 4 en pierna (anterior, lateral, posterior superficial y profundo)</li>
        <li><strong>Puntos críticos</strong>: Unión tercio medio-distal tibial (zona de peor vascularización)</li>
      </ul>

      <p className='p14'>Clasificación AO/OTA (42) 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>42-A</strong><br/>(Simples)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>A1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espiral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estable tras reducción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>A2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oblícua (mayor a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moderadamente estable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>A3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Transversa (menor a 30°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable</td>
          </tr>
          <tr>
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>42-B</strong><br/>(Con cuña)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>B1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuña por impacto</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estable tras reducción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>B2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuña intacta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moderadamente estable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>B3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuña fragmentada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable</td>
          </tr>
          <tr>
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>42-C</strong><br/>(Complejas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>C1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espiral compleja</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Altamente inestable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>C2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Segmentaria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>C3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Irregular/comminuta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Máxima inestabilidad</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Clasificación de Gustilo-Anderson (Fracturas Abiertas)</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tasa de Infección</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Herida menor a 1cm, contaminación mínima</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-2%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Herida 1-10cm, contaminación moderada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-10%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III-A</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Herida mayor a 10cm, alta energía, cobertura adecuada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III-B</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pérdida de cobertura, requiere injerto/flap</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20-50%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III-C</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión vascular que requiere reparación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>mayor a 50%</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma de alta energía</strong> (adultos jóvenes):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Accidentes vehiculares (60%)</li>
            <li>Heridas por arma de fuego (15%)</li>
            <li>Caídas de altura (10%)</li>
          </ul>
        </li>
        <li><strong>Trauma de baja energía</strong> (ancianos/osteoporosis):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caídas desde bipedestación</li>
            <li>Torsiones (fracturas espirales)</li>
          </ul>
        </li>
        <li><strong>Fracturas por estrés</strong>: Atletas, reclutas militares (tercio proximal tibia)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Inicial</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Triada clásica</strong>: Dolor + deformidad + impotencia funcional</li>
        <li><strong>Evaluación neurovascular</strong>: Pulso pedio, capilar, nervio peroneo</li>
        <li><strong>Signos de alarma</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tensión muscular (sospecha de síndrome compartimental)</li>
            <li>Piel tenting (riesgo de conversión a abierta)</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral de toda la tibia + tobillo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas intraarticulares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, fragmentos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas ocultas/estrés</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, línea de fractura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía Doppler</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso vascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flujo arterial/venoso</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas no desplazadas o mínimamente desplazadas (menor a 5° angulación, menro a 1cm acortamiento)</li>
        <li>Fracturas estables en niños (yeso pelvipédico)</li>
        <li>Pacientes no ambulatorios o alto riesgo quirúrgico</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Yeso largo o férula (4-6 semanas) seguido de yeso funcional</li>
        <li><strong>Progresión de carga</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fracturas estables: Carga parcial a las 2-4 semanas</li>
            <li>Fracturas inestables: Carga tardía (6-8 semanas)</li>
          </ul>
        </li>
        <li><strong>Control radiográfico</strong>: Semanal las primeras 3 semanas</li>
        <li><strong>Complicaciones</strong>: Alto riesgo de desplazamiento secundario (30%)</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones Absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas abiertas (todas las Gustilo I-III)</li>
        <li>Fracturas inestables (42-B/C)</li>
        <li>Compromiso neurovascular</li>
        <li>Síndrome compartimental establecido</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Clavado intramedular bloqueado</strong> (Gold standard):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica: Reamed vs unreamed</li>
            <li>Ventajas: Preserva tejidos blandos, permite carga precoz</li>
            <li>Indicación: Fracturas diafisarias 42-A/B</li>
          </ul>
        </li>
        <li><strong>Osteosíntesis con placa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica: MIPO (minimally invasive plate osteosynthesis)</li>
            <li>Ventajas: Reducción anatómica en fracturas articulares</li>
            <li>Indicación: Fracturas metafisarias proximales/distales</li>
          </ul>
        </li>
        <li><strong>Fijación externa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica: Monolateral o circular (Ilizarov)</li>
            <li>Ventajas: Control de daño en politraumatizados</li>
            <li>Indicación: Fracturas abiertas grado III, infección</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Manejo de Fracturas Abiertas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Urgencia</strong>: Desbridamiento quirúrgico menor a 6-8h</li>
        <li><strong>Antibióticos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Gustilo I: Cefazolina 24h</li>
            <li>Gustilo II/III: Cefazolina + aminoglucósido (72h)</li>
            <li>Gustilo III agrícola: + Penicilina</li>
          </ul>
        </li>
        <li><strong>Estabilización</strong>: Fijación externa temporal → conversión a interna (5-7 días)</li>
        <li><strong>Cobertura</strong>: Colgajo local/microquirúrgico en 7-10 días</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-2 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, movilización pasiva, prevención TEV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta cicatrización</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga parcial progresiva (20-50% peso)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta evidencia de callo óseo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga completa, recuperación arco de movimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta marcha independiente</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno a actividades, fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Precoces</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Síndrome compartimental (5-10%)</li>
            <li>Infección (1-5% cerradas, 10-50% abiertas)</li>
            <li>Tromboembolismo pulmonar (2-5%)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Pseudoartrosis (5-15%, mayor en tercio distal)</li>
            <li>Malunión (rotacional/angular)</li>
            <li>Retardo de consolidación (20-30% en fracturas abiertas)</li>
          </ul>
        </li>
        <li><strong>Específicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor anterior de rodilla (post-clavado)</li>
            <li>Artrosis postraumática (fracturas intraarticulares)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de tibia y peroné requieren un enfoque individualizado basado en el patrón de fractura, integridad de tejidos blandos y estado del paciente. 
        Mientras las fracturas estables pueden manejarse conservadoramente, las inestables o abiertas requieren osteosíntesis urgente. 
        El clavado intramedular sigue siendo el gold standard para fracturas diafisarias, con tasas de consolidación mayora a95% en casos no complicados. 
        La vigilancia del síndrome compartimental y el manejo agresivo de fracturas abiertas son cruciales para prevenir complicaciones devastadoras.
      </p>
    </div>
  );
}

export default FxPierna;