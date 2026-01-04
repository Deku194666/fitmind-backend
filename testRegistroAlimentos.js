


const mongoose = require('mongoose');
const RegistroAlimentos = require('./models/RegistroAlimentos');

const URI = 'mongodb://localhost:27017/Tarea';

mongoose.connect(URI)
  .then(() => console.log('Conectado a MongoDB para test'))
  .catch(err => console.error('Error conexión MongoDB:', err));

async function testRegistro() {
  try {
    // Crear un registro de prueba
    const registro = new RegistroAlimentos({
      usuario_id: 'usuario_test',
      comida: 'Desayuno',
      alimentos: [
        { nombre: 'Huevo frito', cantidad: 2, calorias: 90, proteinas: 6, grasas: 7, carbohidratos: 1, fibra: 0 },
        { nombre: 'Pan integral', cantidad: 1, calorias: 247, proteinas: 8.8, grasas: 4.2, carbohidratos: 41, fibra: 7 }
      ]
    });

    await registro.save();
    console.log('Registro guardado:', registro);

    // Consultar registros del usuario
    const comidas = await RegistroAlimentos.find({ usuario_id: 'usuario_test' });
    console.log('Comidas guardadas para usuario_test:', comidas);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

testRegistro();
