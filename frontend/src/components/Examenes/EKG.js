

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Electrocardiograma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Electrocardiograma (ECG / EKG)</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        El <strong>Electrocardiograma (ECG/EKG)</strong> es una prueba no invasiva que registra la
        actividad eléctrica del corazón mediante electrodos en la piel. Permite evaluar <em>ritmo,
        conducción e isquemia</em>, entre otras alteraciones. 
      </p>

      <p className="p14">¿Para qué sirve?</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🔎 Detección de <Link to="/ecnt/arritmias">arritmias</Link> (p. ej., FA, TPSV, extrasístoles).</li>
        <li>❤️ Sospecha de isquemia/infarto: ver <Link to="/ecnt/iam">IAM</Link>.</li>
        <li>⚡ Trastornos de conducción (bloqueos AV, de rama), <Link to="/ecnt/insuficienciacardiaca">IC</Link> asociada.</li>
        <li>🧪 Efectos de fármacos/electrolitos (p. ej., QT prolongado por hipocalemia/medicamentos).</li>
        <li>🩺 Control en chequeos o previo a procedimientos.</li>
      </ul>

      <p className="p14">Cómo se realiza 🧰</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se colocan <strong>10 electrodos</strong> (extremidades y precordiales) y se registra un ECG de 12 derivaciones.</li>
        <li>Duración: 5–10 minutos. <strong>Indoloro</strong>; puede requerir rasurar vello torácico.</li>
        <li>No requiere ayuno. Llevar lista de fármacos (betabloqueadores, antiarrítmicos, etc.).</li>
      </ul>

      <p className="p14">Componentes e interpretación básica 📈</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Onda P</strong>: despolarización auricular.</li>
        <li><strong>Complejo QRS</strong>: despolarización ventricular.</li>
        <li><strong>Onda T</strong>: repolarización ventricular (QT = despol.+repol.).</li>
        <li><strong>Ritmo</strong> (sinusal u otro), <strong>frecuencia</strong>, <strong>eje</strong>, intervalos y <strong>segmento ST</strong>.</li>
      </ul>

      <table
        style={{
          width: '70%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          marginTop: '2rem',
          marginLeft: '4rem'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Parámetro</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rango orientativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60–100 lpm (adulto en reposo)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>PR</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>120–200 ms</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>QRS</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>&lt; 120 ms (ancho sugiere bloqueo de rama/VT)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>QTc</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>&lt; 440–460 ms (prolongado = riesgo de Torsade)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Eje eléctrico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aprox. −30° a +90° (adulto)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Hallazgos frecuentes 🧩</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>FA: ritmo <strong>irregularmente irregular</strong>, ausencia de ondas P.</li>
        <li>STEMI: <strong>elevación ST</strong> en derivaciones contiguas ± depresión recíproca (ver <Link to="/ecnt/iam">IAM</Link>).</li>
        <li>NSTEMI/Isquemia: <strong>depresión ST</strong> / inversión de T.</li>
        <li>Bloqueos de rama (QRS ancho con morfología típica), bloqueos AV (PR prolongado/caídas).</li>
        <li>Hipertrofia ventricular izquierda: voltajes aumentados + repolarización secundaria.</li>
        <li>QTc prolongado/corto por fármacos o electrolitos.</li>
      </ul>

      <p className="p14">Cuándo consultar de urgencia 🚑</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Dolor torácico opresivo, sudoración, náuseas → posible <Link to="/ecnt/iam">IAM</Link>.</li>
        <li>🚨 Palpitaciones con mareo/síncope, disnea intensa o hipotensión (taqui/bradi inestables).</li>
        <li>🚨 Cambios súbitos del estado de conciencia o focalidad neurológica (riesgo de <Link to="/ecnt/acv">ACV</Link>).</li>
      </ul>

      <p className="p14">Limitaciones y alternativas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Un <strong> EKG </strong> “normal” no descarta isquemia si el dolor es intermitente; considerar **seriados** y marcadores.</li>
        <li>Arritmias <strong>intermitentes</strong> pueden requerir <strong>Holter/monitor</strong> de eventos.</li>
        <li>Artefactos o <strong>mal posicionamiento</strong> de electrodos alteran la lectura (repetir si duda).</li>
      </ul>

      <p className="p14">Riesgos 🤏</p>
      <p className="p150">
        Mínimos: irritación leve en piel por adhesivos. No emite radiación ni “descarga” al paciente.
      </p>

      <p className="p14">Consejos prácticos ✅</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar cremas en el pecho el día del examen; ropa fácil de quitar.</li>
        <li>Descansar 5 min antes; informar fármacos (antiarrítmicos, QT prolongadores).</li>
        <li>Si hay síntomas típicos con <strong>EKG</strong> normal, repetir y completar estudio (enzimas, eco, prueba de esfuerzo según criterio médico).</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        El <strong>EKG</strong> es una herramienta esencial para evaluar ritmo, conducción e isquemia. Su correcta
        realización e interpretación, junto con la clínica y otros estudios, permite detectar y tratar a tiempo
        condiciones como <Link to="/ecnt/arritmias">arritmias</Link>, <Link to="/ecnt/iam">IAM</Link> e <Link to="/ecnt/insuficienciacardiaca">Insuficiencia Cardiaca</Link>.
      </p>
    </div>
  );
}

export default Electrocardiograma;
