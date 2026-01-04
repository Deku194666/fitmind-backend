"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// routes/Alimentos.js
var express = require('express');

var router = express.Router();

var Alimento = require('../models/Alimentos'); // helper para convertir "52", "52 kcal", "12 g" => 52


var toNumber = function toNumber(v) {
  if (typeof v === 'number') return v;
  if (!v) return 0;
  var m = String(v).match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : 0;
};

router.get('/buscar', function _callee(req, res) {
  var q, rx, items, norm;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // 🔒 No-cache headers (evita 304 y respuestas vacías por caché del navegador)
          res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
          res.set('Pragma', 'no-cache');
          res.set('Expires', '0');
          res.set('Surrogate-Control', 'no-store');
          q = (req.query.q || '').trim();

          if (q) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.json([]));

        case 8:
          // Regex seguro (escapa caracteres especiales) y case-insensitive
          rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
          _context.next = 11;
          return regeneratorRuntime.awrap(Alimento.find({
            $or: [{
              nombre: rx
            }, {
              categoria: rx
            }]
          }, {
            nombre: 1,
            categoria: 1,
            calorias: 1,
            proteinas: 1,
            grasas: 1,
            carbohidratos: 1,
            fibra: 1,
            porcion: 1
          }).limit(25).lean());

        case 11:
          items = _context.sent;
          // Normalizamos numéricos (por si vienen como strings)
          norm = items.map(function (x) {
            return _objectSpread({}, x, {
              calorias: toNumber(x.calorias),
              proteinas: toNumber(x.proteinas),
              grasas: toNumber(x.grasas),
              carbohidratos: toNumber(x.carbohidratos),
              fibra: toNumber(x.fibra)
            });
          });
          console.log("[ALIMENTOS][buscar] q=\"".concat(q, "\" -> ").concat(norm.length, " resultados"));
          res.json(norm);
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error('Error /alimentos/buscar:', _context.t0);
          res.status(500).json({
            error: 'Error buscando alimentos'
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
});
module.exports = router;