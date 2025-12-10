

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InhibidoresP2Y12() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Inhibidores del Receptor P2Y12</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Inhibidores del Receptor P2Y12</strong> son fármacos antiagregantes plaquetarios que actúan bloqueando de forma reversible o irreversible
        el receptor P2Y12 del ADP en las plaquetas, impidiendo su activación y agregación. Se utilizan principalmente en la prevención de eventos cardiovasculares
        aterotrombóticos, especialmente tras un <strong>síndrome coronario agudo</strong> o <strong>angioplastía coronaria</strong>.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        El receptor plaquetario <strong>P2Y12</strong> se activa por el ADP, promoviendo la agregación plaquetaria. Estos fármacos bloquean este receptor,
        disminuyendo la capacidad de las plaquetas para unirse entre sí y formar trombos. Algunos lo hacen de forma irreversible (clopidogrel, prasugrel),
        mientras que otros son reversibles (ticagrelor).
      </p>

      <p className="p14">💊 Fármacos Representativos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clopidogrel</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Irreversible</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Profármaco, requiere activación hepática (CYP2C19). Variabilidad interindividual.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prasugrel</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Irreversible</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más potente que clopidogrel. No usar en ≥75 años, bajo peso o ACV previo.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ticagrelor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reversible</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acción directa. Inicio rápido. Puede causar disnea.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Síndrome coronario agudo (con o sin elevación del ST).</li>
        <li>Intervención coronaria percutánea con colocación de stent.</li>
        <li>Enfermedad arterial periférica (clopidogrel).</li>
        <li>Prevención secundaria de eventos cardiovasculares en pacientes con riesgo elevado.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hemorragias (digestiva, intracraneal, etc.).</li>
        <li>Disnea (especialmente con ticagrelor).</li>
        <li>Trastornos gastrointestinales.</li>
        <li>Erupciones cutáneas, neutropenia (raro con clopidogrel).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>La doble antiagregación (aspirina + P2Y12) suele mantenerse por 12 meses post-SCA o stent.</li>
        <li>Evaluar riesgo hemorrágico antes de iniciar tratamiento prolongado.</li>
        <li>Ticagrelor no requiere activación hepática, pero es más costoso.</li>
        <li>Evitar prasugrel en pacientes con alto riesgo de sangrado o ACV previo.</li>
        <li>Se deben suspender antes de cirugías según su vida media y tipo de intervención.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Inhibidores del Receptor P2Y12</strong> son componentes esenciales en la estrategia antiagregante moderna, especialmente en síndromes coronarios agudos y postangioplastía.
        La elección del agente debe basarse en el perfil del paciente, riesgo de sangrado y costo/beneficio terapéutico.
      </p>
    </div>
  );
}

export default InhibidoresP2Y12;
