

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cefalosporinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Cefalosporinas  </p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Cefalosporinas</strong> de segunda y tercera generación son antibióticos beta-lactámicos con amplio espectro de acción, 
        utilizados frecuentemente para el tratamiento de infecciones respiratorias, urinarias y de piel, entre otras. La tercera generación 
        tiene mayor actividad contra bacterias gram negativas y mejor penetración en tejidos.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhiben la síntesis de la pared bacteriana al unirse a las proteínas ligadoras de penicilina (PLP).</li>
        <li>Provocan lisis y muerte bacteriana (bactericidas).</li>
        <li>Mayor resistencia a las beta-lactamasas que las penicilinas.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Infecciones respiratorias: neumonía, bronquitis bacteriana</li>
        <li>Infecciones urinarias</li>
        <li>Infecciones de piel y tejidos blandos</li>
        <li>Infecciones intraabdominales (tercer generación)</li>
        <li>Profilaxis quirúrgica (segunda generación)</li>
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
          {/* Segunda generación */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cefuroxima</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>250-500 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1-1.5 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cefaclor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>250-500 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5-1 hora</td>
          </tr>
          {/* Tercera generación */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ceftriaxona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1-2 g cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-9 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cefotaxima</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1-2 g cada 6-8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 hora</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reacciones alérgicas: rash, prurito, anafilaxia (raro)</li>
        <li>Alteraciones gastrointestinales: diarrea, náuseas</li>
        <li>Colitis pseudomembranosa (por alteración de la microbiota)</li>
        <li>Alteraciones hematológicas (trombocitopenia, leucopenia) en casos raros</li>
        <li>Reacciones locales en sitio de inyección (ceftriaxona, cefotaxima)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a cefalosporinas o penicilinas</li>
        <li>Encefalopatía en insuficiencia renal grave (ajustar dosis)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Potencian efecto anticoagulante de warfarina</li>
        <li>Interacciones con diuréticos y aminoglucósidos (toxicidad renal)</li>
        <li>Probenecid puede aumentar niveles plasmáticos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Ajustar dosis en insuficiencia renal</li>
        <li>Monitorear función renal y hematológica en tratamientos prolongados</li>
        <li>Evitar uso en pacientes con alergia conocida a beta-lactámicos</li>
        <li>Administrar preferentemente por vía parenteral en infecciones graves (3ª generación)</li>
      </ul>
    </div>
  );
}

export default Cefalosporinas;
