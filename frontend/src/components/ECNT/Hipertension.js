

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Hipertension.css';


function Hipertension() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Hipertensión Arterial</p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'> La <strong> Hipertensión Arterial (HTA) </strong> es una enfermedad crónica caracterizada por el aumento sostenido de la presión arterial por encima de los valores normales. 
      Es uno de los principales factores de riesgo para enfermedades cardiovasculares, accidentes cerebrovasculares, insuficiencia renal y otras complicaciones graves.
      A menudo se le conoce como el “asesino silencioso” porque puede no presentar síntomas durante años. La presión arterial normal es inferior a 120/80 mmHg;
      se considera hipertensión cuando se registran valores iguales o superiores a 140/90 mmHg de forma repetida.</p>
      <p className='p14'>  Fisiología 🧬   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> La presión arterial depende de dos factores principales: </li>
        <li> 1. Gasto cardíaco: volumen de sangre que el corazón bombea por minutos🫀. </li>
        <li> 2. Resistencia vascular periférica: grado de constricción o dilatación de los vasos sanguíneos. </li>
      </ul>
      <p className='p150'> Ambos están regulados por diversos sistemas fisiológicos:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Sistema nervioso simpático. </li>
        <li> Sistema renina-angiotensina-aldosterona (RAAS.) </li>
        <li> Mecanismos renales de control del volumen sanguíneo. </li>
        <li> Factores endoteliales (óxido nítrico, endotelina, etc.) </li>
        <li> Cuando hay un desequilibrio en alguno de estos sistemas, puede aumentar la presión arterial de forma crónica.</li>
      </ul>
      <p className='p14'>  Tipos de Hipertensión  </p>
      <p className='p16'>  Hipertensión primaria (esencial):   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Representa el 90-95% de los casos.</li>
        <li>No tiene una causa identificable.</li>
        <li>Relacionada con factores genéticos, edad, <Link to="/ecnt/obesidad">obesidad</Link>,  sedentarismo, alto consumo de sal, estrés, y consumo de alcohol. </li>
      </ul>
      <p className='p16'>  Hipertensión secundaria:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Representa el 5-10% de los casos. </li>
        <li> Tiene una causa identificable (enfermedad renal, endocrina, apnea del sueño, uso de ciertos fármacos). </li>
      </ul>


      <p className='p14'>  🚨 Factores de Riesgo</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Edad ( mayor a  40 años). </li>
        <li> ⚠️ <Link to="/ecnt/obesidad">Obesidad</Link> o Sedentarismo. </li>
        <li> ⚠️ Dieta alta en sal y grasas. </li>
        <li> ⚠️ Consumo excesivo de alcohol o tabaco. </li>
        <li> ⚠️ Antecedentes familiares de <strong> HTA</strong>. </li>
        <li> ⚠️ Estrés crónico. </li>
      </ul>


      <p className='p14'>  Síntomas de la HTA </p>
      <p className='p150'> 1. En la mayoría de los casos: ASINTOMÁTICA  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 No hay señales evidentes hasta que aparecen complicaciones graves. </li>
      </ul>
      <p className='p150'> 2. Síntomas Inespecíficos (en algunos casos)  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚠️ Dolor de cabeza (especialmente en la nuca, por la mañana). </li>
        <li> ⚠️ Mareos o visión borrosa. </li>
        <li> ⚠️ Zumbido en los oídos (acúfenos). </li>
        <li> ⚠️ Sangrado nasal (epistaxis) ocasional. </li>
        <li> ⚠️ Fatiga o confusión. </li>
      </ul>

      <p className='p150'> 3. Síntomas de Emergencia Hipertensiva (Crisis Hipertensiva)  </p>
      <p className='p150'> 🚨 Presión arterial ≥180/120 mmHg + uno o más de estos:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🚨 Dolor de cabeza intenso. </li>
        <li> 🚨 Mareos o visión borrosa. </li>
        <li> 🚨 Zumbido en los oídos (acúfenos). </li>
        <li> 🚨 Sangrado nasal (epistaxis) ocasional. </li>
        <li> 🚨 Fatiga o confusión. </li>
      </ul>


      <p className='p14'> 🩺Diagnóstico </p>
      <p className='p16'>  1)  Medición Correcta de la Presión Arterial  </p>
      <p className='p16'> 📌 Condiciones ideales: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Reposo de 5 minutos antes.  </li>
        <li>  Sin café, tabaco o ejercicio 30 min previos. </li>
        <li>  Brazalete adecuado al tamaño del brazo. </li>
        <li>  Múltiples mediciones (en diferentes días). </li>
      </ul>
      <p className='p16'>  2.  Criterios Diagnósticos (Según la OMS y Guías Internacionales)  </p>

      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clasificación </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Presión Sistólica (mmHg) </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Presión Diastólica (mmHg) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Normal	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 120  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 80 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Elevada </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 120-129	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 80</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hipertensión Grado 1 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 130-139 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 80-89 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hipertensión Grado 2 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ 140 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ 90 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Crisis Hipertensiva </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ 180 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ 120 </td>
    </tr>
  </tbody>
