

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DiureticosAsa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Diuréticos de Asa</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        Los <strong>Diuréticos de Asa</strong> son fármacos potentes que actúan en la porción ascendente del asa de Henle en la nefrona,
        inhibiendo el cotransporte de sodio-potasio-cloro (Na⁺/K⁺/2Cl⁻). Son usados principalmente en el tratamiento de <strong>Edema</strong>,
        <strong> Insuficiencia Cardíaca</strong> y <strong>Hipertensión Arterial resistente</strong>.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p15">
        Inhiben el transporte de Na⁺/K⁺/2Cl⁻ en la rama ascendente gruesa del asa de Henle, provocando pérdida significativa de sodio, cloro y agua,
        además de potasio, calcio y magnesio. Esto produce un potente efecto diurético.
      </p>

      <p className="p14">💊 Principales Fármacos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Típica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Furosemida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20–80 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral / IV</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bumetanida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5–2 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral / IV</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Torasemida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5–20 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Edema de origen cardíaco, renal o hepático.</li>
        <li>Insuficiencia cardíaca congestiva (ICC) para aliviar síntomas de congestión.</li>
        <li>Hipertensión arterial (cuando otros diuréticos no son eficaces).</li>
        <li>Hipercalcemia (facilita excreción renal de calcio).</li>
        <li>Insuficiencia renal aguda para inducir diuresis (en algunos contextos).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipopotasemia, hiponatremia.</li>
        <li>Deshidratación e hipotensión.</li>
        <li>Hiperuricemia y riesgo de gota.</li>
        <li>Ototoxicidad (especialmente con altas dosis o IV rápida).</li>
        <li>Hipomagnesemia, hipocalcemia (en contraste con tiazidas).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Monitorizar electrolitos y función renal durante su uso prolongado o en dosis altas.</li>
        <li>Puede combinarse con diuréticos tiazídicos en resistencia diurética.</li>
        <li>Administración intravenosa útil en situaciones agudas (edema pulmonar, ICC descompensada).</li>
        <li>Requiere ajuste de dosis en insuficiencia renal grave.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p15">
        Los <strong>Diuréticos de Asa</strong> son fármacos fundamentales en el manejo de la sobrecarga de volumen, especialmente en contextos de insuficiencia cardíaca o enfermedad renal.
        Su uso debe ser cuidadoso debido al riesgo de desbalances electrolíticos y ototoxicidad.
      </p>
    </div>
  );
}

export default DiureticosAsa;
