

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function BloqueadoresCanalesCa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
 
      <p className="p13">Bloqueadores de los Canales de Calcio (Calcioantagonistas)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Bloqueadores de los canales de calcio</strong> (BCC o calcioantagonistas) son medicamentos que inhiben la entrada de calcio a través de los canales tipo L en el músculo liso vascular y en el corazón. 
        Esta acción produce <strong>vasodilatación arterial</strong> y, en algunos casos, <strong>disminución de la contractilidad y la frecuencia cardíaca</strong>.
        Son ampliamente utilizados en el tratamiento de la <strong>hipertensión arterial</strong>, <strong>angina de pecho</strong> y ciertas <strong>arritmias cardíacas</strong>.
      </p>

      <p className="p14">🔬 Clasificación de Calcioantagonistas</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dihidropiridinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amlodipino, Nifedipino, Felodipino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Potente efecto vasodilatador; menor acción sobre el corazón</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No dihidropiridinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Verapamilo, Diltiazem</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Efecto combinado: vasodilatador y acción sobre nodo sinusal y AV</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipertensión arterial, especialmente en adultos mayores o pacientes afrodescendientes.</li>
        <li>Angina de pecho estable y vasoespástica (Prinzmetal).</li>
        <li>Taquiarritmias supraventriculares (verapamilo, diltiazem).</li>
        <li>Fenómeno de Raynaud (especialmente dihidropiridinas).</li>
        <li>Hipertensión en el embarazo (nifedipino de liberación prolongada).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Dihidropiridinas:</strong> Edema periférico (maleolar), cefalea, rubor, palpitaciones.</li>
        <li><strong>No dihidropiridinas:</strong> Bradicardia, bloqueo AV, estreñimiento (verapamilo).</li>
        <li>Hipotensión en pacientes sensibles.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No combinar verapamilo o diltiazem con betabloqueadores: riesgo de bloqueo AV o bradicardia severa.</li>
        <li>Preferidos en hipertensión sistólica aislada (ej: ancianos).</li>
        <li>Buena opción cuando hay intolerancia a IECA/ARA-II.</li>
        <li>Edema periférico no responde a diuréticos; es mejor reducir la dosis o combinar con IECA.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Calcioantagonista</strong> (amlodipino) + ARA II (valsartán).</li>
        <li><strong>Calcioantagonista</strong>  + IECA: sinergia en control de presión arterial y protección endotelial.</li>
        <li><strong>Calcioantagonista</strong>  + diurético tiazídico en HTA resistente.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Bloqueadores de los canales de calcio</strong> son una herramienta terapéutica segura y efectiva para el manejo de la hipertensión y enfermedades cardiovasculares.
        Su elección depende del perfil del paciente y del subtipo de calcioantagonista, teniendo en cuenta tanto la eficacia como la tolerabilidad.
      </p>
    </div>
  );
}

export default BloqueadoresCanalesCa;
