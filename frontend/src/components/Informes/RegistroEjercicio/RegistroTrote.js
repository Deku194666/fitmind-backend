

// RegistroTrote.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import BarNavTrote from './BarNavTrote';
 
function RegistroTrote() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        < BarNavTrote />
   

      <p className="p13">🏃‍♂️ Trote</p>

      <p className="p14">Introducción📌</p>
      <p className="p150">
        En esta sección podrás revisar y analizar tus sesiones de trote. El módulo registra el tiempo total mediante un
        cronómetro y estima las calorías quemadas, para que hagas seguimiento de tu progreso de forma simple y visual.
      </p>

      <p className="p14">Qué encontrarás en este módulo📊</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Vista del <strong>último trote</strong> (tiempo, calorías y fecha).</li>
        <li><strong>Historial</strong> con filtros por rango de fechas y orden cronológico.</li>
        <li><strong>Resumen</strong> semanal/mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong> (última sesión y totales del día).</li>
        <li>Interfaz <strong>responsiva</strong> y controles accesibles (iniciar/pausar/finalizar).</li>
        <li>Calorías mostradas como <strong>estimación</strong> (ajustable en el futuro).</li>
      </ul>

      <p className="p14">Accede a tus registros históricos📂</p>
      <p className="p150">
        Todos tus trotes quedan almacenados de forma segura. Revíselos cuando quieras para identificar tendencias,
        planificar tus rutinas y evaluar tu evolución en resistencia aeróbica.
      </p>

      <p className="p150" style={{ marginTop: '2rem' }}>
        Mantén un seguimiento constante de tus trotes para optimizar resultados y prevenir lesiones.
        La constancia y el registro marcan la diferencia.
      </p>
    </div>
  );
}

export default RegistroTrote;
