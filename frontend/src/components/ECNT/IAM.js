


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function IAM() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Infarto Agudo al Miocardio (IAM) </p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> El <strong> Infarto Agudo al Miocardio (IAM) </strong>es una urgencia médica causada por la obstrucción súbita del flujo sanguíneo en una arteria coronaria, 
        lo que provoca isquemia y necrosis del tejido cardíaco. Es una de las principales causas de muerte a nivel mundial. Generalmente se debe a la rotura
        de una placa de ateroma y la formación de un trombo. Puede manifestarse con dolor torácico intenso y otros síntomas acompañantes.</p>
      <p className='p14'>  🧬 Fisiopatología </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🩸 <Link to="/ecnt/ateroesclerosis"> Aterosclerosis</Link>: acumulación de lípidos y células inflamatorias en las paredes arteriales. </li>
        <li> 🧱 Rotura de placa aterosclerótica: expone el contenido de la placa al torrente sanguíneo. </li>
        <li> 🧪 Formación de trombo: obstruye el flujo sanguíneo coronario. </li>
        <li> 🧬 Isquemia y necrosis miocárdica: el tejido cardíaco afectado muere por falta de oxígeno. </li>
        <li> ⚡ Alteraciones eléctricas: riesgo de <Link to="/ecnt/arritmias"> arritmias </Link> potencialmente letales.  </li>
      </ul>



      <p className='p14'> Clasificación  </p>
      <p className='p150'>  Según el tipo de <strong>IAM</strong>:  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo de Infarto	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Características </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IAM con elevación del ST (STEMI) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Obstrucción total de una arteria coronaria </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  IAM sin elevación del ST (NSTEMI)	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Obstrucción parcial, menos daño miocárdico  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Angina inestable		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pre-infarto, sin necrosis pero con riesgo alto </td>
    </tr>
  </tbody>
</table>

      <p className='p14'>  Causas⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Aterosclerosis coronaria (principal causa).  </li>
        <li> 📌 <Link to="/ecnt/hipertension">Hipertensión Arterial</Link>. </li>
        <li> 📌 <Link to="/ecnt/dislipidemia"> Dislipidemia</Link> (colesterol LDL elevado). </li>
        <li> 📌 Tabaquismo. </li>
        <li> 📌 <Link to="/ecnt/diabetes"> Diabetes Mellitus</Link>. </li>
        <li> 📌 Drogas como cocaína o anfetaminas. </li>
        <li> 📌 Historia familiar de enfermedad cardiovascular precoz. </li>
      </ul>


      <p className='p14'>  Síntomas Clásicos (Más Frecuentes):🔍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Dolor intenso en el pecho.   </li>
        <li> 📌 Dificultad para respirar. </li>
        <li> 📌 Sudoración fria. </li>
        <li> 📌 Nauseas.  </li>
        <li> 📌 Mareo o desmayo. </li>
      </ul>

      <p className='p14'>  Sígnos de emergencia (Actuar Rápido): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🚨 Dolor en el pecho que no cede con reposo o nitroglicerina (si el paciente ya la usa). </li>
        <li> 🚨 Labios o uñas azulados (cianosis). </li>
        <li> 🚨 Pulso débil o irregular. </li>
        <li> 🚨 Pérdida de conocimiento. </li>
      </ul>

      
      <p className='p14'>   Diagnóstico 🧪 </p>
      <p className='p150'>  📈 <Link to="/examenes/ekg">  Electrocardiograma (EKG)</Link>: identifica elevación del segmento ST o cambios sugestivos. </p>
      <p className='p150'>  🩸 Marcadores cardíacos: troponinas T/I, CK-MB elevados.  </p>
      <p className='p150'>  🧬 <Link to="/examenes/ecg">  Ecocardiograma (ECG)</Link>: evalúa función del ventrículo izquierdo y áreas afectadas. </p>
      <p className='p150'>  🩻 Angiografía coronaria: visualiza directamente la arteria obstruida.  </p>
      <p className='p150'>  📋 Historia clínica y examen físico.  </p>


      <p className='p14'> 💊 Tratamiento Médico  </p>
      <p className='p150'> 🎯 El objetivo es restaurar el flujo coronario lo más rápido posible y limitar el daño.  </p>
      <p className='p16'> 📌 1. Fase aguda </p>
      <p className='p150'>  <Link to="/farmacos/antiagregantes">  Antiagregantes Plaquetarios</Link>: <strong> Aspirina</strong>, clopidogrel.   </p>
      <p className='p150'>  <Link to="/farmacos/anticoagulantes">  AntiCoagulantes</Link>: <strong> Heparina</strong>. </p>
      <p className='p150'>  Nitratos: alivian el dolor y reducen la carga cardíaca.  </p>   
      <p className='p150'>  <Link to="/farmacos/betabloqueadores" > BetaBloqueadores</Link>: reducen el consumo de oxígeno del corazón. </p>
      <p className='p150'>  Reperfusión urgente: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Angioplastia primaria con stent (preferido si está disponible en menos 90 min). </li>
        <li> 2. Terapia trombolítica (en ausencia de angioplastia rápida). </li>
      </ul>
      
      <p className='p16'> 📌 2. Fase post-infarto (secundaria) </p>
      <p className='p150'> <Link to="/farmacos/iecas"> IECAs </Link> o  <Link to="/farmacos/araii" > ARA II</Link>.   </p>
      <p className='p150'> <Link to="/farmacos/estatinas"> Estatinas</Link>. </p>
      <p className='p150'>  Rehabilitación cardíaca.  </p>   
      <p className='p150'>  Control de factores de riesgo. </p>


      <p className='p14'>  🧘‍♂️Tratamiento No Farmacológico </p>
      <p className='p150'>  Dieta cardiosaludable: baja en grasas saturadas y sodio, rica en frutas, verduras, omega-3.  </p>
      <p className='p150'>  Ejercicio físico controlado: según indicación médica y rehabilitación. </p>    
      <p className='p150'>  Abandono del tabaco y alcohol.  </p>
      <p className='p150'>  Control de peso, <Link to="/ecnt/diabetes">Diabetes Mellitus </Link>  e <Link to="/ecnt/hipertension"> Hipertensión Arterial</Link>. </p>
      <p className='p150'>  Manejo del estrés y apoyo psicológico.  </p>
      <p className='p150'>  Educación para el autocuidado y adherencia al tratamiento.  </p>



     
      <p className='p14'>   🧨 Complicaciones Asociadas  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ⚡ <Link to="/ecnt/arritmias"> Arritmias </Link> (fibrilación ventricular, taquicardia ventricular). </li>
        <li> 🫀 <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link>. </li>
        <li> 🩸 Shock cardiogénico. </li>
        <li> 🫁 <strong> Edema pulmonar</strong>. </li>
        <li> 🧱 Ruptura de pared del miocardio o válvula mitral.  </li>
        <li> 🩺 Pericarditis postinfarto.  </li>
        <li> 🔄 Reinfarto. </li>
        <li> 🧠 <Link to="/ecnt/acv"> Accidente Cerebro Vascular </Link> (por trombos).  </li>

      </ul>
      
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> El <strong> Infarto Agudo al Miocardio </strong>es una condición potencialmente mortal que requiere diagnóstico rápido y 
        tratamiento inmediato. La prevención mediante control de factores de riesgo cardiovascular, hábitos saludables y seguimiento médico regular 
        es clave. Una vez superada la fase aguda, la rehabilitación y el cambio de estilo de vida son esenciales para evitar recurrencias y mejorar
        la calidad de vida del paciente.  </p>

    </div>
    
  );
}

export default IAM;

