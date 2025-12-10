

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigTob from './NavBarLesLigTob';
 
function LesionLigTobillo() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarLesLigTob/>
       
      <p className='p13'>Lesiones de Ligamentos del Tobillo</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Los esguinces de tobillo representan el <strong>80% de todas las lesiones deportivas</strong> en esta articulación. 
        El complejo ligamentoso lateral es el más frecuentemente afectado (85% de casos), especialmente en deportes 
        con saltos y cambios de dirección.
      </p>

      <p className='p14'>📌 Ligamentos Principales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ligamento peroneoastragalino anterior (LPAA)</strong> - El más lesionado</li>
        <li><strong>Ligamento peroneocalcáneo (LPC)</strong></li>
        <li><strong>Ligamento peroneoastragalino posterior (LPAP)</strong></li>
        <li><strong>Ligamento deltoideo (medial)</strong> - Lesiones menos frecuentes</li>
      </ul>

      <p className='p14'>📌 Clasificación de Esguinces</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '4rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento leve</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor leve, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, inflamación, leve inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor intenso, hematoma, inestabilidad marcada</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Tratamiento Inmediato</p>
      <p className='p16'>Protocolo POLICE (primeras 48-72h):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>P</strong>rotection: Proteger la zona lesionada</li>
        <li><strong>O</strong>ptimal Loading: Carga progresiva según tolerancia</li>
        <li><strong>I</strong>ce: Crioterapia 15-20 min cada 2-3h</li>
        <li><strong>C</strong>ompression: Vendaje elástico</li>
        <li><strong>E</strong>levation: Elevar el pie</li>
      </ul>

      <p className='p14'>📌 Recuperación</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Grado I:</strong> 1-2 semanas</li>
        <li><strong>Grado II:</strong> 3-6 semanas</li>
        <li><strong>Grado III:</strong> 6-12 semanas</li>
      </ul>

      <p className='p14'>📌 Ejercicios de Rehabilitación</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Movimientos alfabeto con el pie (desde fase aguda)</li>
        <li>Ejercicios con banda elástica (flexión dorsal, eversión)</li>
        <li>Equilibrio sobre una pierna (progresar a superficies inestables)</li>
      </ul>

      <p className='p14'>📌 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Ejercicios de propiocepción 2-3 veces por semana</li>
        <li>Calentamiento adecuado antes de actividad física</li>
        <li>Calzado adecuado para cada actividad</li>
      </ul>
    </div>
  );
}

export default LesionLigTobillo;