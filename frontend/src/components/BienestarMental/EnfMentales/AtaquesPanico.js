

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function AtaquesPanico() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Ataques de Pánico (Trastorno de Pánico) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> Un ataque de pánico es un episodio repentino de <strong>miedo intenso o malestar extremo</strong> que alcanza su pico en minutos, acompañado de síntomas físicos y cognitivos abrumadores. El <strong>Trastorno de Pánico (TP)</strong> se diagnostica cuando los ataques son recurrentes y generan preocupación persistente. Afecta al <strong>2-3% de la población</strong> y es más frecuente en mujeres (2:1).</p>
        
      <p className='p14'> 🧠 Tipos de Crisis Relacionadas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Ataque espontáneo (inesperado):</strong> Sin desencadenante claro.</li>
        <li> <strong>Ataque situacional:</strong> Desencadenado por estímulos específicos (ej.: espacios cerrados).</li>
        <li> <strong>Ataque nocturno:</strong> Ocurre durante el sueño, con activación súbita (taquicardia, sudoración).</li>
      </ul>

      <p className='p14'> 🧬 Fisiopatología</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Hiperactividad de la amígdala:</strong> Respuesta exagerada al peligro percibido.</li>
        <li> <strong>Desequilibrio neuroquímico:</strong> Noradrenalina ↑ (sistema de alarma), GABA ↓ (falta de inhibición calmante).</li>
        <li> <strong>Sistema nervioso autónomo:</strong> Activación del eje simpático (lucha/huida).</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Genética (40% heredabilidad)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Catastrofización corporal ("me voy a morir")</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Eventos traumáticos (ej.: accidentes)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones en el locus coeruleus (noradrenalina)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Miedo al miedo (ansiedad anticipatoria)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estrés crónico</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedades (hipertiroidismo, arritmias)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> -</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Consumo de estimulantes (cafeína, drogas)</td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Síntomas Clave (DSM-5)</p>
      <p className='p16'> 💡 Criterios para ataque de pánico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>4+ de estos síntomas (en ≤10 minutos):</li>
        <li><strong>Cardiovasculares:</strong> Taquicardia, palpitaciones.</li>
        <li><strong>Respiratorios:</strong> Disnea (falta de aire), sensación de ahogo.</li>
        <li><strong>Neurológicos:</strong> Mareos, desrealización.</li>
        <li><strong>Cognitivos:</strong> Miedo a morir o "volverse loco".</li>
      </ul>

      <p className='p16'> 💡 Criterios para Trastorno de Pánico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Ataques recurrentes + 1 mes de:</li>
        <li>- Preocupación persistente por nuevos ataques.</li>
        <li>- Cambios conductuales para evitarlos (ej.: no salir de casa).</li>
      </ul>

      <p className='p14'> 🩺 Diagnóstico</p>
      <p className='p16'> 1. Evaluación Clínica:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Escala <strong>PDSS</strong> (Panic Disorder Severity Scale).</li>
        <li>Descarte de condiciones médicas (arritmias, hipertiroidismo).</li>
      </ul>

      <p className='p16'> 2. Escalas Validadas:</p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Test </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Qué Mide </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Puntaje </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> PDSS </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Severidad del TP </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-28 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ASI-3 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sensibilidad a la ansiedad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0-72 </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 3. Exámenes Complementarios</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Analítica sanguínea:</strong> hormonas tiroideas, cortisol.</li>
        <li><strong>ECG:</strong> descartar arritmias.</li>
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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ISRS </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Paroxetina, Sertralina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Benzodiacepinas </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alprazolam (corto plazo) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Potencian GABA </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IRSN </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Venlafaxina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ↑ Serotonina + Noradrenalina </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🟢 No Farmacológico:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia Cognitivo-Conductual (TCC):</strong> Exposición interoceptiva (simular síntomas para reducir el miedo).</li>
        <li><strong>Mindfulness:</strong> Enfocarse en el presente sin juzgar los síntomas.</li>
      </ul>

      <p className='p14'> 🌱 Prevención y Manejo Durante una Crisis</p>
      <p className='p16'> 🟢 Protocolo de 5 pasos:</p>
      <ol className='p150' style={{ listStyleType: 'decimal' }} >
        <li><strong>Reconocer:</strong> "Esto es un ataque de pánico, no peligro real".</li>
        <li><strong>Respiración 4-7-8:</strong> Inhalar (4s), sostener (7s), exhalar (8s).</li>
        <li><strong>Anclaje sensorial:</strong> Tocar un objeto frío o contar colores.</li>
        <li><strong>Repetir mantras:</strong> "Pasará en minutos".</li>
        <li><strong>Pos-crisis:</strong> Registrar desencadenantes.</li>
      </ol>

      <p className='p16'> 🧘‍♂️ Cambios en el Estilo de Vida:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Reducir cafeína/alcohol.</li>
        <li>Ejercicio regular (regula noradrenalina).</li>
      </ul>

      <p className='p16'> 🚨 Señales de Alerta:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Evitar lugares donde ocurrieron ataques previos (agorafobia).</li>
        <li>Visitas frecuentes a urgencias por miedo a infarto.</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>El Trastorno de Pánico es altamente tratable con <strong>TCC + ISRS</strong>. La psicoeducación es vital 
      para entender que los síntomas, aunque aterradores, no son peligrosos. Sin tratamiento, puede derivar en agorafobia
      o depresión.</p>
    </div>
  );
}

export default AtaquesPanico;