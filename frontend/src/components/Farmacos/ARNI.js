

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ARNI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">ARNI (Inhibidores del Receptor de Angiotensina y de la Neprilisina)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>ARNI</strong> combinan un <strong>Antagonista del Receptor de Angiotensina II (ARA II)</strong> con un <strong>inhibidor de la neprilisina</strong>, una enzima que degrada péptidos natriuréticos.
        Esta combinación potencia los efectos vasodilatadores, natriuréticos y antifibróticos, ofreciendo una opción superior a los IECA o ARA II solos en insuficiencia cardíaca con fracción de eyección reducida.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        El ARNI <strong>sacubitrilo/valsartán</strong> actúa de forma dual:
        <br />
        - <strong>Sacubitrilo</strong> inhibe la neprilisina, aumentando los niveles de péptidos natriuréticos.<br />
        - <strong>Valsartán</strong> bloquea los receptores AT1 de la angiotensina II, reduciendo la vasoconstricción y la retención de sodio.
      </p>

      <p className="p14">💊 Fármaco Disponible</p>
      <table style={{ width: '75%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre Comercial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Componentes</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Típica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Entresto®</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sacubitrilo + Valsartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>24/26 mg, 49/51 mg o 97/103 mg 2 veces/día</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Insuficiencia cardíaca con fracción de eyección reducida (ICFER).</li>
        <li>Pacientes sintomáticos a pesar de tratamiento con IECA/ARA II y betabloqueadores.</li>
        <li>Reemplazo de IECA/ARA II en pacientes seleccionados con buena tolerancia y función renal adecuada.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipotensión sintomática.</li>
        <li>Hiperpotasemia.</li>
        <li>Alteración de la función renal.</li>
        <li>Angioedema (menos frecuente que con IECA, pero posible).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No debe iniciarse simultáneamente con IECA: requiere un "wash-out" de al menos 36 horas.</li>
        <li>Monitorear potasio y función renal antes y durante el tratamiento.</li>
        <li>No recomendado en pacientes con antecedentes de angioedema con IECA o ARA II.</li>
        <li>Ajustar la dosis progresivamente según tolerancia.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>ARNI</strong> representan una de las principales innovaciones en el tratamiento de la insuficiencia cardíaca. Al combinar los beneficios de los ARA II con el incremento de péptidos natriuréticos,
        mejoran la calidad de vida y reducen hospitalizaciones y mortalidad. Su implementación debe ser gradual y cuidadosamente monitoreada.
      </p>
    </div>
  );
}

export default ARNI;
