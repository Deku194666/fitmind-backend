

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SABA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Agonistas β2 de Acción Corta (SABA)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>SABA</strong> son broncodilatadores de acción rápida utilizados principalmente para el alivio inmediato de los 
        síntomas en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma</Link> y la 
        <Link to="/ecnt/enfermedadpulmonarobstructivacronica"> EPOC</Link>. Actúan sobre los receptores β2 del músculo liso bronquial,
         generando una rápida broncodilatación.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estimulan los receptores adrenérgicos β2 en el músculo liso bronquial.</li>
        <li>Provocan relajación rápida del músculo liso y broncodilatación.</li>
        <li>Inhiben la liberación de mediadores inflamatorios por los mastocitos.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Crisis aguda de asma.</li>
        <li>Disnea en <Link to="/ecnt/enfermedadpulmonarobstructivacronica"> EPOC</Link>. </li>
        <li>Prevención del broncoespasmo inducido por ejercicio.</li>
        <li>Alivio sintomático en otras patologías con obstrucción reversible.</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía y dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio / Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/salbutamol"> Salbutamol </Link> (albuterol)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalado: 100-200 mcg cada 4-6 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio: 5 min / Duración: 4-6 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Terbutalina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalado: 250-500 mcg cada 4-6 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio: 5-10 min / Duración: 4-6 h</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Taquicardia</strong></li>
        <li><strong>Temblor fino distal</strong></li>
        <li><strong>Hipokalemia</strong></li>
        <li><strong>Nerviosismo o ansiedad</strong></li>
        <li><strong>Cefalea</strong></li>
        <li><strong>Palpitaciones</strong></li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco</li>
        <li>Precaución en pacientes con cardiopatía isquémica, arritmias o hipertiroidismo</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con beta bloqueadores no selectivos: antagonismo del efecto broncodilatador</li>
        <li>Con diuréticos: aumento del riesgo de hipokalemia</li>
        <li>Con simpaticomiméticos: potenciación de efectos cardiovasculares</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No usar como monoterapia en asma persistente</li>
        <li>No exceder la dosis máxima recomendada (riesgo de efectos adversos)</li>
        <li>Utilizar con cámara espaciadora para mejorar la eficacia</li>
        <li>Evaluar necesidad de tratamiento controlador si se requiere uso frecuente</li>
      </ul>
    </div>
  );
}

export default SABA;
