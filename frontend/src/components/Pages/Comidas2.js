




import React from 'react';
import './Comidas.css';

const recetas = [
  {
    id: 1,
    nombre: 'Muffin de Avena y de Coco',
    imagen: 'https://www.bakeandshare.com/wp-content/uploads/2022/07/muffins-avena-chocolate-9.jpg', 
    descripcion: 'Muffins saludables caseros, facil y ricos de hacer.',
    descripcion2: '222 calorias, 6g de proteina, 21.3g de carbohidratos, 4.5g de fibra, 12.6g de grasa.',
    ingredientes: ['1/2 taza de avena tradicional', '1/2 de taza de avena en polvo (moler la normal)', '1/2 taza de coco rallado', 
    '2 claras de huevo', '1 taza de leche vegetal', 'stevia o endulzante que ocupes',
    'Opcional: 1/2 taza de chispas de chocolate 60% cacao o mas. Si no tienes chispas de chocolate, pica una tableta de chocolate con alto porcentaje de cacao.'],
    pasos: [
      'Mezclar la avena en polvo, avena en hojuelas, el coco, la leche, y endulazar a gusto. Probar la mezcla si es que esta bien de dulzor. ',
      'Mezclar bien y dejar reposar una noche en el refrigerador.',
      'Al otro día, agregar la claras y los chips de chocolate y revolver bien.',
      'Distribuir la masa en moldes individuales pequeños, encima puedes poner unas escamas de coco deshidratado o almendras laminadas para decorar y cocinar por 25 minutos en un horno ya precalentado a 180°C.',
      'Una porción son 3 muffins por persona, por lo que la receta incluye 4 porciones.',  
    ]

  },

    {
    id: 2,
    nombre: 'Galletas de Avena y de Coco',
    imagen: 'https://comedera.com/wp-content/uploads/sites/9/2023/03/Galletas-de-avena-y-coco-shutterstock_415058374.jpg', 
    descripcion: 'Galletas saludables caseras, faciles y ricas de hacer.',
    descripcion2: '190 calorias, 8g de proteina, 20g de carbohidratos, 4g de fibra, 8g de grasa.',
    ingredientes: ['2 claras de huevo', '1 taza de avena', '1/4 taza de coco en hojuelas o rallado', 
    '1/4 de taza de algun fruto deshidratado, como frambuesas, frutillas, arandanos etc', 'stevia o endulzante que ocupes',
    'Endulzante a gusto', '1/2 taza de harina de almendras'],
    pasos: [
      'Batir las claras de huevo. ',
      'Al tener la claras batidas, incorporar todos los otros ingredientes. Mezclar bien, y probarla para saber si esta bien de dulzor.',
      'Con las manos un poco humedas, realizar bolitas y aplastarlas para darle en forma de galleta.',
      'Precalentar el horno a 180°C y antes aplicar un toque de aceite en spray, o aceite de coco apar facilitar el despegarlas luego de la cocción.', 
      'Dejarlas en el horno por 10 a 15 minutos, o hasta que se vean levementes doradas, hay que estar pendientes ya que si se pasan quedan duras.',
      'La receta son para 10 galletas aprox. y son 3 galletas la porción.', 


    ]

  },


    {
    id: 3,
    nombre: 'Tarta de Manzana al Sartén',
    imagen: 'https://content-cocina.lecturas.com/medio/2022/05/11/tarta-de-manzana-rellena_fce2b5db_1200x1600.jpg', 
    descripcion: 'Una tarta baja en calorias, saludable y rica para postre o para merendar.',
    descripcion2: '35 - 40 calorias, 2 - 2.3g de proteina, 4 - 5g de carbohidratos, 1g de fibra, 0.4g de grasa.',
    ingredientes: ['3 - 4  claras de huevo', '4 cucharadas de avena en polvo (moler la normal)', '1 cucharada de yogurt natural sin grasa', 
    '1/2 cucharadita de polvos de hornear', '1 cucharadita de endulzante', '1/2 a 1 manzana',],
    pasos: [
      'Trozar la manzana como si fueran gajos. ',
      'Licua todos los ingredientes restantes.',
      'Poner una gota de aceite en un sartén pequeño, colocar las rodajas de manzana una al lado de la otra, luego calentar el sartén y vertir la masa, cocinar a fuego bajo y tapar parcialmente el sartén.',
      'Cocinar por 5 minutos, luego darlo vuelta ( puede ser con un plato bajo grande ) y esperar 1 minuto.', 
      'La receta da 8 porciones pequeñas, cada trozo es una porción.', 
    ]

  },

      {
    id: 4,
    nombre: 'Helado de Chocolate Proteico',
    imagen: 'https://danzadefogones.com/wp-content/uploads/2015/07/Helado-de-chocolate-y-platano-4-480x270.jpg', 
    descripcion: 'Un helado saludable, bajo en calorias e igual de rico.',
    descripcion2: '220 calorias, 27g de proteina, 30g de carbohidratos, 4g de fibra, 2g de grasa.',
    ingredientes: ['Platanos cortados en rodajas congelados', 'Cacao en polvo sin azucar', 'Endulzante',' 1 scoop de proteina en polvo (30g)', ],
    pasos: [
      'Proporcionar una cucharada en polvo de cacao por cada platano entero y 1 scoop de proteina. ',
      'Mezclar bien, en una licuadora/procesadora y triturar hasta que se haga una pasta y servir.',
      'Para una porción no superar la cantidad de 1 platano por persona. La receta esta hecha para una porcion, por un platano, para 2 porciones, 2 platanos y el doble de proteina y cacao y asi',
    ]

  },


];

const Comidas = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className='title'  >Recetas Dulces Saludables</p>
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
          <p className='pe1' >Por porción :</p>
          <p>{receta.descripcion2}</p>
        </div>
      ))}
    </div>
  );
}

export default Comidas;
