

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesOseas from './NavBarLesOseas';
import NavBarLesOseas2 from './NavBarLesOseas2';
 
function LesionesOseas() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarLesOseas/>
        <NavBarLesOseas2/>

  
      <p className='p13'>Lesiones Óseas: Fracturas</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'> 
        Las fracturas óseas afectan a <strong>1 de cada 2 personas</strong> a lo largo de su vida, con mayor incidencia en extremidades superiores. 
        Representan una causa importante de morbilidad y discapacidad temporal. El manejo adecuado es esencial para prevenir complicaciones 
        como pseudoartrosis o deformidades residuales.
      </p>
        
      <p className='p16'>📌 Fracturas Comunes</p>
      <p className='p150'>
        Las fracturas más frecuentes varían según la edad y mecanismo de lesión:
      </p>

      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Radio distal (fractura de Colles):</strong> 18% de todas las fracturas</li>
        <li><strong>Clavícula:</strong> 5% de todas las fracturas (común en niños y deportistas)</li>
        <li><strong>Cadera:</strong> 15% en mayores de 65 años (fractura por fragilidad)</li>
        <li><strong>Tibia:</strong> Frecuente en accidentes de tráfico y deportes</li>
        <li><strong>Húmero proximal:</strong> 5% de todas las fracturas (común en osteoporosis)</li>
      </ul>

      <p className='p16'>📌 Clasificación de Fracturas</p>
      <p className='p150'> <strong>Por integridad de la piel:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Cerradas:</strong> Piel intacta (80% de casos)</li>
        <li><strong>Abiertas (Gustilo-Anderson):</strong> Comunicación con exterior (I-IIIB)</li>
      </ul>

      <p className='p150'> <strong>Por patrón de fractura:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Transversas:</strong> Línea perpendicular al eje óseo</li>
        <li><strong>Oblicuas:</strong> Línea diagonal al eje óseo</li>
        <li><strong>Espiroideas:</strong> Línea en espiral (torsión)</li>
        <li><strong>Conminutas:</strong> Múltiples fragmentos</li>
        <li><strong>En tallo verde:</strong> Incompletas (típicas pediátricas)</li>
      </ul>

      <p className='p150'> <strong>Por desplazamiento:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>No desplazadas:</strong> Fragmentos mantienen posición anatómica</li>
        <li><strong>Desplazadas:</strong> Fragmentos pierden alineación</li>
        <li><strong>Impactadas:</strong> Fragmentos comprimidos entre sí</li>
        <li><strong>Conminutas:</strong> Múltiples fragmentos pequeños</li>
      </ul>

      <p className='p14'>📌 Técnicas de Diagnóstico por Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Modalidad</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Aplicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/examenes/radiografia"> Radiografia</Link>   </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Línea de fractura, desplazamiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tc"> Tomografia Computarizada </Link>    </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación 3D, fragmentos ocultos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm"> Resonancia Nuclear Magnetica </Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas ocultas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, lesiones asociadas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Manejo por Tipo de Fractura</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tratamiento</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tiempo Consolidación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No desplazadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reducción + fijación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8-12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abiertas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desbridamiento + fijación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12-16 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>⚠️ Complicaciones</p>
      <p className='p16'>🟠 Inmediatas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome compartimental:</strong> Urgencia quirúrgica</li>
        <li><strong>Lesiones vasculares:</strong> Isquemia distal</li>
        <li><strong>Lesiones nerviosas:</strong> Parálisis/perdida sensibilidad</li>
      </ul>

      <p className='p16'>🟠 Tardías:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pseudoartrosis:</strong> Falta de consolidación (6-12 meses)</li>
        <li><strong>Malunión:</strong> Consolidación en mala posición</li>
        <li><strong>Artrosis postraumática:</strong> Daño articular asociado</li>
      </ul>

      <p className='p14'>🛡️ Prevención</p>
      <p className='p16'>🟢 General:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protección ósea:</strong> Calcio 1000-1200mg/día + Vit D</li>
        <li><strong>Prevención caídas:</strong> Ejercicio de equilibrio en mayores</li>
        <li><strong>Equipo protector:</strong> Deportes de contacto/riesgo</li>
      </ul>

      <p className='p16'>🟢 Para osteoporosis:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Densitometría ósea:</strong> Screening mayor a 65 años</li>
        <li><strong>Bifosfonatos:</strong> Reducen fracturas en 40-70%</li>
        <li><strong>Ejercicio con peso:</strong> Estimula formación ósea</li>
      </ul>

      <p className='p14'>📌 Conclusión</p>
      <p className='p150'>
        El manejo de fracturas requiere <strong>evaluación integral</strong> considerando tipo de fractura, mecanismo de lesión y características del paciente. 
        Mientras las fracturas simples pueden manejarse conservadoramente, las complejas requieren tratamiento quirúrgico especializado. 
        La prevención, especialmente en pacientes con osteoporosis, es clave para reducir la incidencia de fracturas por fragilidad.
      </p>
    </div>
  );
}

export default LesionesOseas;