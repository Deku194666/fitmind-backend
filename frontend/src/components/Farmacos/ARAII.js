

import React, { useEffect } from 'react';

function ARAII() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antagonistas de los Receptores de Angiotensina II (ARA II)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>ARA II</strong> (antagonistas de los receptores de angiotensina II) son fármacos antihipertensivos que bloquean
        directamente los receptores AT<sub>1</sub> de la angiotensina II, lo que evita sus efectos vasoconstrictores, disminuye
        la secreción de aldosterona y mejora el perfil hemodinámico sin provocar tos, a diferencia de los IECA.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Los ARA II se unen selectivamente a los receptores AT<sub>1</sub>, impidiendo que la angiotensina II ejerza sus efectos
        clásicos: vasoconstricción, retención de sodio y remodelado vascular. Esto genera vasodilatación, reducción de la
        presión arterial y protección renal y miocárdica.
      </p>

      <p className="p14">🧪 Ejemplos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Losartán</li>
        <li>Valsartán</li>
        <li>Candesartán</li>
        <li>Telmisartán</li>
        <li>Irbesartán</li>
        <li>Olmesartán</li>
      </ul>

      <p className="p14">📋 Indicaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial esencial</li>
        <li>Insuficiencia cardíaca crónica</li>
        <li>Prevención de progresión de nefropatía diabética</li>
        <li>Post-infarto agudo de miocardio con disfunción ventricular</li>
        <li>Intolerancia a IECA (por tos o angioedema)</li>
      </ul>

      <p className="p14">💊 Dosis Habitual (según fármaco)</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Inicial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Mantenimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Losartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50–100 mg/día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Valsartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>80 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>80–320 mg/día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Candesartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8–32 mg/día</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Absorción:</strong> variable según compuesto</li>
        <li><strong>Vida media:</strong> 6–24 horas</li>
        <li><strong>Metabolismo:</strong> hepático (mayoría)</li>
        <li><strong>Excreción:</strong> renal y biliar</li>
        <li><strong>Unión a proteínas:</strong> alta (mayor a 90%)</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hiperpotasemia</li>
        <li>Hipotensión (especialmente en pacientes hipovolémicos)</li>
        <li>Alteración de la función renal</li>
        <li>Mareos, cefalea</li>
        <li>Angioedema (menos frecuente que en IECA)</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Embarazo y lactancia</li>
        <li>Estenosis bilateral de arterias renales</li>
        <li>Hiperpotasemia severa</li>
        <li>Angioedema previo por ARA II</li>
      </ul>

      <p className="p14">🔄 Interacciones Farmacológicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Diuréticos ahorradores de potasio → riesgo de hiperkalemia</li>
        <li>AINEs → posible pérdida de eficacia + riesgo renal</li>
        <li>Lítio → aumento de toxicidad</li>
        <li>No combinar con IECA (salvo indicación cardiológica muy específica)</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Buena alternativa cuando hay intolerancia a IECA</li>
        <li>Útiles en pacientes diabéticos con proteinuria</li>
        <li>Controlar función renal y potasio durante el tratamiento</li>
        <li>Pueden combinarse con diuréticos o calcioantagonistas</li>
      </ul>
    </div>
  );
}

export default ARAII;
