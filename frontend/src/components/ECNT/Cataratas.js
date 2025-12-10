

import React, {useEffect} from 'react';
import './Asma.css';
import { Link } from 'react-router-dom';

function Cataratas() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Cataratas </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Las <strong> Cataratas </strong> son una opacificación progresiva del cristalino del ojo que afecta la visión. 
        Es la causa más frecuente de ceguera reversible a nivel mundial, especialmente en adultos mayores. La pérdida de transparencia del cristalino 
        impide el paso adecuado de la luz hacia la retina, causando visión borrosa, deslumbramiento y disminución de la agudeza visual. Su desarrollo 
        está relacionado con el envejecimiento, aunque también puede ser congénita, traumática, metabólica o secundaria a medicamentos. </p>
        
      <p className='p14'>  Fisiopatología🧬  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🧪 Desnaturalización de proteínas del cristalino: el cristalino pierde su estructura transparente y se vuelve opaco.</li>
        <li> 🧬 Acumulación de pigmentos y daño oxidativo: especialmente en la vejez, contribuye a la pérdida de claridad óptica. </li>
        <li> ⚡ Alteración del metabolismo celular del cristalino: por envejecimiento, exposición a rayos UV o estrés oxidativo. </li>
        <li> 🧫 En casos congénitos, hay alteraciones genéticas o metabólicas que impiden el desarrollo normal del cristalino. </li>
      </ul>


      <p className='p14'> 🔍 Clasificación  </p>
      <p className='p150'>  Según su localización dentro del cristalino: </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo de catarata</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ubicación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nuclear</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Centro del cristalino (común en ancianos)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cortical</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Periferia (corteza del cristalino)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Subcapsular posterior	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Debajo de la cápsula posterior (progresión rápida) </td>
    </tr>
  </tbody>
</table>

      <p className='p150'>Según origen:</p> 
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Senil: relacionada con la edad (más frecuente). </li>
        <li> 2. Congénita: presente al nacer. </li>
        <li> 3. Secundaria: por enfermedades (diabetes, uveítis) o fármacos (corticoides). </li>
        <li> 4. Traumática: por golpes o heridas oculares. </li>
      </ul>

      
      <p className='p14'>  ⚠️ Causas y Factores de Riesgo </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Edad avanzada.   </li>
        <li> 📌 <Link to="/ecnt/diabetes"> Diabetes Mellitus. </Link> </li>
        <li> 📌 Exposición prolongada a rayos UV. </li>
        <li> 📌 Tabaquismo. </li>
        <li> 📌 Uso crónico de corticoides. </li>
        <li> 📌 Traumatismos oculares previos. </li>
        <li> 📌 Historia familiar de cataratas. </li>
        <li> 📌 Consumo excesivo de alcohol. </li>
        <li> 📌 Enfermedades oculares previas (glaucoma, uveítis). </li>
      </ul>

      <p className='p14'>  Síntomas Comunes (Diabetes Tipo 1 y Tipo 2):🔍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Sed excesiva (polidipsia) → Beber agua constantemente.   </li>
        <li> 📌 Orina frecuente (poliuria) → Despertarse de noche para orinar. </li>
        <li> 📌 Hambre extrema (polifagia) → Apetito insaciable. </li>
        <li> 📌 Fatiga y debilidad → Falta de energía.  </li>
        <li> 📌 Visión borrosa.</li>
        <li> 📌 Hormigueo en manos/pies → Posible daño nervioso (neuropatía).</li>
        <li> 📌 Heridas que tardan en sanar → Mala circulación y cicatrización.</li>
      </ul>

      <p className='p14'>   Diagnóstico🧪 </p>
      <p className='p150'>  🔎 Evaluación oftalmológica completa.  </p>
      <p className='p150'>  🧿 Lámpara de hendidura: visualiza directamente la opacidad del cristalino.  </p>
      <p className='p150'>  👁️ Agudeza visual: se encuentra disminuida, especialmente en visión lejana. </p>
      <p className='p150'>  💡 Pruebas de sensibilidad al contraste y deslumbramiento.  </p>
      <p className='p150'>  🧬 En casos congénitos: estudios genéticos o metabólicos si se sospechan enfermedades asociadas.  </p>


  
      <p className='p14'>  Tratamiento Médico💊  </p>
      <p className='p150'> 🎯 El único tratamiento curativo es quirúrgico; no existen fármacos que reviertan la catarata. </p>
      <p className='p16'> 📌 1. Tratamiento quirúrgico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) 👁️‍🗨️ Facoemulsificación: técnica más común, fragmenta el cristalino con ultrasonido y se reemplaza con un lente intraocular (LIO). </li>
        <li> 2) 👁️‍🗨️ Extracción extracapsular: usada en cataratas avanzadas.  </li>
        <li> 3) 🧿 Elección del LIO según necesidad visual (monofocal, multifocal, tóricos).   </li>
      </ul>
      
      <p className='p16'> 📌 2. Medidas prequirúrgicas: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Evaluación médica y ocular previa.  </li>
        <li> 2) Control de comorbilidades como diabetes.  </li>
        <li> 3) Higiene ocular adecuada.  </li>
      </ul>

      <p className='p14'> 🧘‍♂️Tratamiento No Quirúrgico (temporal o preventivo) </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Uso de gafas o lentes de aumento en fases iniciales.   </li>
        <li> 📌 Protección ocular contra rayos UV.</li>
        <li> 📌 Control estricto de enfermedades crónicas. </li>
        <li> 📌 Reducción de factores de riesgo: dejar de fumar, dieta saludable.</li>
        <li> 📌 Evitar el uso prolongado de corticoides si no son imprescindibles.  </li>
        <li> 📌 Seguimiento oftalmológico regular en adultos mayores.  </li>
      </ul>


      <p className='p14'>  🧨Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🌫️ Ceguera progresiva y pérdida total de la visión. </li>
        <li> ⚠️ Caídas y accidentes por visión deficiente. </li>
        <li> 👁️ Glaucoma por catarata hipertensiva. </li>
        <li> 🦠 Endoftalmitis (si ocurre infección postoperatoria). </li>
        <li> 💊 Dependencia excesiva de otros para las actividades diarias. </li>
        <li> 📉 Disminución de la calidad de vida. </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> Las <strong> Cataratas </strong> representan una enfermedad ocular común y prevenible, cuya detección temprana permite una solución quirúrgica efectiva 
        y segura. Su abordaje debe incluir la educación sobre factores de riesgo, el control de enfermedades crónicas y una evaluación oftalmológica periódica, 
        especialmente en adultos mayores. La cirugía es altamente efectiva y mejora significativamente la calidad de vida, por lo que debe ser accesible y 
        promovida como parte de los cuidados integrales del adulto mayor.</p>
    </div>
    
  );
}

export default Cataratas;