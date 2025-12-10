"use strict";

var express = require('express');

var router = express.Router();

var ComidasDiarias = require('../models/ComidasDiarias'); // GET: traer todos los alimentos de un usuario


router.get('/:usuario_id', function _callee(req, res) {
  var comidas;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(ComidasDiarias.find({
            usuario_id: req.params.usuario_id
          }));

        case 3:
          comidas = _context.sent;
          res.json(comidas);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // POST: registrar un alimento

router.post('/', function _callee2(req, res) {
  var _req$body, usuario_id, comida, nombre, cantidad, calorias, proteinas, grasas, carbohidratos, fibra, nuevoRegistro, guardado;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, usuario_id = _req$body.usuario_id, comida = _req$body.comida, nombre = _req$body.nombre, cantidad = _req$body.cantidad, calorias = _req$body.calorias, proteinas = _req$body.proteinas, grasas = _req$body.grasas, carbohidratos = _req$body.carbohidratos, fibra = _req$body.fibra;
          nuevoRegistro = new ComidasDiarias({
            usuario_id: usuario_id,
            comida: comida,
            nombre: nombre,
            cantidad: cantidad,
            calorias: calorias,
            proteinas: proteinas,
            grasas: grasas,
            carbohidratos: carbohidratos,
            fibra: fibra
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(nuevoRegistro.save());

        case 5:
          guardado = _context2.sent;
          res.json(guardado);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;