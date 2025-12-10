
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LPCyLPAP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="ecnt-detail">
      <p className='p13'>Esguince de Ligamento Peroneocalcáneo (LPC) y Peroneoastragalino Posterior (LPAP)</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'>
        Los ligamentos <strong>LPC</strong> y <strong>LPAP</strong> forman parte del complejo ligamentario lateral del tobillo.
         Mientras el LPC es el segundo más lesionado en esguinces por inversión (15-20% de los casos), el LPAP rara vez se lesiona de 
         forma aislada (menor a 5%). Las lesiones de estos ligamentos suelen asociarse a traumatismos de alta energía o esguinces grado 
         III.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>LPC</strong>: Se extiende desde el maléolo peroneo hasta la cara lateral del calcáneo. Limita la inversión en 
          flexión plantar.
        </li>
        <li>
          <strong>LPAP</strong>: Desde el maléolo peroneo hasta la cara posterior del astrágalo. Estabiliza contra la rotación 
          externa y traslación posterior.
        </li>
        <li>
          <strong>Relación anatómica</strong>: Ambos forman el "complejo ligamentario lateral" junto al LPAA.
        </li>
      </ul>

      <p className='p14'>Clasificación por Grado 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPC</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros (menor a 25% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Raramente ocurre de forma aislada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (25-75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Asociado a lesión del LPAA/LPC</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Grave)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa (mayor a 75% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Siempre con inestabilidad mecánica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismo de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>LPC</strong>: Inversión + flexión plantar forzada (ej.: pisar terreno irregular)</li>
        <li><strong>LPAP</strong>: Dorsiflexión + rotación externa (ej.: accidentes de tráfico)</li>
        <li><strong>Común en</strong>: Futbolistas (LPC), traumatismos de alta energía (LPAP)</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>LPC</strong>: Dolor en región submaleolar lateral, edema en "coma"</li>
        <li><strong>LPAP</strong>: Dolor posterior al maléolo peroneo, drawer test positivo</li>
        <li><strong>Pruebas específicas</strong>: Inversión forzada (LPC), rotación externa (LPAP)</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPC</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión calcánea (5% casos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas astrágalo posterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/ecografia">Ecografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualización directa dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Limitada por profundidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema pericalcáneo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard (corte sagital)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPC</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Fase aguda: RICE + tobillera estabilizadora</li>
            <li>Movilización temprana (48-72h)</li>
            <li>Ejercicios de eversión desde 2ª semana</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPAP</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Inmovilización rígida 4-6 semanas</li>
            <li>Carga progresiva desde 3ª semana</li>
            <li>Evitar dorsiflexión inicial</li>
          </ul>
        </div>
      </div>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p150'><strong>Indicado en:</strong> Roturas completas con inestabilidad o fracaso conservador</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPC</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Reparación anatómica con sutura no absorbible</li>
            <li>Reconstrucción con tendón peroneo en crónicos</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPAP</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Reinserción con anclajes óseos</li>
            <li>Reconstrucción alogénica en lesiones antiguas</li>
          </ul>
        </div>
      </div>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPC</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>LPAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-2 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección + movilidad limitada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inmovilización estricta</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (2-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento peroneos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización progresiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Avanzada (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno deportivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control RMN pre-alta</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPC</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Inestabilidad lateral crónica</li>
            <li>Pinzamiento subfibular</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <p className='p16'>LPAP</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Artrosis tibiotalar posterior</li>
            <li>Rigidez en dorsiflexión</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📌Conclusión</p>
      <p className='p150'>
        Las lesiones del <strong>LPC</strong> requieren rehabilitación funcional temprana, mientras que las del <strong>LPAP</strong> suelen necesitar inmovilización prolongada. 
        El LPAP actúa como estabilizador secundario y su lesión indica trauma severo. El abordaje debe ser individualizado según el ligamento afectado 
        y el grado de inestabilidad asociada.
      </p>
    </div>
  );
}

export default LPCyLPAP;
