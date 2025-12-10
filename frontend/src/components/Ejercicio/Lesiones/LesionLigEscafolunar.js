

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesionLigEscafolunar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Ligamento Escafolunar de la Muñeca</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión del <strong>Ligamento Escafolunar (LE)</strong> es la inestabilidad carpiana más frecuente, representando el <strong>60% de todas las lesiones ligamentosas</strong> de la muñeca. 
        Es crucial para la estabilidad entre el escafoides y el semilunar, y su disrupción puede llevar a la inestabilidad carpiana progresiva (DISI) y artrosis degenerativa (SLAC wrist).
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Ligamento Escafolunar</strong>: Compuesto por tres porciones:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Porción dorsal</strong>: Más resistente (principal estabilizador)</li>
            <li><strong>Porción volar</strong>: Secundario en estabilidad</li>
            <li><strong>Porción proximal</strong>: Membranosa, vascularizada</li>
          </ul>
        </li>
        <li>
          <strong>Función principal</strong>: Mantener la relación escafolunar durante el movimiento
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Conexión clave en la fila proximal del carpo
        </li>
      </ul>

      <p className='p14'>Clasificación de la Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Esguince)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento sin rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Normal o edema en RMN</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Parcial)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (porción dorsal intacta)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento espacio escafolunar menor a 3mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa de todas las fibras</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espacio escafolunar mayor a 3mm, signo del anillo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>IV (SLAC)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artrosis establecida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artrosis radioscafoidea + mediocarpiana</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Caída sobre mano extendida</strong> (FOOSH): Mecanismo más común (75%)</li>
        <li><strong>Hiperextensión + desviación ulnar</strong>: Carga axial con muñeca extendida</li>
        <li><strong>Trauma directo</strong>: Impacto sobre eminencia tenar</li>
        <li><strong>Microtrauma repetitivo</strong>: En gimnastas y levantadores de peso</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de Watson</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Maniobra de escafoides (dolor + chasquido)</li>
            <li>Sensibilidad 69%, especificidad 64%</li>
          </ul>
        </li>
        <li><strong>Dolor punto escafolunar</strong>: 1cm distal a tubercle escafoides</li>
        <li><strong>Prueba de compresión axial</strong>: Dolor en polo proximal escafoides</li>
        <li><strong>Edema dorsal</strong>: En fase aguda</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espacio escafolunar mayor a 3mm, signo del anillo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea (PA, lateral y oblicuas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad fibras, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard (sensibilidad 90%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artroscopia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización directa lesión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estándar oro diagnóstico + tratamiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación fracturas asociadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I-II (parciales)</li>
        <li>Pacientes de baja demanda</li>
        <li>Lesiones crónicas asintomáticas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Férula braquiopalmar 6-8 semanas</li>
        <li><strong>Control inflamación</strong>: AINEs, crioterapia</li>
        <li><strong>Rehabilitación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva post-inmovilización</li>
            <li>Fortalecimiento musculatura intrínseca</li>
            <li>Propiocepción de muñeca</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado III-IV (completas)</li>
        <li>Inestabilidad dinámica/estática</li>
        <li>Pacientes jóvenes/activos</li>
        <li>Fracaso tratamiento conservador</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación directa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para lesiones agudas (menor a 6 semanas)</li>
            <li>Sutura con anclajes óseos</li>
          </ul>
        </li>
        <li><strong>Reconstrucción ligamentosa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Injerto tendinoso (FCR, ECRL)</li>
            <li>Técnica de Brunelli modificada</li>
          </ul>
        </li>
        <li><strong>Artrodesis limitadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Escafolunar (en casos seleccionados)</li>
            <li>Escafotrapeciotrapezoidea (STT)</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción y fijación percutánea</li>
            <li>Desbridamiento fibras rotas</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización 8-12 semanas (yeso braquiopalmar)</li>
        <li>Control radiográfico seriado</li>
        <li>Rehabilitación progresiva</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (8-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica</strong>: DISI (dorsal intercalated segment instability)</li>
        <li><strong>Artrosis SLAC</strong>: Progresión a degeneración articular</li>
        <li><strong>Pseudoartrosis escafoides</strong>: Por alteración biomecánica</li>
        <li><strong>Rigidez residual</strong>: Pérdida de movilidad</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnica adecuada de caídas</strong>: Evitar apoyo con mano extendida</li>
        <li><strong>Vendajes funcionales</strong>: En deportes de riesgo</li>
        <li><strong>Fortalecimiento muscular</strong>: Músculos estabilizadores de muñeca</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La lesión del ligamento escafolunar requiere diagnóstico precoz para prevenir la inestabilidad carpiana progresiva. 
        Mientras las lesiones parciales pueden manejarse conservadoramente, las roturas completas en pacientes activos 
        generalmente requieren reparación quirúrgica. El seguimiento a largo plazo es esencial para detectar artrosis secundaria.
      </p>
    </div>
  );
}

export default LesionLigEscafolunar;