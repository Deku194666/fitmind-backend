

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarBroncodilatadores from './NavBarBroncodilatadores';


function Broncodilatadores() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      
      <NavBarBroncodilatadores/>

      <p className="p13"> Broncodilatadores</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Broncodilatadores</strong> son medicamentos que relajan el músculo liso de las vías respiratorias, facilitando el paso del aire y mejorando los síntomas en enfermedades respiratorias como asma y EPOC.
      </p>

      <p className="p14">🔬 Clasificación de Broncodilatadores</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>  <Link to="/farmacos/saba"> Agonistas β2 de acción corta (SABA) </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/salbutamol"> Salbutamol</Link>, Terbutalina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Relajan músculo liso bronquial rápidamente al activar receptores β2.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Agonistas β2 de acción prolongada (LABA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Salmeterol, Formoterol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolongan la broncodilatación por más de 12 horas al estimular β2.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticolinérgicos (de acción corta y prolongada)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ipratropio (SAMA), Tiotropio (LAMA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores muscarínicos M3 reduciendo broncoconstricción.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metilxantinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Teofilina, Aminofilina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben fosfodiesterasa, aumentando AMP cíclico y relajación bronquial.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma bronquial (leve a grave).</li>
        <li>Enfermedad pulmonar obstructiva crónica (EPOC).</li>
        <li>Crisis asmática aguda (uso de SABA).</li>
        <li>Mantenimiento a largo plazo (uso de LABA y LAMA).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong><Link to="/farmacos/saba"> SABA </Link>/ LABA:</strong> Taquicardia, temblor, nerviosismo.</li>
        <li><strong>Anticolinérgicos:</strong> Boca seca, retención urinaria.</li>
        <li><strong>Metilxantinas:</strong> Náuseas, insomnio, arritmias (riesgo tóxico).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Los <Link to="/farmacos/saba"> SABA </Link> son fármacos de rescate, no deben usarse como monoterapia crónica.</li>
        <li>LABA siempre deben combinarse con corticoides inhalados en asma.</li>
        <li>Evitar metilxantinas en pacientes con riesgo de arritmias.</li>
        <li>En <Link to="/ecnt/epoc"> EPOC</Link>, los anticolinérgicos de acción prolongada son de primera línea.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>LABA + corticoide inhalado (ej: formoterol + budesonida).</li>
        <li>LAMA + LABA (ej: tiotropio + olodaterol).</li>
        <li><Link to="/farmacos/saba"> SABA </Link> + SAMA (ej: <Link to="/farmacos/farmacos2/salbutamol"> Salbutamol </Link> + ipratropio en crisis).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Broncodilatadores </strong> son fundamentales en el manejo de enfermedades obstructivas respiratorias. Su elección debe basarse en el tipo de enfermedad, severidad y necesidad de control sintomático o mantenimiento.
      </p>
    </div>
  );
}

export default Broncodilatadores;
