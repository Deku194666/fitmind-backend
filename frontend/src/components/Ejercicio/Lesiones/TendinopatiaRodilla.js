

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiasRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesiones Tendinosas de Rodilla</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las <strong>tendinopatías y roturas de tendones de rodilla</strong> son lesiones frecuentes, especialmente en deportistas. 
        Afectan principalmente al <strong>tendón rotuliano</strong> y al <strong>tendón cuadricipital</strong>, siendo causas importantes de dolor anterior de rodilla. 
        También pueden verse involucrados los tendones de la <strong>pata de ganso</strong>, especialmente en corredores y pacientes con sobrepeso.
      </p>

      <p className='p14'>Tendones Más Afectados 🦵</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tendón rotuliano</strong>: Desde el vértice de la rótula a la tuberosidad tibial</li>
        <li><strong>Tendón cuadricipital</strong>: Desde el cuádriceps al polo superior de la rótula</li>
        <li><strong>Pata de ganso</strong>: Inserción conjunta de sartorio, grácil y semitendinoso en tibia proximal medial</li>
      </ul>

      <p className='p14'>Clasificación Clínica 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I (Leve)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tendinopatía reactiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor post-ejercicio, sin limitación funcional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II (Moderado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tendinosis degenerativa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor al inicio, mejora con actividad, empeora al final</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III (Severo)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial o total</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor súbito, incapacidad para extender rodilla activamente</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor anterior</strong> a la palpación del tendón afectado</li>
        <li><strong>Signo de extensión activa</strong>: Dolor o imposibilidad al elevar pierna extendida</li>
        <li><strong>Prueba de salto</strong> o <strong>sentadilla</strong>: Reproduce dolor</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Engrosamiento, degeneración, rotura parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial, dinámica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa, edema, cambios crónicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación y planificación quirúrgica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Reposo relativo y modificación de la carga</li>
        <li>Ejercicios excéntricos (squat en declive, step up)</li>
        <li>Infiltraciones con PRP o corticoides (casos seleccionados)</li>
        <li>Fisioterapia con terapia manual, electroanalgesia y estiramientos</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Indicado en roturas completas o lesiones crónicas refractarias</li>
        <li><strong>Sutura directa</strong> del tendón rotuliano o cuadricipital</li>
        <li><strong>Desbridamiento</strong> en casos de tendinosis severa</li>
        <li>Refuerzos con injerto en roturas extensas</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Rodillera ortopédica en extensión 4-6 semanas</li>
        <li>Descarga parcial con bastones progresiva</li>
        <li>Rehabilitación desde la semana 2 con movilización pasiva</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control del dolor, movilización pasiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Activación del cuádriceps, ROM progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento excéntrico, equilibrio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Saltos, pliometría, gestos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (6+ mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno al deporte progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Individualizado</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Ejercicios excéntricos regulares (sentadillas en pendiente)</li>
        <li>Corrección biomecánica (pisada, alineación de miembros inferiores)</li>
        <li>Evitar sobrecarga aguda o entrenamiento excesivo</li>
        <li>Calentamiento y enfriamiento adecuados en entrenamientos</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas de la rodilla son comunes, especialmente en personas activas. Su manejo depende del grado de afectación e incluye fisioterapia específica y, en casos graves, cirugía. 
        La rehabilitación progresiva y un enfoque preventivo son esenciales para evitar recurrencias y lograr una recuperación funcional completa.
      </p>
    </div>
  );
}

export default TendinopatiasRodilla;
