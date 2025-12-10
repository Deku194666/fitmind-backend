


import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Asma.css';




function Obesidad() {

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
  }, []);
  
  return (
    <div className="ecnt-detail">
      <p className='p13'>Obesidad </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>  La <strong> Obesidad  </strong>  es una enfermedad crónica caracterizada por un exceso de grasa corporal que puede afectar negativamente la salud.
        Se define comúnmente mediante el índice de masa corporal (IMC), siendo obesidad un IMC ≥ 30 kg/m². Es un factor de riesgo importante para múltiples 
        enfermedades no transmisibles como diabetes tipo 2, hipertensión, dislipidemia, enfermedad cardiovascular y ciertos tipos de cáncer. Es el resultado
        de un desequilibrio entre la ingesta calórica y el gasto energético, influido por factores genéticos, ambientales y conductuales. </p>
        
      <p className='p14'>  Fisiopatología🧬  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Exceso de ingesta calórica: acompañado por una vida sedentaria, genera acumulación de grasa.🍔 </li>
        <li> Disfunción hipotalámica: afecta la regulación del apetito y el gasto energético.🧠  </li>
        <li>Alteraciones hormonales: como la resistencia a la insulina, niveles elevados de leptina (pero con resistencia), y disminución de adiponectina.🧪</li>
        <li>Inflamación crónica de bajo grado: generada por tejido adiposo visceral.</li>
      </ul>


      <p className='p14'> Clasificación🔍 </p>
      <p className='p16'> Según el IMC (kg/m²):  </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clasificación</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>IMC (kg/m²)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sobrepeso</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>25 - 29.9</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Obesidad grado I</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>30 - 34.9</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Obesidad grado II</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>35 - 39.9</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Obesidad grado III (mórbida)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥ 40</td>
    </tr>
  </tbody>
</table>

      
      <p className='p14'>  Causas⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Factores genéticos: predisposición familiar.   </li>
        <li> 📌 Factores ambientales: dieta hipercalórica, sedentarismo, falta de sueño. </li>
        <li> 📌 Factores psicológicos:  <Link to="/bienestarmental/enfmentales/tag"> Trastorno de Ansiedad Generalizada </Link>, 
        <Link to="/bienestarmental/enfmentales/depresion" > Depresión   </Link>, Trastornos Alimentarios. </li>
        <li> 📌 Enfermedades endocrinas: hipotiroidismo, síndrome de Cushing. </li>
        <li> 📌 Uso de medicamentos: corticoides, antidepresivos, antipsicóticos.  </li>
      </ul>
      
      <p className='p14'>   Diagnóstico🧪 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. IMC.📏  </li>
        <li> 2. Circunferencia abdominal (+ 88 cm en mujeres, + 102 cm en hombres).📏 </li>
        <li> 3. Evaluación de comorbilidades: <Link to="/examenes2/glicemia"> Glicemia </Link>, <Link to="/examenes2/perfillipidico"> Perfil Lipidico</Link>, Presión Arterial.🩸 </li>
        <li> 4. Historia clínica detallada y evaluación nutricional.📉   </li>
      </ul>


  
      <p className='p14'>  Tratamiento Médico💊  </p>
      <p className='p150'> 🎯 El objetivo es reducir peso, mejorar la salud metabólica y prevenir complicaciones. </p>

      <p className='p16'> 📌 1. Tratamiento farmacológico  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Orlistat: inhibe la absorción de grasa intestinal.   </li>
        <li> 2) Liraglutida: análogo GLP-1, reduce el apetito.   </li>
        <li> 3) Bupropión/naltrexona: controla el apetito y la recompensa alimentaria.  </li>
      </ul>
      
      <p className='p16'> 📌 2. Cirugía bariátrica (en casos severos):    </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Bypass gástrico.  </li>
        <li> Manga gástrica. Indicada en pacientes con obesidad ≥40 o ≥35 con comorbilidades.  </li>
      </ul>

   
      <p className='p14'> 🥦Tratamiento No Farmacológico </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Dieta balanceada: reducir calorías, grasas saturadas y azúcares simples.   </li>
        <li> 📌 Ejercicio físico regular: al menos 150 minutos por semana. </li>
        <li> 📌 Educación nutricional y apoyo psicológico. </li>
        <li> 📌 Mejorar higiene del sueño y manejo del estrés. </li>
        <li> 📌 Terapias conductuales: modificación de hábitos.  </li>
      </ul>


      <p className='p14'>  🧨Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/acv">🧠 Accidente cerebrovascular (ACV)</Link>.</li>
        <li> ❤️ Enfermedad coronaria. </li>
        <li> 🧬 <Link to="/ecnt/diabetes">Diabetes Mellitus</Link> tipo II. </li>
        <li> 📈 <Link to="/ecnt/hipertension">Hipertensión Arterial</Link>. </li>
        <li> 🧘‍♂️ Apnea del sueño. </li>
        <li> 🧠 <Link to="/bienestarmental/enfmentales/tag"> Trastorno de Ansiedad Generalizada </Link> y 
        <Link to="/bienestarmental/enfmentales/depresion" > Depresión</Link>. </li>
        <li> 🦵 <Link to="/ecnt/artrosis"> Artrosis</Link> (especialmente rodillas y caderas). </li>
    


      </ul>
      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> La <strong> Obesidad  </strong>es una enfermedad crónica, multifactorial y prevenible que requiere un enfoque integral y sostenido.
        No solo representa un problema estético, sino un serio desafío de salud pública. La intervención temprana, el acompañamiento profesional, 
        los cambios en el estilo de vida y, en casos seleccionados, el tratamiento médico o quirúrgico, son fundamentales para mejorar la calidad y
        esperanza de vida de los pacientes.</p>
    </div>
    
  );
}

export default Obesidad;

