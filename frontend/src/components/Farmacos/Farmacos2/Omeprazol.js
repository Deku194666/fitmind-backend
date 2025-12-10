

import React, { useEffect } from 'react';

function Omeprazol() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Omeprazol</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Omeprazol</strong> es un inhibidor de la bomba de protones (IBP) utilizado para reducir la producción de ácido gástrico. Se emplea en el tratamiento de diversas patologías gastrointestinales relacionadas con la hipersecreción ácida.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Omeprazol actúa bloqueando irreversiblemente la enzima H+/K+ ATPasa (bomba de protones) en las células parietales del estómago, inhibiendo la secreción final de ácido gástrico y aumentando el pH gástrico.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Úlcera gástrica y duodenal</li>
        <li>Erradicación de Helicobacter pylori (en combinación con antibióticos)</li>
        <li>Síndrome de Zollinger-Ellison</li>
        <li>Gastritis erosiva</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ERGE y úlceras</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Una vez al día, antes de la comida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Erradicación H. pylori</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 12 horas, durante 7-14 días (en combinación con antibióticos)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome de Zollinger-Ellison</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diaria, en dosis divididas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 1 hora</li>
        <li><strong>Pico plasmático:</strong> 0.5-3.5 horas</li>
        <li><strong>Vida media:</strong> 0.5-1 hora</li>
        <li><strong>Metabolismo:</strong> Hepático (CYP2C19, CYP3A4)</li>
        <li><strong>Eliminación:</strong> Renal y fecal</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Dolor abdominal</li>
        <li>Diarrea</li>
        <li>Cefalea</li>
        <li>Náuseas y vómitos</li>
        <li>Flatulencia</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al omeprazol o a otros IBP</li>
        <li>Uso concomitante con rilpivirina (antirretroviral)</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Clopidogrel: disminución de su efecto (cautela)</li>
        <li>Warfarina: posible aumento del efecto anticoagulante</li>
        <li>Antifúngicos azólicos (itraconazol, ketoconazol): reducción de absorción</li>
        <li>Atazanavir: disminución de concentración plasmática</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Administrar antes de las comidas para máxima eficacia</li>
        <li>Usar la dosis efectiva mínima y por el menor tiempo posible</li>
        <li>Vigilar posible hipomagnesemia con uso prolongado</li>
        <li>Considerar reevaluación en tratamientos de más de 4 semanas</li>
      </ul>
    </div>
  );
}

export default Omeprazol;
