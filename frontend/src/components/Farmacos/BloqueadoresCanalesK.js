

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BloqueadoresCanalesK() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Bloqueadores de los Canales de Potasio</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>bloqueadores de los canales de potasio</strong> pertenecen a la clase III de los antiarrítmicos según la clasificación de Vaughan Williams.
        Actúan prolongando la repolarización al inhibir los canales de potasio responsables de la fase 3 del potencial de acción, lo que prolonga el QT y el período
        refractario, ayudando a prevenir <strong>taquiarritmias supraventriculares y ventriculares</strong>.
      </p>

      <p className="p14">🔬 Ejemplos Representativos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso Clínico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amiodarona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolonga el QT, con acción en múltiples canales. Vida media muy larga.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Taquicardias ventriculares, fibrilación auricular.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sotalol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>También tiene efecto betabloqueador. Prolonga el intervalo QT.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arritmias supraventriculares y ventriculares.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dofetilida, Ibutilida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloqueo selectivo del canal I<sub>Kr</sub>. Uso hospitalario.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cardioversión química de FA o flutter auricular.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Fibrilación auricular (prevención de recurrencias o cardioversión farmacológica).</li>
        <li>Flutter auricular.</li>
        <li>Taquicardias ventriculares sostenidas.</li>
        <li>Prevención de muerte súbita en pacientes con alto riesgo (especialmente amiodarona).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prolongación del intervalo QT (riesgo de torsades de pointes).</li>
        <li>Bradicardia e hipotensión.</li>
        <li>Toxicidad tiroidea (hipo o hipertiroidismo con amiodarona).</li>
        <li>Fibrosis pulmonar (amiodarona a largo plazo).</li>
        <li>Hepatotoxicidad, fotosensibilidad y depósitos corneales (amiodarona).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>La amiodarona requiere monitoreo regular de función hepática, pulmonar, tiroidea y visual.</li>
        <li>Sotalol debe usarse con precaución en pacientes con insuficiencia renal (ajustar dosis).</li>
        <li>Evitar la combinación con otros fármacos que prolongan el QT.</li>
        <li>Dofetilida e ibutilida requieren hospitalización y ECG continuo durante su administración.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Amiodarona + marcapasos o desfibrilador implantable (como complemento).</li>
        <li>Sotalol + anticoagulante en FA.</li>
        <li>Amiodarona + betabloqueador en taquiarritmias refractarias (con vigilancia).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los bloqueadores de los canales de potasio son antiarrítmicos potentes y versátiles, especialmente útiles en la fibrilación auricular y las arritmias ventriculares.
        Sin embargo, requieren un uso cuidadoso debido a su perfil de toxicidad y riesgo de arritmias inducidas por fármacos.
      </p>
    </div>
  );
}

export default BloqueadoresCanalesK;
