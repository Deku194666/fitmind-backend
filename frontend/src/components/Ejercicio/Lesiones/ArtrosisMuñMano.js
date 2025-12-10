

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisMuñMano() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis de Muñeca y Mano (Rizartrosis, Osteoartritis Interfalángica)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis de muñeca y mano es una <strong>degeneración articular focal</strong> que afecta principalmente a articulaciones trapeciometacarpiana (rizartrosis) e interfalángicas (nódulos de Heberden/Bouchard). 
        Afecta al <strong>15-25% de mayores de 55 años</strong>, con predominio femenino (3:1) y gran impacto en la función de pinza y prensión.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación trapeciometacarpiana (TMC)</strong>: Superficie en silla de montar (mayor movilidad pero vulnerable)
        </li>
        <li>
          <strong>Articulaciones interfalángicas</strong>: Distales (DIP) y proximales (PIP)
        </li>
        <li>
          <strong>Ligamentos clave</strong>: Ligamento anterior oblicuo (volar) en TMC
        </li>
        <li>
          <strong>Relaciones anatómicas</strong>: Nervio radial (rama sensitiva), tendones extensores/flexores
        </li>
      </ul>

      <p className='p14'>Clasificación de la Artrosis de Mano 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones Clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Rizartrosis (TMC)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular, osteofitos, subluxación dorsal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en base del pulgar, pérdida de pinza</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Interfalángicas Distales (DIP)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nódulos de Heberden, deformación en "cuello de cisne"</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deformidad estética, dolor ocasional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Interfalángicas Proximales (PIP)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nódulos de Bouchard, osteofitos volares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Limitación de flexión, dolor en prensión</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Género</strong>: Mujeres postmenopáusicas (déficit estrogénico)</li>
        <li><strong>Ocupacional</strong>: Trabajos manuales repetitivos (costureras, peluquerías)</li>
        <li><strong>Hipermovilidad</strong>: Ligamentos laxos (mayor estrés articular)</li>
        <li><strong>Traumatismos</strong>: Fracturas de escafoides o radio mal consolidadas</li>
        <li><strong>Enfermedades</strong>: Artritis reumatoide (secundaria), condrocalcinosis</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rizartrosis</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor en base del pulgar al abrir frascos o girar llaves</li>
            <li>Signo de la "mesa" positivo (dolor al apoyar palma sobre superficie)</li>
            <li>Crepitación en movimientos de circumducción</li>
          </ul>
        </li>
        <li><strong>Interfalángicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nódulos firmes (Heberden/Bouchard)</li>
            <li>Desviación radial/ulnar de falanges</li>
            <li>Dolor en actividades de pinza fina</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prueba de grind test (TMC): Dolor + crepitación al rotar metacarpiano</li>
            <li>Hiperextensión pasiva dolorosa en DIP/PIP</li>
          </ul>
        </li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular, osteofitos, subluxación (Eaton-Littler)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyección de Robert (TMC), lateral en hiperpronación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estado ligamentos, edema óseo temprano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sinovitis asociada, derrame articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Guiar infiltraciones</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Artrosis grado I-II (Eaton-Littler)</li>
        <li>Pacientes con contraindicación quirúrgica</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs tópicos (gel de diclofenaco)</li>
            <li>Analgésicos (paracetamol como primera línea)</li>
            <li>Infiltraciones intraarticulares (TMC: corticoides + anestésico)</li>
          </ul>
        </li>
        <li><strong>Órtesis</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Férula de reposo para TMC (tipo CMC)</li>
            <li>Anillos de plata para DIP (reducen deformidad)</li>
          </ul>
        </li>
        <li><strong>Terapia ocupacional</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Adaptación de utensilios (engrosadores de mangos)</li>
            <li>Ejercicios de fortalecimiento intrínseco</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Viscosuplementación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ácido hialurónico en TMC (3 aplicaciones semanales)</li>
          </ul>
        </li>
        <li><strong>Ozonoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para sinovitis asociada refractaria</li>
          </ul>
        </li>
        <li><strong>Denervación por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ramas articulares del nervio radial</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fallo de tratamiento conservador mayor a 6 meses</li>
        <li>Artrosis grado III-IV (Eaton-Littler) con dolor incapacitante</li>
        <li>Inestabilidad articular progresiva</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trapeciectomía parcial/total</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Con/sin ligamentoplastia (suspensión con FCR)</li>
            <li>Con/sin interposición (tendón, esponja quirúrgica)</li>
          </ul>
        </li>
        <li><strong>Artroplastia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prótesis de TMC (Moje, Elektra)</li>
          </ul>
        </li>
        <li><strong>Artrodesis</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para articulaciones interfalángicas en deformidad severa</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación Postquirúrgica 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intervenciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección quirúrgica, control edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Férula yeso/termoplástica, movilización dedos no afectados</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar movilidad progresiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios activos, terapia de cicatriz</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tardía (mayor a 6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar función específica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de pinza/prension, reincorporación laboral</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad post-trapeciectomía</strong>: Migración proximal del primer metacarpiano</li>
        <li><strong>Rigidez postquirúrgica</strong>: Pérdida de movilidad en artrodesis</li>
        <li><strong>Algodistrofia</strong>: Síndrome doloroso regional complejo</li>
        <li><strong>Fallo protésico</strong>: Luxación o aflojamiento</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ergonomía laboral</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Evitar posiciones forzadas de pulgar</li>
            <li>Uso de herramientas ergonómicas</li>
          </ul>
        </li>
        <li><strong>Ejercicios de fortalecimiento</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios isométricos para musculatura tenar</li>
          </ul>
        </li>
        <li><strong>Protección articular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Uso precoz de órtesis en actividades de riesgo</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis de muñeca y mano es una condición <strong>frecuente y funcionalmente limitante</strong>, especialmente la rizartrosis. 
        El manejo conservador con órtesis y terapia ocupacional es la base del tratamiento, reservando la cirugía para casos avanzados. 
        La selección de la técnica quirúrgica debe individualizarse según edad, demanda funcional y estado articular.
      </p>
    </div>
  );
}

export default ArtrosisMuñMano;