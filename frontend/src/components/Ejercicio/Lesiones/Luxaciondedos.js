

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Luxaciondedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxación de Dedos (Articulaciones Interfalángicas y Metacarpofalángicas)</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La luxación de dedos es una <strong>pérdida completa de la congruencia articular</strong> entre las falanges o entre metacarpianos y falanges, 
        generalmente por trauma directo o hiperextensión. Representa el <strong>15-20% de las lesiones traumáticas de la mano</strong>, 
        siendo más frecuentes en las articulaciones interfalángicas proximales (IFP) y en deportistas.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Estabilizadores articulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Placa volar</strong>: Principal restrictor de hiperextensión</li>
            <li><strong>Ligamentos colaterales</strong>: Previenen desviación lateral</li>
            <li><strong>Fibras check-rein</strong>: Refuerzan placa volar proximalmente</li>
          </ul>
        </li>
        <li>
          <strong>Articulaciones afectadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>IFP (75% de casos)</li>
            <li>Metacarpofalángica (MCF) (20%)</li>
            <li>Interfalángica distal (IFD) (5%)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Clasificación de Luxaciones 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dirección</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Dorsal (90%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Falange desplazada dorsalmente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperextensión + fuerza axial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Volar (5%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Falange desplazada volarmente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flexión forzada + rotación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Lateral (5%)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desviación radial/cubital</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma lateral directo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Deportes de contacto</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Baloncesto (atrapar mal un balón)</li>
            <li>Fútbol americano (choques)</li>
          </ul>
        </li>
        <li><strong>Caídas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Impacto con el dedo en extensión</li>
          </ul>
        </li>
        <li><strong>Trauma laboral</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Atrapamiento en maquinaria</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Deformidad visible</strong>: Acortamiento, angulación</li>
        <li><strong>Dolor intenso</strong>: A nivel articular</li>
        <li><strong>Impotencia funcional</strong></li>
        <li><strong>Edema y equimosis</strong></li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pérdida congruencia articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Identificar fracturas asociadas (30-50%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de placa volar/ligamentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Solo en casos complejos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Luxaciones simples reducibles</li>
        <li>Sin fracturas asociadas</li>
        <li>Sin atrapamiento tendinoso/placa volar</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reducción cerrada</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tirar en eje + presión sobre falange desplazada</li>
            <li>Anestesia local (bloqueo digital) previa</li>
          </ul>
        </li>
        <li><strong>Inmovilización</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Férula en ligera flexión (20-30°)</li>
            <li>3 semanas para IFP, 2 semanas para MCF</li>
          </ul>
        </li>
        <li><strong>Rehabilitación precoz</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización activa protegida a los 7 días</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxación irreducible</strong> (placa volar/tendón interpuesto)</li>
        <li>Fractura-luxación con mayor a 25% superficie articular</li>
        <li>Inestabilidad post-reducción</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reducción abierta</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Vía volar (para atrapamiento de placa volar)</li>
            <li>Liberación de estructuras interpuestas</li>
          </ul>
        </li>
        <li><strong>Reparación ligamentosa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para luxaciones MCF con rotura colateral completa</li>
          </ul>
        </li>
        <li><strong>Fijación de fracturas asociadas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Mini-tornillos o K-wires</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: 2-3 semanas</li>
        <li><strong>Movilización protegida</strong>: Desde 1ª semana</li>
        <li><strong>Rehabilitación intensiva</strong>: Para evitar rigidez</li>
      </ul>

      <p className='p14'>Rehabilitación �️‍♂️</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retiro inmovilización</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (mayor a 6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta normalidad funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principal complicación (30%)</li>
        <li><strong>Inestabilidad crónica</strong>: Por lesión ligamentosa no tratada</li>
        <li><strong>Artrosis postraumática</strong>: A largo plazo</li>
        <li><strong>Deformidad en boutonnière/swan neck</strong>: Por desbalance ligamentoso</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Vendaje funcional</strong> en deportistas</li>
        <li><strong>Técnica adecuada</strong> en recepción de balones</li>
        <li><strong>Equipo de protección</strong> en trabajos de riesgo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las luxaciones de dedos requieren diagnóstico y tratamiento precisos para prevenir secuelas funcionales. 
        Mientras las luxaciones simples pueden manejarse con reducción cerrada e inmovilización breve, 
        las complejas con interposición de estructuras o fracturas asociadas necesitan abordaje quirúrgico. 
        La rehabilitación precoz es clave para recuperar la movilidad completa y evitar la rigidez, 
        principal complicación de estas lesiones.
      </p>
    </div>
  );
}

export default Luxaciondedos;