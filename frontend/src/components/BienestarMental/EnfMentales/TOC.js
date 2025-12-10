

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TOC() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno Obsesivo-Compulsivo (TOC) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El TOC es un trastorno mental caracterizado por <strong>obsesiones</strong> (pensamientos intrusivos recurrentes) y <strong>compulsiones</strong> (conductas repetitivas para aliviar la ansiedad). Afecta al <strong>1-2% de la población</strong> (DSM-5) y suele comenzar en la adolescencia o adultez temprana. No es un simple "perfeccionismo": es un trastorno discapacitante que consume <strong>más de 1 hora diaria</strong> en rituales mentales o físicos.
      </p>
        
      <p className='p14'> 🧠 Tipos Principales</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Limpieza/contaminación:</strong> Miedo a gérmenes + rituales de lavado.</li>
        <li> <strong>Verificación:</strong> Dudas patológicas (ej.: revisar llaves 20 veces).</li>
        <li> <strong>Orden/simetría:</strong> Necesidad de organización extrema.</li>
        <li> <strong>Acumulación:</strong> Dificultad para desechar objetos (no confundir con trastorno de acumulación).</li>
        <li> <strong>Pensamientos prohibidos:</strong> Obsesiones agresivas/sexuales sin compulsiones visibles.</li>
      </ul>

      <p className='p14'> 🧬Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Hiperactividad córtico-estriado-tálamo-cortical:</strong> Circuito cerebral "atascado" en bucles de pensamiento.</li>
        <li> <strong>Desequilibrio serotoninérgico:</strong> Niveles bajos de serotonina en áreas frontales.</li>
        <li> <strong>Disfunción en los ganglios basales:</strong> Errores en el filtrado de pensamientos irrelevantes.</li>
      </ul>

      <p className='p14'> 📌 Factores de Riesgo</p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Biológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Psicológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ambientales </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (3-5x más riesgo en familiares de 1° grado)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Perfeccionismo patológico</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Infecciones por estreptococo (PANDAS en niños)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones en el receptor 5-HT2A (serotonina)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Intolerancia a la incertidumbre</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trauma infantil</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Síntomas Clave (DSM-5)</p>
      <p className='p16'> 💡 Criterios diagnósticos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Obsesiones:</strong> Pensamientos/intrusos no deseados que causan ansiedad extrema.</li>
        <li><strong>Compulsiones:</strong> Comportamientos repetitivos (ej.: lavarse) o actos mentales (ej.: rezar) para neutralizar la ansiedad.</li>
        <li>Duran ≥1 hora/día o causan deterioro clínicamente significativo.</li>
        <li>No se explican mejor por otro trastorno mental.</li>
      </ul>

      <p className='p14'> 🩺 Diagnóstico</p>
      <p className='p16'> 1. Evaluación Clínica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Escala <strong>Y-BOCS</strong> (Gold Standard) para evaluar severidad.</li>
        <li>Entrevista clínica estructurada (DIS-IV).</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Descartar: Trastorno de acumulación, TOC inducido por sustancias.</li>
      </ul>

      <p className='p14'> 💊 Tratamiento</p>
      <p className='p16'> 🔴 Farmacológico:</p>
      
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Mecanismo </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ISRS (altas dosis) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fluoxetina (80mg/día), Sertralina (200mg/día) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina en corteza orbitofrontal</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antipsicóticos (adyuvantes) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Risperidona </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Modulación dopaminérgica</td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 No Farmacológico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>ERP (Exposición con Prevención de Respuesta):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Exposición:</strong> Enfrentar gradualmente el estímulo obsesivo (ej.: tocar un picaporte).</li>
            <li><strong>Prevención:</strong> No realizar la compulsión (ej.: no lavarse las manos).</li>
          </ul>
        </li>
        <li><strong>Terapia Cognitiva:</strong> Reestructurar creencias disfuncionales (ej.: "Si no reviso 10 veces, mi familia morirá").</li>
      </ul>

      <p className='p14'> 🌱 Prevención y Manejo</p>
      <p className='p16'> 🟢 Técnicas de Autogestión:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Retraso de compulsiones:</strong> Postergar gradualmente el ritual (ej.: lavarse después de 5 minutos).</li>
        <li><strong>Automonitoreo:</strong> Registrar obsesiones-compulsiones en app móvil (ej.: nOCD).</li>
      </ul>

      <p className='p16'> 🚨 Señales de Alerta:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Pérdida de piel por lavado excesivo.</li>
        <li>Rituales que impiden salir de casa.</li>
        <li>Pensamientos suicidas por frustración.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        El TOC es un trastorno crónico pero <strong>manejable con ERP + ISRS</strong> (60-70% de mejoría). La clave es romper el ciclo obsesión-compulsión mediante exposición gradual. En casos graves, técnicas avanzadas como <strong>estimulación cerebral profunda</strong> pueden considerarse. La psicoeducación familiar es esencial para reducir acomodaciones que mantienen los síntomas.
      </p>
    </div>
  );
}

export default TOC;