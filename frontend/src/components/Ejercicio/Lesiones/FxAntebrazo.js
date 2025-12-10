

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxAntebrazo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Antebrazo</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        Las fracturas de antebrazo representan aproximadamente <strong>el 5-10% de todas las fracturas en adultos</strong> y son aún más frecuentes en niños (20-30% de las fracturas pediátricas). 
        Involucran típicamente el radio, el cúbito o ambos huesos, y su manejo depende de la localización, desplazamiento y edad del paciente.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Radio y cúbito</strong>: Forman una unidad funcional conectada por la membrana interósea
        </li>
        <li>
          <strong>Articulaciones clave</strong>: Radiocubital proximal (codo), radiocubital distal (muñeca)
        </li>
        <li>
          <strong>Importancia biomecánica</strong>: Permiten pronosupinación además de flexoextensión
        </li>
      </ul>

      <p className='p14'>Clasificación de las Fracturas 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monteggia</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura cúbito proximal + luxación radial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída con brazo en hiperpronación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Galeazzi</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura radial distal + luxación cubital</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída sobre mano extendida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Ambos huesos</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas diafisarias de radio y cúbito</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo o torsión</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Colles</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura radial distal con desplazamiento dorsal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída sobre palma extendida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Smith</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura radial distal con desplazamiento volar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída sobre dorso de la mano</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Caída sobre mano extendida (FOOSH)</strong>: Mecanismo más común</li>
        <li><strong>Trauma directo</strong>: Golpes, accidentes vehiculares</li>
        <li><strong>Trauma por torsión</strong>: Especialmente en fracturas diafisarias</li>
        <li><strong>Deportes de riesgo</strong>: Skateboarding, fútbol americano, rugby</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor localizado</strong>: Punto álgido en zona fracturada</li>
        <li><strong>Deformidad visible</strong>: En fracturas desplazadas</li>
        <li><strong>Limitación funcional</strong>: Dificultad para pronosupinación</li>
        <li><strong>Evaluación neurovascular</strong>: Compromiso de nervio mediano/interóseo posterior</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Línea de fractura, desplazamiento, angulación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio inicial (AP + lateral + oblicuas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas intraarticulares complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas pediátricas no desplazadas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alternativa en niños para evitar radiación</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Pacientes pediátricos (gran potencial de remodelación)</li>
        <li>Pacientes de alto riesgo quirúrgico</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Yeso braquiopalmar por 4-6 semanas</li>
        <li><strong>Control radiográfico</strong>: Semanal las primeras 2-3 semanas</li>
        <li><strong>Rehabilitación temprana</strong>: Movilización de dedos y hombro desde inicio</li>
        <li><strong>Pronosupinación</strong>: Comenzar progresivamente tras retirar yeso</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas desplazadas (angulación mayor a 10°, acortamiento mayor a 5mm)</li>
        <li>Fracturas inestables (ambos huesos, Monteggia/Galeazzi)</li>
        <li>Fracturas intraarticulares con escalón mayor a 2mm</li>
        <li>Fracaso del tratamiento conservador</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Osteosíntesis con placa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Placa de compresión dinámica (DCP)</li>
            <li>Placa bloqueada (LCP)</li>
            <li>Vía de acceso volar (Henry) o dorsal (Thompson)</li>
          </ul>
        </li>
        <li><strong>Clavos intramedulares</strong>: Para fracturas diafisarias</li>
        <li><strong>Fijación externa</strong>: Fracturas abiertas grado III</li>
        <li><strong>Reducción percutánea</strong>: + fijación con agujas K-wires</li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización relativa con férula 2-4 semanas</li>
        <li>Movilización precoz según estabilidad de la osteosíntesis</li>
        <li>Control radiográfico postoperatorio inmediato y a las 6 semanas</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, movilidad dedos/hombro</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retiro de suturas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar flexoextensión muñeca</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar pronosupinación completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento, retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta 6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pseudoartrosis</strong>: 2-5% de los casos</li>
        <li><strong>Síndrome compartimental</strong>: Urgencia quirúrgica</li>
        <li><strong>Rigidez articular</strong>: Pérdida de pronosupinación</li>
        <li><strong>Síndrome de dolor regional complejo</strong>: Manejo multidisciplinario</li>
        <li><strong>Lesiones nerviosas</strong>: Nervio interóseo posterior en fracturas proximales</li>
      </ul>

      <p className='p14'>Consideraciones Pediátricas 👶</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Remodelación ósea</strong>: Hasta 1-2cm en fracturas cercanas a fisis</li>
        <li><strong>Fracturas en "tallo verde"</strong>: Tratamiento conservador en mayoría</li>
        <li><strong>Reducción cerrada</strong>: Tolerancia mayor a deformidad residual</li>
        <li><strong>Fracturas de Monteggia</strong>: Requieren reducción de la luxación radial</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de antebrazo requieren un enfoque individualizado según edad, tipo de fractura y nivel de actividad. 
        Mientras las fracturas no desplazadas pueden manejarse conservadoramente, las fracturas desplazadas o inestables 
        generalmente requieren reducción anatómica y fijación interna. La rehabilitación temprana es clave para recuperar 
        la función completa del miembro superior, especialmente la pronosupinación.
      </p>
    </div>
  );
}

export default FxAntebrazo;