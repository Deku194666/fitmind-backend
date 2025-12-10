

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
 
function Desgarros() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Desgarros Musculares</p>
      <p className='p14'>Introducción</p>
      <p className='p150'>El <strong>Desgarro Muscular</strong> es una lesión frecuente en deportistas y personas activas que ocurre cuando las fibras musculares se estiran o rompen más allá de su capacidad elástica💪. Representa el <strong>30% de las lesiones deportivas</strong> y puede variar desde pequeñas microrroturas hasta rupturas completas del músculo. La gravedad determina el tiempo de recuperación, que puede ir desde días hasta varios meses.</p>
        
      <p className='p14'>Tipos de Desgarros 🧠</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Grado I (Leve):</strong> Microrrotura de menos del 5% de fibras. Dolor moderado sin pérdida significativa de fuerza.</li>
        <li><strong>Grado II (Moderado):</strong> Rotura parcial (5-50% de fibras). Dolor agudo, hematoma visible y limitación funcional.</li>
        <li><strong>Grado III (Grave):</strong> Rotura completa del músculo o tendón. Deformidad visible, impotencia funcional total.</li>
      </ul>

      <p className='p14'>Fisiología y Fisiopatología 🧬</p>
      <p className='p150'>Los desgarros ocurren cuando la fuerza aplicada al músculo excede su capacidad de resistencia:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Fase excéntrica:</strong> 70% de desgarros ocurren al frenar un movimiento (ej.: al cambiar de dirección).</li>
        <li><strong>Unión miotendinosa:</strong> Zona más vulnerable por menor vascularización.</li>
        <li><strong>Mecanismo lesional:</strong> Contracción brusca contra resistencia o estiramiento excesivo.</li>
      </ul>
      <p className='p150'>La reparación sigue 3 fases: inflamación (0-72h), reparación (3d-6s) y remodelación (3s-6m).</p>

      <p className='p14'>Factores de Riesgo</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><Link to="/ecnt/edad">Edad avanzada</Link> (pérdida elasticidad muscular)</li>
        <li>Fatiga muscular o sobreentrenamiento</li>
        <li>Calentamiento insuficiente pre-ejercicio</li>
        <li><Link to="/ecnt/deshidratacion">Deshidratación</Link> y desequilibrios electrolíticos</li>
        <li>Antecedentes de lesiones previas en la zona</li>
        <li>Mala técnica deportiva o equipamiento inadecuado</li>
        <li>Enfermedades metabólicas (<Link to="/ecnt/diabetes">Diabetes Miellitus</Link>)</li>
      </ul>
      
      <p className='p14'>Síntomas del Desgarro</p>
      <p className='p150'>Los signos aparecen <strong>bruscamente</strong> durante la actividad física:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>📌 Dolor agudo ("pedrada") en zona específica</li>
        <li>📌 Hematoma visible (aparece en 24-48h)</li>
        <li>📌 Inflamación local y calor</li>
        <li>📌 Dificultad para contraer o estirar el músculo</li>
        <li>📌 Posible hendidura palpable en desgarros graves</li>
      </ul>

      <p className='p14'>🩺Diagnóstico</p>
      <p className='p16'>1) Evaluación Inicial (Primeras Horas)</p>
      <p className='p16'>📌 Protocolo POLICE (reemplazo de RICE):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>🩹 <strong>P</strong>rotection: Inmovilización relativa 24-48h</li>
        <li>🩹 <strong>O</strong>ptimal Loading: Carga progresiva temprana</li>
        <li>🩹 <strong>I</strong>ce: Crioterapia 15-20min cada 2-3h</li>
        <li>🩹 <strong>C</strong>ompression: Vendaje elástico</li>
        <li>🩹 <strong>E</strong>levation: Elevar la extremidad</li>
      </ul>
      <p className='p16'>2. Estudios de Imagen</p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Detecta </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ventaja </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/ecografia">Ecografía Muscular</Link></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Extensión de la rotura<br/>- Hematoma intramuscular<br/>- Estado vascular</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Accesible, dinámica, sin radiación</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rnm">Resonancia Magnética</Link></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Edema muscular<br/>- Roturas completas<br/>- Lesiones asociadas</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mayor detalle anatómico</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>RX (solo en casos especiales)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>- Avulsiones óseas<br/>- Calcificaciones</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descarta fracturas asociadas</td>
    </tr>
  </tbody>
</table>

      <p className='p16'>3. Evaluación Funcional</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Pruebas de rango articular:</strong> Dolor en estiramiento pasivo</li>
        <li><strong>Pruebas de contracción:</strong> Dolor y debilidad en contracción resistida</li>
        <li><strong>Palpación:</strong> Identificación de gap muscular en roturas completas</li>
      </ul>

      <p className='p14'>Tratamiento Médico</p>
      <p className='p16'>🔴 Fase Aguda (0-72h):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Protocolo POLICE</li>
        <li>Analgésicos (paracetamol) y AINES cortos (3 días)</li>
        <li>Reposo relativo con movilización temprana controlada</li>
      </ul>
      
      <p className='p16'>🔴 Fase Subaguda (3d-3s):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Fisioterapia con ultrasonido, electroterapia</li>
        <li>Ejercicios isométricos progresivos</li>
        <li>Vendaje neuromuscular (kinesiotape)</li>
      </ul>

      <p className='p16'>🔴 Fase Crónica (mayor a3s):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Ejercicios excéntricos controlados</li>
        <li>Pliometría progresiva</li>
        <li>Readaptación deportiva específica</li>
      </ul>
   
      <p className='p14'>Tratamiento Quirúrgico</p>
      <p className='p150'>Indicado solo en:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Roturas completas (mayor a 50% de fibras)</li>
        <li>Desgarros en músculos biarticulares (gemelo, recto femoral)</li>
        <li>Hematomas intramusculares grandes (mayor a 5cm)</li>
        <li>Fallas en tratamiento conservador (6-8 semanas)</li>
      </ul>

      <p className='p14'>Rehabilitación y Prevención</p>
      <p className='p150'>Programa progresivo en 4 fases:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>1️⃣ <strong>Fase inflamatoria:</strong> Movilización pasiva suave</li>
        <li>2️⃣ <strong>Fase proliferativa:</strong> Ejercicios concéntricos/isométricos</li>
        <li>3️⃣ <strong>Fase remodelación:</strong> Ejercicios excéntricos</li>
        <li>4️⃣ <strong>Fase funcional:</strong> Entrenamiento específico deportivo</li>
      </ul>
      <p className='p150'>Medidas preventivas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Calentamiento adecuado (15-20min dinámico)</li>
        <li>Programas de fortalecimiento excéntrico</li>
        <li>Hidratación y nutrición adecuadas</li>
        <li>Progresión gradual en entrenamientos</li>
      </ul>

      <p className='p14'>Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Fibrosis y adherencias musculares</li>
        <li>Miositis osificante (calcificación intramuscular)</li>
        <li>Recidivas por retorno precoz al deporte</li>
        <li>Desequilibrios musculares crónicos</li>
        <li>Defectos funcionales permanentes (en grados III)</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>El <strong>desgarro muscular</strong> es una lesión prevenible que requiere manejo adecuado según su gravedad. 
      El diagnóstico temprano y el tratamiento por fases optimizan la recuperación. La rehabilitación supervisada y el respeto de los 
      tiempos biológicos de curación son clave para evitar recaídas. En deportistas, los programas de prevención con énfasis en 
      fortalecimiento excéntrico pueden reducir hasta un 40% la incidencia de estas lesiones.</p>
    </div>
  );
}

export default Desgarros;