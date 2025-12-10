

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function SuenoInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'> Sueño </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        El sueño es un proceso fisiológico esencial para la salud física y mental. Mantener un patrón adecuado de sueño permite
        la recuperación del cuerpo, mejora la memoria, regula el metabolismo y fortalece el sistema inmunológico.
      </p>

      <p className='p14'> Importancia del Sueño🛌 </p>
      <p className='p150'>
        La falta de sueño puede afectar la concentración, incrementar el riesgo de enfermedades cardiovasculares, diabetes, obesidad y
        problemas de salud mental como ansiedad y depresión. Dormir bien es clave para mantener un estilo de vida saludable.
      </p>

      <p className='p14'> Recomendaciones 💤 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Mantener un horario regular para dormir y despertar. </li>
        <li> Evitar el uso de pantallas antes de dormir. </li>
        <li> Crear un ambiente oscuro, silencioso y fresco en la habitación. </li>
        <li> Evitar comidas pesadas y cafeína cerca de la hora de dormir. </li>
        <li> Realizar actividad física regularmente, pero no justo antes de dormir. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 📊 </p>
      <p className='p150'>
        En esta sección podrás visualizar tus registros de sueño diarios, semanales y mensuales, así como analizar patrones
        de descanso y calidad del sueño.
      </p>

 
      <p className='p150' style={{ marginTop: '2rem' }}>
        Mantener un seguimiento constante del sueño te ayudará a mejorar tu bienestar y tu rendimiento diario.
      </p>
    </div>
  );
}

export default SuenoInforme;
