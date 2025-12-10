

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Fibratos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fibratos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Fibratos</strong> son medicamentos hipolipemiantes que actúan principalmente reduciendo los niveles de <strong>triglicéridos</strong> y
        aumentando el <strong>colesterol HDL</strong> (colesterol “bueno”). Son útiles en el tratamiento de la <strong>hipertrigliceridemia</strong> y en
        pacientes con riesgo de pancreatitis por triglicéridos muy elevados.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Activan los <strong>receptores PPAR-α</strong> (receptores activados por proliferadores de peroxisomas tipo alfa), lo cual induce la expresión de
        enzimas que aumentan la oxidación de ácidos grasos y disminuyen la producción hepática de VLDL. También incrementan la síntesis de ApoA-I y ApoA-II,
        aumentando el colesterol HDL.
      </p>

      <p className="p14">💊 Ejemplos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fenofibrato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor uso actual. Buena tolerancia. Puede combinarse con estatinas con precaución.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gemfibrozilo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más riesgo de interacciones con estatinas. Uso limitado en la actualidad.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipertrigliceridemia severa (&gt; 500 mg/dL) para prevenir pancreatitis.</li>
        <li>Dislipidemia mixta (colesterol elevado + triglicéridos elevados).</li>
        <li>Pacientes con bajo colesterol HDL y triglicéridos altos.</li>
        <li>Alternativa o complemento en casos de intolerancia a estatinas.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dolor muscular (especialmente al combinarlos con estatinas).</li>
        <li>Dismenorrea gastrointestinal (náuseas, dolor abdominal).</li>
        <li>Cálculos biliares (por aumento de excreción de colesterol biliar).</li>
        <li>Aumento leve de transaminasas hepáticas.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar gemfibrozilo en combinación con estatinas por mayor riesgo de rabdomiolisis.</li>
        <li>Revisar función hepática y renal antes y durante el tratamiento.</li>
        <li>No usar en enfermedad hepática activa o colelitiasis.</li>
        <li>Evaluar beneficios en pacientes con dislipidemia aterogénica (diabéticos o síndrome metabólico).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Fibratos</strong> son fármacos útiles en el manejo de hipertrigliceridemias y en la prevención de complicaciones como la pancreatitis. Aunque
        su impacto en la reducción de eventos cardiovasculares es menor que el de las estatinas, tienen un rol relevante en situaciones específicas,
        especialmente en dislipidemias mixtas o en pacientes con bajo HDL.
      </p>
    </div>
  );
}

export default Fibratos;
