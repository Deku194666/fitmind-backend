

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Cancer.css';

function Cancer() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Cáncer </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>  El <strong> Cáncer </strong> es una enfermedad crónica y multifactorial caracterizada por el crecimiento descontrolado de células anormales
        que pueden invadir tejidos y órganos. Estas células pueden formar masas (tumores) y, en muchos casos, diseminarse a otras partes del cuerpo 
        (metástasis). Existen más de 100 tipos distintos de cáncer, siendo los más comunes los de mama, pulmón, próstata, colon y piel. Representa
        una de las principales causas de muerte a nivel mundial. </p>
        
      <p className='p14'>  Fisiopatología🧬  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🔬 Mutaciones genéticas: afectan genes que regulan el ciclo celular (protooncogenes, genes supresores de tumores). </li>
        <li> 📈 Proliferación celular anormal: las células cancerosas escapan a los mecanismos normales de apoptosis (muerte celular programada). </li>
        <li> 🩸 Angiogénesis: formación de nuevos vasos sanguíneos que nutren al tumor. </li>
        <li> 🌍 Metástasis: diseminación a través del sistema linfático o sanguíneo a otros órganos. </li>
        <li> 🧪 Alteraciones del microambiente tumoral: presencia de células inflamatorias, citoquinas y factores de crecimiento. </li>
      </ul>


      <p className='p14'> Clasificación  </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo de cáncer	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tejido de origen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carcinoma</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Epitelial	</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sarcoma</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Conectivo (huesos, músculos)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Leucemia	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Médula ósea/sangre </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Linfoma	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Sistema linfático	</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Melanoma	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>	Células pigmentarias (piel) 	</td>
    </tr>
  </tbody>
</table>

<p className='p150'>  También se clasifica por estadios (I a IV), según el tamaño, afectación local y metástasis. </p>
      
      <p className='p14'>  Causas⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Factores genéticos: mutaciones heredadas (BRCA1/2, TP53).   </li>
        <li> 📌 Factores ambientales: exposición a carcinógenos (tabaco, alcohol, radiación, sustancias químicas). </li>
        <li> 📌 Infecciones: virus como VPH (cáncer de cuello uterino), hepatitis B/C (hígado), VIH (sarcoma de Kaposi). </li>
        <li> 📌 Factores hormonales: estrógenos, andrógenos. </li>
        <li> 📌 Estilo de vida: dieta poco saludable, sedentarismo, obesidad. </li>
      </ul>

      <p className='p14'>   Diagnóstico🧪 </p>
      <p className='p150'>  🧬 Biopsia: análisis histopatológico del tejido.  </p>
      <p className='p150'>  🖥️ Imagenología: Mamografía, <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica (RNM), </Link> <Link to="/examenes/tc"> Tomografia Computarizada (TC), </Link> PET.  </p>
      <p className='p150'>  🩸 Marcadores tumorales: PSA, CEA, CA-125 (según el tipo). </p>
      <p className='p150'>  📝 Evaluación clínica y antecedentes familiares.  </p>

  
      <p className='p14'>  Tratamiento Médico💊  </p>
      <p className='p150'> 🎯  El objetivo es eliminar las células malignas y prevenir recurrencias. </p>
      <p className='p16'> 📌 1. Tratamiento farmacológico  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Quimioterapia: fármacos citotóxicos que destruyen células en división.   </li>
        <li> 2) Terapias dirigidas: bloquean moléculas específicas (ej: HER2 en cáncer de mama).  </li>
        <li> 3) Inmunoterapia: estimula el sistema inmune (ej: inhibidores de checkpoint).   </li>
      </ul>
      
      <p className='p16'> 📌 2. Tratamiento no farmacológico  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Radioterapia: uso de radiación para destruir células tumorales.   </li>
        <li> 2) Cirugía: resección del tumor y tejido afectado.  </li>
      </ul>

      <p className='p14'> 🧘‍♂️Tratamiento No Farmacológico </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🥦 Dieta balanceada: rica en antioxidantes, frutas y verduras.   </li>
        <li> 🚶 Ejercicio moderado: mejora el sistema inmune y calidad de vida. </li>
        <li> 🧘 Apoyo psicológico: esencial para afrontar el diagnóstico y el tratamiento. </li>
        <li> 🔍 Educación sanitaria: prevención, detección precoz, cambios en el estilo de vida.</li>
        <li> 🩹 Cuidados paliativos: manejo del dolor y calidad de vida en etapas avanzadas.  </li>
      </ul>


      <p className='p14'>  🧨Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🧠 Metástasis a órganos vitales. </li>
        <li> 🩺 Inmunosupresión. </li>
        <li> 🩸 Anemia y alteraciones hematológicas. </li>
        <li> 🦴 Dolor crónico y fracturas óseas. </li>
        <li> 🫁 Insuficiencia respiratoria (en cáncer pulmonar). </li>
        <li> 🧠 <Link to="/bienestarmental/enfmentales/tag"> Trastorno de Ansiedad Generalizada </Link>,
         <Link to="/bienestarmental/enfmentales/depresion" > Depresión   </Link>, Trastornos del Sueño. </li>
        <li> 🍽️ Desnutrición y caquexia. </li>
        <li> 🩻 Efectos secundarios de los tratamientos (náuseas, caída del cabello, fatiga). </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> El <strong> Cáncer </strong>es una enfermedad compleja que requiere un enfoque integral e interdisciplinario. 
        La prevención mediante hábitos saludables, la detección precoz y el acceso oportuno a tratamientos personalizados pueden marcar la diferencia 
        en el pronóstico. Educar, acompañar y empoderar al paciente es tan fundamental como los tratamientos médicos. La lucha contra el cáncer no solo 
        es biológica, sino también emocional, social y comunitaria.</p>
    </div>
    
  );
}

export default Cancer;
