
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosMusculos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Músculos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los fármacos utilizados para el tratamiento de condiciones musculares tienen como objetivo reducir el espasmo, el dolor y mejorar la función motora. Estos incluyen relajantes musculares, espasmolíticos y adyuvantes como algunos antiepilépticos o antidepresivos empleados en casos de dolor muscular crónico.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de la excitabilidad neuronal medular o supramedular (relajantes centrales).</li>
        <li>Bloqueo directo del acoplamiento excitación-contracción (relajantes periféricos).</li>
        <li>Modulación del dolor muscular crónico mediante vías serotoninérgicas o gabaérgicas.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Espasmos musculares agudos</li>
        <li>Espasticidad por daño neurológico (esclerosis múltiple, ECV, etc.)</li>
        <li>Contracturas musculares postraumáticas o posturales</li>
        <li>Dolor miofascial</li>
        <li>Adyuvante en rehabilitación musculoesquelética</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clasificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ciclobenzaprina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5–10 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Relajante muscular central</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tizanidina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2–4 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Agonista alfa-2 central</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Baclofeno</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5–20 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Agonista GABA-B</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/diazepam"> Diazepam  </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2–10 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Benzodiacepina (adjuvante)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia y sedación</li>
        <li>Hipotonía o debilidad muscular</li>
        <li>Sequedad bucal (Tizanidina)</li>
        <li>Hipotensión ortostática</li>
        <li>Riesgo de dependencia (benzodiacepinas)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Miastenia gravis</li>
        <li>Insuficiencia hepática grave</li>
        <li>Trastornos respiratorios (riesgo de depresión respiratoria)</li>
        <li>Uso conjunto con depresores del SNC</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con alcohol u opioides: aumento de efectos sedantes</li>
        <li>Con antihipertensivos: mayor riesgo de hipotensión</li>
        <li>Con antidepresivos tricíclicos: posible potenciación de efectos anticolinérgicos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Usar por períodos breves (7–14 días) cuando es posible</li>
        <li>Evitar conducción o tareas que requieran alerta</li>
        <li>Evaluar riesgo de sedación, caídas y dependencia</li>
        <li>Combinar con fisioterapia para mejores resultados funcionales</li>
      </ul>
    </div>
  );
}

export default FarmacosMusculos;
