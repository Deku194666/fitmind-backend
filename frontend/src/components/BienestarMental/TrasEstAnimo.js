


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarMindEstAnimo from './NavBarMindEstAnimo';

function TrasEstAnimo() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
        < NavBarMindEstAnimo/>
      <p className='p13'> Trastorno del Estado de Ánimo    </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  El mundo de los trastornos del estado de ánimo es tan complejo como fascinante. Estos no son simples cambios de
        humor pasajeros, sino condiciones que alteran profundamente la percepción de la realidad y la capacidad de funcionamiento diario.
        A lo largo de la historia, hemos evolucionado desde las explicaciones de los humores corporales de Hipócrates hasta el entendimiento
        moderno de los desequilibrios neuroquímicos.</p>
        

      <p className='p16'> 📌     <Link to="/bienestarmental/enfmentales/depresion" > Depresión</Link>: Más Allá de la Tristeza </p>
      <p className='p150'>  La <Link to="/bienestarmental/enfmentales/depresion" > Depresión</Link> se caracteriza por una constelación de síntomas que persisten durante semanas o meses. 
        No es simplemente "sentirse triste", sino una condición médica seria donde el cerebro literalmente funciona de manera diferente.
        Estudios de neuroimagen muestran cómo disminuye la actividad en áreas relacionadas con la motivación y el placer.</p>
        <p className='p150'>  El test PHQ-9 se ha convertido en una herramienta clave para la detección, con preguntas que evalúan desde el
        sueño hasta los pensamientos de autolesión. Un plan estructurado de Terapia Cognitivo-Conductual durante 30 días puede ayudar a 
        romper el ciclo de pensamientos negativos mediante técnicas como el registro de actividades y la reestructuración cognitiva.</p>
        
        
        <p className='p16'> 📌 La Paradoja del Trastorno Bipolar </p>
      <p className='p150'>  El <Link to="/bienestarmental/enfmentales/trasbipolar" > Trastornos Bipolar </Link>presenta una dualidad única: desde la profundidad de la depresión hasta la intensidad de la manía.
        La diferencia entre el tipo I (con episodios maníacos completos) y el tipo II (con hipomanía) es crucial para el tratamiento. 
        Herramientas modernas como apps de seguimiento del estado de ánimo permiten detectar patrones y prevenir crisis.  </p>

        <p className='p16'> 📌 Distimia: La Sombra Persistente </p>
      <p className='p150'> La  <strong> Distonia  </strong> menos conocida pero igualmente debilitante, la distimia es como llevar una mochila de piedras todos los días 
        durante años. Su naturaleza crónica requiere estrategias específicas, como la técnica del "pero" para contrarrestar el pensamiento 
        negativo automático  </p>
    </div>
    
  );
}

export default TrasEstAnimo;

