

import React, { useEffect } from 'react';

function Diazepam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Diazepam</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Diazepam</strong> es una benzodiacepina de acción prolongada ampliamente utilizada por sus propiedades ansiolíticas, anticonvulsivantes, sedantes, relajantes musculares y amnésicas. Es uno de los fármacos más conocidos del grupo y se usa tanto en contextos agudos como crónicos.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Potencia la acción del <strong>ácido gamma-aminobutírico (GABA)</strong>, el principal neurotransmisor inhibidor del sistema nervioso central, al unirse a los receptores GABA-A. Esto aumenta la entrada de cloro a la neurona, hiperpolarizándola y reduciendo su excitabilidad.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Trastornos de ansiedad</li>
        <li>Espasmos musculares o contracturas</li>
        <li>Epilepsia (estatus epiléptico)</li>
        <li>Insomnio ocasional severo</li>
        <li>Síndrome de abstinencia alcohólica</li>
        <li>Premedicación antes de procedimientos médicos</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis inicial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ansiedad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-10 mg cada 8-12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Individualizar según respuesta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Espasmos musculares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-10 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Duración limitada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estatus epiléptico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10 mg IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Repetir cada 10-15 min, máx. 30 mg</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción oral:</strong> 30-60 minutos</li>
        <li><strong>Vida media:</strong> 20-70 horas (activos: nordiazepam, oxazepam)</li>
        <li><strong>Metabolismo:</strong> Hepático (CYP450)</li>
        <li><strong>Excreción:</strong> Renal</li>
        <li><strong>Unión a proteínas:</strong> Alta (~98%)</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, sedación excesiva</li>
        <li>Ataxia y debilidad muscular</li>
        <li>Dependencia física y psicológica</li>
        <li>Dificultades cognitivas (memoria, atención)</li>
        <li>Confusión, especialmente en ancianos</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Miastenia gravis</li>
        <li>Insuficiencia respiratoria severa</li>
        <li>Síndrome de apnea del sueño</li>
        <li>Glaucoma de ángulo cerrado</li>
        <li>Hipersensibilidad a benzodiacepinas</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alcohol y opioides: riesgo de depresión respiratoria</li>
        <li>Otros depresores del SNC: efecto aditivo</li>
        <li>Inhibidores hepáticos (cimetidina, fluoxetina): aumentan su concentración</li>
        <li>Inductores hepáticos (carbamazepina, rifampicina): reducen su eficacia</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Usar con precaución en ancianos: riesgo de caídas y confusión</li>
        <li>Evitar tratamientos prolongados sin reevaluación</li>
        <li>Riesgo de dependencia si se usa crónicamente</li>
        <li>No suspender bruscamente: riesgo de abstinencia</li>
      </ul>
    </div>
  );
}

export default Diazepam;
