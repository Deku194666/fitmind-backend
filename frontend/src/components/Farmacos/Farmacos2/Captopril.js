

import React, { useEffect } from 'react';

function Captopril() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Captopril</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Captopril</strong> es un inhibidor de la enzima convertidora de angiotensina (IECA), utilizado principalmente en el tratamiento de la hipertensión arterial, insuficiencia cardíaca y nefropatía diabética. Fue el primer IECA aprobado para uso clínico.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe la enzima convertidora de angiotensina (ECA), reduciendo la conversión de angiotensina I en angiotensina II, un potente vasoconstrictor. También disminuye la degradación de bradicinina, lo que potencia el efecto vasodilatador.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial</li>
        <li>Insuficiencia cardíaca congestiva</li>
        <li>Post infarto agudo de miocardio</li>
        <li>Nefropatía diabética</li>
        <li>Esclerodermia con crisis renal</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis inicial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis mantenimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipertensión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12.5–25 mg 2–3 veces/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50–100 mg 2–3 veces/día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IC o nefropatía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6.25–12.5 mg 3 veces/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25–50 mg 3 veces/día</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Biodisponibilidad:</strong> ~70%</li>
        <li><strong>Inicio de acción:</strong> 15–30 minutos</li>
        <li><strong>Vida media:</strong> ~2 horas</li>
        <li><strong>Eliminación:</strong> Renal</li>
        <li><strong>Alimento:</strong> disminuye absorción (mejor en ayunas)</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Tos seca persistente</li>
        <li>Hipotensión, especialmente en la primera dosis</li>
        <li>Hiperpotasemia</li>
        <li>Alteración del gusto (sabor metálico)</li>
        <li>Erupciones cutáneas</li>
        <li>Raramente: angioedema</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Embarazo (especialmente segundo y tercer trimestre)</li>
        <li>Angioedema previo por IECAs</li>
        <li>Estenosis bilateral de arterias renales</li>
        <li>Hipercalemia</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Diuréticos ahorradores de potasio: riesgo de hiperpotasemia</li>
        <li>AINES: pueden reducir su efecto antihipertensivo</li>
        <li>Litio: aumento del riesgo de toxicidad por litio</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Realizar control de presión arterial y función renal periódicamente</li>
        <li>Vigilancia del potasio sérico</li>
        <li>Tomar preferentemente 1 hora antes de las comidas</li>
        <li>El efecto hipotensor puede ser más intenso con la primera dosis</li>
      </ul>
    </div>
  );
}

export default Captopril;
