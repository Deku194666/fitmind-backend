

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarTrasAns from './NavBarTrasAns';

function TrasAnsiedad() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
        < NavBarTrasAns/>
      <p className='p13'> Trastorno de Ansiedad   </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  La ansiedad, en su forma más pura, es un mecanismo de supervivencia heredado de nuestros ancestros, un sistema de alarma
         que nos prepara para huir o luchar. Sin embargo, cuando este sistema se desregula, la ansiedad deja de ser un aliado para convertirse 
         en un enemigo silencioso que corroe la calidad de vida. Los trastornos de ansiedad no son simples nervios o estrés pasajero; son 
         condiciones médicas reales que alteran la química cerebral, la percepción del peligro y, en casos graves, la capacidad de funcionar 
         en el mundo. Desde la preocupación constante del TAG hasta los rituales incontrolables del TOC, cada trastorno tiene su propia 
         narrativa clínica y su camino hacia la recuperación. </p>
        

      <p className='p16'> 📌 Trastorno de Ansiedad Generalizada (TAG) </p>
      <p className='p150'>Imagina que tu mente es como un motor que nunca se apaga, siempre en busca de posibles amenazas, incluso cuando no las hay. 
        Así vive una persona con TAG: atrapada en un bucle de "¿y si...?" que consume su energía mental. No es solo estrés cotidiano; es una 
        angustia difusa que impregna todo, desde la salud hasta las relaciones personales.</p>
        <p className='p150'>  La terapia cognitivo-conductual (TCC) ha demostrado ser una de las herramientas más eficaces, enseñando a
            cuestionar esos pensamientos catastróficos mediante ejercicios estructurados. Por ejemplo, el diario de preocupaciones no solo 
            sirve para descargar la mente, sino para reevaluar, días después, qué tan reales eran esos miedos. Y cuando la ansiedad física 
            arrecia, técnicas como el grounding —anclarse en el presente a través de los sentidos— pueden ser un salvavidas en medio del
            caos mental.  </p>
        
        
        <p className='p16'> 📌 Ataques de Pánico: El Miedo al Mismo Miedo </p>
      <p className='p150'>  Un ataque de pánico es como una falsa alarma de incendio en el cerebro: el cuerpo reacciona con taquicardia,
        sudores y temblores, aunque no haya peligro real. Lo paradójico es que el terror a sufrir otro ataque se convierte en un
        combustible que perpetúa el ciclo. </p>
        <p className='p150'>  Aquí, la psicoeducación es crucial. Entender que un ataque de pánico, por intenso que sea, no puede matarte,
             reduce su poder. Técnicas como la *respiración 4-7-8* o el enfriamiento con hielo ayudan a resetear el sistema nervioso. 
             Pero la verdadera cura llega con la exposición gradual: aprender a tolerar las sensaciones físicas (como el vértigo o el latido 
             acelerado) en un entorno seguro, hasta que el cerebro deje de interpretarlas como amenazas.</p>


        <p className='p16'> 📌  Fobias Específicas: Cuando el Miedo Tiene Nombre </p>
      <p className='p150'> Todos tememos algo, pero en las fobias ese miedo es desproporcionado, hasta el punto de evitar situaciones cotidianas. 
        Ya sea volar, ver sangre o encontrarse con un perro, la reacción es inmediata: sudores fríos, palpitaciones y una necesidad irracional
         de huir.  </p>
        <p className='p150'>  La realidad virtual está revolucionando el tratamiento, permitiendo enfrentar estos miedos en un espacio controlado. 
        Por ejemplo, alguien con aerofobia puede "subir" a un avión virtual una y otra vez, hasta que su cerebro asimile que no hay peligro.
        Pero incluso sin tecnología, la terapia de exposición tradicional —empezando por imaginar la situación y avanzando hacia el contacto 
        real— puede reconfigurar esa respuesta automática de terror.</p>


        <p className='p16'> 📌  Trastorno Obsesivo-Compulsivo (TOC): La Tirania de los Pensamientos Intrusivos </p>
      <p className='p150'> El TOC va más allá de ser "perfeccionista" o "ordenado". Es una guerra interna donde obsesiones (pensamientos perturbadores 
        recurrentes) chocan contra compulsiones (rituales para neutralizarlos). Lavarse las manos 30 veces por miedo a contaminarse, o revisar 
        la cerradura una y otra vez, no son manías: son intentos desesperados por calmar la ansiedad que generan esas ideas intrusivas.Todos 
        tememos algo, pero en las fobias ese miedo es desproporcionado, hasta el punto de evitar situaciones cotidianas. 
        Ya sea volar, ver sangre o encontrarse con un perro, la reacción es inmediata: sudores fríos, palpitaciones y una necesidad irracional
         de huir.  </p>
        <p className='p150'>  El test Y-BOCS ayuda a medir la gravedad, pero el gold standard es la Exposición con Prevención de Respuesta (ERP).
        Se trata de enfrentar el miedo sin realizar la compulsión: tocar un pomo y no lavarse, por ejemplo. Al principio, la ansiedad es 
        insoportable, pero con el tiempo, el cerebro aprende que nada catastrófico ocurre. Es un proceso doloroso, pero liberador.  </p>
    </div>
    
  );
}

export default TrasAnsiedad;

