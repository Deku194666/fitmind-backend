

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxMMdedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Muñeca, Mano y Dedos</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de la extremidad distal del miembro superior representan <strong>el 25% de todas las fracturas</strong> en adultos, 
        siendo particularmente frecuentes en población activa y anciana. Su correcto manejo es esencial para preservar 
        la función de prensión y la destreza manual.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Muñeca</strong>: 8 huesos del carpo, articulación radiocarpiana</li>
        <li><strong>Mano</strong>: 5 metacarpianos (1° móvil, 2° y 3° fijos, 4° y 5° semimóviles)</li>
        <li><strong>Dedos</strong>: Falanges proximales, medias (excepto pulgar) y distales</li>
        <li><strong>Arcos de la mano</strong>: Longitudinal, transversal y oblicuo</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura Común</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Muñeca</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colles</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento dorsal + acortamiento radial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Muñeca</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Smith</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>"Fractura reversa de Colles" (desplazamiento volar)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Carpo</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Escafoides</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Riesgo de necrosis avascular (polo proximal)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Metacarpianos</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Boxer's fracture</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5° metacarpiano (cuello), angulación aceptable hasta 40°</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Falanges</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tuft</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura distal del pulgar por aplastamiento</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Caída sobre mano extendida (FOOSH)</strong>: 75% de fracturas de muñeca</li>
        <li><strong>Trauma directo</strong>: Golpes, aplastamientos, accidentes laborales</li>
        <li><strong>Mecanismos torsionales</strong>: Fracturas espirales en dedos</li>
        <li><strong>Deportes de contacto</strong>: Boxeo, artes marciales, baloncesto</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inspección</strong>: Deformidad, edema, heridas abiertas</li>
        <li><strong>Palpación</strong>: Dolor focal en tabaquera anatómica (escafoides)</li>
        <li><strong>Movilidad</strong>: Limitación dolorosa de flexoextensión</li>
        <li><strong>Pruebas especiales</strong>: Compresión axial en dedos</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP, lateral y oblicuas; línea de fractura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, escalón articular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sospecha escafoides</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, fractura oculta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Puntos dolorosos focales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cortical interrumpida, hematoma</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Fracturas estables de falanges y metacarpianos</li>
        <li>Pacientes de bajo riesgo funcional</li>
      </ul>

      <p className='p16'>Protocolos por Localización:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Muñeca (Colles/Smith)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción cerrada bajo anestesia si desplazada</li>
            <li>Yeso braquiopalmar por 4-6 semanas</li>
            <li>Control radiográfico semanal inicial</li>
          </ul>
        </li>
        <li><strong>Escafoides</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Inmovilización con yeso braquiopulgar</li>
            <li>12-16 semanas de inmovilización</li>
            <li>RMN de control a las 6 semanas</li>
          </ul>
        </li>
        <li><strong>Metacarpianos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Férula ulnar para 4°-5° metacarpiano</li>
            <li>Angulación aceptable según dedo (5° hasta 40°)</li>
            <li>Movilización precoz de interfalángicas</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones Absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas abiertas</li>
        <li>Compromiso neurovascular</li>
        <li>Inestabilidad articular (mayor a 2mm escalón)</li>
        <li>Fracturas-luxaciones carpianas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Osteosíntesis con placa</strong>: Fracturas desplazadas de radio distal</li>
        <li><strong>Clavos percutáneos (K-wires)</strong>: Fracturas metacarpianas inestables</li>
        <li><strong>Tornillos canulados</strong>: Fracturas de escafoides</li>
        <li><strong>Fijación externa</strong>: Fracturas conminutas severas</li>
        <li><strong>Artroscopia asistida</strong>: Fracturas articulares complejas</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Muñeca</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mano/Dedos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-2 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización estricta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización pasiva/activa de dedos no afectados</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización progresiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de bloqueo articular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de pinza y prensión</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reentrenamiento actividades específicas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principal complicación (especialmente en dedos)</li>
        <li><strong>Necrosis avascular</strong>: Polo proximal del escafoides</li>
        <li><strong>Síndrome de dolor regional complejo</strong>: Manejo multidisciplinario</li>
        <li><strong>Artrosis postraumática</strong>: Secuela tardía en fracturas articulares</li>
        <li><strong>Deformidad residual</strong>: "Dinner fork" en Colles mal reducidas</li>
      </ul>

      <p className='p14'>Consideraciones Especiales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fracturas pediátricas</strong>: Gran potencial de remodelación (hasta 2 años)</li>
        <li><strong>Pacientes ancianos</strong>: Osteoporosis subyacente, mayor riesgo de complicaciones</li>
        <li><strong>Trabajadores manuales</strong>: Requieren rehabilitación más intensiva</li>
        <li><strong>Músicos/artistas</strong>: Necesidad de recuperación fina de destreza</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        El manejo de las fracturas de muñeca, mano y dedos requiere un enfoque individualizado según la localización, 
        desplazamiento y requerimientos funcionales del paciente. Mientras muchas fracturas pueden tratarse conservadoramente, 
        las fracturas articulares o inestables requieren reducción anatómica y fijación quirúrgica. La rehabilitación temprana 
        y especializada es clave para optimizar los resultados funcionales, especialmente en pacientes con altas demandas de destreza manual.
      </p>
    </div>
  );
}

export default FxMMdedos;