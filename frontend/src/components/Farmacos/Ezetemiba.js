

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Ezetimiba() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Ezetimiba</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        La <strong>Ezetimiba</strong> es un fármaco hipolipemiante que actúa inhibiendo la absorción intestinal de colesterol. Se utiliza principalmente como 
        complemento de las estatinas en el tratamiento de la <strong>hipercolesterolemia</strong>, especialmente en pacientes que no alcanzan metas de LDL-C 
        solo con estatinas o que presentan intolerancia a estas.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Inhibe de forma selectiva el transportador <strong>NPC1L1</strong> (Niemann-Pick C1-Like 1) en el borde en cepillo del intestino delgado, reduciendo
        la absorción del colesterol dietario y biliar. Esto genera una disminución del colesterol hepático y un aumento en la captación de LDL desde la sangre.
      </p>

      <p className="p14">💊 Presentación y Dosis</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis Habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ezetimiba</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg una vez al día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Monoterapia o combinación con estatinas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipercolesterolemia primaria (combinada con estatinas o en monoterapia).</li>
        <li>Intolerancia parcial o total a estatinas.</li>
        <li>Hipercolesterolemia familiar heterocigota.</li>
        <li>Prevención secundaria de eventos cardiovasculares en combinación con estatinas (ej. estudio IMPROVE-IT).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Diarrea, flatulencias.</li>
        <li>Dolor abdominal.</li>
        <li>Elevación leve de transaminasas (más frecuente en combinación con estatinas).</li>
        <li>Fatiga, mialgias.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No afecta la absorción de vitaminas liposolubles.</li>
        <li>Buena opción en combinación con estatinas cuando no se logra el objetivo de LDL-C.</li>
        <li>Evaluar función hepática al iniciar tratamiento combinado con estatinas.</li>
        <li>No se recomienda en pacientes con insuficiencia hepática moderada o grave.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        La <strong>Ezetimiba</strong> es una herramienta eficaz y segura para el tratamiento de la dislipidemia, especialmente como complemento a las estatinas. Su
        mecanismo único permite una acción sinérgica, logrando reducciones adicionales del colesterol LDL sin aumentar significativamente los efectos adversos.
      </p>
    </div>
  );
}

export default Ezetimiba;
