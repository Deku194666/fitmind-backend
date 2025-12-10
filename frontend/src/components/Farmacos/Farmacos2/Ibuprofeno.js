

import React, { useEffect } from 'react';

function Ibuprofeno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Ibuprofeno</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Ibuprofeno</strong> es un antiinflamatorio no esteroideo (AINE) ampliamente utilizado por sus propiedades <strong>analgésicas</strong>, <strong>antiinflamatorias</strong> y <strong>antipiréticas</strong>. Se indica en una gran variedad de patologías dolorosas agudas o crónicas, tanto musculoesqueléticas como febriles.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe de forma reversible la enzima <strong>ciclooxigenasa (COX-1 y COX-2)</strong>, reduciendo la síntesis de prostaglandinas, sustancias implicadas en la inflamación, dolor y fiebre. Al inhibir COX-1, puede afectar la protección gástrica y la función plaquetaria.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Dolor musculoesquelético leve a moderado</li>
        <li>Artritis reumatoide y artrosis</li>
        <li>Dismenorrea</li>
        <li>Fiebre</li>
        <li>Dolor dental o postoperatorio</li>
        <li>Cefaleas tensionales o migrañas leves</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral (adultos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>200–400 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 6–8 h (máximo 1200–2400 mg/día)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral (niños)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5–10 mg/kg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 6–8 h (máximo 40 mg/kg/día)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 30–60 minutos</li>
        <li><strong>Vida media:</strong> 2–4 horas</li>
        <li><strong>Metabolismo:</strong> Hepático (CYP2C9)</li>
        <li><strong>Excreción:</strong> Renal</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Irritación gástrica, dispepsia</li>
        <li>Dolor abdominal o náuseas</li>
        <li>Úlceras o hemorragia digestiva (riesgo con uso prolongado)</li>
        <li>Retención de líquidos o edema</li>
        <li>Aumento de la presión arterial</li>
        <li>Alteraciones renales con uso crónico o en pacientes vulnerables</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a AINEs o antecedentes de asma inducida por AINEs</li>
        <li>Úlcera péptica activa o hemorragia digestiva</li>
        <li>Insuficiencia renal grave</li>
        <li>Insuficiencia hepática o cardíaca grave</li>
        <li>Tercer trimestre del embarazo</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Anticoagulantes (ej. warfarina): mayor riesgo de sangrado</li>
        <li>IECA o ARA II: aumento del riesgo de toxicidad renal</li>
        <li>Diuréticos: posible disminución del efecto y mayor riesgo renal</li>
        <li>Corticoides: aumento del riesgo gastrointestinal</li>
        <li>Litio o metotrexato: aumento de sus niveles plasmáticos</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Tomar con alimentos para reducir irritación gástrica</li>
        <li>No se recomienda su uso crónico sin supervisión médica</li>
        <li>Evitar en pacientes con riesgo cardiovascular elevado</li>
        <li>Considerar alternativas más seguras en adultos mayores</li>
      </ul>
    </div>
  );
}

export default Ibuprofeno;
