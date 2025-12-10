

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiaTobPieDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesiones Tendinosas del Tobillo, Pie y Dedos</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones tendinosas en el tobillo, pie y dedos abarcan un conjunto de patologías comunes, especialmente en deportistas y personas activas.
        Incluyen desde tendinopatías crónicas por sobreuso hasta roturas agudas traumáticas. 
        La <strong>fascitis plantar</strong> es una de las afecciones más frecuentes del pie.
      </p>

      <p className='p14'>Principales Tendones Afectados 🔍</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tendón de Aquiles</strong>: el más robusto del cuerpo humano. Cursa desde los músculos gastrocnemio y sóleo hasta el calcáneo.</li>
        <li><strong>Tibial posterior</strong>: estabiliza el arco plantar medial. Déficit → pie plano adquirido.</li>
        <li><strong>Peroneos (largo y corto)</strong>: estabilizan el tobillo lateral. Lesiones → inestabilidad.</li>
        <li><strong>Flexores y extensores de los dedos</strong>: implicados en traumatismos y sobrecarga.</li>
        <li><strong>Fascia plantar</strong>: banda gruesa de tejido que conecta el calcáneo con los dedos.</li>
      </ul>

      <p className='p14'>Tendinopatías Comunes ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tendinopatía aquílea</strong>: dolor en inserción o región media del tendón. Asociada a sobreuso o errores en el entrenamiento.</li>
        <li><strong>Tendinopatía del tibial posterior</strong>: dolor medial del tobillo con colapso progresivo del arco.</li>
        <li><strong>Peroneopatías</strong>: dolor lateral, asociado a esguinces crónicos o pronación excesiva.</li>
        <li><strong>Fascitis plantar</strong>: dolor en la base del talón, especialmente al dar los primeros pasos en la mañana.</li>
      </ul>

      <p className='p14'>Roturas Tendinosas 🩸</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rotura del tendón de Aquiles</strong>: ruptura súbita, audible, con imposibilidad de caminar en puntas. Común en varones de mediana edad.</li>
        <li><strong>Roturas del tibial posterior</strong>: más frecuente en mujeres mayores. Progresiva, con colapso del arco.</li>
        <li><strong>Roturas de los peroneos</strong>: poco comunes, pero se asocian a subluxación tendinosa.</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150'>
        <li><strong>Prueba de Thompson</strong>: positiva en rotura de Aquiles.</li>
        <li><strong>Inspección</strong>: edema, hematoma, deformidad.</li>
        <li><strong>Palpación selectiva</strong>: dolor a lo largo del tendón afectado.</li>
        <li><strong>Prueba de elevación en punta</strong>: útil en tibial posterior y peroneos.</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar continuidad del tendón</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primer examen en lesiones superficiales</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alta resolución, integridad tendinosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación en casos complejos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150'>
        <li><strong>Reposo relativo</strong> y reducción de carga</li>
        <li><strong>Hielo</strong> y <strong>AINES</strong> en fase aguda</li>
        <li><strong>Ortesis</strong> (tobilleras o plantillas personalizadas)</li>
        <li><strong>Ejercicios excéntricos</strong>: especialmente en tendinopatía de Aquiles</li>
        <li><strong>Fisioterapia</strong>: US, láser, ondas de choque</li>
        <li><strong>Infiltraciones</strong>: PRP o corticoides en casos seleccionados (evitar en Aquiles)</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150'>
        <li><strong>Rotura total del Aquiles</strong>: reparación quirúrgica (abierta o percutánea)</li>
        <li><strong>Tendones peroneos/tibial posterior</strong>: tenorrafia o reconstrucción</li>
        <li><strong>Fascitis plantar refractaria</strong>: liberación quirúrgica en casos severos</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control del dolor e inmovilización</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización pasiva y activa, carga parcial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 3 meses)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno a actividad y deportes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150'>
        <li>Estiramiento adecuado de la cadena posterior</li>
        <li>Calzado deportivo adecuado</li>
        <li>Control de factores biomecánicos (pisada, pronación)</li>
        <li>Entrenamiento progresivo y carga controlada</li>
        <li>Fortalecimiento excéntrico</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas del tobillo y pie son frecuentes y pueden generar gran discapacidad si no se tratan adecuadamente. El abordaje debe ser personalizado según la severidad y los objetivos funcionales del paciente. 
        La prevención y la rehabilitación prolongada son claves para el éxito a largo plazo.
      </p>
    </div>
  );
}

export default TendinopatiaTobPieDedos;
