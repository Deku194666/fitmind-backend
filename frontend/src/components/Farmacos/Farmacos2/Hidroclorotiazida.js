

import React, { useEffect } from 'react';

function Hidroclorotiazida() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Hidroclorotiazida</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        La <strong>Hidroclorotiazida</strong> es un diurético tiazídico utilizado principalmente en el tratamiento de la hipertensión arterial y edemas asociados a insuficiencia cardíaca, hepática o renal. Actúa promoviendo la eliminación de sodio y agua a través del riñón.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe el cotransportador de sodio-cloro en el túbulo contorneado distal del nefrón, disminuyendo la reabsorción de sodio y agua. Esto reduce el volumen plasmático y, a largo plazo, disminuye la resistencia vascular periférica.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial</li>
        <li>Edema por insuficiencia cardíaca</li>
        <li>Edema hepático o renal</li>
        <li>Prevención de cálculos renales por hipercalciuria</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipertensión arterial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12.5–25 mg una vez al día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25–100 mg diarios en 1 o 2 dosis</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 2 horas</li>
        <li><strong>Pico de efecto:</strong> 4 horas</li>
        <li><strong>Duración:</strong> 6–12 horas</li>
        <li><strong>Vida media:</strong> 6–15 horas</li>
        <li><strong>Excreción:</strong> Renal, sin metabolizar</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipokalemia (bajo potasio)</li>
        <li>Hiponatremia</li>
        <li>Hiperuricemia (puede desencadenar gota)</li>
        <li>Hiperglucemia</li>
        <li>Hipomagnesemia</li>
        <li>Calambres musculares</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alergia a tiazidas o sulfonamidas</li>
        <li>Anuria (ausencia de producción de orina)</li>
        <li>Desequilibrios electrolíticos graves no corregidos</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Litio: puede aumentar su toxicidad</li>
        <li>AINEs: pueden disminuir el efecto antihipertensivo</li>
        <li>Digoxina: riesgo aumentado de toxicidad con hipokalemia</li>
        <li>Antidiabéticos: posible disminución del efecto</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Controlar electrolitos y función renal durante el tratamiento</li>
        <li>Puede usarse en combinación con otros antihipertensivos</li>
        <li>No es útil en insuficiencia renal avanzada</li>
        <li>Administrar en la mañana para evitar nicturia</li>
      </ul>
    </div>
  );
}

export default Hidroclorotiazida;
