






import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function EA() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Enfermedad de Alzheimer (EA)</p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> La <strong> Enfermedad de Alzheimer </strong> es un trastorno neurodegenerativo progresivo y la causa más común de demencia en adultos mayores. 
        Se caracteriza por deterioro de la memoria, el pensamiento, el lenguaje y la capacidad para realizar actividades cotidianas. Su aparición es insidiosa 
        y avanza lentamente a lo largo de los años. Aunque su causa exacta no se conoce completamente, se asocia con acumulación de placas β-amiloide y ovillos
        neurofibrilares de proteína tau en el cerebro.</p>
      <p className='p14'> 🧬 Fisiopatología  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🧪 Depósitos extracelulares de β-amiloide: forman placas que alteran la comunicación neuronal. </li>
        <li> 🧬Acumulación intracelular de proteína tau hiperfosforilada: forma ovillos neurofibrilares que interrumpen la función celular.</li>
        <li> 🧠 Degeneración progresiva de neuronas, especialmente en el hipocampo y corteza cerebral.</li>
        <li> 🩸 Reducción de neurotransmisores, en especial acetilcolina.</li>
        <li> ⚡ Inflamación crónica y estrés oxidativo agravan el daño cerebral.</li>
      </ul>


<p className='p14'> 🔍Clasificación  </p>
<p className='p16'> Según el inicio:  </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Edad de inicio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Esporádico (tardío)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> mayor de 65 años (forma más común)	</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Familiar o genético (temprano)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  menor de 65 años, mutaciones hereditarias raras  </td>
    </tr>
  </tbody> 
</table>

      <p className='p150'>Por etapas clínicas:</p> 
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Leve: pérdida de memoria reciente, desorientación leve, dificultad para encontrar palabras. </li>
        <li> 2. Moderado: confusión, problemas para reconocer personas, alteraciones del juicio. </li>
        <li> 3. Grave: dependencia total, pérdida de habilidades básicas, cambios de personalidad.</li>
      </ul>



      <p className='p14'>  Causas y Factores de Riesgo ⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Edad avanzada (principal factor). </li>
        <li> 📌 Historia familiar y genética (mutaciones en APP, PSEN1, PSEN2, gen APOE-e4). </li>
        <li> 📌 Enfermedades cardiovasculares: <Link to="/ecnt/hipertension">Hipertensión Arterial,</Link> <Link to="/ecnt/dislipidemia"> Dislipidemia, </Link> 
        <Link to="/ecnt/diabetes">Diabetes Mellitus.</Link> </li>
        <li> 📌 Traumatismos craneales previos. </li>
        <li> 📌 Bajo nivel educativo o estimulación cognitiva. </li>
        <li> 📌 Estilo de vida poco saludable: sedentarismo, dieta inadecuada. </li>
        <li> 📌 Tabaquismo y consumo excesivo de alcohol. </li>
      </ul>
      
      <p className='p14'>   Diagnóstico🧪 </p>
      <p className='p150'>  🧠 Evaluación clínica: deterioro cognitivo progresivo, pruebas neuropsicológicas (MMSE, MoCA).  </p>
      <p className='p150'>  📌 <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica (RNM): </Link> atrofia cortical, especialmente en el hipocampo. </p>
      <p className='p150'>  🧬 PET con FDG: hipoactividad cerebral. </p>
      <p className='p150'>  🩸 Marcadores en LCR: niveles alterados de β-amiloide y proteína tau. </p>
      <p className='p150'>  📋 Historia clínica completa y entrevistas con familiares.   </p>


      <p className='p14'> 💊 Tratamiento Médico  </p>
      <p className='p150'> 🎯 El tratamiento busca ralentizar el avance de los síntomas y mejorar la calidad de vida.   </p>
      <p className='p16'> 📌 1. Fármacos inhibidores de la colinesterasa:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Donepezilo.</li>
        <li> 2. Rivastigmina. </li>
        <li> 3. Galantamina (Aumentan niveles de acetilcolina). </li>
      </ul>
      <p className='p16'>  📌 2. Antagonistas de NMDA:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Memantina (Modula la actividad glutamatérgica, útil en fases moderadas y graves). </li>
      </ul>
      
      <p className='p16'>  📌 3. Nuevos tratamientos:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Anticuerpos monoclonales dirigidos a β-amiloide (en investigación o aprobación reciente). </li>
      </ul>
      
      <p className='p16'>  📌  4. Control de síntomas asociados:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Antidepresivos, antipsicóticos (con precaución), hipnóticos, según necesidad. </li>
      </ul>

      <p className='p14'>  🧘‍♂️Tratamiento No Farmacológico / Complementario </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Terapias cognitivas: estimulación mental, ejercicios de memoria.</li>
        <li> 2. Rutinas estructuradas: ayuda a reducir la desorientación. </li>
        <li> 3. Actividad física regular: favorece la salud cerebral.</li>
        <li> 4. Dieta equilibrada (ej. dieta mediterránea). </li>
        <li> 5. Apoyo psicológico al paciente y a los cuidadores. </li>
        <li> 6. Adaptación del hogar para seguridad y autonomía. </li>
        <li> 7. Intervenciones sociales y comunitarias. </li>
      </ul>
     
      <p className='p14'>  🧨 Complicaciones Asociadas  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🧭 Pérdida progresiva de la autonomía </li>
        <li> 📉 Deterioro funcional completo </li>
        <li> 😔 <Link to="/bienestarmental/enfmentales/depresion" > Depresión </Link> y 
        <Link to="/bienestarmental/enfmentales/tag"> Trastorno de Ansiedad Generalizada </Link> </li>
        <li> 🍽️ Desnutrición y deshidratación </li>
        <li> 🛏️ Úlceras por presión, infecciones  </li>
        <li> 🚶‍♂️ Riesgo de caídas y fracturas  </li>
        <li> 🧓 Carga emocional y física en los cuidadores  </li>
        <li> ⚰️ Muerte, generalmente por infecciones o complicaciones sistémicas  </li>
      </ul>
      
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Enfermedad de Alzheimer </strong> es una patología crónica y progresiva que afecta profundamente al paciente y su entorno.
         No existe cura, pero el diagnóstico temprano y el manejo integral permiten retardar su avance, mantener la funcionalidad por más tiempo y
        mejorar la calidad de vida. Es fundamental el apoyo multidisciplinario y social, así como estrategias de prevención mediante el control 
        de factores de riesgo y la estimulación cognitiva desde edades tempranas.  </p>

    </div>
    
  );
}

export default EA;