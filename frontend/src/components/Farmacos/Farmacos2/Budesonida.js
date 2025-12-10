

import React, { useEffect } from 'react';

function Budesonida() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Budesonida</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        La <strong>Budesonida</strong> es un corticosteroide sintético con potente actividad antiinflamatoria local. Se utiliza principalmente por vía inhalatoria en el tratamiento del asma y la enfermedad pulmonar obstructiva crónica (EPOC), así como por vía oral o rectal en enfermedades inflamatorias intestinales como la enfermedad de Crohn o la colitis ulcerosa.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        La Budesonida actúa sobre los receptores glucocorticoides, modulando la expresión génica y reduciendo la liberación de mediadores inflamatorios como prostaglandinas, leucotrienos e interleucinas. Esto disminuye la inflamación de las vías respiratorias y de la mucosa intestinal según la vía de administración.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente</li>
        <li>Enfermedad pulmonar obstructiva crónica (EPOC)</li>
        <li>Rinitis alérgica (vía nasal)</li>
        <li>Enfermedad de Crohn (formas leves a moderadas)</li>
        <li>Colitis ulcerosa (formas leves)</li>
        <li>Esofagitis eosinofílica (uso fuera de ficha técnica)</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalatoria</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Asma / EPOC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>200–800 mcg al día en 2 dosis</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral (cápsulas de liberación entérica)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enfermedad de Crohn</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>9 mg al día por 8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rectal (espuma o enema)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colitis ulcerosa distal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 mg al día</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 1–3 días (inhalado)</li>
        <li><strong>Vida media:</strong> 2–3 h</li>
        <li><strong>Metabolismo:</strong> Hepático extenso (CYP3A4)</li>
        <li><strong>Excreción:</strong> Renal y fecal (metabolitos)</li>
        <li><strong>Biodisponibilidad sistémica:</strong> menor a 10% inhalado, ~12% oral</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Candidiasis oral (inhalada)</li>
        <li>Disfonía o ronquera</li>
        <li>Tos e irritación faríngea</li>
        <li>Náuseas, dolor abdominal (oral)</li>
        <li>Síntomas de supresión suprarrenal (a altas dosis o uso prolongado)</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Infecciones micóticas o virales activas no tratadas</li>
        <li>Hipersensibilidad a budesonida o excipientes</li>
        <li>Pacientes con tuberculosis activa sin tratamiento</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Inhibidores del CYP3A4 (ketoconazol, ritonavir): aumentan niveles de budesonida</li>
        <li>Otros corticoides: riesgo de efectos aditivos o supresión suprarrenal</li>
        <li>Alcohol o AINEs: mayor riesgo de efectos GI si se usa por vía oral</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Enjuagar la boca tras cada inhalación para prevenir candidiasis</li>
        <li>Controlar función suprarrenal si se usa a largo plazo</li>
        <li>Uso preferente en formas leves a moderadas de enfermedad inflamatoria intestinal</li>
        <li>Considerar alternativas si se requiere efecto sistémico potente</li>
      </ul>
    </div>
  );
}

export default Budesonida;
