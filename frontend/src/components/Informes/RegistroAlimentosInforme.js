

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function RegistroAlimentosInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'> Registro de Alimentos </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        La alimentación equilibrada es clave para mantener la salud física, mental y prevenir enfermedades crónicas. 
        Registrar los alimentos que consumes te ayuda a conocer tu ingesta calórica, nutricional y hábitos alimenticios.
      </p>

      <p className='p14'> Importancia de la Alimentación 🥗 </p>
      <p className='p150'>
        Una dieta balanceada proporciona los nutrientes necesarios para energía, crecimiento y reparación celular. 
        Permite mantener un peso saludable, optimizar el rendimiento físico y mental, y reducir el riesgo de enfermedades.
      </p>

      <p className='p14'> Buenas Prácticas Alimenticias 🍏 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Incluir variedad de frutas y verduras en cada comida. </li>
        <li> Consumir proteínas de calidad: carne magra, pescado, huevos, legumbres. </li>
        <li> Preferir granos integrales sobre refinados. </li>
        <li> Limitar azúcares añadidos, grasas saturadas y ultraprocesados. </li>
        <li> Mantener horarios regulares de alimentación y controlar el tamaño de las porciones. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 📊 </p>
      <p className='p150'>
        Aquí podrás visualizar tus registros diarios, semanales y mensuales de alimentación, analizar la calidad nutricional de tu dieta
        y hacer ajustes para alcanzar tus objetivos de salud.
      </p>

 
      <p className='p150' style={{ marginTop: '2rem' }}>
        Registrar y monitorear tu alimentación te permitirá tomar decisiones más conscientes para tu bienestar integral.
      </p>
    </div>
  );
}

export default RegistroAlimentosInforme;
