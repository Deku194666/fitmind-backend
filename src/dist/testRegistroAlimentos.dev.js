"use strict";

var mongoose = require('mongoose');

var RegistroAlimentos = require('./models/RegistroAlimentos');

var URI = 'mongodb://localhost:27017/Tarea';
mongoose.connect(URI).then(function () {
  return console.log('Conectado a MongoDB para test');
})["catch"](function (err) {
  return console.error('Error conexión MongoDB:', err);
});

function testRegistro() {
  var registro, comidas;
  return regeneratorRuntime.async(function testRegistro$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Crear un registro de prueba
          registro = new RegistroAlimentos({
            usuario_id: 'usuario_test',
            comida: 'Desayuno',
            alimentos: [{
              nombre: 'Huevo frito',
              cantidad: 2,
              calorias: 90,
              proteinas: 6,
              grasas: 7,
              carbohidratos: 1,
              fibra: 0
            }, {
              nombre: 'Pan integral',
              cantidad: 1,
              calorias: 247,
              proteinas: 8.8,
              grasas: 4.2,
              carbohidratos: 41,
              fibra: 7
            }]
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(registro.save());

        case 4:
          console.log('Registro guardado:', registro); // Consultar registros del usuario

          _context.next = 7;
          return regeneratorRuntime.awrap(RegistroAlimentos.find({
            usuario_id: 'usuario_test'
          }));

        case 7:
          comidas = _context.sent;
          console.log('Comidas guardadas para usuario_test:', comidas);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 14:
          _context.prev = 14;
          mongoose.connection.close();
          return _context.finish(14);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11, 14, 17]]);
}

testRegistro();