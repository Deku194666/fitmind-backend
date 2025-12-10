

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function FarmacosInforme() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'> Fármacos y Medicamentos </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>
        Registrar y consultar tus medicamentos es fundamental para llevar un control seguro de tu tratamiento. 
        Aquí podrás visualizar tus fármacos actuales, dosis, frecuencia y duración, asegurando un seguimiento adecuado y evitando errores de medicación.
      </p>

      <p className='p14'> Tipos de Fármacos 💊 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Antihipertensivos: para controlar la presión arterial. </li>
        <li> Antidiabéticos: para mantener niveles adecuados de glucosa en sangre. </li>
        <li> Analgésicos y antiinflamatorios: para el manejo del dolor y la inflamación. </li>
        <li> Suplementos y vitaminas: para mejorar el estado nutricional y la salud general. </li>
        <li> Otros medicamentos específicos según tu condición médica. </li>
      </ul>

      <p className='p14'> Beneficios de Registrar tus Medicamentos 📊 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}}>
        <li> Llevar un control seguro de tus dosis y horarios. </li>
        <li> Evitar interacciones o duplicaciones de medicamentos. </li>
        <li> Facilitar la comunicación con tu médico o farmacéutico. </li>
        <li> Monitorear la adherencia al tratamiento. </li>
        <li> Tener un historial completo de tu farmacoterapia para consultas futuras. </li>
      </ul>

      <p className='p14'> Registro y Seguimiento 🗂️ </p>
      <p className='p150'>
        Desde aquí podrás acceder a tu historial de fármacos, agregar nuevos medicamentos, modificar dosis o frecuencia y revisar alertas de caducidad o interacciones.
      </p>

 
      <p className='p150' style={{ marginTop: '2rem' }}>
        Mantener un registro completo y actualizado de tus medicamentos es clave para un manejo seguro y efectivo de tu salud.
      </p>
    </div>
  );
}

export default FarmacosInforme;
