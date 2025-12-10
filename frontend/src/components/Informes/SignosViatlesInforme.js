

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarNavSVInforme from './BarNavSVInforme';
  
function SignosVitalesInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al tope superior de la página al cargar
  }, []);

  return (
    
    <div className="ecnt-detail">
       < BarNavSVInforme  />

      <p className='p13'>🩺 Signos Vitales</p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        En esta sección podrás revisar y analizar los registros de tus signos vitales, incluyendo frecuencia cardíaca, presión arterial, temperatura, saturación de oxígeno y frecuencia respiratoria.
        Aquí tendrás una visión clara de tu estado de salud a lo largo del tiempo.
      </p>

      <p className='p14'>Qué encontrarás en este módulo📊</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Visualización de tus registros diarios, semanales y mensuales.</li>
        <li>Comparación de tendencias de tus signos vitales.</li>
        <li>Acceso rápido al último registro ingresado.</li>
        <li>Alertas sobre valores fuera de rango (próximamente).</li>
      </ul>

      <p className='p14'>Accede a tus registros históricos📂</p>
      <p className='p150'>
        Todos tus registros de signos vitales quedan almacenados de forma segura. Puedes revisarlos en cualquier momento y analizar tus progresos para tomar decisiones informadas sobre tu salud.
      </p>

     

      <p className='p150' style={{ marginTop: '2rem' }}>
        Mantén un seguimiento constante de tus signos vitales para mejorar tu salud y prevenir posibles complicaciones.
      </p>
    </div>
  );
}

export default SignosVitalesInforme;
