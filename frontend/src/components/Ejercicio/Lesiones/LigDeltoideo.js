

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function LigDeltoideo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Esguince del Ligamento Deltoideo</p>
      <p className='p14'>Introducción</p>
      <p className='p150'>
        El <strong>Ligamento Deltoideo</strong> es el principal estabilizador medial del tobillo, resistiendo la eversión y rotación externa. 
        Los esguinces de este ligamento representan solo el 5-10% de las lesiones ligamentosas del tobillo, pero suelen ser más graves y requieren 
        un manejo específico debido a su papel crítico en la estabilidad. Son frecuentes en traumatismos de alta energía o mecanismos de eversión forzada.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Componentes del Deltoideo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Fascículo tibioastragalino anterior</strong> (más lesionado)</li>
            <li><strong>Fascículo tibioastragalino posterior</strong></li>
            <li><strong>Fascículo tibiocalcáneo</strong></li>
            <li><strong>Fascículo tibionavicular</strong></li>
          </ul>
        </li>
        <li>
          <strong>Relación anatómica</strong>: Se inserta en el maléolo tibial y se distribuye en abanico hacia astrágalo, calcáneo y navicular.
        </li>
      </ul>

      <p className='p14'>Clasificación por Grado 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clínicos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramiento sin rotura</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor localizado, edema mínimo, estabilidad conservada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (1-2 fascículos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema/hematoma medial, dolor a la palpación, leve inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Grave)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa + lesión sindesmosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad marcada, incapacidad para apoyar, equimosis extensa</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismo de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Eversión forzada</strong>: Pie gira hacia afuera con tobillo en dorsiflexión.</li>
        <li><strong>Trauma directo</strong>: Impacto en la cara lateral del tobillo (ej.: placajes en rugby).</li>
        <li><strong>Rotación externa</strong>: Frecuente en fracturas de maleolo tibial (Maisonneuve).</li>
      </ul>

      <p className='p14'>Diagnóstico Diferencial 🚨</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fractura del maléolo tibial</li>
        <li>Lesión de la sindesmosis tibiofibular ("esguince alto")</li>
        <li>Fractura del astrágalo</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Palpación</strong>: Dolor en maléolo tibial y línea articular medial.</li>
        <li><strong>Prueba de estrés en eversión</strong>: Dolor/resistencia anormal.</li>
        <li><strong>Prueba de compresión tibiofibular</strong>: Para descartar sindesmosis.</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Utilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografías</Link> (AP/lateral/mortise)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar fracturas o diástasis tibiofibular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar integridad de fascículos del deltoideo y lesiones osteocondrales</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/ecografia">Ecografía dinámica</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualizar roturas parciales bajo estrés</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Grados I-II</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Bota Walker o yeso corto por 2-4 semanas.</li>
        <li><strong>Protección de carga</strong>: Muletas durante fase aguda (3-7 días).</li>
        <li><strong>Terapia física</strong>: Movilización progresiva tras retirar inmovilización.</li>
        <li><strong>Ejercicios de fortalecimiento</strong>: Inversión/resistencia elástica.</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Rotura completa con inestabilidad articular ( mayor a 5mm de apertura medial)</li>
        <li>Lesiones asociadas (fracturas, sindesmosis)</li>
        <li>Fallo del tratamiento conservador (dolor crónico/inestabilidad)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación primaria</strong>: Sutura directa en lesiones agudas.</li>
        <li><strong>Reconstrucción con injerto</strong>: Tendón tibial posterior o aloinjerto en lesiones crónicas.</li>
        <li><strong>Osteotomía de calcáneo</strong>: En casos de deformidad asociada en valgo.</li>
      </ul>

      <p className='p14'>Rehabilitación Postquirúrgica 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intervenciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>0-4 semanas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización en bota Walker, carga progresiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>4-8 semanas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización activa, ejercicios isométricos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>8-12 semanas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción avanzada, retorno deportivo gradual</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad medial crónica</strong></li>
        <li><strong>Artrosis tibiotalar</strong> (por carga anormal)</li>
        <li><strong>Rigidez articular</strong> (por inmovilización prolongada)</li>
        <li><strong>Neuroma del nervio tibial posterior</strong></li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Los esguinces del <strong>Ligamento Deltoideo</strong> requieren un alto índice de sospecha debido a su baja frecuencia pero alto impacto funcional. 
        El manejo debe individualizarse según el grado de lesión y la presencia de inestabilidad. Las lesiones grado III suelen necesitar 
        reparación quirúrgica para restaurar la estabilidad medial, mientras que las grado I-II responden bien al tratamiento conservador 
        con rehabilitación estructurada. La evaluación de lesiones asociadas es fundamental para prevenir complicaciones a largo plazo.
      </p>
    </div>
  );
}

export default LigDeltoideo;