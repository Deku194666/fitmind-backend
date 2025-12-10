

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InestPLCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Inestabilidad Posterolateral de Codo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La inestabilidad posterolateral (IPL) del codo es un patrón complejo de inestabilidad rotatoria causado por fallo del <strong>complejo ligamentoso lateral</strong> (principalmente LCL) y la cápsula posterolateral. Representa el <strong>80% de las inestabilidades crónicas</strong> del codo y frecuentemente se diagnostica erróneamente como "epicondilitis rebelde". El círculo de inestabilidad de O'Driscoll explica su progresión en 3 etapas.
      </p>

      <p className='p14'>🦴 Anatomía Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estabilizadores estáticos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamento colateral lateral</strong> (principal restricción)</li>
            <li><strong>Ligamento anular</strong> (estabilidad radial)</li>
            <li><strong>Cápsula posterolateral</strong></li>
          </ul>
        </li>
        <li>
          <strong>Estabilizadores dinámicos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Músculo extensor común</li>
            <li>Supinador</li>
            <li>Ancóneo</li>
          </ul>
        </li>
        <li>
          <strong>Biomecánica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Máxima inestabilidad a 40° de flexión</li>
            <li>"Screw-home mechanism" en extensión completa</li>
            <li>Secuencia de fallo: LCL → cápsula → LCM</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📊 Estadificación de O'Driscoll</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estructuras Afectadas</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCL solamente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subluxación transitoria</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>2</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCL + cápsula posterolateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subluxación incompleta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>3A</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>+ LCM posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación completa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>3B</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>+ LCM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad multidireccional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🤕 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma agudo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano extendida + supinación (mecanismo clásico)</li>
            <li>Luxaciones posterolaterales (90% se asocian a IPL)</li>
          </ul>
        </li>
        <li><strong>Microtrauma repetitivo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deportes con carga axial (gimnasia artística)</li>
            <li>Lanzadores con mala técnica</li>
          </ul>
        </li>
        <li><strong>Iatrogénica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Liberación excesiva de epicóndilo lateral</li>
            <li>Artroscopia con resección cápsula posterolateral</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🩺 Diagnóstico</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de pivot shift</strong> (sensibilidad 85%):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Valgo + supinación + carga axial durante flexión</li>
            <li>Chasquido reducción a 40° flexión</li>
          </ul>
        </li>
        <li><strong>Prueba de silla</strong> (sensibilidad 78%)</li>
        <li><strong>Prueba de mesa</strong> (apoyo sobre mano extendida)</li>
        <li><strong>Test de varo recurvatum</strong></li>
        <li><strong>Prueba de la bandeja posterolateral</strong></li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subluxación radial, fracturas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Vistas estrés en varo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad LCL, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación completa ligamentos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fluoroscopia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subluxación dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio intraoperatorio</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-TC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones osteocondrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🏥 Tratamiento Conservador</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fase aguda post-luxación reducida</li>
        <li>IPL grado 1 sin inestabilidad funcional</li>
        <li>Pacientes no candidatos a cirugía</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-3 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inmovilización en flexión 90° + pronación</li>
            <li>Evitar supinación y carga axial</li>
          </ul>
        </li>
        <li><strong>Fase subaguda (3-6 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva (evitar varo)</li>
            <li>Fortalecimiento isométrico extensores</li>
          </ul>
        </li>
        <li><strong>Fase avanzada (6-12 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios propioceptivos</li>
            <li>Reentrenamiento neuromuscular</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>🔪 Tratamiento Quirúrgico</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>IPL sintomática grado 2-3</li>
        <li>Fracaso tratamiento conservador</li>
        <li>Inestabilidad recurrente</li>
        <li>Lesiones asociadas (fractura cabeza radial)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación aguda</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Indicada dentro de 3 semanas post-trauma</li>
            <li>Reinserción con anclajes óseos</li>
          </ul>
        </li>
        <li><strong>Reconstrucción ligamentosa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Técnica de Nestor (reconstrucción anatómica LCL)</li>
            <li>Técnica de triangulación (3 puntos fijos)</li>
            <li>Injerto de tendón palmaris o semitendinoso</li>
          </ul>
        </li>
        <li><strong>Técnicas asociadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteotomía correctiva en malalineamiento</li>
            <li>Artroplastia radial si cabeza radial fracturada</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización 4 semanas en flexión 90° + pronación</li>
        <li>Movilización progresiva desde 4ª semana</li>
        <li>Evitar supinación completa hasta 8ª semana</li>
        <li>Fortalecimiento excéntrico desde 10ª semana</li>
        <li>Retorno deportivo a los 9-12 meses</li>
      </ul>

      <p className='p14'>⚠️ Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad residual</strong> (10-20%)</li>
        <li><strong>Rigidez articular</strong> (15%)</li>
        <li><strong>Neuropatía radial</strong> (5-8%)</li>
        <li><strong>Artrosis posterolateral</strong> (tardía)</li>
        <li><strong>Heterotopia ósea</strong></li>
      </ul>

      <p className='p14'>📈 Pronóstico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación aguda</strong>: 85-90% buenos resultados</li>
        <li><strong>Reconstrucción crónica</strong>: 75-85% éxito</li>
        <li><strong>Factores negativos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Retraso diagnóstico mayor a 6 meses</li>
            <li>Artrosis establecida</li>
            <li>Malalineamiento no corregido</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La inestabilidad posterolateral del codo requiere alto índice de sospecha y evaluación biomecánica completa. El tratamiento debe individualizarse según el estadio de inestabilidad y las lesiones asociadas. Las reconstrucciones anatómicas del LCL combinadas con programas de rehabilitación específicos ofrecen los mejores resultados funcionales. El diagnóstico precoz es crucial para evitar la progresión a artrosis degenerativa.
      </p>
    </div>
  );
}

export default InestPLCodo;