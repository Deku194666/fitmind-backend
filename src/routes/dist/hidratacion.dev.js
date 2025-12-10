"use strict";

var express = require('express');

var router = express.Router();

var Hidratacion = require('../models/Hidratacion'); // Ruta de prueba


router.get('/', function (req, res) {
  res.json({
    mensaje: 'Ruta de hidratación funcionando 🚰'
  });
}); // Registrar agua ingerida

router.post('/registrar', function _callee(req, res) {
  var _req$body, usuario_id, cantidad_ml, ahora, nuevaEntrada;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, cantidad_ml = _req$body.cantidad_ml;
          ahora = new Date(); // Guardar fecha y hora separadas

          nuevaEntrada = new Hidratacion({
            usuario_id: usuario_id,
            cantidad_ml: cantidad_ml,
            fecha: ahora.toISOString().split('T')[0],
            // YYYY-MM-DD
            hora: ahora.toLocaleTimeString() // HH:MM:SS

          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevaEntrada.save());

        case 6:
          res.status(201).json({
            mensaje: 'Registro creado con éxito'
          });
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            error: 'Error al registrar hidratación'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Obtener todos los registros de hidratación de un usuario (para gráfico)

router.get('/todos/:usuario_id', function _callee2(req, res) {
  var usuario_id, registros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          usuario_id = req.params.usuario_id; // Ordenar por fecha y hora

          _context2.next = 4;
          return regeneratorRuntime.awrap(Hidratacion.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            hora: 1
          }));

        case 4:
          registros = _context2.sent;

          if (registros.length) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            mensaje: 'No se encontraron registros de hidratación'
          }));

        case 7:
          res.json(registros);
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            error: 'Error al obtener registros de hidratación'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // Obtener total de hidratación del día de un usuario (para dashboard)

router.get('/resumen/:usuario_id', function _callee3(req, res) {
  var usuario_id, fechaHoy, registrosHoy, totalAgua;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          usuario_id = req.params.usuario_id;
          fechaHoy = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

          _context3.next = 5;
          return regeneratorRuntime.awrap(Hidratacion.find({
            usuario_id: usuario_id,
            fecha: fechaHoy
          }));

        case 5:
          registrosHoy = _context3.sent;
          totalAgua = registrosHoy.reduce(function (total, r) {
            return total + r.cantidad_ml;
          }, 0);
          res.json({
            total_ml: totalAgua
          });
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).json({
            error: 'Error al obtener resumen de hidratación'
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;