

import React, { useEffect } from 'react';

function EjerciciosRelajacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Guía Integral de Ejercicios de Relajación</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Los <strong>Ejercicios de Relajación</strong> tienen como objetivo reducir la tensión muscular, el estrés mental y promover un estado de bienestar general. Son recomendados tanto en contextos clínicos como en la vida diaria, y pueden ser complementarios a programas de ejercicio físico, fisioterapia, manejo de dolor crónico o enfermedades crónicas no transmisibles.
      </p>

      <p className='p14'>🌿 Beneficios Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Disminución del estrés y la ansiedad.</li>
        <li>Reducción de la frecuencia cardíaca y presión arterial.</li>
        <li>Mejoría en la calidad del sueño.</li>
        <li>Incremento en la conciencia corporal y control respiratorio.</li>
        <li>Prevención de contracturas musculares por tensión crónica.</li>
      </ul>

      <p className='p14'>Tipos de Técnicas de Relajación 🧘</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Técnica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración Recomendada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Respiración Diafragmática</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalar profundamente usando el diafragma para controlar el ritmo respiratorio.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10 minutos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Relajación Muscular Progresiva (RMP)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tensar y relajar sistemáticamente grupos musculares.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20 minutos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Visualización Guiada</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Imaginar paisajes o situaciones tranquilas para inducir un estado de calma.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-15 minutos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Mindfulness</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Atención plena al presente sin juicio, centrado en la respiración o cuerpo.</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20 minutos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>🔄 Protocolo de Relajación Diario</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase inicial (1-2 semanas)</strong>: Respiración diafragmática + estiramientos suaves.</li>
        <li><strong>Fase media (2-4 semanas)</strong>: Agregar relajación muscular progresiva.</li>
        <li><strong>Fase avanzada (desde 1 mes)</strong>: Integrar visualización o mindfulness guiado.</li>
        <li><strong>Frecuencia recomendada</strong>: 1-2 veces al día, idealmente en la mañana o antes de dormir.</li>
      </ul>

      <p className='p14'>🧘 Ejercicios Prácticos</p>
      <p className='p16'>1. Respiración Diafragmática</p>
      <ul className='p150'>
        <li>Sentado o acostado, coloca una mano sobre el abdomen y otra en el pecho.</li>
        <li>Inhala por la nariz durante 4 segundos (siente el abdomen subir).</li>
        <li>Retén 2 segundos, exhala por la boca en 6 segundos.</li>
        <li>Repite durante 5-10 minutos.</li>
      </ul>

      <p className='p16'>2. Relajación Muscular Progresiva</p>
      <ul className='p150'>
        <li>En posición cómoda, comienza tensando los músculos de los pies durante 5 segundos.</li>
        <li>Libera la tensión lentamente mientras exhalas.</li>
        <li>Repite con piernas, glúteos, abdomen, manos, brazos, cuello y cara.</li>
      </ul>

      <p className='p16'>3. Visualización Guiada</p>
      <ul className='p150'>
        <li>En posición cómoda, cierra los ojos y visualiza un lugar seguro y relajante (playa, bosque, lago).</li>
        <li>Imagina los sonidos, olores y sensaciones.</li>
        <li>Respira profundamente mientras te mantienes en la escena durante 10-15 minutos.</li>
      </ul>

      <p className='p14'>🎯 Indicaciones y Recomendaciones</p>
      <ul className='p150'>
        <li>Realizar en un ambiente tranquilo, sin interrupciones.</li>
        <li>Evitar practicar justo después de comer.</li>
        <li>Usar música relajante o audios guiados si es útil.</li>
        <li>No forzar ninguna técnica: adaptar a las capacidades y preferencias del usuario.</li>
      </ul>

      <p className='p14'>📌 Contraindicaciones Relativas</p>
      <ul className='p150'>
        <li>Trastornos psiquiátricos agudos no controlados (consultar con especialista).</li>
        <li>Hiperventilación inducida por ansiedad grave (precaución con respiración guiada).</li>
      </ul>

      <p className='p14'>🔁 Seguimiento y Evaluación</p>
      <ul className='p150'>
        <li>Usar escalas de ansiedad o estrés percibido (como el PSS).</li>
        <li>Registrar frecuencia de uso en el dashboard de FitMind.</li>
        <li>Permitir feedback del usuario para adaptar la rutina.</li>
      </ul>

      <p className='p13' style={{ marginTop: '3rem' }}>✨ Finaliza tu rutina con gratitud y respiración lenta. Tu bienestar es prioridad.</p>
    </div>
  );
}

export default EjerciciosRelajacion;
