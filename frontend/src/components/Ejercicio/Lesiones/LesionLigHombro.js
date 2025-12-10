

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigHombro from './NavBarLesLigHombro';


function LesionLigHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        <NavBarLesLigHombro/>
       
      <p className='p13'>Lesiones Ligamentosas de Hombro</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones ligamentosas del hombro representan el <strong>20% de todas las lesiones</strong> de esta articulación. 
        A diferencia de la rodilla, en el hombro la inestabilidad suele ser multidireccional y los ligamentos trabajan 
        en conjunto con los músculos del manguito rotador para mantener la estabilidad.
      </p>

      <p className='p14'>📌 Estructuras Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Labrum glenoideo</strong>: Fibrocartílago que profundiza la glenoides</li>
        <li><strong>Ligamentos glenohumerales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Superior (LGHS)</strong>: Limita traslación inferior y ER en aducción</li>
            <li><strong>Medio (LGHM)</strong>: Restringe traslación anterior en 45° abducción</li>
            <li><strong>Inferior (LGHI)</strong>: Principal estabilizador anterior en abducción</li>
          </ul>
        </li>
        <li><strong>Cápsula articular</strong>: Estructura laxa con zonas de engrosamiento</li>
      </ul>

      <p className='p14'>📌 Clasificación de Lesiones</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estructura Afectada</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Bankart</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Labrum anteroinferior + LGHI</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxación anterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>SLAP</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Labrum superior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracción brusca bíceps</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>HAGL</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desinserción humeral ligamentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma violento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Laxitud multidireccional</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cápsula global</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperlaxitud constitucional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Traumático agudo</strong>: Caída con brazo en abducción+rotación externa (90% luxaciones anteriores)</li>
        <li><strong>Microtrauma repetitivo</strong>: Lanzadores (lesiones SLAP)</li>
        <li><strong>Hiperlaxitud</strong>: Inestabilidad multidireccional (más común en mujeres)</li>
      </ul>

      <p className='p14'>📌 Diagnóstico Clínico</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba Especial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgo Positivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bankart</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de aprensión</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Miedo a luxación en abducción+ER</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>SLAP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>O'Brien test</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en rotación interna resistida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LGHI</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba del cajón anterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Traslación humeral aumentada</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Estudios de Imagen</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión Hill-Sachs, Bankart óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial post-luxación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN con contraste</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones labrales, HAGL</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard para tejidos blandos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Luxabilidad, integridad ligamentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación funcional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Tratamiento Conservador</p>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Fase Aguda (0-3 semanas)</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Reposo</strong>: Cabestrillo corto (solo dolor intenso)</li>
            <li><strong>Movilización temprana</strong>: Evitar rigidez</li>
            <li><strong>Crioterapia</strong>: Control inflamación</li>
          </ul>
        </div>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Rehabilitación (3-12 semanas)</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Fortalecimiento</strong>: Rotadores externos, serrato anterior</li>
            <li><strong>Propiocepción</strong>: Tabla de equilibrio, pelota</li>
            <li><strong>Estiramientos</strong>: Cápsula posterior (cross-body stretch)</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📌 Tratamiento Quirúrgico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Indicaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Luxaciones recurrentes (mayor a 2 episodios)</li>
            <li>Lesiones Bankart/Lesiones SLAP tipo II-IV</li>
            <li>Fracturas glenoideas mayor a 20% superficie articular</li>
          </ul>
        </li>
        <li><strong>Técnicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Bankart artroscópico</strong>: Reinserción labrum</li>
            <li><strong>Latarjet</strong>: Transferencia coracoides para defectos óseos</li>
            <li><strong>Reparación SLAP</strong>: Anclajes para lesiones labrales superiores</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📌 Rehabilitación Postquirúrgica</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cicatrización, ROM limitado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo, fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avanzada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 80%, gestos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Ejercicios Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rotación externa con banda</strong>: Fortalecimiento rotadores</li>
        <li><strong>Plancha con protracción</strong>: Serrato anterior</li>
        <li><strong>Péndulo de Codman</strong>: Movilidad temprana</li>
        <li><strong>Ejercicios en cadena cinética cerrada</strong>: Propiocepción</li>
      </ul>

      <p className='p14'>📌 Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Luxaciones recurrentes</strong>: 80% en menores de 20 años con tratamiento conservador</li>
        <li><strong>Rigidez postquirúrgica</strong>: Especialmente rotación interna</li>
        <li><strong>Artrosis glenohumeral</strong>: Secuela tardía de inestabilidad crónica</li>
      </ul>

      <p className='p14'>📌 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento rotadores externos</strong>: Principal estabilizador dinámico</li>
        <li><strong>Técnica adecuada en lanzadores</strong>: Evitar "arm cocking" excesivo</li>
        <li><strong>Equilibrio muscular</strong>: Relación 2:1 rotadores internos/externos</li>
      </ul>
    </div>
  );
}

export default LesionLigHombro;