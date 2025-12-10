"use strict";

// routes/BoxeoSaco.js
var express = require('express');

var router = express.Router();

var BoxeoSaco = require('../models/BoxeoSaco'); // 📈 Historial (para gráficas) — devuelve SIEMPRE un array


router.get('/historial/:usuario_id', function _callee(req, res) {
  var usuario_id, lista;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          usuario_id = req.params.usuario_id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(BoxeoSaco.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            createdAt: 1,
            _id: 1
          }));

        case 4:
          lista = _context.sent;
          return _context.abrupt("return", res.json(Array.isArray(lista) ? lista : []));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('Error historial boxeosaco:', _context.t0);
          return _context.abrupt("return", res.status(500).json([]));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // 🆕 Registrar sesión

router.post('/', function _callee2(req, res) {
  var _req$body, usuario_id, tiempo, calorias, doc;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, tiempo = _req$body.tiempo, calorias = _req$body.calorias;

          if (!(!usuario_id || tiempo == null || calorias == null)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Datos incompletos'
          }));

        case 4:
          doc = new BoxeoSaco({
            usuario_id: usuario_id,
            tiempo: tiempo,
            calorias: calorias
          });
          _context2.next = 7;
          return regeneratorRuntime.awrap(doc.save());

        case 7:
          return _context2.abrupt("return", res.status(201).json({
            message: 'Sesión registrada con éxito'
          }));

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('Error al registrar boxeosaco:', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // 📦 Última sesión (para tarjeta “último”)

router.get('/:usuario_id', function _callee3(req, res) {
  var usuario_id, ultima;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          usuario_id = req.params.usuario_id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(BoxeoSaco.findOne({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            createdAt: -1,
            _id: -1
          }));

        case 4:
          ultima = _context3.sent;

          if (ultima) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json([]));

        case 7:
          return _context3.abrupt("return", res.json(ultima));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.error('Error última boxeosaco:', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
module.exports = router;