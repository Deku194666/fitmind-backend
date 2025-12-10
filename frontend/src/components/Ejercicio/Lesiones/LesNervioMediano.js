

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesNervioMediano() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Lesión del Nervio Mediano</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El nervio mediano es responsable de la inervación motora de los músculos de la eminencia tenar y sensitiva de la palma de la mano. 
        Su compresión en el túnel carpiano afecta al <strong>3-6% de los adultos</strong>, siendo más frecuente en mujeres (3:1). 
        Las lesiones proximales pueden causar el característico "<strong>signo de la mano del simio</strong>".
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Origen</strong>: Cordones medial y lateral del plexo braquial (C5-T1)</li>
        <li><strong>Recorrido</strong>: Cara anterior del brazo, pasa por túnel carpiano</li>
        <li><strong>Ramas importantes</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Rama motora recurrente (eminencia tenar)</li>
            <li>Nervio interóseo anterior (flexores profundos)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Localizaciones Comunes de Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causa Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Túnel carpiano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome del túnel carpiano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión por retináculo flexor</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pronador redondo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Síndrome del pronador</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hipertrofia muscular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arco de Struthers</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión supracondílea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bandas fibrosas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Manifestaciones Clínicas 🩺</p>
      <p className='p16'>1. Síntomas Motores</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pérdida de oposición del pulgar</strong>: Dificultad para pinza fina</li>
        <li><strong>Debilidad flexión dedos índice y medio</strong></li>
        <li><strong>Atrofia eminencia tenar</strong>: En casos crónicos</li>
      </ul>

      <p className='p16'>2. Síntomas Sensitivos</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Parestesias</strong>: Pulgar, índice, medio y mitad radial del anular</li>
        <li><strong>Dolor nocturno</strong>: Característico en síndrome del túnel carpiano</li>
        <li><strong>Signo de Tinel</strong>: Percusión sobre trayecto nervioso</li>
      </ul>

      <p className='p14'>Pruebas Diagnósticas 🔍</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Técnica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Positividad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Phalen</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Flexión palmar máxima 60 seg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 68%, Especificidad 73%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tinel</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percusión sobre túnel carpiano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 50%, Especificidad 77%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba del círculo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Formar círculo con pulgar e índice</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alteración en lesión proximal</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Para Síndrome del Túnel Carpiano:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Férula nocturna</strong>: Posición neutra de muñeca</li>
        <li><strong>Modificación actividades</strong>: Evitar flexo-extensión repetitiva</li>
        <li><strong>Infiltraciones</strong>: Corticoesteroides locales</li>
        <li><strong>Terapia física</strong>: Ejercicios de deslizamiento nervioso</li>
      </ul>

      <p className='p16'>Para Lesiones Proximales:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reposo</strong>: Evitar movimientos repetitivos de pronación</li>
        <li><strong>Antiinflamatorios</strong>: Control de sintomatología</li>
        <li><strong>Órtesis</strong>: Para mantener función de pinza</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Falla tratamiento conservador (3-6 meses)</li>
        <li>Atrofia muscular o déficit motor progresivo</li>
        <li>EMG con denervación aguda</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Liberación del túnel carpiano</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Abierta vs endoscópica</li>
            <li>Tasa éxito mayor a 90% en casos típicos</li>
          </ul>
        </li>
        <li><strong>Descompresión del pronador</strong>: Liberación de arcadas fibrosas</li>
        <li><strong>Reparación microquirúrgica</strong>: Para lesiones traumáticas</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retiro suturas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilidad, deslizamiento nervioso</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza, función fina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor cicatricial</strong>: Principalmente en liberación abierta</li>
        <li><strong>Neuralgia</strong>: Dolor neuropático postquirúrgico</li>
        <li><strong>Recidiva</strong>: 5-10% de los casos</li>
        <li><strong>Pérdida fuerza de prensión</strong>: Temporal postquirúrgica</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ergonomía laboral</strong>: Posición neutra de muñecas</li>
        <li><strong>Pausas activas</strong>: En trabajos repetitivos</li>
        <li><strong>Fortalecimiento</strong>: Ejercicios de musculatura intrínseca</li>
        <li><strong>Control enfermedades sistémicas</strong>: Diabetes, hipotiroidismo</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        El nervio mediano es fundamental para la función fina de la mano. Su compresión en el túnel carpiano es extremadamente frecuente 
        y responde bien al tratamiento conservador en fases iniciales. Las lesiones proximales requieren alto índice de sospecha clínica. 
        La intervención quirúrgica temprana en casos seleccionados previene daño irreversible y mejora significativamente la calidad de vida.
      </p>
    </div>
  );
}

export default LesNervioMediano;