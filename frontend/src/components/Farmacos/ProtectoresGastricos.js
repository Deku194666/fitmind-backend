

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProtectoresGastricos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Protectores Gástricos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Protectores Gástricos</strong> son medicamentos utilizados para prevenir o tratar lesiones de la mucosa gástrica, especialmente en pacientes con riesgo de úlceras o que reciben tratamientos agresivos como AINEs o corticoides. Incluyen principalmente los inhibidores de la bomba de protones (IBP) y los antagonistas H2.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Los IBP inhiben irreversiblemente la H⁺/K⁺ ATPasa en las células parietales, reduciendo la producción de ácido gástrico.</li>
        <li>Los antagonistas H2 bloquean los receptores histamínicos H2, disminuyendo la secreción ácida.</li>
        <li>Favorecen la cicatrización de úlceras y disminuyen el riesgo de sangrado digestivo.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Gastritis y úlceras gástricas o duodenales</li>
        <li>Profilaxis de daño gástrico por AINEs o corticoides</li>
        <li>Síndrome de Zollinger-Ellison</li>
        <li>Erradicación de Helicobacter pylori (en combinación)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/omeprazol"> Omeprazol  </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IBP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20-40 mg/día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pantoprazol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IBP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20-40 mg/día</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ranitidina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antihistamínico H2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>150 mg cada 12 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sucralfato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Citoprotector</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 g 4 veces al día</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Diarrea, náuseas, dolor abdominal</li>
        <li>Hipomagnesemia en uso prolongado (IBP)</li>
        <li>Riesgo aumentado de infecciones intestinales</li>
        <li>Fracturas óseas por mala absorción de calcio (uso crónico de IBP)</li>
        <li>Interacciones con clopidogrel (omeprazol)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a algún componente</li>
        <li>Uso prolongado sin causa médica justificada</li>
        <li>Insuficiencia hepática (precaución con algunos IBP)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Omeprazol reduce el efecto de clopidogrel</li>
        <li>Alteración en la absorción de vitamina B12, hierro y calcio</li>
        <li>Modifica biodisponibilidad de algunos antifúngicos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Preferir IBP para tratamiento de esofagitis o úlceras</li>
        <li>Evitar el uso innecesario crónico sin indicación médica</li>
        <li>Revisar riesgo de osteoporosis y suplementar calcio si es necesario</li>
        <li>Administrar en ayunas para mayor eficacia (IBP)</li>
      </ul>
    </div>
  );
}

export default ProtectoresGastricos;
