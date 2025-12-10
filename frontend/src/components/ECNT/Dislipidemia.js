

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Dislipidemia() {

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Dislipidemia</p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> La <strong>Dislipidemia</strong> es un trastorno del metabolismo de los lípidos que se caracteriza por niveles anormales de grasas en la sangre, como colesterol total, colesterol LDL ("malo"), 
        colesterol HDL ("bueno") y triglicéridos. Es un factor de riesgo clave en el desarrollo de enfermedades cardiovasculares, como la <Link to="/ecnt/ateroesclerosis"> Aterosclerosis</Link>, el <Link to="/ecnt/iam"> Infarto Agudo de Miocardio  (IAM)  </Link>  y el <Link to="/ecnt/acv"> Accidente Cerebro Vascular (ACV)</Link>. 
        Muchas veces es asintomática, por lo que suele ser detectada en exámenes de rutina.</p>
      <p className='p14'>  Fisiología 🧬   </p>
      <p className='p150'> En condiciones normales: </p> 
      <p className='p150'> El colesterol y los triglicéridos se transportan en la sangre unidos a lipoproteínas: </p> 
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. LDL (lipoproteína de baja densidad): transporta colesterol hacia los tejidos. </li>
        <li> 2. HDL (lipoproteína de alta densidad): recoge el colesterol de los tejidos y lo lleva al hígado para su eliminación. </li>
        <li> 3. VLDL y quilomicrones: transportan triglicéridos.</li>
      </ul>
      <p className='p150'> Cuando hay un desequilibrio en este transporte, ya sea por exceso de LDL, bajos niveles de HDL o aumento de triglicéridos, se favorece la acumulación de grasa en las paredes de las arterias (<Link to="/ecnt/ateroesclerosis">Aterosclerosis</Link>), 
        lo que incrementa el riesgo cardiovascular. </p> 

      <p className='p14'>  Tipos de Dislipidemia  </p>
      <p className='p16'> Dislipidemia primaria (genética)🧬:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Tiene origen hereditario. Ejemplo: hipercolesterolemia familiar.</li>
      </ul>
      <p className='p16'>  Dislipidemia secundaria: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Causada por otros trastornos o factores como: <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>,  Hipotiroidismo,  <Link to="/ecnt/erc"> Enfermedad Renal </Link> o hepática,<Link to="/ecnt/obesidad"> Obesidad</Link>,  Consumo de ciertos medicamentos (corticoides, anticonceptivos, etc.)   </li>
      </ul>
      <p className='p16'>  Según el tipo de alteración lipídica: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Hipercolesterolemia: colesterol total o LDL alto.  </li>
        <li>  Hipertrigliceridemia: triglicéridos elevados.  </li>
        <li>  Dislipidemia mixta: combinación de colesterol y triglicéridos elevados.  </li>
        <li>  HDL bajo: factor independiente de riesgo.  </li>
      </ul>


            <p className='p14'>  🔍 Síntomas de Dislipidemia </p>
      <p className='p150'> Es un factor de riesgo clave para enfermedades cardiovasculares, como infartos y derrames cerebrales.   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 No suele presentar síntomas evidentes hasta que causa complicaciones graves. </li>
      </ul>

      <p className='p14'> 🩺Diagnóstico  </p>
      <p className='p150'> Se realiza mediante un perfil lipídico (análisis de sangre en ayunas de 12 horas). </p>
      <p className='p16'>  1) Valores Normales vs. Alterados  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Lípido </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Alterado (Dislipidemia)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Colesterol Total	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 200 mg/dL</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥240 mg/dL (alto riesgo) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> LDL ("Colesterol malo")	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 100 mg/dL (óptimo)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥160 mg/dL (alto) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HDL ("Colesterol bueno")	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> mayor a 40 mg/dL (hombres), mayor a 50 mg/dL (mujeres)	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 40 mg/dL (bajo) </td>
    </tr>
        <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Triglicéridos		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 150 mg/dL </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL (alto) </td>
    </tr>
  </tbody>
</table>


      <p className='p14'>  Tratamiento Médico  </p>
      <p className='p150'> El tratamiento tiene como objetivo reducir el riesgo cardiovascular, especialmente en personas con antecedentes
      de Enfermedad Coronaria, <Link to="/ecnt/diabetes">Diabetes Mellitus</Link> o <Link to="/ecnt/hipertension">Hipertensión Arterial</Link>.  </p>
      <p className='p16'> 📌 Fármacos más utilizados:  </p>
      <p className='p150'>   Estatinas (simvastatina, atorvastatina, rosuvastatina):   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Inhiben la enzima HMG-CoA reductasa.</li>
        <li> 2. Disminuyen el colesterol LDL y reducen el riesgo cardiovascular. </li>
      </ul>
      <p className='p150'>   Fibratos (gemfibrozilo, fenofibrato):  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Reducen los niveles de triglicéridos y aumentan el HDL. </li>
      </ul>
      <p className='p150'>  Ezetimiba:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Inhibe la absorción intestinal de colesterol. </li>
      </ul>     
      <p className='p150'>  Inhibidores de PCSK9 (alirocumab, evolocumab):  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Usados en pacientes con <strong> Dislipidemias </strong>severas o intolerantes a estatinas. </li>
      </ul>
      <p className='p150'>  Ácidos grasos omega-3:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Ayudan a reducir triglicéridos.   </li>
      </ul>

      <p className='p14'> 🧘‍♂️ Tratamiento No Farmacológico / Complementario </p>
      <p className='p150'> Los cambios en el estilo de vida son esenciales en el manejo de la <strong> Dislipidemia: </strong > </p>
      <p className='p150'>  Dieta saludable:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Reducir grasas saturadas y trans.</li>
        <li> 2. Aumentar consumo de ácidos grasos omega-3 (pescado azul), fibra, frutas y verduras. </li>
      </ul>
      <p className='p150'>  Ejercicio regular:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Al menos 150 minutos de actividad aeróbica moderada por semana. </li>
      </ul>
      <p className='p150'>  Pérdida de peso si hay sobrepeso u <Link to="/ecnt/obesidad">Obesidad.</Link> </p>    
      <p className='p150'>  Evitar el consumo de alcohol en exceso.  </p>
      <p className='p150'>  Suspender el tabaquismo.  </p>
      <p className='p150'> Control de enfermedades asociadas: <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>, <Link to="/ecnt/hipertension">Hipertensión Arterial</Link> etc.  </p>


     
      <p className='p14'>  ⚠️Complicaciones Asociadas  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/ateroesclerosis"> Aterosclerosis</Link> </li>
        <li> <Link to="/ecnt/iam"> Infarto Agudo de Miocardio (IAM)</Link> </li>
        <li> <Link to="/ecnt/acv"> Accidente Cerebro Vascular  (ACV) </Link> </li>
        <li> Enfermedad arterial periférica </li>
        <li> Esteatosis hepática (hígado graso)  </li>
        <li> Pancreatitis (cuando hay hipertrigliceridemia severa)  </li>
      </ul>
      
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> La <strong> Dislipidemia </strong>es un trastorno metabólico frecuente que, si no se trata adecuadamente, puede tener graves consecuencias cardiovasculares. 
        Aunque muchas veces no da síntomas, su diagnóstico y tratamiento oportuno (farmacológico y no farmacológico) son esenciales para prevenir eventos mayores.
        La educación del paciente, el control de los factores de riesgo y un estilo de vida saludable son pilares fundamentales para un manejo eficaz a largo plazo.  </p>

    </div>
    
  );
}

export default Dislipidemia;
