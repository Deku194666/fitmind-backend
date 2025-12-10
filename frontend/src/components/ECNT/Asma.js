

import React, {useEffect} from 'react';
import './Asma.css';
import { Link } from 'react-router-dom';

function Asma() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Asma </p>
      <p className='p14'>Introducción📌 </p>
      <p className='p150'>  El <strong>  Asma </strong>  es una enfermedad inflamatoria crónica de las vías respiratorias caracterizada por episodios recurrentes de dificultad respiratoria (disnea), sibilancias, opresión torácica y tos, que varían en intensidad y frecuencia. 
        Afecta tanto a niños como a adultos y puede ser desencadenada por múltiples factores, como alérgenos, infecciones, ejercicio, frío o contaminación. Es una de las enfermedades respiratorias más comunes en el mundo. 
        Según la OMS, más de 260 millones de personas viven con asma, y causa más de 450,000 muertes al año, en su mayoría evitables. </p>
      <p className='p14'>  Fisiología y Fisiopatología  </p>
      <p className='p150'>  En condiciones normales, el aire fluye libremente por los bronquios. En personas con asma:  </p>
      <p className='p150'> Las vías respiratorias están inflamadas crónicamente.  </p>
      <p className='p150'> Al exponerse a un desencadenante, se produce:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Broncoconstricción: contracción del músculo liso bronquial. </li>
        <li>Hipersecreción de moco.</li>
        <li> Edema de la mucosa.  </li>
      </ul>
      <p className='p150'> Estos cambios provocan obstrucción reversible de las vías respiratorias, causando síntomas respiratorios.   </p>



      <p className='p14'>  Clasificación del Asma  </p>
      <p className='p150'> Según la frecuencia y severidad de los síntomas:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Asma intermitente: síntomas ≤2 veces por semana, sin afectación nocturna frecuente.</li>
        <li> Asma persistente leve: síntomas mas de 2 veces por semana, pero no diarios.</li>
        <li> Asma persistente moderada: síntomas diarios, con afectación nocturna semanal. </li>
        <li> Asma persistente grave: síntomas continuos, gran limitación de la actividad física. </li>
      </ul>

      <p className='p150'> Según el desencadenante: </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  Asma alérgica: relacionada con exposición a alérgenos (ácaros, polen, moho). </li>
        <li> Asma no alérgica: inducida por infecciones, ejercicio, aire frío, entre otros. </li>
        <li> Asma ocupacional: provocada por exposición en el entorno laboral. </li>
        <li> Asma inducida por medicamentos: como los AINE o los betabloqueantes. </li>
      </ul>

      <p className='p14'>  Síntomas🔍 </p>
      <p className='p150'> Los sintomas pueden ser variados, va a depender de la graveda del asma:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Disnea ( Dificultad para respirar ).   </li>
        <li> 📌 Sibilancias: Silbidos agudos al respirar (más notable en la exhalación). </li>
        <li> 📌 Tos, que puede ir acopampañada con secreciones. </li>
        <li> 📌 Opresión en el pecho: Sensación de peso o presión en el pecho, como si algo lo apretara.  </li>
        <li> 📌 Uso de musculatura accesoria en casos moderada - grave. </li>
      </ul>

  
      <p className='p14'>  Tratamiento Médico  </p>
      <p className='p150'> El objetivo es controlar los síntomas, prevenir exacerbaciones y mejorar la función pulmonar. </p>
      <p className='p16'> 📌 Fármacos más utilizados:  </p>
      <p className='p16'> 1. Broncodilatadores β2 de acción corta (SABA): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>  <Link to="/farmacos/farmacos2/salbutamol">   Salbutamol </Link> y Terbutalina, estos alivian rápido en crisis asmáticas.   </li>
      </ul>
      <p className='p16'> 2. Broncodilatadores β2 de acción prolongada (LABA):  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Salmeterol, formoterol. Se usan junto con corticoides inhalados.  </li>
      </ul>
      <p className='p16'>  3. Corticoides inhalados (ICS):  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Beclometasona, <Link to="/farmacos/farmacos2/budesonida">   Budesonida, </Link> Fluticasona, Tratamiento base del asma persistente.   </li>
      </ul>
      <p className='p16'>  4. Antagonistas de leucotrienos:   </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Montelukast. Alternativa o complemento a corticoides inhalados.    </li>
      </ul>

      <p className='p16'>  5. Anticolinérgicos:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Bromuro de ipratropio (uso en crisis).  </li>
        <li> Tiotropio (uso crónico en algunos casos).  </li>
      </ul>
      <p className='p16'> 6. Biológicos (para asma grave):  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Omalizumab, mepolizumab. Indicados en casos de asma severa refractaria al tratamiento convencional.   </li>
      </ul>
      <p className='p14'>  Tratamientos Complementarios y Estilo de Vida </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Evitar alérgenos e irritantes: polvo, humo, ácaros, mascotas, polen.</li>
        <li> Control ambiental: mantener habitaciones ventiladas y limpias.</li>
        <li> Inmunoterapia específica: en casos seleccionados con alergia confirmada. </li>
        <li> Educación del paciente: uso correcto del inhalador, reconocer signos de alarma. </li>
        <li> Ejercicio físico moderado: mejora la función pulmonar y calidad de vida.  </li>
      </ul>
      <p className='p14'> ⚠️Complicaciones </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Exacerbaciones graves con riesgo vital.</li>
        <li> Neumotórax (poco común). </li>
        <li> Cetoacidosis diabética (más común en tipo 1).</li>
        <li> Infecciones respiratorias recurrentes. </li>
        <li> Disminución progresiva de la función pulmonar. </li>
        <li> Efectos adversos del tratamiento (especialmente corticoides). </li>
      </ul>
      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'>  El <strong> Asma </strong> es una enfermedad crónica con un importante impacto en la calidad de vida del paciente. 
      Sin embargo, con un diagnóstico adecuado, seguimiento médico y tratamiento integral (farmacológico y no farmacológico), 
      la mayoría de los pacientes puede llevar una vida normal y activa. La educación continua, el autocuidado y el acceso a tratamientos 
      eficaces son claves para un control óptimo de la enfermedad.  </p>

    </div>
    
  );
}

export default Asma;


