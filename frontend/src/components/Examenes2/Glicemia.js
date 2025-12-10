


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Glicemia() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Glicemia </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> El examen de <strong> Glicemia </strong> (o glucemia) es una prueba que mide los niveles de glucosa en sangre, siendo fundamental
        para diagnosticar y monitorizar la <Link to="/ecnt/diabetes">Diabetes Mellitus  </Link> y otros trastornos metabólicos. Según la OMS, 422 millones de personas padecen
        diabetes en el mundo, haciendo de este examen una herramienta esencial en medicina preventiva y manejo crónico.  </p>
        
      <p className='p14'>  📜 Historia del Examen de Glicemia </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Siglo I D.C.: </strong> Primeras descripciones de diabetes (Aretaeus de Capadocia). </li>
        <li> <strong> 1776: </strong>  Matthew Dobson identifica glucosa en orina de pacientes diabéticos. </li>
        <li> <strong> 1848: </strong> Hermann von Fehling desarrolla método químico para medir glucosa. </li>
        <li> <strong> 1960s: </strong> Introducción de tiras reactivas para autocontrol.  </li>
        <li> <strong> 1970s: </strong> Avances en glucómetros portátiles. </li>
        <li> <strong> 2000s: </strong> Monitores continuos de glucosa (MCG). </li>
      </ul>


  
      <p className='p14'> 🔍 Tipos de Exámenes de Glicemia</p>
      
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Descripción </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Alterados </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Glicemia en ayunas	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mide glucosa tras 8h sin comer	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 70-99 mg/dL </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥126 mg/dL (diabetes) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Glicemia aleatoria	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mide glucosa en cualquier momento	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 140 mg/dL </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL + síntomas </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HbA1c	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Promedio de glucosa en 3 meses	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 5.7% </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥6.5% (diabetes) </td>
      
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> PTGO (Prueba de Tolerancia Oral a Glucosa)		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mide respuesta a 75g de glucosa		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 140 mg/dL (2h post)  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL (2h post)  </td>
    </tr>
  </tbody>
</table>

      <p className='p14'>  🏥 Usos Clínicos </p>
      <p className='p16'> 📌 1. Diagnóstico de: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/diabetes">Diabetes Mellitus </Link> (tipo 1, tipo 2, gestacional). </li>
        <li> Prediabetes (glicemia alterada en ayunas o intolerancia a glucosa).   </li>
        <li> Hipoglucemia (glucosa menor a 70 mg/dL).   </li>
      </ul>

      <p className='p16'> 📌 2. Monitorización de:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Pacientes diabéticos (autocontrol domiciliario).  </li>
        <li> Eficacia de tratamiento (dieta, medicamentos, insulina).  </li>
        <li> Complicaciones agudas (cetoacidosis diabética).  </li>
      </ul>

      <p className='p16'> 📌 3. Detección en Poblaciones de Riesgo:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <Link to="/ecnt/obesidad">Obesidad</Link> o Síndrome Metabólico. </li>
        <li> Antecedentes familiares de <Link to="/ecnt/diabetes">Diabetes Mellitus. </Link>   </li>
        <li> Mujeres con diabetes gestacional previa.    </li>
      </ul>


      <p className='p14'>  📊 Interpretación de Resultados </p>
 
       
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Glicemia en Ayunas	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> HbA1c </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> PTGO (2h) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Normal	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 70-99 mg/dL		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 5.7% </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> menor a 140 mg/dL  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Prediabetes		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 100-125 mg/dL		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 5.7-6.4%	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 140-199 mg/dL  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Diabetes	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥126 mg/dL		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥6.5%	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥200 mg/dL </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 💡 Recomendaciones para Controlar la Glicemia </p>
      <p className='p16'> 🥗 Dieta: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> ✅ Alimentos con bajo índice glucémico (verduras, legumbres). </li>
        <li> ❌ Evitar azúcares refinados y carbohidratos simples.  </li>
      </ul>
      <p className='p150'> 🏃‍♂️ <strong> Ejercicio: </strong> 150 min/semana de actividad aeróbica. </p>
      <p className='p150'> ⚖️ <strong> Peso saludable: </strong> Reducción del 5-10% del peso mejora resistencia a insulina.  </p>
      

      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'>  El examen de <strong> Glicemia  </strong>  es la piedra angular en el diagnóstico y manejo de la
       <Link to="/ecnt/diabetes"> Diabetes Mellitus, </Link> una enfermedad con altísimo impacto en salud global. Su correcta interpretación,
       junto con modificaciones en estilo de vida puede prevenir complicaciones como ceguera, nefropatía o amputaciones. 
       Tecnologías emergentes como los monitores continuos de glucosa están revolucionando su manejo. </p>
    </div>
    
  );
}

export default Glicemia;