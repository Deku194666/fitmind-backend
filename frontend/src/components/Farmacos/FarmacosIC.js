

import React, { useEffect } from 'react';
import NavBarFarmacosIC from './NavBarFarmacosIC';

function FarmacosIC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarFarmacosIC />

      <p className="p13">Fármacos para Insuficiencia Cardíaca</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        El tratamiento farmacológico de la <strong>Insuficiencia Cardíaca (IC)</strong> se basa en mejorar síntomas, reducir hospitalizaciones y prolongar la supervivencia. Se emplean distintas clases de medicamentos según el tipo de IC (con fracción de eyección reducida o preservada), la etapa funcional del paciente (NYHA) y las comorbilidades asociadas.
      </p>

      <p className="p14">🔬 Principales Grupos de Fármacos Utilizados</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo / Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diuréticos de asa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Furosemida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reducción de congestión y síntomas (no mejora la sobrevida)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IECA / ARA II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enalapril, Losartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuyen remodelado cardíaco y mortalidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Betabloqueadores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carvedilol, Bisoprolol, Metoprolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reducen la frecuencia cardíaca y mortalidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonistas MRA</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espironolactona, Eplerenona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores de aldosterona; disminuyen fibrosis y mejoran sobrevida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ARNI</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sacubitrilo/Valsartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Combinación que reemplaza a IECA/ARA II en pacientes seleccionados</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Insuficiencia cardíaca con fracción de eyección reducida (ICFEr).</li>
        <li>Congestión pulmonar o periférica (uso de diuréticos).</li>
        <li>Pacientes sintomáticos a pesar del tratamiento estándar.</li>
        <li>IC con comorbilidades como hipertensión o enfermedad renal.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>IECA/ARA II:</strong> Hipotensión, hiperkalemia, tos seca (con IECA).</li>
        <li><strong>Diuréticos:</strong> Hipovolemia, hipopotasemia, hipomagnesemia.</li>
        <li><strong>Betabloqueadores:</strong> Bradicardia, fatiga, disfunción eréctil.</li>
        <li><strong>MRA:</strong> Hiperkalemia, ginecomastia (espironolactona).</li>
        <li><strong>ARNI:</strong> Hipotensión, angioedema (raro), hiperkalemia.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Los diuréticos se utilizan para alivio sintomático, no modifican la sobrevida.</li>
        <li>IECA/ARA II, betabloqueadores, MRA y ARNI reducen la mortalidad y deben iniciarse precozmente.</li>
        <li>ARNI se recomienda como sustituto de IECA/ARA II si el paciente continúa sintomático.</li>
        <li>El monitoreo de función renal y electrolitos es esencial en el seguimiento.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>IECA + Betabloqueador + MRA (triple terapia estándar).</li>
        <li>Sacubitrilo/Valsartán en lugar de IECA si está disponible y bien tolerado.</li>
        <li>Diuréticos según síntomas de congestión.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        El enfoque farmacológico en <strong>  Insuficiencia Cardíaca </strong> debe ser integral y adaptado a cada paciente. La combinación adecuada de medicamentos modifica el curso de la enfermedad, mejora la calidad de vida y reduce el riesgo de hospitalización y muerte.
      </p>
    </div>
  );
}

export default FarmacosIC;
