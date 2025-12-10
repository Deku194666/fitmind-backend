

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Valvulopatias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Valvulopatías</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        Las <strong>Valvulopatías</strong> son trastornos de las válvulas cardíacas que generan
        <strong> obstrucción (estenosis)</strong> o <strong>fuga (insuficiencia/regurgitación)</strong> del flujo sanguíneo.
        Pueden comprometer la válvula <em>aórtica, mitral, tricúspide</em> o <em>pulmonar</em>. Su impacto va desde
        asintomáticas hasta <Link to="/ecnt/insuficienciacardiaca">Insuficiencia Cardíaca</Link>, <Link to="/ecnt/arritmias">Arritmias</Link> y eventos embólicos.
       </p>

      <p className="p14">🧬 Fisiopatología</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧱 <strong>Estenosis</strong>: engrosamiento/calcificación o fusión comisural → gradiente de presión ↑ → sobrecarga de <em>presión</em> (hipertrofia).</li>
        <li>💧 <strong>Insuficiencia</strong>: cierre incompleto → reflujo retrógrado → sobrecarga de <em>volumen</em> (dilatación).</li>
        <li>🔄 Remodelado de cavidades y aumento de presiones de llenado → congestión pulmonar y sistémica.</li>
      </ul>

      <p className="p14">Clasificación (lesión principal)</p>
      <table
        style={{
          width: '70%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          marginTop: '2rem',
          marginLeft: '6rem'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causas comunes</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Claves clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estenosis aórtica (EAo)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Calcificación degenerativa; válvula bicúspide; reumática</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Síncope, angina, disnea; soplo sistólico rudo en foco aórtico con irradiación a carótidas
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Insuficiencia aórtica (IAo)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Degenerativa, reumática, endocarditis, dilatación de aorta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Pulso amplio, soplo diastólico; disnea/esfuerzo, palpitaciones
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estenosis mitral (EM)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reumática (principal)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Disnea, ortopnea, hemoptisis; <strong>FA</strong> frecuente; soplo diastólico en ápex con chasquido de apertura
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Insuficiencia mitral (IM)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolapso, isquemia/papilar, dilatación anular, reumática</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Soplo holosistólico en ápex hacia axila; disnea y fatiga
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tricúspide (IT/ET)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Funcional por hipertensión pulmonar/IC derecha; reumática</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Ingurgitación yugular, hepatomegalia, edemas; soplo que aumenta con inspiración
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Causas y factores de riesgo ⚠️</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Degeneración/calcificación por edad; válvula bicúspide congénita.</li>
        <li>📌 Fiebre reumática (países en desarrollo); <strong>Endocarditis Infecciosa</strong>.</li>
        <li>📌 Isquemia miocárdica, miocardiopatías, enfermedades del tejido conectivo.</li>
        <li>📌 Hipertensión, radioterapia torácica, insuficiencia renal (calcificación acelerada).</li>
      </ul>

      <p className="p14">Síntomas frecuentes 🔍</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📌 Disnea de esfuerzo, ortopnea, edema (congestión por <Link to="/ecnt/insuficiencia-cardiaca">IC</Link>).</li>
        <li>📌 Fatiga, intolerancia al ejercicio; dolor torácico (EAo/IAo), síncope (EAo).</li>
        <li>📌 Palpitaciones por <Link to="/ecnt/arritmias">arritmias</Link> (FA en EM/IM).</li>
      </ul>

      <p className="p14">Signos de emergencia (actuar rápido)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🚨 Edema agudo de pulmón (disnea severa, hipoxemia, estertores difusos).</li>
        <li>🚨 Síncope o hipotensión en <strong>estenosis aórtica severa</strong>.</li>
        <li>🚨 Inicio súbito de <strong>insuficiencia mitral/aórtica aguda</strong> (rotura de cuerdas, endocarditis).</li>
        <li>🚨 Arritmia rápida con compromiso hemodinámico.</li>
      </ul>

      <p className="p14">Diagnóstico 🧪</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🩺 Auscultación dirigida; signos de congestión.</li>
        <li>📈 <Link to="/examenes/electrocardiograma">ECG</Link>: ritmo, hipertrofia, isquemia, <strong>FA</strong>.</li>
        <li>🖼️ <Link to="/examenes/radiografia">Rx</Link>: tórax: silueta y congestión pulmonar.</li>
        <li>🖥️ <Link to="/examenes/ecocardiograma">Ecocardiograma</Link> transtorácico/transesofágico: severidad (área/gradiente), anatomía, repercusión hemodinámica.</li>
        <li>🧪 Estratificación adicional: pruebas de esfuerzo, cateterismo cuando se planifica intervención o hay dudas.</li>
      </ul>

      <p className="p14">💊 Tratamiento</p>
      <p className="p16">📌 Manejo médico</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🧪 Diuréticos para congestión; control de PA; restricción moderada de sodio.</li>
        <li>🫀 Control de <strong>FA</strong> (frecuencia/ritmo) y <strong>anticoagulación</strong> si corresponde (EM, FA, prótesis).</li>
        <li>🫁 Profilaxis/abordaje de endocarditis según guías.</li>
      </ul>

      <p className="p16">📌 Intervención (según severidad/síntomas)</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🩻 <strong>TAVR/TAVI</strong> (implante valvular aórtico transcatéter) o <strong>reemplazo aórtico quirúrgico</strong> en EAo severa sintomática.</li>
        <li>🪡 <strong>Valvulotomía mitral percutánea</strong> en EM reumática favorable; <strong>reparación/reemplazo</strong> si no es candidata.</li>
        <li>🧵 <strong>Reparación de válvula mitral</strong> preferible a reemplazo cuando es factible (IM).</li>
        <li>🪝 Dispositivos percutáneos de borde a borde (p. ej., <em>clip</em> mitral) en IM seleccionada.</li>
        <li>🌊 Reparación de tricúspide (funcional) durante cirugía izquierda o si IT severa sintomática.</li>
      </ul>

      <p className="p14">🧨 Complicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫀 <Link to="/ecnt/insuficiencia-cardiaca">Insuficiencia cardíaca</Link> y hospitalizaciones recurrentes.</li>
        <li>🧠 Embolias/ACV (FA, vegetaciones en endocarditis).</li>
        <li>⚡ Arritmias auriculares y ventriculares.</li>
        <li>🦠 Endocarditis infecciosa.</li>
      </ul>

      <p className="p14">Consejos y seguimiento ✅</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>📅 Controles periódicos con <Link to="/examenes/ecocardiograma">ecocardiograma</Link> según severidad.</li>
        <li>🏃‍♀️ Actividad física acorde a síntomas/severidad; evitar esfuerzos extenuantes en EAo severa.</li>
        <li>💊 Adherencia a tratamiento y señales de alarma (disnea, edema, síncope, fiebre).</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        Las <strong>valvulopatías</strong> requieren diagnóstico ecocardiográfico y manejo individualizado:
        optimización médica, control de <Link to="/ecnt/arritmias">arritmias</Link> y, cuando esté indicado, reparación o
        reemplazo valvular (quirúrgico o percutáneo). El seguimiento estructurado mejora síntomas y pronóstico.
      </p>
    </div>
  );
}

export default Valvulopatias;
