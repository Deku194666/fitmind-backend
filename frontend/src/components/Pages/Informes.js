import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Informes.css';
import TertiaryBar from '../TertiaryBar';
import SecondaryBar from '../SecondaryBar';
import BarNavInforme from '../Informes/BarNavInforme';
import BarNavInforme2 from '../Informes/BarNavInforme2';

function Informes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <BarNavInforme2 />
      <BarNavInforme />

      <p className='p13'>📊 Informes de Salud</p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        En esta sección encontrarás un resumen completo de tu estado de salud basado en los registros diarios, semanales y mensuales de tus hábitos y actividades. 
        Aquí podrás revisar información consolidada de tus módulos de ejercicio, hidratación, signos vitales, sueño, alimentación y más, para monitorear tu progreso.
      </p>

      <p className='p14'>Módulos disponibles🧩</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>🏃‍♂️ <strong>Ejercicio:</strong> Resumen de minutos semanales, tipo de actividad y rendimiento.</li>
        <li>💧 <strong>Hidratación:</strong> Consumo diario de agua, promedio semanal y mensual.</li>
        <li>🩺 <strong>Signos Vitales:</strong> Valores más recientes y tendencias históricas.</li>
        <li>💤 <strong>Sueño:</strong> Horas dormidas, calidad del sueño y comparativos por semana/mes.</li>
        <li>🥗 <strong>Alimentación:</strong> Calidad nutricional y registro histórico de ingesta.</li>
      </ul>

      <p className='p14'>Resúmenes Semanales y Mensuales📊</p>
      <p className='p150'>
        Cada módulo ofrece resúmenes semanales y mensuales que te permiten visualizar tus progresos y detectar patrones en tus hábitos. 
        Además, podrás comparar tus métricas actuales con periodos anteriores para mejorar tu salud de manera constante.
      </p>

      <p className='p14'>Historial completo📂</p>
      <p className='p150'>
        Todos los registros quedan almacenados de forma segura, lo que te permite acceder a tu historial completo en cualquier momento. 
        Esto facilita el seguimiento de tus avances, la detección de áreas de mejora y la planificación de metas personalizadas.
      </p>

      <p className='p14'>Próximamente✨</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Gráficos interactivos para cada módulo.</li>
        <li>Alertas y notificaciones personalizadas.</li>
        <li>Exportación de informes a PDF.</li>
        <li>Análisis inteligentes de tus hábitos para recomendaciones personalizadas.</li>
      </ul>

      <p className='p14'>✅Conclusión✅</p>
      <p className='p150'>
        La sección de informes te permitirá tener una visión integral de tu salud, motivarte a mantener hábitos saludables y tomar decisiones informadas para mejorar tu bienestar. 
        El seguimiento regular y el análisis de tus datos son clave para alcanzar tus objetivos de salud de forma efectiva.
      </p>
    </div>
  );
}

export default Informes;
