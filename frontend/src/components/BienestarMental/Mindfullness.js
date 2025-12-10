

import React from 'react';
import '../../App.css';

function Mindfulness() {
  return (
    <div className='contenido'>
      <h1 className='titulo seccion-titulo'>🧠 Mindfulness y Gestión Emocional</h1>

      <p className='p14'>📘 ¿Qué es el Mindfullness?</p>
      <p className='p150'>
        Mindfullness, o atención plena, es la capacidad de estar presente en el momento con conciencia, sin juzgar lo que ocurre.
        Esta práctica mejora la regulación emocional, reduce el estrés y mejora el rendimiento físico y mental.
      </p>

      <p className='p14'>🎯 Aplicación en el ejercicio físico</p>
      <ul className='p150'>
        <li>Permite una mayor conexión cuerpo-mente durante el entrenamiento.</li>
        <li>Reduce distracciones y mejora el enfoque en la técnica.</li>
        <li>Contribuye a la prevención de lesiones al aumentar la conciencia corporal.</li>
      </ul>

      <p className='p14'>💡 Estrategias prácticas de Mindfulness</p>
      <ul className='p150'>
        <li><strong>Respiración consciente:</strong> Enfocar tu atención en la inhalación y exhalación.</li>
        <li><strong>Escaneo corporal:</strong> Recorrer mentalmente cada parte del cuerpo para detectar tensiones.</li>
        <li><strong>Aceptación:</strong> Observar pensamientos negativos sin juzgarlos ni reaccionar impulsivamente.</li>
      </ul>

      <p className='p14'>🧬 Neurobiología del Mindfulness</p>
      <p className='p150'>
        Estudios con neuroimagen muestran cambios funcionales y estructurales en áreas como la <strong>corteza prefrontal</strong>,
        <strong> amígdala</strong> y <strong>ínsula</strong>. Esto se traduce en una mejor regulación emocional, mayor conciencia interoceptiva
        y menor reactividad al estrés.
      </p>
      <p className='p150'>
        Tras 8 semanas de práctica se han visto <strong>incrementos en la densidad de materia gris</strong> en regiones asociadas al
        aprendizaje y control emocional.
      </p>

      <p className='p14'>🩺 Uso en Patologías Crónicas</p>
      <ul className='p150'>
        <li><strong>Diabetes:</strong> Ayuda al control glucémico al reducir cortisol y estrés.</li>
        <li><strong>Hipertensión:</strong> Reduce la presión arterial basal.</li>
        <li><strong>Dolor crónico:</strong> Cambia la relación con el dolor y disminuye la catastrofización.</li>
        <li><strong>Asma:</strong> Mejora la percepción de los síntomas y la capacidad de autorregulación.</li>
      </ul>

      <p className='p14'>📊 Mindfulness y Rendimiento Cognitivo</p>
      <ul className='p150'>
        <li>Incrementa la <strong>atención sostenida</strong> y disminuye la distracción.</li>
        <li>Potencia funciones ejecutivas como la planificación, flexibilidad cognitiva e inhibición.</li>
        <li>Ayuda a tomar decisiones más racionales bajo presión.</li>
      </ul>

      <p className='p14'>🧘 Ejercicios sugeridos para principiantes</p>
      <ul className='p150'>
        <li><strong>Respiración 4-7-8:</strong> Inhala 4s, retén 7s, exhala 8s. Repite 4 veces.</li>
        <li><strong>Escaneo corporal:</strong> Desde los pies hasta la cabeza en 2 minutos.</li>
        <li><strong>Atención plena auditiva:</strong> Escucha sonidos del entorno por 1 minuto, sin etiquetar.</li>
      </ul>

      <p className='p14'>🧩 Aplicación en Ansiedad y Depresión</p>
      <ul className='p150'>
        <li>Disminuye el <strong>rumiado mental</strong> y mejora el estado de ánimo.</li>
        <li>Reduce la activación fisiológica en estados ansiosos.</li>
        <li>Favorece una actitud de observación no reactiva ante pensamientos negativos.</li>
      </ul>

      <p className='p14'>📋 Rutina Mindfulness para el Ejercicio</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Etapa</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicio Mental</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antes de entrenar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              2 minutos de respiración consciente, atención a sensaciones físicas.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Durante el entrenamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Foco en el cuerpo, técnica, ritmo respiratorio. Repetición mental de mantras positivos.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Escaneo corporal rápido + agradecimiento interno por el esfuerzo.
            </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📈 Seguimiento en FitMind</p>
      <p className='p150'>
        En el futuro podrás registrar sesiones de mindfulness dentro de la app, indicando duración, nivel de estrés antes y después,
        y tipo de práctica (pasiva, activa, en movimiento). Esto te permitirá visualizar tu progreso en gráficos.
      </p>
    </div>
  );
}

export default Mindfulness;
