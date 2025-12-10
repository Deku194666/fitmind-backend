

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosCV from './NavBarFarmacosCV';

function FarmacosCV() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarFarmacosCV/>

      <p className='p13'>  Farmacos CardioVasculares</p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Los <strong> Fármacos Cardiovasculares </strong> constituyen el pilar del tratamiento de las enfermedades del corazón y vasos 
        sanguíneos, siendo responsables de aproximadamente el 40% de todas las prescripciones médicas en adultos. Esta guía cubre 
        exhaustivamente los principales grupos de medicamentos que actúan sobre el sistema cardiovascular. </p>
        
      <p className='p14'>  📜 Evolución Histórica  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1785: </strong> Digital (dedalera) para <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link>. </li>
        <li> <strong> 1949: </strong>  Primer diurético clínico (mercaptomerina). </li>
        <li> <strong> 1960s: </strong>  Desarrollo de betabloqueadores (James Black). </li>
        <li> <strong> 1970s: </strong>  Introducción de <Link to="/farmacos/iecas">  IECAs </Link> (captopril).</li>
        <li> <strong> 1980s: </strong> Estatinas (revolución en manejo lipídico). </li>
        <li> <strong> 2000s: </strong>  Anticoagulantes orales directos (DOACs). </li>
      </ul>


      <p className='p14'> 🔍 Clasificación por Grupos Terapéuticos  </p>
      <p className='p16'> 📌 1. Antihipertensivos </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Clase	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  	Mecanismo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplos	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Consideraciones Clínicas  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  IECA  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inhiben enzima conversora </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enalapril, Lisinopril		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tos seca (20%), contraindicado en embarazo  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  ARA II	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  	Bloquean receptores AT1   </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Losartán, Valsartán		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alternativa cuando hay tos por IECA  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> BCC	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean canales Ca	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Amlodipino, Nifedipino		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Edema maleolar, cefalea  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Diuréticos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Reducen volumen		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HCTZ, Furosemida		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Vigilar electrolitos (K+, Na+)  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Betabloqueadores	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducen gasto cardíaco 	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Metoprolol, Bisoprolol		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evitar en asma, bradicardia  </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 2. Antiarrítmicos (Clasificación de Vaughan Williams) </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo  </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplos		</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Indicaciones  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IA  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo Na+		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Quinidina		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Arritmias ventriculares  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IB  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Bloqueo Na+ rápido	   </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lidocaína		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Arritmias por isquemia  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IC	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo Na+ fuerte	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Flecainida		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> FA sin cardiopatía estructural </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> II	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Betabloqueo	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propranolol	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Taquiarritmias, HTA  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> III	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolongan AP	 	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Amiodarona	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> FA, TV  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IV		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo Ca		 	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Verapamilo	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TSV </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 3. Anticoagulantes  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Tipo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplos	  </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Monitorización   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  AVK  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Warfarina		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  	Inhiben vitamina K	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>   INR (2-3)   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Heparinas	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Enoxaparina  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Activan antitrombina		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TTPa (no rutina)  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> DOACs	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Apixaban  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inhiben factor Xa o IIa		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> No requiere rutina   </td>
    </tr>
  </tbody>
</table>

<p className='p16'> 📌 4. Antiagregantes Plaquetarios </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1) ASA: </strong> Inhibe COX-1 (dosis bajas 75-100 mg/día).   </li>
        <li> <strong> 2) Clopidogrel: </strong>  Inhibe P2Y12 (alternativa en alergia ASA). </li>
        <li> <strong> 3) Nuevos agentes: </strong>  Ticagrelor (más potente, 2x/día). </li>
      </ul>


<p className='p16'> 📌 5. Hipolipemiantes </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Clase </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  	Ejemplo	  </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Reducción LDL	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> 	Efectos Adversos   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Estatinas </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Atorvastatina	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  	30-60%		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>   IMiopatía, aumento enzimas hepáticas    </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ezetimiba		  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Inhibe absorción	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 15-20%		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Poco efectos adversos  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Inhibidores PCSK9	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alirocumab	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 50-60%		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inyección subcutánea  </td>
    </tr>
  </tbody>
</table>

<p className='p16'> 📌 6. Fármacos para Insuficiencia Cardíaca </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> 1) Diuréticos de asa: </strong> Furosemida (alivia síntomas).  </li>
        <li>  <strong> 2) IECA/ARA II:  </strong> Mejoran sobrevida.  </li>
        <li>  <strong> 3) Betabloqueadores: </strong>  Carvedilol, Bisoprolol. </li>
        <li>  <strong> 4) Antagonistas MRA: </strong>  Espironolactona</li>
        <li>  <strong> 5) ARNI:  </strong> Sacubitrilo/Valsartán (reemplaza IECA en seleccionados)  </li>
      </ul>

      <p className='p14'>  ⚠️ Interacciones Relevantes </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  1) Amiodarona + Warfarina: </strong> ↑↑ INR (reducir dosis warfarina 30-50%). </li>
        <li> <strong>  2) Verapamilo + Betabloqueador: </strong>  ↑ riesgo bloqueo AV. </li>
        <li> <strong>  3) Estatinas + Macrólidos: </strong>  ↑ riesgo miopatía. </li>
        <li> <strong>  4) Diuréticos + AINEs: </strong>   ↓ efecto antihipertensivo.  </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> Los <strong> Fármacos Cardiovasculares </strong> son esenciales para tratar problemas del corazón y la circulación,
       como  <Link to="/ecnt/hipertension">Hipertensión Arterial</Link>, <Link to="/ecnt/arritmias"> Arritmias </Link> o colesterol alto. Desde pastillas para la presión hasta anticoagulantes, estos medicamentos salvan vidas, 
       pero deben usarse con cuidado, siguiendo las indicaciones médicas y considerando efectos secundarios. La medicina avanza con nuevas 
       opciones más seguras y efectivas. <strong> Recuerda: </strong> Siempre consulta a tu médico antes de tomar o cambiar cualquier 
       medicamento. ¡Cuidar tu corazón es cuidar tu vida! 💙  </p>
    </div>
    
  );
}

export default FarmacosCV;
