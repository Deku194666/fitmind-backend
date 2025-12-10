

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesionFCT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión del Fibrocartílago Triangular (TFCC) de la Muñeca</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        El <strong>Fibrocartílago Triangular (TFCC)</strong> es una estructura crucial para la estabilidad de la articulación radiocubital distal (ARCD), 
        representando el <strong>40% de todas las lesiones de la muñeca</strong> en adultos jóvenes activos. 
        Actúa como amortiguador y estabilizador primario de la carga axial en el lado cubital de la muñeca.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Componentes del TFCC</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Disco articular</strong>: Porción central avascular</li>
            <li><strong>Ligamento radiocubital palmar y dorsal</strong></li>
            <li><strong>Menisco homólogo</strong></li>
            <li><strong>Sheath del extensor cubital del carpo (ECU)</strong></li>
          </ul>
        </li>
        <li>
          <strong>Vascularización</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Periferia vascularizada (zona 1-2)</li>
            <li>Porción central avascular (zona 3)</li>
          </ul>
        </li>
        <li>
          <strong>Función</strong>: Transmite el 20% de la carga axial y estabiliza la ARCD
        </li>
      </ul>

      <p className='p14'>Clasificación de Palmer 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1A</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarro central del disco</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compresión axial + rotación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1B</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión cubital (con fractura estiloides)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracción cubital</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1C</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desinserción distal (ligamentos cubitocarpianos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperextensión</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>1D</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión radial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Traumatismo directo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Traumático</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano extendida (FOOSH) con pronación</li>
            <li>Hiperextensión + desviación cubital forzada</li>
          </ul>
        </li>
        <li><strong>Degenerativo</strong> (Clase II de Palmer):
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Impacto cubital (ulnocarpal abutment)</li>
            <li>Variación cubital positiva (mayor a 2mm)</li>
          </ul>
        </li>
        <li><strong>Microtrauma repetitivo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deportes de raqueta</li>
            <li>Gimnastas</li>
            <li>Trabajos manuales repetitivos</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de compresión cubital</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Compresión axial + desviación cubital</li>
            <li>Sensibilidad 74%, especificidad 81%</li>
          </ul>
        </li>
        <li><strong>Prueba del "piano key"</strong>: Inestabilidad DRUJ</li>
        <li><strong>Dolor a la palpación</strong>: Fóvea cubital</li>
        <li><strong>Supinación/proración dolorosa</strong></li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variación cubital, fracturas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación inicial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad TFCC, edema óseo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sensibilidad 84%, especificidad 100%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Comunicación articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones periféricas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artroscopia</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización directa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard diagnóstico-terapéutico</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones centrales (1A) sin inestabilidad DRUJ</li>
        <li>Lesiones traumáticas agudas</li>
        <li>Pacientes de baja demanda</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Férula braquiocubitopalmar 4-6 semanas</li>
        <li><strong>Modificación actividades</strong>: Evitar pronación/supinación forzada</li>
        <li><strong>Rehabilitación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva</li>
            <li>Fortalecimiento ECU y pronocuadrado</li>
            <li>Propiocepción de muñeca</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones periféricas (1B) con inestabilidad DRUJ</li>
        <li>Fracaso tratamiento conservador (3 meses)</li>
        <li>Lesiones asociadas (fractura cabeza cubital)</li>
        <li>Impacto cubital sintomático</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación artroscópica</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Sutura fuera-adentro para lesiones periféricas</li>
            <li>Desbridamiento para lesiones centrales</li>
          </ul>
        </li>
        <li><strong>Reparación abierta</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Para lesiones complejas</li>
            <li>Reinserción con anclajes óseos</li>
          </ul>
        </li>
        <li><strong>Procedimientos asociados</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Osteotomía de acortamiento cubital (Wafer procedure)</li>
            <li>Artroscopia con descompresión</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inmovilización 6 semanas (yeso braquiocubitopalmar)</li>
        <li>Evitar rotación antebrazo inicialmente</li>
        <li>Rehabilitación supervisada</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (6-10 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (10-16 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 4 mes)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Personalizado</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad DRUJ crónica</strong></li>
        <li><strong>Artrosis cubitocarpiana</strong></li>
        <li><strong>Rigidez de muñeca</strong></li>
        <li><strong>Dolor cubital residual</strong></li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento musculatura cubital</strong></li>
        <li><strong>Modificación técnica deportiva</strong></li>
        <li><strong>Uso de ortesis en actividades de riesgo</strong></li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las lesiones del TFCC requieren un enfoque individualizado basado en la localización de la lesión y la presencia de inestabilidad asociada. 
        Mientras las lesiones centrales responden bien al tratamiento conservador, las lesiones periféricas con inestabilidad DRUJ generalmente 
        requieren reparación quirúrgica. La artroscopia ha revolucionado el manejo de estas lesiones, permitiendo diagnóstico y tratamiento mínimamente invasivo.
      </p>
    </div>
  );
}

export default LesionFCT;