


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiaCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Tendinopatías de Cadera y Roturas Tendinosas</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las <strong>tendinopatías de cadera</strong> afectan con mayor frecuencia a los tendones glúteos, particularmente el <strong>glúteo medio</strong> y el <strong>glúteo menor</strong>. 
        Son una causa común de dolor lateral de cadera, especialmente en mujeres de mediana edad. Las <strong>roturas tendinosas</strong> pueden ocurrir por traumatismos, sobrecarga crónica o degeneración relacionada con la edad.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Glúteo medio y menor</strong>: Se insertan en el trocánter mayor del fémur y estabilizan la pelvis en la marcha.</li>
        <li><strong>Psoas ilíaco</strong>: Tendón anterior potente, implicado en tendinopatías anteriores.</li>
        <li><strong>Relacionados</strong>: Tensor de la fascia lata, piriforme, rotadores externos.</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tendinitis reactiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor local leve al apoyo, sin pérdida de fuerza</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Degeneración (tendinosis)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor persistente, debilidad, marcha con claudicación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Severa)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial o completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor agudo, incapacidad funcional, caída de pelvis (Trendelenburg)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor lateral de cadera</strong>: Palpación dolorosa sobre el trocánter mayor</li>
        <li><strong>Prueba de Trendelenburg</strong>: Positiva en rotura glútea</li>
        <li><strong>Resistencia a abducción</strong>: Dolor y debilidad</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tendón engrosado, hipoecoico o con rotura</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico inicial, guía para infiltraciones</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura, atrofia muscular, edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard diagnóstico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Reposo relativo y corrección biomecánica</li>
        <li>Fisioterapia: ejercicios excéntricos y estabilización pélvica</li>
        <li>Infiltraciones con corticoides o PRP</li>
        <li>Ondas de choque extracorpóreas (en tendinosis crónica)</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación abierta o artroscópica</strong>: Sutura del tendón al trocánter mayor</li>
        <li><strong>Tenodesis o transferencias musculares</strong>: En casos severos o crónicos</li>
        <li><strong>Descompresión trocantérica</strong>: En bursitis asociada</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Descarga parcial 4-6 semanas con bastones</li>
        <li>Fisioterapia progresiva desde semana 2</li>
        <li>Retorno deportivo entre 4-6 meses</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control de dolor, evitar carga excesiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Activación neuromuscular, marcha asistida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo glúteo medio/menor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (3-6 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios funcionales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 (6+ mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno a actividad deportiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Según evolución</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fortalecimiento de glúteo medio y core</li>
        <li>Corrección de patrones de marcha y apoyo</li>
        <li>Evitar sobreuso, especialmente en corredores</li>
        <li>Estiramientos controlados post-ejercicio</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las tendinopatías y roturas tendinosas de cadera son una causa común de dolor y disfunción, especialmente en población activa. 
        El abordaje debe ser integral, incluyendo tratamiento conservador, fisioterapia específica y, en casos severos, reparación quirúrgica. 
        La rehabilitación adecuada es clave para el éxito terapéutico y la prevención de recaídas.
      </p>
    </div>
  );
}

export default TendinopatiaCadera;
