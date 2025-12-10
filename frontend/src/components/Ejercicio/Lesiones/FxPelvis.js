

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxPelvis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Pelvis</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de pelvis representan <strong>3-8% de todas las fracturas en adultos</strong> y son particularmente graves en politraumatizados, con una mortalidad del <strong>10-16%</strong> en casos estables y hasta <strong>50%</strong> en fracturas inestables.  
        Su manejo requiere un enfoque multidisciplinario debido al riesgo de lesiones asociadas (hemorragia, daño urogenital y neurológico).  
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Anillo pélvico</strong>: Formado por ilion, isquion, pubis y sacro.</li>
        <li><strong>Articulaciones</strong>: Sínfisis púbica (anterior) y articulaciones sacroilíacas (posterior).</li>
        <li><strong>Estabilidad</strong>: Depende de ligamentos (sacroilíacos anteriores/posteriores, sacroespinoso, sacrotuberoso).</li>
        <li><strong>Estructuras críticas</strong>: Vasos ilíacos, plexo lumbosacro, uretra y vejiga.</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas Pélvicas 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo (Tile/OTA)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tipo A (Estable)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma directo de baja energía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas aisladas de ramas púbicas o ala sacra</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anillo intacto</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tipo B (Parcialmente inestable)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza lateral o anteroposterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión en "libro abierto" o cizallamiento vertical incompleto</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad rotacional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tipo C (Completamente inestable)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trauma de alta energía (caídas, accidentes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura + disrupción ligamentosa posterior (sacroilíaca)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad vertical y rotacional</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Compresión lateral</strong>: Choques laterales (accidentes vehiculares).</li>
        <li><strong>Compresión anteroposterior</strong>: Impacto directo sobre sínfisis ("open-book").</li>
        <li><strong>Cizallamiento vertical</strong>: Caídas de altura o trauma axial.</li>
        <li><strong>Avulsión</strong>: Tracción muscular en deportistas (ej: fractura de la espina ilíaca en corredores).</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Evaluación Inicial (ATLS)</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Estabilidad hemodinámica</strong>: Shock en 30% de fracturas inestables (priorizar reanimación).</li>
        <li><strong>Examen físico</strong>: Dolor a la compresión, inestabilidad en movilización suave.</li>
        <li><strong>Signos de alarma</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Hematoma perineal o escrotal (signo de Destot).</li>
            <li>Sangrado uretral (sospecha de lesión urogenital).</li>
            <li>Déficit neurológico (plexo lumbosacro).</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Screening inicial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP, entrada/inclinada de pelvis</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, fragmentos, lesiones asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones de tejidos blandos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Daño ligamentoso, edema medular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Angio-TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hemorragia activa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extravasación de contraste (embolización urgente)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas estables (Tipo A).</li>
        <li>Pacientes de alto riesgo quirúrgico.</li>
        <li>Fracturas no desplazadas en ancianos con baja demanda.</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reposo relativo</strong>: 4-6 semanas (evitar carga).</li>
        <li><strong>Analgesia</strong>: AINEs + opioides si necesario.</li>
        <li><strong>Movilización temprana</strong>: Con ayuda de andador o muletas.</li>
        <li><strong>Control imagenológico</strong>: RX/TAC a las 2-4 semanas.</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas inestables (Tipo B/C).</li>
        <li>Discrepancia de longitud mayor a 1 cm.</li>
        <li>Lesiones asociadas (vejiga, recto, vasos).</li>
        <li>Fallo del tratamiento conservador.</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fijación externa</strong>: Estabilización temporal en politraumatizados.</li>
        <li><strong>Osteosíntesis interna</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Placa anterior</strong>: Para sínfisis púbica.</li>
            <li><strong>Tornillos sacroilíacos</strong>: Vía percutánea.</li>
            <li><strong>Barra supraacetabular</strong>: En fracturas complejas.</li>
          </ul>
        </li>
        <li><strong>Embolización angiográfica</strong>: Si sangrado activo.</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, movilidad en cama, prevención TEV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta consolidación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carga progresiva, fortalecimiento core</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta soportar peso completo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (3-6 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios funcionales, equilibrio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retorno a actividades</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Hemorrágicas</strong>: Shock hipovolémico (mortalidad 30-50%).</li>
        <li><strong>Infecciosas</strong>: Osteomielitis, abscesos pélvicos.</li>
        <li><strong>Neurológicas</strong>: Lesión del plexo lumbosacro (5-10%).</li>
        <li><strong>Urológicas</strong>: Disfunción sexual, incontinencia.</li>
        <li><strong>Ortopédicas</strong>: Pseudoartrosis, artrosis postraumática.</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas pélvicas requieren un manejo rápido y especializado, especialmente en pacientes inestables.  
        Mientras las fracturas estables pueden tratarse conservadoramente, las inestables necesitan reducción anatómica y fijación quirúrgica.  
        La rehabilitación temprana y el seguimiento prolongado son clave para prevenir complicaciones funcionales.  
      </p>
    </div>
  );
}

export default FxPelvis;