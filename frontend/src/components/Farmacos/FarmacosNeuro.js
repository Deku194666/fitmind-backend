

import React, {useEffect} from 'react';
 import NavBarFarmacosNeuro from './NavBarFarmacosNeuro';


function FarmacosNeuro() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarFarmacosNeuro/>
      <p className='p13'>  Farmacos Neurologicos  </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Los <strong> Fármacos Neurológicos </strong>son esenciales para tratar trastornos del Sistema Nervioso Central (SNC) y periférico,
        como epilepsia, enfermedad de Parkinson, migraña, esclerosis múltiple y dolor neuropático. Su desarrollo ha transformado el 
        pronóstico de enfermedades antes discapacitantes. </p>
        
      <p className='p14'>  📜 Historia de los Fármacos Neurológicos  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Antigüedad: </strong> Uso de belladona (anticolinérgico natural) para temblores. </li>
        <li> <strong> 1857: </strong>  Bromuros (primeros antiepilépticos).  </li>
        <li> <strong> 1900s: </strong>  Morfina para dolor neuropático. </li>
        <li> <strong> 1912: </strong>  Fenobarbital (epilepsia).  </li>
        <li> <strong> 1960: </strong> Levodopa (Parkinson). </li>
        <li> <strong> 1963: </strong>  Benzodiacepinas (diazepam). </li>
        <li> <strong> Siglo XXI: </strong>  Natalizumab (Esclerosis múltiple). </li>
      </ul>


      <p className='p14'> 🔍 Clasificación por Enfermedades  </p>
      <p className='p16'> 📌 1. Antiepilépticos </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Generación	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplos </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Efectos Adversos </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  1ª	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fenitoína, Carbamazepina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo canales Na+	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hepatotoxicidad, rash  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 2ª  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Lamotrigina, Levetiracetam  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Modulación glutamato/GABA	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mareos, somnolencia  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 3ª	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lacosamida	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloqueo canales Na+ selectivo	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Menos interacciones  </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 2. Antiparkinsonianos </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  1) Levodopa/Carbidopa:  </strong>  Precursor de dopamina (riesgo de discinesias).   </li>
        <li> <strong> 2) Agonistas dopaminérgicos: </strong>   Pramipexol (mejor perfil a largo plazo). </li>
        <li> <strong> 3) Inhibidores MAO-B: </strong>  Selegilina (neuroprotección teórica). </li>
      </ul>

 

<p className='p16'> 📌 3. Para Esclerosis Múltiple (EM) </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1) Inmunomoduladores:  </strong> Interferón beta (reduce brotes).  </li>
        <li> <strong> 2) Anticuerpos monoclonales: </strong> Ocrelizumab (para EM progresiva). </li>
       </ul>

 

<p className='p16'> 📌 4.  Para Migraña </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <strong> 1) Agudos: </strong> Triptanes (sumatriptán), antagonistas CGRP (erenumab).  </li>
        <li>  <strong> 2) Preventivos:  </strong>  Topiramato, toxina botulínica (crónica). </li>
       </ul>


<p className='p16'> 📌 5. Para Dolor Neuropático </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1) Gabapentinoides:</strong> Gabapentina (efectivo en neuralgias).  </li>
        <li> <strong> 2) Antidepresivos: </strong>  Amitriptilina (dosis bajas). </li>
       </ul>


<p className='p16'> 📌 6. Para Enfermedades Neuromusculares </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1) Anticolinesterásicos:  </strong> Piridostigmina (miastenia gravis).  </li>
        <li> <strong> 2) Terapias génicas:  </strong> En investigación para atrofia muscular espinal.  </li>
      </ul>

      <p className='p14'>  ⚠️  Efectos Adversos Claves </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1) Antiepilépticos: </strong> Rash, hepatotoxicidad (monitorear LFTs). </li>
        <li> <strong> 2) Levodopa: </strong>  Discinesias, fluctuaciones ("on-off"). </li>
        <li> <strong> 3) Benzodiacepinas: </strong>   Dependencia, sedación. </li>
        <li> <strong> 4) Inmunosupresores: </strong> Riesgo de infecciones oportunistas.  </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> Los <strong> Fármacos Neurológicos </strong> representan un pilar fundamental en el tratamiento de enfermedades que afectan al sistema 
        nervioso, desde epilepsia hasta esclerosis múltiple. Su evolución desde los primeros antiepilépticos hasta terapias dirigidas 
        como los biológicos ha mejorado la calidad de vida de millones de pacientes. Sin embargo, su uso debe ser personalizado,
         considerando mecanismos de acción, efectos adversos y características del paciente. El futuro promete terapias aún más específicas, 
         como la modulación génica y la nanomedicina. Siempre consulta a un neurólogo para optimizar tu tratamiento. 🧠💊  </p>
    </div>
    
  );
}

export default FarmacosNeuro;
