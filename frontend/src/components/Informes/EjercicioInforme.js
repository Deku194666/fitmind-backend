

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarNavEjercicioInforme from './BarNavEjercicioInforme';
import BarNavEjercicioInforme2 from './BarNavEjercicioInforme2';

 
function EjercicioInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <BarNavEjercicioInforme />
      < BarNavEjercicioInforme2   />
       <p className='p13'> Registro de Ejercicio </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        La actividad física regular es fundamental para mantener la salud cardiovascular, muscular y mental. 
        Registrar tus rutinas de ejercicio te permite medir tu progreso, establecer metas y optimizar tu rendimiento.
      </p>

      <p className='p14'> Beneficios del Ejercicio 🏋️‍♂️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Mejora la fuerza muscular y la resistencia. </li>
        <li> Favorece la salud cardiovascular y pulmonar. </li>
        <li> Ayuda a controlar el peso y la composición corporal. </li>
        <li> Reduce el estrés y mejora la salud mental. </li>
        <li> Aumenta la flexibilidad y previene lesiones. </li>
      </ul>

      <p className='p14'> Tipos de Actividad Física 🏃‍♀️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Aeróbica: caminar, correr, nadar, ciclismo. </li>
        <li> Fuerza: pesas, bandas elásticas, ejercicios de resistencia. </li>
        <li> Flexibilidad: estiramientos, yoga, pilates. </li>
        <li> Equilibrio y coordinación: ejercicios funcionales y propriocepción. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 📊 </p>
      <p className='p150'>
        Aquí podrás visualizar tus registros diarios, semanales y mensuales de actividad física, analizar la intensidad y duración de tus entrenamientos, 
        y hacer ajustes para alcanzar tus objetivos de salud y forma física.
      </p>

  

      <p className='p150' style={{ marginTop: '2rem' }}>
        Registrar tu actividad física te ayudará a mantener hábitos saludables y a mejorar tu bienestar integral.
      </p>
    </div>
  );
}

export default EjercicioInforme;
