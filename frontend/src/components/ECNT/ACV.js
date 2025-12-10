

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Asma.css';

function ACV() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Accidente Cerebrovascular (ACV)</p>
      <p className='p14'>Introducción</p>
      <p className='p150'>  El  <strong> Accidente Cerebrovascular (ACV)</strong>  , también conocido como ictus, infarto cerebral o derrame cerebral, es una urgencia médica 
        que ocurre cuando se interrumpe el flujo sanguíneo al cerebro🧠, lo que provoca daño en las células cerebrales. Dependiendo de la zona afectada, 
        puede causar secuelas neurológicas temporales o permanentes e incluso la muerte. Es una de las principales causas de discapacidad y mortalidad en todo el mundo. </p>
        
      <p className='p14'>  Tipos de ACV🧠  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Isquémico: causado por obstrucción arterial (trombosis, embolia).</li>
        <li>Hemorrágico: debido a ruptura vascular (hemorragia intracerebral o subaracnoidea).</li>
        <li>AIT (Ataque Isquémico Transitorio): “mini-ACV” que dura minutos u horas y se resuelve completamente. Es una señal de alerta.</li>
      </ul>


      <p className='p14'>  Fisiología y Fisiopatología 🧬   </p>
      <p className='p150'>  El cerebro depende de un flujo constante de sangre para funcionar. Cuando este se interrumpe: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> ACV isquémico </strong>  (≈85%): ocurre por una obstrucción arterial, generalmente por un trombo (formado en el lugar) o un émbolo (desplazado desde otro sitio). </li>
        <li> <strong> ACV hemorrágico </strong>  (≈15%): se produce por la rotura de un vaso sanguíneo cerebral, lo que provoca sangrado e incremento de la presión intracraneal.</li>
      </ul>
      <p className='p150'> Ambos tipos provocan isquemia y necrosis del tejido cerebral, lo que conlleva síntomas neurológicos focales.   </p>

      <p className='p14'>  Factores de Riesgo </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/hipertension">Hipertensión Arterial </Link>  (el principal).  </li>
        <li> Fibrilación auricular u otras cardiopatías. </li>
        <li> <Link to="/ecnt/diabetes">Diabetes Mellitus.</Link> </li>
        <li> <Link to="/ecnt/dislipidemia"> Dislipidemia. </Link> </li>
        <li> Tabaquismo🚬. </li>
        <li> <Link to="/ecnt/obesidad">Obesidad</Link> y sedentarismo. </li>
        <li> Consumo excesivo de alcohol🍷. </li>
        <li> Edad avanzada y antecedentes familiares. </li>
      </ul>
      
      <p className='p14'>  Síntomas del ACV </p>
      <p className='p150'> Los signos de un <strong> ACV </strong> suelen aparecer de forma súbita. Algunos de los más comunes incluyen:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Debilidad o parálisis facial o de extremidades (especialmente un lado del cuerpo)   </li>
        <li> 📌 Dificultad para hablar o entender. </li>
        <li> 📌 Pérdida súbita de la visión (parcial o total). </li>
        <li> 📌 Mareo, pérdida del equilibrio o coordinación. </li>
        <li> 📌 Consumo excesivo de alcohol. </li>
        <li> 📌 Edad avanzada y antecedentes familiares. </li>
      </ul>


       <p className='p14'> 🩺Diagnóstico </p>
      <p className='p16'>  1) Evaluación Inmediata (Primeros Minutos)  </p>
      <p className='p16'> 📌 Recordar la regla FAST (en inglés): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🚨 Face: asimetría facial.   </li>
        <li> 🚨 Arms: debilidad en un brazo. </li>
        <li> 🚨 Speech: dificultad para hablar. </li>
        <li> 🚨 Time: actuar rápidamente y llamar a emergencias. </li>
      </ul>
      <p className='p16'>  2. Estudios de Imagen (Hospitalarios)  </p>

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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/examenes/tc"> Tomografia Computarizada (TC) </Link> Cerebral sin contraste		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> - Sangrado agudo (ACV hemorrágico). - Isquemia temprana (signos sutiles).  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Rápida (minutos), disponible en urgencias. </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica (RNM) </Link>  cerebral	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	- Infartos pequeños - Isquemia en fase aguda (difusión).	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mayor precisión para ACV isquémico temprano.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Angiografía por TC/RM</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	- Arterias obstruidas (trombos) - Malformaciones vasculares.	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Identifica causa y guía tratamiento (ej.: trombectomía).</td>
    </tr>
  </tbody>
