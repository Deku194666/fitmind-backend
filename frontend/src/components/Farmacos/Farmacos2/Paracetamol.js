


import React, { useEffect } from 'react';

function Paracetamol() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Paracetamol (Acetaminofén)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Paracetamol</strong>, también conocido como acetaminofén, es un fármaco analgésico y antipirético ampliamente utilizado para el alivio del dolor leve a moderado y la fiebre. Es una opción segura cuando se usa en dosis terapéuticas y no tiene efectos antiinflamatorios significativos.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe de forma reversible la síntesis de prostaglandinas en el sistema nervioso central, lo que disminuye la percepción del dolor y la respuesta febril. A diferencia de los AINEs, no inhibe significativamente la ciclooxigenasa en tejidos periféricos.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Dolor leve a moderado (cefalea, mialgias, artralgias, dolor dental, etc.)</li>
        <li>Fiebre de origen diverso</li>
        <li>Alternativa a AINEs cuando están contraindicados</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Adultos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Niños</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral / Rectal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500–1000 mg cada 6–8 h (máximo 4 g/día)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10–15 mg/kg cada 6 h</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 30 minutos</li>
        <li><strong>Pico de efecto:</strong> 1–2 horas</li>
        <li><strong>Duración:</strong> 4–6 horas</li>
        <li><strong>Metabolismo:</strong> Hepático (CYP450)</li>
        <li><strong>Excreción:</strong> Renal</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Generalmente bien tolerado en dosis terapéuticas</li>
        <li>Hepatotoxicidad en sobredosis</li>
        <li>Raras veces: erupciones cutáneas, reacciones alérgicas</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco</li>
        <li>Insuficiencia hepática grave</li>
        <li>Uso crónico de alcohol (precaución)</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alcohol: aumenta el riesgo de hepatotoxicidad</li>
        <li>Anticoagulantes orales: puede potenciar su efecto con uso prolongado</li>
        <li>Inductores enzimáticos (como fenitoína o carbamazepina): aumentan toxicidad hepática</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>De preferencia administrar con un intervalo mínimo de 4–6 horas</li>
        <li>No exceder 4 g/día en adultos para evitar toxicidad hepática</li>
        <li>Antídoto en sobredosis: N-acetilcisteína</li>
        <li>Considerado seguro durante el embarazo en dosis adecuadas</li>
      </ul>
    </div>
  );
}

export default Paracetamol;
