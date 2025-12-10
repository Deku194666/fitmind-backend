

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function LPAA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Esguince de Ligamento Peroneoastragalino Anterior (LPAA)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        El <strong>Esguince de Tobillo</strong> es una de las lesiones musculoesqueléticas más comunes, representando ≈25% de todas las lesiones deportivas. 
        El <strong>Ligamento Peroneoastragalino Anterior (LPAA)</strong> es el más afectado (≈65-70% de los casos) debido a su posición anatómica y función de estabilización contra la inversión forzada del pie.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LPAA</strong>: Se origina en el maléolo peroneo y se inserta en el astrágalo. Limita la inversión y rotación interna del tobillo.
        </li>
        <li>
          <strong>Ligamento Peroneocalcáneo (LPC)</strong>: Segundo más lesionado.
        </li>
        <li>
          <strong>Ligamento Peroneoastragalino Posterior (LPAP)</strong>: Raramente se lesiona (solo en traumatismos graves).
        </li>
      </ul>

      <p className='p14'>Clasificación por Grado 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros ( menor a 25% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor leve, edema mínimo, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (25-75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, edema, hematoma, dificultad para apoyar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Grave)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa (mayor a 75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor intenso, edema/hematoma marcado, inestabilidad mecánica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismo de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inversión forzada</strong> (95% de los casos): Pie gira hacia adentro con tobillo en flexión plantar.</li>
        <li>Hiperdorsiflexión con rotación externa (lesiona LPAP).</li>
        <li>Deportes con saltos/giros (baloncesto, fútbol, voleibol).</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba del cajón anterior</strong>: Avala rotura del LPAA (mayor traslación del astrágalo).</li>
        <li><strong>Prueba de inversión</strong>: Evalúa LPC y LPAA.</li>
        <li><strong>Área de dolor</strong>: Borde anterior/lateral del maléolo peroneo.</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar fractura (Reglas de Ottawa: dolor en maleolo + imposibilidad de apoyar 4 pasos)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/ecografia">Ecografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar integridad ligamentaria (LPAA/LPC) y líquido perilesional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos complejos (lesiones osteocondrales, LPAP)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Fase Aguda (Primeras 48-72h)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>PROTEGER</strong>: Inmovilización relativa (ortesis tipo Walker o tobillera elástica).</li>
        <li><strong>REPOSO</strong>: Evitar apoyo según dolor (uso de muletas si necesario).</li>
        <li><strong>HIELO</strong>: 15-20 min cada 2-3h (evitar contacto directo).</li>
        <li><strong>COMPRESIÓN</strong>: Vendaje elástico (evitar isquemia).</li>
        <li><strong>ELEVACIÓN</strong>: Por encima del nivel del corazón.</li>
        <li><strong>AINEs</strong>: Ibuprofeno o diclofenaco (3-5 días).</li>
      </ul>

      <p className='p16'>Fase Subaguda (3 días - 6 semanas)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Movilización progresiva</strong>: Ejercicios de dorsiflexión/flexión plantar.</li>
        <li><strong>Fortalecimiento</strong>: Bandas elásticas (eversión/inversión).</li>
        <li><strong>Propiocepción</strong>: Tabla de equilibrio, apoyo unipodal.</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p150'><strong>Indicado en:</strong> Roturas completas (Grado III) con inestabilidad persistente o atletas de alto rendimiento.</p>
      <p className='p16'>Opciones Quirúrgicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación anatómica</strong>: Sutura directa del LPAA/LPC.</li>
        <li><strong>Reconstrucción</strong>: Injertos (tendón peroneo corto) en lesiones crónicas.</li>
      </ul>

      <p className='p16'>Postoperatorio</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización con bota Walker (2-4 semanas).</li>
        <li>Rehabilitación progresiva (6-12 semanas).</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1 (0-2 semanas)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema/dolor, movilidad pasiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>2 (2-6 semanas)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento excéntrico, apoyo completo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>3 (6-12 semanas)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción avanzada, retorno deportivo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica</strong> (20% casos no tratados).</li>
        <li><strong>Síndrome de pinzamiento anterolateral</strong> (tejido cicatricial).</li>
        <li><strong>Artrosis postraumática</strong> (a largo plazo).</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Calentamiento previo</strong> a actividad física.</li>
        <li><strong>Tobilleras profilácticas</strong> en deportes de riesgo.</li>
        <li><strong>Ejercicios de propiocepción</strong> en pacientes con antecedentes.</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        El <strong>Esguince de Tobillo</strong> requiere un enfoque individualizado según su grado. La mayoría (Grados I-II) responden al tratamiento conservador, 
        mientras que las lesiones graves pueden necesitar cirugía. La rehabilitación temprana y la prevención secundaria son clave para evitar 
        recidivas y complicaciones a largo plazo.
      </p>
    </div>
  );
}

export default LPAA;