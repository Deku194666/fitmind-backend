

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtrosisTobPie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artrosis de Tobillo y Pie</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La artrosis de tobillo y pie es una <strong>degeneración progresiva del cartílago articular</strong> que afecta principalmente a la articulación tibiotalar (tobillo) y a las articulaciones del mediopie y antepie. 
        A diferencia de la artrosis de cadera y rodilla, la de tobillo es <strong>postraumática en el 80% de los casos</strong>, con una prevalencia del 3-7% en adultos mayores de 50 años.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Articulación tibiotalar</strong>: Encaje entre tibia-peroné y astrágalo (mortaja)
        </li>
        <li>
          <strong>Articulaciones subtalar y Chopart</strong>: Responsables de la inversión/eversión
        </li>
        <li>
          <strong>Articulación Lisfranc</strong>: Unión entre mediopie y antepie
        </li>
        <li>
          <strong>Primera metatarsofalángica</strong>: Frecuente localización de artrosis (hallux rigidus)
        </li>
      </ul>

      <p className='p14'>Clasificación de la Artrosis de Tobillo y Pie 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tobillo</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento mínimo, osteofitos anteriores</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moderado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento claro, esclerosis subcondral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Severo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deformación astragalina, pérdida completa del espacio</td>
          </tr>
          <tr>
            <td rowspan="2" style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1ª MTP</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve-Moderado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Osteofitos dorsales, pinzamiento parcial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Severo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anquilosis fibrosa/ósea, deformidad en flexión</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Traumatismos previos</strong>: Fracturas de tobillo (75% de los casos de artrosis tibiotalar)</li>
        <li><strong>Inestabilidad crónica</strong>: Esguinces repetidos con lesión ligamentosa</li>
        <li><strong>Malalineaciones</strong>: Pie plano/varo, secuelas de fracturas mal consolidadas</li>
        <li><strong>Enfermedades sistémicas</strong>: Artritis reumatoide, gota, diabetes</li>
        <li><strong>Ocupacional/deportivo</strong>: Bailarines, futbolistas, trabajos en superficies irregulares</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Manifestaciones Clínicas</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Síndrome articular</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dolor de inicio insidioso en tobillo o antepié</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Dificultad en terrenos irregulares (tobillo) o al calzarse (MTP1)</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Limitación de dorsiflexión (normal 20°)</li>
            <li>Dolor a la palpación de interlínea articular afectada</li>
            <li>Edema periarticular en brotes inflamatorios</li>
            <li>Deformidades en casos avanzados (varo/valgo tobillo, hallux rigidus)</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Acortamiento de la fase de apoyo</li>
            <li>Disminución del balanceo del brazo contralateral</li>
            <li>Marcha en rotación externa para compensar limitación de dorsiflexión</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pinzamiento articular, osteofitos, deformidad</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones AP/lateral tobillo, axial MTP1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estado cartílago residual, osteocondritis, sinovitis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar lesiones asociadas prequirúrgicas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC 3D</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Análisis de deformidad, planificación quirúrgica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar consolidación fracturas previas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Artrosis leve-moderada (grados iniciales)</li>
        <li>Pacientes con comorbilidades que contraindican cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Farmacoterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>AINEs tópicos/orales (diclofenaco, celecoxib)</li>
            <li>Analgésicos (<Link to="/farmacos/farmacos2/paracetamol"> Paracetamol </Link> como primera línea)</li>
            <li>Infiltraciones locales en brotes agudos</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de movilidad (tobillo: alfabeto, círculos)</li>
            <li>Fortalecimiento muscular (tibial anterior, peroneos)</li>
            <li>Propiocepción para mejorar estabilidad</li>
          </ul>
        </li>
        <li><strong>Medidas generales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Modificación de actividades (evitar impactos, terrenos irregulares)</li>
            <li>Calzado adecuado (suela rígida para MTP1, contrafuerte estable para tobillo)</li>
            <li>Ortesis (plantillas, férulas nocturnas para hallux rigidus)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Intervencionista 💉</p>
      <p className='p16'>Opciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Infiltraciones intraarticulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Corticoides guiados por ecografía/RX</li>
            <li>Ácido hialurónico (evidencia limitada en tobillo)</li>
            <li>PRP (en investigación)</li>
          </ul>
        </li>
        <li><strong>Denervación por radiofrecuencia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ramas articulares del nervio tibial y peroneo</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Desbridamiento, sinovectomía, resección osteofitos</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Dolor refractario a tratamiento conservador mayor a 6 meses</li>
        <li>Artrosis avanzada con deformidad</li>
        <li>Limitación funcional grave que afecta actividades básicas</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artrodesis (fusión articular)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tibiotalar: Vía anterior o lateral, fijación con placas/tornillos</li>
            <li>Subtalar: Para artrosis aislada con buena movilidad tibiotalar</li>
            <li>MTP1: Fijación con tornillos o placa</li>
          </ul>
        </li>
        <li><strong>Artroplastia (prótesis)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tobillo: Indicada en pacientes seleccionados (baja demanda, mayor a 60 años)</li>
            <li>MTP1: Prótesis de silicona o metal-plástico</li>
          </ul>
        </li>
        <li><strong>Osteotomías</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Realineación para redistribución de cargas</li>
            <li>Supramaleolar para corregir malalineaciones tibiales</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección de la reparación, control edema/dolor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización, movilización pasiva suave (según técnica)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intermedia (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar movilidad progresiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios activos, carga progresiva, hidroterapia</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tardía (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación funcional completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento, propiocepción, reeducación marcha</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Pseudoartrosis</strong>: Fallo de fusión en artrodesis (5-10%)</li>
        <li><strong>Infección</strong>: Mayor riesgo en diabéticos y fumadores</li>
        <li><strong>Aflojamiento protésico</strong>: Principal limitación de prótesis de tobillo</li>
        <li><strong>Transferencia de carga</strong>: Artrosis adyacentes tras artrodesis</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tratamiento adecuado de traumatismos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción anatómica de fracturas de tobillo</li>
            <li>Rehabilitación completa post-esguinces</li>
          </ul>
        </li>
        <li><strong>Control de enfermedades sistémicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Manejo óptimo de diabetes, artritis reumatoide</li>
          </ul>
        </li>
        <li><strong>Calzado adecuado</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Soporte adecuado para tipo de pie y actividad</li>
            <li>Evitar tacones altos en artrosis MTP1</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La artrosis de tobillo y pie presenta <strong>características únicas</strong>, siendo predominantemente postraumática y con desafíos terapéuticos específicos. 
        El tratamiento conservador es fundamental, mientras las opciones quirúrgicas deben individualizarse considerando <strong>edad, actividad y articulaciones afectadas</strong>. 
        La artrodesis sigue siendo el gold standard para artrosis severa de tobillo, mientras las prótesis tienen indicación selectiva.
      </p>
    </div>
  );
}

export default ArtrosisTobPie;