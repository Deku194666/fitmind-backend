

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Diureticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">

      <p className="p13">Diuréticos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Diuréticos</strong> son un grupo de fármacos que aumentan la excreción renal de agua y electrolitos, especialmente sodio, 
        ayudando a reducir el volumen intravascular. Son ampliamente utilizados en el tratamiento de la <strong>Hipertensión Arterial</strong>, 
        <strong> Insuficiencia Cardíaca</strong> y <strong>Síndromes Edematosos</strong>.
      </p>

      <p className="p14">🔬 Clasificación de Diuréticos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tiazídicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hidroclorotiazida, Indapamida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben la reabsorción de sodio en el túbulo contorneado distal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>De asa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Furosemida, Torasemida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben el cotransportador Na+/K+/2Cl- en el asa de Henle</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ahorradores de potasio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espironolactona, Amilorida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores de aldosterona o canales de sodio en túbulos colectores</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial (especialmente tiazidas en monoterapia o combinación).</li>
        <li>Insuficiencia cardíaca congestiva.</li>
        <li>Edema por síndrome nefrótico, cirrosis hepática o insuficiencia renal.</li>
        <li>Hiperaldosteronismo primario (espironolactona).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Tiazidas:</strong> Hipokalemia, hiponatremia, hiperuricemia, hiperglucemia.</li>
        <li><strong>De asa:</strong> Hipovolemia, ototoxicidad (a dosis altas), hipokalemia.</li>
        <li><strong>Ahorradores de potasio:</strong> Hiperpotasemia, ginecomastia (espironolactona).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorizar electrolitos séricos (Na, K, Mg) y función renal regularmente.</li>
        <li>Útiles en adultos mayores con HTA por buena eficacia y bajo costo (tiazidas).</li>
        <li>Evitar combinación de ahorradores de potasio con IECA/ARA-II sin control estricto del potasio.</li>
        <li>En edema severo o insuficiencia renal, preferir diuréticos de asa.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Tiazida + IECA o ARA II (ej: hidroclorotiazida + enalapril).</li>
        <li>Diurético de asa + espironolactona en insuficiencia cardíaca avanzada.</li>
        <li>Tiazida + betabloqueador en hipertensión resistente.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Diuréticos </strong> son herramientas fundamentales en el manejo de patologías cardiovasculares y edematosas. Su uso racional, basado en la 
        fisiopatología del paciente y control clínico adecuado, permite optimizar sus beneficios y minimizar riesgos.
      </p>
    </div>
  );
}

export default Diureticos;
