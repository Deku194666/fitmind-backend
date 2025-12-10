

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import BarNavMental from './RegistroMental/BarNavMental';
 
function BienestarMentalInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
       < BarNavMental  />
      <p className='p13'> Bienestar Mental </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        El bienestar mental es un componente fundamental de la salud integral. 
        Registrar tus emociones, niveles de estrés y hábitos de meditación te permite identificar patrones, mejorar tu estado de ánimo y fortalecer tu resiliencia.
      </p>

      <p className='p14'> Beneficios del Bienestar Mental 🧘‍♂️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Mejora la concentración y la memoria. </li>
        <li> Reduce los niveles de estrés y ansiedad. </li>
        <li> Fortalece la resiliencia emocional. </li>
        <li> Favorece un sueño reparador y descanso adecuado. </li>
        <li> Promueve hábitos saludables y autocuidado. </li>
      </ul>

      <p className='p14'> Herramientas y Actividades 💡 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Meditación guiada y mindfulness. </li>
        <li> Ejercicios de respiración y relajación. </li>
        <li> Registro diario de emociones y estado de ánimo. </li>
        <li> Actividades de ocio y recreación para reducir el estrés. </li>
        <li> Prácticas de gratitud y autoevaluación emocional. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 📊 </p>
      <p className='p150'>
        Aquí podrás visualizar tus registros diarios, semanales y mensuales de bienestar mental, monitorear tus niveles de estrés y progreso en meditación, 
        y recibir recomendaciones personalizadas para mantener un estado emocional equilibrado.
      </p>
 

      <p className='p150' style={{ marginTop: '2rem' }}>
        Registrar tu bienestar mental te ayudará a mantener un equilibrio emocional y a potenciar tu salud integral.
      </p>
    </div>
  );
}

export default BienestarMentalInforme;
