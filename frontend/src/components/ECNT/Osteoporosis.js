

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Osteoporosis() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Osteoporosis</p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'> La <strong>Osteoporosis</strong> es una enfermedad esquelética sistémica caracterizada por una disminución de la densidad mineral ósea y
         un deterioro de la microarquitectura del tejido óseo, lo que incrementa el riesgo de fracturas. Es especialmente frecuente en mujeres 
         posmenopáusicas y adultos mayores. Se le conoce como una "enfermedad silenciosa" porque suele no presentar síntomas hasta que ocurre una fractura.</p>
      <p className='p14'> 🧬 Fisiopatología  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🦷 Desequilibrio en el remodelado óseo: se incrementa la resorción ósea y disminuye la formación ósea. </li>
        <li> 🧪 Disminución de estrógenos (en mujeres) y testosterona (en hombres) afecta el metabolismo óseo.</li>
        <li> 🧬 Aumento de la actividad de los osteoclastos (células que destruyen hueso).</li>
        <li> 🦴 Reducción de la masa ósea y debilitamiento estructural.</li>
        <li> 🧫 Microfracturas acumulativas predisponen a fracturas mayores.</li>
      </ul>


<p className='p14'> Clasificación  </p>
<p className='p16'> Según la causa:  </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo de Osteoporosis	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Primaria tipo I	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	Posmenopáusica (por déficit estrogénico).	</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Primaria tipo II	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Senil (en mayores de 70 años).  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Secundaria	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	Asociada a enfermedades (hipertiroidismo, Cushing) o medicamentos (corticoides, antiepilépticos). </td>
    </tr>
  </tbody>
</table>


<p className='p16'> Por T-score (densitometría ósea): </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clasificación	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> T-score </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Normal</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ -1</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteopenia	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  -1 a -2.5  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteoporosis	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	≤ -2.5  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Osteoporosis severa		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	≤ -2.5 con fractura  </td>
    </tr>
  </tbody>
</table>

      <p className='p14'>  Causas⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Envejecimiento.  </li>
        <li> 📌 Deficiencia hormonal (estrógenos, testosterona). </li>
        <li> 📌 Menopausia precoz. </li>
        <li> 📌 Dieta pobre en calcio y vitamina D. </li>
        <li> 📌 Sedentarismo. </li>
        <li> 📌 Consumo excesivo de alcohol y tabaco. </li>
        <li> 📌 Uso prolongado de corticoides. </li>
        <li> 📌 Enfermedades crónicas: Hipertiroidismo, Trastornos Gastrointestinales, <Link to="/ecnt/erc">Enfermedad Renal Cronica</Link>. </li>
      </ul>

      <p className='p14'>  Síntomas Clásicos (Más Frecuentes):🔍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🦴 <strong>   Fracturas frecuentes:  </strong> Ocurren con mínimos golpes o caídas.  </li>
        <li> 🦴 Dolor de espalda crónico. </li>
        <li> 🦴 Pérdida de estatura. </li>
        <li> 🦴 Postura encorvada.  </li>
      </ul>
      
      <p className='p14'>   Diagnóstico🧪 </p>
      <p className='p150'>  📉 <strong> Densitometría ósea (DEXA): </strong> método estándar, evalúa T-score.  </p>
      <p className='p150'>  🩸 <strong> Marcadores óseos: </strong>  fosfatasa alcalina ósea, osteocalcina.  </p>
      <p className='p150'>  🧬 <strong> Historia clínica: </strong> antecedentes de fracturas, menopausia, factores de riesgo. </p>
      <p className='p150'>  📋 Evaluación de fracturas previas y dolor óseo persistente. </p>
      <p className='p150'>  🦴 <Link to="/examenes/radiografia"> Radiografia</Link>:  identifican fracturas vertebrales ocultas.   </p>


      <p className='p14'> 💊 Tratamiento Médico  </p>
      <p className='p150'> 🎯 El objetivo es prevenir fracturas, conservar la masa ósea y mejorar la calidad de vida.   </p>
      <p className='p16'> 📌 1. Suplementación  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Calcio: 1000–1200 mg/día.</li>
        <li> 2. Vitamina D: 800–1000 UI/día. </li>
      </ul>
      <p className='p16'>  📌 2. Fármacos  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Bifosfonatos: alendronato, risedronato (inhiben resorción ósea). </li>
        <li> 2. Denosumab: anticuerpo monoclonal que inhibe osteoclastos. </li>
        <li> 3. Raloxifeno: modulador selectivo del receptor estrogénico. </li>
        <li> 4. Teriparatida: análogo de la PTH, estimula formación ósea. </li>
        <li> 5. Calcitonina: menos utilizado, útil en fracturas vertebrales agudas. </li>
      </ul>
     


      <p className='p14'>  🧘‍♂️Tratamiento No Farmacológico / Complementario </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Dieta rica en calcio y vitamina D: lácteos, vegetales verdes, pescados grasos.</li>
        <li> 2. Ejercicio con pesas o resistencia: estimula la formación ósea. </li>
        <li> 3. Evitar caídas: adaptar el hogar, revisar visión, calzado adecuado.</li>
        <li> 4. Abandono del tabaco y reducción del alcohol. </li>
        <li> 5. Exposición solar moderada para activar la vitamina D. </li>
      </ul>
     
      <p className='p14'>  🧨 Complicaciones Asociadas  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🦴 Fracturas por fragilidad: cadera, columna vertebral, muñeca </li>
        <li> 🛏️ Pérdida de movilidad y autonomía </li>
        <li> 🧓 Deformidad vertebral (cifosis) </li>
        <li> 📉 Disminución de la calidad de vida </li>
        <li> ⚠️ Aumento de la mortalidad en fractura de cadera  </li>
        <li> 🧠 <Link to="/bienestarmental/enfmentales/depresion" > Depresión   </Link> o aislamiento social por discapacidad  </li>
      </ul>
      
      <p className='p14'>  Conclusión  </p>
      <p className='p150'> La <strong> Osteoporosis </strong> es una enfermedad silenciosa pero con consecuencias graves si no se detecta y trata a tiempo. 
        La prevención es clave, especialmente en grupos de riesgo como mujeres posmenopáusicas y adultos mayores. El diagnóstico precoz mediante 
        densitometría ósea, junto con tratamiento farmacológico y cambios en el estilo de vida, permite reducir el riesgo de fracturas y preservar
        la funcionalidad del paciente.  </p>

    </div>
    
  );
}

export default Osteoporosis;