</table>


      <p className='p16'> 📌 3. Estudios Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Análisis de sangre:  </strong> Creatinina (función renal), <Link to="/examenes2/glicemia"> Glicemia</Link>,  <Link to="/examenes2/perfillipidico"> Perfil Lipidico</Link>.   </li>
        <li>  <strong> Examen de orina:  </strong> Proteínas (para detectar daño renal). </li>
        <li>  <Link to="/examenes/ekg">  Electrocardiograma (EKG)</Link>: Evaluar daño cardíaco. </li>
        <li>  <Link to="/examenes/ecg">  Ecocardiograma (ECG)</Link>: Si se sospecha hipertrofia ventricular. </li>
        <li>  <strong> Monitorización Ambulatoria de Presión Arterial (MAPA):   </strong>  Para confirmar diagnóstico en casos dudosos. </li>
      </ul>


      <p className='p14'>  Tratamiento Médico  </p>
      <p className='p150'> El tratamiento busca reducir la presión arterial a niveles seguros y prevenir complicaciones. Incluye:</p>
      <p className='p16'> 📌 Fármacos antihipertensivos principales:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> <Link to="/farmacos/diureticos"> Diureticos Tiazídicos</Link>: </strong>  Hidroclorotiazida, clortalidona.</li> 
        <li> <strong> <Link to="/farmacos/iecas"> Inhibidores de la ECA (IECA)</Link>: </strong>cEnalapril, lisinopril. </li>
        <li>  <strong> <Link to="/farmacos/araii" >  Antagonistas de los receptores de angiotensina II (ARA II)</Link>:</strong> <strong> Losartán</strong>, valsartán.</li>
        <li>  <strong> <Link to="/farmacos/bloqueadorescanalesca"> Calcioantagonistas</Link></strong>   : Amlodipino, nifedipino.</li>
        <li> <strong> <Link to="/farmacos/betabloqueadores" > BetaBloqueadores</Link>:</strong>  <strong> Atenolol</strong>, metoprolol (más usados en pacientes con cardiopatías asociadas).</li>
        <li> <strong> Otros: </strong>  Alfa bloqueantes, vasodilatadores de acción directa.</li>
        <li> La elección del fármaco depende del perfil del paciente y de la presencia de otras enfermedades como diabetes, insuficiencia renal, cardiopatías, etc.</li>
      </ul>
      <p className='p14'>  Tratamiento No Farmacológico / Complementario </p>
      <p className='p150'> Los cambios en el estilo de vida son fundamentales tanto para prevenir como para tratar la hipertensión:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Dieta DASH (rica en frutas🍎, verduras🥗, cereales integrales y baja en sal y grasas saturadas). </li>
        <li> Actividad física regular (30 minutos al día, 5 días a la semana). </li>
        <li> Pérdida de peso en personas con sobrepeso u obesidad.</li>
        <li> Reducción del consumo de alcohol y dejar de fumar. </li>
        <li> Manejo del estrés (técnicas de relajación, meditación).</li>   
      </ul>
     
      <p className='p14'>  Complicaciones de la Hipertensión No Controlada</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/iam"> Infarto Agudo de Miocardio  (IAM)  </Link>  </li>
        <li> <Link to="/ecnt/acv"> Accidente Cerebro Vascular  (ACV)</Link> </li>
        <li> <Link to="/ecnt/erc"> Enfermedad Renal Cronica (ERC)</Link>  </li>
        <li> Retinopatía hipertensiva</li>
        <li>  <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia cardíaca (IC)</Link></li>
        <li>Enfermedad arterial periférica</li>
      </ul>
      
      <p className='p14'>  Conclusión  </p>
      <p className='p150'>  La <strong>Hipertensión Arterial </strong> es una enfermedad crónica silenciosa pero potencialmente letal si no se controla adecuadamente. Su detección temprana, 
      junto con el tratamiento médico adecuado y cambios sostenidos en el estilo de vida, es clave para evitar complicaciones graves. 
      La educación al paciente y la adherencia al tratamiento son pilares fundamentales en su manejo a largo plazo.  </p>

    </div>
    
  );
}

export default Hipertension;


