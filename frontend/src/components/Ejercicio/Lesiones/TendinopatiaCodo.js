

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiaCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesiones Tendinosas del Codo</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones tendinosas del codo suelen presentarse como cuadros dolorosos asociados al sobreuso de los músculos extensores o flexores del antebrazo. Las más comunes son la epicondilitis lateral (codo de tenista) y medial (codo de golfista), ambas causadas por microtraumatismos repetitivos. Aunque son benignas, pueden volverse crónicas y afectar la función.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Epicóndilo lateral</strong>: inserción de extensores del antebrazo (principalmente el extensor radial corto del carpo).</li>
        <li><strong>Epicóndilo medial</strong>: inserción de los músculos flexores-pronadores (flexor radial del carpo, pronador redondo, etc.).</li>
        <li><strong>Tendón del tríceps</strong>: inserción en el olécranon, menos frecuente pero puede lesionarse en deportes explosivos.</li>
      </ul>

      <p className='p14'>Tendinopatías Comunes ⚠️</p>
      <ul className='p150'>
        <li><strong>Epicondilitis lateral (codo de tenista)</strong>: dolor en la cara externa del codo, irradiado al antebrazo, asociado a movimientos repetitivos de extensión de muñeca y pronación.</li>
        <li><strong>Epicondilitis medial (codo de golfista)</strong>: dolor en la cara interna del codo, aumenta con flexión de muñeca y pronación.</li>
        <li><strong>Tendinopatía del tríceps</strong>: dolor posterior del codo, especialmente en extensión contra resistencia.</li>
      </ul>

      <p className='p14'>Roturas Tendinosas 🩸</p>
      <ul className='p150'>
        <li><strong>Rotura parcial</strong>: frecuente en epicondilitis crónica; degeneración focal del tendón.</li>
        <li><strong>Rotura completa del tendón del tríceps</strong>: poco frecuente; se asocia a trauma directo o levantamiento explosivo de peso. Pérdida de extensión activa.</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150'>
        <li><strong>Test de Cozen</strong>: dolor con extensión de muñeca contra resistencia (epicondilitis lateral).</li>
        <li><strong>Test de Mill</strong>: dolor con estiramiento pasivo de extensores (codo de tenista).</li>
        <li><strong>Test inverso de Cozen</strong>: dolor con flexión de muñeca resistida (epicondilitis medial).</li>
        <li><strong>Palpación dolorosa</strong> en epicóndilos.</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evalúa engrosamiento, hipoecogenicidad, roturas parciales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicial y para seguimiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización precisa del tendón y estructuras adyacentes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor persistente o sospecha de rotura completa</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150'>
        <li><strong>Reposo relativo</strong> y modificación de actividades</li>
        <li><strong>AINES</strong> orales o tópicos</li>
        <li><strong>Férula de descarga</strong> en casos agudos</li>
        <li><strong>Terapia física</strong>: fortalecimiento excéntrico, terapia manual, ultrasonido</li>
        <li><strong>Ejercicios progresivos</strong> de muñeca, antebrazo y hombro</li>
        <li><strong>Infiltración con corticoides</strong>: útil a corto plazo pero puede debilitar el tendón</li>
        <li><strong>Plasma rico en plaquetas (PRP)</strong>: evidencia variable</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150'>
        <li><strong>Desbridamiento quirúrgico</strong> en epicondilitis resistente (mayor a 6 meses)</li>
        <li><strong>Reinserción tendinosa</strong> en casos de rotura del tríceps</li>
        <li><strong>Tenotomía o liberación tendinosa</strong> (abierta o artroscópica)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0–2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reducción de dolor e inflamación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1–2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2–6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilidad activa, ejercicios isométricos y excéntricos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6–12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento funcional, retorno progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150'>
        <li>Evitar gestos repetitivos sin pausa (ej. trabajos manuales intensivos, tenis, golf)</li>
        <li>Fortalecimiento excéntrico regular de extensores y flexores</li>
        <li>Corrección ergonómica y técnica deportiva</li>
        <li>Estiramientos previos y posteriores a la actividad</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas del codo, aunque frecuentemente autolimitadas, pueden cronificarse si no se tratan adecuadamente. Un enfoque integral que incluya diagnóstico clínico certero, manejo conservador adecuado y rehabilitación guiada mejora notablemente los resultados funcionales a largo plazo.
      </p>
    </div>
  );
}

export default TendinopatiaCodo;
