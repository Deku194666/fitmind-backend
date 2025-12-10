

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Fluoroquinolonas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fluoroquinolonas Respiratorias</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Fluoroquinolonas Respiratorias</strong> son un subgrupo de antibióticos quinolónicos con amplio espectro de acción, 
        especialmente efectivas contra bacterias gram negativas y algunos gram positivos, incluyendo agentes comunes de infecciones
        respiratorias como Streptococcus pneumoniae y Haemophilus influenzae.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhiben la ADN girasa y la topoisomerasa IV, enzimas esenciales para la replicación y reparación del ADN bacteriano.</li>
        <li>Provocan la ruptura del ADN bacteriano, lo que lleva a la muerte celular (bactericidas).</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Neumonía adquirida en la comunidad</li>
        <li>Bronquitis bacteriana aguda exacerbada</li>
        <li>Sinusitis bacteriana</li>
        <li>Infecciones complicadas del tracto respiratorio inferior</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Levofloxacino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500-750 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-8 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moxifloxacino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gatifloxacino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8-12 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Tendinitis y ruptura de tendones (especialmente en mayores de 60 años y en uso concomitante con corticosteroides)</li>
        <li>Alteraciones gastrointestinales: náuseas, diarrea</li>
        <li>Alteraciones del sistema nervioso central: mareos, cefalea, insomnio</li>
        <li>Prolongación del intervalo QT (riesgo de arritmias)</li>
        <li>Fotosensibilidad</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Niños y adolescentes en crecimiento (por riesgo en cartílago)</li>
        <li>Pacientes con antecedentes de prolongación del QT</li>
        <li>Embarazo y lactancia</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Antiácidos, sucralfato y suplementos de hierro y calcio: disminuyen absorción</li>
        <li>Medicamentos que prolongan el QT (antiarrítmicos, antidepresivos)</li>
        <li>Warfarina: puede aumentar su efecto anticoagulante</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar uso en población pediátrica salvo indicación estricta</li>
        <li>Monitorear signos de tendinopatías durante el tratamiento</li>
        <li>Evaluar función renal antes y durante el tratamiento (ajustar dosis)</li>
        <li>Usar con precaución en pacientes con riesgo de arritmias</li>
      </ul>
    </div>
  );
}

export default Fluoroquinolonas;
