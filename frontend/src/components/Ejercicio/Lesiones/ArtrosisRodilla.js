

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis de Rodilla (Gonartrosis)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis de rodilla es una <strong>degeneración progresiva del cartílago articular de la articulación femorotibial y femoropatelar</strong>, 
        afectando al <strong>10-15% de adultos mayores de 40 años</strong>. Es la localización más frecuente de artrosis y principal causa de dolor 
        articular crónico y limitación funcional en extremidades inferiores.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación femorotibial</strong>: Compartimento medial (más afectado), lateral y patelofemoral
        </li>
        <li>
          <strong>Cartílago articular</strong>: 2-4mm de espesor en cóndilos femorales
        </li>
        <li>
          <strong>Menisco</strong>: Amortiguador (50% de carga en extensión)
        </li>
        <li>
          <strong>Ligamentos</strong>: Cruzados (estabilidad anteroposterior) y colaterales (estabilidad lateral)
        </li>
      </ul>

      <p className='p14'>Clasificación de la Gonartrosis 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado (Kellgren-Lawrence)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Radiológicos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Manifestaciones Clínicas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 1</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dudoso pinzamiento, posible osteofito incipiente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor ocasional tras actividad intensa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 2</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos definidos, pinzamiento leve</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor al subir/bajar escaleras, rigidez matutina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 3</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento moderado, esclerosis ósea, osteofitos múltiples</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor al caminar, limitación de flexión, posible derrame</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Grado 4</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento severo, deformación ósea, quistes subcondrales</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor en reposo, deformidad articular, limitación severa</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Edad</strong>: Prevalencia mayor a 40% en mayores de 70 años</li>
        <li><strong>Obesidad</strong>: IMC mayor a 30 (aumenta riesgo 4-5 veces)</li>
        <li><strong>Traumatismos</strong>: Fracturas, lesiones meniscales o ligamentosas</li>
        <li><strong>Malalineación</strong>: Genu varo/valgo, displasias</li>
        <li><strong>Ocupacional</strong>: Trabajos con carga repetitiva (construcción, minería)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome articular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor de inicio insidioso en cara anterior o medial de rodilla</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Crepitación articular (80% casos)</li>
            <li>"Gelling phenomenon" (rigidez tras periodos de inactividad)</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor a la palpación de interlínea articular</li>
            <li>Limitación de movilidad (flexión normal 135°-140°)</li>
            <li>Derrame articular (30-50% casos)</li>
            <li>Deformidades en varo/valgo en estadios avanzados</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Marcha antiálgica (acortamiento fase de apoyo)</li>
            <li>Inestabilidad en casos con afectación ligamentosa</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular, osteofitos, esclerosis subcondral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones AP, lateral y axial de rótula</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estado de meniscos, cartílago residual, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar lesiones asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Derrame articular, sinovitis, quistes de Baker</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Guiar infiltraciones</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Gonartrosis grado I-III (Kellgren-Lawrence)</li>
        <li>Pacientes con comorbilidades que contraindican cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Paracetamol (primera línea)</li>
            <li>AINEs tópicos/orales (ibuprofeno, diclofenaco)</li>
            <li>SYSADOA (sulfato de glucosamina/condroitín)</li>
            <li>Duloxetina para dolor crónico neuropático</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de fortalecimiento cuádriceps e isquiotibiales</li>
            <li>Ejercicios de bajo impacto (bicicleta, natación)</li>
            <li>Termoterapia/crioterapia para control sintomático</li>
          </ul>
        </li>
        <li><strong>Medidas generales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción de peso (cada 5kg reduce síntomas en 25%)</li>
            <li>Uso de bastón (reduce carga en 20-30%)</li>
            <li>Plantillas/ortesis para descarga compartimental</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infiltraciones intraarticulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corticoides guiados por ecografía (alivio 4-12 semanas)</li>
            <li>Ácido hialurónico (viscosuplementación)</li>
            <li>Plasma rico en plaquetas (evidencia creciente)</li>
          </ul>
        </li>
        <li><strong>Denervación por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ramas articulares del nervio geniculado</li>
          </ul>
        </li>
        <li><strong>Ozonoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para sinovitis asociada refractaria</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Dolor refractario a tratamiento conservador mayor a 6 meses</li>
        <li>Gonartrosis grado IV (Kellgren-Lawrence)</li>
        <li>Limitación funcional grave (índice WOMAC mayor a 39)</li>
        <li>Deformidad angular progresiva (mayor a 10° varo/valgo)</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artroplastia total de rodilla</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Vía subvastus o medial parapatelar</li>
            <li>Prótesis cementadas (estándar) vs no cementadas</li>
            <li>Opción unicompartimental en casos seleccionados</li>
          </ul>
        </li>
        <li><strong>Osteotomías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tibial alta (varizante/valguizante)</li>
            <li>Para redistribución de cargas en pacientes jóvenes</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Indicación limitada (lavado articular, cuerpos libres)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-2 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, prevención TVP, inicio movilidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deambulación con andador, ejercicios isométricos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia (2-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar arco de movimiento (0°-90°)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo, bicicleta estática</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tardía (mayor a 6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación funcional completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios propioceptivos, reincorporación a actividades</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infección protésica</strong>: 1-2% casos (mayor riesgo en obesos, diabéticos)</li>
        <li><strong>Rigidez articular</strong>: Pérdida de flexión (menor a 90°)</li>
        <li><strong>Trombosis venosa profunda</strong>: 3-5% sin profilaxis</li>
        <li><strong>Aflojamiento aséptico</strong>: Principal causa de revisión a largo plazo</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Control de peso</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>IMC menor a 25 (cada 1kg reduce carga en 4kg por paso)</li>
          </ul>
        </li>
        <li><strong>Ejercicio adecuado</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Natación, ciclismo, ejercicios de fortalecimiento</li>
            <li>Evitar impacto repetitivo (correr en superficies duras)</li>
          </ul>
        </li>
        <li><strong>Corrección de malalineaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Uso de plantillas, órtesis en casos seleccionados</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La gonartrosis es una condición <strong>altamente prevalente y discapacitante</strong> cuyo manejo requiere enfoque escalonado. 
        El tratamiento conservador con modificación de factores de riesgo es fundamental, mientras la artroplastia total ofrece 
        excelentes resultados en casos avanzados. La rehabilitación precoz y el seguimiento a largo plazo son esenciales para 
        optimizar resultados funcionales.
      </p>
    </div>
  );
}

export default ArtrosisRodilla;