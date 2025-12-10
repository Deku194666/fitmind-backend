

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Luxacioncodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxación de Codo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La luxación de codo es la <strong>segunda luxación más común</strong> en adultos (después del hombro), representando el 10-25% de todas las luxaciones. El mecanismo típico es una caída sobre la mano extendida con el codo en extensión (FOOSH injury). Las luxaciones posteriores representan el <strong>90% de los casos</strong>, siendo más frecuentes en varones jóvenes (15-30 años).
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estabilizadores primarios</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamento colateral medial</strong> (haz anterior)</li>
            <li><strong>Complejo ligamentoso lateral</strong> (LCL)</li>
            <li><strong>Proceso coronoides</strong> (≥50% de altura crítica)</li>
          </ul>
        </li>
        <li>
          <strong>Estabilizadores secundarios</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Cápsula articular</li>
            <li>Músculos flexores y extensores</li>
          </ul>
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nervio cubital (15-20% lesión en luxaciones completas)</li>
            <li>Arteria braquial (2-5% compromiso vascular)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Clasificación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dirección</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Posterior</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>90%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo FOOSH, asociada a fracturas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Anterior</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo, alta tasa de lesión nerviosa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Lateral/Medial</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma de alta energía</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Divergente</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>&lt;1%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad grave, lesión ligamentosa completa</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Mecanismo indirecto</strong> (90%):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano extendida (FOOSH) + supinación</li>
            <li>Triada terrible (luxación + fractura coronoides + cabeza radial)</li>
          </ul>
        </li>
        <li><strong>Trauma directo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Golpe posterior en codo flexionado (luxación anterior)</li>
            <li>Impactos laterales (luxaciones mediales/laterales)</li>
          </ul>
        </li>
        <li><strong>Factores predisponentes</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Hiperlaxitud ligamentosa</li>
            <li>Malformaciones congénitas</li>
            <li>Historia previa de luxación</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inspección</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deformidad característica (prominencia olecraniana posterior)</li>
            <li>Edema y equimosis severos</li>
          </ul>
        </li>
        <li><strong>Evaluación neurovascular</strong> (crítica):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Pulso radial y cubital</li>
            <li>Función nervio mediano, cubital y radial</li>
          </ul>
        </li>
        <li><strong>Movilidad</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Limitación dolorosa de arco de movimiento</li>
            <li>Inestabilidad evidente en lesiones completas</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones AP, lateral y oblicuas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc">TC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas osteocondrales, fragmentos intraarticulares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación prequirúrgica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentosas, daño cartílago</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos complejos o crónicos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arteriografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso vascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sospecha de lesión arterial</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Manejo Inicial</p>
      <p className='p16'>Reducción Cerrada (Urgente):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tracto axial + presión sobre olécranon</li>
            <li>Flexión suave tras desimpactar</li>
            <li>Sedación consciente recomendada</li>
          </ul>
        </li>
        <li><strong>Post-reducción</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inmovilización en flexión 90° con férula</li>
            <li>Nueva evaluación neurovascular</li>
            <li>Control radiográfico post-reducción</li>
          </ul>
        </li>
        <li><strong>Indicaciones quirúrgicas inmediatas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inestabilidad post-reducción</li>
            <li>Fractura intraarticular desplazada</li>
            <li>Compromiso vascular</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inestabilidad persistente post-reducción</li>
        <li>Fracturas asociadas (coronoides, cabeza radial)</li>
        <li>Lesiones ligamentosas completas (divergentes)</li>
        <li>Luxaciones abiertas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fijación fracturas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteosíntesis coronoides (tornillos o suturas)</li>
            <li>Artroplastia vs. osteosíntesis cabeza radial</li>
          </ul>
        </li>
        <li><strong>Reparación ligamentosa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reinserción LCL con anclajes óseos</li>
            <li>Reparación LCM en inestabilidad grave</li>
          </ul>
        </li>
        <li><strong>Técnicas especiales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fijador externo dinámico (casos complejos)</li>
            <li>Reconstrucción ligamentosa con injerto</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔄 Rehabilitación</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-3 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección tejidos reparados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (3-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Fortalecimiento (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar 80% fuerza</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Avanzada (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad recurrente</strong> (5-15%)</li>
        <li><strong>Rigidez articular</strong> (20-30%)</li>
        <li><strong>Heterotopia ósea</strong> (5-10%)</li>
        <li><strong>Artrosis postraumática</strong> (tardía)</li>
        <li><strong>Neuropatía cubital tardía</strong></li>
      </ul>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxaciones simples</strong>: 85-90% buenos resultados con tratamiento conservador</li>
        <li><strong>Luxaciones complejas</strong>: 60-75% resultados satisfactorios</li>
        <li><strong>Factores pronósticos negativos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fracturas asociadas</li>
            <li>Retraso en reducción mayor a 3 horas</li>
            <li>Inestabilidad persistente</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La luxación de codo requiere manejo inmediato con reducción cerrada y evaluación cuidadosa de lesiones asociadas. El tratamiento debe individualizarse según el tipo de luxación y las estructuras afectadas. La rehabilitación temprana controlada es clave para prevenir rigidez, mientras que los casos complejos pueden requerir intervención quirúrgica. El seguimiento a largo plazo es esencial para detectar complicaciones tardías como la artrosis.
      </p>
    </div>
  );
}

export default Luxacioncodo;