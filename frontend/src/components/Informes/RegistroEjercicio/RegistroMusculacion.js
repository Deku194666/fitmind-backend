


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import BarNavMusculacionInforme from './BarNavMusculacion';
 
function RegistroMusculacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
   
    < BarNavMusculacionInforme  />
      

      <p className="p13">🏋️‍♂️ Musculación</p>

      <p className="p14">Introducción📌</p>
      <p className="p150">
        En esta sección podrás revisar y analizar tus sesiones de entrenamiento de fuerza (pesas y máquinas).
        El módulo registra el tiempo total de entrenamiento mediante un cronómetro y estima las calorías
        quemadas, permitiéndote hacer seguimiento de tu progreso de forma simple y visual.
      </p>

      <p className="p14">Qué encontrarás en este módulo📊</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Vista del <strong>último entrenamiento</strong> (tiempo, calorías y fecha).</li>
        <li><strong>Historial</strong> con filtros por rango de fechas y orden cronológico.</li>
        <li><strong>Resumen</strong> semanal/mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong> (última sesión y totales del día).</li>
        <li>Interfaz <strong>responsiva</strong> y controles accesibles (iniciar/pausar/finalizar).</li>
        <li>Indicador de calorías como <strong>estimación</strong> (sujeta a ajuste futuro).</li>
      </ul>

      <p className="p14">Accede a tus registros históricos📂</p>
      <p className="p150">
        Todos tus entrenamientos quedan almacenados de forma segura. Puedes revisarlos en cualquier
        momento para identificar tendencias, planificar tus rutinas y evaluar tu evolución en fuerza y resistencia.
      </p>

      <p className="p150" style={{ marginTop: '2rem' }}>
        Mantén un seguimiento constante de tu musculación para optimizar resultados y prevenir lesiones.
        Un progreso consistente comienza con un registro ordenado.
      </p>
    </div>
  );
}

export default RegistroMusculacion;
