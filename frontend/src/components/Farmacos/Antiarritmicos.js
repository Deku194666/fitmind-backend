

import React, { useEffect } from 'react';
import NavBarAntiarrtimicos from './NavBarAntiarritmicos';
import { Link } from 'react-router-dom';

 
function Antiarritmicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        <NavBarAntiarrtimicos/>
      <p className="p13">Fármacos Antiarritmicos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Fármacos Antiarrítmicos</strong> son medicamentos utilizados para tratar y prevenir diferentes tipos de<Link to="/ecnt/arritmias"> Arritmias </Link> Cardíacas, 
        restaurando el ritmo normal del corazón y mejorando la función cardíaca. Se clasifican en función de su mecanismo de acción según la clasificación de Vaughan-Williams.
      </p>

      <p className="p14">🔬 Clasificación de Antiarritmicos (Vaughan-Williams)</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase I (bloqueadores de canales de sodio)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flecainida, Procainamida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reducen la velocidad de conducción en las fibras miocárdicas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase II (betabloqueadores)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metoprolol, Esmolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuyen la actividad simpática sobre el corazón</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase III (bloqueadores de canales de potasio)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amiodarona, Sotalol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolongan la repolarización y el potencial de acción</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clase IV (bloqueadores de canales de calcio)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Verapamilo, Diltiazem</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuyen la conducción en el nodo AV</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Otros</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adenosina, Digoxina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acción específica en el nodo AV o aumento del tono vagal</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Fibrilación auricular y aleteo auricular.</li>
        <li>Taquicardias supraventriculares.</li>
        <li>Taquicardias ventriculares.</li>
        <li>Prevención de arritmias post-infarto.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Amiodarona:</strong> Fibrosis pulmonar, alteraciones tiroideas, fotosensibilidad.</li>
        <li><strong>Betabloqueadores:</strong> Bradicardia, hipotensión, fatiga.</li>
        <li><strong>Digoxina:</strong> Intoxicación con náuseas, visión borrosa, arritmias.</li>
        <li><strong>Verapamilo/Diltiazem:</strong> Bloqueo AV, estreñimiento.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorear función tiroidea y pulmonar con amiodarona.</li>
        <li>Evitar digoxina en insuficiencia renal sin ajuste de dosis.</li>
        <li>Evaluar ECG antes de iniciar tratamiento antiarrítmico.</li>
        <li>Evitar combinaciones que prolonguen el QT.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Betabloqueador + amiodarona (en arritmias refractarias).</li>
        <li>Digoxina + betabloqueador (en fibrilación auricular crónica).</li>
        <li>Verapamilo + digoxina con monitoreo cercano (riesgo de bradicardia).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Antiarrítmicos </strong> son herramientas esenciales en el tratamiento de arritmias cardíacas. Su elección debe basarse en el tipo de arritmia, la función cardíaca del paciente y la presencia de comorbilidades, evaluando siempre la seguridad y el monitoreo necesario.
      </p>
    </div>
  );
}

export default Antiarritmicos;
