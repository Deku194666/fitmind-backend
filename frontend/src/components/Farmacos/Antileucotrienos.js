

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Antileucotrienos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antileucotrienos</p>

      <p className="p14">📌 Introducción </p>
      <p className="p150">
        Los <strong>Antileucotrienos</strong> son fármacos que inhiben la acción o síntesis de los leucotrienos, mediadores inflamatorios implicados en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma</Link>. Se utilizan como tratamiento complementario en pacientes con asma persistente leve a moderada, especialmente cuando no toleran o responden mal a otros tratamientos inhalados.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Bloquean los receptores de leucotrienos (antagonistas del receptor CysLT1).</li>
        <li>Inhiben la broncoconstricción inducida por alérgenos o ejercicio.</li>
        <li>Reducen la inflamación, el edema y la secreción mucosa en vías respiratorias.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente leve a moderada</li>
        <li>Asma inducida por ejercicio</li>
        <li>Rinitis alérgica</li>
        <li>Intolerancia a AINEs con síntomas respiratorios</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía de administración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Montelukast</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg una vez al día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Zafirlukast</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Cefalea</li>
        <li>Dolor abdominal o dispepsia</li>
        <li>Trastornos del sueño (insomnio, sueños vívidos)</li>
        <li>Alteraciones del comportamiento en niños (agitación, agresividad, depresión)</li>
        <li>Hepatotoxicidad (más frecuente con zafirlukast)</li>
        <li>Síndrome de Churg-Strauss (raro, asociado a retirada de corticosteroides)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco</li>
        <li>Enfermedad hepática activa (especialmente con zafirlukast)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Zafirlukast inhibe el CYP2C9: puede aumentar niveles de warfarina</li>
        <li>Fenobarbital y rifampicina disminuyen niveles de montelukast</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Indicado como alternativa o complemento a corticoides inhalados en asma leve</li>
        <li>Buena opción en pacientes con rinitis alérgica y asma concomitantes</li>
        <li>Administrar por la noche para mejor control nocturno del asma</li>
        <li>Supervisar signos de alteraciones del ánimo, especialmente en población pediátrica</li>
      </ul>
    </div>
  );
}

export default Antileucotrienos;
