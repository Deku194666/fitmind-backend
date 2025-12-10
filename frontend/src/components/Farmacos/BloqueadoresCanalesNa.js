

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BloqueadoresCanalesNa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Bloqueadores de los Canales de Sodio</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Bloqueadores de los Canales de Sodio</strong> son antiarrítmicos de clase I según la clasificación de Vaughan Williams.
        Actúan inhibiendo el flujo de sodio durante la fase 0 del potencial de acción en las células cardíacas, lo que disminuye la velocidad de
        despolarización y la conducción del impulso. Son útiles para tratar diversas <strong>Taquiarritmias</strong>.
      </p>

      <p className="p14">🔬 Clasificación (Clase I: Subclases A, B y C)</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subclase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase IA</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Quinidina, Procainamida, Disopiramida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean canales de sodio y potasio, prolongan el potencial de acción.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase IB</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lidocaína, Mexiletina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Efecto en tejido isquémico, acortan el potencial de acción.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase IC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flecainida, Propafenona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Potente bloqueo de sodio, sin efecto en duración del potencial de acción.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Taquicardias ventriculares (lidocaína en emergencia).</li>
        <li>Arritmias supraventriculares y fibrilación auricular paroxística (flecainida, propafenona).</li>
        <li>Prevención de recurrencias de arritmias.</li>
        <li>En algunos casos de WPW (síndrome de preexcitación) bajo indicación especializada.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Proarritmia (especialmente clase IC en cardiopatía estructural).</li>
        <li>Alteraciones neurológicas (temblores, mareos, visión borrosa).</li>
        <li>Hipotensión (procainamida, lidocaína).</li>
        <li>Efectos gastrointestinales (náuseas, vómitos).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>La clase IC está contraindicada en cardiopatía estructural (riesgo de muerte súbita).</li>
        <li>Monitoreo estrecho en su uso hospitalario, especialmente con lidocaína intravenosa.</li>
        <li>No se recomiendan como tratamiento crónico en la mayoría de los pacientes.</li>
        <li>Procainamida puede inducir lupus-like syndrome con uso prolongado.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Clase IC + betabloqueador o calcioantagonista para control del ritmo.</li>
        <li>Evitar combinación con otros fármacos que prolongan el QT.</li>
        <li>En emergencias, lidocaína IV puede combinarse con amiodarona.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Bloqueadores de los Canales de Sodio</strong> son antiarrítmicos potentes, útiles en situaciones específicas, pero con riesgo de efectos proarrítmicos.
        Su uso debe ser individualizado y supervisado por especialistas, especialmente en presencia de cardiopatía estructural o antecedentes de arritmias graves.
      </p>
    </div>
  );
}

export default BloqueadoresCanalesNa;
