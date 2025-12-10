

import React from 'react';
import './Comidas.css';

const recetas = [
  {
    id: 1,
    nombre: 'Espagueti al pesto con sálmon',
    imagen: 'https://images.getrecipekit.com/20240228171016-48d12cbc-b696-4536-8562-97c02e4b3280.jpeg?aspect_ratio=16:9&quality=90&', 
    descripcion: 'Olvidate de la salsa de tomate empaquetada. Esta receta de 5 ingredientes es tu mejor opcion para una cena sencilla y deliciosa. Esta receta es para una porción',
    descripcion2: '360 calorias, 29g de proteina, 40g de carbohidratos, 7g de fibra, 11g de grasa.',
    ingredientes: ['200g de espaguetti', '1/4 de taza de pesto', '15-20 tomates cherry', '200g de Sálmon', 'Queso Parmesano Rallado al gusto'],
    pasos: [
      'Hervir agua con sal en una olla y agregar el espagetti. Cocinar hasta que este al dente.',
      'Escurrir el agua del espaguetti.',
      'En la misma olla, mezclar los tarallines con el pesto, los tomates (picar al gusto), y el salmon .',
      'Sobre fuego medio de 3 a 5 minutos.', 
      'Servir y agregar queso parmesano al gusto.', 
    ]

  },


    {
    id: 2,
    nombre: 'Tallarines de Zapallo Italiano con pollo',
    imagen: 'https://www.midiariodecocina.com/wp-content/uploads/2016/05/Pasta-de-zapallo-italiano01.jpg', 
    descripcion: 'Una forma diferente y facil de comer tallarines saludables. Esta receta es para una porción',
    descripcion2: '350 - 400 calorias, 40g - 45g de proteina, 15g - 20g de carbohidratos, 5g de fibra, 15g de grasa.',
    ingredientes: ['Cortador tipo Juliana o un aparato para hacer tallarines vegetales', '2 zapallos italianos chicos - medianos', 'Aceite', 'Tiras de verduras a elección', '200g de Pechuga de Pollo sin Piel'],
    pasos: [
      'Con el cortador tipo Juliana o el aparato, corta en tiritas los zapallos italianos, eliminando el centro. ocupa 1 mediano o 2 pequeños para una porción' ,
      'Pone en el sartén un poco de aceite y tira las tiritas del zapallo italiano y tambien puedes agragarle otras tiritas de otras verduras como pimentón, zanahoria, beterraga. Se demoran poco en cocerse aprox. 3 minutos.',
      'Una vez cocido, escurre un poco el agua y con esto ya estarian listos los tallarines. Ahora puedes agregarle una proteina a eleccion o agragarle mas verduras si deseas una opcion vegetariana. ',
      'En este caso son 200g de pechuga de pollo sin piel al sartén, hechar luego de sacar los tallarines.', 
      'Servir y agregar queso parmesano al gusto.', 
    ]

  },

    {
    id: 3,
    nombre: 'Hamburguesas de Legumbres',
    imagen: 'https://i.ytimg.com/vi/OHw9iLxPUh4/maxresdefault.jpg', 
    descripcion: 'Prepara tus propias hamburgesas vegetarianas, saludables e igual de ricas. Esta receta es para 4 unidades.',
    descripcion2: '190 calorias, 13g de proteina, 31g de carbohidratos, 9g de fibra, 3g de grasa.',
    ingredientes: ['2 Tazas de lentejas u otra legumbre', '1/2 Pimentón', '1 Diente de ajo y aliño a gusto', '1 pizca de sal', '1 Huevo', ],
    pasos: [
      'Dejar remojando las legumbres la noche anterior.',
      'Al otro día colar y botar el agua.',
      'Poner las legumbres ( sin nada de agua ), pimentón picado, el diente de ajo picado, aliños y sal a gusto, y hechar todo a la procesadora hasta que quede una pasta.     .',
      'Dividir en 4, y darle forma de hamburguesa.', 
      'Cocinar en una sartén por ambos lados, hasta que se vean dorados ambos lados.',
      'Una unidad de hamburguesa, es una porción.', 
 
    ]

  },


];

const Comidas = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className='title'  >Recetas Saladas Saludables</p>
      {recetas.map(receta => (
        <div key={receta.id} style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px', borderRadius: '8px', maxWidth: '900px', margin: '30px auto', textAlign: 'center'  }}>
          <h3>{receta.nombre}</h3>
          <img src={receta.imagen} alt={receta.nombre} style={{ width: '44rem', borderRadius: '8px' }} />
          <p>{receta.descripcion}</p>
          <p className='pe1' >Ingredientes:</p>
          <ul>
            {receta.ingredientes.map((ing, index) => <li key={index}>{ing}</li>)}
          </ul>
          <p className='pe1' >Pasos:</p>
          <ol>
            {receta.pasos.map((paso, index) => <li key={index}>{paso}</li>)}
          </ol>
          <p className='pe1' >Por porcion :</p>
          <p>{receta.descripcion2}</p>
        </div>
      ))}
    </div>
  );
}

export default Comidas;

