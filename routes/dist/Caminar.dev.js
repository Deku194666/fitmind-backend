"use strict";

// routes/Caminar.js
var express = require('express');

var router = express.Router();

var Caminar = require('../models/Caminar');

console.log('✅ routes/Caminar.js cargado'); // 👉 Historial (debe ir ANTES que "/:usuario_id")

router.get('/historial/:usuario_id', function _callee(req, res) {
  var usuario_id, lista;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          usuario_id = req.params.usuario_id;
          console.log('GET /historial ->', usuario_id);
          _context.next = 5;
          return regeneratorRuntime.awrap(Caminar.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            _id: 1
          }));

        case 5:
          lista = _context.sent;
          return _context.abrupt("return", res.json(Array.isArray(lista) ? lista : []));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('❌ Error historial caminar:', _context.t0);
          return _context.abrupt("return", res.status(500).json([]));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // 👉 Última sesión

router.get('/:usuario_id', function _callee2(req, res) {
  var usuario_id, doc;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          usuario_id = req.params.usuario_id;
          console.log('GET /:usuario_id ->', usuario_id);
          _context2.next = 5;
          return regeneratorRuntime.awrap(Caminar.findOne({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            _id: -1
          }));

        case 5:
          doc = _context2.sent;

          if (doc) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'No hay sesiones registradas'
          }));

        case 8:
          return _context2.abrupt("return", res.json(doc));

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error('❌ Error última caminar:', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // 👉 Crear sesión (esto faltaba)

router.post('/', function _callee3(req, res) {
  var _req$body, usuario_id, tiempo, calorias, doc;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, tiempo = _req$body.tiempo, calorias = _req$body.calorias;
          console.log('POST / ->', {
            usuario_id: usuario_id,
            tiempo: tiempo,
            calorias: calorias
          });

          if (!(!usuario_id || typeof tiempo !== 'number' || typeof calorias !== 'number')) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            message: 'Datos incompletos o inválidos'
          }));

        case 5:
          doc = new Caminar({
            usuario_id: usuario_id,
            tiempo: tiempo,
            calorias: calorias
          });
          _context3.next = 8;
          return regeneratorRuntime.awrap(doc.save());

        case 8:
          return _context3.abrupt("return", res.status(201).json({
            message: 'Sesión registrada con éxito',
            _id: doc._id
          }));

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error('❌ Error al guardar caminar:', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = router;