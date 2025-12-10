

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Asma.css';

function ERC() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Enfermedad Renal Crónica (ERC) </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>  La  <strong> Enfermedad Renal Crónica (ERC) </strong> es una condición progresiva caracterizada por la pérdida gradual y permanente de la función 
        renal. Se define como la disminución del filtrado glomerular ( + 60 ml/min/1.73 m²) o la presencia de daño renal (como proteinuria o alteraciones estructurales)
        por más de 3 meses. Es un problema de salud pública importante, asociado a un mayor riesgo de enfermedad cardiovascular, insuficiencia renal terminal y muerte. </p>
        
      <p className='p14'>  Fisiopatología🧬  </p>
      <p className='p150'> Los riñones desempeñan funciones vitales como:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Filtrar productos de desecho. </li>
        <li> Regular el equilibrio hidroelectrolítico y ácido-base. </li>
        <li> Producir hormonas (eritropoyetina, renina, vitamina D activa). </li>
      </ul>
      <p className='p150'> En la <strong>ERC</strong>, la pérdida de nefronas funcionales lleva a:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  1. Hiperfiltración en nefronas remanentes.  </li>
        <li>  2. Glomeruloesclerosis progresiva. </li>
        <li>  3. Proteinuria e inflamación crónica.  </li>
        <li>  3. Fibrosis renal e insuficiencia renal irreversible.   </li>
      </ul>



      <p className='p14'> 🧪 Clasificación por estadio (según el Filtrado Glomerular - FG) </p>
<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estadio</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>FG (ml/min/1.73 m²)	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>G1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥90	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Normal con daño renal	</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> G2</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>60–89</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve disminución</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>G3a</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>45–59</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminución leve a moderada</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>G3b</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>30–44	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminución moderada a severa</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>G4	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>	15–29	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Severamente reducida </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>G5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menos de 15		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Falla renal (requiere diálisis) </td>
    </tr>
  </tbody>
</table>

      
      <p className='p14'>  Causas⚠️ </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <Link to="/ecnt/diabetes">Diabetes Mellitus </Link> (principal causa).   </li>
        <li> 📌 <Link to="/ecnt/hipertension">Hipertensión Arterial. </Link> </li>
        <li> 📌 Glomerulonefritis crónicas. </li>
        <li> 📌 Enfermedades hereditarias (ej. poliquistosis renal). </li>
        <li> 📌 Nefropatías obstructivas o infecciosas crónicas.  </li>
        <li> 📌 Uso prolongado de AINEs o nefrotóxicos.  </li>
      </ul>

      <p className='p14'>  Síntomas🔍 </p>
      <p className='p150'> La ERC puede ser asintomática en etapas iniciales. En fases avanzadas puede producir:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Fatiga, debilidad.   </li>
        <li> 📌 Náuseas, vómitos. </li>
        <li> 📌 Edema (piernas, cara). </li>
        <li> 📌  <Link to="/ecnt/hipertension">Hipertensión Arterial</Link> difícil de controlar. </li>
        <li> 📌 <strong>Anemia</strong>.  </li>
        <li> 📌 Prurito, calambres.  </li>
        <li> 📌 Trastornos óseos.  </li>

      </ul>
      
      <p className='p14'>   Diagnóstico🧑‍⚕️ </p>
      <p className='p150'> 📌 Se basa en:  </p>
      <p className='p150'> Exámenes de laboratorio:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Creatinina sérica y estimación del FG.  </li>
        <li> 2.Proteinuria o albuminuria en orina. </li>
      </ul>
      <p className='p150'> Estudios de imagen:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Ecografía renal (puede mostrar riñones atróficos)..  </li>
      </ul>
      <p className='p150'> Biopsia renal (en casos seleccionados).  </p>


  
      <p className='p14'>  Tratamiento Médico💊  </p>
      <p className='p150'> 🎯 Objetivo: enlentecer la progresión, tratar las complicaciones y prevenir la necesidad de diálisis. </p>
      <p className='p16'> 📌 1. Tratamiento farmacológico  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Control estricto de la presión arterial.   </li>
        <li> 2) Manejo de la diabetes.   </li>
        <li> 3) Dieta baja en proteínas, sal y potasio.   </li>
        <li> 4) Suplementos (hierro, eritropoyetina si hay anemia).   </li>
        <li> 5) Control del fósforo y calcio (quelantes, vitamina D activa).   </li>
        <li> 6) Evitar nefrotóxicos.   </li>
      </ul>
      <p className='p150'> 🩺 Estadio 5: iniciar diálisis o considerar trasplante renal. </p>


   
      <p className='p14'> 🧘‍♂️Tratamiento No Farmacológico </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🥦 Dieta renal personalizada (con nutricionista).   </li>
        <li> 🚭 Abandono del tabaco. </li>
        <li> 🧂 Control de la ingesta de sal. </li>
        <li> 🚶 Ejercicio físico moderado. </li>
        <li> 💧 Hidratación adecuada (según etapa).  </li>
        <li> 📅 Monitoreo regular de creatinina, FG y electrolitos.  </li>
      </ul>


      <p className='p14'>  🧨Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) Anemia por déficit de eritropoyetina. </li>
        <li> 2) Hiperparatiroidismo secundario. </li>
        <li> 3) Osteodistrofia renal.</li>
        <li> 4) Acidosis metabólica. </li>
        <li> 5) Sobrecarga de volumen /  <Link to="/ecnt/hipertension">Hipertensión Arterial.</Link> </li>
        <li> 6) Hiperkalemia (potasio elevado). </li>
        <li> 7) <Link to="/ecnt/cardiovascularesecnt" > Enfermedad CardioVascular</Link>.</li>
        <li> 8) Falla renal terminal. </li>


      </ul>
      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> La <strong> Enfermedad Renal Crónica </strong>es un trastorno progresivo, muchas veces silencioso, 
      con alto impacto en la calidad de vida. El diagnóstico temprano, el tratamiento médico adecuado y los cambios en el estilo de vida 
      pueden ralentizar su evolución y prevenir complicaciones graves. La coordinación entre el equipo médico, el paciente y su entorno 
      es clave en su manejo integral.</p>
    </div>
    
  );
}

export default ERC;

