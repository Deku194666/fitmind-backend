

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
        El <strong>Salbutamol</strong> (también conocido como albuterol en algunos países) es un agonista β<sub>2</sub>-adrenérgico de acción corta. Se utiliza principalmente como broncodilatador para el alivio rápido de síntomas respiratorios en enfermedades como el asma y la enfermedad pulmonar obstructiva crónica (EPOC).
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        El Salbutamol se une a los receptores β<sub>2</sub>-adrenérgicos en el músculo liso bronquial, activando la adenilato ciclasa y aumentando los niveles de AMPc. Esto lleva a la relajación del músculo liso de las vías aéreas, produciendo broncodilatación rápida.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alivio de broncoespasmo en asma</li>
        <li>Tratamiento del broncoespasmo en EPOC</li>
        <li>Profilaxis del asma inducida por ejercicio</li>
        <li>Tratamiento agudo de exacerbaciones asmáticas</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalatoria (MDI o nebulizador)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Asma / EPOC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100–200 mcg cada 4–6 h según necesidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral (menos utilizado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Asma bronquial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2–4 mg cada 8 h</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 5 minutos (inhalado)</li>
        <li><strong>Duración:</strong> 4–6 horas</li>
        <li><strong>Metabolismo:</strong> Hepático parcial</li>
        <li><strong>Excreción:</strong> Renal (principalmente como metabolito inactivo)</li>
        <li><strong>Biodisponibilidad:</strong> Alta por vía inhalatoria, variable por vía oral</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Temblor fino</li>
        <li>Taquicardia</li>
        <li>Nerviosismo</li>
        <li>Dolor de cabeza</li>
        <li>Hipopotasemia (en altas dosis)</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al salbutamol o componentes de la fórmula</li>
        <li>Uso cauteloso en pacientes con enfermedades cardiovasculares graves</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Betabloqueadores no selectivos (p. ej., propranolol): pueden antagonizar su efecto</li>
        <li>Diuréticos y corticosteroides: mayor riesgo de hipopotasemia</li>
        <li>ISRS o IMAO: riesgo teórico de efectos cardiovasculares</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Uso bajo demanda, no como tratamiento de mantenimiento</li>
        <li>Educar sobre técnica adecuada de inhalación</li>
        <li>Evaluar uso excesivo (mayor a 2 veces por semana): puede indicar mal control del asma</li>
        <li>Puede combinarse con corticosteroides inhalados para mayor control</li>
      </ul>
    </div>
  );
}

export default Salbutamol;
