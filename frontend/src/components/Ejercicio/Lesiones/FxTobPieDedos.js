

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxTobPieDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Tobillo, Pie y Dedos</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas del complejo tobillo-pie representan <strong>10% de todas las fracturas</strong>, con una incidencia anual de 187 casos por 100,000 habitantes. 
        Su correcto manejo es esencial para preservar la función de carga y marcha, siendo las fracturas maleolares las más frecuentes (60% del total). 
        Las fracturas de dedos, aunque aparentemente simples, pueden llevar a discapacidad significativa si no se tratan adecuadamente.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Anillo tobillero</strong>: Formado por maléolo medial, lateral y sindesmosis</li>
        <li><strong>Bóveda plantar</strong>: Arcos medial, lateral y transverso</li>
        <li><strong>Joints of Lisfranc</strong>: Articulación tarsometatarsiana (clave para estabilidad)</li>
        <li><strong>Mecanismo de Windlass</strong>: Función de la fascia plantar durante la marcha</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas de Tobillo (AO/OTA 44) 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estructuras Afectadas</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>44-A</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supinación-Adducción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Maléolo lateral (transversa) ± medial (vertical)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estable si solo lateral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>44-B</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supinación-Rotación externa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Maléolo lateral (oblicua) + sindesmosis posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable si diástasis</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>44-C</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pronación-Rotación externa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Maléolo medial + sindesmosis + peroné alto</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Altamente inestable</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Clasificación de Fracturas de Calcáneo (Sanders) 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Líneas de Fractura</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Compromiso Articular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No desplazada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>menor a 2mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 línea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fragmento posterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 líneas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fragmento central</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥3 líneas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Severamente conminuta</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inversión (85% fracturas maleolares laterales)</li>
            <li>Eversión (fracturas mediales + sindesmosis)</li>
            <li>Rotación (fracturas bimaleolares/trimaleolares)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída de altura (90%)</li>
            <li>Compresión axial</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Trauma directo (5° metatarsiano: fractura de Jones)</li>
            <li>Fatiga (marcha prolongada, deportistas)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>: Prueba de cajón anterior, test de compresión sindesmótica</li>
        <li><strong>Pie</strong>: Evaluación de arcos plantares, puntos dolorosos específicos</li>
        <li><strong>Signos de alarma</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Déficit vascular (pulso pedio ausente)</li>
            <li>Hematoma en "media luna" (signo de Mondor en fractura Lisfranc)</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP/lateral/mortise tobillo; AP/lateral/oblícua pie</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas intraarticulares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, escalón articular mayor a 2mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones ligamentosas/osteocondrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, fracturas ocultas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación tendones/ligamentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura tendón Aquiles, fascitis</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas no desplazadas de tobillo (44-A1, sin inestabilidad)</li>
        <li>Fracturas de calcáneo extraarticulares</li>
        <li>Fracturas de metatarsianos centrales no desplazadas</li>
        <li>Fracturas de falanges con mínima angulación</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tobillo: Bota walker (4-6 semanas)</li>
            <li>Pie: Yeso corto plantar (3-4 semanas)</li>
          </ul>
        </li>
        <li><strong>Progresión de carga</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tobillo: Carga parcial a las 2-3 semanas</li>
            <li>Calcáneo: Carga tardía (8-12 semanas)</li>
          </ul>
        </li>
        <li><strong>Rehabilitación</strong>: Ejercicios de movilidad temprana</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones Absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas desplazadas de tobillo (diástasis mayor a 2mm, escalón articular mayor a 1mm)</li>
        <li>Fracturas de Lisfranc con inestabilidad</li>
        <li>Fracturas intraarticulares de calcáneo con hundimiento amyor a 3mm</li>
        <li>Fracturas abiertas o con compromiso neurovascular</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteosíntesis con placa (maléolo medial)</li>
            <li>Tornillos canulados (maléolo lateral)</li>
            <li>Tornillo sindesmótico (diástasis confirmada)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Placa bloqueada vía abordaje extenso lateral</li>
            <li>Osteosíntesis mínimamente invasiva (técnica de Essex-Lopresti)</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Clavos percutáneos (fracturas desplazadas)</li>
            <li>Placa dorsolateral (fracturas de Jones)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tobillo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Pie/Dedos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-2 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, elevación, movilización pasiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Calzado postquirúrgico, no carga</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga parcial progresiva, ejercicios ROM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio de carga según dolor</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento, propiocepción</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de arco plantar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso de calzado normal</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tobillo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Artrosis postraumática (25-40%)</li>
            <li>Rigidez articular (10-20%)</li>
            <li>Infección (1-5%)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Síndrome del túnel tarsiano (15%)</li>
            <li>Dolor subastragalino crónico</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Pseudoartrosis (5-10%)</li>
            <li>Metatarsalgia transferencial</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas del complejo tobillo-pie requieren un enfoque individualizado basado en el patrón de fractura, estabilidad articular y requerimientos funcionales del paciente. 
        Mientras las fracturas estables pueden manejarse conservadoramente, las inestables requieren reducción anatómica y fijación quirúrgica. 
        La rehabilitación temprana y progresiva es clave para optimizar los resultados funcionales, especialmente en fracturas intraarticulares como las de calcáneo.
      </p>
    </div>
  );
}

export default FxTobPieDedos;