

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosNeuromusculares() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Enfermedades Neuromusculares</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Enfermedades Neuromusculares</strong> comprenden un grupo de trastornos que afectan al nervio periférico, la unión neuromuscular o el músculo. Incluyen afecciones como miastenia gravis, distrofias musculares, esclerosis lateral amiotrófica (ELA), polineuropatías y miopatías inflamatorias.
      </p>

      <p className="p14">🎯 Objetivos del Tratamiento</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Mejorar la fuerza y la función muscular.</li>
        <li>Reducir la progresión de la enfermedad.</li>
        <li>Minimizar las crisis o exacerbaciones.</li>
        <li>Optimizar la calidad de vida.</li>
      </ul>

      <p className="p14">💊 Fármacos por Patología</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Patología</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tratamiento Farmacológico</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo / Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Miastenia gravis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Piridostigmina, Corticoides, Azatioprina, Rituximab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores de acetilcolinesterasa y moduladores inmunológicos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Esclerosis Lateral Amiotrófica (ELA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Riluzol, Edaravona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ralentizan la progresión; neuroprotectores</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Distrofias musculares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prednisona, Deflazacort</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mejoran fuerza en distrofia muscular de Duchenne</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Polineuropatías inflamatorias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmunoglobulina IV, Corticoides, Ciclofosfamida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmunomodulación en Guillain-Barré, CIDP, etc.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Miopatías inflamatorias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corticoides, Metotrexato, Azatioprina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supresión inmunológica en dermatomiositis/polimiositis</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Consideraciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Requieren enfoque multidisciplinario (neuro, rehabilitación, nutrición).</li>
        <li>Evaluar riesgo de inmunosupresión y efectos adversos a largo plazo.</li>
        <li>Monitoreo clínico y funcional periódico es clave.</li>
        <li>Apoyo psicológico y familiar en enfermedades progresivas.</li>
      </ul>

      <p className="p14">📚 Recomendaciones Generales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Individualizar el tratamiento según la enfermedad y estado funcional.</li>
        <li>Reforzar adherencia y educación del paciente y cuidadores.</li>
        <li>Complementar con fisioterapia, ortesis o ayudas técnicas cuando sea necesario.</li>
      </ul>
    </div>
  );
}

export default FarmacosNeuromusculares;
