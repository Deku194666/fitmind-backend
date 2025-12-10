

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLux from './NavBarLesLux';

function Luxaciones() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="ecnt-detail">
        
        <NavBarLesLux/>

      <p className='p13'>Luxaciones Articulares Comunes</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'> 
        Las <strong> Luxaciones Articulares </strong> representan el <strong>5-10% de todas las lesiones articulares</strong>, siendo emergencias ortopédicas que requieren reducción inmediata. 
        Ocurren cuando hay pérdida completa de la congruencia articular, a diferencia de las subluxaciones donde el contacto parcial se mantiene. 
        Las complicaciones neurovasculares pueden ser devastadoras si no se manejan adecuadamente.
      </p>
        
      <p className='p16'>📌 Luxación Glenohumeral (Hombro)</p>
      <p className='p150'>
        Representa el <strong>50% de todas las luxaciones</strong>, con una incidencia de 23.9 por 100,000 personas/año. 
        La dirección anterior es la más común (95% de casos), seguida por la posterior (2-4%) e inferior (0.5%).
      </p>

      <p className='p150'><strong>Clasificación:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tipo I (Traumática aguda):</strong> Primera vez, sin daño estructural mayor</li>
        <li><strong>Tipo II (Recidivante):</strong> ≥2 episodios con lesión Bankart/Hill-Sachs</li>
        <li><strong>Tipo III (Habituál):</strong> Luxación con movimientos cotidianos</li>
        <li><strong>Tipo IV (Voluntaria):</strong> Controlada por el paciente (asociada a psicopatología)</li>
      </ul>

      <p className='p16'>📌 Luxación de Codo</p>
      <p className='p150'>
        Segunda luxación más común en adultos (20% del total), con mecanismo típico de caída sobre mano extendida. 
        La <strong>luxación posterior</strong> representa el 90% de casos y se asocia a fracturas coronoides en 10-15%.
      </p>

      <p className='p150'><strong>Complicaciones inmediatas:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lesión de arteria braquial</strong> (5-13% de casos)</li>
        <li><strong>Atrapamiento del nervio cubital</strong> (8-16%)</li>
        <li><strong>Inestabilidad crónica</strong> si no se repara el LCL</li>
      </ul>

      <p className='p16'>📌 Luxación de Cadera</p>
      <p className='p150'>
        Emergencia ortopédica mayor (solo el 5% de todas las luxaciones) con alto riesgo de <strong>necrosis avascular</strong> (10-20%). 
        El 90% son posteriores (por impacto de rodilla contra tablero en accidentes), con signo patognomónico de <strong>pierna acortada + rotada internamente</strong>.
      </p>

      <p className='p150'><strong>Clasificación de Thompson-Epstein (Posteriores):</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tipo I:</strong> Sin fractura o fragmento pequeño</li>
        <li><strong>Tipo II:</strong> Fractura de borde posterior mayor a 25%</li>
        <li><strong>Tipo III:</strong> Fractura conminuta de borde posterior</li>
        <li><strong>Tipo IV:</strong> Con fractura del acetábulo</li>
        <li><strong>Tipo V:</strong> Con fractura de cabeza femoral</li>
      </ul>

      <p className='p14'>📌 Técnicas de Reducción</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Articulación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Método</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Éxito Inicial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hombro (Anterior)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Técnica de Stimson (tracto + rotación externa)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70-80%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Codo (Posterior)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracto + flexión suave</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>85-90%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cadera (Posterior)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Técnica de Allis (flexión + rotación externa)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60-70% (requiere anestesia)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rótula (Lateral)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extensión progresiva de rodilla</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>95%</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Manejo Post-Reducción</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Articulación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rehabilitación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hombro</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cabestrillo 3-4 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios pendulares → rotadores</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Codo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Férula 90° 2-3 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM progresivo evitando extensión completa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cadera</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracto cutáneo 2-3 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga progresiva a las 6-8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rótula</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rodillera 4-6 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento VMO + propiocepción</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones Agudas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lesión neurovascular:</strong> Axilar en hombro (10-25%), cubital en codo (15%)</li>
        <li><strong>Fractura asociada:</strong> Hill-Sachs (40-90% hombro), coronoides (codo)</li>
        <li><strong>Atrapamiento tisular:</strong> Cápsula, tendones (obstaculiza reducción)</li>
      </ul>

      <p className='p14'>⚠️ Complicaciones Tardías</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica:</strong> 50-90% en hombro menor a 25 años</li>
        <li><strong>Artrosis postraumática:</strong> 15-20% en luxaciones de cadera</li>
        <li><strong>Rigidez articular:</strong> Principalmente en codo (30-40%)</li>
        <li><strong>Necrosis avascular:</strong> Cabeza femoral (10-20% si reducción mayor a 6h)</li>
      </ul>

      <p className='p14'>🛡️ Prevención de Recurrencias</p>
      <p className='p16'>🟢 Para Hombro:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rehabilitación enfocada:</strong> Fortalecimiento rotadores + escapular</li>
        <li><strong>Cirugía preventiva:</strong> Bankart artroscópico en menor a 20 años con lesión</li>
      </ul>

      <p className='p16'>🟢 Para Rótula:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Órtesis estabilizadora:</strong> Uso durante actividades deportivas</li>
        <li><strong>Realineamiento:</strong> MPFL reconstruction en inestabilidad crónica</li>
      </ul>

      <p className='p14'>📌 Conclusión</p>
      <p className='p150'>
        Las luxaciones articulares requieren <strong>manejo inmediato</strong> con reducción suave y evaluación neurovascular completa. 
        Mientras algunas (como la rótula) tienen excelente pronóstico, otras (cadera/hombro) conllevan alto riesgo de complicaciones a largo plazo. 
        La rehabilitación estructurada y en casos seleccionados la intervención quirúrgica temprana son clave para prevenir recurrencias y daño articular permanente.
      </p>
    </div>
  );
}

export default Luxaciones;