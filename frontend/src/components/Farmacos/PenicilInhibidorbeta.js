

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PenicilInhibidorBeta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Penicilinas + Inhibidor de β-lactamasas</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Penicilinas combinadas con Inhibidores de β-Lactamasas</strong> son fármacos antibacterianos que combinan una penicilina con un inhibidor que bloquea las β-lactamasas producidas por algunas bacterias, las cuales degradan la penicilina. Esto amplía el espectro antibacteriano permitiendo tratar infecciones causadas por bacterias resistentes.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>La penicilina inhibe la síntesis de la pared bacteriana bloqueando la enzima transpeptidasa.</li>
        <li>El inhibidor de β-lactamasas bloquea las enzimas β-lactamasas que degradan la penicilina.</li>
        <li>Permite que la penicilina actúe sobre bacterias productoras de β-lactamasas, extendiendo su espectro.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Infecciones respiratorias bajas: neumonía, bronquitis</li>
        <li>Infecciones de piel y tejidos blandos</li>
        <li>Infecciones intraabdominales</li>
        <li>Infecciones urinarias complicadas</li>
        <li>Abscesos y otros procesos con bacterias productoras de β-lactamasas</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amoxicilina + Ácido clavulánico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              500/125 mg cada 8 h o 875/125 mg cada 12 h (vía oral)
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ampliamente usado en infecciones respiratorias</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ampicilina + Sulbactam</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              1-2 g cada 6-8 h (vía parenteral)
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso hospitalario para infecciones graves</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reacciones alérgicas: rash, urticaria, anafilaxia (raro pero grave)</li>
        <li>Gastrointestinales: diarrea, náuseas, vómitos</li>
        <li>Colitis asociada a antibióticos (Clostridioides difficile)</li>
        <li>Elevación transitoria de enzimas hepáticas</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a penicilinas o inhibidores de β-lactamasas</li>
        <li>Alergia severa previa a β-lactámicos</li>
        <li>Mononucleosis infecciosa (puede aumentar rash con amoxicilina)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Incrementa efecto de anticoagulantes orales</li>
        <li>Reduce eficacia de anticonceptivos orales en algunos casos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Administrar con alimentos para mejorar tolerancia gástrica</li>
        <li>Completar el tratamiento para evitar resistencias bacterianas</li>
        <li>Monitorizar signos de alergia durante el tratamiento</li>
        <li>Ajustar dosis en insuficiencia renal según indicación médica</li>
      </ul>
    </div>
  );
}

export default PenicilInhibidorBeta;
