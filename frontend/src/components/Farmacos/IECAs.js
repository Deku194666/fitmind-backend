

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function IECAs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">IECA - Inhibidores de la Enzima Convertidora de Angiotensina</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>IECA</strong> son un grupo de fármacos ampliamente utilizados en el tratamiento de enfermedades cardiovasculares.
        Actúan inhibiendo la enzima convertidora de angiotensina I a angiotensina II, lo cual disminuye la vasoconstricción y la
        secreción de aldosterona, reduciendo la presión arterial y la sobrecarga del corazón.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhiben la enzima convertidora de angiotensina (ECA).</li>
        <li>Disminuyen la producción de angiotensina II.</li>
        <li>Reducen la secreción de aldosterona.</li>
        <li>Provocan vasodilatación periférica.</li>
        <li>Mejoran la función endotelial y reducen la hipertrofia ventricular.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><Link to="/ecnt/hipertension">Hipertensión Arterial</Link>  </li>
        <li>Insuficiencia cardíaca crónica</li>
        <li><Link to="/ecnt/iam">  Infarto Agudo al Miocardio  </Link>con disfunción ventricular</li>
        <li>Nefropatía diabética o proteinúrica</li>
        <li>Prevención secundaria cardiovascular</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vida media</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>  <Link to="/farmacos/farmacos2/enalapril"> Enalapril </Link>   </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-20 mg cada 12-24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>11 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/captopril"> Captopril </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25-50 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ramipril</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2.5-10 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>13-17 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Tos seca</strong>: por acumulación de bradicinina (10-20%)</li>
        <li><strong>Hipotensión</strong>: especialmente en la primera dosis</li>
        <li><strong>Hiperkalemia</strong>: por disminución de aldosterona</li>
        <li><strong>Insuficiencia renal aguda</strong>: en pacientes con estenosis bilateral de arterias renales</li>
        <li><strong>Angioedema</strong>: poco frecuente, pero potencialmente grave</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Embarazo (riesgo teratogénico)</li>
        <li>Antecedente de angioedema por IECA</li>
        <li>Hiperkalemia severa (mayor a 5.5 mEq/L)</li>
        <li>Estenosis bilateral de arterias renales</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con AINEs: riesgo de insuficiencia renal</li>
        <li>Con diuréticos ahorradores de potasio: riesgo de hiperkalemia</li>
        <li>Con litio: aumento de toxicidad</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Iniciar con dosis baja y ajustar progresivamente</li>
        <li>Controlar función renal y potasio a los 7-14 días</li>
        <li>Evitar combinación con ARA II en la mayoría de los casos</li>
        <li>Suspender ante angioedema o deterioro renal agudo</li>
      </ul>
    </div>
  );
}

export default IECAs;
