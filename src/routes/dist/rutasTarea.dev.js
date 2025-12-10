"use strict";

var express = require('express');

var rutas = express.Router();

var Tarea = require('../models/tarea');

var tarea = require('../models/tarea');

var _require = require('body-parser'),
    json = _require.json;

var _require2 = require('inspector'),
    console = _require2.console;

rutas.get('/', function _callee(req, res) {
  var tareas;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Tarea.find());

        case 2:
          tareas = _context.sent;
          console.log(tareas);
          res.json(tareas);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
rutas.get('/:id', function _callee2(req, res) {
  var tarea;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Tarea.findById(req.params.id));

        case 2:
          tarea = _context2.sent;
          res.json(tarea);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
rutas.post('/', function _callee3(req, res) {
  var _req$body, titulo, descripcion, tarea;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, titulo = _req$body.titulo, descripcion = _req$body.descripcion;
          tarea = new Tarea({
            titulo: titulo,
            descripcion: descripcion
          });
          console.log(tarea);
          _context3.next = 5;
          return regeneratorRuntime.awrap(tarea.save());

        case 5:
          res.json({
            status: 'Tarea Guardada'
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
rutas.put('/:id', function _callee4(req, res) {
  var _req$body2, titulo, descripcion, newTarea;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, titulo = _req$body2.titulo, descripcion = _req$body2.descripcion;
          newTarea = {
            titulo: titulo,
            descripcion: descripcion
          };
          _context4.next = 4;
          return regeneratorRuntime.awrap(Tarea.findByIdAndUpdate(req.params.id, newTarea));

        case 4:
          res.json({
            status: 'Tarea Actualizada'
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
rutas["delete"]('/:id', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Tarea.findByIdAndDelete(req.params.id));

        case 2:
          res.json({
            status: 'Tarea Eliminada'
          });

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = rutas;