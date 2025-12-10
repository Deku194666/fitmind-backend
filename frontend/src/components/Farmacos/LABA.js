

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LABA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Agonistas β2 de Acción Prolongada (LABA)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>LABA</strong> son broncodilatadores de acción prolongada utilizados como tratamiento de mantenimiento en 
        enfermedades respiratorias como <Link to="/ecnt/asma">Asma</Link> y <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>.
        Actúan estimulando los receptores β2 del músculo liso bronquial, produciendo una broncodilatación sostenida por 12 a 24 horas.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Activan de forma selectiva los receptores β2 adrenérgicos en el árbol bronquial.</li>
        <li>Inducen relajación del músculo liso bronquial.</li>
        <li>Reducen la hiperreactividad bronquial.</li>
        <li>No tienen efectos antiinflamatorios significativos.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente (en combinación con corticosteroides inhalados)</li>
        <li>EPOC moderada a severa</li>
        <li>Broncoespasmo recurrente nocturno</li>
        <li>Prevención de síntomas respiratorios persistentes</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Salmeterol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50 mcg cada 12 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≈ 12 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Formoterol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12-24 mcg cada 12 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≈ 12 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indacaterol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>150-300 mcg cada 24 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≈ 24 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Taquicardia</strong></li>
        <li><strong>Temblor</strong></li>
        <li><strong>Palpitaciones</strong></li>
        <li><strong>Hipokalemia</strong></li>
        <li><strong>Insomnio</strong></li>
        <li><strong>Dolor de cabeza</strong></li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monoterapia en el asma (riesgo de exacerbaciones graves)</li>
        <li>Hipersensibilidad al principio activo</li>
        <li>Precaución en pacientes con arritmias o enfermedades cardiovasculares</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con β-bloqueadores: antagonismo farmacológico</li>
        <li>Con otros simpaticomiméticos: riesgo de efectos cardiovasculares</li>
        <li>Con diuréticos y corticosteroides: mayor riesgo de hipokalemia</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Usar siempre en combinación con corticosteroides inhalados en asma</li>
        <li>No usar para alivio rápido de síntomas (no sustituye a SABA)</li>
        <li>Supervisar la frecuencia cardíaca en pacientes con enfermedad cardíaca</li>
        <li>Revaluar periódicamente la necesidad del tratamiento a largo plazo</li>
      </ul>
    </div>
  );
}

export default LABA;

