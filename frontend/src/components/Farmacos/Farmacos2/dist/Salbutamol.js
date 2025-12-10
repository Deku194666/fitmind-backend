


import React, { useEffect } from 'react';

function Salbutamol() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Salbutamol</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Salbutamol</strong> (también conocido como albuterol en algunos países) es un broncodilatador beta-2 adrenérgico de acción corta. Es ampliamente utilizado en el tratamiento del <strong>asma bronquial</strong>, la <strong>EPOC</strong> y otras enfermedades respiratorias con obstrucción reversible del flujo aéreo. Su uso principal es el alivio rápido de los síntomas respiratorios, como disnea y sibilancias.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Salbutamol actúa como agonista selectivo de los receptores <strong>beta-2 adrenérgicos</strong> en el músculo liso bronquial, provocando su relajación. Esto produce broncodilatación rápida y mejora del flujo aéreo. Tiene un inicio de acción rápido y una duración corta, por lo que se usa como medicamento de rescate.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alivio de la broncoconstricción en asma</li>
        <li>EPOC con obstrucción reversible</li>
        <li>Prevención del broncoespasmo inducido por ejercicio</li>
        <li>Asma aguda severa (uso hospitalario, vía nebulizada o IV)</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalatoria (inhalador presurizado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100–200 mcg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 4-6 h según necesidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nebulización</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2.5–5 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 6-8 h (o en crisis: cada 20 min por 1 h)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral (jarabe o comprimidos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2–4 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 6-8 h</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 5–15 minutos (inhalado)</li>
        <li><strong>Pico de acción:</strong> 30–60 minutos</li>
        <li><strong>Duración:</strong> 3–6 horas</li>
        <li><strong>Metabolismo:</strong> Hepático (conjugación)</li>
        <li><strong>Excreción:</strong> Renal, en su mayoría</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Temblor fino distal</li>
        <li>Taquicardia o palpitaciones</li>
        <li>Nerviosismo o ansiedad</li>
        <li>Cefalea</li>
        <li>Hipokalemia (en nebulización frecuente o dosis altas)</li>
        <li>Tolerancia con uso excesivo</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al salbutamol</li>
        <li>Precaución en pacientes con cardiopatía isquémica o taquiarritmias</li>
        <li>Evitar uso crónico sin corticoides inhalados en asma persistente</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Betabloqueadores no selectivos (ej. propranolol): pueden antagonizar su efecto</li>
        <li>Diuréticos y glucósidos digitálicos: riesgo aumentado de hipokalemia</li>
        <li>Antidepresivos tricíclicos o IMAOs: potencian efectos cardiovasculares</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Uso recomendado como medicamento de rescate</li>
        <li>Enseñar técnica correcta de inhalación al paciente</li>
        <li>Si se requiere más de 2 veces al día de forma habitual, considerar optimización del tratamiento controlador</li>
        <li>No sustituye al tratamiento antiinflamatorio de base (como budesonida)</li>
      </ul>
    </div>
  );
}

export default Salbutamol;
