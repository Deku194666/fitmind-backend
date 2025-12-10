

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DPF() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Disfunción Patelofemoral (DPF)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        La <strong>Disfunción Patelofemoral (DPF)</strong> es una de las causas más frecuentes de dolor anterior de rodilla, representando el <strong>25-40% de todas las consultas</strong> por dolor en esta articulación. 
        Es un síndrome multifactorial caracterizado por dolor retropatelar o peripatelar que se exacerba con actividades que cargan la articulación en flexión (subir/bajar escaleras, ponerse en cuclillas).
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación patelofemoral</strong>: Formada por la rótula y la tróclea femoral. Soportan fuerzas de 3-7x el peso corporal al subir escaleras.
        </li>
        <li>
          <strong>Estabilizadores</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Medial</strong>: Vasto medial oblicuo (VMO)</li>
            <li><strong>Lateral</strong>: Retináculo lateral</li>
            <li><strong>Estáticos</strong>: Ligamento patelofemoral medial (LPFM)</li>
          </ul>
        </li>
        <li>
          <strong>Ángulo Q</strong>: Normal 10-15° (mayor en mujeres). Aumentado predispone a DPF.
        </li>
      </ul>

      <p className='p14'>Clasificación 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>DPF Mecánica</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Malalineamiento patelar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad, subluxación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>DPF por Sobrecarga</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso excesivo sin malalineamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor difuso retropatelar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>DPF Secundaria</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Post-traumática/postquirúrgica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fibrosis, alteración biomecánica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Biomecánicos</strong>: Ángulo Q aumentado, rotación femoral interna, pies pronados</li>
        <li><strong>Musculares</strong>: Debilidad VMO, isquiotibiales/cuádriceps tensos</li>
        <li><strong>Actividades</strong>: Deportes con saltos (baloncesto, voleibol), ciclismo con sillín bajo</li>
        <li><strong>Otros</strong>: Sexo femenino (2:1 vs hombres), laxitud ligamentaria</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de compresión patelar</strong>: Dolor al presionar rótula contra fémur</li>
        <li><strong>Prueba de aprensión</strong>: Miedo a la luxación al desplazar rótula lateralmente</li>
        <li><strong>Evaluación de tracking patelar</strong>: Observar movimiento en flexo-extensión</li>
        <li><strong>Palpación</strong>: Dolor en facetas mediales/laterales</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Utilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link> (Merchant/Laurin)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Índice de congruencia, subluxación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RNM</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, cartílago articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar lesiones asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracking patelar en movimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Fase Aguda (0-4 semanas)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Modificación de actividades</strong>: Evitar flexiones profundas (mayor a 60°)</li>
        <li><strong>Crioterapia</strong>: 15-20 min post-actividad</li>
        <li><strong>AINEs</strong>: Corto plazo para control sintomático</li>
        <li><strong>Kinesiotape</strong>: Corrección mecánica y analgesia</li>
      </ul>

      <p className='p16'>Fase de Rehabilitación (4-12 semanas)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento selectivo</strong>: VMO (ejercicios en 0-30° flexión)</li>
        <li><strong>Estiramientos</strong>: Isquiotibiales, banda iliotibial, cuádriceps</li>
        <li><strong>Ejercicios funcionales</strong>: Sentadillas parciales, step-ups</li>
        <li><strong>Propiocepción</strong>: Tabla de equilibrio, superficies inestables</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones (solo si falla tratamiento conservador mayor a 6 meses):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lateral release</strong>: Retináculo lateral tenso</li>
        <li><strong>Reconstrucción MPFL</strong>: Inestabilidad patelar recurrente</li>
        <li><strong>Osteotomía tibial</strong>: Ángulo TT-TG mayor a 20mm</li>
        <li><strong>Artroscopia</strong>: Para lesiones condrales asociadas</li>
      </ul>

      <p className='p14'>Rehabilitación Postquirúrgica 🏋️‍♂️</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, ROM 0-90°</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, marcha normal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 70% contralateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3+ meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Ejercicios Clave 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Terminal knee extensions</strong>: Fortalecimiento VMO</li>
        <li><strong>Clamshells con banda</strong>: Glúteo medio</li>
        <li><strong>Step-downs controlados</strong>: Control excéntrico</li>
        <li><strong>Monopodal en superficie inestable</strong>: Propiocepción</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La <strong> DPF </strong> requiere un enfoque multifactorial que combine modificación de actividades, fortalecimiento selectivo y corrección biomecánica. 
        El tratamiento conservador es exitoso en el 90% de los casos cuando se implementa adecuadamente. La cirugía debe reservarse para casos 
        seleccionados con alteraciones estructurales demostradas que no responden a 6 meses de rehabilitación supervisada.
      </p>
    </div>
  );
}

export default DPF;