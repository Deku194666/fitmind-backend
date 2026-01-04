"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// routes/datosUsuario.js
var express = require('express');

var router = express.Router();

var DatosUsuario = require('../models/DatosUsuario'); // IMportando DatosUsuario


var Usuario = require('../models/usuario');

var mongoose = require('mongoose');

router.get('/:id', function _callee(req, res) {
  var usuarioId, datosUsuario;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          usuarioId = req.params.id; // Buscar DatosUsuario y hacer populate para traer los datos del usuario referenciado

          _context.next = 4;
          return regeneratorRuntime.awrap(DatosUsuario.findOne({
            usuario: usuarioId
          }).populate('usuario', 'email'));

        case 4:
          datosUsuario = _context.sent;

          if (datosUsuario) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            mensaje: 'Datos del usuario no encontrados'
          }));

        case 7:
          res.status(200).json(datosUsuario);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Error en GET /:id:', _context.t0);
          res.status(500).json({
            mensaje: 'Error al obtener los datos del usuario'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
router.get('/', function _callee2(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(DatosUsuario.find());

        case 3:
          usuarios = _context2.sent;
          // Obtener todos los documentos de la colección
          res.status(200).json(usuarios); // Responder con los datos

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            mensaje: 'Error al obtener los datos'
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/register', function _callee3(req, res) {
  var loginIdCreado, _req$body, nombre, email, contraseña, edad, genero, pais, ciudad, emailNorm, existe, nuevoUsuarioLogin, guardadoLogin, nuevoUsuario, guardadoPerfil;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          loginIdCreado = null;
          _context3.prev = 1;
          console.log('REQ /api/datosusuario/register ->', req.body);
          _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, contraseña = _req$body.contraseña, edad = _req$body.edad, genero = _req$body.genero, pais = _req$body.pais, ciudad = _req$body.ciudad; // ✅ Validaciones mínimas

          if (!(!nombre || !email || !contraseña)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            mensaje: 'Faltan campos requeridos (nombre, email, contraseña)'
          }));

        case 6:
          emailNorm = String(email).trim().toLowerCase(); // ✅ Email único (colección "usuarios")

          _context3.next = 9;
          return regeneratorRuntime.awrap(Usuario.findOne({
            email: emailNorm
          }).lean());

        case 9:
          existe = _context3.sent;

          if (!existe) {
            _context3.next = 12;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            mensaje: 'El email ya esta registrado'
          }));

        case 12:
          // 1) Crear doc de login (colección "usuarios")
          nuevoUsuarioLogin = new Usuario({
            email: emailNorm,
            contraseña: contraseña // ⚠️ Recomendado: usar bcrypt y guardar passwordHash

          });
          _context3.next = 15;
          return regeneratorRuntime.awrap(nuevoUsuarioLogin.save());

        case 15:
          guardadoLogin = _context3.sent;
          loginIdCreado = guardadoLogin._id; // 2) Crear perfil (colección "datosusuarios")

          nuevoUsuario = new DatosUsuario({
            nombre: String(nombre).trim(),
            email: emailNorm,
            contraseña: contraseña,
            // ⚠️ Si no lo necesitas aquí, elimínalo del schema
            edad: edad,
            genero: genero,
            pais: pais,
            ciudad: ciudad,
            usuario: guardadoLogin._id // referencia al doc de "usuarios"

          });
          _context3.next = 20;
          return regeneratorRuntime.awrap(nuevoUsuario.save());

        case 20:
          guardadoPerfil = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            mensaje: 'Usuario registrado correctamente',
            usuarioId: guardadoLogin._id,
            // <- para usar como "usuario_id" en el front
            datosUsuarioId: guardadoPerfil._id,
            nombre: guardadoPerfil.nombre,
            email: guardadoLogin.email
          }));

        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](1);
          console.error('Error al registrar usuario:', _context3.t0); // Duplicado índice único (por si hay unique en email)

          if (!(_context3.t0 && _context3.t0.code === 11000)) {
            _context3.next = 29;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            mensaje: 'El email ya esta registrado'
          }));

        case 29:
          if (!loginIdCreado) {
            _context3.next = 37;
            break;
          }

          _context3.prev = 30;
          _context3.next = 33;
          return regeneratorRuntime.awrap(Usuario.findByIdAndDelete(loginIdCreado));

        case 33:
          _context3.next = 37;
          break;

        case 35:
          _context3.prev = 35;
          _context3.t1 = _context3["catch"](30);

        case 37:
          return _context3.abrupt("return", res.status(500).json({
            mensaje: 'Error al registrar el usuario'
          }));

        case 38:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 24], [30, 35]]);
}); // Eliminar usuario por ID

router["delete"]('/:id', function _callee4(req, res) {
  var id, usuarioEliminado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(DatosUsuario.findByIdAndDelete(id));

        case 4:
          usuarioEliminado = _context4.sent;

          if (usuarioEliminado) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            mensaje: 'Usuario no encontrado'
          }));

        case 7:
          res.status(200).json({
            mensaje: 'Usuario eliminado correctamente'
          });
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.error(_context4.t0);
          res.status(500).json({
            mensaje: 'Error al eliminar el usuario'
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 10]]);
}); // Ruta para actualizar los datos de un usuario por su ID

router.put('/:id', function _callee5(req, res) {
  var _req$body2, _id, datosActualizados, usuarioActualizado;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // ✅ Extraemos _id para evitar errores (Mongo no permite actualizar _id)
          _req$body2 = req.body, _id = _req$body2._id, datosActualizados = _objectWithoutProperties(_req$body2, ["_id"]); // ✅ Actualizamos usando el ID de la URL y los datos sin _id

          _context5.next = 4;
          return regeneratorRuntime.awrap(DatosUsuario.findByIdAndUpdate(req.params.id, datosActualizados, {
            "new": true
          } // Para que retorne el objeto ya actualizado
          ));

        case 4:
          usuarioActualizado = _context5.sent;

          if (usuarioActualizado) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            mensaje: 'Usuario no encontrado'
          }));

        case 7:
          // ✅ Devolvemos mensaje de éxito
          res.json({
            mensaje: 'Usuario actualizado correctamente'
          });
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('Error al actualizar usuario:', _context5.t0);
          res.status(500).json({
            mensaje: 'Error al actualizar el usuario',
            error: _context5.t0
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;