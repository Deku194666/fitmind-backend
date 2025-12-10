

import React, { useEffect } from 'react';

function Atorvastatina() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Atorvastatina</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        La <strong>Atorvastatina</strong> es un fármaco hipolipemiante perteneciente al grupo de las estatinas. Se utiliza para disminuir los niveles de colesterol y triglicéridos en sangre, reduciendo así el riesgo cardiovascular en pacientes con hipercolesterolemia, dislipidemia mixta o enfermedad cardiovascular establecida.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe competitivamente la enzima <strong>HMG-CoA reductasa</strong>, clave en la biosíntesis hepática de colesterol. Esto reduce la síntesis de colesterol y aumenta la expresión de receptores de LDL en el hígado, incrementando la depuración de LDL-colesterol circulante.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipercolesterolemia primaria (tipo IIa)</li>
        <li>Dislipidemia mixta (tipo IIb)</li>
        <li>Prevención primaria de enfermedad cardiovascular en pacientes con factores de riesgo</li>
        <li>Prevención secundaria en pacientes con enfermedad cardiovascular aterosclerótica</li>
        <li>Hiperlipidemia familiar homocigota (como adyuvante)</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis inicial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rango habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipercolesterolemia / dislipidemia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg al día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10–80 mg al día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevención cardiovascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10–20 mg al día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 80 mg según riesgo</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Absorción:</strong> Rápida, con biodisponibilidad del 14%</li>
        <li><strong>Pico plasmático:</strong> 1–2 horas</li>
        <li><strong>Metabolismo:</strong> Hepático (CYP3A4)</li>
        <li><strong>Vida media:</strong> Aproximadamente 14 horas</li>
        <li><strong>Eliminación:</strong> Principalmente por vía biliar</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Dolor muscular o mialgias</li>
        <li>Elevación de enzimas hepáticas</li>
        <li>Diarrea o molestias gastrointestinales</li>
        <li>Cefalea</li>
        <li>Insomnio</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Enfermedad hepática activa o elevaciones persistentes de transaminasas</li>
        <li>Embarazo y lactancia</li>
        <li>Hipersensibilidad a atorvastatina</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Inhibidores potentes de CYP3A4 (claritromicina, ketoconazol): aumentan niveles plasmáticos</li>
        <li>Alcohol o fármacos hepatotóxicos: aumentan riesgo de toxicidad hepática</li>
        <li>Fibratos (especialmente gemfibrozilo): riesgo de miopatía y rabdomiólisis</li>
        <li>Jugo de pomelo: puede aumentar toxicidad</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Realizar control de transaminasas antes de iniciar y periódicamente durante el tratamiento</li>
        <li>Advertir al paciente sobre síntomas de miopatía (dolor muscular persistente, debilidad)</li>
        <li>Administrar preferentemente por la noche, aunque la atorvastatina tiene vida media más larga que otras estatinas</li>
        <li>Considerar cambio de estatina o ajuste de dosis si hay efectos adversos musculares</li>
      </ul>
    </div>
  );
}

export default Atorvastatina;
