

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Ateroesclerosis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Ateroesclerosis</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        La <strong>Ateroesclerosis</strong> es un proceso crónico en el que se acumulan lípidos,
        células inflamatorias y tejido fibroso en la pared de las arterias formando <em>placas</em>.
        Estas placas pueden estrechar u obstruir el flujo sanguíneo y romperse, causando trombosis.
        Es la base de la mayoría de las <strong>Enfermedades Cardiovasculares</strong> (<Link to="/ecnt/iam">Infarto Agudo al Miocardio (IAM)</Link>, <Link to="/ecnt/acv">Accidente CerebroVascular (ACV)</Link>, <strong> Enfermedad
        Arterial Periférica</strong>). 
      </p>

      <p className="p14">🧬 Fisiopatología</p> 
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🩸 <strong>Disfunción endotelial</strong> por factores de riesgo (<Link to="/ecnt/hipertension">Hipertensión Arterial</Link>, tabaquismo, hiperglucemia).</li>
        <li>🧲 <strong>Acúmulo de LDL</strong> en íntima arterial y oxidación lipídica.</li>
        <li>🧪 <strong>Inflamación</strong>: entrada de monocitos/macrófagos → células espumosas.</li>
        <li>🧱 <strong>Placa fibroateromatosa</strong>: núcleo lipídico + capa fibrosa.</li>
        <li>⚡ <strong>Rotura/erosión</strong> de placa → trombo agudo y oclusión.</li>
      </ul>

      <p className="p14">Clasificación (por territorio afectado)</p>
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
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Territorio</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Coronario</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Angina, <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cerebrovascular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              AIT / <Link to="/ecnt/acv">ACV isquémico</Link>.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Periférico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Claudicación intermitente, dolor en reposo, úlceras.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aorta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Aneurisma/rotura; placas ulceradas.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Renal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Estenosis de arteria renal, HTA resistente.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Causas y Factores de Riesgo ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 <Link to="/ecnt/dislipidemia">Dislipidemia</Link> (LDL alto, HDL bajo, hipertrigliceridemia).</li>
        <li>📌 <Link to="/ecnt/hipertension">Hipertensión arterial</Link>.</li>
        <li>📌 <Link to="/ecnt/diabetes">Diabetes mellitus</Link>, resistencia a la insulina.</li>
        <li>📌 Tabaquismo (activo y pasivo).</li>
        <li>📌 <Link to="/ecnt/obesidad">Obesidad</Link>, Sedentarismo, dieta alta en ultraprocesados y sodio.</li>
        <li>📌 Edad, sexo masculino pospuberal, menopausia, historia familiar precoz.</li>
        <li>📌 Enfermedad renal crónica, inflamación crónica (ej., artritis reumatoide).</li>
      </ul>

      <p className="p14">Síntomas frecuentes 🔍</p>
      <p className="p150">
        Puede ser <strong>asintomática</strong> durante años. Se manifiesta según el territorio: dolor torácico con esfuerzo,
        claudicación de pantorrillas al caminar, episodios neurológicos focales transitorios (AIT), disfunción eréctil.
      </p>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Dolor torácico opresivo prolongado → sospecha de <Link to="/ecnt/iam">IAM</Link>.</li>
        <li>🚨 Déficit neurológico súbito (debilidad, habla, visión) → <Link to="/ecnt/acv">ACV</Link>.</li>
        <li>🚨 Dolor de pierna en reposo con palidez/frialdad → isquemia crítica.</li>
        <li>🚨 Dolor abdominal/ lumbar súbito intenso → aneurisma aórtico roto.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧪 Perfil lipídico (LDL, HDL, TG), glicemia/HbA1c, función renal.</li>
        <li>📈 Índice tobillo-brazo (ITB) en sospecha periférica.</li>
        <li>🖥️ Ecografía Doppler, angio-TC/RM, ecografía carotídea (placas/estenosis).</li>
        <li>🩺 Estratificación de riesgo global (p. ej., SCORE/Framingham) y calcio coronario (seleccionados).</li>
      </ul>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 1. Control de factores de riesgo</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>💊 Estatinas (reducción de LDL); considerar ezetimiba/PCSK9 en alto riesgo.</li>
        <li>💊 Control de <Link to="/ecnt/hipertension">HTA</Link> y <Link to="/ecnt/diabetes">DM</Link> según guías.</li>
        <li>💊 Antiagregación plaquetaria (aspirina) en prevención secundaria o casos seleccionados.</li>
        <li>🚭 Cese tabáquico, manejo de peso y actividad física regular.</li>
      </ul>

      <p className="p16">📌 2. Revascularización (según territorio/síntomas)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🩻 Angioplastia con stent (coronaria, periférica) o cirugía de bypass.</li>
        <li>🫀 Endarterectomía carotídea o stent en estenosis significativa seleccionada.</li>
      </ul>

      <p className="p14">🧘‍♂️ Tratamiento no farmacológico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🍎 Dieta cardioprotectora (Mediterránea/DASH): rica en frutas, verduras, fibra, omega-3.</li>
        <li>🏃‍♀️ Ejercicio aeróbico + fuerza 150–300 min/sem si es posible.</li>
        <li>🧂 Reducción de sodio; evitar ultraprocesados y grasas trans.</li>
        <li>🧘 Manejo del estrés y sueño adecuado.</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫀 <Link to="/ecnt/iam">Infarto de miocardio</Link>, angina inestable.</li>
        <li>🧠 <Link to="/ecnt/acv">ACV isquémico</Link> y AIT.</li>
        <li>🦵 Isquemia crítica de extremidades, amputación.</li>
        <li>🫧 Aneurisma/rotura aórtica, embolia periférica.</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        La <strong>Ateroesclerosis</strong> es prevenible y tratable. El control intensivo de factores de riesgo,
        cambios de estilo de vida y terapias dirigidas reducen eventos mayores (<Link to="/ecnt/iam">IAM</Link>/<Link to="/ecnt/acv">ACV</Link>) y mejoran la
        calidad y expectativa de vida. La detección precoz y el seguimiento estructurado son clave.
      </p>
    </div>
  );
}

export default Ateroesclerosis;
