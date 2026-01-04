"use strict";

// routes/elongacion.js
var express = require('express');

var router = express.Router();

var Elongacion = require('../models/Elongacion');

router.post('/', function _callee(req, res) {
  var nuevaSesion, guardado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('📥 Datos recibidos:', req.body);
          nuevaSesion = new Elongacion(req.body);
          _context.next = 5;
          return regeneratorRuntime.awrap(nuevaSesion.save());

        case 5:
          guardado = _context.sent;
          res.status(201).json(guardado);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('❌ Error al guardar:', _context.t0);
          res.status(500).json({
            error: 'Error al guardar en la base de datos'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
router.get('/:usuario_id', function _callee2(req, res) {
  var registros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Elongacion.find({
            usuario_id: req.params.usuario_id
          }).sort({
            fecha: -1
          }).limit(1));

        case 3:
          registros = _context2.sent;
          res.json(registros[0] || {});
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: 'Error al obtener datos de elongación'
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;