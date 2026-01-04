"use strict";

var express = require('express');

var Farmacos = require('../models/Farmacos');

var router = express.Router(); // Registrar fármaco

router.post('/', function _callee(req, res) {
  var nuevoFarmaco;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          nuevoFarmaco = new Farmacos(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(nuevoFarmaco.save());

        case 4:
          res.status(201).json({
            message: 'Fármaco registrado correctamente'
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error al registrar fármaco:', _context.t0);
          res.status(500).json({
            message: 'Error del servidor'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Obtener fármacos por usuario

router.get('/:usuarioId', function _callee2(req, res) {
  var farmacos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Farmacos.find({
            usuarioId: req.params.usuarioId
          }).sort({
            fechaInicio: -1
          }));

        case 3:
          farmacos = _context2.sent;
          res.json(farmacos);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Error al obtener fármacos:', _context2.t0);
          res.status(500).json({
            message: 'Error del servidor'
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Obtener fármacos activos en un día específico

router.get('/agenda/:usuarioId', function _callee3(req, res) {
  var usuarioId, fecha, farmacos;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          usuarioId = req.params.usuarioId;
          fecha = req.query.fecha || new Date().toISOString().split('T')[0];
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Farmacos.find({
            usuarioId: usuarioId,
            fechaInicio: {
              $lte: fecha
            },
            fechaFin: {
              $gte: fecha
            }
          }));

        case 5:
          farmacos = _context3.sent;
          res.json(farmacos);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            mensaje: 'Error al obtener la agenda'
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); // 🔥 NUEVA RUTA: Obtener fármacos entre dos fechas (mes actual)

router.get('/mes', function _callee4(req, res) {
  var _req$query, usuarioId, fechaInicio, fechaFin, farmacos;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$query = req.query, usuarioId = _req$query.usuarioId, fechaInicio = _req$query.fechaInicio, fechaFin = _req$query.fechaFin;

          if (!(!usuarioId || !fechaInicio || !fechaFin)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            mensaje: 'Faltan parámetros'
          }));

        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(Farmacos.find({
            usuarioId: usuarioId,
            $or: [{
              fechaInicio: {
                $lte: fechaFin
              },
              fechaFin: {
                $gte: fechaInicio
              }
            }]
          }));

        case 6:
          farmacos = _context4.sent;
          res.json(farmacos);
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](3);
          console.error('Error al obtener fármacos del mes:', _context4.t0);
          res.status(500).json({
            mensaje: 'Error del servidor'
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 10]]);
});
module.exports = router;