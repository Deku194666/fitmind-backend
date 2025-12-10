

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Estatinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Estatinas</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Estatinas</strong> son fármacos hipolipemiantes ampliamente utilizados para el tratamiento de la <strong>dislipidemia </strong> 
         y la prevención de eventos cardiovasculares. Su principal efecto es la reducción del colesterol LDL (colesterol "malo"), lo que
        contribuye a prevenir <strong>Infarto Agudo al Miocardio</strong>, <strong>Accidente Cerebrovascular</strong> y muerte cardiovascular.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Inhiben de manera competitiva la <strong>HMG-CoA reductasa</strong>, enzima clave en la síntesis hepática de colesterol. Esto genera
        un aumento de los receptores de LDL en el hígado y una mayor captación de colesterol desde la sangre, disminuyendo así sus niveles plasmáticos.
      </p>

      <p className="p14">💊 Ejemplos y Potencia</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estatina</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Potencia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/atorvastatina"> Atorvastatina  </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Larga vida media. Eficaz para prevención secundaria.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rosuvastatina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más potente. Buena opción en hipercolesterolemia severa.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Simvastatina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moderada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más riesgo de interacciones. Administrar en la noche.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pravastatina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Baja</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Menor riesgo de interacciones. Buena tolerabilidad hepática.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dislipidemia (colesterol LDL elevado).</li>
        <li>Prevención secundaria de eventos cardiovasculares en pacientes con enfermedad aterosclerótica.</li>
        <li>Prevención primaria en personas con alto riesgo cardiovascular (diabetes, HTA, tabaquismo, etc.).</li>
        <li>Hiperlipidemia familiar o genética.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dolor muscular (mialgias), calambres.</li>
        <li>Elevación de enzimas hepáticas.</li>
        <li>Miopatía o rabdomiolisis (raro, pero grave).</li>
        <li>Alteraciones gastrointestinales leves (náuseas, dispepsia).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorizar CPK si hay síntomas musculares.</li>
        <li>Controlar pruebas hepáticas al iniciar tratamiento y si hay síntomas.</li>
        <li>Evitar consumo excesivo de alcohol y jugo de pomelo (interfiere con metabolismo).</li>
        <li>La dosis nocturna es preferible para estatinas de vida corta (simvastatina, pravastatina).</li>
        <li>Evaluar adherencia, dado que los beneficios son a largo plazo.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Las <strong>Estatinas</strong> son pilar fundamental en la prevención cardiovascular. Su eficacia ha sido demostrada en múltiples estudios clínicos
        y su perfil de seguridad es generalmente bueno. Individualizar la terapia y monitorear posibles efectos adversos es clave para optimizar sus beneficios.
      </p>
    </div>
  );
}

export default Estatinas;
