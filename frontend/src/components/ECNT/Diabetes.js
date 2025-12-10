

import React, {useEffect} from 'react';
import './Hipertension.css';
import { Link } from 'react-router-dom';


function Diabetes() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Diabetes Mellitus </p>
      <p className='p14'>Introducción 📌</p>
      <p className='p150'> La <strong> Diabetes Mellitus </strong> es una enfermedad metabólica crónica caracterizada por niveles elevados de glucosa en sangre (hiperglucemia o hiperglicemia), resultado de defectos en la secreción de insulina, su acción, o ambas.
      Representa un grave problema de salud pública a nivel mundial por su alta prevalencia, su tendencia creciente, y sus múltiples complicaciones a largo plazo. 
      Según la Organización Mundial de la Salud (OMS), más de 500 millones de personas viven con diabetes en el mundo, siendo la diabetes tipo 2 la forma más común.</p>
      <p className='p14'>  Fisiología de la Diabetes 🧬  </p>
      <p className='p150'>  En condiciones normales, el páncreas libera insulina, una hormona producida por las células beta de los islotes de Langerhans, en respuesta a la elevación de glucosa en sangre.
      La insulina permite que la glucosa entre en las células para ser utilizada como fuente de energía o almacenada, principalmente en forma de glucógeno en hígado y músculo. 
      Cuando existe un déficit absoluto de insulina (como en la diabetes tipo 1) o una resistencia a su acción (como en la tipo 2), la glucosa se acumula en la sangre, 
      produciendo hiperglucemia. Esta condición, mantenida en el tiempo, genera alteraciones a nivel vascular, nervioso, renal, ocular y cardiovascular.  </p>
      <p className='p14'>  Tipos de Diabetes  </p>
      <p className='p16'>  Diabetes tipo 1:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Aparece en edades tempranas (infancia o adolescencia).</li>
        <li>Es una enfermedad autoinmune en la que el sistema inmunológico destruye las células beta pancreáticas.</li>
        <li> Requiere insulinoterapia de por vida. </li>
      </ul>
      <p className='p16'>  Diabetes tipo 2:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Asociada a factores como <Link to="/ecnt/obesidad">Obesidad</Link>, sedentarismo, edad avanzada y predisposición genética. </li>
        <li> Se caracteriza por resistencia a la <strong> Insulina </strong>y progresiva disfunción pancreática. </li>
        <li> Requiere insulinoterapia de por vida. </li>
      </ul>
      <p className='p16'>  Diabetes Gestacional:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Aparece durante el embarazo, generalmente en el segundo o tercer trimestre. </li>
        <li> Aumenta el riesgo de desarrollar <strong> Diabetes </strong>tipo 2 posteriormente tanto en la madre como en el hijo. </li>
      </ul>
      <p className='p16'>  Otros tipos:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Defectos genéticos en la función de las células beta (como MODY).</li>
        <li> Diabetes inducida por medicamentos (como corticoides) o enfermedades pancreáticas. </li>
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

      
      <p className='p14'>   Diagnóstico🧪🩺 </p>
      <p className='p150'> Se realiza mediante análisis de sangre: </p>
      <p className='p16'>  1) Pruebas Clave:   </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Diabetes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Glucosa en ayunas </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 100 mg/dL </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥126 mg/dL </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hemoglobina glicada (HbA1c) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 5.7% </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥6.5% </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Glucosa aleatoria	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 140 mg/dL </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL + síntomas </td>
    </tr>
        <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba de tolerancia oral a la glucosa (PTG)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 140 mg/dL (2h post-ingesta) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL </td>
    </tr>
  </tbody>
</table>



      <p className='p14'>  Tratamiento Médico  </p>
      <p className='p150'> El tratamiento médico depende del tipo de diabetes y el grado de descompensación. Incluye: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Insulina</strong> (tipo 1 y casos avanzados de tipo 2).</li>
        <li> Antidiabéticos orales (tipo 2 principalmente). </li>
        <li> Monitoreo glucémico frecuente.</li>
        <li> Modificación del estilo de vida (alimentación, ejercicio, control del peso).</li>
        <li> Prevención y manejo de complicaciones (retinopatía, nefropatía, pie diabético, etc.).</li>
      </ul>
      <p className='p14'>  Farmacologia  </p>
      <p className='p16'>  Insulina (subcutánea) 💉:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Rápida, intermedia y prolongada. </li>
        <li> Se ajusta según las necesidades del paciente. </li>
      </ul>
      <p className='p16'>  Antidiabéticos orales 💊:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Metformina</strong>: primera línea en tipo 2; mejora la sensibilidad a la <strong>insulina</strong>.</li>
        <li> Sulfonilureas: estimulan la secreción de insulina. </li>
        <li> Inhibidores de DPP-4 (sitagliptina): prolongan la acción de incretinas.</li>
        <li> Inhibidores SGLT2 (empagliflozina): aumentan la excreción de glucosa por orina.</li>
        <li> Agonistas de GLP-1 (liraglutida): aumentan secreción de insulina y reducen apetito.</li>
        <li>  Tiazolidinedionas (pioglitazona): mejoran la captación de glucosa en tejidos periféricos.</li>
      </ul>
      <p className='p16'>  Fármacos complementarios:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/farmacos/antihipertensivos"> Antihipertensivos</Link>. </li>
        <li> <Link to="/farmacos/hipolipemiantes" > Hipolipemiantes</Link>. </li>
        <li>       <Link to="/farmacos/antiagregantes" > AntiPlaquetarios </Link> (según riesgo cardiovascular).</li>
      </ul>
      <p className='p14'>  Tratamientos Complementarios y Estilo de Vida </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Dieta balanceada: rica en fibra, baja en azúcares simples y grasas saturadas.</li>
        <li> Ejercicio físico regular: mejora la sensibilidad a la insulina y ayuda al control del peso.</li>
        <li> Control del estrés: el estrés crónico puede aumentar los niveles de glucosa.</li>
        <li> Educación diabetológica: empodera al paciente a manejar su enfermedad.</li>
        <li> Suplementos (consultar con profesionales): como cromo, canela, omega 3, aunque con evidencia variable.</li>
      </ul>
      <p className='p14'>  Complicaciones </p>
      <p className='p16'>  Agudas:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Cetoacidosis diabética (más común en tipo 1).</li>
        <li> Estado hiperglucémico hiperosmolar (más en tipo 2).</li>
      </ul>
      <p className='p16'>  Cronicas:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Microvasculares: </strong> retinopatía, nefropatía, neuropatía.</li>
        <li> <strong> Macrovasculares: </strong> enfermedad cardiovascular, enfermedad cerebrovascular y arteriopatía periférica.</li>
      </ul>
      <p className='p14'>  Conclusión  </p>
      <p className='p150'>  La <strong> Diabetes Mellitus </strong>es una enfermedad compleja, multifactorial y progresiva. Su abordaje debe ser integral, con énfasis en la prevención,
      el diagnóstico precoz, el tratamiento individualizado y la educación del paciente. Si bien no tiene cura, un control adecuado permite llevar una vida plena y prevenir complicaciones graves. 
      El compromiso conjunto del sistema de salud, el paciente y su entorno es fundamental para enfrentar este desafío de salud global.  </p>

    </div>
    
  );
}

export default Diabetes;


