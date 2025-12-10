

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function EM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Esclerosis Múltiple (EM)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        La <strong>Esclerosis Múltiple (EM)</strong> es una enfermedad autoinmune inflamatoria crónica del sistema nervioso central que afecta la mielina. El tratamiento farmacológico busca reducir la actividad de la enfermedad, prevenir recaídas y enlentecer la progresión de la discapacidad.
      </p>

      <p className="p14">🎯 Objetivos del Tratamiento</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reducir la frecuencia y gravedad de las recaídas.</li>
        <li>Prevenir la aparición de nuevas lesiones en resonancia magnética.</li>
        <li>Retrasar la progresión de la discapacidad.</li>
        <li>Controlar síntomas asociados (espasticidad, fatiga, dolor neuropático, etc.).</li>
      </ul>

      <p className="p14">💉 Tratamientos Modificadores de la Enfermedad (DMT)</p>
      <p className="p150">Los DMT son fármacos inmunomoduladores o inmunosupresores que modifican la evolución de la EM.</p>

      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Interferón beta-1a / 1b</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modula respuesta inmune</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subcutánea / intramuscular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acetato de glatiramer</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Induce linfocitos reguladores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subcutánea</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fingolimod / Siponimod</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moduladores del receptor S1P</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Natalizumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpo monoclonal anti-integrina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intravenosa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ocrelizumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpo monoclonal anti-CD20</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intravenosa</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💊 Manejo de Recaídas</p>
      <p className="p150">
        Las recaídas agudas se tratan con corticosteroides de alta dosis, como <strong>metilprednisolona intravenosa</strong> durante 3-5 días. En casos graves, se puede considerar plasmaféresis.
      </p>

      <p className="p14">🧠 Tratamiento de Síntomas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Espasticidad:</strong> baclofeno, tizanidina.</li>
        <li><strong>Fatiga:</strong> amantadina, modafinilo.</li>
        <li><strong>Dolor neuropático:</strong> gabapentina, pregabalina.</li>
        <li><strong>Disfunción vesical:</strong> anticolinérgicos (oxibutinina).</li>
        <li><strong>Depresión:</strong> ISRS como sertralina o escitalopram.</li>
      </ul>

      <p className="p14">⚠️ Consideraciones Importantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorear reacciones inmunológicas e infecciones en terapias inmunosupresoras.</li>
        <li>Valorar riesgo-beneficio antes de iniciar anticuerpos monoclonales.</li>
        <li>Control periódico con resonancia magnética y pruebas de laboratorio.</li>
        <li>Importancia del enfoque multidisciplinario: neurólogo, rehabilitación, salud mental.</li>
      </ul>

      <p className="p14">📚 Recomendaciones Generales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Iniciar tratamiento modificador lo antes posible tras el diagnóstico.</li>
        <li>Individualizar el tratamiento según tipo de EM, comorbilidades y tolerancia.</li>
        <li>Educar al paciente sobre adherencia, efectos adversos y control de síntomas.</li>
      </ul>
    </div>
  );
}

export default EM;
