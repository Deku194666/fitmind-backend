

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import NavBarAntiinflamatoriosRespi from './NavBarAntiinflamatoriosRespi';
 
function AntiinflamatoriosRespiratorio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarAntiinflamatoriosRespi/>

 
      <p className="p13">  Antiinflamatorios Respiratorios</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antiinflamatorios Respiratorios</strong> son medicamentos que reducen la inflamación de las vías respiratorias, 
        fundamentales en el tratamiento de enfermedades como el asma y la EPOC. Ayudan a prevenir exacerbaciones y mejoran el control 
        de los síntomas a largo plazo.
      </p>

      <p className="p14">🔬 Clasificación de Antiinflamatorios Respiratorios</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corticoides inhalados (ICS)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Budesonida, Fluticasona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben la producción de mediadores inflamatorios en vías aéreas.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corticoides sistémicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prednisona, Metilprednisolona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Efecto antiinflamatorio generalizado; usados en crisis o exacerbaciones.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antileucotrienos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Montelukast</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores de leucotrienos, reduciendo inflamación y broncoconstricción.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Biológicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Omalizumab, Mepolizumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpos monoclonales que inhiben mediadores específicos de la inflamación (IgE, IL-5).</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente (leve, moderada o grave).</li>
        <li>EPOC con exacerbaciones frecuentes.</li>
        <li>Control a largo plazo del asma y prevención de crisis.</li>
        <li>Tratamiento de exacerbaciones agudas (uso sistémico).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>ICS:</strong> Disfonía, candidiasis oral, tos.</li>
        <li><strong>Sistémicos:</strong> Hiperglucemia, hipertensión, osteoporosis (uso prolongado).</li>
        <li><strong>Montelukast:</strong> Cefalea, trastornos del sueño, raramente cambios de comportamiento.</li>
        <li><strong>Biológicos:</strong> Reacciones en el sitio de inyección, riesgo de infecciones.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Los ICS son la base del tratamiento del asma persistente.</li>
        <li>Se deben usar a la dosis mínima efectiva para evitar efectos adversos.</li>
        <li>Los corticoides sistémicos están reservados para crisis o asma grave no controlada.</li>
        <li>Los biológicos están indicados en asma grave eosinofílica o alérgica no controlada.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>ICS + LABA (ej: budesonida + formoterol).</li>
        <li>Montelukast + ICS en pacientes con rinitis alérgica y asma.</li>
        <li>Biológicos + ICS/LABA en asma grave.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Antiinflamatorios Respiratorios</strong>  son esenciales para el control de enfermedades respiratorias crónicas. Su uso adecuado mejora la calidad de vida, previene exacerbaciones y reduce la necesidad de hospitalización.
      </p>
    </div>
  );
}

export default AntiinflamatoriosRespiratorio;
