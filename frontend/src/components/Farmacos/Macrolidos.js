

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Macrolidos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Macrólidos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Macrólidos</strong> son un grupo de antibióticos bacteriostáticos que actúan inhibiendo la síntesis proteica bacteriana, y son usados frecuentemente en infecciones respiratorias y otras infecciones causadas por bacterias gram positivas y algunas gram negativas atípicas.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se unen a la subunidad 50S del ribosoma bacteriano.</li>
        <li>Inhiben la síntesis proteica al bloquear la translocación del ARN mensajero.</li>
        <li>Principalmente bacteriostáticos, aunque a altas concentraciones pueden ser bactericidas.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Infecciones respiratorias: neumonía adquirida en la comunidad, bronquitis aguda</li>
        <li>Infecciones por bacterias atípicas: Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella</li>
        <li>Infecciones de piel y tejidos blandos</li>
        <li>En algunos casos, uso en infecciones por Helicobacter pylori (en combinación)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Azitromicina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500 mg el primer día, luego 250 mg/día por 4 días</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>68 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Claritromicina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>250-500 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-7 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Eritromicina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>250-500 mg cada 6 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1.5-2 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Gastrointestinales: náuseas, vómitos, diarrea</li>
        <li>Colestasis y hepatitis medicamentosa (raro)</li>
        <li>Prolongación del intervalo QT (riesgo de arritmias)</li>
        <li>Reacciones alérgicas: rash, urticaria</li>
        <li>Interacciones con otros fármacos por inhibición del CYP3A4 (claritromicina y eritromicina)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad a macrólidos</li>
        <li>Pacientes con arritmias o prolongación conocida del QT</li>
        <li>Uso concomitante con fármacos que prolongan el QT o metabolizados por CYP3A4 (en caso de claritromicina o eritromicina)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición del CYP3A4 (especialmente claritromicina y eritromicina): aumenta niveles de estatinas, anticoagulantes, benzodiacepinas, etc.</li>
        <li>Puede potenciar efectos de warfarina y aumentar riesgo hemorrágico</li>
        <li>Posible aumento de efectos de otros fármacos que prolongan el QT</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar combinación con fármacos que prolongan el QT o que son metabolizados por CYP3A4 (según macrólido)</li>
        <li>Monitorear función hepática en tratamientos prolongados</li>
        <li>Administrar con alimentos para mejorar tolerancia gastrointestinal</li>
        <li>Completar curso completo para evitar resistencia bacteriana</li>
      </ul>
    </div>
  );
}

export default Macrolidos;
