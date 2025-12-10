
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Asma.css';
import NavBarArtrosis from '../Ejercicio/Lesiones/NavBarArtrosis';
import NavBarArtrosis2 from '../Ejercicio/Lesiones/NavBarArtrosis2';

function Artrosis() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope superior de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarArtrosis/>
      <NavBarArtrosis2/>

      <p className='p13'> Artrosis (Osteoartritis) </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>  La <strong> Artrosis </strong> es una enfermedad articular degenerativa y crónica que afecta el cartílago articular, el hueso subcondral y los tejidos circundantes. 
        Se caracteriza por el desgaste progresivo del cartílago, lo que lleva a dolor, rigidez y pérdida de movilidad. Es la forma más común de artritis y una causa importante de discapacidad 
        en adultos mayores. </p>
    

      <p className='p14'> Fisiopatología🔎  </p>
        <p className='p150'> El cartílago articular actúa como un amortiguador que permite el movimiento suave entre los huesos.
        En la <strong> Artrosis, </strong>  se produce una degeneración del cartílago, lo que genera fricción entre huesos, inflamación leve y formación de osteofitos (espolones óseos). 
        Se afecta también el hueso subyacente, la sinovia y los ligamentos. Con el tiempo, puede desarrollarse deformidad articular y limitación funcional.</p>
      
      <p className='p14'>   Factores de Riesgo🧪 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Edad avanzada.📆  </li>
        <li> 2. Genética y antecedentes familiares.🧬  </li>
        <li> 3. <Link to="/ecnt/obesidad">Obesidad</Link>.  </li>
        <li> 4. Actividades físicas repetitivas o de alto impacto.🏋️  </li>
        <li> 5. Desequilibrios biomecánicos (escoliosis, dismetría).🔁   </li>
      </ul>
      
      
      <p className='p14'>  Localización más frecuente📍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Rodillas (gonartrosis). </li>
        <li> 2. Caderas (coxartrosis).  </li>
        <li> 3. Manos (interfalángicas). </li>
        <li> 4. Columna cervical y lumbar. </li>
        <li> 5. Pies (1° metatarsofalángica). </li>
      </ul>

      <p className='p14'>   Síntomas🔍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Dolor articular (empeora con la actividad).🤕  </li>
        <li> 2. Rigidez matutina ( + 30 minutos).  </li>
        <li> 3. Crujidos articulares (crepitación). </li>
        <li> 4. Disminución del rango de movimiento.  </li>
        <li> 5. Inflamación leve.   </li>
        <li> 6. Deformidad articular (en etapas avanzadas).   </li> 
      </ul>

      <p className='p14'>   Diagnóstico🔍 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Evaluación clínica: dolor, rigidez, movilidad reducida.  </li>
        <li> 2. <Link to="/examenes/radiografia"> Radiografia</Link>: estrechamiento del espacio articular, osteofitos, esclerosis ósea. </li>
        <li> 3. <Link to="/examenes/rnm"> Resonancia Nuclear Magnetica </Link> /ecografía articular: para evaluar tejidos blandos. </li>
        <li> 4. Análisis de líquido sinovial: para descartar otras formas de artritis (p. ej. <strong> Gota</strong>, <strong> Artritis Reumatoidea </strong> ).  </li>
      </ul>


      <p className='p14'>  Tratamiento Médico 💊  </p>
      <p className='p150'> No existe cura, pero sí tratamientos para aliviar síntomas y mejorar la calidad de vida:  </p>
      <p className='p16'> 📌 Fármacos más utilizados:  </p>
      <p className='p150'> Analgesicos: <Link to="/farmacos/farmacos2/paracetamol">  Paracetamol</Link>.  </p>
      <p className='p150'> AINEs: ibuprofeno, naproxeno, diclofenaco. </p>
      <p className='p150'> Condroprotectores: glucosamina, condroitina (uso controvertido). </p>
      <p className='p150'> Infiltraciones intraarticulares:  Corticoides, Ácido hialurónico.  </p>
      <p className='p150'> Cirugía ortopédica: Osteotomías (en casos seleccionados), Prótesis articular (artroplastia total) en fases avanzadas.  </p>


      <p className='p14'>  Tratamientos Complementarios y Estilo de Vida🧘  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Ejercicio físico moderado (natación, bicicleta, caminata).🏃‍♀️ </li>
        <li> Pérdida de peso si hay sobrepeso. </li>
        <li> Aplicaciones de frío o calor para aliviar dolor.❄️/🔥  </li>
        <li> Fisioterapia y terapia ocupacional  </li>
        <li> Uso de órtesis o bastones si es necesario.🦿   </li>
        <li> Educación del paciente sobre la enfermedad y el manejo del dolor.🧑‍⚕️ </li>

      </ul>
      <p className='p14'>  Complicaciones 🚨 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Incapacidad funcional progresiva.</li>
        <li> Dolor crónico e inflamación persistente. </li>
        <li> Deformidades articulares. </li>
        <li> Dependencia para actividades diarias.  </li>
        <li> Riesgo aumentado de caídas por limitación motora. </li>
      </ul>
      <p className='p14'>  ✅Conclusión✅  </p>
      <p className='p150'>  La <strong> Artrosis </strong> es una enfermedad articular crónica y frecuente, especialmente en personas mayores. 
      Si bien no es curable, su evolución puede ser modificada con intervenciones tempranas, ejercicio, pérdida de peso y terapias médicas o quirúrgicas adecuadas.
      El abordaje integral y el seguimiento personalizado son clave para mejorar la funcionalidad y la calidad de vida del paciente.  </p>
    </div>
    
  );
}

export default Artrosis;


