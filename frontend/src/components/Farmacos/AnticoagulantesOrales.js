

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AnticoagulantesOrales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Anticoagulantes Orales Directos (ACOD)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Anticoagulantes Orales Directos (ACOD)</strong>, también conocidos como DOACs (por sus siglas en inglés), son medicamentos que inhiben de forma directa y específica factores clave de la coagulación. 
        Incluyen inhibidores directos del <strong>factor Xa</strong> y de la <strong>trombina (IIa)</strong>. Representan una alternativa moderna a la warfarina, con ventajas como menor necesidad de monitoreo y menos interacciones.
      </p>

      <p className="p14">🔬 Clasificación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores del factor Xa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rivaroxabán, Apixabán, Edoxabán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean de forma directa el factor Xa libre y unido a protrombina.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidor de la trombina (IIa)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dabigatrán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibe directamente la trombina, impidiendo la conversión de fibrinógeno a fibrina.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prevención de ictus y embolia sistémica en fibrilación auricular no valvular.</li>
        <li>Tratamiento y prevención secundaria de trombosis venosa profunda (TVP) y embolia pulmonar (TEP).</li>
        <li>Profilaxis de TVP postoperatoria (ej. cirugía ortopédica mayor).</li>
        <li>Alternativa a antagonistas de la vitamina K cuando se desea evitar controles frecuentes (ej. INR).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hemorragias, especialmente gastrointestinales.</li>
        <li>Dispepsia y molestias abdominales (más común con dabigatrán).</li>
        <li>Anemia y sangrado encubierto.</li>
        <li>Hepatotoxicidad (rara, pero se recomienda vigilar función hepática).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No requieren monitoreo rutinario de coagulación, aunque pueden medirse niveles en contextos especiales.</li>
        <li>Evitar en pacientes con <strong>válvulas cardíacas mecánicas</strong> o estenosis mitral severa (no indicados).</li>
        <li>Ajustar dosis en insuficiencia renal, especialmente dabigatrán.</li>
        <li>Contraindicados en insuficiencia renal severa (menor a 30 mL/min, depende del fármaco).</li>
        <li>Interacciones con inhibidores/inductores del CYP3A4 y P-gp (verapamilo, ketoconazol, rifampicina, etc.).</li>
        <li>Discontinuar al menos 24–48 horas antes de cirugía según riesgo hemorrágico.</li>
      </ul>

      <p className="p14">🛡️ Antídotos y Manejo del Sangrado</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Idarucizumab:</strong> antídoto específico para dabigatrán.</li>
        <li><strong>Andexanet alfa:</strong> reversor específico de inhibidores del factor Xa (no disponible en todos los países).</li>
        <li>En caso de sangrado severo sin antídoto disponible: medidas de soporte, carbón activado, hemodiálisis (solo útil en dabigatrán), concentrados de complejo protrombínico.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No deben combinarse con otros anticoagulantes ni antiagregantes, salvo indicación estricta (riesgo de sangrado).</li>
        <li>En síndrome coronario agudo, pueden usarse con AAS y clopidogrel por un tiempo limitado.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Anticoagulantes Orales Directos (ACOD)</strong> han revolucionado el tratamiento y prevención de enfermedades tromboembólicas. 
        Su perfil de eficacia y seguridad, junto con la conveniencia de no requerir controles frecuentes, los ha convertido en una alternativa atractiva a la warfarina.
        No obstante, su uso debe individualizarse considerando función renal, riesgo de sangrado, interacciones y disponibilidad de antídotos.
      </p>
    </div>
  );
}

export default AnticoagulantesOrales;
