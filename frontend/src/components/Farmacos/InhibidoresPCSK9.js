

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InhibidoresPCSK9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Inhibidores de PCSK9</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Inhibidores de la PCSK9</strong> (proproteína convertasa subtilisina/kexina tipo 9) son una nueva clase de fármacos hipolipemiantes
        que han revolucionado el tratamiento de la hipercolesterolemia, especialmente en pacientes con alto riesgo cardiovascular o hipercolesterolemia familiar.
        Actúan aumentando la disponibilidad de receptores LDL en el hígado, lo que reduce significativamente el colesterol LDL plasmático.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        La PCSK9 degrada los receptores LDL hepáticos. Los anticuerpos monoclonales inhibidores de PCSK9 (como alirocumab y evolocumab) bloquean esta acción,
        permitiendo que más receptores LDL estén disponibles para remover colesterol de la circulación. Esto disminuye drásticamente los niveles de <strong>LDL-C</strong>.
      </p>

      <p className="p14">💊 Principales Fármacos y Dosis</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía de Administración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alirocumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>75–150 mg cada 2 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subcutánea</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evolocumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>140 mg cada 2 semanas o 420 mg mensual</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subcutánea</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipercolesterolemia familiar heterocigota o homocigota.</li>
        <li>Pacientes con enfermedad cardiovascular aterosclerótica establecida que no alcanzan objetivos de LDL-C con estatinas ± ezetimiba.</li>
        <li>Intolerancia a estatinas (como alternativa eficaz).</li>
        <li>Prevención secundaria en alto riesgo cardiovascular.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reacciones en el sitio de inyección (eritema, dolor, prurito).</li>
        <li>Nasofaringitis, síntomas gripales.</li>
        <li>Mialgias o molestias musculares leves.</li>
        <li>Raramente: reacciones alérgicas o neurocognitivas.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Son muy eficaces: pueden reducir el LDL-C mayor a 50% adicional a estatinas.</li>
        <li>Uso subcutáneo autoadministrado cada 2 o 4 semanas.</li>
        <li>Costo elevado, habitualmente reservados para casos específicos o refractarios.</li>
        <li>No afectan directamente los niveles de HDL o triglicéridos de forma significativa.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Inhibidores de la PCSK9</strong> son una herramienta poderosa en el tratamiento de dislipidemias severas o resistentes.
        Ofrecen una reducción profunda del LDL-C con buena tolerancia, aunque su uso está limitado por su costo y disponibilidad. Representan el futuro de la terapia personalizada en prevención cardiovascular.
      </p>
    </div>
  );
}

export default InhibidoresPCSK9;
