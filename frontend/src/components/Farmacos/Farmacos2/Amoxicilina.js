

import React, { useEffect } from 'react';

function Amoxicilina() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Amoxicilina</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        La <strong>Amoxicilina</strong> es un antibiótico de amplio espectro perteneciente al grupo de las penicilinas semisintéticas. Es ampliamente utilizada para tratar diversas infecciones bacterianas gracias a su eficacia, seguridad y buena absorción oral.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina (PBP), lo que provoca lisis y muerte de bacterias sensibles. Es bactericida y actúa principalmente sobre bacterias Gram positivas y algunas Gram negativas.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Faringitis y amigdalitis bacteriana</li>
        <li>Otitis media aguda</li>
        <li>Sinusitis bacteriana</li>
        <li>Infecciones del tracto respiratorio inferior (bronquitis, neumonía)</li>
        <li>Infecciones urinarias no complicadas</li>
        <li>Erradicación de <em>Helicobacter pylori</em> (en combinación)</li>
        <li>Profilaxis de endocarditis en procedimientos dentales (en ciertos casos)</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis adultos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis pediátrica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Infecciones leves a moderadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20–40 mg/kg/día en 3 dosis</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Infecciones graves</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>875 mg cada 12 h o 500 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>40–90 mg/kg/día en 2–3 dosis</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Absorción:</strong> Buena vía oral (95%)</li>
        <li><strong>Pico plasmático:</strong> 1–2 horas</li>
        <li><strong>Distribución:</strong> Amplia, incluida secreciones respiratorias y oído medio</li>
        <li><strong>Vida media:</strong> 1–1.5 horas</li>
        <li><strong>Eliminación:</strong> Renal, sin metabolización significativa</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Diarrea o molestias gastrointestinales</li>
        <li>Náuseas o vómitos</li>
        <li>Erupciones cutáneas (exantema)</li>
        <li>Reacciones alérgicas (rinitis, urticaria, anafilaxia en casos raros)</li>
        <li>Candidiasis oral o vaginal (uso prolongado)</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a penicilinas o betalactámicos</li>
        <li>Historial de reacción alérgica grave a amoxicilina o ampicilina</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alopurinol: aumenta riesgo de erupciones cutáneas</li>
        <li>Anticonceptivos orales: posible disminución de eficacia</li>
        <li>Anticoagulantes orales: aumento del INR en algunos casos</li>
        <li>Metotrexato: aumento de toxicidad por disminución de eliminación</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Puede administrarse con o sin alimentos</li>
        <li>Buena opción en niños por su sabor y tolerancia</li>
        <li>En infecciones resistentes, puede combinarse con ácido clavulánico</li>
        <li>Vigilar signos de alergia durante primeros días de uso</li>
      </ul>
    </div>
  );
}

export default Amoxicilina;
