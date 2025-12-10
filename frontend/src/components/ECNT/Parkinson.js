

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function EnfermedadDeParkinson() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Enfermedad de Parkinson (EP)</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        La <strong>Enfermedad de Parkinson (EP)</strong> es un trastorno neurodegenerativo progresivo cuyo núcleo
        clínico son los <em>síntomas motores</em> (bradicinesia, rigidez, temblor de reposo, inestabilidad postural) y
        múltiples <em>síntomas no motores</em> (sueño, ánimo, cognición, autonómicos). Se asocia a pérdida de neuronas dopaminérgicas
        en la sustancia negra y acumulación de <em>α-sinucleína</em>.
      </p>

      <p className="p14">🧬 Fisiopatología</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧠 Degeneración de neuronas dopaminérgicas nigroestriatales → déficit dopamina en ganglios basales.</li>
        <li>🔬 Cuerpos de Lewy (α-sinucleína) en regiones específicas del SNC, progresión rostro-caudal.</li>
        <li>⚖️ Desbalance de circuitos motores (vías directa/indirecta) → bradicinesia y rigidez.</li>
        <li>🧩 Afectación no dopaminérgica (colinérgica, noradrenérgica, serotoninérgica) → síntomas no motores.</li>
      </ul>

      <p className="p14">Clasificación (estadificación Hoehn &amp; Yahr)</p>
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
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estadio</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Unilateral, mínima discapacidad.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bilateral, sin inestabilidad postural.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad postural leve-moderada; independiente.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Marcada limitación; requiere ayuda para algunas actividades.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>V</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confinado a silla/cama sin asistencia.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Causas y factores de riesgo ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Edad avanzada (pico inicio 60–70 a.).</li>
        <li>📌 Combinación de factores genéticos (mutaciones poco frecuentes) y ambientales.</li>
        <li>📌 Exposición a pesticidas/solventes; traumatismos craneales repetidos.</li>
        <li>📌 Historia familiar (minoría de casos).</li>
      </ul>

      <p className="p14">Síntomas</p>
      <p className="p16">🔧 Motores</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Bradicinesia (lentitud), rigidez, temblor de reposo (4–6 Hz), hipomimia, marcha festinante.</li>
        <li>📌 Inestabilidad postural y caídas en etapas avanzadas.</li>
        <li>📌 Micrografía, hipofonía, congelamiento de la marcha (“freezing”).</li>
      </ul>
      <p className="p16">🧩 No motores</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>😴 Trastornos del sueño (REM, insomnio), fatiga.</li>
        <li>🧠 Ansiedad, depresión, apatía; deterioro cognitivo/demencia en fases avanzadas.</li>
        <li>🫗 Disautonomía: constipación, hipotensión ortostática, urgencia urinaria, sialorrea.</li>
        <li>👃 Hiposmia (disminución del olfato), dolor, parestesias.</li>
      </ul>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Caídas con traumatismo o incapacidad para ponerse de pie.</li>
        <li>🚨 Confusión aguda, fiebre y rigidez severa (sospecha de síndrome neuroléptico maligno por retirada brusca de dopaminérgicos).</li>
        <li>🚨 Aspiración, disfagia marcada o dificultad respiratoria.</li>
        <li>🚨 Cambios súbitos del estado de conciencia o alucinaciones severas.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🩺 <strong>Clínico</strong>: bradicinesia + (temblor de reposo o rigidez) y respuesta a levodopa.</li>
        <li>🧠 Neuroimagen estructural para descartar otras causas; DAT-SPECT en casos dudosos.</li>
        <li>🧪 Evaluación de síntomas no motores y funcionalidad (escalas clínicas).</li>
      </ul>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 Manejo farmacológico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>💊 <strong>Levodopa/carbidopa</strong>: más eficaz para síntomas motores; riesgo de fluctuaciones y discinesias con los años.</li>
        <li>💊 <strong>Agonistas dopaminérgicos</strong>, <strong>IMAO-B</strong>, <strong>COMT</strong>; <strong>amantadina</strong> para discinesias.</li>
        <li>💊 Tratamiento dirigido a síntomas no motores (depresión, sueño, dolor, constipación).</li>
      </ul>
      <p className="p16">🛠️ Procedimientos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>⚡ <strong>Estimulación cerebral profunda (DBS)</strong> en pacientes seleccionados con buena respuesta a levodopa pero con fluctuaciones/discinesias.</li>
        <li>🧃 Bombas de infusión intestinal (levodopa) en casos específicos.</li>
      </ul>
      <p className="p16">🧘‍♂️ Manejo no farmacológico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🏃‍♀️ <strong>Fisioterapia</strong> (fuerza, equilibrio, marcha); <strong>terapia ocupacional</strong>; <strong>fonoaudiología</strong> (voz/deglución).</li>
        <li>🍎 Nutrición adecuada; fibra/hidratación para constipación.</li>
        <li>🧠 Apoyo psicológico y educación del paciente/cuidador; <Link to="/bienestar/estrés">manejo del estrés</Link>.</li>
        <li>🧯 Prevención de caídas: ayudas técnicas, adecuación del hogar.</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🔄 Fluctuaciones motoras (“on/off”), discinesias inducidas por levodopa.</li>
        <li>🤕 Caídas, fracturas; congelamiento de la marcha.</li>
        <li>🫁 Neumonía aspirativa, infecciones intercurrentes.</li>
        <li>🧠 Trastornos cognitivos, psicosis, depresión/ansiedad.</li>
        <li>🫗 Problemas autonómicos (hipotensión ortostática, constipación severa).</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        La <strong>Enfermedad de Parkinson</strong> requiere abordaje integral y personalizado: fármacos, rehabilitación,
        educación y soporte psicosocial. El seguimiento periódico permite ajustar terapias, prevenir complicaciones
        y mantener la mejor calidad de vida posible para el paciente y su entorno.
      </p>
    </div>
  );
}

export default EnfermedadDeParkinson;
