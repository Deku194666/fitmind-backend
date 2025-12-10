
import React from 'react';
import NavBarCalSueno from './NavBarCalSueno';
import { FaRegSmile, FaShieldAlt, FaBrain, FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CalidadSueno.css';

const CalidadSueno = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <NavBarCalSueno />

      <div>
        <p className='titulo1' >  Calidad del Sueño  </p>

        <p className='parra2'  >  Dormir bien es fundamental para tu salud física, mental y emocional. En esta sección encontrarás consejos prácticos y 
          recursos para mejorar tu descanso y despertar con más energía.  </p>

        <p className='titulo2'>  ✨ Beneficios de un buen descanso:   </p>
        <ul  className='Lista'>
          <li className="flex items-center gap-2">
            <FaRegSmile className="text-blue-500" /> Mejora tu estado de ánimo y reduce el estrés
          </li>
          <li className="flex items-center gap-2">
            <FaShieldAlt className="text-green-500" /> Refuerza tu sistema inmunológico
          </li>
          <li className="flex items-center gap-2">
            <FaBrain className="text-purple-500" /> Favorece la memoria y la concentración
          </li>
          <li className="flex items-center gap-2">
            <FaBalanceScale className="text-orange-500" /> Ayuda al control hormonal y del peso corporal
          </li>
        </ul>

        <div >
          <p className='titulo2'>💡 Consejos para mejorar tu sueño:</p>
          <ul  className='Lista' >
            <li>Mantén horarios regulares para dormir y despertar</li>
            <li>Evita el uso de pantallas al menos 1 hora antes de dormir</li>
            <li>Limita la cafeína y alcohol por la noche</li>
            <li>Usa la cama solo para dormir (no para trabajar o ver TV)</li>
            <li>Practica ejercicios de relajación o respiración antes de acostarte</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalidadSueno;



