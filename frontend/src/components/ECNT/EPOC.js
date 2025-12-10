


import React, {useEffect} from 'react';
import './Asma.css';
import { Link } from 'react-router-dom';

function EPOC() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Enfermedad Pulmonar Obstructiva Crónica (EPOC) </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'>  La <strong> EPOC (Enfermedad Pulmonar Obstructiva Crónica) </strong> es una enfermedad respiratoria progresiva y crónica caracterizada por una obstrucción persistente del flujo aéreo, 
        lo que dificulta la respiración. Es causada principalmente por la exposición prolongada a irritantes pulmonares, siendo el tabaquismo el factor más común. 
        También incluye dos condiciones principales: bronquitis crónica y enfisema pulmonar. La <strong> EPOC </strong> es una causa importante de morbilidad y mortalidad a nivel mundial. </p>
      <p className='p14'>  Fisiología y Fisiopatología 🫁 </p>
      <p className='p150'> En la <strong> EPOC </strong> se combinan varios procesos que afectan a las vías respiratorias y al tejido pulmonar:  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. Bronquitis crónica: inflamación persistente de los bronquios con producción excesiva de moco (tos productiva ≥ 3 meses durante 2 años consecutivos). </li>
        <li> 2. Enfisema: destrucción progresiva de los alvéolos, lo que reduce la superficie para el intercambio gaseoso.</li>
        <li> 3. Obstrucción del flujo aéreo: irreversible o parcialmente reversible, asociada a inflamación crónica, fibrosis y remodelación de las vías aéreas.  </li>
        <li> 4. Trampa de aire: dificultad para exhalar completamente, lo que provoca atrapamiento de aire y aumento del volumen residual.  </li>
      </ul>

      <p className='p14'>  Causas y Factores de Riesgo🔎  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Tabaquismo activo o pasivo (principal factor) 🚬.</li>
        <li> Exposición ocupacional a polvo o químicos🌬️.</li>
        <li> Contaminación del aire interior (uso de biomasa)🔥. </li>
        <li> Deficiencia de alfa-1 antitripsina (forma genética, poco frecuente)🧬. </li>
        <li> Edad avanzada📆. </li>
        <li> Infecciones respiratorias recurrentes en la infancia🦠. </li>
      </ul>
      
      <p className='p14'>  Clasificación por severidad (según GOLD)📋 </p>
      <p className='p150'>  Basado en el volumen espiratorio forzado en el primer segundo (VEF1): </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1. GOLD 1 (Leve): VEF1 ≥ 80%. </li>
        <li> 2. GOLD 2 (Moderado): VEF1 entre 50–79%.  </li>
        <li> 3. GOLD 3 (Grave): VEF1 entre 30–49%. </li>
        <li> 4. GOLD 4 (Muy grave): VEF1 menor a 30%.  </li>
      </ul>
      
      
      <p className='p14'>  Diagnóstico 🧪 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Espirometría: prueba clave (VEF1/CVF menor a 0.70 post-broncodilatador). </li>
        <li> <Link to="/examenes/radiografia"> Radiografia </Link>  de tórax / <Link to="/examenes/tc"> TC </Link> pulmonar: para evaluar daño estructural.  </li>
        <li> Oximetría / Gases arteriales: en casos avanzados. </li>
        <li> Evaluación de síntomas: disnea, tos crónica, sibilancias, infecciones frecuentes.  </li>
      </ul>


      <p className='p14'>  Tratamiento Médico 💊  </p>
      <p className='p150'> No tiene cura, pero el tratamiento mejora la calidad de vida y reduce las exacerbaciones.  </p>
      <p className='p16'> 📌 Fármacos más utilizados:  </p>
      <p className='p150'> Broncodilatadores (inhalados):   </p>
        <ul className='p17' style={{ listStyleType: 'disc'}} >
        <li> 1. β2-agonistas (salbutamol, formoterol). </li>
        <li> 2. Anticolinérgicos (ipratropio, tiotropio).  </li>
      </ul>
      <p className='p150'> Corticoides inhalados (budesonida, fluticasona).  </p>
      <p className='p150'> Terapias combinadas (LABA + LAMA o LABA + corticoide). </p>
      <p className='p150'> Oxigenoterapia crónica domiciliaria (si PaO₂ mayor a 55 mmHg).  </p>
      <p className='p150'> Antibióticos: en exacerbaciones por infección.  </p> 
      <p className='p150'> Vacunas: antigripal y antineumocócica.  </p> 


      <p className='p14'>  Tratamientos Complementarios y Estilo de Vida🧘  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 🚭 Dejar de fumar: es la intervención más efectiva. </li>
        <li> 🧘‍♂️ Rehabilitación pulmonar: mejora la tolerancia al ejercicio. </li>
        <li> 🍽️ Nutrición adecuada: evitar desnutrición o sobrepeso.  </li>
        <li> 💉 Vacunación preventiva. </li>
        <li> 🧑‍⚕️ Educación al paciente para identificar exacerbaciones.  </li>
        <li> 🧳 Evitar ambientes contaminados o con humo. </li>

      </ul>
      <p className='p14'>  Complicaciones 🚨 </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> Exacerbaciones agudas graves.</li>
        <li> Neumonía o infecciones respiratorias recurrentes. </li>
        <li> Hipoxemia crónica / hipercapnia. </li>
        <li> Cor pulmonale (insuficiencia cardíaca derecha).  </li>
        <li> Pérdida de peso severa (caquexia). </li>
        <li> <Link to="/bienestarmental/enfmentales/tag"> Trastorno de Ansiedad Generalizada </Link>  y
         <Link to="/bienestarmental/enfmentales/depresion" > Depresión   </Link> asociadas a la disnea.  </li>
      </ul>
      <p className='p14'>  Conclusión  </p>
      <p className='p150'>  La <strong> EPOC </strong> es una enfermedad respiratoria crónica prevenible y tratable. 
      Su progresión puede ser enlentecida con intervenciones adecuadas, siendo el abandono del tabaco la piedra angular del tratamiento. 
      Un enfoque integral que combine farmacoterapia, cambios en el estilo de vida y educación del paciente es esencial para mejorar 
      la calidad de vida y reducir las complicaciones.  </p>
    </div>
    
  );
}

export default EPOC;