</table>

 <p className='p16'>  3. Exámenes Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Analítica sanguínea: </strong> Glucosa (descarta hipoglucemia), plaquetas, coagulación.   </li>
        <li>  <strong> <Link to="/examenes/ekg">  Electrocardiograma (EKG)</Link>:</strong> Detecta <Link to="/ecnt/arritmias"> arritmias </Link> (ej.: fibrilación auricular, causa común de <strong> ACV </strong>  embólico). </li>
        <li>  <strong> <Link to="/examenes/ecg">  Ecocardiograma (ECG)</Link>: </strong> Si se sospecha émbolo cardíaco. </li>
      </ul>



  
      <p className='p14'>  Tratamiento Médico  </p>
      <p className='p16'> 🔴 ACV Isquémico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Fibrinólisis (alteplasa): en pacientes elegibles, dentro de las primeras 4.5 horas del inicio.   </li>
        <li> Trombectomía mecánica: en ciertos casos, si hay oclusión de grandes vasos.   </li>
        <li> Control de la presión arterial, glicemia y oxigenación.  </li>
        <li> Antiplaquetarios (aspirina) y anticoagulantes (en casos específicos).  </li>
      </ul>
      
      <p className='p16'> 🔴 ACV Hemorrágico:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Control intensivo de la presión arterial.  </li>
        <li> Cirugía (cuando hay hematomas grandes o hemorragia subaracnoidea). </li>
        <li> Manejo de la hipertensión intracraneal. </li>
      </ul>

      <p className='p16'>  🔴 Prevención secundaria:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Control de factores de riesgo (<Link to="/ecnt/hipertension">Hipertensión Arterial</Link>, <Link to="/ecnt/dislipidemia"> Dislipidemia</Link>, <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>).   </li>
        <li> Anticoagulación en pacientes con fibrilación auricular. </li>
        <li> Antiagregantes plaquetarios de mantenimiento (aspirina, clopidogrel). </li>
      </ul>
   
      <p className='p14'> Tratamiento No Farmacológico / Rehabilitación </p>
      <p className='p150'> Rehabilitación neurológica temprana: fisioterapia, terapia ocupacional y del habla🏃‍♀️🤸🏋️‍♂️.   </p>
      <p className='p150'> Apoyo psicológico: manejo de ansiedad,   <Link to="/bienestarmental/enfmentales/depresion" > Depresión   </Link> post-<strong> ACV</strong>.   </p>
      <p className='p150'> Estilo de vida saludable:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Dieta baja en sodio, grasas saturadas y rica en frutas y verduras🥗. </li>
        <li> Ejercicio regular adaptado. </li> 
        <li> Cese del tabaco🚭 y reducción del alcohol🍷. </li> 
      </ul>

      <p className='p14'>  Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Discapacidad motora o sensorial. </li>
        <li> Trastornos del lenguaje (afasia). </li>
        <li> Alteraciones cognitivas o emocionales.</li>
        <li> Convulsiones post-<strong>ACV.</strong> </li>
        <li> Riesgo de nuevos eventos vasculares. </li>
        <li> Úlceras por presión, infecciones, trombosis venosa profunda. </li>
      </ul>
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> El <strong> ACV  </strong> es una condición crítica que requiere atención inmediata para minimizar daño cerebral y salvar vidas. 
        La prevención mediante el control de factores de riesgo es fundamental. La rehabilitación integral y el soporte multidisciplinario 
        permiten mejorar la calidad de vida de los sobrevivientes. La educación sobre los signos de alarma y la actuación rápida puede marcar 
        la diferencia entre la vida y la muerte o la discapacidad permanente.  </p>
    </div>
    
  );
}

export default ACV;



