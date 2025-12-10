

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Resinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Resinas de Intercambio Iónico</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Resinas Secuestradoras de Ácidos Biliares</strong> son fármacos hipolipemiantes que actúan en el tracto gastrointestinal,
        uniéndose a los ácidos biliares y evitando su reabsorción. Esto reduce el colesterol LDL, aunque su uso ha disminuido con la aparición de 
        fármacos más eficaces y mejor tolerados como las estatinas.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Se unen de forma irreversible a los ácidos biliares en el intestino, impidiendo su reabsorción en el íleon. Esto obliga al hígado a utilizar más 
        colesterol para sintetizar nuevos ácidos biliares, disminuyendo el colesterol plasmático, especialmente el <strong>LDL-C</strong>.
      </p>

      <p className="p14">💊 Principales Fármacos y Dosis</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Presentación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colestiramina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4–16 g/día en 1–2 dosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Polvo para suspensión oral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colestipol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5–30 g/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Polvo o tabletas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colesevelam</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1.875–3.75 g/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tabletas o suspensión</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipercolesterolemia leve a moderada.</li>
        <li>Alternativa en pacientes intolerantes a estatinas.</li>
        <li>Hipercolesterolemia familiar en combinación con otros hipolipemiantes.</li>
        <li>Colestasis pruriginosa (uso no lipídico).</li>
        <li>Diarrea por ácido biliar (uso off-label).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estreñimiento, distensión abdominal, flatulencias.</li>
        <li>Náuseas, sabor desagradable.</li>
        <li>Interferencia en la absorción de vitaminas liposolubles (A, D, E, K).</li>
        <li>Pueden reducir la absorción de otros medicamentos (ej. digoxina, warfarina, estatinas).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Deben administrarse separados al menos 1–4 horas de otros medicamentos orales.</li>
        <li>Buena alternativa durante el embarazo, ya que no se absorben sistémicamente.</li>
        <li>Inicio de acción lento (semanas) y respuesta limitada en comparación con estatinas.</li>
        <li>Requieren una buena adherencia, lo que puede ser difícil por sus efectos gastrointestinales.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Las <strong>Resinas Secuestradoras de Ácidos Biliares</strong> ofrecen una opción útil en ciertos contextos clínicos, como intolerancia a estatinas o durante el embarazo.
        Su eficacia es modesta y su tolerancia puede ser un desafío, pero siguen teniendo un rol particular dentro del arsenal terapéutico para el manejo de dislipidemias.
      </p>
    </div>
  );
}

export default Resinas;
