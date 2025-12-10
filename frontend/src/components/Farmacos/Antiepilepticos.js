

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function  Antiepilepticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos Antiepilépticos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antiepilépticos</strong>, también conocidos como anticonvulsivantes, se utilizan principalmente para prevenir 
        crisis epilépticas, pero también tienen aplicaciones en el tratamiento del dolor neuropático, trastornos psiquiátricos, y
         algunas disfunciones musculoesqueléticas relacionadas con hiperexcitabilidad nerviosa.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de canales de sodio o calcio en neuronas hiperexcitables.</li>
        <li>Aumento de la actividad GABAérgica (inhibidora) a nivel del sistema nervioso central.</li>
        <li>Disminución de la liberación de neurotransmisores excitatorios (como el glutamato).</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Epilepsia generalizada o focal</li>
        <li>Neuralgia del trigémino</li>
        <li>Dolor neuropático crónico</li>
        <li>Trastorno bipolar resistente</li>
        <li>Prevención de convulsiones postraumáticas o por tumor cerebral</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso común</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carbamazepina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400–1200 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epilepsia, neuralgia del trigémino</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ácido valproico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500–2000 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epilepsia, trastorno bipolar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lamotrigina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50–400 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epilepsia, bipolaridad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Levetiracetam</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500–3000 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epilepsia generalizada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Topiramato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50–400 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epilepsia, migraña</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, vértigo, diplopía</li>
        <li>Aumento de peso (valproato), pérdida de peso (topiramato)</li>
        <li>Hepatotoxicidad (valproato)</li>
        <li>Trastornos cognitivos o del ánimo (levetiracetam, topiramato)</li>
        <li>Erupciones cutáneas graves (lamotrigina)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Embarazo (valproato, topiramato)</li>
        <li>Hepatopatía activa (valproato)</li>
        <li>Alergia previa al fármaco</li>
        <li>Trastornos psiquiátricos no controlados (levetiracetam, topiramato)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Carbamazepina induce el metabolismo hepático de múltiples fármacos</li>
        <li>Lamotrigina y valproato: riesgo de toxicidad si se combinan sin ajuste</li>
        <li>Valproato con anticoagulantes: riesgo de sangrado</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorear niveles plasmáticos en fármacos como valproato y carbamazepina</li>
        <li>Iniciar con dosis bajas y ajustar progresivamente</li>
        <li>Evitar la suspensión brusca del tratamiento</li>
        <li>Educar al paciente sobre signos de toxicidad y efectos secundarios</li>
      </ul>
    </div>
  );
}

export default  Antiepilepticos;
