

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesNervioRadial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neuro-detail">
      <p className='p13'>Lesión del Nervio Radial</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El nervio radial es el más frecuentemente lesionado de los nervios periféricos del miembro superior, representando aproximadamente el <strong>70% de todas las neuropatías compresivas del brazo</strong>. 
        Es una lesión particularmente incapacitante debido a su papel crucial en la extensión de muñeca y dedos. La recuperación completa puede tardar <strong>3-6 meses</strong> dependiendo de la gravedad.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Origen</strong>: Rama terminal del cordón posterior del plexo braquial (C5-T1)
        </li>
        <li>
          <strong>Recorrido crítico</strong>: Surco espiral del húmero (vulnerable en fracturas)
        </li>
        <li>
          <strong>Ramas principales</strong>: Nervio interóseo posterior (motor) y ramo superficial (sensitivo)
        </li>
      </ul>

      <p className='p14'>Etiología y Localizaciones Comunes 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Causa Común</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Axila</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso incorrecto de muletas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pérdida extensión codo+muñeca</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Surco espiral</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura húmero medio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>"Mano péndula" clásica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Codo</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión por arcada fibrosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Debilidad extensores dedos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Manifestaciones Clínicas 🩺</p>
      <p className='p16'>1. Síntomas Motores</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pérdida extensión muñeca</strong>: "Mano péndula" o "en gota"</li>
        <li><strong>Pérdida extensión dedos</strong>: Dificultad para abrir la mano</li>
        <li><strong>Supinación débil</strong>: Con el codo extendido</li>
      </ul>

      <p className='p16'>2. Síntomas Sensitivos</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hipoestesia</strong>: Dorso de mano (zona del "tabaquero anatómico")</li>
        <li><strong>Parestesias</strong>: Cara dorsal del pulgar, índice y mitad radial del dedo medio</li>
      </ul>

      <p className='p14'>Diagnóstico 🔍</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de extensión resistida</strong>: Muñeca y dedos contra resistencia</li>
        <li><strong>Signo del "reloj de pulsera"</strong>: Incapacidad para mantener extensión muñeca</li>
        <li><strong>Evaluación tríceps</strong>: Para diferenciar nivel de lesión</li>
      </ul>

      <p className='p16'>2. Estudios Complementarios</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/emg">EMG/NCV</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Velocidad conducción nerviosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Localizar nivel lesión (gold standard)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad nervio, compresiones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar lesiones estructurales</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía Nerviosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización directa nervio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dinámica, bajo costo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Neuropraxias (lesiones grado I)</li>
        <li>Compresiones agudas sin sección nerviosa</li>
        <li>Pacientes con contraindicaciones quirúrgicas</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fase aguda (0-6 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Férula de extensión de muñeca y dedos</li>
            <li>Movilizaciones pasivas para prevenir rigidez</li>
          </ul>
        </li>
        <li><strong>Fase subaguda (6-12 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios activo-asistidos</li>
            <li>Electroestimulación neuromuscular</li>
          </ul>
        </li>
        <li><strong>Fase crónica (mayor a 12 semanas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Fortalecimiento progresivo</li>
            <li>Entrenamiento funcional</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p17' style={{ listStyleType: 'disc' }}>
        <li>Ausencia de recuperación después de 3 meses</li>
        <li>Lesiones por sección completa (grado IV-V)</li>
        <li>Compresión mecánica demostrada</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Neurolysis</strong>: Liberación de adherencias</li>
        <li><strong>Reparación primaria</strong>: Para secciones limpias</li>
        <li><strong>Injerto nervioso</strong>: En defectos mayores de 2cm</li>
        <li><strong>Transferencias tendinosas</strong>: En casos crónicos irreparables</li>
      </ul>

      <p className='p14'>Pronóstico y Tiempos de Recuperación ⏳</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tasa Recuperación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tiempo Esperado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neuropraxia (grado I)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Axonotmesis (grado II-III)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70-90%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neurotmesis (grado IV-V)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>30-50%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-18 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Contracturas en flexión</strong>: Por desbalance muscular prolongado</li>
        <li><strong>Dolor neuropático</strong>: Síndrome de dolor regional complejo</li>
        <li><strong>Fibrosis</strong>: Adherencias postquirúrgicas</li>
        <li><strong>Recuperación incompleta</strong>: Con secuelas funcionales</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Técnica adecuada con muletas</strong>: Evitar compresión axilar</li>
        <li><strong>Manejo correcto fracturas húmero</strong>: Reducción anatómica</li>
        <li><strong>Posicionamiento quirúrgico</strong>: Proteger nervio en cirugías de brazo</li>
        <li><strong>Ejercicios de movilidad</strong>: En pacientes encamados</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La lesión del nervio radial requiere un enfoque multidisciplinario con tratamiento conservador inicial en la mayoría de casos. 
        La recuperación espontánea es común en neuropraxias, mientras que las lesiones axonales graves pueden requerir intervención quirúrgica. 
        La rehabilitación temprana y las órtesis adecuadas son cruciales para prevenir complicaciones y maximizar la recuperación funcional.
      </p>
    </div>
  );
}

export default LesNervioRadial;