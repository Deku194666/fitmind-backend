
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosOST from './NavBarFarmacosOST';

function FarmacosOST() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarFarmacosOST/>

      <p className='p13'>  Fármacos Traumatologicos </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Los <strong> Fármacos Traumatologicos </strong>  son esenciales para tratar trastornos que afectan huesos, músculos, tendones, ligamentos,
        fascia y nervios periféricos. Incluyen desde analgésicos hasta regeneradores tisulares, siendo fundamentales en traumatología,
        reumatología y neurología.</p>
        
      <p className='p14'>  📜 Historia de los Fármacos Traumatológicos  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Antigüedad: </strong> Uso de corteza de sauce (salicilatos naturales) y opio para el dolor. 
        Vendajes con hierbas antiinflamatorias (árnica, consuelda).  </li>
        <li> <strong> Siglo XIX:  </strong>  Aislamiento de la morfina (1806) y aspirina (1897). Primeros yesos para fracturas (1851). </li>
        <li> <strong> Siglo XX:  </strong> Desarrollo de AINEs (ibuprofeno, 1960s). Corticoides inyectables para inflamación articular (1950s).
        Relajantes musculares (ciclobenzaprina, 1970s).  </li>
        <li> <strong> Siglo XXI:  </strong>  Biológicos (anti-TNFα para artritis post-traumática). Regeneradores tisulares: PRP 
        (Plasma Rico en Plaquetas) y células madre. Analgésicos dirigidos: Inhibidores de COX-2 selectivos.   </li>
      </ul>


      <p className='p14'> 🔍 Clasificación </p>
      <p className='p16'> 📌 1. Para Huesos  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Grupo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Indicaciones  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Bisfosfonatos	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alendronato, Zoledronato </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inhiben osteoclastos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Osteoporosis, mets óseas  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Terapia hormonal	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Raloxifeno	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Modulador receptor estrogénico	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteoporosis postmenopáusica  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Anticuerpos monoclonales	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Denosumab	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inhibe RANKL	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteoporosis severa   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Suplementos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Calcio + Vit D	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Soporte estructural	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Deficiencia ósea  </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 2.  Para Músculos  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Grupo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplo  </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Indicaciones  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relajantes musculares		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ciclobenzaprina, Tizanidina		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean reflejos polisinápticos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Espasmos, contracturas  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Toxina botulínica	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> OnabotulinumtoxinaA	   </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloqueo neuromuscular	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Distonías, espasticidad </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aminoácidos ramificados	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Leucina, Valina	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Síntesis proteica muscular	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Atrofia por inmovilización  </td>
    </tr>

  </tbody>
</table>



<p className='p16'> 📌 3. Para Tendones/Ligamentos </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Grupo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Indicaciones </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Antiinflamatorios	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Celecoxib (COX-2 selectivo)	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducen prostaglandinas	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tendinitis aguda  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Colágeno hidrolizado </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Péptidos de colágeno tipo I  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Estimula síntesis de colágeno	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Tendinopatías crónicas </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Factores de crecimiento	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> PRP (Plasma Rico en Plaquetas) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Regeneración tisular </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Roturas tendinosas  </td>
    </tr>
  </tbody>
</table>




<p className='p16'> 📌 4. Para Fascia  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Grupo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Indicaciones  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fibrinolíticos	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hialuronidasa	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Degrada ácido hialurónico	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fibrosis/fascitis  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Corticoides </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Betametasona	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antiinflamatorio potente </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fascitis plantar   </td>
    </tr>
  </tbody>
</table>


      <p className='p16'> 📌 5. Para Nervios Periféricos/Columna  </p>

      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Grupo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Indicaciones  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Gabapentinoides	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Gabapentina, Pregabalina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Modulan canales Ca α2δ	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Neuropatía diabética  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Antidepresivos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Duloxetina	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibe recaptación SNRI	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Dolor lumbar crónico  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Opioides débiles </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tramadol </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Agonista μ + inhibe recaptación </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Radiculopatías agudas  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Corticoides epidurales	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Metilprednisolona	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antiinflamatorio local </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hernias discales sintomáticas   </td>
    </tr>
  </tbody>
</table>



      <p className='p14'>  ⚠️ Efectos Secundarios Comunes </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) <strong> IBisfosfonatos: </strong> Osteonecrosis mandibular (riesgo 0.1-0.3%). </li>
        <li> 2) <strong> AINEs: </strong>  Ulceras GI, nefrotoxicidad. </li>
        <li> 3) <strong> Gabapentina:  </strong> Mareos, edema periférico. </li>
        <li> 4) <strong> Corticoides:  </strong> Hiperglucemia, osteoporosis (uso crónico). </li>

      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'>Los <strong> Fármacos Traumatológicos </strong>  han evolucionado desde remedios naturales hasta terapias avanzadas como los biológicos
        y regeneradores tisulares, mejorando el manejo del dolor, la inflamación y la recuperación de lesiones. Hoy, combinados con técnicas 
        quirúrgicas y rehabilitación, permiten tratamientos más efectivos y personalizados. Sin embargo, su uso debe ser guiado por 
        profesionales para maximizar beneficios y minimizar riesgos. La innovación sigue marcando el futuro de la traumatología, 
        con terapias cada vez más precisas y menos invasivas. ¡Consulta siempre a tu médico para el mejor abordaje de tu condición! 💊🩺 </p>
    </div>
    
  );
}

export default FarmacosOST;