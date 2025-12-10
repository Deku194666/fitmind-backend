


import React, {useEffect} from 'react';

function Hemograma() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Hemograma </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> El <strong> Hemograma </strong> es uno de los exámenes de laboratorio más solicitados en medicina. Es un análisis de sangre que 
        evalúa los componentes celulares de la sangre, proporcionando información clave sobre el estado de salud general y ayudando a 
        diagnosticar diversas condiciones como anemias, infecciones y trastornos hematológicos </p>
        
      <p className='p14'>  📜 Historia del Hemograma </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 1658: </strong> Primera observación de glóbulos rojos por Jan Swammerdam. </li>
        <li> <strong> 1852: </strong> Karl Vierordt desarrolla el primer método para contar células sanguíneas. </li>
        <li> <strong> 1877: </strong> Paul Ehrlich introduce las tinciones para diferenciar células sanguíneas. </li>
        <li> <strong> 1953: </strong> Wallace Coulter inventa el contador automático de células.  </li>
        <li> <strong> 1970s: </strong> Se automatiza completamente el proceso de análisis. </li>
        <li> <strong> 2000s: </strong> Analizadores hematológicos de 5 y 6 parámetros.  </li>
      </ul>


  
      <p className='p14'> 🔍 Componentes del Hemograma </p>
      <p className='p16'> 📌 1. Serie Roja (Eritrocitos o  Globulos Rojos) </p>

      
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Parámetro</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Significado Clínico  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hemoglobina		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> H: 13-17 g/dL    M: 12-16 g/dL	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Transporte de oxígeno </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hematocrito </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> H: 40-52%   M: 36-48%	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Porcentaje de glóbulos rojos  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> VCM	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 80-100 fL	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tamaño de los eritrocitos  </td>      
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> HCM		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 27-33 pg	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cantidad de Hb por glóbulo </td>      
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> CHCM		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 32-36 g/dL		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Concentración de Hb  </td>      
    </tr>
  </tbody>
</table>

      <p className='p16'> 📌 2. Serie Blanca (Leucocitos o Globulos Blancos) </p>

      
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales (x10³/μL)	 </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Función </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Neutrófilos		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1.8-7.5		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Defensa contra bacterias </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Linfocitos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1.0-4.8		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inmunidad específica  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Monocitos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0.1-0.8		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fagocitosis  </td>      
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Eosinófilos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0.04-0.4 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alergias/parásitos </td>      
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Basófilos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 0.01-0.1	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inflamación  </td>      
    </tr>
  </tbody>
</table>

      <p className='p16'> 📌 3. Plaquetas </p>

      
      <table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Parámetro</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valores Normales </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Importancia </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Recuento	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 150-450 x10³/μL	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Coagulación  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Volumen Plaquetario Medio	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 7-11 fL		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tamaño plaquetario   </td>
    </tr>

  </tbody>
</table>

      <p className='p14'>  🏥 Usos Clínicos </p>
      <p className='p16'> 📌 1. Diagnóstico de: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Anemias </strong>   (ferropénica, megaloblástica). </li>
        <li> Infecciones (bacterianas, virales). </li>
        <li> Leucemias y trastornos mieloproliferativos.   </li>
        <li> Trastornos hemorrágicos/coagulación.  </li>
        <li> Enfermedades inflamatorias.  </li>
      </ul>
.
      <p className='p16'> 📌 2. Monitorización de:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Quimioterapia/Radioterapia.  </li>
        <li> Tratamientos con inmunosupresores.  </li>
        <li> Evolución de infecciones.  </li>
        <li> Postoperatorio. </li>
      </ul>

      <p className='p16'> 📌 3. Evaluación de síntomas como:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Fatiga/palidez (anemia). </li>
        <li> Fiebre sin foco (infección).  </li>
        <li> Sangrados anormales.  </li>
        <li> Adenopatías. </li>
      </ul>

      <p className='p14'>  📊 Interpretación de Resultados </p>
      
      <p className='p16'> 📌 1. Anemia microcítica (VCM bajo): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Ferropenia. </li>
        <li> Talasemia. </li>
      </ul>
      
      <p className='p16'> 📌 2. Leucocitosis con desviación izquierda: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Infección bacteriana aguda. </li>
      </ul>
      
      <p className='p16'> 📌 3. Pancitopenia: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Aplasia medular. </li>
        <li> Infiltración medular. </li>
      </ul>
      
      <p className='p16'> 📌 4. Trombocitosis: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Procesos inflamatorios. </li>
        <li> Hemorragia aguda. </li>
      </ul>
 
       
      <p className='p14'> 💡 Recomendaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Preparación: </strong> No requiere ayuno (a menos que se pida con otros exámenes). </li>
        <li> <strong> Interpretación:  </strong> Siempre correlacionar con clínica. </li>
        <li> <strong> Seguimiento: </strong> Repetir si hay alteraciones significativas. </li>
      </ul>
      

      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'>  El <strong> Hemograma </strong> es una herramienta diagnóstica fundamental en la práctica médica, que proporciona información valiosa 
        sobre el estado hematológico y general del paciente. Su correcta interpretación requiere considerar el contexto clínico y puede ser 
        el primer paso para diagnosticar condiciones que van desde simples deficiencias nutricionales hasta enfermedades hematológicas 
        complejas. </p>
    </div>
    
  );
}

export default Hemograma;