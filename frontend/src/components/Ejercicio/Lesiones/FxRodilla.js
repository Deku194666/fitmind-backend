

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Rodilla</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de rodilla representan <strong>1-2% de todas las fracturas</strong>, siendo particularmente relevantes por su impacto en la función articular. 
        Las fracturas rotuliana constituyen <strong>1% de todas las fracturas</strong> pero son las más comunes de la rodilla (50-60%). 
        Su manejo requiere preservar la integridad del aparato extensor y la congruencia articular.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rótula</strong>: Hueso sesamoideo más grande del cuerpo, parte del mecanismo extensor</li>
        <li><strong>Superficies articulares</strong>: Faceta medial (25%), lateral (75%) y odd facet (10% población)</li>
        <li><strong>Vascularización</strong>: Red anastomótica formada por arterias geniculares (riesgo de necrosis en fracturas comminutas)</li>
        <li><strong>Mecanismo extensor</strong>: Tendón cuadricipital → rótula → tendón rotuliano</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas de Rótula 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Patrón</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Transversa (50%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Línea horizontal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Por contracción brusca del cuádriceps</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable si diástasis mayor a 3mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Conminuta (30-35%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Múltiples fragmentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo (accidentes vehiculares)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Altamente inestable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Polar (10-15%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Superior o inferior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión del tendón cuadricipital o rotuliano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variable según desplazamiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Vertical (5%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Línea longitudinal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo combinado de compresión-flexión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Generalmente estable</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Clasificación de Fracturas de Meseta Tibial (AO/OTA 41) 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso Articular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>41-A</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extraarticular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>41-B</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parcialmente articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>menor a 50%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>41-C</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Completamente articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>amyor a 50%</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fracturas rotulianas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Indirecto</strong>: Caída con rodilla semiflexionada (contracción excéntrica del cuádriceps)</li>
            <li><strong>Directo</strong>: Impacto contra el tablero en accidentes vehiculares</li>
          </ul>
        </li>
        <li><strong>Fracturas de meseta tibial</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Valgo + carga axial</strong>: Esquí, caídas de altura (fractura lateral 55-70%)</li>
            <li><strong>Vargo + carga axial</strong>: Fracturas mediales (10-15%)</li>
          </ul>
        </li>
        <li><strong>Factores de riesgo</strong>: Osteoporosis, deportes de contacto, accidentes de alta energía</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Presentación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Triada clásica</strong>: Dolor + hemartrosis + imposibilidad para extender activamente la rodilla</li>
        <li><strong>Signo del hachazo</strong>: Depresión palpable en fracturas rotulianas desplazadas</li>
        <li><strong>Prueba de extensión activa</strong>: Determinante para evaluar integridad del mecanismo extensor</li>
        <li><strong>Evaluación neurovascular</strong>: Especialmente en fracturas de meseta (nervio peroneo y arteria poplítea)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral/rótula axial (vista de Merchant)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación prequirúrgica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, depresión articular maypr a 2mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentosas asociadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCA/LCP/meniscos, contusión ósea oculta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación tendones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad cuadricipital/rotuliano</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas rotulianas no desplazadas (menor a 2mm diástasis) con mecanismo extensor intacto</li>
        <li>Fracturas de meseta tibial no desplazadas (depresión menor a 5mm, ensanchamiento menor a 1cm)</li>
        <li>Pacientes de muy alto riesgo quirúrgico</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Rodillera articulada bloqueada en extensión (4-6 semanas)</li>
        <li><strong>Control de hemartrosis</strong>: Aspiración si tensa (alivia dolor)</li>
        <li><strong>Progresión de carga</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Rótula: Carga parcial a las 3-4 semanas</li>
            <li>Meseta tibial: Carga tardía (8-12 semanas)</li>
          </ul>
        </li>
        <li><strong>Rehabilitación</strong>: Movilización pasiva precoz (evitar rigidez)</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones Absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Diástasis rotuliana mayor a 3mm o escalón articular mayor a 2mm</li>
        <li>Incapacidad para extender activamente la rodilla</li>
        <li>Depresión de meseta tibial mayor a 5mm o inestabilidad en valgo/varo mayor a 10°</li>
        <li>Fracturas abiertas o con compromiso neurovascular</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fracturas rotulianas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Osteosíntesis con tensión</strong>: Cerclaje de alambre + tornillos canulados (técnica de Modified Tension Band)</li>
            <li><strong>Cerclaje circunferencial</strong>: Para fracturas conminutas</li>
            <li><strong>Patelectomía parcial</strong>: En fracturas polares no reconstructibles</li>
          </ul>
        </li>
        <li><strong>Fracturas de meseta tibial</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Osteosíntesis mínimamente invasiva</strong>: Placa LCP vía abordaje posteromedial o lateral</li>
            <li><strong>Fijación externa</strong>: Para fracturas abiertas o tejidos blandos comprometidos</li>
            <li><strong>Artroscopia asistida</strong>: Reducción de fragmentos articulares</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rótula</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Meseta Tibial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-2 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización en extensión, movilización pasiva limitada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización pasiva continua (CPM)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio de flexión progresiva (0-90°), fortalecimiento isométrico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga parcial (20-30% peso corporal)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento concéntrico, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga completa, ejercicios de cadena cinética cerrada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios pliométricos (según consolidación)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Precoces</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Infección (1-5%)</li>
            <li>Trombosis venosa profunda (3-10%)</li>
            <li>Falla de osteosíntesis (5-15% en fracturas conminutas)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Artrosis postraumática (20-40%)</li>
            <li>Rigidez articular (10-25%)</li>
            <li>Síndrome doloroso rotuliano</li>
            <li>Pseudoartrosis (3-5%)</li>
          </ul>
        </li>
        <li><strong>Específicas de rótula</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Migración de alambres (30%)</li>
            <li>Bursitis pretrotuliana</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de rodilla y rótula requieren un enfoque individualizado basado en el patrón de fractura, integridad del mecanismo extensor y congruencia articular. 
        Mientras las fracturas no desplazadas pueden manejarse conservadoramente, las desplazadas requieren reducción anatómica y fijación estable. 
        La rehabilitación temprana es clave para prevenir rigidez articular, especialmente en fracturas intraarticulares de meseta tibial.
      </p>
    </div>
  );
}

export default FxRodilla;