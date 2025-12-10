

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TendinopatiaMMDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesiones Tendinosas de Muñeca, Mano y Dedos</p>

      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones tendinosas en la muñeca, mano y dedos incluyen tendinitis por sobreuso, atrapamientos tendinosos y roturas. Son frecuentes en personas que realizan movimientos repetitivos, como trabajadores manuales, músicos y deportistas. Algunas de estas patologías son agudas, mientras que otras son crónicas o degenerativas.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150'>
        <li><strong>Tendones extensores</strong>: recorren el dorso de la mano y extienden dedos y muñeca.</li>
        <li><strong>Tendones flexores</strong>: se ubican en la cara palmar; permiten la flexión de dedos y muñeca.</li>
        <li><strong>Retináculos</strong>: estructuras que fijan los tendones y evitan el desplazamiento.</li>
        <li><strong>Poleas digitales</strong>: especialmente la A1, importantes en el dedo en gatillo.</li>
      </ul>

      <p className='p14'>Tendinopatías Comunes ⚠️</p>
      <ul className='p150'>
        <li><strong>Tenosinovitis de De Quervain</strong>: inflamación de los tendones del primer compartimento dorsal (abductor largo del pulgar y extensor corto). Dolor radial al mover el pulgar.</li>
        <li><strong>Dedo en gatillo</strong>: engrosamiento del tendón flexor o polea A1, que causa bloqueo o chasquido al flexionar/extender el dedo.</li>
        <li><strong>Tendinitis extensora o flexora</strong>: dolor difuso en la muñeca o mano por sobrecarga.</li>
        <li><strong>Enfermedad de Dupuytren</strong> (no es tendinosa, pero importante en el diagnóstico diferencial): fibrosis palmar progresiva, no inflamatoria.</li>
      </ul>

      <p className='p14'>Roturas Tendinosas 🩸</p>
      <ul className='p150'>
        <li><strong>Rotura de tendones extensores</strong>: puede ser traumática o espontánea (artritis reumatoide); pérdida de extensión de dedos.</li>
        <li><strong>Rotura de tendones flexores</strong>: típica en cortes profundos o lesiones por tracción forzada; requiere reparación quirúrgica urgente.</li>
        <li><strong>Mallet finger</strong>: rotura del tendón extensor distal del dedo, con caída de la falange distal.</li>
        <li><strong>Boutonnière</strong>: lesión del tendón central extensor con flexión de la interfalángica proximal y extensión distal.</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150'>
        <li><strong>Test de Finkelstein</strong>: dolor con desviación cubital activa de muñeca con pulgar cerrado (De Quervain).</li>
        <li><strong>Palpación dolorosa</strong> en trayectos tendinosos y engrosamientos en dedo en gatillo.</li>
        <li><strong>Bloqueo articular o pérdida de movilidad</strong>: puede sugerir rotura.</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evalúa engrosamiento, líquido, roturas parciales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera elección</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualiza estructuras profundas, roturas completas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos crónicos o quirúrgicos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <ul className='p150'>
        <li><strong>Reposo</strong> y <strong>férulas</strong> para inmovilización temporal</li>
        <li><strong>AINES</strong> orales o tópicos</li>
        <li><strong>Ejercicios suaves</strong> de movilidad</li>
        <li><strong>Infiltración con corticoides</strong> en De Quervain o dedo en gatillo</li>
        <li><strong>Reeducación postural y ergonómica</strong></li>
        <li><strong>Terapia ocupacional</strong> si hay compromiso funcional</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <ul className='p150'>
        <li><strong>Liberación quirúrgica</strong> de la polea A1 en dedo en gatillo</li>
        <li><strong>Tenólisis o reparación tendinosa</strong> en roturas</li>
        <li><strong>Descompresión de compartimentos</strong> en De Quervain resistente</li>
        <li><strong>Cirugía reconstructiva</strong> en lesiones crónicas o múltiples</li>
      </ul>

      <p className='p14'>Rehabilitación 🤲</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuir dolor e inflamación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1–2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (2–6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar movilidad y fuerza básica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (6–12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento, destreza y retorno a funciones finas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150'>
        <li>Evitar uso excesivo y movimientos repetitivos sin pausas</li>
        <li>Fortalecer musculatura intrínseca de mano y antebrazo</li>
        <li>Realizar pausas activas si se trabaja en escritorio o con herramientas</li>
        <li>Usar soporte ergonómico si es necesario</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas de muñeca, mano y dedos requieren una evaluación clínica cuidadosa para diferenciar entre tendinitis, atrapamientos o roturas. La mayoría responden bien al tratamiento conservador, aunque algunas requieren cirugía. Una rehabilitación adecuada y prevención activa son claves para evitar la recurrencia.
      </p>
    </div>
  );
}

export default TendinopatiaMMDedos;
