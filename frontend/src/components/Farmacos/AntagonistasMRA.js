

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AntagonistasMRA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antagonistas de los Receptores Mineralocorticoides (MRA)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>MRA</strong> (Mineralocorticoid Receptor Antagonists), también conocidos como <strong>antagonistas de la aldosterona</strong>, son fármacos que bloquean los efectos de esta hormona en el túbulo distal de la nefrona.
        Suprimen la reabsorción de sodio y la excreción de potasio inducidas por aldosterona, y poseen efectos beneficiosos cardiovasculares más allá del control del volumen.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Inhiben competitivamente los receptores de mineralocorticoides en el túbulo colector renal, evitando los efectos de la aldosterona. Esto reduce la reabsorción de sodio y agua,
        y disminuye la excreción de potasio. También tienen propiedades antifibróticas y antiinflamatorias en tejido cardíaco y vascular.
      </p>

      <p className="p14">💊 Principales Fármacos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Típica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Comentario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espironolactona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12.5–100 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Puede causar ginecomastia por afinidad con receptores androgénicos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Eplerenona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25–50 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más selectivo, menor riesgo de efectos hormonales</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Insuficiencia cardíaca con fracción de eyección reducida (ICFER).</li>
        <li>Hipertensión resistente (como tercera línea).</li>
        <li>Hiperaldosteronismo primario.</li>
        <li>Cirrosis hepática con ascitis (espironolactona).</li>
        <li>Síndrome nefrótico con retención de sodio.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hiperpotasemia.</li>
        <li>Insuficiencia renal.</li>
        <li>Ginecomastia, disfunción sexual (con espironolactona).</li>
        <li>Hiponatremia.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorear potasio y función renal antes y durante el tratamiento.</li>
        <li>Evitar en pacientes con potasio sérico &gt; 5.0 mEq/L o aclaramiento de creatinina &lt; 30 ml/min.</li>
        <li>Eplerenona se prefiere si hay efectos adversos hormonales con espironolactona.</li>
        <li>El inicio de tratamiento debe ser cuidadoso en pacientes con enfermedad renal o polimedicados.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>MRA</strong> son componentes esenciales del tratamiento en insuficiencia cardíaca y otras condiciones con activación del sistema renina-angiotensina-aldosterona.
        Su uso adecuado mejora la supervivencia, pero requiere monitoreo cercano por el riesgo de hiperpotasemia.
      </p>
    </div>
  );
}

export default AntagonistasMRA;
