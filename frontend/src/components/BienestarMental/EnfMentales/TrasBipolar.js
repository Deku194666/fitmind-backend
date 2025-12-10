



import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TrasBipolar() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno Bipolar  </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  El <strong> Trastorno Bipolar </strong> es una condición mental compleja que afecta aproximadamente al 2.4% de la población 
        mundial (OMS). Se caracteriza por fluctuaciones extremas en el estado de ánimo, alternando entre episodios de manía/hipomanía y
        depresión severa. Estas oscilaciones van más allá de los altibajos emocionales normales, representando cambios neurobiológicos
        demostrables que afectan la calidad de vida, relaciones y funcionamiento diario. </p>
        
      <p className='p14'>  🧠 Tipos de Trastorno Bipolar </p>
      <p className='p16'> 📌 Tipo I:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Episodios maníacos completos (≥1 semana).  </li>
        <li> Puede requerir hospitalización.    </li>
        <li> Fases depresivas frecuentes.   </li>
      </ul>
 
      <p className='p16'> 📌 Tipo II:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Hipomanía (4+ días) + depresión mayor.    </li>
        <li>  Nunca presenta manía completa.   </li>
        <li>  Mayor riesgo de diagnóstico erróneo.   </li>
      </ul>

      <p className='p16'> 📌 Ciclotímia:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Síntomas más leves pero crónicos (≥2 años).   </li>
        <li> Alternancia rápida entre hipomanía y depresión leve.   </li>
      </ul>



      <p className='p14'>   🧬Fisiopatología    </p>
      <p className='p150'>  El cerebro bipolar muestra: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Desequilibrio neuroquímico:  </strong> Dopamina ↑ (en manía), Serotonina ↓ (en fase depresiva). </li>
        <li> <strong> Cambios estructurales: </strong> Amígdala hiperactiva (emociones intensas), Corteza prefrontal menos conectada (control de impulsos). </li>
      </ul>

      <p className='p14'> 📌 Factores de Riesgo </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Biológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Psicológicos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ambientales  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Historia familiar	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Búsqueda de sensaciones </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estrés agudo </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones en canales iónicos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Creatividad elevada </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alteraciones del sueño </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Comorbilidad con migraña o epilepsia	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pensamiento acelerado	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Abuso de sustancias  </td>
    </tr>
  </tbody>
</table>


       <p className='p14'> 🚨 Síntomas Clave (DSM-5)  </p>
      <p className='p16'> Episodio Maníaco (Tipo I): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Euforia o irritabilidad extrema. </li>
        <li> • Energía aumentada con poco sueño  </li>
        <li> • Habla rápida y pensamiento acelerado </li>
        <li> • Conductas riesgosas (gastos excesivos, promiscuidad). </li>
        <li> • Delirios de grandeza (en casos graves). </li>
      </ul>


        <p className='p16'> Episodio Hipomaníaco (Tipo II): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Síntomas similares pero menos intensos.  </li>
        <li> • Sin deterioro laboral/social grave.   </li>
        <li> • Duración ≥4 días.   </li>
      </ul>

        <p className='p16'> Episodio Depresivo: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Igual sintomatología que depresión mayor.  </li>
        <li> • Suele ser más prolongado que las fases de manía.   </li>
      </ul>


        <p className='p14'> 🩺 Diagnóstico </p>
        <p className='p16'> 1. Evaluación Clínica: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> • Entrevista psiquiátrica detallada. </li>
        <li> • Historial familiar y de síntomas.   </li>
        <li> • Escalas como el YMRS (Young Mania Rating Scale).   </li>
      </ul>

        <p className='p16'> 2. Diagnóstico Diferencial:  </p>

    <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Diferencias </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TDAH	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Síntomas constantes (no episódicos)  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Esquizofrenia</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Psicosis persistente</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Trastorno límite	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cambios rápidos de humor (horas/días)	 </td>
    </tr>
  </tbody>
</table>

 <p className='p16'>  3. Exámenes Complementarios </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> Analítica: </strong> función tiroidea, toxicología  </li>
        <li>  <strong> Neuroimagen: </strong> en casos atípicos  </li>
      </ul>


  
      <p className='p14'>  💊 Tratamiento Médico  </p>
      <p className='p16'> 🔴 Farmacológico:  </p>
      
    <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Fase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Medicamentos </th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Manía</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Litio, antipsicóticos (quetiapina)	 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Depresión	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Quetiapina, lurasidona (evitar ISRS solos)	 </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mantenimiento </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Litio, valproato, lamotrigina 	 </td>
    </tr>
  </tbody>
</table>
 

      <p className='p16'> 🟢 No Farmacológico:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Psicoeducación:  </strong>  Entender los desencadenantes. </li>
        <li> <strong> TERAPIA IPSRT: </strong> regular ritmos sociales. </li>
        <li> <strong> Grupos de apoyo: </strong>  Compartir experiencias. </li>
      </ul>
   
 

      <p className='p14'>  🌱 Prevención y Manejo </p>
      <p className='p16'> 🟢 Monitoreo Continuo: </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Apps como eMoods para registrar síntomas. </li>
        <li> Identificar señales de alerta temprana.  </li>
      </ul>
        <p className='p16'> 🧘‍♂️ Rutinas Estables:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Horarios regulares de sueño.  </li>
        <li> Evitar estimulantes (cafeína, drogas).    </li>
      </ul>
        <p className='p16'> 🚨 Plan de Crisis:  </p>
        <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Contactos de emergencia.  </li>
        <li> Manejo financiero (evitar gastos impulsivos).  </li>
       </ul>
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> El <strong> Trastorno Bipolar </strong> representa un desafío único en el ámbito de la salud mental, caracterizado por una montaña
        rusa emocional que alterna entre los picos de la manía/hipomanía y los valles de la depresión. Sin embargo, con el enfoque adecuado, 
        esta condición puede gestionarse efectivamente, permitiendo a quienes la padecen llevar vidas plenas y productivas. </p>
         
    </div>
    
  );
}

export default TrasBipolar;