

import React, { useEffect } from 'react';
import NavBarHipolipemiantes from './NavBarHipolipemiantes';

function Hipolipemiantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarHipolipemiantes/>

      <p className="p13">Fármacos Hipolipemiantes</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Fármacos Hipolipemiantes</strong> son medicamentos utilizados para reducir los niveles de lípidos en sangre, 
        especialmente colesterol y triglicéridos. Su objetivo principal es prevenir enfermedades cardiovasculares ateroescleróticas.
      </p>

      <p className="p14">🔬 Clasificación de Hipolipemiantes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estatinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Atorvastatina, Rosuvastatina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben la HMG-CoA reductasa (síntesis de colesterol hepático)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fibratos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fenofibrato, Gemfibrozilo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Activan PPAR-α, reducen triglicéridos y aumentan HDL</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ezetimiba</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ezetimiba</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibe la absorción intestinal de colesterol</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Resinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colestiramina, Colesevelam</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Secuestran ácidos biliares, disminuyendo LDL</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores PCSK9</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alirocumab, Evolocumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumentan la disponibilidad del receptor de LDL hepático</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipercolesterolemia primaria (familiar o adquirida).</li>
        <li>Hipertrigliceridemia.</li>
        <li>Prevención primaria y secundaria de enfermedad cardiovascular ateroesclerótica.</li>
        <li>Pacientes con diabetes tipo 2 con dislipidemia mixta.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Estatinas:</strong> Mialgias, elevación de transaminasas, rabdomiólisis (raro).</li>
        <li><strong>Fibratos:</strong> Dolor abdominal, litiasis biliar, aumento de CPK.</li>
        <li><strong>Ezetimiba:</strong> Bien tolerado; puede causar molestias gastrointestinales leves.</li>
        <li><strong>Resinas:</strong> Estreñimiento, distensión abdominal.</li>
        <li><strong>PCSK9:</strong> Reacciones en el sitio de inyección, síntomas gripales.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Las estatinas son la base del tratamiento hipolipemiante.</li>
        <li>Fibratos se reservan para triglicéridos muy elevados o riesgo de pancreatitis.</li>
        <li>PCSK9 son útiles en pacientes con alto riesgo cardiovascular y LDL elevado pese a tratamiento estándar.</li>
        <li>Monitorear enzimas hepáticas y CPK en pacientes con estatinas o fibratos.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estatina + ezetimiba (potenciación del efecto LDL-c).</li>
        <li>Estatina + inhibidor PCSK9 en pacientes de alto riesgo no controlado.</li>
        <li>Evitar estatina + fibrato en combinación habitual (riesgo de rabdomiólisis), salvo casos seleccionados y con monitoreo.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Fármacos Hipolipemiantes</strong> son fundamentales en la prevención de eventos cardiovasculares. Su selección debe adaptarse al perfil lipídico, riesgo individual y tolerancia, siendo las estatinas el eje terapéutico principal.
      </p>
    </div>
  );
}

export default Hipolipemiantes;
