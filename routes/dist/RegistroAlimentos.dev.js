"use strict";

// routes/registroAlimentos.js
var express = require('express');

var router = express.Router();

var Comida = require('../models/RegistroAlimentos'); // Util: normaliza a 00:00:00


function startOfDay(d) {
  var x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
} // GET: último registro por comida (uno por cada tipo)


router.get('/:usuario_id', function _callee(req, res) {
  var usuario_id, rows;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          usuario_id = req.params.usuario_id; // Tomamos el más reciente por comida con aggregate

          _context.next = 4;
          return regeneratorRuntime.awrap(Comida.aggregate([{
            $match: {
              usuario_id: usuario_id
            }
          }, {
            $sort: {
              fecha: -1,
              createdAt: -1,
              _id: -1
            }
          }, {
            $group: {
              _id: '$comida',
              doc: {
                $first: '$$ROOT'
              }
            }
          }, {
            $replaceWith: '$doc'
          }, {
            $sort: {
              fecha: 1
            }
          } // opcional: ordenar por orden de comidas
          ]));

        case 4:
          rows = _context.sent;
          res.json(rows);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('Error al obtener comidas:', _context.t0);
          res.status(500).json({
            error: 'Error al obtener comidas'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // GET: registros del día (por cada comida) ?fecha=YYYY-MM-DD

router.get('/dia/:usuario_id', function _callee2(req, res) {
  var usuario_id, fechaQ, ini, fin, rows;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          usuario_id = req.params.usuario_id;
          fechaQ = req.query.fecha ? new Date(req.query.fecha) : new Date();
          ini = startOfDay(fechaQ);
          fin = new Date(ini);
          fin.setDate(fin.getDate() + 1);
          _context2.next = 8;
          return regeneratorRuntime.awrap(Comida.find({
            usuario_id: usuario_id,
            fecha: {
              $gte: ini,
              $lt: fin
            }
          }).sort({
            comida: 1
          }));

        case 8:
          rows = _context2.sent;
          res.json(rows);
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error('Error al obtener comidas del día:', _context2.t0);
          res.status(500).json({
            error: 'Error al obtener comidas del día'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}); // GET: historial completo, ordenado por fecha asc

router.get('/historial/:usuario_id', function _callee3(req, res) {
  var usuario_id, rows;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          usuario_id = req.params.usuario_id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Comida.find({
            usuario_id: usuario_id
          }).sort({
            fecha: 1,
            createdAt: 1,
            _id: 1
          }));

        case 4:
          rows = _context3.sent;
          res.json(rows);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al obtener historial:', _context3.t0);
          res.status(500).json({
            error: 'Error al obtener historial'
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // POST: upsert por (usuario_id, comida, fecha-normalizada)

router.post('/', function _callee4(req, res) {
  var _req$body, usuario_id, comida, alimentos, fecha, day, alimentosNorm, doc;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, comida = _req$body.comida, alimentos = _req$body.alimentos, fecha = _req$body.fecha;

          if (!(!usuario_id || !comida)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            error: 'usuario_id y comida son requeridos'
          }));

        case 4:
          // Normalizamos la fecha a 00:00 UTC del día que llega (o hoy)
          day = startOfDay(fecha ? new Date(fecha) : new Date()); // Coerción de números por seguridad

          alimentosNorm = Array.isArray(alimentos) ? alimentos.map(function (a) {
            return {
              nombre: a.nombre,
              cantidad: Number(a.cantidad) || 1,
              calorias: Number(a.calorias) || 0,
              proteinas: Number(a.proteinas) || 0,
              grasas: Number(a.grasas) || 0,
              carbohidratos: Number(a.carbohidratos) || 0,
              fibra: Number(a.fibra) || 0
            };
          }) : [];
          _context4.next = 8;
          return regeneratorRuntime.awrap(Comida.findOneAndUpdate({
            usuario_id: usuario_id,
            comida: comida,
            fecha: day
          }, {
            $set: {
              alimentos: alimentosNorm,
              fecha: day
            }
          }, {
            "new": true,
            upsert: true
          }));

        case 8:
          doc = _context4.sent;
          res.json(doc);
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error('Error al guardar la comida:', _context4.t0);
          res.status(500).json({
            error: 'Error al guardar la comida'
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
module.exports = router;