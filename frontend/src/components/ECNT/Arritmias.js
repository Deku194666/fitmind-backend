

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Arritmias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Arritmias Cardíacas</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        Las <strong>Arritmias</strong> son alteraciones del ritmo o la conducción eléctrica del corazón
        (más rápidas, más lentas o irregulares que lo normal). Su relevancia clínica varía desde
        cuadros benignos hasta situaciones potencialmente mortales. <br />
       </p>

      <p className="p14">🧬 Fisiopatología</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🔁 <strong>Automaticidad anormal:</strong> foco ectópico que dispara impulsos fuera del nodo sinusal.</li>
        <li>🔄 <strong>Reentrada:</strong> circuito eléctrico que perpetúa la arritmia (p. ej., TPSV, flutter).</li>
        <li>⛔ <strong>Trastornos de conducción:</strong> bloqueos auriculoventriculares o intraventriculares.</li>
        <li>⚡ <strong>Despolarización gatillada:</strong> pospotenciales que desencadenan taquiarritmias.</li>
      </ul>

      <p className="p14">Clasificación</p>
      <p className="p150">Según origen y velocidad del ritmo:</p>

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
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos / Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supraventriculares (taquicardias)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Fibrilación auricular (FA), flutter auricular, TPSV (reentrada nodal), taquicardia auricular.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ventriculares (taquicardias)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Taquicardia ventricular (TV), fibrilación ventricular (FV) — mayor riesgo de muerte súbita.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bradiarritmias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Disfunción del nodo sinusal, bloqueos AV (I, II, III), pausas prolongadas.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extrasístoles</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Auriculares o ventriculares; suelen ser benignas si no hay cardiopatía estructural.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14">Causas ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Cardiopatía isquémica: <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>.</li>
        <li>📌 <Link to="/ecnt/hipertension">Hipertensión arterial</Link> y <Link to="/ecnt/dislipidemia">Dislipidemia</Link>.</li>
        <li>📌 <Link to="/ecnt/diabetes">Diabetes mellitus</Link>, <Link to="/ecnt/obesidad">Obesidad</Link>, Apnea del sueño.</li>
        <li>📌 Miocardiopatías, <Link to="/ecnt/valvulopatias">Valvulopatías</Link>, miocarditis.</li>
        <li>📌 Fármacos/estimulantes: cafeína, alcohol, cocaína, anfetaminas; algunos antiarrítmicos.</li>
        <li>📌 Trastornos electrolíticos (K⁺, Mg²⁺, Ca²⁺) y tiroideos (hiper/hipotiroidismo).</li>
      </ul>

      <p className="p14">Síntomas frecuentes 🔍</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Palpitaciones (latidos rápidos/irregulares) o pausas.</li>
        <li>📌 Disnea, fatiga, intolerancia al ejercicio.</li>
        <li>📌 Mareo, presíncope o síncope.</li>
        <li>📌 Dolor torácico o ansiedad asociada a la percepción del pulso.</li>
      </ul>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Síncope o pérdida de conciencia.</li>
        <li>🚨 Dolor torácico intenso, disnea severa o cianosis.</li>
        <li>🚨 Palpitaciones con mareo marcado o hipotensión.</li>
        <li>🚨 Sospecha de TV/FV — situación potencialmente letal.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <p className="p150">📈 <strong> <Link to="/examenes/ekg"> EKG</Link> de 12 derivaciones</strong>: identificador clave del tipo de arritmia.</p>
      <p className="p150">📊 <strong>Holter/monitoreo ambulatorio</strong> o parches/event recorder si es intermitente.</p>
      <p className="p150">🧪 <strong>Laboratorio:</strong> electrolitos, función tiroidea, marcadores si hay dolor torácico.</p>
      <p className="p150">🖥️ <strong><Link to="/examenes/ecg"> ECG </Link></strong> para evaluar estructura y función cardíaca.</p>
      <p className="p150">🧭 <strong>Estudio electrofisiológico</strong> en casos seleccionados (diagnóstico/ablación).</p>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 1. Manejo agudo</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫁 <strong>Soporte ABC</strong>, monitorización, vía venosa y<Link to="/examenes/ecg">  ECG </Link>continuo.</li>
        <li>🫀 <strong>Cardioversión eléctrica</strong> sincronizada en inestabilidad hemodinámica.</li>
        <li>🫱🏻‍🫲🏼 <strong>Maniobras vagales</strong> en TPSV; <Link to="/farmacos/otrosantiarritmicos">Adenosina</Link> si procede.</li>
        <li>💉 Antiarrítmicos según tipo (p. ej., amiodarona en TV estable, betabloqueadores en FA con RVR).</li>
      </ul>

      <p className="p16">📌 2. Manejo crónico / prevención</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>💊 Control de <strong>frecuencia o ritmo</strong> (FA/flutter) y <strong>anticoagulación</strong> según riesgo de <Link to="/ecnt/acv">ACV</Link>.</li>
        <li>🛠️ <strong>Ablación por catéter</strong> en TPSV, flutter típico y FA/TV seleccionadas.</li>
        <li>🔌 <strong>Marcapasos</strong> en bradiarritmias sintomáticas / bloqueo AV avanzado.</li>
        <li>⚡ <strong>Desfibrilador implantable (DAI)</strong> en alto riesgo de muerte súbita (TV/FV).</li>
        <li>🫗 Corrección de <strong>electrolitos</strong> y tratamiento de causas subyacentes (<Link to="/ecnt/iam">IAM</Link>, <Link to="/ecnt/hipertension">HTA</Link>, hipertiroidismo, apnea del sueño).</li>
      </ul>

      <p className="p14">🧘‍♂️ Tratamiento no farmacológico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🍎 Estilo de vida cardiosaludable (peso, dieta, ejercicio según indicación).</li>
        <li>🚭 Evitar tabaco, exceso de alcohol y estimulantes (cafeína elevada, drogas).</li>
        <li>😴 Manejo de estrés y trastornos del sueño; adherencia a controles.</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧠 <Link to="/ecnt/acv">Accidente cerebrovascular</Link> (especialmente en FA no anticoagulada).</li>
        <li>🫀 <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link> o empeoramiento de cardiopatía estructural.</li>
        <li>⚡ Muerte súbita (TV/FV), síncope y lesiones asociadas a caídas.</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        Las <strong>Arritmias</strong> abarcan desde cuadros benignos a emergencias vitales.
        El diagnóstico oportuno con <Link to="/examenes/ecg"> ECG</Link>/monitoreo y el manejo dirigido (control de causa, fármacos,
        ablación o dispositivos) reducen complicaciones como <Link to="/ecnt/acv">ACV</Link> y muerte súbita.
        Mantener hábitos cardiosaludables y controles periódicos es clave para prevenir y tratar adecuadamente.
      </p>
    </div>
  );
}

export default Arritmias;
