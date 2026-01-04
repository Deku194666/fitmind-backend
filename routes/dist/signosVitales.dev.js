"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var router = express.Router();

var SignosVitales = require('../models/SignosVitales');

console.log('Ruta /api/signos-vitales cargada'); // <- esto te confirma que se cargó la ruta
// Guardar datos

router.post('/', function _callee(req, res) {
  var nuevoRegistro, guardado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('POST recibido en /api/signos-vitales', req.body);
          _context.prev = 1;
          nuevoRegistro = new SignosVitales(_objectSpread({}, req.body, {
            fecha: new Date() // fecha y hora exacta

          }));
          _context.next = 5;
          return regeneratorRuntime.awrap(nuevoRegistro.save());

        case 5:
          guardado = _context.sent;
          res.status(201).json(guardado);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.error('Error al guardar:', _context.t0);
          res.status(500).json({
            error: 'Error interno al guardar'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}); // Obtener todos los datos

router.get('/', function _callee2(req, res) {
  var registros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('GET recibido en /api/signos-vitales');
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(SignosVitales.find());

        case 4:
          registros = _context2.sent;
          res.json(registros);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            error: 'Error al obtener los datos'
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // GET registros de un usuario específico

router.get('/usuario/:usuario_id', function _callee3(req, res) {
  var usuario_id, registros;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          usuario_id = req.params.usuario_id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(SignosVitales.find({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            createdAt: -1
          }));

        case 4:
          registros = _context3.sent;
          res.json(registros);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al obtener registros por usuario:', _context3.t0);
          res.status(500).json({
            error: 'Error interno al obtener registros'
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // GET último registro de un usuario

router.get('/ultimo/:usuario_id', function _callee4(req, res) {
  var usuario_id, ultimoRegistro;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          usuario_id = req.params.usuario_id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(SignosVitales.findOne({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            createdAt: -1
          }));

        case 4:
          ultimoRegistro = _context4.sent;
          // orden descendente por fecha y creación
          res.json(ultimoRegistro);
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error('Error al obtener último signo vital:', _context4.t0);
          res.status(500).json({
            error: 'Error interno al obtener último registro'
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Actualizar un registro por ID

router.put('/:id', function _callee5(req, res) {
  var actualizado;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(SignosVitales.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          } // <-- devuelve el documento ya actualizado
          ));

        case 3:
          actualizado = _context5.sent;

          if (actualizado) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            error: 'Registro no encontrado'
          }));

        case 6:
          res.json(actualizado);
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error('Error al actualizar:', _context5.t0);
          res.status(500).json({
            error: 'Error interno al actualizar'
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Eliminar un registro por ID

router["delete"]('/:id', function _callee6(req, res) {
  var eliminado;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(SignosVitales.findByIdAndDelete(req.params.id));

        case 3:
          eliminado = _context6.sent;

          if (eliminado) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", res.status(404).json({
            error: 'Registro no encontrado'
          }));

        case 6:
          res.json({
            mensaje: 'Registro eliminado con éxito'
          });
          _context6.next = 13;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error('Error al eliminar:', _context6.t0);
          res.status(500).json({
            error: 'Error interno al eliminar'
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;