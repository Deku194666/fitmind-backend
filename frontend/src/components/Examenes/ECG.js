

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Ecocardiograma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Ecocardiograma (ECG)</p>

      <p className="p14">Introducción 📌</p>
      <p className="p150">
        El <strong>Ecocardiograma (ECG)</strong> es un estudio por <em>ultrasonido</em> que evalúa en tiempo real la
        anatomía y la <strong>función del corazón</strong> (cámaras, válvulas, pericardio y flujo sanguíneo). No usa
        radiación y es prueba clave en <Link to="/ecnt/insuficiencia-cardiaca">Insuficiencia Cardíaca (IC)</Link>, <strong> Valvulopatías</strong>, y
        <Link to="/ecnt/arritmias"> Arritmias</Link> con sospecha estructural y seguimiento de múltiples cardiopatías.
      </p>

      <p className="p14">¿Para qué sirve?</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>🫀 Medir <strong>función sistólica</strong> (p. ej., FEVI) y <strong>diastólica</strong>.</li>
        <li>🧵 Valorar <strong>válvulas</strong> (estenosis/insuficiencia) y sus <strong>gradientes</strong>/<strong>áreas</strong>.</li>
        <li>🫧 Detectar <strong>derrame pericárdico</strong> o taponamiento.</li>
        <li>📐 Estimar <strong>presión pulmonar</strong> y remodelado de cavidades.</li>
        <li>🧒 Evaluar <strong>cardiopatías congénitas</strong> o secuelas de enfermedades sistémicas.</li>
      </ul>

      <p className="p14">Modalidades principales</p>
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
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Modalidad</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso típico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ECG transtorácico (TTE)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estándar no invasivo; primera línea en la mayoría de casos.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ECG transesofágico (TEE)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mejor detalle de válvulas, trombos auriculares, endocarditis; requiere sedación.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ECG de estrés (ejercicio/farmacológico)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Detección de isquemia inducible y evaluación de viabilidad.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Eco Doppler / Tisular / 3D</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuantificación de flujos/gradientes, función diastólica, geometría valvular.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14" style={{ marginTop: '2rem' }}>Cómo se realiza 🧰</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Técnico aplica <strong>gel</strong> en el tórax y usa un transductor; dura 15–30 min (TTE).</li>
        <li>En <strong>TEE</strong> se introduce una sonda por el esófago (ayuno y sedación ligera).</li>
        <li>Puede incluir <strong>contraste ecográfico</strong> para mejorar la visualización.</li>
      </ul>

      <p className="p14">Parámetros habituales 📈</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>💪 <strong>FEVI</strong> (fracción de eyección del ventrículo izquierdo), <strong>GLS</strong> (strain) si disponible.</li>
        <li>📏 Diámetros y volúmenes de cavidades; grosor de paredes.</li>
        <li>🧵 <strong>Válvulas</strong>: área/gradiente (estenosis), regurgitación (leve–severa).</li>
        <li>🫧 Pericardio: derrame y signos de taponamiento.</li>
        <li>🫁 Estimación de <strong>presión sistólica pulmonar</strong> (PSAP) por regurgitación tricuspídea.</li>
        <li>🫀 <strong>Función diastólica</strong>: E/A, E/e′, volumen AI, velocidad TR.</li>
      </ul>

      <p className="p14">Indicaciones frecuentes 🔎</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Sospecha/seguimiento de <Link to="/ecnt/insuficiencia-cardiaca">insuficiencia cardíaca</Link>.</li>
        <li>Valvulopatías, soplos, fiebre con sospecha de endocarditis (TEE).</li>
        <li>Dolor torácico/dispnea con hallazgos inespecíficos en <Link to="/examenes/electrocardiograma">ECG</Link>.</li>
        <li><Link to="/ecnt/arritmias">Arritmias</Link> con posible cardiopatía estructural.</li>
        <li>Enfermedades sistémicas (hipertensión, autoinmunidad) con impacto cardíaco.</li>
      </ul>

      <p className="p14">Limitaciones y consideraciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Ventanas acústicas pobres (obesidad, EPOC) pueden limitar la calidad.</li>
        <li>El resultado es <strong>operador-dependiente</strong>; ideal comparar con estudios previos.</li>
        <li>El TEE es semi-invasivo (sedación, molestias de garganta).</li>
      </ul>

      <p className="p14">Riesgos 🤏</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>TTE</strong>: mínimos (irritación leve en piel por gel/sonda).</li>
        <li><strong>TEE</strong>: náuseas, odinofagia transitoria; raramente complicaciones (aspiración, lesión esofágica).</li>
        <li><strong>Estrés</strong>: control médico; bajo riesgo de arritmias/angina en casos seleccionados.</li>
      </ul>

      <p className="p14">Consejos prácticos ✅</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Para <strong>TEE</strong>: <strong>ayuno</strong> según indicación; coordinar acompañante si hay sedación.</li>
        <li>Llevar lista de fármacos y estudios previos (ayuda a comparar).</li>
        <li>Si hay síntomas nuevos (dolor, disnea marcada), avisar al equipo durante el examen.</li>
      </ul>

      <p className="p14">Conclusión</p>
      <p className="p150">
        El <strong>Ecocardiograma</strong> es una herramienta central para diagnosticar y monitorizar afecciones
        cardíacas. Sus modalidades (TTE, TEE, estrés, Doppler) permiten caracterizar estructura, hemodinámica
        y función, guiando decisiones terapéuticas en <Link to="/ecnt/insuficienciacardiaca">IC</Link>, <strong> Valvulopatías</strong>,
        <Link to="/ecnt/arritmias"> Arritmias</Link> y otras condiciones.
      </p>
    </div>
  );
}

export default Ecocardiograma;
