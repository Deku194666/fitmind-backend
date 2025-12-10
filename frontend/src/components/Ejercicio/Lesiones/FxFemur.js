

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxFemur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Fémur</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de fémur representan <strong>3-6% de todas las fracturas</strong> en adultos, con una incidencia bimodal: adultos jóvenes (trauma de alta energía) y ancianos (fragilidad ósea). 
        Son consideradas emergencias ortopédicas debido al riesgo de <strong>shock hemorrágico</strong> (pérdida de 1-1.5L de sangre en fracturas diafisarias) y requieren estabilización quirúrgica precoz.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Diafisis femoral</strong>: Zona de mayor estrés mecánico (cortical gruesa)</li>
        <li><strong>Vascularización</strong>: Arteria femoral profunda y arterias nutricias</li>
        <li><strong>Compartimentos musculares</strong>: Anterior (extensores), medial (aductores), posterior (flexores)</li>
        <li><strong>Puntos débiles</strong>: Unión subtrocantérica (alto estrés cortante)</li>
      </ul>

      <p className='p14'>Clasificación AO/OTA 📊</p>
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
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>32-A</strong><br/>(Simples)</td>
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
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>32-B</strong><br/>(Con cuña)</td>
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
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}><strong>32-C</strong><br/>(Complejas)</td>
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

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma de alta energía</strong> (adultos jóvenes):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Accidentes vehiculares (50%)</li>
            <li>Caídas de altura (25%)</li>
            <li>Heridas por arma de fuego (15%)</li>
          </ul>
        </li>
        <li><strong>Trauma de baja energía</strong> (ancianos):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caídas desde bipedestación</li>
            <li>Fracturas patológicas (metástasis, mieloma)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Presentación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Triada clásica</strong>: Dolor + deformidad + impotencia funcional</li>
        <li><strong>Acortamiento</strong>: 2-5 cm por contracción muscular</li>
        <li><strong>Hematoma</strong>: Tardío (24-48h) en muslo medial</li>
        <li><strong>Shock hipovolémico</strong>: En 10-15% de fracturas diafisarias</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '75%', borderCollapse: 'collapse', marginLeft: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral de fémur completo + articulaciones adyacentes</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, fragmentos intraarticulares</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RNM</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas patológicas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso medular, tejidos blandos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gammagrafía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metástasis ocultas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento focal de captación</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado excepcionalmente en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pacientes no ambulatorios con condiciones médicas inestables</li>
        <li>Fracturas incompletas no desplazadas en niños</li>
        <li>Contexto paliativo en fracturas patológicas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tractación esquelética</strong>: Provisional (pin transcalcáneo o tibial)</li>
        <li><strong>Inmovilización</strong>: Yeso pelvipédico (raro en adultos)</li>
        <li><strong>Analgesia</strong>: Opioides + bloqueo femoral continuo</li>
        <li><strong>Complicaciones</strong>: Alto riesgo de trombosis, úlceras por presión</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Principios:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Urgencia relativa</strong>: Ideal menor a 24h (excepto politraumatizados inestables)</li>
        <li><strong>Reducción anatómica</strong>: Especialmente en pacientes jóvenes</li>
        <li><strong>Estabilidad absoluta</strong>: Permite carga precoz</li>
      </ul>

      <p className='p16'>Técnicas por Localización:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Subtrocantéricas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Clavo cefalomedular largo (PFN, Gamma nail)</li>
            <li>Placa de compresión dinámica (DCS) en casos seleccionados</li>
          </ul>
        </li>
        <li><strong>Diafisarias</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Clavado intramedular bloqueado (gold standard)</li>
            <li>Placa de compresión (LCP) para fracturas muy distales</li>
          </ul>
        </li>
        <li><strong>Supracondíleas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Placa anatómica LCP 95°</li>
            <li>Clavo retrógrado en fracturas seleccionadas</li>
          </ul>
        </li>
        <li><strong>Patológicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Clavos recubiertos de cemento</li>
            <li>Resección + megaprótesis en metástasis grandes</li>
          </ul>
        </li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, movilización pasiva, prevención TEV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta cicatrización</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga parcial progresiva, fortalecimiento cuádriceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta evidencia radiográfica de callo óseo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga completa, recuperación arco de movimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta marcha independiente</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno a actividades, entrenamiento propioceptivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Precoces</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Síndrome compartimental (3-5%)</li>
            <li>Infección profunda (1-3%)</li>
            <li>Tromboembolismo pulmonar (2-4%)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Pseudoartrosis (1-5%)</li>
            <li>Malunión (rotacional/angular)</li>
            <li>Dismetría (mayor a 2 cm en 10%)</li>
            <li>Rigidez articular (especialmente rodilla)</li>
          </ul>
        </li>
        <li><strong>Específicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Síndrome del clavo (dolor trocantérico)</li>
            <li>Fractura alrededor del implante</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Consideraciones Especiales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Politraumatizados</strong>: Priorizar estabilización temprana (damage control orthopedics)</li>
        <li><strong>Pacientes pediátricos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tratamiento conservador en menor a 8 años (tracto-férula)</li>
            <li>Clavos elásticos estabilizados (ESIN) en 8-12 años</li>
          </ul>
        </li>
        <li><strong>Fracturas patológicas</strong>: Evaluar enfermedad de base, considerar radioterapia preoperatoria</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de fémur requieren manejo quirúrgico urgente con osteosíntesis estable (clavo intramedular en la mayoría de casos). 
        La rehabilitación precoz es fundamental para prevenir complicaciones, especialmente en politraumatizados. 
        El pronóstico funcional depende de la reducción anatómica, estabilidad del montaje y manejo de comorbilidades, con tasas de consolidación mayor a 95% en fracturas no complicadas.
      </p>
    </div>
  );
}

export default FxFemur;