"use strict";

// routes/Correr.js
var express = require('express');

var router = express.Router();

var Correr = require('../models/Correr'); // ✅ Historial (lista completa) — DEBE ir ANTES de '/:usuario_id'


router.get('/historial/:usuario_id', function _callee(req, res) {
  var usuario_id, sesiones;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          usuario_id = req.params.usuario_id;
          _context.next = 4;
          return regeneratorRuntime.awrap(Correr.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            createdAt: 1,
            _id: 1
          }));

        case 4:
          sesiones = _context.sent;
          return _context.abrupt("return", res.json(sesiones));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('❌ Error al obtener historial de correr:', _context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // POST /api/correr (guardar sesión)

router.post('/', function _callee2(req, res) {
  var _req$body, usuario_id, tiempo, calorias, nueva;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, tiempo = _req$body.tiempo, calorias = _req$body.calorias;

          if (!(!usuario_id || !tiempo || !calorias)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Datos incompletos'
          }));

        case 4:
          nueva = new Correr({
            usuario_id: usuario_id,
            tiempo: tiempo,
            calorias: calorias
          }); // fecha por defecto

          _context2.next = 7;
          return regeneratorRuntime.awrap(nueva.save());

        case 7:
          return _context2.abrupt("return", res.status(201).json({
            message: 'Sesión registrada con éxito'
          }));

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('❌ Error al guardar sesión de correr:', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // Última sesión /api/correr/:usuario_id

router.get('/:usuario_id', function _callee3(req, res) {
  var usuario_id, ultima;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          usuario_id = req.params.usuario_id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Correr.findOne({
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

          return _context3.abrupt("return", res.status(404).json({
            message: 'No hay sesiones registradas'
          }));

        case 7:
          return _context3.abrupt("return", res.json(ultima));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('❌ Error al obtener última sesión de correr:', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;