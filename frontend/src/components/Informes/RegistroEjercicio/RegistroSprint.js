


// RegistroSprint.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarNavSprint from './BarNavSprint';

 
function RegistroSprint() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
         < BarNavSprint />
 
      <p className="p13">⚡ Sprint</p>

      <p className="p14">Introducción📌</p>
      <p className="p150">
        En esta sección podrás revisar y analizar tus sesiones de sprint por intervalos. El módulo registra el
        tiempo total mediante un cronómetro y estima las calorías quemadas, para que sigas tu progreso de forma
        simple y visual.
      </p>

      <p className="p14">Qué encontrarás en este módulo📊</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Vista del <strong>último sprint</strong> (tiempo, calorías y fecha).</li>
        <li><strong>Historial</strong> con filtros por rango de fechas y orden cronológico.</li>
        <li><strong>Resumen</strong> semanal/mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong> (última sesión y totales del día).</li>
        <li>Interfaz <strong>responsiva</strong> y controles accesibles (iniciar/pausar/finalizar).</li>
        <li>Calorías mostradas como <strong>estimación</strong> (ajustable en el futuro).</li>
      </ul>

      <p className="p14">Accede a tus registros históricos📂</p>
      <p className="p150">
        Todas tus sesiones de sprint quedan almacenadas de forma segura. Revíselas cuando quieras para identificar
        tendencias, planificar tus intervalos y evaluar tu evolución en velocidad y potencia.
      </p>

      <p className="p150" style={{ marginTop: '2rem' }}>
        Mantén un seguimiento constante de tus entrenamientos para optimizar resultados y evitar lesiones.
        La constancia y el registro marcan la diferencia.
      </p>
    </div>
  );
}

export default RegistroSprint;
