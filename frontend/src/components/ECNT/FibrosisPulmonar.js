

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FibrosisPulmonar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fibrosis Pulmonar</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        La <strong>Fibrosis Pulmonar</strong> es un grupo de enfermedades intersticiales en las que el tejido del pulmón
        se cicatriza (<em>fibrosis</em>), volviéndose rígido y dificultando el intercambio de oxígeno. Cursa con
        <strong> disnea progresiva</strong> y <strong>tos seca</strong>. Puede ser <em>idiopática</em> (sin causa conocida) o secundaria a
        exposiciones, fármacos y enfermedades autoinmunes. 
      </p>

      <p className="p14">🧬 Fisiopatología</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫁 Lesión repetida del epitelio alveolar → activación de fibroblastos y miofibroblastos.</li>
        <li>🧪 Depósito de colágeno y matriz extracelular → engrosamiento intersticial y pérdida de elasticidad.</li>
        <li>📉 Disminución de la <strong>capacidad de difusión (DLCO)</strong> y patrón <strong>restrictivo</strong> en espirometría.</li>
        <li>🧯 Microvasculatura alterada → hipoxemia con el ejercicio, luego en reposo.</li>
      </ul>

      <p className="p14">Clasificación</p>
      <p className="p150">Por etiología y patrón:</p>

      <table
        style={{
          width: '60%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          marginTop: '4rem',
          marginLeft: '6rem'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fibrosis pulmonar idiopática (FPI)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Curso crónico; patrón <strong>UIP</strong> en TACAR (panalización, predominio subpleural/basal).
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Secundaria a autoinmunidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              AR, ES, miositis; suele mostrar <strong>NSIP</strong> u otros patrones; responde a inmunomodulación.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Exposición/ocupacional</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Sílice, asbesto, polvo metal/madera, agricultura; prevención clave (EPP).
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fármacos/radiación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Bleomicina, nitrofurantoína, amiodarona, metotrexato; radioterapia torácica.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Causas y factores de riesgo ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Tabaquismo y exposiciones laborales/ambientales prolongadas.</li>
        <li>📌 Enfermedades del tejido conectivo (artritis reumatoide, esclerosis sistémica, miositis).</li>
        <li>📌 Fármacos/fitoquímicos; radioterapia; infecciones previas.</li>
        <li>📌 Edad &gt; 60 años, sexo masculino (en FPI), susceptibilidad genética/familiar.</li>
        <li>📌 Reflujo gastroesofágico severo y microaspiración (asociación descrita).</li>
      </ul>

      <p className="p14">Síntomas frecuentes 🔍</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Disnea de esfuerzo progresiva; luego de reposo en fases avanzadas.</li>
        <li>📌 Tos seca persistente.</li>
        <li>📌 Estertores inspiratorios “<em>velcro</em>” en bases pulmonares.</li>
        <li>📌 Acropaquia (uñas en palillo de tambor) en algunos casos.</li>
        <li>📌 Fatiga, pérdida de peso, limitación funcional.</li>
      </ul>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Disnea de inicio súbito o marcada (sospecha de <strong>exacerbación aguda</strong> o neumotórax).</li>
        <li>🚨 Cianosis, saturación de O₂ muy baja, confusión o somnolencia.</li>
        <li>🚨 Dolor torácico súbito, hemoptisis, fiebre alta con deterioro respiratorio.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🖥️ <strong>TACAR (<Link to="/examenes/tc">TC </Link> de alta resolución)</strong>: patrón (UIP, NSIP, OP, DIP), extensión y distribución.</li>
        <li>📈 <strong>Pruebas de función pulmonar</strong>: patrón restrictivo (↓ FVC) y ↓ DLCO.</li>
        <li>🏃 <strong>Prueba de caminata 6 min</strong>, oximetría/gasometría (hipoxemia esfuerzo/reposo).</li>
        <li>🧪 Serologías autoinmunidad, búsqueda etiológica; BAL/biopsia en casos seleccionados.</li>
        <li>👥 <strong>Discusión multidisciplinaria</strong> (neumología–radiología–patología) cuando hay duda diagnóstica.</li>
      </ul>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 Antifibróticos (FPI)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>💊 <strong>Pirfenidona</strong> o <strong>nintedanib</strong>: enlentecen el declive de FVC; requieren seguimiento de efectos adversos.</li>
        <li>💉 Evitar corticoides crónicos en FPI salvo <strong>exacerbaciones</strong> o entidades específicas.</li>
      </ul>

      <p className="p16">📌 Etiologías secundarias</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧪 Inmunomodulación en <strong>enfermedades autoinmunes</strong> (según reumatología).</li>
        <li>🧯 Suspensión de fármacos causales y control de exposiciones.</li>
      </ul>

      <p className="p16">📌 Soporte y rehabilitación</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫁 <strong>Oxigenoterapia</strong> si es que hay hipoxemia; mejora tolerancia al esfuerzo y calidad de vida.</li>
        <li>🏃‍♀️ <strong>Rehabilitación pulmonar</strong>, entrenamiento de marcha y respiración.</li>
        <li>💉 Vacunas al día (influenza, neumococo), manejo de reflujo y nutrición.</li>
        <li>🩺 <strong>Derivación a trasplante pulmonar</strong> en casos seleccionados (criterios de centro).</li>
        <li>🤝 Cuidados paliativos/soporte psicosocial en enfermedad avanzada.</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>⚡ Exacerbación aguda (empeoramiento rápido con infiltrados nuevos).</li>
        <li>🫁 Hipertensión pulmonar asociada, cor pulmonale.</li>
        <li>🫠 Neumotórax, infecciones respiratorias recurrentes.</li>
        <li>📉 Desnutrición, sarcopenia, limitación severa del ejercicio.</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        La <strong>Fibrosis Pulmonar</strong> requiere diagnóstico preciso (TACAR + función pulmonar) y manejo integral:
        control etiológico, antifibróticos en FPI, oxígeno y rehabilitación. El seguimiento periódico permite detectar
        exacerbaciones, optimizar soporte y evaluar trasplante en casos adecuados, buscando mantener la mejor calidad de vida.
      </p>
    </div>
  );
}

export default FibrosisPulmonar;
