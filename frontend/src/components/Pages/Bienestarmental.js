

import React from 'react';
import './Bienestarmental.css';
import NavBarMind from './NavBarMind';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';


const BienestarMental = () => {

  const [yoga, setYoga] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchYoga = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/yoga/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ header requerido
      );
      if (!cancel) setYoga(res.data ?? null);
    } catch (error) {
      // ✅ 404 = no hay sesiones (no lo trates como error fatal)
      if (error.response?.status === 404) {
        if (!cancel) setYoga(null);
      } else {
        console.error('Error al cargar yoga:', error.response?.data || error.message);
      }
    }
  };

  fetchYoga();

  // 🔁 Auto-refresco si el módulo Yoga registra una nueva sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'yoga') fetchYoga();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);



  



  return (
    
    <div className="bienestar-container">
      <NavBarMind/>
      <p className='Parra1'>  Bienestar Mental: </p>
      <p className='Parra1´1'> Una Guía Integral para el Equilibrio Emocional y </p>
      <p className='Parra1´2'> la Salud Psicológica🧠🧘‍♂️  </p>
      
      
      <Paper  elevation={3} sx={{ padding: 8, width: 'fit-content', marginLeft: '6rem', marginTop: '5rem', borderRadius: '1rem', marginBottom: '3rem'  }}
>
  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
    🧘 Última sesión de yoga
  </Typography>
  {yoga ? (
    <>
      <Typography sx={{ fontSize:'1.3rem' }} >
        ⏱️ Tiempo realizado: {Math.floor(yoga.tiempo / 60)} min {yoga.tiempo % 60} seg
      </Typography >
      <Typography sx={{ fontSize:'1.3rem' }} >🔥 Calorías quemadas: {yoga.calorias} kcal</Typography>
      <Typography sx={{ fontSize:'1.3rem' }}  >
        📅 Fecha: {new Date(yoga.fecha).toLocaleString()}
      </Typography>
    </>
  ) : (
    <Typography>No hay sesiones registradas aún.</Typography>
  )}
</Paper>
      <p className='p150'>   El <strong> Bienestar Mental </strong>es un componente esencial de nuestra salud general que afecta cómo pensamos,
      sentimos y actuamos en nuestra vida diaria. En el módulo de <strong> FitMind, </strong> nos enfocamos en proporcionarte herramientas prácticas y 
      conocimientos científicos para cultivar una mente saludable, manejar el estrés efectivamente y desarrollar resiliencia emocional. </p>

      <p className='p16'>  📌Comprendiendo el Bienestar Mental </p>
      <p className='p150'> El bienestar mental va más allá de la simple ausencia de trastornos psicológicos. Se trata de:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Un estado de equilibrio emocional. </li>
        <li> 2. La capacidad para manejar el estrés cotidiano </li>
        <li> 3. Habilidades para mantener relaciones satisfactorias. </li>
        <li> 4. Flexibilidad para adaptarse a los cambios. </li>
        <li> 5. Sentido de propósito y significado en la vida.  </li>
      </ul>

      <p className='p16'>  📌Pilares Fundamentales del Bienestar Mental </p>
      <p className='p150'> a) Autoconocimiento emocional:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Técnicas de identificación y registro de emociones. </li>
        <li> 2. Desarrollo de inteligencia emocional. </li>
        <li> 3. Mindfulness para la conciencia plena. </li>
      </ul>
      <p className='p150'> b) Gestión del estrés: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Técnicas de respiración consciente. </li>
        <li> 2. Métodos de relajación muscular progresiva. </li>
        <li> 3. Planificación anti-estrés. </li>
      </ul>

      <p className='p150'> c) Hábitos mentales positivos: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Cultivo de pensamientos constructivos.  </li>
        <li> 2. Práctica de gratitud diaria. </li>
        <li> 3. Reframing cognitivo.   </li>
      </ul>

      <p className='p16'>  📌Herramientas Prácticas en FitMind: </p>
      <p className='p150'> a) Rutinas diarias para la salud mental:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Meditación guiada por niveles. </li>
        <li> 2. Ejercicios de journaling emocional. </li>
        <li> 3. Pausas activas mentales. </li>
      </ul>
      <p className='p150'> b) Programas especializados: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Manejo de ansiedad en 21 días. </li>
        <li> 2. Fortalecimiento de la autoestima. </li>
        <li> 3. Desarrollo de resiliencia. </li>
      </ul>

      <p className='p150'> c) Tecnología y bienestar mental: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Uso de wearables para monitoreo del estrés.  </li>
        <li> 2. Aplicaciones de seguimiento emocional. </li>
        <li> 3. Realidad virtual para terapias de relajación.   </li>
      </ul>

      <p className='p16'>  📌Integración con el Bienestar Físico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. El ejercicio beneficia la salud mental. </li>
        <li> 2. La nutrición afecta el estado de ánimo. </li>
        <li> 3. El descanso influye en la estabilidad emocional. </li>
      </ul>

      <p className='p150'>  En <strong>FitMind, </strong> entendemos que el bienestar mental es un viaje personal que requiere herramientas adecuadas 
      y acompañamiento profesional. Nuestro módulo está diseñado para ofrecerte un enfoque integral, práctico y basado en evidencia 
      científica para que puedas desarrollar fortaleza psicológica y disfrutar de una vida más plena y equilibrada. </p>



    </div>
  )
};

export default BienestarMental;

