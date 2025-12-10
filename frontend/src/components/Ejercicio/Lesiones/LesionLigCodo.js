

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigCodo from './NavBarLesLigCodo';

function LesionLigCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
    <NavBarLesLigCodo/>
      
      <p className='p13'>Lesiones Ligamentosas de Codo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones ligamentosas del codo representan aproximadamente <strong>15% de todas las lesiones</strong> de esta articulación. 
        Son particularmente comunes en deportes de lanzamiento y en traumatismos por caídas. La estabilidad del codo depende 
        de la interacción entre los ligamentos colaterales y las estructuras óseas.
      </p>

      <p className='p14'>📌 Estructuras Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ligamento colateral medial (LCM)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Haz anterior</strong>: Principal estabilizador a valgo (30-120° flexión)</li>
            <li><strong>Haz posterior</strong>: Resiste valgo en flexión mayor a 60°</li>
            <li><strong>Haz transversal</strong>: Poca función mecánica</li>
          </ul>
        </li>
        <li><strong>Ligamento colateral lateral (LCL)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Complejo formado por 4 fascículos</li>
            <li>Principal estabilizador a varo y rotación</li>
          </ul>
        </li>
        <li><strong>Cápsula articular</strong>: Contribuye a la estabilidad, especialmente en extensión</li>
      </ul>

      <p className='p14'>📌 Clasificación de Lesiones</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estructura Afectada</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>LCM</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Haz anterior del colateral medial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Valgo forzado (lanzadores)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>LCL</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Complejo colateral lateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo o caída en extensión</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Inestabilidad posterolateral</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCL + cápsula posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo combinado de varo y supinación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Desinserción ligamentosa</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inserción humeral o cubital</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma violento (luxaciones)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Traumático agudo</strong>: Caída con brazo extendido y mano apoyada (mecanismo de valgo forzado)</li>
        <li><strong>Microtrauma repetitivo</strong>: Lanzadores (especialmente beisbolistas, jugadores de balonmano)</li>
        <li><strong>Luxación de codo</strong>: Asociada a lesión ligamentosa en mayor a 90% de casos</li>
      </ul>

      <p className='p14'>📌 Diagnóstico Clínico</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba Especial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgo Positivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de valgo a 30° flexión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor/apertura medial mayor a 3mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCL</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de varo + supinación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad posterolateral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad crónica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de mesa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subluxación radial durante flexión</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Estudios de Imagen</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsiones, calcificaciones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad ligamentosa, edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación detallada tejidos blandos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud ligamentosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Tratamiento Conservador</p>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Fase Aguda (0-4 semanas)</p>
          <ul className='p17' style={{ listStyleType: 'disc' }}>
            <li><strong>Reposo</strong>: Inmovilización con férula 90° flexión</li>
            <li><strong>Control inflamación</strong>: Crioterapia, AINEs</li>
            <li><strong>Movilización temprana</strong>: Evitar rigidez</li>
          </ul>
        </div>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Rehabilitación (4-12 semanas)</p>
          <ul className='p17' style={{ listStyleType: 'disc' }}>
            <li><strong>Fortalecimiento</strong>: Flexores/extensores, pronadores/supinadores</li>
            <li><strong>Propiocepción</strong>: Ejercicios con pelota, tabla de equilibrio</li>
            <li><strong>Estiramientos</strong>: Progresivos sin dolor</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📌 Tratamiento Quirúrgico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Indicaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inestabilidad persistente tras tratamiento conservador</li>
            <li>Lesiones completas en deportistas de lanzamiento</li>
            <li>Luxaciones recurrentes</li>
          </ul>
        </li>
        <li><strong>Técnicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Reparación directa LCM/LCL</strong>: Para desinserciones recientes</li>
            <li><strong>Reconstrucción con injerto</strong>: Palmaris longus o semitendinoso</li>
            <li><strong>Procedimiento de Jobe</strong>: Para lanzadores con inestabilidad medial</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📌 Rehabilitación Postquirúrgica</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección injerto, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avanzada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 80%, gestos específicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Ejercicios Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Flexo-extensión con banda elástica</strong>: Fortalecimiento global</li>
        <li><strong>Prono-supinación con peso</strong>: Estabilidad dinámica</li>
        <li><strong>Ejercicios excéntricos</strong>: Para tendinopatías asociadas</li>
        <li><strong>Lanzamientos progresivos</strong>: En deportistas</li>
      </ul>

      <p className='p14'>📌 Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principal complicación postquirúrgica</li>
        <li><strong>Inestabilidad residual</strong>: Por reconstrucción inadecuada</li>
        <li><strong>Neuropatía cubital</strong>: Por compromiso del nervio en lesiones mediales</li>
      </ul>

      <p className='p14'>📌 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento excéntrico</strong>: Músculos flexores y extensores</li>
        <li><strong>Técnica adecuada en lanzamientos</strong>: Evitar valgo excesivo</li>
        <li><strong>Programas de prehabilitación</strong>: Para deportistas de riesgo</li>
      </ul>
    </div>
  );
}

export default LesionLigCodo;