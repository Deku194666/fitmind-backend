

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesArt from './NavBarLesArt';

function LesionesArticulares() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarLesArt/>
  
      <p className='p13'> Lesiones Articulares Comunes </p>
      <p className='p14'> 📌 Introducción</p>
      <p className='p150'> 
        Las lesiones articulares afectan al <strong>20-30% de la población adulta</strong> y representan una causa mayor de discapacidad.
        Involucran daño a las estructuras articulares (cartílago, membrana sinovial, cápsula) y pueden ser traumáticas o degenerativas. 
        El diagnóstico preciso es esencial para prevenir daño articular irreversible.
      </p>
        
      <p className='p16'> 📌 Artrosis (Osteoartritis)</p>
      <p className='p150'>
        Afecta al <strong>40% de mayores de 70 años</strong>, siendo la rodilla la articulación más común. Caracterizada por pérdida 
        progresiva de cartílago articular con formación de osteofitos. Factores de riesgo: edad, obesidad, trauma previo.
      </p>

      <p className='p150'> <strong>Clasificación Kellgren-Lawrence:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Grado 1:</strong> Dudoso estrechamiento articular, osteofitos incipientes</li>
        <li><strong>Grado 2:</strong> Osteofitos definidos, posible estrechamiento</li>
        <li><strong>Grado 3:</strong> Estrechamiento moderado, esclerosis ósea</li>
        <li><strong>Grado 4:</strong> Estrechamiento marcado con deformidad ósea</li>
      </ul>

      <p className='p16'> 📌 Artritis Reumatoide</p>
      <p className='p150'>
        Enfermedad autoinmune que afecta al <strong>1% de la población</strong>, con predominio en mujeres (3:1). Caracterizada por sinovitis proliferativa que lleva a destrucción articular. Articulaciones más afectadas: MCF, IFP, muñecas.
      </p>

      <p className='p150'> <strong>Criterios diagnósticos (ACR/EULAR 2010):</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artritis clínica en ≥1 articulación</strong></li>
        <li><strong>Serología (FR, anti-CCP)</strong></li>
        <li><strong>Reactantes de fase aguda elevados</strong></li>
        <li><strong>Síntomas mayor a 6 semanas</strong></li>
      </ul>

      <p className='p16'> 📌 Gota Aguda</p>
      <p className='p150'>
        Afecta al <strong>1-2% de adultos</strong>, con predominio masculino (9:1). Cristales de urato monosódico en articulaciones causan inflamación aguda. Articulación más común: primera metatarsofalángica (75% de casos iniciales).
      </p>

      <p className='p150'> <strong>Diagnóstico:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artrocentesis:</strong> Cristales negativos birrefringentes</li>
        <li><strong>Hiperuricemia:</strong> Aunque 30% tienen uricemia normal en crisis</li>
        <li><strong>Hallazgos clínicos:</strong> Dolor máximo en 24h, eritema, calor local</li>
      </ul>

 

      <p className='p14'> 📌 Técnicas de Diagnóstico por Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Modalidad </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Hallazgos Clave </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Radiografía </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación inicial </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteofitos, estrechamiento articular </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RMN </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación de tejidos blandos </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Edema óseo, lesiones cartílago </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ecografía </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación dinámica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sinovitis, derrame articular </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Manejo por Tipo de Lesión</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tratamiento </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Eficacia </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Artrosis temprana </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ejercicio + pérdida peso </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 60% mejoría síntomas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Artritis reumatoide </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> FAME + biológicos </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 70-80% respuesta </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Gota aguda </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> AINEs/colchicina </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 90% resolución en 7 días </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención y Autocuidado</p>
      <p className='p16'> 🟢 Para Artrosis:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Control de peso:</strong> Cada 5kg reduce riesgo en 50%</li>
        <li><strong>Ejercicio de bajo impacto:</strong> Natación, ciclismo</li>
        <li><strong>Fortalecimiento muscular:</strong> Reduce carga articular</li>
      </ul>

      <p className='p16'> 🟢 Para Artritis Inflamatoria:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Diagnóstico precoz:</strong> Ventana de oportunidad menor a 6 meses</li>
        <li><strong>Terapia ocupacional:</strong> Protección articular</li>
        <li><strong>Ejercicio adaptado:</strong> Mantener movilidad</li>
      </ul>

      <p className='p16'> 🟢 Para Enfermedad por Cristales:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hidratación adecuada:</strong> mayor a 2L agua/día</li>
        <li><strong>Dieta baja en purinas:</strong> Limitar carnes rojas, mariscos</li>
        <li><strong>Control metabólico:</strong> Uricemia mennor a 6 mg/dL</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las lesiones articulares requieren <strong>un enfoque multidisciplinario</strong> que combine manejo farmacológico, terapia física y modificaciones de estilo de vida. Mientras condiciones como la artrosis requieren principalmente manejo sintomático, las artritis inflamatorias necesitan tratamiento precoz con fármacos modificadores de enfermedad. El entendimiento de los mecanismos fisiopatológicos subyacentes es clave para seleccionar la estrategia terapéutica óptima en cada caso.
      </p>
    </div>
  );
}

export default LesionesArticulares;