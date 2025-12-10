

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AR() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Artritis Reumatoide (AR)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La <strong>Artritis Reumatoide</strong> es una enfermedad autoinmune sistémica que afecta principalmente las articulaciones sinoviales, con una prevalencia del <strong>0.5-1% de la población adulta</strong>. 
        Es más frecuente en mujeres (3:1) y su pico de inicio es entre los 30-50 años. Sin tratamiento adecuado, lleva a daño articular irreversible y discapacidad funcional.
      </p>

      <p className='p14'>Patogenia Clave 🦠</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Autoinmunidad</strong>: Respuesta anormal contra antígenos articulares (ej. citrulinados)
        </li>
        <li>
          <strong>Sinovitis proliferativa</strong>: Hiperplasia sinovial ("pannus") que erosiona cartílago/hueso
        </li>
        <li>
          <strong>Citocinas proinflamatorias</strong>: TNF-α, IL-6, IL-1 como mediadores clave
        </li>
      </ul>

      <p className='p14'>Criterios Diagnósticos (ACR/EULAR 2010) 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Categoría</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puntos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Criterios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }} rowSpan="2"><strong>Articulaciones afectadas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-10 articulaciones grandes</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1-3 articulaciones pequeñas (≥6 si incluye pequeñas)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Serología</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>FR + y/o anti-CCP + (alto título)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Reactantes fase aguda</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>PCR o VSG elevadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Duración síntomas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥6 semanas</td>
          </tr>
        </tbody>
      </table>
      <p className='p150' style={{fontStyle: 'italic'}}>Nota: Puntaje ≥6/10 confirma diagnóstico</p>

      <p className='p14'>Manifestaciones Clínicas 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Articulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Sinovitis simétrica (MCF, IFP, muñecas)</li>
            <li>Rigidez matutina mayor a 1 hora</li>
            <li>Deformidades tardías (cuello de cisne, boutonnière)</li>
          </ul>
        </li>
        <li><strong>Extraarticulares</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Nódulos reumatoides (25%)</li>
            <li>Enfermedad pulmonar intersticial (10-30%)</li>
            <li>Vasculitis, síndrome de Felty</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Estudios de Laboratorio</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Factor Reumatoide</strong>: 60-80% sensibilidad</li>
        <li><strong>Anti-CCP</strong>: 95% específico (mejor valor pronóstico)</li>
        <li><strong>Reactantes fase aguda</strong>: VSG, PCR elevadas</li>
        <li><strong>Anemia de enfermedad crónica</strong>: Normocítica normocrómica</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Erosiones, estrechamiento articular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico tardío (daño establecido)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sinovitis, edema óseo, erosiones tempranas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico precoz (antes de erosiones)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sinovitis, hipervascularización (Doppler)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Monitoreo actividad enfermedad</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Farmacológico 💊</p>
      <p className='p16'>Objetivos principales:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inducción de remisión (DAS28 menor a 2.6)</li>
        <li>Prevención daño estructural</li>
        <li>Preservación función articular</li>
      </ul>

      <p className='p16'>Estrategia terapéutica:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>1a línea (inicio temprano)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Metotrexato</strong> (droga ancla) 15-25 mg/sem</li>
            <li>Corticoides puente (prednisona ≤10 mg/día)</li>
          </ul>
        </li>
        <li><strong>2a línea (fallo a MTX)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>FAME combinados</strong>: MTX + leflunomida/sulfasalazina</li>
            <li><strong>Biológicos</strong>: Anti-TNF (adalimumab, etanercept)</li>
            <li><strong>JAK inhibitors</strong>: Tofacitinib, baricitinib</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Manejo No Farmacológico �</p>
      <p className='p16'>Componentes esenciales:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Terapia ocupacional</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Órtesis para deformidades</li>
            <li>Adaptaciones para actividades diarias</li>
          </ul>
        </li>
        <li><strong>Fisioterapia</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Ejercicios de rango articular</li>
            <li>Fortalecimiento muscular</li>
          </ul>
        </li>
        <li><strong>Educación al paciente</strong>: Manejo de fatiga, protección articular</li>
      </ul>

      <p className='p14'>Seguimiento y Monitoreo 📈</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Parámetro</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>DAS28</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 1-3 meses</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Remisión (DAS28 menora a 2.6)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>HAQ</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Semestral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>HAQ ≤0.5</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Imagen</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anual</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sin progresión erosiva</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Osteoporosis</strong>: Por inflamación crónica + corticoides</li>
        <li><strong>Infecciones</strong>: Riesgo aumentado con inmunosupresores</li>
        <li><strong>Enfermedad cardiovascular</strong>: Riesgo 2-3x mayor</li>
        <li><strong>Amiloidosis</strong>: En enfermedad de larga evolución</li>
      </ul>

      <p className='p14'>Pronóstico 🔮</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Factores de mal pronóstico</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Anti-CCP + alto título</li>
            <li>Compromiso extraarticular temprano</li>
            <li>Erosiones en primeros 2 años</li>
          </ul>
        </li>
        <li><strong>Supervivencia</strong>: Reducida en 5-10 años vs población general</li>
        <li><strong>Remisión sostenida</strong>: 30-40% con tratamiento moderno</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La <strong>Artritis Reumatoide</strong> es una enfermedad sistémica que requiere <strong>diagnóstico precoz y tratamiento agresivo temprano</strong> para prevenir daño irreversible. 
        El enfoque terapéutico actual combina FAME convencionales, agentes biológicos y estrategias no farmacológicas. 
        El monitoreo periódico con herramientas validadas (DAS28) es esencial para ajustar terapia y lograr mejores resultados funcionales.
      </p>
    </div>
  );
}

export default AR;