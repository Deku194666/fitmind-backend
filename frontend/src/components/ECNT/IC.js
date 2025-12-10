

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InsuficienciaCardiaca() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Insuficiencia Cardíaca (IC)</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        La <strong>Insuficiencia Cardíaca (IC)</strong> es un síndrome clínico en el que el corazón no logra
        bombear sangre suficiente para cubrir las necesidades del organismo o lo hace a expensas de
        presiones de llenado elevadas. Es una causa importante de hospitalización y mortalidad,
        especialmente en personas mayores.  
      </p>

      <p className="p14">🧬 Fisiopatología</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫀 <strong>Disfunción sistólica</strong>: menor fracción de eyección (FE), contracción ineficaz.</li>
        <li>🫧 <strong>Disfunción diastólica</strong>: relajación/llenado alterados, presiones elevadas.</li>
        <li>🧪<strong>Activación neurohormonal</strong>: sistema renina–angiotensina–aldosterona y simpático → retención de sodio/agua, vasoconstricción.</li>
        <li>💥 <strong>Remodelado cardíaco</strong>: dilatación/hipertrofia que perpetúa el ciclo de <strong> IC</strong>.</li>
      </ul>

      <p className="p14">Clasificación</p>
      <p className="p150">Por fracción de eyección (FE):</p>

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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IC con FE reducida (HFrEF)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>FE &lt; 40% — disfunción sistólica predominante.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IC con FE levemente reducida (HFmrEF)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>FE 40–49% — fenotipo intermedio.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IC con FE preservada (HFpEF)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>FE ≥ 50% — disfunción diastólica y rigidez ventricular.</td>
          </tr>
        </tbody>
      </table>

      <p className="p150" style={{ marginTop: '2rem' }}>
        Por clase funcional (NYHA):
      </p>
      <table
        style={{
          width: '60%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          marginTop: '1rem',
          marginLeft: '6rem'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Limitación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sin limitación de actividad física habitual.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve limitación; síntomas con actividad moderada.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Marcada limitación; síntomas con actividad leve.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas en reposo o con mínima actividad.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">Causas ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Cardiopatía isquémica: <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>.</li>
        <li>📌 <Link to="/ecnt/hipertension">Hipertensión arterial</Link> de larga data.</li>
        <li>📌 <Link to="/ecnt/valvulopatias"  > Valvulopatías</Link>, Miocardiopatías (dilatada, hipertrófica), miocarditis.</li>
        <li>📌 <Link to="/ecnt/arritmias"> Arritmias </Link> persistentes (p. ej., fibrilación auricular rápida).</li>
        <li>📌 Tóxicos/fármacos: alcohol, quimioterápicos, drogas estimulantes.</li>
        <li>📌 Trastornos endocrinos/metabólicos: <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>, tiroideos, <Link to="/ecnt/obesidad">Obesidad</Link>.</li>
      </ul>

      <p className="p14">Síntomas frecuentes 🔍</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Disnea (de esfuerzo, ortopnea, disnea paroxística nocturna).</li>
        <li>📌 Fatiga, intolerancia al ejercicio.</li>
        <li>📌 Edemas en tobillos/piernas, aumento de peso por retención hídrica.</li>
        <li>📌 Tos nocturna, plenitud abdominal, ascitis en casos avanzados.</li>
      </ul>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Disnea severa en reposo, saturación baja, cianosis.</li>
        <li>🚨 Dolor torácico intenso o súbito (<Link to="/ecnt/iam">IAM</Link> asociado).</li>
        <li>🚨 Hipotensión, confusión, oliguria — sospecha de shock cardiogénico.</li>
        <li>🚨 <strong> Edema pulmonar </strong>agudo: tos con espuma rosada, ansiedad marcada.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <p className="p150">🩺 <strong>Examen físico</strong>: ingurgitación yugular, estertores, edemas, hepatomegalia.</p>
      <p className="p150">📈 <Link to="/examenes/ekg">  Electrocardiograma (EKG)</Link> y <Link to="/examenes/radiografia"> Radiografia </Link> de Tórax.</p>
      <p className="p150">🖥️ <Link to="/examenes/ecg">  Ecocardiograma (ECG)</Link>, FE, estructura, valvulopatías, presiones.</p>
      <p className="p150">🧪 <strong>Biomarcadores</strong>: BNP/NT-proBNP; hemograma, electrolitos, función renal/hepática, TSH.</p>
      <p className="p150">🧭 Pruebas funcionales/estrés o coronariografía en casos seleccionados.</p>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 1. Manejo agudo (descompensación)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫁 Oxígeno si es que hay hipoxemia, posición sentada, monitorización.</li>
        <li>💧 Diuréticos IV (p. ej., furosemida) para congestión.</li>
        <li>🧪 Vasodilatadores (seleccionados), control de presión/ritmo.</li>
        <li>🩺 Tratar causa precipitante (<Link to="/ecnt/iam">IAM</Link>, FA rápida, infección, exceso de sal/líquidos).</li>
      </ul>

      <p className="p16">📌 2. Manejo crónico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧬 <strong>Bloqueo neurohormonal</strong> (HFrEF): IECA/ARA II/ARNI, betabloqueadores, antagonistas de aldosterona.</li>
        <li>🧪 <strong>iSGLT2</strong> (beneficio en HFrEF y HFpEF seleccionados).</li>
        <li>💧 Diuréticos para control de volumen; educación en autorregulación.</li>
        <li>⚡ Dispositivos: resincronización (TRC) en criterios específicos; DAI en riesgo de muerte súbita.</li>
        <li>🫀 Manejo de comorbilidades: <Link to="/ecnt/hipertension">HTA</Link>, <Link to="/ecnt/diabetes">DM</Link>, FA, apnea del sueño.</li>
        <li>🧪 HFpEF: control de comorbilidades, presión arterial, volumen, iSGLT2 y ejercicio supervisado.</li>
      </ul>

      <p className="p14">🧘‍♂️ Tratamiento no farmacológico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🍽️ Restricción moderada de sodio; control de líquidos si indicado.</li>
        <li>⚖️ Control de peso diario; educación para reconocer descompensación.</li>
        <li>🏃‍♀️ Ejercicio/rehabilitación cardíaca según tolerancia.</li>
        <li>🚭 Evitar tabaco, moderar alcohol; vacunas al día (influenza/neumococo).</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫁 Edema pulmonar agudo.</li>
        <li>🧠 <Link to="/ecnt/acv">Accidente cerebrovascular</Link> (especialmente en FA no anticoagulada).</li>
        <li>🩸 Trombosis/embolias, disfunción renal/hepática por congestión.</li>
        <li>⚡ <Link to="/ecnt/arritmias"> Arritmias </Link> Ventriculares y muerte súbita.</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        La <strong>Insuficiencia Cardíaca</strong> es un síndrome crónico con episodios agudos que requiere diagnóstico oportuno,
        optimización de tratamiento (fármacos/dispositivos), autocuidado y control de comorbilidades. La educación,
        adherencia y seguimiento cercano reducen hospitalizaciones y mejoran la calidad de vida.
      </p>
    </div>
  );
}

export default InsuficienciaCardiaca;
