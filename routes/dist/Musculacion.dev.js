"use strict";

// routes/Musculacion.js
var express = require('express');

var router = express.Router();

var Musculacion = require('../models/Musculacion');
/* 📜 Historial completo (array ordenado por fecha asc). 
   Devuelve 200 con [] si no hay datos. */


router.get('/historial/:usuario_id', function _callee(req, res) {
  var usuario_id, docs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          usuario_id = req.params.usuario_id;
          _context.next = 4;
          return regeneratorRuntime.awrap(Musculacion.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            _id: 1
          }));

        case 4:
          docs = _context.sent;
          return _context.abrupt("return", res.json(docs));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('❌ Error historial musculación:', _context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
/* 🆕 Última sesión (opcional, útil para dashboard) */

router.get('/ultimo/:usuario_id', function _callee2(req, res) {
  var usuario_id, doc;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          usuario_id = req.params.usuario_id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Musculacion.findOne({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            _id: -1
          }));

        case 4:
          doc = _context2.sent;

          if (doc) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Sin registros'
          }));

        case 7:
          return _context2.abrupt("return", res.json(doc));

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('❌ Error último musculación:', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
/* Compatibilidad: obtener “última” con la ruta antigua */

router.get('/:usuario_id', function _callee3(req, res) {
  var usuario_id, ultimaSesion;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          usuario_id = req.params.usuario_id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Musculacion.findOne({
            usuario_id: usuario_id
          }).sort({
            fecha: -1,
            _id: -1
          }));

        case 4:
          ultimaSesion = _context3.sent;

          if (ultimaSesion) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            mensaje: 'No hay sesiones registradas'
          }));

        case 7:
          return _context3.abrupt("return", res.json(ultimaSesion));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.error('❌ Error al obtener sesión de musculación:', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            mensaje: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
/* Registrar sesión */

router.post('/', function _callee4(req, res) {
  var _req$body, usuario_id, tiempo, calorias, nuevaSesion;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, tiempo = _req$body.tiempo, calorias = _req$body.calorias;

          if (!(!usuario_id || !tiempo || !calorias)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            message: 'Datos incompletos'
          }));

        case 4:
          nuevaSesion = new Musculacion({
            usuario_id: usuario_id,
            tiempo: tiempo,
            calorias: calorias
          });
          _context4.next = 7;
          return regeneratorRuntime.awrap(nuevaSesion.save());

        case 7:
          return _context4.abrupt("return", res.status(201).json({
            message: 'Sesión registrada con éxito'
          }));

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('Error al guardar sesión:', _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Error del servidor'
          }));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;