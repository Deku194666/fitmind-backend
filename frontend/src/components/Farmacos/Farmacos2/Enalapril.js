

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Enalapril() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Enalapril</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        El <strong>Enalapril</strong> es un fármaco antihipertensivo perteneciente a la familia de los IECA (Inhibidores de la Enzima
         Convertidora de Angiotensina). Es ampliamente utilizado en el manejo de enfermedades cardiovasculares como la 
         <Link to="/ecnt/hipertension"> Hipertensión Arterial,</Link> y la insuficiencia cardíaca, gracias a su capacidad de reducir 
         la formación de angiotensina II.</p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Enalapril se convierte en su metabolito activo, <strong>enalaprilato</strong>, tras ser absorbido por vía oral. Este inhibe la ECA, bloqueando la conversión de angiotensina I en angiotensina II, lo que provoca vasodilatación, reducción de la presión arterial y disminución de la retención de sodio y agua.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li> <Link to="/ecnt/hipertension">Hipertensión Arterial</Link> esencial</li>
        <li>Insuficiencia cardíaca congestiva</li>
        <li>Prevención de progresión en nefropatías crónicas</li>
        <li>Disfunción ventricular izquierda post-infarto</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis inicial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis de mantenimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/ecnt/hipertension">Hipertensión Arterial</Link> </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20 mg cada 24 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Insuficiencia cardíaca</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2.5 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-20 mg cada 12 h</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 1 hora</li>
        <li><strong>Pico plasmático:</strong> 4-6 horas</li>
        <li><strong>Vida media:</strong> 11 horas (enalaprilato)</li>
        <li><strong>Vía de eliminación:</strong> Renal</li>
        <li><strong>Unión a proteínas:</strong> Moderada (~50%)</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Tos seca persistente (por acumulación de bradicinina)</li>
        <li>Hipotensión (particularmente en primera dosis o con diuréticos)</li>
        <li>Hiperkalemia</li>
        <li>Mareos, cefalea</li>
        <li>Disfunción renal en pacientes con estenosis renal</li>
        <li>Angioedema (poco común pero grave)</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Embarazo (riesgo de teratogenicidad)</li>
        <li>Lactancia</li>
        <li>Angioedema previo por IECA</li>
        <li>Estenosis bilateral de arterias renales</li>
        <li>Hiperkalemia severa</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>AINEs: riesgo de falla renal y pérdida de efecto antihipertensivo</li>
        <li>Diuréticos ahorradores de potasio: riesgo de hiperkalemia</li>
        <li>Lítio: aumento de toxicidad del litio</li>
        <li>Aliskireno: contraindicado en diabéticos</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Se debe controlar función renal y potasio antes de iniciar y durante el tratamiento</li>
        <li>Evitar el uso conjunto con ARA II o Aliskireno salvo indicación precisa</li>
        <li>Advertir al paciente sobre la posibilidad de tos seca</li>
        <li>Suspender si aparece angioedema</li>
      </ul>
    </div>
  );
}

export default Enalapril;
