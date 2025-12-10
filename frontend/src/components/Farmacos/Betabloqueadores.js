

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function Betabloqueadores() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
 
      <p className="p13">Betabloqueadores</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Betabloqueadores</strong> son medicamentos que actúan bloqueando los receptores β-adrenérgicos, principalmente los β1 del corazón.
        Disminuyen la frecuencia cardíaca, el gasto cardíaco y la presión arterial, siendo útiles en el tratamiento de enfermedades cardiovasculares como
        la <strong>Hipertensión Arterial </strong>, la <strong>Angina de Pecho</strong> y la <strong>Insuficiencia Cardíaca</strong>.
      </p>

      <p className="p14">🔬 Clasificación de Betabloqueadores</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cardioselectivos (β1)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Atenolol, Metoprolol, Bisoprolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor afinidad por receptores β1, menor riesgo de broncoconstricción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No selectivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propranolol, Nadolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean β1 y β2, contraindicado en asma</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Con actividad vasodilatadora</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carvedilol, Nebivolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean también receptores α1 o inducen liberación de NO</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial (especialmente con comorbilidad cardiovascular).</li>
        <li>Insuficiencia cardíaca con fracción de eyección reducida (carvedilol, bisoprolol).</li>
        <li>Angina de pecho y post-infarto agudo de miocardio.</li>
        <li>Taquiarritmias supraventriculares.</li>
        <li>Migraña (profilaxis, especialmente propranolol).</li>
        <li>Temblor esencial y ansiedad situacional.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Bradicardia, hipotensión.</li>
        <li>Fatiga, mareos.</li>
        <li>Disfunción sexual.</li>
        <li>Broncoconstricción (en no selectivos).</li>
        <li>Depresión y alteraciones del sueño (en algunos pacientes).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar en pacientes con asma o EPOC (preferir cardioselectivos si es necesario).</li>
        <li>No suspender bruscamente, puede desencadenar efecto rebote (crisis hipertensiva o angina).</li>
        <li>En insuficiencia cardíaca deben iniciarse a dosis bajas y titular lentamente.</li>
        <li>No recomendados como monoterapia en pacientes mayores sin enfermedad cardiovascular.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Betabloqueadores</strong> + IECA o ARA II en insuficiencia cardíaca.</li>
        <li><strong>Betabloqueadores</strong> + calcioantagonista no dihidropiridínico (verapamilo o diltiazem) en arritmias (con precaución).</li>
        <li><strong>Betabloqueadores</strong> + diurético tiazídico en hipertensión.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Betabloqueadores</strong> son fármacos versátiles y eficaces en múltiples patologías cardiovasculares. Su uso debe adaptarse a cada paciente, 
        evaluando beneficios clínicos y posibles contraindicaciones, especialmente en patologías respiratorias o trastornos del ritmo.
      </p>
    </div>
  );
}

export default Betabloqueadores;
