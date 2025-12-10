

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Laxantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Laxantes</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Laxantes</strong> son fármacos utilizados para facilitar o estimular la evacuación intestinal en casos de estreñimiento, preparación para procedimientos diagnósticos (como colonoscopías) o cirugía intestinal.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Aumentan el volumen o el contenido de agua de las heces.</li>
        <li>Estimulan la motilidad intestinal.</li>
        <li>Aumentan la secreción de líquidos en el colon.</li>
      </ul>

      <p className="p14">📋 Clasificación e Indicaciones</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Formadores de masa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Psyllium, Metilcelulosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estreñimiento crónico leve</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osmóticos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lactulosa, Polietilenglicol, Sales de magnesio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Preparación para colonoscopía, estreñimiento agudo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estimulantes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bisacodilo, Senósidos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso ocasional en estreñimiento refractario</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Emolientes (ablandadores)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Docusato sódico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pacientes con fisuras anales, postquirúrgicos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lubricantes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aceite mineral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso ocasional, evitar en niños y ancianos</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Distensión abdominal, flatulencia (formadores de masa)</li>
        <li>Diarrea, desequilibrios electrolíticos (osmóticos y estimulantes)</li>
        <li>Dependencia a largo plazo (uso crónico de estimulantes)</li>
        <li>Aspiración y neumonía lipoidea (aceite mineral en pacientes encamados)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Obstrucción intestinal</li>
        <li>Dolor abdominal sin diagnóstico</li>
        <li>Colitis o apendicitis aguda</li>
        <li>Uso prolongado sin supervisión médica</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Sales de magnesio pueden alterar absorción de algunos antibióticos</li>
        <li>Lactulosa puede reducir eficacia de otros fármacos si se toma simultáneamente</li>
        <li>Minerales liposolubles (A, D, E, K) pueden malabsorberse con aceite mineral</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Fomentar cambios en dieta y estilo de vida antes de iniciar laxantes farmacológicos</li>
        <li>Evitar el uso crónico sin evaluación médica</li>
        <li>Elegir el tipo de laxante según el caso clínico</li>
        <li>Buena hidratación es clave para eficacia y seguridad</li>
      </ul>
    </div>
  );
}

export default Laxantes;
