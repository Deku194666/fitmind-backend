

import React, { useEffect } from 'react';
import NavBarAntiagregantes from './NavBarAntiagregantes';

function Antiagregantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarAntiagregantes />

      <p className="p13">Fármacos Antiagregantes Plaquetarios</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antiagregantes Plaquetarios</strong> inhiben la activación o agregación de las plaquetas, reduciendo la formación de trombos arteriales. Son esenciales en la prevención de eventos isquémicos, especialmente en el contexto cardiovascular.
      </p>

      <p className="p14">🔬 Clasificación de Antiagregantes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores COX-1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ácido acetilsalicílico (AAS)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquea la síntesis de tromboxano A2</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores del receptor P2Y12</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clopidogrel, Prasugrel, Ticagrelor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean la activación plaquetaria mediada por ADP</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores GP IIb/IIIa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abciximab, Eptifibatida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean la agregación plaquetaria final</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prevención secundaria de IAM y ACV isquémico.</li>
        <li>Síndrome coronario agudo (SCA).</li>
        <li>Prevención de trombosis en stents coronarios (terapia antiplaquetaria dual).</li>
        <li>Enfermedad arterial periférica.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>AAS:</strong> Irritación gástrica, úlceras, hemorragias.</li>
        <li><strong>Clopidogrel:</strong> Hematomas, sangrado, raramente púrpura trombocitopénica.</li>
        <li><strong>Ticagrelor/Prasugrel:</strong> Mayor riesgo hemorrágico que clopidogrel.</li>
        <li><strong>GP IIb/IIIa:</strong> Riesgo elevado de sangrado mayor, uso restringido a contextos hospitalarios.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>El AAS se usa como pilar en prevención secundaria a largo plazo.</li>
        <li>Clopidogrel puede usarse si hay contraindicación a AAS o como parte de terapia dual.</li>
        <li>Ticagrelor/Prasugrel tienen acción más potente, pero con mayor riesgo hemorrágico.</li>
        <li>Ajustar según perfil de riesgo trombótico y hemorrágico del paciente.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>AAS + Clopidogrel (Terapia antiplaquetaria dual post-SCA o angioplastia).</li>
        <li>AAS + Ticagrelor/Prasugrel en casos de alto riesgo isquémico.</li>
        <li>Evitar triple terapia por tiempo prolongado si el paciente también recibe anticoagulantes.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Antiagregantes Plaquetarios </strong> desempeñan un rol esencial en la prevención de eventos trombóticos arteriales. 
        La elección del fármaco debe considerar la situación clínica, balanceando efectividad y seguridad, especialmente en cuanto al riesgo de sangrado.
      </p>
    </div>
  );
}

export default Antiagregantes;
