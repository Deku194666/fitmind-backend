

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarNavSVInforme from './BarNavSVInforme'; 
import BarNavHidraInforme from './BarNavHidraInforme';


function HidratacionInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      < BarNavHidraInforme  />
      <p className='p13'> Hidratación </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        Mantener una adecuada ingesta de agua es fundamental para el correcto funcionamiento de todos los sistemas del cuerpo.
        La hidratación afecta la digestión, circulación, regulación de la temperatura, función renal y rendimiento físico y mental.
      </p>

      <p className='p14'> Importancia de la Hidratación 💧 </p>
      <p className='p150'>
        La deshidratación puede causar fatiga, dolor de cabeza, disminución del rendimiento cognitivo y problemas en órganos vitales. 
        Mantenerse hidratado ayuda a mantener energía, concentración y bienestar general.
      </p>

      <p className='p14'> Recomendaciones 🥤 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Beber agua de forma regular a lo largo del día, incluso si no se siente sed. </li>
        <li> Consumir frutas y verduras con alto contenido de agua. </li>
        <li> Evitar bebidas azucaradas o con exceso de cafeína como principal fuente de hidratación. </li>
        <li> Ajustar la cantidad de agua según actividad física, clima y necesidades individuales. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 📊 </p>
      <p className='p150'>
        Aquí podrás visualizar tus registros diarios, semanales y mensuales de hidratación, seguir tu progreso y asegurarte
        de cumplir con tu objetivo diario de consumo de agua.
      </p>



      <p className='p150' style={{ marginTop: '2rem' }}>
        Registrar y seguir tu hidratación te ayudará a mantener tu salud y energía a lo largo del día.
      </p>
    </div>
  );
}

export default HidratacionInforme;
