

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
 
function Contusion() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Contusiones Musculares</p>
      <p className='p14'>Introducción</p>
      <p className='p150'>Las <strong>Contusiones Musculares</strong> son lesiones por impacto directo que representan el <strong>20-30% de las lesiones deportivas</strong> en deportes de contacto como fútbol, rugby y artes marciales🥊. Ocurren cuando un traumatismo comprime el músculo contra estructuras óseas, causando daño vascular y acumulación de sangre (hematoma) en el tejido muscular. Su gravedad depende de la fuerza del impacto y la vascularización de la zona afectada.</p>
        
      <p className='p14'>Clasificación por Gravedad 🧠</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Grado I (Leve):</strong> Hematoma intramuscular pequeño (menora 3cm). Dolor moderado con menor a 70% de rango articular conservado.</li>
        <li><strong>Grado II (Moderada):</strong> Hematoma 3-5cm. Pérdida de 30-50% de fuerza y movimiento.</li>
        <li><strong>Grado III (Grave):</strong> Hematoma grande (mayor a 5cm) o intermuscular. Limitación funcional severa (mayor a 50% pérdida movimiento).</li>
      </ul>

      <p className='p14'>Fisiopatología 🧬</p>
      <p className='p150'>El mecanismo lesional involucra tres fases:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Trauma inicial:</strong> Ruptura de vasos sanguíneos y fibras musculares → formación de hematoma.</li>
        <li><strong>Respuesta inflamatoria:</strong> Edema y liberación de citoquinas en primeras 72h.</li>
        <li><strong>Reparación:</strong> Fibroblastos forman tejido cicatricial (riesgo de miositis osificante en 5-10% de casos).</li>
      </ul>
      <p className='p150'>Los músculos más afectados son cuádriceps (40%), gemelos (25%) y bíceps braquial (15%) por su localización superficial.</p>

      <p className='p14'>Factores de Riesgo</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Deportes de contacto/colisión (fútbol, rugby, baloncesto)</li>
        <li><Link to="/ecnt/hemofilia">Trastornos de coagulación</Link> (aumentan tamaño del hematoma)</li>
        <li>Uso de anticoagulantes</li>
        <li>Mala técnica en deportes (ej.: bloqueos incorrectos en artes marciales)</li>
        <li>Equipamiento deportivo inadecuado (falta de protecciones)</li>
      </ul>
      
      <p className='p14'>Síntomas Característicos</p>
      <p className='p150'>Manifestaciones clínicas por fase:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>📌 <strong>Inmediatas (0-2h):</strong> Dolor punzante, espasmo muscular protector</li>
        <li>📌 <strong>6-24h:</strong> Hinchazón progresiva, equimosis (moretón)</li>
        <li>📌 <strong>24-72h:</strong> Rigidez, limitación funcional máxima</li>
        <li>📌 <strong>mayor a 72h:</strong> Cambio coloración piel (verde-amarilla) por degradación hemoglobina</li>
      </ul>

      <p className='p14'>🩺Diagnóstico</p>
      <p className='p16'>1) Evaluación Inicial</p>
      <p className='p16'>📌 Protocolo PRICE (primeras 48h):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>🛡️ <strong>P</strong>rotection: Evitar nuevos traumatismos</li>
        <li>❄️ <strong>R</strong>est: Reposo relativo 24-48h</li>
        <li>🧊 <strong>I</strong>ce: Crioterapia 15min cada 2h</li>
        <li>🎗️ <strong>C</strong>ompression: Vendaje elástico (30-40mmHg)</li>
        <li>🔼 <strong>E</strong>levation: Elevar extremidad sobre corazón</li>
      </ul>
      <p className='p16'>2. Estudios de Imagen</p>

<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Hallazgos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Utilidad </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/ecografia">Ecografía</Link></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Tamaño hematoma<br/>- Integridad fascia<br/>- Flujo sanguíneo residual</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera elección (rápida, dinámica)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">RMN</Link></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Extensión real del daño<br/>- Edema óseo asociado<br/>- Signos tempranos de miositis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos complejos o duda diagnóstica</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>RX</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Fracturas asociadas<br/>- Calcificaciones tardías (mayor a 3s)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descarta complicaciones óseas</td>
    </tr>
  </tbody>
</table>

      <p className='p16'>3. Diagnóstico Diferencial</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Desgarro muscular:</strong> Dolor en contracción activa (no solo a la palpación)</li>
        <li><strong>Fractura por estrés:</strong> Dolor nocturno y con carga peso</li>
        <li><strong>Trombosis venosa:</strong> Signos de inflamación vascular</li>
      </ul>

      <p className='p14'>Tratamiento Médico</p>
      <p className='p16'>🔴 Fase Aguda (0-72h):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Protocolo PRICE estricto</li>
        <li>Analgesia con paracetamol (evitar AINES primeros 2 días)</li>
        <li>Movilización pasiva suave desde 24h</li>
      </ul>
      
      <p className='p16'>🔴 Fase Subaguda (3d-2s):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Termoterapia superficial (después de 72h)</li>
        <li>Drenaje linfático manual profesional</li>
        <li>Ejercicios isométricos progresivos</li>
        <li>Ultrasonido terapéutico pulsado</li>
      </ul>

      <p className='p16'>🔴 Fase Crónica (mayor a 2s):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Masaje transverso profundo (evitar en riesgo de miositis)</li>
        <li>Estiramientos dinámicos controlados</li>
        <li>Electroterapia analgésica (TENS)</li>
      </ul>
   
      <p className='p14'>Tratamientos Avanzados</p>
      <p className='p150'>Para casos complejos:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Punción evacuadora:</strong> En hematomas mayor a 5cm con tensión tisular</li>
        <li><strong>Ondas de choque:</strong> Para prevenir miositis osificante</li>
        <li><strong>EPI (Electrólisis Percutánea):</strong> En fibrosis residual</li>
      </ul>

      <p className='p14'>Rehabilitación Progresiva</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Fase </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Objetivos </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejercicios </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1. Inflamatoria (0-3d)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema<br/>Mantener rango pasivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilizaciones pasivas suaves</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2. Reparación (3d-3s)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reabsorber hematoma<br/>Recuperar fuerza</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Isométricos → concéntricos ligeros</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3. Remodelación (3-6s)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar función completa<br/>Prevenir recidivas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Excéntricos → pliometría</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Síndrome compartimental:</strong> Urgencia quirúrgica (presión 30mmHg)</li>
        <li><strong>Miositis osificante:</strong> Calcificación intramuscular (5-20% de casos graves)</li>
        <li><strong>Fibrosis muscular:</strong> Rigidez y dolor crónico</li>
        <li><strong>Infección:</strong> Sobre todo en hematomas drenados</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>Las <strong>Contusiones Musculares</strong>, aunque frecuentes, requieren manejo adecuado para evitar 
      complicaciones. El protocolo PRICE en fase aguda seguido de rehabilitación progresiva es fundamental. La ecografía temprana 
      ayuda a clasificar la gravedad y guiar el tratamiento. En deportistas, el uso de protecciones y técnica adecuada reduce su 
      incidencia. La recuperación completa suele lograrse en 2-6 semanas según gravedad, siendo clave respetar los tiempos biológicos 
      de reparación tisular.</p>
    </div>
  );
}

export default Contusion;