

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiaHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesiones Tendinosas del Hombro</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones tendinosas del hombro son una de las causas más comunes de dolor y disfunción del miembro superior. Afectan principalmente al manguito rotador,
        un conjunto de tendones que estabilizan y movilizan la articulación glenohumeral. Estas lesiones pueden ser de tipo degenerativo o traumático, y van desde tendinopatías leves hasta roturas completas.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Manguito rotador</strong>: formado por los tendones del supraespinoso, infraespinoso, subescapular y redondo menor.</li>
        <li><strong>Porción larga del bíceps</strong>: transcurre intraarticularmente y puede verse afectada en patología del manguito.</li>
        <li><strong>Deltoides</strong>: músculo importante para la elevación, pero no parte del manguito.</li>
      </ul>

      <p className='p14'>Tendinopatías Comunes ⚠️</p>
      <ul className='p150'>
        <li><strong>Tendinopatía del supraespinoso</strong>: la más frecuente. Dolor en el arco doloroso (60°–120°) de abducción.</li>
        <li><strong>Tendinopatía del infraespinoso</strong>: dolor posterior, asociado a rotación externa.</li>
        <li><strong>Tendinopatía del subescapular</strong>: dolor anterior y debilidad en rotación interna.</li>
        <li><strong>Tendinopatía del bíceps</strong>: dolor anterior con irradiación al brazo. Posible asociación con ruptura parcial del manguito.</li>
      </ul>

      <p className='p14'>Roturas Tendinosas 🩸</p>
      <ul className='p150'>
        <li><strong>Rotura parcial</strong>: desgarros incompletos de espesor o longitud variable. Pueden ser dolorosas y funcionalmente limitantes.</li>
        <li><strong>Rotura completa del supraespinoso</strong>: pérdida de fuerza en abducción. Frecuente en mayores de 50 años.</li>
        <li><strong>Roturas masivas del manguito</strong>: compromiso de 2 o más tendones. Generan pseudoparesia.</li>
        <li><strong>Rotura de la porción larga del bíceps</strong>: signo de Popeye, suele no requerir reparación en mayores sedentarios.</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150'>
        <li><strong>Test de Jobe</strong>: debilidad en abducción contra resistencia → supraespinoso.</li>
        <li><strong>Test de Patte</strong>: rotación externa resistida → infraespinoso.</li>
        <li><strong>Lift-off Test</strong>: subescapular (rotación interna).</li>
        <li><strong>Test Speed/Yergason</strong>: dolor en tendón del bíceps.</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Utilidad</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evalúa continuidad y engrosamiento de tendones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Screening inicial y lesiones parciales</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico definitivo, visualización completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sospecha de rotura completa o lesión extensa</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150'>
        <li><strong>Reposo relativo</strong> y modificación de actividad</li>
        <li><strong>AINES</strong> y crioterapia en fase aguda</li>
        <li><strong>Ejercicios activos asistidos</strong> y progresivos</li>
        <li><strong>Fortalecimiento escapular</strong> y del manguito</li>
        <li><strong>Fisioterapia</strong>: US, electroanalgesia, kinesiotaping</li>
        <li><strong>Infiltraciones con corticoides</strong> (cuidado en lesiones degenerativas)</li>
        <li><strong>Ondas de choque</strong>: útil en tendinopatía calcificada</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150'>
        <li><strong>Reparación artroscópica</strong> de roturas del manguito (parciales o completas)</li>
        <li><strong>Tenotomía o tenodesis del bíceps</strong> si hay afectación significativa</li>
        <li><strong>Reconstrucción con injerto</strong> o prótesis reversa en casos irreparables</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0–4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, control del dolor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (4–8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilidad pasiva y activa asistida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (8–12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (12+ sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno a deporte y trabajo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1–3 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150'>
        <li>Evitar sobreuso por encima del nivel del hombro</li>
        <li>Fortalecimiento del manguito rotador y estabilizadores escapulares</li>
        <li>Mejorar la movilidad torácica y postura</li>
        <li>Técnica deportiva adecuada (lanzadores, nadadores, etc.)</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas del hombro son altamente prevalentes y afectan la calidad de vida y funcionalidad. Su tratamiento requiere un enfoque individualizado, multidisciplinario y progresivo.
        La detección precoz y la rehabilitación adecuada son esenciales para evitar roturas mayores o cronicidad.
      </p>
    </div>
  );
}

export default TendinopatiaHombro;
