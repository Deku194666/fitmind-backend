

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarMen from './NavBarMen';



function EnfMentalComun() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    
    <div className="ecnt-detail">
      <NavBarMen/>
      <p className='p13'> Trastornos Mentales Comunes  </p>
      <p className='p14'>📌Introducción</p>
      <p className='p150'> El mundo de los trastornos del estado de ánimo es tan complejo como fascinante. Estos no son simples cambios 
        de humor pasajeros, sino condiciones que alteran profundamente la percepción de la realidad y la capacidad de funcionamiento 
        diario. A lo largo de la historia, hemos evolucionado desde las explicaciones de los humores corporales de Hipócrates hasta 
        el entendimiento moderno de los desequilibrios neuroquímicos.</p>
        
      <p className='p14'> ¿Qué encontrarás aquí?  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 Guías claras sobre condiciones mentales (síntomas, causas, tratamientos validados). </li>
        <li> 📌 Técnicas paso a paso para manejar crisis, pensamientos intrusivos o ataques de pánico. </li>
        <li> 📌 Contenido multimedia: podcasts con expertos, videos de ejercicios y audios de relajación.   </li>
        <li> 📌 Comunidad segura: Foros moderados donde compartir experiencias sin juicios.   </li>
      </ul>

      <p className='p14'> 📌Introducción Integral a los Trastornos Mentales </p>
      <p className='p150'> Nuestra salud mental es un ecosistema complejo donde diferentes condiciones pueden afectar cómo pensamos, 
        sentimos y nos relacionamos. Este módulo ofrece un mapa completo para entender y gestionar los principales trastornos 
        psicológicos, con herramientas prácticas basadas en la evidencia científica.</p>

      <p className='p14'> 📌Un Viaje por la Mente Humana </p>
      <p className='p150'> Exploraremos seis grandes categorías que impactan el bienestar emocional y cognitivo:</p>
      <p className='p16'> 🧠Trastornos del Estado de Ánimo </p>
      <p className='p150'> Desde la oscuridad persistente de la depresión mayor hasta los altibajos del trastorno bipolar, aprenderás a 
      identificar sus matices y encontrar caminos hacia el equilibrio.  </p>
      <p className='p16'> 🧠Trastornos de Ansiedad </p>
      <p className='p150'> Descubre cómo manejar la ansiedad generalizada, superar ataques de pánico y enfrentar fobias específicas, incluso 
      con innovadoras terapias de realidad virtual.  </p>
      <p className='p16'> 🧠 Trastornos Psicóticos  </p>
      <p className='p150'> Entenderemos la esquizofrenia más allá de los estigmas y aprenderemos estrategias para el trastorno delirante.  </p>
      <p className='p16'> 🥗Trastornos Alimentarios </p>
      <p className='p150'> Rompe el ciclo de la anorexia, bulimia y el trastorno por atracón con enfoques que sanan tanto la mente como el cuerpo.</p>
      <p className='p16'> 🧬  Neurodesarrollo  </p>
      <p className='p150'> Rompe el ciclo de la anorexia, bulimia y el trastorno por atracón con enfoques que sanan tanto la mente como el cuerpo.</p>
      <p className='p16'> 🔍 Otras Condiciones Relevantes </p>
      <p className='p150'> Desde el TEPT hasta el insomnio crónico, abordamos problemas que requieren atención especializada. </p>
      <p className='p150'> "Conocer es el primer paso para transformar. Aquí encontrarás tanto el mapa como las herramientas para tu viaje hacia el bienestar mental." </p>
      

      <p className='p150'> Nota: Este módulo no reemplaza la atención profesional, pero sí complementa y empodera tu proceso terapéutico.
        Siempre consulta a un especialista para diagnósticos formales.  </p>
    </div>
    
  );
}

export default EnfMentalComun;
