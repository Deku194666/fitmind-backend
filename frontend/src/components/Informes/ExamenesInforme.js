

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function ExamenesInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'> Exámenes Médicos </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        Registrar y consultar tus exámenes médicos es fundamental para monitorear tu salud y detectar posibles alteraciones de manera temprana. 
        Aquí podrás visualizar tus análisis de sangre, estudios de imagen, pruebas funcionales y más.
      </p>

      <p className='p14'> Tipos de Exámenes 🧪 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Análisis de sangre: glucosa, colesterol, hemograma, hormonas, entre otros. </li>
        <li> Exámenes de orina y heces. </li>
        <li> Imagenología: radiografías, ecografías, resonancias magnéticas. </li>
        <li> Pruebas funcionales: electrocardiogramas, pruebas de esfuerzo, espirometrías. </li>
        <li> Exámenes especializados según tu historial médico. </li>
      </ul>

      <p className='p14'> Beneficios de Registrar tus Exámenes 📊 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Monitoreo del estado de salud a lo largo del tiempo. </li>
        <li> Detección temprana de alteraciones o enfermedades. </li>
        <li> Facilita la comunicación con tu profesional de salud. </li>
        <li> Permite comparar resultados actuales con históricos. </li>
        <li> Ayuda a tomar decisiones informadas sobre tu cuidado y estilo de vida. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 🗂️ </p>
      <p className='p150'>
        Desde aquí podrás acceder a tus exámenes médicos registrados, filtrarlos por tipo, fecha o importancia, y visualizar tendencias a través de gráficos y resúmenes semanales, mensuales o anuales.
      </p>

 
      <p className='p150' style={{ marginTop: '2rem' }}>
        Mantener un historial completo de tus exámenes médicos te permitirá tomar control de tu salud y prevenir complicaciones a largo plazo.
      </p>
    </div>
  );
}

export default ExamenesInforme;
