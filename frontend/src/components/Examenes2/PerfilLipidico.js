

import React, {useEffect} from 'react';


function PerfilLipidico() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Perfil Lipidico  </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> El <strong> Perfil Lipídico </strong> es un conjunto de pruebas sanguíneas que miden los niveles de grasas (lípidos) en la sangre.
        Es fundamental para evaluar el riesgo cardiovascular y diagnosticar alteraciones como hipercolesterolemia o dislipidemias. Según la OMS, 
        las enfermedades cardiovasculares causan el 32% de muertes globales, muchas prevenibles con un control lipídico adecuado.</p>
        
      <p className='p14'>  📜 Historia del Perfil Lipídico </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Siglo XVIII: </strong> Primera identificación del colesterol por François Poulletier. </li>
        <li> <strong> 1913: </strong> Nikolai Anitschkov demuestra la relación entre colesterol y aterosclerosis en conejos.</li>
        <li> <strong> 1970s: </strong> Introducción del HDL como "colesterol bueno" (Premio Nobel a Brown y Goldstein, 1985). </li>
        <li> <strong> 2000s: </strong> Guías internacionales estandarizan valores (ATP III, ESC/EAS).  </li>
      </ul>


  
      <p className='p14'>  🔍 ¿Qué Mide un Perfil Lipídico Básico? </p>
 
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Parámetro </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Qué Es </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Colesterol Total	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Suma de todos los tipos de colesterol </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 200 mg/dL </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> LDL ("Colesterol malo")	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Principal causante de placas arteriales	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 100 mg/dL (óptimo) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HDL ("Colesterol bueno")	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Remueve exceso de colesterol	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 40 mg/dL (H), menor a 50 mg/dL (M)
</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Triglicéridos		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Grasas de reserva energética	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 150 mg/dL  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> No-HDL		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Colesterol total - HDL (riesgo residual)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 130 mg/dL </td>
    </tr>
  </tbody>
</table>

      <p className='p14'>  🏥 Usos Clínicos </p>
      <p className='p16'> 📌 1. Evaluación de Riesgo Cardiovascular </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Calcula el score de riesgo (Framingham, ASCVD).</li>
        <li> Detecta dislipidemias genéticas (ej.: hipercolesterolemia familiar).  </li>
      </ul>

      <p className='p16'> 📌 2. Diagnóstico de: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Hipercolesterolemia (LDL elevado). </li>
        <li> Hipertrigliceridemia ( menor a 500 mg/dL riesgo de pancreatitis).  </li>
        <li> Síndrome metabólico (HDL bajo + triglicéridos altos).  </li>
      </ul>

      <p className='p16'> 📌 3. Monitoreo de Tratamientos   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Eficacia de estatinas u otros hipolipemiantes.  </li>
        <li> Cambios por dieta/ejercicio.  </li>
      </ul>


      <p className='p14'>  📊 Interpretación de Resultados </p>
 
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valor Alterado </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Posibles Causas	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Riesgos  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> LDL ↑	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dieta rica en grasas saturadas, hipotiroidismo	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aterosclerosis, infarto  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HDL ↓		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tabaquismo, sedentarismo, obesidad		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedad vascular </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Triglicéridos ↑↑	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Diabetes no controlada, alcoholismo	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pancreatitis aguda  </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 💡 Recomendaciones para Mejorar Niveles </p>
      <p className='p16'> 🥗 Dieta: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ✅ Aumentar fibra (avena, legumbres). </li>
        <li> ✅ Grasas saludables (aguacate, pescado azul).  </li>
        <li> ❌ Evitar grasas trans (comida procesada). </li>
      </ul>
      <p className='p150'> 🏃‍♂️ <strong> Ejercicio: </strong> 150 min/semana de actividad aeróbica. </p>
      <p className='p150'> ⚖️ <strong> Control de peso: </strong>  IMC menor a 25. </p>
      

      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Perfil Lipídico  </strong>  es una herramienta clave en medicina preventiva, capaz de identificar
       riesgos cardiovasculares años antes de que aparezcan síntomas. Su interpretación debe ser individualizada (considerando edad, sexo y 
       comorbilidades). Combinado con estilo de vida saludable y tratamientos cuando sea necesario, puede reducir hasta un 30% eventos 
       cardiovasculares. </p>
    </div>
    
  );
}

export default PerfilLipidico;